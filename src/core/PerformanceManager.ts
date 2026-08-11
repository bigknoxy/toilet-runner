import * as THREE from 'three';
import { AdaptiveQuality } from './AdaptiveQuality';

export enum PerformanceTier {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

/**
 * What the player asked for in settings. AUTO hands the decision to the
 * benchmark plus the runtime watchdog; anything else pins the tier and disables
 * adaptation, because a player who picked LOW to save battery does not want the
 * game quietly promoting itself back to HIGH.
 */
export enum QualityPreference {
  AUTO = 'auto',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface PerformanceConfig {
  tier: PerformanceTier;
  shadows: boolean;
  postProcessing: boolean;
  particles: { collision: number; effects: number };
  pixelRatio: number;
  antialias: boolean;
  emojiFaces: boolean;
}

/** Lowest to highest. Index order is what AdaptiveQuality operates on. */
const TIER_ORDER: PerformanceTier[] = [
  PerformanceTier.LOW,
  PerformanceTier.MEDIUM,
  PerformanceTier.HIGH
];

/**
 * Benchmark render target size. Fixed rather than matched to the window so the
 * raw score means the same thing on every device; the device's real pixel load
 * is applied afterwards in _estimateNativeFps().
 */
const BENCH_SIZE = 512;
/** Frames rendered before timing starts, to pay for shader compile and buffer upload. */
const BENCH_WARMUP_FRAMES = 10;
const BENCH_FRAMES = 60;
/** Hard ceiling on how long the player waits at a black screen for this. */
const BENCH_BUDGET_MS = 250;

const PIXEL_RATIO_CAP = 2;

/**
 * Settings live under their own key rather than inside `toiletRunner_unifiedData`.
 * That blob is versioned player *stats* with its own migration path, and it is
 * loaded by StatsManager well after PerformanceManager.initialize() has already
 * had to pick a tier. A separate key removes the ordering hazard.
 */
const QUALITY_STORAGE_KEY = 'toiletRunner_quality';

export class PerformanceManager {
  private static tier: PerformanceTier = PerformanceTier.MEDIUM;
  /** Highest tier the boot benchmark judged this device capable of. */
  private static ceiling: PerformanceTier = PerformanceTier.MEDIUM;
  private static preference: QualityPreference = QualityPreference.AUTO;
  private static adaptive: AdaptiveQuality | null = null;
  private static onTierChange: ((config: PerformanceConfig) => void) | null = null;
  private static fpsSamples: number[] = [];

  static async initialize(): Promise<PerformanceConfig> {
    this.preference = this.loadPreference();

    if (this.preference === QualityPreference.AUTO) {
      await this.detectCapabilities();
    } else {
      this.tier = this.preference as unknown as PerformanceTier;
      this.ceiling = this.tier;
    }

    this.adaptive = new AdaptiveQuality(
      TIER_ORDER.indexOf(this.tier),
      TIER_ORDER.indexOf(this.ceiling)
    );

    return this.getConfig();
  }

  // ---------------------------------------------------------------- detection

  private static async detectCapabilities(): Promise<void> {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (!gl) {
      this.setDetected(PerformanceTier.LOW);
      return;
    }

    // A software rasteriser will happily render everything, just slowly enough
    // to be unplayable. This is the one renderer-string check worth making;
    // parsing actual GPU model names is a losing game (the string is absent
    // under Firefox's resistFingerprinting and randomised by privacy
    // extensions), so everything else is left to the benchmark.
    if (this.isSoftwareRenderer(gl)) {
      this.setDetected(PerformanceTier.LOW);
      return;
    }

    const score = await this.runBenchmark();

    let tier: PerformanceTier;
    // Thresholds are an estimated sustained framerate at this device's native
    // resolution. They are a starting guess on purpose - AdaptiveQuality
    // corrects a wrong one within a few seconds of real gameplay, which is why
    // this no longer needs to be conservative about unknown hardware.
    if (score >= 55) tier = PerformanceTier.HIGH;
    else if (score >= 30) tier = PerformanceTier.MEDIUM;
    else tier = PerformanceTier.LOW;

    // deviceMemory is a coarse, Chromium-only hint. Treated as a ceiling rather
    // than a verdict: a 2GB device can still render fine, but headroom for
    // post-processing render targets is genuinely tight.
    const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
    if (deviceMemory !== undefined && deviceMemory < 2 && tier === PerformanceTier.HIGH) {
      tier = PerformanceTier.MEDIUM;
    }

    this.setDetected(tier);
  }

  private static setDetected(tier: PerformanceTier): void {
    this.tier = tier;
    this.ceiling = tier;
  }

  private static isSoftwareRenderer(gl: WebGLRenderingContext | WebGL2RenderingContext): boolean {
    try {
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      if (!ext) return false;
      const renderer = String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) ?? '');
      return /swiftshader|llvmpipe|software|basic render/i.test(renderer);
    } catch {
      // Blocked by privacy settings. Absence of the string is not evidence of
      // anything, so fall through and let the benchmark decide.
      return false;
    }
  }

  /**
   * Estimated sustained FPS at this device's native render resolution.
   *
   * The previous version of this timed 50 bare `renderer.render()` calls at
   * 100x100. WebGL commands are queued asynchronously, so that loop returned
   * before the GPU had drawn anything - it measured JavaScript call overhead and
   * nothing else, which is why a flagship phone and a 2015 tablet scored alike.
   * This version draws real fill at a fixed size and blocks on readPixels so the
   * elapsed time actually includes GPU work.
   */
  private static async runBenchmark(): Promise<number> {
    let renderer: THREE.WebGLRenderer | null = null;
    const geometry = new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32);
    // Lambert to match what the game actually shades with, so the benchmark
    // exercises a comparable fragment cost rather than a flat unlit fill.
    const material = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(geometry, material);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);

    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
      renderer.setPixelRatio(1);
      renderer.setSize(BENCH_SIZE, BENCH_SIZE);

      scene.add(mesh);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1));
      camera.position.z = 2;

      const gl = renderer.getContext();
      const sync = new Uint8Array(4);
      // readPixels stalls the CPU until the GPU has drained its queue. Without
      // it every timing below would be measuring command submission again.
      const drain = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, sync);

      for (let i = 0; i < BENCH_WARMUP_FRAMES; i++) {
        mesh.rotation.x += 0.1;
        renderer.render(scene, camera);
      }
      drain();

      const start = performance.now();
      let frames = 0;
      while (frames < BENCH_FRAMES) {
        mesh.rotation.x += 0.1;
        mesh.rotation.y += 0.1;
        renderer.render(scene, camera);
        frames++;
        // Bail out on slow hardware rather than making it wait the longest.
        if (frames % 10 === 0 && performance.now() - start > BENCH_BUDGET_MS) break;
      }
      drain();
      const elapsed = performance.now() - start;

      if (elapsed <= 0) return 0;
      const benchFps = (frames / elapsed) * 1000;
      return this.estimateNativeFps(benchFps);
    } catch {
      // A failed benchmark is not a fast device. Assume the worst and let the
      // runtime watchdog promote it if gameplay proves otherwise.
      return 0;
    } finally {
      geometry.dispose();
      material.dispose();
      scene.clear();
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      }
    }
  }

  /**
   * Scale the fixed-resolution benchmark result by how many more (or fewer)
   * pixels this device actually has to fill. A phone at devicePixelRatio 3 can
   * post a great score at 512x512 and still miss 60fps on its own screen.
   */
  private static estimateNativeFps(benchFps: number): number {
    const dpr = Math.min(window.devicePixelRatio || 1, PIXEL_RATIO_CAP);
    const nativePixels = window.innerWidth * window.innerHeight * dpr * dpr;
    if (nativePixels <= 0) return benchFps;
    return benchFps * ((BENCH_SIZE * BENCH_SIZE) / nativePixels);
  }

  // ------------------------------------------------------------- adaptation

  /**
   * Register the callback that applies a live tier change. Only the knobs that
   * are safe to change mid-run are re-applied (pixel ratio, post-processing);
   * particle budgets and material quality are baked in at construction and stay
   * at whatever the boot tier chose.
   */
  static setOnTierChange(callback: (config: PerformanceConfig) => void): void {
    this.onTierChange = callback;
  }

  /**
   * Feed one gameplay frame. Must only be called while actually playing - menus
   * render almost nothing and would read as free headroom.
   */
  static updateFPS(delta: number): void {
    const fps = delta > 0 ? Math.round(1 / delta) : 60;
    this.fpsSamples.push(fps);
    if (this.fpsSamples.length > 30) this.fpsSamples.shift();

    if (!this.adaptive || this.preference !== QualityPreference.AUTO) return;

    const next = this.adaptive.update(delta);
    if (next === null) return;

    this.tier = TIER_ORDER[next];
    this.fpsSamples = [];
    this.onTierChange?.(this.getConfig());
  }

  /** Discard frame history when leaving gameplay. */
  static suspendAdaptation(): void {
    this.adaptive?.reset();
    this.fpsSamples = [];
  }

  static getAverageFPS(): number {
    if (this.fpsSamples.length === 0) return 60;
    return Math.round(
      this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length
    );
  }

  // ------------------------------------------------------------- preference

  static getPreference(): QualityPreference {
    return this.preference;
  }

  /**
   * Apply a settings change. Returns the config to render with. Switching to
   * AUTO restores the benchmark's verdict rather than re-running it - a second
   * benchmark mid-session would fight with whatever else is on screen.
   */
  static setPreference(preference: QualityPreference): PerformanceConfig {
    this.preference = preference;

    if (preference === QualityPreference.AUTO) {
      this.tier = this.ceiling;
    } else {
      this.tier = preference as unknown as PerformanceTier;
    }

    this.adaptive = new AdaptiveQuality(
      TIER_ORDER.indexOf(this.tier),
      TIER_ORDER.indexOf(this.ceiling)
    );

    try {
      localStorage.setItem(QUALITY_STORAGE_KEY, preference);
    } catch {
      // Private browsing or a full quota. The setting just will not persist.
    }

    const config = this.getConfig();
    this.onTierChange?.(config);
    return config;
  }

  private static loadPreference(): QualityPreference {
    try {
      const stored = localStorage.getItem(QUALITY_STORAGE_KEY);
      if (
        stored === QualityPreference.LOW ||
        stored === QualityPreference.MEDIUM ||
        stored === QualityPreference.HIGH
      ) {
        return stored;
      }
    } catch {
      // localStorage unavailable; AUTO is the right fallback anyway.
    }
    return QualityPreference.AUTO;
  }

  // ------------------------------------------------------------------ config

  static getConfig(): PerformanceConfig {
    switch (this.tier) {
      case PerformanceTier.LOW:
        return {
          tier: this.tier,
          shadows: false,
          postProcessing: false,
          particles: { collision: 15, effects: 0 },
          pixelRatio: 1,
          antialias: false,
          emojiFaces: false
        };
      case PerformanceTier.MEDIUM:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 25, effects: 15 },
          pixelRatio: 1.5,
          antialias: true,
          emojiFaces: true
        };
      case PerformanceTier.HIGH:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 40, effects: 25 },
          pixelRatio: PIXEL_RATIO_CAP,
          antialias: true,
          emojiFaces: true
        };
    }
  }

  static getCurrentTier(): PerformanceTier {
    return this.tier;
  }

  static setTier(tier: PerformanceTier): void {
    this.tier = tier;
    this.fpsSamples = [];
  }
}
