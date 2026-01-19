# Toilet Runner: 3D Endless Runner MVP Architecture

## Architecture Overview

### Core Design Philosophy

Following Three.js best practices from Utsubo (2026) and mobile optimization patterns, this architecture uses a **world-moves-to-player** approach rather than player-moves-through-world, which is the proven pattern from endless runners like Subway Surfers. This eliminates floating-point precision issues at large coordinates and simplifies collision detection.

### Module Architecture

```
toilet-runner/
├── src/
│   ├── core/
│   │   ├── GameLoop.ts          # requestAnimationFrame, delta time
│   │   ├── SceneManager.ts     # Three.js renderer, scene, camera
│   │   └── GameState.ts         # Enum: MENU, PLAYING, GAMEOVER
│   ├── game/
│   │   ├── RunnerController.ts  # Lane switching, position logic
│   │   ├── TrackManager.ts      # Segment spawning/despawning
│   │   ├── ObstacleManager.ts   # Poop spawn patterns, difficulty
│   │   └── CollisionSystem.ts  # AABB detection (THREE.Box3)
│   ├── input/
│   │   └── InputManager.ts      # Keyboard + touch swipe handling
│   ├── ui/
│   │   └── UIManager.ts         # Start screen, score, game over
│   └── main.ts                  # Entry point
├── assets/
│   └── models/                   # glTF models (TP roll, poop)
├── public/
│   └── index.html
├── vite.config.ts               # base: './' for GitHub Pages
└── package.json
```

## Technical Stack & Rationale

**Runtime:** Bun - Fast native execution, zero-config TypeScript

**Build Tool:** Vite - HMR, optimized bundling, asset handling

**3D Engine:** Three.js - Mature WebGL abstraction, InstancedMesh support, mobile-optimized

**Key Three.js Features Used:**
- `InstancedMesh` for obstacles (draw call reduction)
- `Box3.intersectsBox()` for AABB collision
- `setPixelRatio(min(devicePixelRatio, 2))` for mobile performance
- `powerPreference: 'high-performance'` for dedicated GPU
- `setAnimationLoop()` for WebXR compatibility

## Core Systems Detailed

### 1. SceneManager (Core/Three.js Setup)

**Pattern:** Singleton scene manager with mobile-first renderer configuration

**Key optimizations:**
```typescript
// Clamped pixel ratio for mobile (prevents 4x scaling on retina)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Request high-performance GPU
const renderer = new WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
  alpha: true,
  outputColorSpace: THREE.SRGBColorSpace
});

// Frustum culling enabled by default in Three.js
renderer.setScissorTest(true);
```

**Reasoning:** Clamping to 2x pixel ratio is standard mobile practice from Utsubo's 2026 Three.js best practices. `powerPreference: 'high-performance'` ensures dedicated GPU usage on devices with hybrid graphics.

### 2. RunnerController (Player)

**Lane System:**
- 3 lanes: LEFT (-3), CENTER (0), RIGHT (3)
- Smooth lerp interpolation between lanes
- X position lerped, Z fixed relative to camera

**Pattern:** State-based movement with easing
```typescript
// Lane switching with smooth easing
currentLaneX = THREE.MathUtils.lerp(
  currentLaneX,
  targetLaneX,
  LERP_SPEED * delta
);
```

**Reasoning:** Lerp provides smooth, game-feel movement without complex physics. Fixed Z simplifies collision as only X/Y changes.

### 3. TrackManager (Endless World)

**Pattern:** Object pool + segmented spawning

**Implementation:**
- Pool of ground segments (InstancedMesh for performance)
- Segments spawn ahead at `spawnDistance`
- Despawn behind at `despawnDistance`
- World moves toward player (+Z) instead of player moving

**Key insight:** This pattern avoids floating-point precision issues that occur when player travels far from origin (e.g., x=1000000.0).

### 4. ObstacleManager (Pile of Poop)

**Pattern:** InstancedMesh + simple spawn rules

**Implementation:**
- Single `InstancedMesh` for all poop obstacles (1 draw call vs hundreds)
- `setMatrixAt()` for position per instance
- `setColorAt()` for visual variety
- Spawn patterns: single, double, or triple obstacles

**Difficulty curve:**
```typescript
const spawnRate = BASE_SPAWN_RATE + (score * DIFFICULTY_MULTIPLIER);
const speed = BASE_SPEED + (score * SPEED_MULTIPLIER);
```

**Reasoning:** InstancedMesh reduces draw calls from potentially hundreds to 1, following Three.js performance patterns from MDN and community examples.

### 5. InputManager (Controls)

**Dual Input Support:**
- Desktop: ArrowLeft/ArrowRight, A/D keys
- Mobile: Touch swipe detection (horizontal delta threshold)

**Swipe Detection:**
```typescript
// Simple threshold-based swipe
if (touchEndX - touchStartX > SWIPE_THRESHOLD) {
  moveRight();
} else if (touchStartX - touchEndX > SWIPE_THRESHOLD) {
  moveLeft();
}
```

**Reasoning:** Threshold-based swipe is mobile-optimized, avoiding complex gesture libraries that add bundle size.

### 6. CollisionSystem (Detection)

**Pattern:** AABB using Three.js `Box3`

**Implementation:**
```typescript
const playerBox = new THREE.Box3().setFromObject(playerMesh);
const obstacleBox = new THREE.Box3().setFromObject(obstacleMesh);

if (playerBox.intersectsBox(obstacleBox)) {
  gameOver = true;
}
```

**Optimization:** Only check active obstacles, not entire pool. Use simple bounds before detailed checks.

**Reasoning:** AABB is sufficient for simple runner, OBB overkill for MVP. Three.js `intersectsBox()` is optimized.

### 7. UIManager (Overlays)

**Simple DOM-based UI:**
- HTML overlays positioned absolute over canvas
- CSS transitions for smooth state changes
- Reactive score updates

**States:** START → PLAYING → GAMEOVER

## Performance Strategy

### Draw Call Reduction
- InstancedMesh for all obstacles (1 draw call)
- Merged geometries for ground segments
- Shared materials where possible

### Memory Management
- Object pools for segments and obstacles
- Reuse `THREE.Vector3`, `THREE.Box3` in hot loops
- No per-frame `new THREE.*()` calls in update loop

### Mobile Optimizations
```typescript
// Renderer config
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Simple materials (no PBR, saves GPU)
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

// Low-poly primitives
const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 8); // 8 segments
```

### LOD & Culling
- Fog to hide distant segments: `scene.fog = new THREE.Fog(0x87CEEB, 20, 80)`
- Frustum culling automatic in Three.js
- Despawn segments behind camera

## Step-by-Step Implementation Plan

### Milestone 1: Core Foundation (Day 1-2)
1. Initialize Vite + Bun project
2. Setup Three.js renderer, scene, camera
3. Create ground plane with simple material
4. Add basic game loop with delta time
5. Add toilet paper roll cylinder

**Files:** `main.ts`, `SceneManager.ts`, `GameLoop.ts`

### Milestone 2: Player Movement (Day 2-3)
1. Implement 3-lane system
2. Add keyboard controls
3. Add smooth lane switching lerp
4. Position camera behind player

**Files:** `RunnerController.ts`, `InputManager.ts`

### Milestone 3: Endless Track (Day 3-4)
1. Implement segment pooling
2. Spawn/despawn logic (world moves toward player)
3. Ground texture or simple grid pattern
4. Fog for distance hiding

**Files:** `TrackManager.ts`

### Milestone 4: Obstacles (Day 4-5)
1. Create poop model (cone/sphere primitive)
2. Implement InstancedMesh for obstacles
3. Spawn pattern logic (single/double/triple)
4. Basic difficulty scaling

**Files:** `ObstacleManager.ts`

### Milestone 5: Collision & Game State (Day 5)
1. AABB collision detection
2. Game over state
3. Score tracking (distance/time)
4. Restart functionality

**Files:** `CollisionSystem.ts`, `GameState.ts`

### Milestone 6: UI & Touch (Day 6)
1. Start screen overlay
2. Score display
3. Game over screen with restart
4. Touch swipe detection
5. Mobile responsiveness

**Files:** `UIManager.ts`, update `InputManager.ts`

### Milestone 7: Polish & Deploy (Day 7)
1. Adjust game balance (speed, spawn rates)
2. Add simple animations (roll rotation)
3. Test on mobile devices
4. Vite production build
5. Deploy to GitHub Pages

**Files:** Final polish, `vite.config.ts`, README

## Code Examples

### Project Setup (Bun + Vite)

```bash
# Create project
bun create vite toilet-runner --template vanilla-ts

cd toilet-runner
bun install

# Install Three.js
bun add three
bun add -d @types/three
```

**package.json:**
```json
{
  "name": "toilet-runner",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Critical for GitHub Pages
  build: {
    target: 'es2015',
    minify: 'terser'
  }
});
```

### SceneManager.ts (Renderer Setup)

```typescript
import * as THREE from 'three';

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private canvas: HTMLElement;

  constructor(canvas: HTMLElement) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB);
    this.scene.fog = new THREE.Fog(0x87CEEB, 20, 80);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(0, 3, 6);
    this.camera.lookAt(0, 0, -10);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
      outputColorSpace: THREE.SRGBColorSpace
    });

    // Mobile optimization: clamp pixel ratio
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvas.appendChild(this.renderer.domElement);

    this.setupLights();
    this.setupResize();
  }

  private setupLights(): void {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    this.scene.add(directionalLight);
  }

  private setupResize(): void {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  getScene(): THREE.Scene { return this.scene; }
  getCamera(): THREE.PerspectiveCamera { return this.camera; }
  getRenderer(): THREE.WebGLRenderer { return this.renderer; }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
```

### GameLoop.ts (Update/Render Cycle)

```typescript
import * as THREE from 'three';
import { SceneManager } from './SceneManager';

export class GameLoop {
  private clock: THREE.Clock;
  private sceneManager: SceneManager;
  private isRunning: boolean = false;
  private updateSystems: Array<(delta: number) => void> = [];

  constructor(sceneManager: SceneManager) {
    this.clock = new THREE.Clock();
    this.sceneManager = sceneManager;
  }

  registerUpdate(system: (delta: number) => void): void {
    this.updateSystems.push(system);
  }

  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.clock.start();
    this.loop();
  }

  stop(): void {
    this.isRunning = false;
  }

  private loop(): void {
    if (!this.isRunning) return;

    const delta = Math.min(this.clock.getDelta(), 0.1); // Cap delta

    // Update phase
    for (const system of this.updateSystems) {
      system(delta);
    }

    // Render phase
    this.sceneManager.render();

    requestAnimationFrame(() => this.loop());
  }
}
```

### RunnerController.ts (Lane Movement)

```typescript
import * as THREE from 'three';
import { SceneManager } from '../core/SceneManager';

const LANE_WIDTH = 3;
const LERP_SPEED = 8;

export class RunnerController {
  private mesh: THREE.Mesh;
  private currentLane: number = 0; // -1, 0, 1
  private currentX: number = 0;

  constructor(sceneManager: SceneManager) {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 12);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(0, 0.5, 0);
    sceneManager.getScene().add(this.mesh);
  }

  update(delta: number): void {
    const targetX = this.currentLane * LANE_WIDTH;
    this.currentX = THREE.MathUtils.lerp(this.currentX, targetX, LERP_SPEED * delta);
    this.mesh.position.x = this.currentX;

    // Roll animation
    this.mesh.rotation.z -= delta * 5;
  }

  moveLeft(): void {
    if (this.currentLane > -1) this.currentLane--;
  }

  moveRight(): void {
    if (this.currentLane < 1) this.currentLane++;
  }

  getMesh(): THREE.Mesh { return this.mesh; }
  getCurrentLane(): number { return this.currentLane; }
}
```

### TrackManager.ts (Endless Segments)

```typescript
import * as THREE from 'three';
import { SceneManager } from '../core/SceneManager';

const SEGMENT_LENGTH = 10;
const VISIBLE_SEGMENTS = 8;
const SPAWN_DISTANCE = SEGMENT_LENGTH * VISIBLE_SEGMENTS;
const DESPAWN_DISTANCE = SEGMENT_LENGTH * 2;

export class TrackManager {
  private scene: THREE.Scene;
  private segments: THREE.Mesh[] = [];
  private speed: number = 10;
  private lastSpawnZ: number = 0;

  constructor(sceneManager: SceneManager) {
    this.scene = sceneManager.getScene();
    this.initializeTrack();
  }

  private initializeTrack(): void {
    // Create initial segments
    for (let i = 0; i < VISIBLE_SEGMENTS; i++) {
      this.spawnSegment(i * -SEGMENT_LENGTH);
    }
    this.lastSpawnZ = -VISIBLE_SEGMENTS * SEGMENT_LENGTH;
  }

  private spawnSegment(z: number): void {
    const geometry = new THREE.PlaneGeometry(10, SEGMENT_LENGTH);
    const material = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
    const segment = new THREE.Mesh(geometry, material);
    segment.rotation.x = -Math.PI / 2;
    segment.position.set(0, 0, z);
    this.scene.add(segment);
    this.segments.push(segment);
  }

  update(delta: number): void {
    const moveDelta = this.speed * delta;

    // Move segments toward player
    for (const segment of this.segments) {
      segment.position.z += moveDelta;
    }
    this.lastSpawnZ += moveDelta;

    // Spawn new segments ahead
    if (this.lastSpawnZ > -SPAWN_DISTANCE) {
      this.spawnSegment(this.lastSpawnZ - SEGMENT_LENGTH);
    }

    // Despawn segments behind
    this.segments = this.segments.filter(segment => {
      if (segment.position.z > DESPAWN_DISTANCE) {
        this.scene.remove(segment);
        segment.geometry.dispose();
        return false;
      }
      return true;
    });
  }

  setSpeed(speed: number): void { this.speed = speed; }
}
```

### ObstacleManager.ts (InstancedMesh Poop)

```typescript
import * as THREE from 'three';
import { SceneManager } from '../core/SceneManager';

const MAX_OBSTACLES = 50;
const OBSTACLE_SPAWN_Z = -60;
const OBSTACLE_DESPAWN_Z = 10;

export class ObstacleManager {
  private scene: THREE.Scene;
  private instancedMesh: THREE.InstancedMesh;
  private dummy: THREE.Object3D;
  private matrices: Float32Array;
  private activeCount: number = 0;
  private speed: number = 10;
  private spawnTimer: number = 0;
  private spawnInterval: number = 1.5;
  private difficulty: number = 1;

  constructor(sceneManager: SceneManager) {
    this.scene = sceneManager.getScene();
    this.dummy = new THREE.Object3D();

    // Create poop geometry (simple cone)
    const geometry = new THREE.ConeGeometry(0.6, 0.8, 8);
    const material = new THREE.MeshLambertMaterial({ color: 0x8B4513 });

    this.instancedMesh = new THREE.InstancedMesh(geometry, material, MAX_OBSTACLES);
    this.matrices = new Float32Array(MAX_OBSTACLES * 16);
    this.scene.add(this.instancedMesh);

    // Initialize all matrices off-screen
    for (let i = 0; i < MAX_OBSTACLES; i++) {
      this.dummy.position.set(0, -100, 0);
      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
  }

  update(delta: number): void {
    this.moveObstacles(delta);
    this.spawnObstacles(delta);
    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  private moveObstacles(delta: number): void {
    const moveDelta = this.speed * delta;

    for (let i = 0; i < this.activeCount; i++) {
      const offset = i * 16;
      const z = this.matrices[offset + 14] + moveDelta;

      if (z > OBSTACLE_DESPAWN_Z) {
        // Despawn by moving off-screen
        this.matrices[offset + 13] = -100; // y
        this.compactObstacles();
        i--;
      } else {
        this.matrices[offset + 14] = z; // z
      }
    }
  }

  private spawnObstacles(delta: number): void {
    this.spawnTimer += delta;

    if (this.spawnTimer >= this.spawnInterval / this.difficulty && this.activeCount < MAX_OBSTACLES - 3) {
      this.spawnTimer = 0;
      this.spawnPattern();
    }
  }

  private spawnPattern(): void {
    const pattern = Math.floor(Math.random() * 3); // 0: single, 1: double, 2: triple
    const lanes = [-3, 0, 3];

    if (pattern === 0) {
      this.spawnAtLane(lanes[Math.floor(Math.random() * 3)]);
    } else if (pattern === 1) {
      const baseLane = Math.floor(Math.random() * 2);
      this.spawnAtLane(lanes[baseLane]);
      this.spawnAtLane(lanes[baseLane + 1]);
    } else {
      this.spawnAtLane(lanes[0]);
      this.spawnAtLane(lanes[1]);
      this.spawnAtLane(lanes[2]);
    }
  }

  private spawnAtLane(x: number): void {
    const i = this.activeCount++;
    const offset = i * 16;

    this.dummy.position.set(x, 0.4, OBSTACLE_SPAWN_Z);
    this.dummy.rotation.y = Math.random() * Math.PI * 2;
    this.dummy.updateMatrix();

    const elements = this.dummy.matrix.elements;
    for (let j = 0; j < 16; j++) {
      this.matrices[offset + j] = elements[j];
    }
  }

  private compactObstacles(): void {
    // Move active obstacles to fill gaps
    let writeIdx = 0;
    for (let readIdx = 0; readIdx < this.activeCount; readIdx++) {
      const readOffset = readIdx * 16;
      if (this.matrices[readOffset + 13] < -50) { // Still active
        if (writeIdx !== readIdx) {
          const writeOffset = writeIdx * 16;
          for (let j = 0; j < 16; j++) {
            this.matrices[writeOffset + j] = this.matrices[readOffset + j];
          }
        }
        writeIdx++;
      }
    }
    this.activeCount = writeIdx;
  }

  getActiveCount(): number { return this.activeCount; }
  getMatrix(i: number): Float32Array {
    return this.matrices.subarray(i * 16, (i + 1) * 16) as Float32Array;
  }

  setDifficulty(difficulty: number): void { this.difficulty = difficulty; }
  setSpeed(speed: number): void { this.speed = speed; }
}
```

### CollisionSystem.ts (AABB Detection)

```typescript
import * as THREE from 'three';
import { RunnerController } from './RunnerController';
import { ObstacleManager } from './ObstacleManager';

export class CollisionSystem {
  private playerBox: THREE.Box3;
  private obstacleBox: THREE.Box3;
  private dummy: THREE.Object3D;

  constructor() {
    this.playerBox = new THREE.Box3();
    this.obstacleBox = new THREE.Box3();
    this.dummy = new THREE.Object3D();
  }

  checkCollision(runner: RunnerController, obstacles: ObstacleManager): boolean {
    const playerMesh = runner.getMesh();
    this.playerBox.setFromObject(playerMesh);

    const activeCount = obstacles.getActiveCount();

    for (let i = 0; i < activeCount; i++) {
      const matrix = obstacles.getMatrix(i);

      // Reconstruct object position from matrix
      this.dummy.matrix.fromArray(matrix);
      this.dummy.updateMatrixWorld();

      // Create temporary mesh for bounding box calculation
      const tempMesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.6, 0.8, 8),
        new THREE.MeshBasicMaterial()
      );
      tempMesh.matrix.copy(this.dummy.matrix);
      tempMesh.matrixAutoUpdate = false;

      this.obstacleBox.setFromObject(tempMesh);

      // Collision check
      if (this.playerBox.intersectsBox(this.obstacleBox)) {
        return true;
      }
    }

    return false;
  }
}
```

### InputManager.ts (Keyboard + Touch)

```typescript
import { RunnerController } from '../game/RunnerController';

const SWIPE_THRESHOLD = 50;

export class InputManager {
  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private runner: RunnerController;

  constructor(runner: RunnerController) {
    this.runner = runner;
    this.setupKeyboard();
    this.setupTouch();
  }

  private setupKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        this.runner.moveLeft();
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        this.runner.moveRight();
      }
    });
  }

  private setupTouch(): void {
    window.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - this.touchStartX;
      const deltaY = Math.abs(touchEndY - this.touchStartY);

      // Only register swipe if horizontal movement is dominant
      if (Math.abs(deltaX) > SWIPE_THRESHOLD && deltaY < SWIPE_THRESHOLD * 1.5) {
        if (deltaX > 0) {
          this.runner.moveRight();
        } else {
          this.runner.moveLeft();
        }
      }
    });
  }
}
```

### UIManager.ts (Overlays)

```typescript
export class UIManager {
  private scoreElement: HTMLElement;
  private overlayElement: HTMLElement;
  private startScreen: HTMLElement;
  private gameOverScreen: HTMLElement;
  private restartButton: HTMLElement;
  private score: number = 0;

  constructor() {
    this.scoreElement = document.getElementById('score')!;
    this.overlayElement = document.getElementById('overlay')!;
    this.startScreen = document.getElementById('start-screen')!;
    this.gameOverScreen = document.getElementById('game-over-screen')!;
    this.restartButton = document.getElementById('restart-button')!;

    this.startScreen.addEventListener('click', () => this.startGame());
    this.restartButton.addEventListener('click', () => this.restartGame());
  }

  startGame(): void {
    this.startScreen.style.display = 'none';
    this.overlayElement.style.display = 'none';
  }

  showGameOver(): void {
    this.gameOverScreen.style.display = 'flex';
    this.overlayElement.style.display = 'flex';
  }

  restartGame(): void {
    this.gameOverScreen.style.display = 'none';
    this.resetScore();
  }

  updateScore(delta: number): void {
    this.score += delta * 10;
    this.scoreElement.textContent = Math.floor(this.score).toString();
  }

  resetScore(): void {
    this.score = 0;
    this.scoreElement.textContent = '0';
  }
}
```

### main.ts (Entry Point)

```typescript
import './style.css';
import { SceneManager } from './core/SceneManager';
import { GameLoop } from './core/GameLoop';
import { RunnerController } from './game/RunnerController';
import { TrackManager } from './game/TrackManager';
import { ObstacleManager } from './game/ObstacleManager';
import { CollisionSystem } from './game/CollisionSystem';
import { InputManager } from './input/InputManager';
import { UIManager } from './ui/UIManager';

const canvas = document.getElementById('canvas')!;
const sceneManager = new SceneManager(canvas);
const gameLoop = new GameLoop(sceneManager);

const runner = new RunnerController(sceneManager);
const track = new TrackManager(sceneManager);
const obstacles = new ObstacleManager(sceneManager);
const collision = new CollisionSystem();
const input = new InputManager(runner);
const ui = new UIManager();

let isPlaying = boolean = false;
let score = 0;

// Register update systems
gameLoop.registerUpdate((delta) => {
  if (!isPlaying) return;

  runner.update(delta);
  track.update(delta);
  obstacles.update(delta);

  // Difficulty scaling
  const difficulty = 1 + score * 0.001;
  obstacles.setDifficulty(difficulty);

  // Collision check
  if (collision.checkCollision(runner, obstacles)) {
    gameOver();
  }

  // Score update
  score += delta;
  ui.updateScore(delta);
});

function gameOver(): void {
  isPlaying = false;
  ui.showGameOver();
}

function startGame(): void {
  isPlaying = true;
  score = 0;
  ui.startGame();
}

// Auto-start on load (remove for production)
startGame();
gameLoop.start();
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toilet Runner</title>
</head>
<body>
  <div id="canvas"></div>
  <div id="score">0</div>
  <div id="overlay">
    <div id="start-screen">
      <h1>Toilet Runner</h1>
      <p>Tap or press any key to start</p>
    </div>
    <div id="game-over-screen" style="display: none;">
      <h1>Game Over!</h1>
      <p id="final-score">Score: 0</p>
      <button id="restart-button">Play Again</button>
    </div>
  </div>
  <script type="module" src="/src/main.ts"></script>
</body>
</html>
```

## Testing & Debugging

### Mobile Testing

**Chrome DevTools:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device (iPhone, Pixel, etc.)
4. Enable "Show device frame"

**Real Device Testing:**
1. Run `bun run dev`
2. Find local IP: `ip addr` (Linux) or `ipconfig` (Windows)
3. Access from mobile: `http://<local-ip>:5173`
4. Enable Chrome://inspect for remote debugging

### Performance Profiling

**FPS Counter:**
```typescript
const stats = new Stats();
document.body.appendChild(stats.dom);

gameLoop.registerUpdate(() => {
  stats.update();
});
```

**Chrome Performance Tab:**
1. Open DevTools → Performance
2. Record 5-10 seconds of gameplay
3. Look for:
   - Long tasks (>50ms)
   - Frequent garbage collection
   - JS execution vs. rendering time

**Key Metrics:**
- Target: 55-60 FPS on mid-range mobile
- Draw calls: <10 (use InstancedMesh)
- Triangles: <10,000
- Memory: Stable, no growth over time

### Common Issues & Solutions

**Stuttering on mobile:**
- Reduce particle count
- Lower shadow quality
- Disable antialias: `antialias: false`
- Use `MeshLambertMaterial` instead of `MeshPhongMaterial`

**Flickering/jitter:**
- Clamp delta time: `const delta = Math.min(clock.getDelta(), 0.1)`
- Use fixed time step for physics
- Avoid modifying geometry in render loop

**Low FPS on older devices:**
- Reduce polygon count on models
- Use simpler lighting (ambient + one directional)
- Disable shadows: `renderer.shadowMap.enabled = false`
- Lower render resolution: `renderer.setSize(w * 0.75, h * 0.75)`

## Deployment (GitHub Pages)

### Build & Deploy

```bash
# Production build
bun run build

# Output: dist/ folder ready for GitHub Pages
```

### Option 1: Manual Upload
```bash
# Upload contents of dist/ to gh-pages branch
git checkout -b gh-pages
git add -f dist
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Option 2: gh-pages Package
```bash
bun add -d gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
bun run deploy
```

### Option 3: GitHub Actions Workflow

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Evolution Beyond MVP (Brief)

### Power-ups
- **Shield:** Collision immunity for 5 seconds
- **Speed Boost:** 2x speed, double score
- **Magnet:** Collect nearby coins (add currency system)

### Character Skins
- Store simple color/material configurations
- Unlock via score thresholds or collected currency
- Example patterns: "Classic White", "Pink Plush", "Gold"

### Currency System
- Client-only (no server needed)
- Collected during runs
- Persistent in localStorage

### Advanced Environments
- Multiple biome themes (city, park, beach)
- Dynamic lighting (day/night cycle)
- Animated decorations (trees, signs)

### Technical Extensions
- **Mixamo Animations:** Add humanoid character with run/jump/slide
- **Sound Effects:** Audio context for footsteps, collect sounds, music
- **Leaderboard:** Integrate with Firebase or client-side high score
- **Ads:** Mobile ad network integration for monetization

---

## Architecture Summary

This MVP follows proven endless runner patterns:
- **World moves, player stays** (Subway Surfers pattern)
- **InstancedMesh obstacles** (draw call optimization from Three.js community)
- **AABB collision** (sufficient for simple runners, MDN pattern)
- **Object pooling** (memory management from mobile optimization guides)
- **Bun + Vite** (modern, fast dev experience)

**Performance target:** 55-60 FPS on mid-range mobile (2020+ devices)

**Tech stack aligned with constraints:**
- Bun for package management and scripts
- Vite for build tooling
- TypeScript for type safety
- Static hosting compatible (GitHub Pages)
