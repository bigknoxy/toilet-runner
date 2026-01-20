# Toilet Runner - Visual Polish Architecture Review

## Executive Summary

The current architecture follows a solid **Manager Pattern** with clean separation of concerns, object pooling, and a centralized game loop. The codebase is well-structured for a junior developer to maintain and extend. Below are specific recommendations for integrating visual polish features.

---

## Current Architecture Analysis

### Strengths

1. **Manager Pattern**: Clear separation of concerns with dedicated managers (SceneManager, EnvironmentManager, ObstacleManager, etc.)
2. **Object Pooling**: Already implemented for obstacles (MAX_OBSTACLES = 50) and decorations (MAX_DECORATIONS = 20)
3. **Centralized Game Loop**: Single `GameLoop` class managing delta time and system registration
4. **Loose Coupling**: Systems communicate through callbacks and direct method calls without tight dependencies
5. **Type Safety**: TypeScript with proper interfaces (e.g., `ObstacleInstance`, `Decoration`)
6. **Resource Management**: Explicit dispose patterns in TrackManager

### Weaknesses / Areas for Improvement

1. **No Performance Tiers**: No built-in system for adjusting quality based on device capabilities
2. **No Effects Pipeline**: Visual effects are scattered (e.g., camera shake in CameraManager, but no particle system)
3. **Mixed Material Types**: Currently using `MeshLambertMaterial` throughout - inconsistent upgrade path to PBR
4. **No Shader/Post-Processing Integration**: SceneManager doesn't support composer pipelines
5. **Limited Config System**: Configuration is hardcoded constants across files

---

## Recommended Directory Structure

```
src/
├── core/
│   ├── GameState.ts           (existing)
│   ├── GameLoop.ts             (existing)
│   ├── SceneManager.ts         (existing - modify for composer)
│   ├── LeaderboardManager.ts   (existing)
│   └── PerformanceManager.ts   (NEW - device capability detection)
├── game/
│   ├── RunnerController.ts     (existing)
│   ├── TrackManager.ts         (existing)
│   ├── ObstacleManager.ts      (existing - modify for emoji faces)
│   ├── CollisionSystem.ts      (existing)
│   ├── EnvironmentManager.ts   (existing)
│   ├── CameraManager.ts        (existing)
│   ├── AudioManager.ts        (existing)
│   └── visual/                 (NEW - visual effects subsystem)
│       ├── PostProcessingManager.ts    (bloom, vignette, FXAA)
│       ├── ParticleSystem.ts           (collision effects)
│       ├── LightingManager.ts           (enhanced lights/shadows)
│       └── MaterialFactory.ts           (PBR material creation/pooling)
├── input/
│   └── InputManager.ts         (existing)
├── ui/
│   ├── UIManager.ts            (existing)
│   └── SettingsPanel.ts        (NEW - graphics quality settings)
├── config/
│   ├── graphics.config.ts      (NEW - graphics presets)
│   └── particles.config.ts     (NEW - particle configurations)
└── main.ts                     (existing - modify initialization)
```

---

## Feature 1: Three.js Post-Processing Pipeline

### Architecture Recommendation

Create a new `PostProcessingManager` that follows the existing manager pattern but is **optional** and **lazy-loaded** based on performance tier.

```typescript
// src/game/visual/PostProcessingManager.ts
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

interface PostProcessingConfig {
  enabled: boolean;
  bloom: {
    enabled: boolean;
    strength: number;
    threshold: number;
    radius: number;
  };
  vignette: {
    enabled: boolean;
    darkness: number;
    offset: number;
  };
  fxaa: {
    enabled: boolean;
  };
}

export class PostProcessingManager {
  private composer: EffectComposer | null = null;
  private renderPass: RenderPass | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private vignettePass: ShaderPass | null = null;
  private fxaaPass: ShaderPass | null = null;

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera
  ) {}

  initialize(config: PostProcessingConfig): void {
    if (!config.enabled) return;

    this.composer = new EffectComposer(this.renderer);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Base render pass
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    // Optional passes based on config
    if (config.bloom.enabled) {
      this.setupBloom(config.bloom);
    }

    if (config.vignette.enabled) {
      this.setupVignette(config.vignette);
    }

    if (config.fxaa.enabled) {
      this.setupFXAA();
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
  }

  updateConfig(config: Partial<PostProcessingConfig>): void {
    // Dynamic config updates without reinitializing
  }

  dispose(): void {
    if (this.composer) {
      this.composer.dispose();
    }
  }

  // Private setup methods for each effect...
}
```

### Integration Points

1. **SceneManager Modification**: Add `PostProcessingManager` as optional member
2. **main.ts Integration**: Initialize with performance tier detection
3. **Performance Toggle**: Add to `PerformanceManager` for runtime enable/disable

### Mobile Optimization Strategy

| Device Tier | Post-Processing |
|--------------|-----------------|
| Low (FPS < 30) | Disabled |
| Medium (FPS 30-45) | FXAA only |
| High (FPS 45+) | Bloom + Vignette + FXAA |

---

## Feature 2: PBR Material Upgrades

### Architecture Recommendation

Create a `MaterialFactory` that provides a **single source of truth** for all materials, with **material pooling** to avoid GC.

```typescript
// src/game/visual/MaterialFactory.ts
import * as THREE from 'three';

export enum MaterialQuality {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export class MaterialFactory {
  private static materials: Map<string, THREE.Material> = new Map();
  private static quality: MaterialQuality = MaterialQuality.MEDIUM;

  static setQuality(quality: MaterialQuality): void {
    if (this.quality === quality) return;

    // Dispose existing materials
    this.disposeAll();

    this.quality = quality;

    // Recreate with new quality settings
    this.createDefaultMaterials();
  }

  static getToiletMaterial(): THREE.MeshStandardMaterial {
    const key = `toilet_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)! as THREE.MeshStandardMaterial;
    }

    const config = this.getConfig(this.quality);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: config.roughness,
      metalness: config.metalness,
      envMapIntensity: config.envMapIntensity,
    });

    this.materials.set(key, mat);
    return mat;
  }

  static getTrackMaterial(texture?: THREE.Texture): THREE.MeshStandardMaterial {
    const key = `track_${this.quality}`;
    // Similar pattern...
  }

  static getObstacleMaterial(): THREE.MeshStandardMaterial {
    const key = `obstacle_${this.quality}`;
    // Similar pattern...
  }

  static disposeAll(): void {
    this.materials.forEach(mat => mat.dispose());
    this.materials.clear();
  }

  private static getConfig(quality: MaterialQuality) {
    switch (quality) {
      case MaterialQuality.LOW:
        return { roughness: 0.9, metalness: 0.0, envMapIntensity: 0.0 };
      case MaterialQuality.MEDIUM:
        return { roughness: 0.7, metalness: 0.1, envMapIntensity: 0.3 };
      case MaterialQuality.HIGH:
        return { roughness: 0.5, metalness: 0.2, envMapIntensity: 0.8 };
    }
  }

  private static createDefaultMaterials(): void {
    this.getToiletMaterial();
    this.getTrackMaterial();
    this.getObstacleMaterial();
  }
}
```

### Migration Path

1. **Phase 1**: Update `EnvironmentManager` and `ObstacleManager` to use `MaterialFactory`
2. **Phase 2**: Replace `MeshLambertMaterial` with `MeshStandardMaterial` throughout
3. **Phase 3**: Add environment maps for reflections in HIGH quality

### Performance Considerations

- **Low Quality**: Use `MeshLambertMaterial` (cheaper than Standard)
- **Medium Quality**: Standard materials without envMap
- **High Quality**: Full PBR with environment maps

---

## Feature 3: Emoji-based Obstacle Faces

### Architecture Recommendation

Extend `ObstacleManager` with a **texture atlas system** for emoji faces. Use CanvasTexture for flexibility without external assets.

```typescript
// src/game/visual/EmojiTextureAtlas.ts
import * as THREE from 'three';

export interface EmojiConfig {
  emoji: string;
  backgroundColor: string;
  scale: number;
}

export class EmojiTextureAtlas {
  private static canvas: HTMLCanvasElement;
  private static texture: THREE.CanvasTexture;
  private static emojiConfigs: EmojiConfig[] = [
    { emoji: '😠', backgroundColor: '#FFE4B5', scale: 1.0 },
    { emoji: '😫', backgroundColor: '#FFB6C1', scale: 0.9 },
    { emoji: '😤', backgroundColor: '#DDA0DD', scale: 1.1 },
    { emoji: '😡', backgroundColor: '#FF6347', scale: 1.0 },
    { emoji: '😱', backgroundColor: '#98FB98', scale: 0.95 },
  ];

  private static readonly EMOJI_SIZE = 128;
  private static readonly ATLAS_SIZE = this.EMOJI_SIZE * this.emojiConfigs.length;

  static initialize(): void {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.ATLAS_SIZE;
    this.canvas.height = this.ATLAS_SIZE;
    const ctx = this.canvas.getContext('2d')!;

    this.emojiConfigs.forEach((config, index) => {
      this.drawEmoji(ctx, config, index);
    });

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.minFilter = THREE.NearestFilter;
  }

  private static drawEmoji(
    ctx: CanvasRenderingContext2D,
    config: EmojiConfig,
    index: number
  ): void {
    const x = index * this.EMOJI_SIZE;
    const y = 0;

    // Background circle
    ctx.fillStyle = config.backgroundColor;
    ctx.beginPath();
    ctx.arc(
      x + this.EMOJI_SIZE / 2,
      y + this.EMOJI_SIZE / 2,
      this.EMOJI_SIZE / 2 * 0.9,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Emoji
    ctx.font = `${this.EMOJI_SIZE * 0.6}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      config.emoji,
      x + this.EMOJI_SIZE / 2,
      y + this.EMOJI_SIZE / 2
    );
  }

  static getTexture(): THREE.CanvasTexture {
    return this.texture;
  }

  static getUVs(index: number): THREE.Vector2[] {
    const u = index / this.emojiConfigs.length;
    const uWidth = 1 / this.emojiConfigs.length;

    return [
      new THREE.Vector2(u, 0),
      new THREE.Vector2(u + uWidth, 0),
      new THREE.Vector2(u + uWidth, 1),
      new THREE.Vector2(u, 1)
    ];
  }

  static getRandomConfig(): EmojiConfig {
    return this.emojiConfigs[
      Math.floor(Math.random() * this.emojiConfigs.length)
    ];
  }
}
```

### Integration into ObstacleManager

Modify `ObstacleManager.createObstacleGroup()` to add emoji face plane:

```typescript
// In ObstacleManager constructor:
EmojiTextureAtlas.initialize();

// In createObstacleGroup():
private createObstacleGroup(): THREE.Group {
  const group = new THREE.Group();

  // ... existing body, tip, eyes, smile ...

  // Add emoji face as an optional overlay
  const faceGeometry = new THREE.PlaneGeometry(0.6, 0.6);
  const faceMaterial = new THREE.MeshBasicMaterial({
    map: EmojiTextureAtlas.getTexture(),
    transparent: true,
    side: THREE.DoubleSide,
    depthTest: false // Always visible on top
  });

  const face = new THREE.Mesh(faceGeometry, faceMaterial);
  face.position.set(0, 0.65, 0.6);
  face.userData.emojiIndex = Math.floor(Math.random() * 5);
  group.add(face);

  return group;
}
```

### Mobile Optimization

- **Low Quality**: Disable emoji faces (fallback to simple geometry)
- **Medium Quality**: Simple circle with 2-3 emoji types
- **High Quality**: Full emoji atlas with animations

---

## Feature 4: Particle System for Collision Effects

### Architecture Recommendation

Create a `ParticleSystem` that follows the **existing pooling pattern** but adds **particle behaviors** and **emitter logic**.

```typescript
// src/game/visual/ParticleSystem.ts
import * as THREE from 'three';

export interface ParticleConfig {
  maxParticles: number;
  spawnRate: number;
  lifetime: number;
  size: { min: number; max: number };
  speed: { min: number; max: number };
  gravity: number;
  colors: number[];
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
  private tempVector: THREE.Vector3 = new THREE.Vector3();
  private spawnTimer: number = 0;

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
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
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
    for (let i = 0; i < count; i++) {
      const particle = this.particles.find(p => !p.active);
      if (!particle) break;

      this.resetParticle(particle, position);
      particle.active = true;
      particle.mesh.visible = true;
    }
  }

  private resetParticle(particle: Particle, position: THREE.Vector3): void {
    particle.mesh.position.copy(position);

    // Random spherical direction
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    const speed = THREE.MathUtils.randFloat(
      this.config.speed.min,
      this.config.speed.max
    );

    particle.velocity.set(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.sin(phi) * Math.sin(theta) * speed,
      Math.cos(phi) * speed
    );

    particle.maxLifetime = this.config.lifetime * (0.8 + Math.random() * 0.4);
    particle.lifetime = particle.maxLifetime;

    // Random color
    const colorHex = this.config.colors[
      Math.floor(Math.random() * this.config.colors.length)
    ];
    (particle.mesh.material as THREE.MeshBasicMaterial).color.setHex(colorHex);

    // Random scale
    const scale = THREE.MathUtils.randFloat(
      this.config.size.min / this.config.size.max,
      1
    );
    particle.mesh.scale.setScalar(scale);
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

      // Rotate for visual flair
      particle.mesh.rotation.x += delta * 2;
      particle.mesh.rotation.z += delta * 3;

      // Update opacity based on lifetime
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
}
```

### Pre-configured Effects

```typescript
// src/config/particles.config.ts
export const ParticlePresets = {
  collision: {
    maxParticles: 50,
    spawnRate: 10,
    lifetime: 0.8,
    size: { min: 0.1, max: 0.3 },
    speed: { min: 3, max: 8 },
    gravity: 5,
    colors: [0xFFFFFF, 0x8B7355, 0x6B4423] // TP colors + brown
  },

  scoreMilestone: {
    maxParticles: 30,
    spawnRate: 5,
    lifetime: 1.2,
    size: { min: 0.15, max: 0.4 },
    speed: { min: 2, max: 5 },
    gravity: 3,
    colors: [0xFFD700, 0xFFA500, 0xFFFF00] // Gold sparkles
  },

  laneChange: {
    maxParticles: 20,
    spawnRate: 3,
    lifetime: 0.4,
    size: { min: 0.05, max: 0.15 },
    speed: { min: 1, max: 3 },
    gravity: 2,
    colors: [0xADD8E6, 0x87CEEB] // Light blue trail
  }
};
```

### Integration Points

1. **main.ts**: Initialize particle system, pass to CollisionSystem
2. **CollisionSystem**: Emit particles on collision
3. **UIManager.scoreFlash**: Emit score milestone particles
4. **RunnerController.moveLeft/Right**: Emit lane change particles

### Mobile Optimization

| Device Tier | Collision Particles | Effects |
|-------------|-------------------|---------|
| Low | 15 particles | Simple squares |
| Medium | 30 particles | Squares + rotation |
| High | 50 particles | Rounded sprites + trails |

---

## Feature 5: Enhanced Lighting and Shadows

### Architecture Recommendation

Create a `LightingManager` that follows the manager pattern and supports **dynamic quality tiers**.

```typescript
// src/game/visual/LightingManager.ts
import * as THREE from 'three';

export enum LightQuality {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export class LightingManager {
  private ambientLight: THREE.AmbientLight;
  private directionalLight: THREE.DirectionalLight;
  private hemisphereLight?: THREE.HemisphereLight;
  private rimLight?: THREE.DirectionalLight;

  constructor(private scene: THREE.Scene) {
    this.ambientLight = this.createAmbientLight();
    this.directionalLight = this.createDirectionalLight();

    this.scene.add(this.ambientLight);
    this.scene.add(this.directionalLight);
  }

  setQuality(quality: LightQuality): void {
    switch (quality) {
      case LightQuality.LOW:
        this.applyLowQuality();
        break;
      case LightQuality.MEDIUM:
        this.applyMediumQuality();
        break;
      case LightQuality.HIGH:
        this.applyHighQuality();
        break;
    }
  }

  private applyLowQuality(): void {
    // Disable shadows
    this.directionalLight.castShadow = false;

    // Simple lighting
    this.ambientLight.intensity = 0.8;
    this.directionalLight.intensity = 0.5;

    // Remove extra lights
    if (this.hemisphereLight) {
      this.scene.remove(this.hemisphereLight);
      this.hemisphereLight = undefined;
    }
    if (this.rimLight) {
      this.scene.remove(this.rimLight);
      this.rimLight = undefined;
    }
  }

  private applyMediumQuality(): void {
    // Enable shadows with medium settings
    this.enableShadows({
      mapSize: 1024,
      bias: -0.0001,
      camera: { near: 0.5, far: 50 }
    });

    this.ambientLight.intensity = 0.6;
    this.directionalLight.intensity = 0.8;

    // Add hemisphere for better ambient
    if (!this.hemisphereLight) {
      this.hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x362d1d, 0.3);
      this.scene.add(this.hemisphereLight);
    }
  }

  private applyHighQuality(): void {
    // Enable shadows with high settings
    this.enableShadows({
      mapSize: 2048,
      bias: -0.0001,
      camera: { near: 0.5, far: 100 },
      type: THREE.PCFSoftShadowMap
    });

    this.ambientLight.intensity = 0.4;
    this.directionalLight.intensity = 1.0;

    // Add rim lighting for dramatic effect
    if (!this.rimLight) {
      this.rimLight = new THREE.DirectionalLight(0x4488ff, 0.3);
      this.rimLight.position.set(-5, 5, -5);
      this.scene.add(this.rimLight);
    }
  }

  private enableShadows(config: {
    mapSize: number;
    bias: number;
    camera: { near: number; far: number };
    type?: THREE.ShadowMapType;
  }): void {
    const light = this.directionalLight;
    light.castShadow = true;
    light.shadow.mapSize.width = config.mapSize;
    light.shadow.mapSize.height = config.mapSize;
    light.shadow.bias = config.bias;
    light.shadow.camera.near = config.camera.near;
    light.shadow.camera.far = config.camera.far;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;

    if (config.type) {
      this.scene.shadowMap.type = config.type;
    }
  }

  private createAmbientLight(): THREE.AmbientLight {
    return new THREE.AmbientLight(0xffffff, 0.6);
  }

  private createDirectionalLight(): THREE.DirectionalLight {
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 10, 5);
    return light;
  }

  dispose(): void {
    if (this.hemisphereLight) {
      this.hemisphereLight.dispose();
    }
    if (this.rimLight) {
      this.rimLight.dispose();
    }
  }
}
```

### Shadow Culling Strategy

To optimize shadow rendering:

```typescript
// In SceneManager or separate ShadowManager
class ShadowCulling {
  private static SHADOW_CASCADE = 3;
  private static NEAR_SHADOW_DISTANCE = 15;
  private static FAR_SHADOW_DISTANCE = 50;

  static updateShadowsForFrame(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera
  ): void {
    const objectsToRender = [];
    const frustum = new THREE.Frustum();
    const projScreenMatrix = new THREE.Matrix4();

    projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    frustum.setFromProjectionMatrix(projScreenMatrix);

    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.castShadow) {
        // Only cast shadows for objects within reasonable distance
        if (object.position.distanceTo(camera.position) < FAR_SHADOW_DISTANCE) {
          object.castShadow = true;
        } else {
          object.castShadow = false;
        }
      }
    });
  }
}
```

---

## Performance Manager (New Core Component)

### Architecture Recommendation

A centralized system for **device capability detection** and **dynamic quality adjustment**.

```typescript
// src/core/PerformanceManager.ts
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
  particles: {
    collision: number;
    effects: number;
  };
  pixelRatio: number;
  antialias: boolean;
}

export class PerformanceManager {
  private static tier: PerformanceTier = PerformanceTier.MEDIUM;
  private static currentFPS: number = 60;
  private static frameCount: number = 0;
  private static lastTime: number = 0;
  private static fpsSamples: number[] = [];

  static async initialize(): Promise<PerformanceConfig> {
    await this.detectCapabilities();
    return this.getConfig();
  }

  private static async detectCapabilities(): Promise<void> {
    // WebGL capability check
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');

    if (!gl) {
      this.tier = PerformanceTier.LOW;
      return;
    }

    // Check for float textures (required for bloom)
    const hasFloatTextures = gl.getExtension('OES_texture_float');
    const hasHalfFloatTextures = gl.getExtension('OES_texture_half_float');

    // Run a small benchmark
    const benchmarkScore = await this.runBenchmark();

    // Determine tier based on benchmark score
    if (benchmarkScore < 30) {
      this.tier = PerformanceTier.LOW;
    } else if (benchmarkScore < 50) {
      this.tier = PerformanceTier.MEDIUM;
    } else if (benchmarkScore < 70) {
      this.tier = PerformanceTier.HIGH;
    } else {
      this.tier = PerformanceTier.ULTRA;
    }
  }

  private static async runBenchmark(): Promise<number> {
    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    // Create stress test geometry
    const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16);
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const startTime = performance.now();
    const iterations = 100;

    for (let i = 0; i < iterations; i++) {
      mesh.rotation.x += 0.1;
      mesh.rotation.y += 0.1;
      renderer.render(scene, camera);
    }

    const endTime = performance.now();
    const score = (iterations / (endTime - startTime)) * 1000;

    renderer.dispose();
    geometry.dispose();
    material.dispose();

    return score;
  }

  static updateFPS(delta: number): void {
    this.frameCount++;

    if (performance.now() - this.lastTime > 1000) {
      this.currentFPS = this.frameCount;
      this.frameCount = 0;
      this.lastTime = performance.now();

      this.fpsSamples.push(this.currentFPS);
      if (this.fpsSamples.length > 10) {
        this.fpsSamples.shift();
      }

      this.checkAndAdjustTier();
    }
  }

  private static checkAndAdjustTier(): void {
    const avgFPS = this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length;

    // Auto-downgrade if sustained low FPS
    if (avgFPS < 25 && this.tier !== PerformanceTier.LOW) {
      this.tier = PerformanceTier.LOW;
      console.warn('Downgrading to LOW quality due to low FPS');
    }

    // Auto-upgrade if sustained high FPS
    if (avgFPS > 55 && this.tier !== PerformanceTier.ULTRA) {
      const tiers = [PerformanceTier.LOW, PerformanceTier.MEDIUM, PerformanceTier.HIGH, PerformanceTier.ULTRA];
      const currentIndex = tiers.indexOf(this.tier);
      if (currentIndex < tiers.length - 1) {
        this.tier = tiers[currentIndex + 1];
        console.log('Upgrading to', this.tier, 'quality');
      }
    }
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
          antialias: false
        };

      case PerformanceTier.MEDIUM:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 25, effects: 15 },
          pixelRatio: 1.5,
          antialias: true
        };

      case PerformanceTier.HIGH:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 40, effects: 25 },
          pixelRatio: 2,
          antialias: true
        };

      case PerformanceTier.ULTRA:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 50, effects: 35 },
          pixelRatio: 2,
          antialias: true
        };
    }
  }

  static getCurrentTier(): PerformanceTier {
    return this.tier;
  }

  static getFPS(): number {
    return this.currentFPS;
  }
}
```

---

## Dependency Management

### Required Package Updates

```json
{
  "dependencies": {
    "three": "^0.170.0"
  },
  "devDependencies": {
    "@types/three": "^0.170.0",
    "vite": "^6.0.0"
  }
}
```

**Note**: No additional dependencies needed! Three.js includes all required post-processing examples in the examples/jsm folder.

### Import Strategy

Use dynamic imports for post-processing to **lazy load** and **reduce bundle size**:

```typescript
// Lazy load post-processing only when needed
async initializePostProcessing(config: PerformanceConfig) {
  if (!config.postProcessing) return;

  const {
    EffectComposer
  } = await import('three/examples/jsm/postprocessing/EffectComposer.js');

  const {
    RenderPass
  } = await import('three/examples/jsm/postprocessing/RenderPass.js');

  // ... rest of imports
}
```

---

## Code Organization Recommendations

### 1. Single Responsibility Principle

Each class should have one clear purpose:
- **SceneManager**: Renderer, scene, camera management
- **PostProcessingManager**: Effect composition pipeline
- **LightingManager**: All light/shadow configuration
- **ParticleSystem**: Particle effects ONLY
- **MaterialFactory**: Material creation and pooling

### 2. Interface-Based Design

Define clear interfaces for manager communication:

```typescript
// src/core/ManagerInterfaces.ts

export interface IRenderable {
  render(): void;
}

export interface IUpdateable {
  update(delta: number): void;
}

export interface IResettable {
  reset(): void;
}

export interface IPerformanceAware {
  setQuality(tier: PerformanceTier): void;
  getConfig(): PerformanceConfig;
}
```

### 3. Configuration Centralization

```typescript
// src/config/graphics.config.ts
export const GraphicsPresets = {
  [PerformanceTier.LOW]: { /* ... */ },
  [PerformanceTier.MEDIUM]: { /* ... */ },
  [PerformanceTier.HIGH]: { /* ... */ },
  [PerformanceTier.ULTRA]: { /* ... */ }
};

export function getPreset(tier: PerformanceTier) {
  return GraphicsPresets[tier];
}
```

### 4. Event-Driven Architecture

Use a simple event bus for cross-manager communication:

```typescript
// src/core/EventManager.ts
type EventHandler = (...args: any[]) => void;

class EventManager {
  private static listeners: Map<string, EventHandler[]> = new Map();

  static on(event: string, handler: EventHandler): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(handler);
  }

  static emit(event: string, ...args: any[]): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      handlers.forEach(handler => handler(...args));
    }
  }

  static off(event: string, handler: EventHandler): void {
    const handlers = this.listeners.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

// Usage
EventManager.emit('collision', { position: playerPosition, severity: 'high' });
EventManager.on('collision', (data) => {
  particleSystem.emit(data.position, 20);
});
```

---

## Testing Considerations

### Unit Testing Strategy

```typescript
// test/ParticleSystem.test.ts
import { ParticleSystem, ParticlePresets } from '../src/game/visual/ParticleSystem';

describe('ParticleSystem', () => {
  let system: ParticleSystem;
  let mockScene: any;

  beforeEach(() => {
    mockScene = { add: jest.fn(), remove: jest.fn() };
    system = new ParticleSystem(mockScene, ParticlePresets.collision);
  });

  test('should initialize pool with correct number of particles', () => {
    expect(system.getParticleCount()).toBe(ParticlePresets.collision.maxParticles);
  });

  test('should emit particles at specified position', () => {
    const position = new THREE.Vector3(0, 0, 0);
    system.emit(position, 10);
    expect(system.getActiveParticleCount()).toBe(10);
  });

  test('should update particle positions with gravity', () => {
    // Test physics
  });

  test('should deactivate particles after lifetime expires', () => {
    // Test lifecycle
  });
});
```

### Performance Testing

```typescript
// test/PerformanceManager.test.ts
import { PerformanceManager, PerformanceTier } from '../src/core/PerformanceManager';

describe('PerformanceManager', () => {
  test('should detect low-end device', async () => {
    // Mock WebGL capabilities
    const config = await PerformanceManager.initialize();
    expect(config.tier).toBeDefined();
  });

  test('should downgrade tier on sustained low FPS', () => {
    PerformanceManager.updateFPS(0.1); // 10 FPS for 10 samples
    expect(PerformanceManager.getCurrentTier()).toBe(PerformanceTier.LOW);
  });
});
```

### Integration Testing

```typescript
// test/VisualEffectsIntegration.test.ts
describe('Visual Effects Integration', () => {
  test('post-processing should render with bloom', () => {
    // Full integration test
  });

  test('collision should emit particles', () => {
    // Test event-driven integration
  });
});
```

---

## Implementation Roadmap

### Phase 1: Foundation (Days 1-3)
1. Create `PerformanceManager` with capability detection
2. Create `MaterialFactory` with PBR materials
3. Create `LightingManager` with quality tiers
4. Update `SceneManager` to support quality changes

### Phase 2: Post-Processing (Days 4-5)
1. Create `PostProcessingManager`
2. Integrate with `SceneManager.render()`
3. Add toggle in UI settings
4. Mobile optimization testing

### Phase 3: Particles (Days 6-7)
1. Create `ParticleSystem` with pooling
2. Create `ParticlePresets` config
3. Integrate collision particles
4. Add score milestone effects
5. Add lane change trails

### Phase 4: Emoji Faces (Days 8-9)
1. Create `EmojiTextureAtlas`
2. Update `ObstacleManager` for emoji faces
3. Add randomization logic
4. Test different device tiers

### Phase 5: Polish & Testing (Days 10-12)
1. Add FPS counter to UI
2. Write unit tests for new systems
3. Performance profiling on mobile devices
4. Bug fixes and optimization
5. Documentation updates

---

## Unresolved Questions

1. **Environment Map Source**: Where should environment maps for PBR come from? (HDRI files vs procedurally generated)
2. **Emoji Font**: Should emoji faces use a web font or rely on system fonts?
3. **Asset Loading**: If using external assets (HDRI, custom emoji textures), what's the loading strategy?
4. **User Settings**: Should users be able to manually override auto-detected quality settings?
5. **Analytics**: Should we track performance tier distribution for optimization targeting?
