import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

interface PostProcessingConfig {
  enabled: boolean;
  bloom?: { strength: number; threshold: number; radius: number };
  fxaa?: boolean;
  vignette?: { offset: number; darkness: number };
  /**
   * Multiplier on the bloom render target size. Bloom is the most fill-rate
   * hungry pass here, so weaker devices render it at half size and let the
   * upscale hide it. Previously decided by sniffing the user agent, which meant
   * every phone got the cheap path no matter how fast it was.
   */
  bloomResolutionScale?: number;
}

export class PostProcessingManager {
  private composer: EffectComposer | null = null;
  private renderPass: RenderPass | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private fxaaPass: ShaderPass | null = null;
  private vignettePass: ShaderPass | null = null;
  private outputPass: OutputPass | null = null;

  /**
   * Resting vignette strength, as configured. The pass is driven to
   * `_vignetteBase + _vignettePulse` every frame.
   *
   * The vignette used to sit at a constant heavy value, darkening roughly a
   * quarter of the screen on every frame of every run. In a game where
   * obstacles have to be read at the edge of vision while approaching, that is
   * a permanent tax on the reaction window and it buys nothing, because an
   * effect that never changes stops being seen at all. Held low as ambient
   * framing, it now spikes on the events worth punctuating.
   */
  private _vignetteBase = 0;
  private _vignettePulse = 0;

  /** Seconds for a pulse to fall back to the resting value. */
  private static readonly PULSE_DECAY = 0.45;

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera
  ) {}

  async initialize(config: PostProcessingConfig): Promise<void> {
    if (!config.enabled) return;

    const {
      EffectComposer: Composer
    } = await import('three/examples/jsm/postprocessing/EffectComposer.js');

    this.composer = new Composer(this.renderer);
    // Match the renderer rather than always maxing out: the tier already
    // decided how many pixels this device should be asked to fill, and the
    // composer running hotter than the renderer wastes exactly that saving.
    this.composer.setPixelRatio(this.renderer.getPixelRatio());

    const {
      RenderPass
    } = await import('three/examples/jsm/postprocessing/RenderPass.js');

    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    if (config.bloom) {
      const { UnrealBloomPass } = await import(
        'three/examples/jsm/postprocessing/UnrealBloomPass.js'
      );

      const scale = config.bloomResolutionScale ?? 1;
      const bloomResolution = new THREE.Vector2(
        window.innerWidth * scale,
        window.innerHeight * scale
      );

      this.bloomPass = new UnrealBloomPass(
        bloomResolution,
        config.bloom.strength,
        config.bloom.radius,
        config.bloom.threshold
      );
      this.composer.addPass(this.bloomPass);
    }

    if (config.fxaa) {
      const { ShaderPass } = await import(
        'three/examples/jsm/postprocessing/ShaderPass.js'
      );

      const { FXAAShader } = await import(
        'three/examples/jsm/shaders/FXAAShader.js'
      );

      this.fxaaPass = new ShaderPass(FXAAShader);
      this.fxaaPass.uniforms['resolution'].value.set(
        1 / window.innerWidth,
        1 / window.innerHeight
      );
      this.composer.addPass(this.fxaaPass);
    }

    // Whether to run the vignette is the caller's decision, made from the
    // performance tier. It used to be gated on a user-agent test, so a capable
    // phone lost the effect purely for being a phone while the same GPU class
    // in a laptop kept it.
    if (config.vignette) {
      this.vignettePass = new ShaderPass(VignetteShader);
      this.vignettePass.uniforms['offset'].value = config.vignette.offset;
      this._vignetteBase = config.vignette.darkness;
      this.vignettePass.uniforms['darkness'].value = this._vignetteBase;
      this.composer.addPass(this.vignettePass);
    }

    // Add output pass
    const { OutputPass } = await import('three/examples/jsm/postprocessing/OutputPass.js');
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);
  }

  /**
   * Darken the vignette by `amount` on top of the resting value, then let it
   * fall back. Repeated hits stack rather than restart, so a near-miss during
   * an existing pulse still reads, but the total is clamped so a burst of
   * events cannot black out the corners.
   */
  pulseVignette(amount: number): void {
    if (!this.vignettePass) return;
    this._vignettePulse = Math.min(this._vignettePulse + amount, 0.45);
  }

  /** Advance time-based effects. Safe to call when post-processing is disabled. */
  update(delta: number): void {
    if (!this.vignettePass || this._vignettePulse <= 0) return;

    this._vignettePulse = Math.max(
      0,
      this._vignettePulse - delta / PostProcessingManager.PULSE_DECAY
    );
    this.vignettePass.uniforms['darkness'].value =
      this._vignetteBase + this._vignettePulse;
  }

  render(): void {
    if (this.composer) {
      this.composer.render();
    }
  }

  resize(width: number, height: number): void {
    if (this.composer) {
      this.composer.setSize(width, height);
    }
    if (this.fxaaPass) {
      this.fxaaPass.uniforms['resolution'].value.set(1 / width, 1 / height);
    }
  }

  dispose(): void {
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }
    // Drop the pass refs too, so a tier downgrade that disposes the composer
    // also stops update() writing uniforms into passes nothing renders.
    this.renderPass = null;
    this.bloomPass = null;
    this.fxaaPass = null;
    this.vignettePass = null;
    this.outputPass = null;
    this._vignettePulse = 0;
  }

  isEnabled(): boolean {
    return this.composer !== null;
  }

}

// Vignette shader for post-processing effect
const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    offset: { value: 0.5 },
    darkness: { value: 0.3 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5, 0.5));
      float vignette = smoothstep(offset, offset - darkness, dist);
      color.rgb *= vignette;
      gl_FragColor = color;
    }
  `
};
