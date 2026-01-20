# Toilet Runner - Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                           main.ts (Game Entry)                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  1. Initialize PerformanceManager (detect device tier)       │  │
│  │  2. Create SceneManager (with quality-aware renderer)        │  │
│  │  3. Initialize all managers with performance config          │  │
│  │  4. Register systems with GameLoop                            │  │
│  │  5. Start game loop                                          │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    PerformanceManager (New)                        │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  - Detect device capabilities (WebGL, extensions)             │  │
│  │  - Run benchmark for performance score                       │  │
│  │  - Auto-adjust tier based on FPS                            │  │
│  │  - Provide config to all other managers                      │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        GameLoop                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Update(delta) called each frame for:                        │  │
│  │    - RunnerController                                        │  │
│  │    - TrackManager                                            │  │
│  │    - ObstacleManager                                         │  │
│  │    - CollisionSystem → ParticleSystem (NEW)                  │  │
│  │    - EnvironmentManager                                      │  │
│  │    - CameraManager                                           │  │
│  │    - PostProcessingManager.render() (NEW)                    │  │
│  │    - PerformanceManager.updateFPS() (NEW)                    │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    SceneManager (Modified)                          │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  + scene: THREE.Scene                                       │  │
│  │  + camera: THREE.PerspectiveCamera                          │  │
│  │  + renderer: THREE.WebGLRenderer                            │  │
│  │  + postProcessing: PostProcessingManager (NEW - optional)  │  │
│  │                                                              │  │
│  │  render():                                                   │  │
│  │    if (postProcessing.enabled) {                             │  │
│  │      postProcessing.render()                                 │  │
│  │    } else {                                                  │  │
│  │      renderer.render(scene, camera)                          │  │
│  │    }                                                         │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
┌─────────────────────────────┐   ┌─────────────────────────────────┐
│   Visual Effects Layer      │   │     Game Logic Layer           │
│   (NEW: src/game/visual/)   │   │     (existing)                │
├─────────────────────────────┤   ├─────────────────────────────────┤
│ ┌────────────────────────┐ │   │ ┌───────────────────────────┐  │
│ │ PostProcessingManager  │ │   │ │ RunnerController         │  │
│ │  - EffectComposer      │ │   │ │  - Player movement        │  │
│ │  - Bloom Pass          │ │   │ │  - Lane changes           │  │
│ │  - Vignette Pass       │ │   │ └───────────────────────────┘  │
│ │  - FXAA Pass           │ │   │                                 │
│ └────────────────────────┘ │   │ ┌───────────────────────────┐  │
│                           │   │ │ TrackManager              │  │
│ ┌────────────────────────┐ │   │ │  - InstancedMesh pool     │  │
│ │  ParticleSystem       │ │   │ │  - Segment spawning       │  │
│ │  - Object pooling     │ │   │ └───────────────────────────┘  │
│ │  - Collision effects   │ │   │                                 │
│ │  - Score effects       │ │   │ ┌───────────────────────────┐  │
│ │  - Lane trails         │ │   │ │ ObstacleManager           │  │
│ └────────────────────────┘ │   │ │  - Emoji faces (NEW)      │  │
│                           │   │ │  - Object pooling          │  │
│ ┌────────────────────────┐ │   │ └───────────────────────────┘  │
│ │  LightingManager      │ │   │                                 │
│ │  - Ambient light       │ │   │ ┌───────────────────────────┐  │
│ │  - Directional light   │ │   │ │ CollisionSystem           │  │
│ │  - Shadow config       │ │   │ │  - Bounding box checks    │  │
│ │  - Rim light (high)   │ │   │ └───────────────────────────┘  │
│ └────────────────────────┘ │   │                                 │
│                           │   │ ┌───────────────────────────┐  │
│ ┌────────────────────────┐ │   │ │ EnvironmentManager       │  │
│ │  MaterialFactory      │ │   │ │  - Decorations           │  │
│ │  - PBR materials      │ │   │ │  - Object pooling         │  │
│ │  - Material pooling    │ │   │ └───────────────────────────┘  │
│ └────────────────────────┘ │   │                                 │
│                           │   │ ┌───────────────────────────┐  │
│ ┌────────────────────────┐ │   │ │ CameraManager             │  │
│ │  EmojiTextureAtlas    │ │   │ │  - Camera shake           │  │
│ │  - Canvas texture     │ │   │ │  - Follow player         │  │
│ │  - UV coordinates     │ │   │ └───────────────────────────┘  │
│ └────────────────────────┘ │   └─────────────────────────────────┘
└─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        UI Layer                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  UIManager (existing) + SettingsPanel (NEW)                 │  │
│  │    - Start/Pause/GameOver screens                           │  │
│  │    - Score display                                          │  │
│  │    - Quality settings toggle (NEW)                          │  │
│  │    - FPS counter (NEW)                                      │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        Input Layer                                   │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  InputManager (existing)                                    │  │
│  │    - Keyboard (arrows, WASD)                                │  │
│  │    - Touch (swipe detection)                                │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

## Data Flow Examples

### Collision Detection → Particle Emission
```
CollisionSystem.checkPlayerVsObstacles()
    ↓ (collision detected)
EventManager.emit('collision', position, severity)
    ↓
ParticleSystem.emit(position, particleCount)
    ↓ (from pool)
Activate particles with random velocities
    ↓ (each frame)
ParticleSystem.update(delta)
    ↓ (gravity + opacity fade)
Deactivate particles when lifetime expires
```

### Performance Tier Adjustment
```
PerformanceManager.updateFPS(delta)
    ↓
Calculate average FPS over 10 samples
    ↓
If avgFPS < 25:
    Downgrade to LOW tier
    ↓
SceneManager.updateRendererQuality(LOW)
    ↓
MaterialFactory.setQuality(LOW)
    ↓
LightingManager.setQuality(LOW)
    ↓
ParticleSystem.updateConfig(LOW)
    ↓
PostProcessingManager.disable()
```

### Post-Processing Pipeline
```
SceneManager.render()
    ↓
PostProcessingManager.render()
    ↓
EffectComposer.render()
    ├─→ RenderPass (base scene)
    ├─→ UnrealBloomPass (glow)
    ├─→ ShaderPass (vignette)
    └─→ ShaderPass (FXAA)
```

## Performance Tiers Comparison

| Feature | LOW | MEDIUM | HIGH | ULTRA |
|---------|-----|--------|------|-------|
| **Renderer** | pixelRatio: 1, no AA | pixelRatio: 1.5, MSAA | pixelRatio: 2, MSAA | pixelRatio: 2, MSAA |
| **Shadows** | Disabled | 1024px, PCF | 2048px, PCFSoft | 2048px, PCFSoft + Cascades |
| **Materials** | Lambert (no PBR) | Standard, no envMap | Standard, simple envMap | Full PBR, HDRI envMap |
| **Lights** | Ambient + 1 Dir | Ambient + 1 Dir + Hemisphere | + Rim lighting | + Rim + Point lights |
| **Post-Processing** | None | FXAA only | Bloom + Vignette + FXAA | All passes + color grading |
| **Particles** | 10 collision, 0 effects | 25 collision, 15 effects | 40 collision, 25 effects | 50 collision, 35 effects |
| **Emoji Faces** | Disabled | Simple circle | Full emoji atlas | Animated emoji |
| **Geometry** | Low poly (8 segments) | Medium poly (12) | High poly (16) | High poly (16) + subdivision |

## Manager Initialization Order

```typescript
async function initializeGame() {
  // 1. Performance detection (must be first)
  const perfConfig = await PerformanceManager.initialize();

  // 2. Core systems
  sceneManager = new SceneManager();
  sceneManager.configureRenderer(perfConfig);
  gameLoop = new GameLoop();

  // 3. Visual systems (performance-aware)
  postProcessing = new PostProcessingManager(
    sceneManager.getRenderer(),
    sceneManager.getScene(),
    sceneManager.getCamera()
  );
  postProcessing.initialize(perfConfig);

  lighting = new LightingManager(sceneManager.getScene());
  lighting.setQuality(perfConfig.tier);

  materialFactory = MaterialFactory;
  materialFactory.setQuality(perfConfig.tier);

  particles = new ParticleSystem(
    sceneManager.getScene(),
    ParticlePresets[perfConfig.tier]
  );

  emojiAtlas = new EmojiTextureAtlas();
  if (perfConfig.tier !== PerformanceTier.LOW) {
    emojiAtlas.initialize();
  }

  // 4. Game logic systems
  runner = new RunnerController(sceneManager.getScene());
  track = new TrackManager(sceneManager.getScene());
  obstacles = new ObstacleManager(sceneManager.getScene(), track);
  obstacles.setMaterialFactory(materialFactory);
  obstacles.setEmojiAtlas(emojiAtlas);

  collision = new CollisionSystem();
  collision.setParticleSystem(particles);

  environment = new EnvironmentManager(sceneManager.getScene());

  // 5. UI and input
  cameraManager = new CameraManager(sceneManager.getCamera());
  input = new InputManager(/*...*/);
  ui = new UIManager();
  ui.addSettingsPanel(/*...*/);  // NEW: quality controls

  // 6. Register with game loop
  gameLoop.registerSystem(update.bind(this));
  gameLoop.start();
}
```

## File Changes Summary

### New Files
```
src/core/PerformanceManager.ts          - Device detection & auto-tier
src/game/visual/PostProcessingManager.ts - Effects pipeline
src/game/visual/ParticleSystem.ts         - Particle effects
src/game/visual/LightingManager.ts       - Shadow/light config
src/game/visual/MaterialFactory.ts       - PBR material pooling
src/game/visual/EmojiTextureAtlas.ts     - Emoji face textures
src/config/graphics.config.ts             - Quality presets
src/config/particles.config.ts           - Particle presets
src/ui/SettingsPanel.ts                  - Graphics settings UI
src/core/EventManager.ts                 - Event bus (optional)
```

### Modified Files
```
src/main.ts                  - New manager initialization
src/core/SceneManager.ts     - Support for post-processing
src/game/ObstacleManager.ts  - Add emoji face support
src/game/CollisionSystem.ts  - Emit collision events
src/game/RunnerController.ts - Emit lane change events
src/ui/UIManager.ts          - Add settings panel
```

### Unchanged Files
```
src/core/GameState.ts
src/core/GameLoop.ts
src/core/LeaderboardManager.ts
src/game/AudioManager.ts
src/game/TrackManager.ts
src/game/CameraManager.ts
src/input/InputManager.ts
```
