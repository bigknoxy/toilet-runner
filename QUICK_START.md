# Quick Start Implementation Guide

## Implementation Order & Dependencies

```
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: PerformanceManager                                    │
│  (Foundation - no dependencies)                                 │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: MaterialFactory & LightingManager                     │
│  (Build on PerformanceManager)                                  │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: ParticleSystem                                         │
│  (Independent, needs scene reference)                            │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│  STEP 4: PostProcessingManager                                  │
│  (Needs SceneManager renderer/camera/scene)                     │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│  STEP 5: EmojiTextureAtlas + ObstacleManager update            │
│  (Independent, integrates with obstacles)                       │
└─────────────────────────────────────────────────────────────────┘
                                ↓
┌─────────────────────────────────────────────────────────────────┐
│  STEP 6: Integration in main.ts                                 │
│  (Wire everything together)                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## STEP 1: PerformanceManager (Foundation)

Create `src/core/PerformanceManager.ts`:

```typescript
import * as THREE from 'three';

export enum PerformanceTier {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  ULTRA = 'ultra'
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

export class PerformanceManager {
  private static tier: PerformanceTier = PerformanceTier.MEDIUM;
  private static currentFPS: number = 60;
  private static fpsSamples: number[] = [];

  static async initialize(): Promise<PerformanceConfig> {
    await this.detectCapabilities();
    console.log('🎮 Performance Tier:', this.tier);
    return this.getConfig();
  }

  private static async detectCapabilities(): Promise<void> {
    // WebGL 2 check
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      this.tier = PerformanceTier.LOW;
      return;
    }

    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;

    if (isMobile || hasLowMemory) {
      this.tier = PerformanceTier.LOW;
    } else {
      // Desktop - run quick benchmark
      const score = await this.runQuickBenchmark();
      if (score < 20) this.tier = PerformanceTier.LOW;
      else if (score < 40) this.tier = PerformanceTier.MEDIUM;
      else if (score < 60) this.tier = PerformanceTier.HIGH;
      else this.tier = PerformanceTier.ULTRA;
    }
  }

  private static async runQuickBenchmark(): Promise<number> {
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(100, 100);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 64, 8);
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const startTime = performance.now();
    const iterations = 50;

    for (let i = 0; i < iterations; i++) {
      mesh.rotation.x += 0.1;
      renderer.render(scene, camera);
    }

    const score = (iterations / (performance.now() - startTime)) * 1000;
    renderer.dispose();
    geometry.dispose();
    material.dispose();

    return score;
  }

  static updateFPS(delta: number): void {
    const fps = Math.round(1 / delta);
    this.fpsSamples.push(fps);
    if (this.fpsSamples.length > 30) this.fpsSamples.shift();
  }

  static getAverageFPS(): number {
    if (this.fpsSamples.length === 0) return 60;
    return Math.round(
      this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length
    );
  }

  static getConfig(): PerformanceConfig {
    switch (this.tier) {
      case PerformanceTier.LOW:
        return {
          tier: this.tier,
          shadows: false,
          postProcessing: false,
          particles: { collision: 10, effects: 0 },
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
          pixelRatio: 2,
          antialias: true,
          emojiFaces: true
        };
      case PerformanceTier.ULTRA:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 50, effects: 35 },
          pixelRatio: 2,
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
```

---

## STEP 2: MaterialFactory (PBR Materials)

Create `src/game/visual/MaterialFactory.ts`:

```typescript
import * as THREE from 'three';
import { PerformanceTier } from '../../core/PerformanceManager';

export class MaterialFactory {
  private static materials: Map<string, THREE.Material> = new Map();
  private static quality: PerformanceTier = PerformanceTier.MEDIUM;

  static setQuality(quality: PerformanceTier): void {
    if (this.quality === quality) return;
    this.disposeAll();
    this.quality = quality;
  }

  // Track material (grass tiles)
  static getTrackMaterial(texture?: THREE.Texture): THREE.Material {
    const key = `track_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0x88cc88,
          map: texture,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0x88cc88,
          map: texture,
          roughness: config.roughness,
          metalness: config.metalness,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  // Obstacle (poop) material
  static getObstacleMaterial(): THREE.Material {
    const key = `obstacle_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0x6B4423,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0x6B4423,
          roughness: config.roughness + 0.2,
          metalness: 0,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  // Toilet decoration material
  static getToiletMaterial(): THREE.Material {
    const key = `toilet_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0xFFFFFF,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0xFFFFFF,
          roughness: config.roughness - 0.1,
          metalness: config.metalness,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  // Player (TP roll) material
  static getPlayerMaterial(texture?: THREE.Texture): THREE.Material {
    const key = `player_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0xFFFFF0,
          map: texture,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0xFFFFF0,
          map: texture,
          roughness: config.roughness + 0.1,
          metalness: 0,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  // White material for eyes/smile
  static getWhiteMaterial(): THREE.Material {
    const key = `white_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const mat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      side: THREE.FrontSide
    });

    this.materials.set(key, mat);
    return mat;
  }

  private static getMaterialConfig() {
    switch (this.quality) {
      case PerformanceTier.LOW:
        return { roughness: 1.0, metalness: 0.0, envMapIntensity: 0.0 };
      case PerformanceTier.MEDIUM:
        return { roughness: 0.8, metalness: 0.05, envMapIntensity: 0.2 };
      case PerformanceTier.HIGH:
        return { roughness: 0.6, metalness: 0.1, envMapIntensity: 0.5 };
      case PerformanceTier.ULTRA:
        return { roughness: 0.5, metalness: 0.15, envMapIntensity: 0.8 };
    }
  }

  static disposeAll(): void {
    this.materials.forEach(mat => mat.dispose());
    this.materials.clear();
  }
}
```

---

## STEP 3: ParticleSystem (Collision Effects)

Create `src/game/visual/ParticleSystem.ts`:

```typescript
import * as THREE from 'three';

export interface ParticleConfig {
  maxParticles: number;
  colors: number[];
  size: { min: number; max: number };
  speed: { min: number; max: number };
  lifetime: number;
  gravity: number;
}

export interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  lifetime: number;
  maxLifetime: number;
  active: boolean;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private tempVector = new THREE.Vector3();

  constructor(
    private scene: THREE.Scene,
    private config: ParticleConfig
  ) {
    this.initializePool();
  }

  private initializePool(): void {
    const geometry = new THREE.PlaneGeometry(
      this.config.size.max,
      this.config.size.max
    );

    for (let i = 0; i < this.config.maxParticles; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      mesh.position.set(0, -100, 0);
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(),
        lifetime: 0,
        maxLifetime: 0,
        active: false
      });
    }
  }

  emit(position: THREE.Vector3, count: number = 10): void {
    let emitted = 0;
    for (const particle of this.particles) {
      if (!particle.active) {
        this.resetParticle(particle, position);
        particle.active = true;
        particle.mesh.visible = true;
        emitted++;
        if (emitted >= count) break;
      }
    }
  }

  private resetParticle(particle: Particle, position: THREE.Vector3): void {
    particle.mesh.position.copy(position);

    // Random explosion direction (upward hemisphere)
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.5;
    const speed = THREE.MathUtils.randFloat(
      this.config.speed.min,
      this.config.speed.max
    );

    particle.velocity.set(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.cos(phi) * speed + speed * 0.5,
      Math.sin(phi) * Math.sin(theta) * speed
    );

    particle.maxLifetime = this.config.lifetime * (0.7 + Math.random() * 0.6);
    particle.lifetime = particle.maxLifetime;

    // Random color from config
    const colorHex = this.config.colors[
      Math.floor(Math.random() * this.config.colors.length)
    ];
    (particle.mesh.material as THREE.MeshBasicMaterial).color.setHex(colorHex);

    // Random scale and rotation
    const scale = THREE.MathUtils.randFloat(
      this.config.size.min / this.config.size.max,
      1.0
    );
    particle.mesh.scale.setScalar(scale);
    particle.mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
  }

  update(delta: number): void {
    for (const particle of this.particles) {
      if (!particle.active) continue;

      particle.lifetime -= delta;

      // Apply gravity
      particle.velocity.y -= this.config.gravity * delta;

      // Update position
      this.tempVector.copy(particle.velocity).multiplyScalar(delta);
      particle.mesh.position.add(this.tempVector);

      // Rotate
      particle.mesh.rotation.x += delta * 3;
      particle.mesh.rotation.y += delta * 5;

      // Fade out
      const opacity = Math.max(0, particle.lifetime / particle.maxLifetime);
      (particle.mesh.material as THREE.MeshBasicMaterial).opacity = opacity;

      // Deactivate if dead
      if (particle.lifetime <= 0) {
        particle.active = false;
        particle.mesh.visible = false;
        particle.mesh.position.set(0, -100, 0);
      }
    }
  }

  reset(): void {
    for (const particle of this.particles) {
      if (particle.active) {
        particle.active = false;
        particle.mesh.visible = false;
        particle.mesh.position.set(0, -100, 0);
      }
    }
  }

  dispose(): void {
    for (const particle of this.particles) {
      this.scene.remove(particle.mesh);
      particle.mesh.geometry.dispose();
      (particle.mesh.material as THREE.Material).dispose();
    }
    this.particles = [];
  }

  getActiveCount(): number {
    return this.particles.filter(p => p.active).length;
  }
}

// Particle presets for different effects
export const ParticlePresets: Record<string, ParticleConfig> = {
  collision: {
    maxParticles: 50,
    colors: [0xFFFFFF, 0xF5F5DC, 0x8B7355, 0x6B4423],
    size: { min: 0.08, max: 0.25 },
    speed: { min: 2, max: 6 },
    lifetime: 0.6,
    gravity: 8
  },
  scoreSparkle: {
    maxParticles: 30,
    colors: [0xFFD700, 0xFFA500, 0xFFFF00, 0xFFFFFF],
    size: { min: 0.05, max: 0.15 },
    speed: { min: 1, max: 3 },
    lifetime: 0.8,
    gravity: 2
  },
  laneTrail: {
    maxParticles: 20,
    colors: [0xADD8E6, 0x87CEEB, 0xB0E0E6],
    size: { min: 0.03, max: 0.1 },
    speed: { min: 0.5, max: 1.5 },
    lifetime: 0.3,
    gravity: 1
  }
};
```

---

## STEP 4: PostProcessingManager (Visual Effects)

Create `src/game/visual/PostProcessingManager.ts`:

```typescript
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

interface PostProcessingConfig {
  enabled: boolean;
  bloom?: { strength: number; threshold: number; radius: number };
  vignette?: { darkness: number; offset: number };
  fxaa?: boolean;
}

export class PostProcessingManager {
  private composer: EffectComposer | null = null;
  private renderPass: RenderPass | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private fxaaPass: ShaderPass | null = null;

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera
  ) {}

  async initialize(config: PostProcessingConfig): Promise<void> {
    if (!config.enabled) return;

    // Lazy import post-processing modules
    const {
      EffectComposer: Composer
    } = await import('three/examples/jsm/postprocessing/EffectComposer.js');

    const {
      RenderPass
    } = await import('three/examples/jsm/postprocessing/RenderPass.js');

    this.composer = new Composer(this.renderer);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Base render pass
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    // Bloom (soft glow)
    if (config.bloom) {
      const { UnrealBloomPass } = await import(
        'three/examples/jsm/postprocessing/UnrealBloomPass.js'
      );
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        config.bloom.strength,
        config.bloom.radius,
        config.bloom.threshold
      );
      this.composer.addPass(this.bloomPass);
    }

    // FXAA (anti-aliasing)
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
  }

  isEnabled(): boolean {
    return this.composer !== null;
  }
}
```

---

## STEP 5: Integration in main.ts

Update `src/main.ts` with new managers:

```typescript
import '../styles/modals.css';
import * as THREE from 'three';
import { SceneManager } from './core/SceneManager';
import { GameLoop } from './core/GameLoop';
import { GameState } from './core/GameState';
import { LeaderboardManager } from './core/LeaderboardManager';
import { PerformanceManager, PerformanceTier } from './core/PerformanceManager';

// Game logic
import { RunnerController } from './game/RunnerController';
import { TrackManager } from './game/TrackManager';
import { ObstacleManager } from './game/ObstacleManager';
import { CollisionSystem } from './game/CollisionSystem';
import { AudioManager } from './game/AudioManager';
import { EnvironmentManager } from './game/EnvironmentManager';
import { CameraManager } from './game/CameraManager';

// Visual effects (NEW)
import { PostProcessingManager } from './game/visual/PostProcessingManager';
import { ParticleSystem, ParticlePresets } from './game/visual/ParticleSystem';
import { MaterialFactory } from './game/visual/MaterialFactory';
import { LightingManager } from './game/visual/LightingManager';

// Input and UI
import { InputManager } from './input/InputManager';
import { UIManager } from './ui/UIManager';
import { AudioControls } from './ui/AudioControls';

const BASE_SPEED = 10;
const SPEED_INCREASE = 0.5;
const SCORE_RATE = 10;
const SCORE_MILESTONE = 100;

class ToiletRunner {
  private sceneManager: SceneManager;
  private gameLoop: GameLoop;
  private performanceConfig: any;

  private runner: RunnerController;
  private track: TrackManager;
  private obstacles: ObstacleManager;
  private collision: CollisionSystem;
  private audioManager: AudioManager;
  private environment: EnvironmentManager;
  private cameraManager: CameraManager;
  private input: InputManager;
  private ui: UIManager;
  private audioControls: AudioControls;
  private leaderboard: LeaderboardManager;
  private currentGameState: GameState = GameState.MENU;
  private score = 0;

  // NEW: Visual effects managers
  private postProcessing: PostProcessingManager;
  private particles: ParticleSystem;
  private lighting: LightingManager;

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    console.log('🎮 ToiletRunner: Initializing...');

    // STEP 1: Performance detection
    this.performanceConfig = await PerformanceManager.initialize();
    console.log('📊 Performance config:', this.performanceConfig);

    // STEP 2: Core systems
    this.sceneManager = new SceneManager();
    this.sceneManager.configureRenderer(this.performanceConfig);
    this.gameLoop = new GameLoop();

    // STEP 3: Visual systems
    this.setupVisualEffects();

    // STEP 4: Game logic
    this.setupGameLogic();

    // STEP 5: UI and input
    this.setupUIAndInput();

    // STEP 6: Start game loop
    this.gameLoop.registerSystem(this.update.bind(this));
    this.gameLoop.start();

    console.log('✅ ToiletRunner initialized');
  }

  private setupVisualEffects(): void {
    const scene = this.sceneManager.getScene();
    const camera = this.sceneManager.getCamera();
    const renderer = this.sceneManager.getRenderer();

    // Material factory
    MaterialFactory.setQuality(this.performanceConfig.tier);

    // Lighting
    this.lighting = new LightingManager(scene);
    this.lighting.setQuality(this.performanceConfig.tier);

    // Post-processing
    this.postProcessing = new PostProcessingManager(renderer, scene, camera);
    this.setupPostProcessing();

    // Particles
    const particleConfig = this.performanceConfig.particles;
    this.particles = new ParticleSystem(scene, {
      ...ParticlePresets.collision,
      maxParticles: particleConfig.collision
    });
  }

  private setupPostProcessing(): void {
    if (!this.performanceConfig.postProcessing) return;

    this.postProcessing.initialize({
      enabled: true,
      bloom: {
        strength: 0.3,
        threshold: 0.8,
        radius: 0.5
      },
      fxaa: true
    });
  }

  private setupGameLogic(): void {
    const scene = this.sceneManager.getScene();

    // Use MaterialFactory for all materials
    this.runner = new RunnerController(scene);
    this.track = new TrackManager(scene);
    this.obstacles = new ObstacleManager(scene, this.track);
    this.collision = new CollisionSystem();
    this.audioManager = new AudioManager();
    this.environment = new EnvironmentManager(scene);
    this.cameraManager = new CameraManager(this.sceneManager.getCamera());
    this.leaderboard = new LeaderboardManager();

    // Apply texture with MaterialFactory
    const texture = this.environment.getTileTexture();
    const trackMaterial = MaterialFactory.getTrackMaterial(texture);
    this.track.applyTexture(trackMaterial);
  }

  private setupUIAndInput(): void {
    this.input = new InputManager(
      this.handleLaneChange.bind(this),
      this.togglePause.bind(this)
    );
    this.input.setup();

    this.ui = new UIManager();
    this.ui.setOnPlayCallback(this.startGame.bind(this));
    this.ui.setOnRestartCallback(this.restartGame.bind(this));
    this.ui.setOnPauseCallback(this.handlePause.bind(this));
    this.ui.setOnResumeCallback(this.handleResume.bind(this));
    this.ui.setOnViewLeaderboardCallback(this.showLeaderboard.bind(this));
    this.ui.setOnBackToGameOverCallback(this.backToGameOver.bind(this));
    this.ui.setGameState(this.currentGameState);

    this.audioControls = new AudioControls(this.audioManager);
  }

  private update(delta: number): void {
    // Update FPS tracking
    PerformanceManager.updateFPS(delta);

    if (this.currentGameState === GameState.PLAYING) {
      const speedIncrease = Math.floor(this.score / 10) * SPEED_INCREASE;
      const gameSpeed = BASE_SPEED + speedIncrease;

      this.runner.setSpeed(gameSpeed);
      this.runner.update(delta);
      this.track.update(delta, gameSpeed);
      this.obstacles.update(delta, gameSpeed, this.score);
      this.environment.update(delta, gameSpeed);
      this.cameraManager.update(delta);
      this.particles.update(delta);

      // Collision check
      if (this.collision.checkPlayerVsObstacles(
        this.runner.getMesh(),
        this.obstacles
      )) {
        this.handleCollision();
        this.endGame();
        return;
      }

      // Score calculation
      const prevScore = Math.floor(this.score);
      this.score += SCORE_RATE * delta;
      const newScore = Math.floor(this.score);

      this.ui.updateScore(this.score);

      // Score milestone effect
      if (Math.floor(newScore / SCORE_MILESTONE) > Math.floor(prevScore / SCORE_MILESTONE)) {
        this.audioManager.playScoreMilestone(newScore);
        this.ui.triggerScoreFlash();
        this.handleScoreMilestone();
      }

    } else if (this.currentGameState === GameState.PAUSED) {
      this.sceneManager.render();
      return;
    }

    this.sceneManager.render();
  }

  private handleCollision(): void {
    this.audioManager.playCollision();
    this.cameraManager.triggerShake();

    // Emit collision particles
    const playerPos = this.runner.getPosition();
    this.particles.emit(playerPos, this.performanceConfig.particles.collision);
  }

  private handleScoreMilestone(): void {
    const playerPos = this.runner.getPosition();
    // Emit sparkle particles above player
    const sparklePos = playerPos.clone();
    sparklePos.y += 1;
    this.particles.emit(sparklePos, this.performanceConfig.particles.effects);
  }

  private handleLaneChange(direction: -1 | 1): void {
    if (this.currentGameState === GameState.PLAYING) {
      if (direction === -1) {
        this.runner.moveLeft();
      } else {
        this.runner.moveRight();
      }
      this.audioManager.playLaneChange();
      this.cameraManager.triggerShake();

      // Emit trail particles
      const playerPos = this.runner.getPosition();
      playerPos.z += 0.5;
      this.particles.emit(playerPos, 3);
    }
  }

  // ... rest of methods (startGame, endGame, reset, etc.) remain the same ...

  public startGame(): void {
    console.log('startGame: Starting game');
    this.reset();
    this.currentGameState = GameState.PLAYING;
    this.ui.setGameState(this.currentGameState);
    this.audioManager.playStartGame();
  }

  private endGame(): void {
    this.currentGameState = GameState.GAMEOVER;
    this.audioManager.playGameOver();

    this.leaderboard.addScore(this.score);
    const topScores = this.leaderboard.getTopScores();
    this.ui.updateLeaderboardFull(topScores);
    this.ui.showGameOverScreen(this.score);
  }

  public restartGame(): void {
    this.startGame();
  }

  private reset(): void {
    this.runner.reset();
    this.track.reset();
    this.obstacles.reset();
    this.collision.reset();
    this.environment.reset();
    this.cameraManager.reset();
    this.particles.reset();
    this.score = 0;
    this.audioManager.setLastScoreMilestone(0);
    this.ui.updateScore(this.score);
  }

  private togglePause(): void {
    if (this.currentGameState === GameState.PLAYING) {
      this.currentGameState = GameState.PAUSED;
      this.ui.setGameState(this.currentGameState);
    } else if (this.currentGameState === GameState.PAUSED) {
      this.currentGameState = GameState.PLAYING;
      this.ui.setGameState(this.currentGameState);
    }
  }

  private handlePause(): void {
    this.togglePause();
    this.audioManager.playPause();
  }

  private handleResume(): void {
    this.togglePause();
    this.audioManager.playResume();
  }

  public showLeaderboard(): void {
    this.currentGameState = GameState.LEADERBOARD;
    this.ui.setGameState(this.currentGameState);
  }

  public backToGameOver(): void {
    this.currentGameState = GameState.GAMEOVER;
    this.ui.showGameOverScreen(this.score);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const game = new ToiletRunner();
  console.log('🎮 Toilet Runner - Visual Polish Features Added');
});
```

---

## Quick Integration Checklist

- [ ] Create `src/core/PerformanceManager.ts`
- [ ] Create `src/game/visual/` directory
- [ ] Create `MaterialFactory.ts`
- [ ] Create `ParticleSystem.ts`
- [ ] Create `PostProcessingManager.ts`
- [ ] Update `main.ts` with new initialization
- [ ] Update `SceneManager.render()` to check post-processing
- [ ] Test on mobile (LOW tier)
- [ ] Test on desktop (HIGH tier)
- [ ] Verify FPS counters and auto-tier adjustment
