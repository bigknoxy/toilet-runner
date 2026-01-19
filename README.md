# Toilet Runner - Project Documentation

3D endless runner game built with Three.js, TypeScript, Bun, and Vite.

## Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Tech Stack

- **Runtime:** Bun
- **Build Tool:** Vite
- **3D Engine:** Three.js
- **Language:** TypeScript
- **Hosting:** GitHub Pages (static)

## Game Concept

A humorous 3D endless runner where a toilet paper roll runs forward, avoiding piles of poop on a three-lane path.

- **Controls:** Arrow keys/WASD on desktop, swipe left/right on mobile
- **Mechanic:** World moves toward player, not player through world
- **Obstacles:** InstancedMesh piles of poop (1 draw call for all obstacles)
- **Performance:** Target 55-60 FPS on mobile devices

## Architecture

### Core Systems
- **GameLoop:** Frame-rate independent update loop with delta time
- **SceneManager:** Three.js renderer, scene, camera, lighting
- **GameState:** MENU, PLAYING, GAMEOVER states

### Game Systems
- **RunnerController:** Lane-based movement with smooth lerp interpolation
- **TrackManager:** Endless segments spawning/despawning
- **ObstacleManager:** InstancedMesh obstacles with spawn patterns
- **CollisionSystem:** AABB collision using THREE.Box3

### Input & UI
- **InputManager:** Keyboard + touch/swipe support
- **UIManager:** Start screen, score display, game over overlay

## Performance Optimizations

- **InstancedMesh:** 1 draw call for 50+ obstacles
- **Pixel ratio:** Clamped to 2x on mobile
- **Object pooling:** Reduce GC pressure
- **Fog:** Hide distant geometry
- **Simple materials:** MeshLambertMaterial (not PBR)
- **Draw calls:** <10 total
- **Triangles:** <10,000

## Deployment

### GitHub Pages
```bash
# Build
bun run build

# Deploy
bun run deploy
```

Or push to main branch for automatic GitHub Actions deployment.

## License

MIT

## Credits

Built with OpenCode agents and skills. See `.opencode/` directory for configuration.
