# AGENTS.md - Toilet Runner Development Guide

## Project Overview

Toilet Runner is a 3D endless runner game built with **Bun + Vite + Three.js + TypeScript**. A toilet paper roll runs forward on a three-lane path, avoiding piles of poop obstacles. The world moves toward the player (not player through world) to avoid floating-point precision issues.

## Technology Stack

- **Runtime:** Bun (package manager and script runner)
- **Build Tool:** Vite (HMR, optimized builds, asset handling)
- **3D Engine:** Three.js (InstancedMesh, Box3 collision, mobile optimization)
- **Language:** TypeScript (strict mode, ES2015 target)
- **Deployment:** GitHub Pages (static hosting, no server-side logic)

## Architecture Pattern

**World-moves-to-player**: Segments spawn ahead and despawn behind, camera stays fixed. This eliminates floating-point precision issues at large coordinates and simplifies collision detection.

## Build, Lint, and Test Commands

```bash
# Development
bun run dev                    # Start Vite dev server (port 5173)

> **IMPORTANT: Port 5173 is MANDATORY for `bun run dev`.** Firewall rules are configured for this port to allow testing on mobile devices over the network. Never use a different port.

# Build
bun run build                  # Production build to dist/
bun run preview                # Preview built dist/

# Testing
bun test                      # Run tests (if test framework added)
bun test --watch               # Watch mode for tests

# Deployment
bun run deploy                  # Deploy to GitHub Pages (via gh-pages)
```

## Code Style Guidelines

### Imports and Dependencies

- **ESM imports only**: `import * as THREE from 'three'`
- **No CommonJS**: Avoid `require()`
- **Group imports**: Third-party first, then local modules
- **Three.js specific**: Use `THREE.MathUtils` for utilities, not custom implementations

### Formatting

- **2 spaces for indentation** (no tabs)
- **Trailing commas in objects** (last element no comma)
- **Arrow function braces**: `() => {}` (no function keyword)
- **Const by default**: Use `const`, `let` only when reassignment needed

### Types

- **Explicit types**: No `any`, use proper TypeScript types
- **Interfaces for data**: `interface GameState`, `interface RunnerState`
- **Enums for constants**: `enum GameState { MENU, PLAYING, GAMEOVER }`
- **THREE types**: Import from `three` package, don't redefine

### Naming Conventions

- **Classes**: PascalCase - `class RunnerController`, `class TrackManager`
- **Methods**: camelCase - `moveLeft()`, `updatePosition()`
- **Constants**: UPPER_SNAKE_CASE - `const LANE_WIDTH = 3`
- **Private members**: Underscore prefix - `private _speed: number`
- **Interfaces**: PascalCase - `interface IGameState` (optional, I prefix not required)

### File Organization

```
src/
├── core/           # Core systems (loop, renderer, state)
├── game/           # Game logic (runner, track, obstacles, collision)
├── input/           # Input handling (keyboard, touch)
├── ui/              # UI overlays (start, score, game over)
└── main.ts          # Entry point, wire everything together
```

### Error Handling

- **Try/catch for async**: File operations, API calls
- **Type guards**: Check null/undefined before use
- **Validation**: Validate lane indices, array bounds
- **No silent failures**: Log errors with console.error()
- **Graceful degradation**: Disable features if not supported (WebGL)

```typescript
// Good: Type guard and error handling
if (obstacles.count > 0) {
  try {
    const matrix = obstacles.getMatrixAt(0);
    if (!matrix) {
      throw new Error('Failed to get obstacle matrix');
    }
    processMatrix(matrix);
  } catch (error) {
    console.error('Obstacle processing error:', error);
  }
}
```

## Performance Guidelines

### Memory Management

- **Object pooling**: Reuse THREE.Object3D, THREE.Box3 in hot loops
- **No per-frame allocation**: Avoid `new THREE.Vector3()` in update loops
- **Dispose geometries**: Call `.dispose()` when removing from scene
- **Reuse instances**: InstancedMesh over multiple Mesh objects

```typescript
// Bad: Creates 50 Vector3 per frame
for (let i = 0; i < 50; i++) {
  const position = new THREE.Vector3(x, y, z); // ❌ GC pressure
}

// Good: Reuses single Vector3
const tempVector = new THREE.Vector3();
for (let i = 0; i < 50; i++) {
  tempVector.set(x, y, z); // ✅ No allocation
}
```

### Draw Call Optimization

- **InstancedMesh**: Use for repeated objects (obstacles, ground segments)
- **Target**: <10 draw calls total (1 player, 1-2 ground, 1 obstacles)
- **Merge geometries**: Combine similar static meshes when possible

```typescript
// Bad: 50 draw calls
for (let i = 0; i < 50; i++) {
  const obstacle = new THREE.Mesh(geometry, material);
  scene.add(obstacle); // ❌ 50 draw calls
}

// Good: 1 draw call
const obstacles = new THREE.InstancedMesh(geometry, material, 50);
scene.add(obstacles); // ✅ 1 draw call
```

### Mobile Optimization

- **Pixel ratio clamping**: `Math.min(window.devicePixelRatio, 2)`
- **Simple materials**: Use MeshLambertMaterial (not MeshPhongMaterial)
- **Disable PBR**: No MeshStandardMaterial on mobile
- **Fog**: Hide distant geometry (performance + aesthetics)
- **Power preference**: `powerPreference: 'high-performance'`

```typescript
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
  alpha: true,
  outputColorSpace: THREE.SRGBColorSpace
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

## Three.js Best Practices

### Scene Graph

- **Logical grouping**: Group related objects (player, track, obstacles)
- **Minimal depth**: Avoid deep nesting when possible
- **Matrix updates**: Batch updates to scene

### Rendering

- **RequestAnimationFrame**: Use Three.js clock for delta time
- **Cap delta**: `Math.min(clock.getDelta(), 0.1)` prevents huge jumps
- **Render phase**: Separate from update phase (clear separation of concerns)

```typescript
// Good: Separated update and render
const clock = new THREE.Clock();

function gameLoop() {
  const delta = Math.min(clock.getDelta(), 0.1);

  // Update phase
  runner.update(delta);
  track.update(delta);
  obstacles.update(delta);

  // Render phase
  renderer.render(scene, camera);

  requestAnimationFrame(gameLoop);
}
```

### Collision Detection

- **AABB sufficient**: Use Box3.intersectsBox() for simple runners
- **Reuse Box3**: Don't create new Box3 per frame
- **Spatial partitioning**: Only needed for 100+ objects

```typescript
// Good: Reusable collision system
const playerBox = new THREE.Box3();
const obstacleBox = new THREE.Box3();

function checkCollision(): boolean {
  playerBox.setFromObject(playerMesh);
  obstacleBox.setFromObject(obstacleMesh);
  return playerBox.intersectsBox(obstacleBox);
}
```

## Input Handling

- **Cross-platform**: Support both keyboard and touch/swipe
- **Threshold-based**: Swipe detection with 50px threshold
- **Debouncing**: Prevent rapid state changes
- **No scroll interference**: Use touchstart/touchend, not touchmove

```typescript
// Good: Dual input support
class InputManager {
  setupKeyboard() {
    window.addEventListener('keydown', handleKey);
  }

  setupTouch() {
    window.addEventListener('touchstart', recordTouchStart);
    window.addEventListener('touchend', checkSwipe);
  }
}
```

## Testing Strategy

### Unit Tests (To Add)

- **Game systems**: Test RunnerController, TrackManager in isolation
- **Collision detection**: Test AABB logic with known edge cases
- **Input handling**: Mock keyboard and touch events
- **State management**: Test GameState transitions

```bash
# When test framework added
bun test                         # Run all tests
bun test --watch                 # Watch mode
bun test --coverage              # Generate coverage report
```

### Integration Testing

- **End-to-end**: Test complete game flow (start → play → game over → restart)
- **Mobile devices**: Test on real devices, not just DevTools emulation
- **Performance**: Profile FPS on target devices (55-60 FPS on mobile)

```bash
# Mobile testing workflow
bun run dev                          # Start dev server
# Access from mobile device
http://<local-ip>:5173
# Chrome remote debugging
chrome://inspect
```

## Project-Specific Patterns

### Endless Runner Specific

- **3-lane system**: LEFT (-3), CENTER (0), RIGHT (3)
- **Lane switching**: Smooth lerp with LERP_SPEED constant
- **World movement**: Segments move +Z (toward player), not player -Z
- **Spawn/despawn**: Create ahead at -60-80, destroy behind at +20

```typescript
// Pattern: World moves to player
const SEGMENT_LENGTH = 10;
const SPAWN_DISTANCE = 80;
const DESPAWN_DISTANCE = 20;

function updateTrack(delta: number): void {
  const moveDelta = speed * delta;

  for (const segment of segments) {
    segment.position.z += moveDelta; // World moves toward player
  }
}
```

### Character Mechanics

- **Toilet roll**: Cylinder geometry (CylinderGeometry(0.5, 0.5, 1, 12))
- **Rolling animation**: Rotation.z update based on speed
- **Squash-stretch**: Scale Y based on jump (stretch goal)

### Obstacle Mechanics

- **Poop obstacles**: Cone geometry (ConeGeometry(0.6, 0.8, 8))
- **InstancedMesh**: Single draw call for all obstacles
- **Spawn patterns**: Single, double, or triple obstacles per segment
- **Difficulty scaling**: Spawn rate and speed increase over score

## Configuration Files

### package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  }
}
```

### vite.config.ts

**Critical for GitHub Pages**: Must set `base: './'` to fix asset paths.

```typescript
export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    minify: 'terser',
    outDir: 'dist'
  }
});
```

### tsconfig.json

**Strict TypeScript**: No implicit any, explicit types required.

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2015",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

## OpenCode Integration

### Available Skills

All skills are in `.opencode/skills/` and have "Use proactively when:" language for automatic agent invocation:

1. **bun-project-setup** - Initialize Bun + Vite project
2. **threejs-renderer-config** - Mobile-optimized WebGL renderer
3. **threejs-instanced-mesh** - Draw call reduction patterns
4. **threejs-collision-aabb** - AABB collision detection
5. **game-loop-delta-time** - Frame-rate independent game loop
6. **input-manager-touch-keyboard** - Desktop + mobile input
7. **endless-runner-track-segments** - World-moves-to-player pattern
8. **vite-github-pages-deploy** - GitHub Pages deployment
9. **performance-profiling-mobile** - Device testing and profiling
10. **object-pool-pattern** - Memory optimization

### Using Skills Proactively

**When troubleshooting issues, use relevant skills proactively:**

- **Renderer issues**: Use `threejs-renderer-config` skill for WebGL problems, mobile optimization
- **Performance issues**: Use `performance-profiling-mobile` skill to profile FPS, draw calls, memory
- **Collision bugs**: Use `threejs-collision-aabb` skill for AABB collision patterns
- **Object management**: Use `object-pool-pattern` skill for memory/GC issues
- **Game loop**: Use `game-loop-delta-time` skill for frame-rate/loop problems
- **Track/obstacles**: Use `endless-runner-track-segments` skill for spawning/despawning issues
- **Input problems**: Use `input-manager-touch-keyboard` skill for control issues

**Before editing code:**
1. Check if a skill exists for the problem area
2. Load the skill to understand best practices
3. Apply skill recommendations before making custom changes

### Using Skills Proactively

**When troubleshooting issues, use relevant skills proactively:**

- **Renderer issues**: Use `threejs-renderer-config` skill for WebGL problems, mobile optimization
- **Performance issues**: Use `performance-profiling-mobile` skill to profile FPS, draw calls, memory
- **Collision bugs**: Use `threejs-collision-aabb` skill for AABB collision patterns
- **Object management**: Use `object-pool-pattern` skill for memory/GC issues
- **Game loop**: Use `game-loop-delta-time` skill for frame-rate/loop problems
- **Track/obstacles**: Use `endless-runner-track-segments` skill for spawning/despawning issues
- **Input problems**: Use `input-manager-touch-keyboard` skill for control issues

**Before editing code:**
1. Check if a skill exists for the problem area
2. Load the skill to understand best practices
3. Apply skill recommendations before making custom changes

### Available Agents

#### Three.js Architect
- **Model**: `opencode/glm-4.7-free`
- **Mode**: Primary
- **Tools**: write, edit, skill
- **Use for**: Three.js renderer, InstancedMesh, mobile optimization, architecture decisions

#### TypeScript Game Logic
- **Model**: `opencode/glm-4.7-free`
- **Mode**: Primary
- **Temperature**: 0.3
- **Tools**: write, edit, bash, skill
- **Use for**: Game systems, state management, input, collision, performance

#### Plan Agent (Built-in)
- **Use for**: Architecture review, code analysis, planning without changes
- **Mode**: Primary (restricted, file edits ask by default)

#### Build Agent (Built-in)
- **Use for**: Implementation, file creation, bash commands
- **Mode**: Primary (all tools enabled)

## Workflow for AI Agents

### Phase 1: Project Setup
Use `typescript-gamelogic` agent with `bun-project-setup` skill.

### Phase 2: Three.js Architecture
Use `threejs-architect` agent with:
- `threejs-renderer-config` skill - Renderer setup
- `threejs-instanced-mesh` skill - Obstacle system
- `threejs-collision-aabb` skill - Collision detection

### Phase 3: Game Logic
Use `typescript-gamelogic` agent with:
- `game-loop-delta-time` skill - Game loop
- `input-manager-touch-keyboard` skill - Input handling
- `endless-runner-track-segments` skill - Track system

### Phase 4: Optimization
Use `threejs-architect` agent with:
- `object-pool-pattern` skill - Memory optimization
- `performance-profiling-mobile` skill - Testing and profiling

### Phase 5: Deployment
Use `typescript-gamelogic` agent with `vite-github-pages-deploy` skill.

### Phase 6: Testing
Use `typescript-gamelogic` agent for:
- Unit tests (when framework added)
- Integration testing on mobile devices
- Performance profiling

## Deployment Workflow

1. Run `bun run build` to create `dist/` folder
2. Run `bun run deploy` to deploy to GitHub Pages (via gh-pages)
3. Or push to `main` branch for automatic GitHub Actions deployment

## Performance Targets

- **FPS**: 55-60 on mid-range mobile (2020+ devices)
- **Draw calls**: <10 total (1 player, 1-2 ground, 1 obstacles, UI)
- **Triangles**: <10,000 (low-poly models, simple materials)
- **Memory**: Stable, no growth over time (object pooling, no per-frame allocations)

## Key Constants

```typescript
const LANE_WIDTH = 3;           // Distance between lanes
const LERP_SPEED = 8;           // Lane transition speed
const BASE_SPEED = 10;          // Initial game speed
const SEGMENT_LENGTH = 10;       // Length of each ground segment
const VISIBLE_SEGMENTS = 8;    // Segments visible ahead
const SPAWN_DISTANCE = 80;       // Distance to spawn ahead
const DESPAWN_DISTANCE = 20;      // Distance to despawn behind
const MAX_OBSTACLES = 50;       // Maximum obstacles in pool
const SWIPE_THRESHOLD = 50;      // Touch swipe threshold (px)
```

## Common Pitfalls to Avoid

1. **Player moves through world**: Causes floating-point precision issues at large Z
2. **Multiple draw calls**: Use InstancedMesh for repeated objects
3. **Per-frame allocations**: Reuse THREE.Vector3, THREE.Box3 in hot loops
4. **No delta time**: Movement becomes frame-dependent
5. **Missing base path**: GitHub Pages assets break without `base: './'`
6. **High-poly models**: Keep geometry segments low (8-12 for cylinders/cones)
7. **PBR materials**: Use MeshLambertMaterial on mobile, not MeshStandardMaterial
8. **No object pooling**: GC pressure causes frame drops
9. **Collision over-engineering**: AABB sufficient for simple runners
10. **Touchmove for swipe**: Causes page scroll, use touchstart/touchend

## References

- **Architecture**: See `toilet-runner-mvp.md` for detailed system design
- **Skills**: See `.opencode/skills/*/SKILL.md` for pattern implementation
- **Agents**: See `.opencode/agents/*.md` for agent specialties
- **Setup**: See `SETUP-COMPLETE.md` for quick start guide

## Notes for AI Agents

- **Use skills proactively**: Skills have "when to use" language for automatic invocation
- **Select agents based on task**: Three.js Architect for WebGL, TypeScript Game Logic for game systems
- **Follow code style**: Use 2-space indentation, camelCase methods, PascalCase classes
- **Prioritize performance**: InstancedMesh, object pooling, simple materials
- **Test on mobile**: Profile FPS before deploying to ensure 55-60 FPS target
- **Model specification**: Use `opencode/glm-4.7-free` when specified in agent config

This project uses Bun exclusively - do not use npm, yarn, or pnpm commands.
