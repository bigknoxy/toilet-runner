---
name: game-loop-delta-time
description: Frame-rate independent game loop with delta time
license: MIT
metadata:
  version: 1.0.0
  category: game-development
  related: game-architecture
---

## What I do

Implement frame-rate independent game loop using delta time.

### Core pattern:
```typescript
import * as THREE from 'three';

export class GameLoop {
  private clock: THREE.Clock;
  private isRunning: boolean = false;
  private updateSystems: Array<(delta: number) => void> = [];

  constructor() {
    this.clock = new THREE.Clock();
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

  private loop(): void {
    if (!this.isRunning) return;

    // Get delta time (seconds since last frame)
    const delta = Math.min(this.clock.getDelta(), 0.1); // Cap at 100ms

    // Update phase: all game systems
    for (const system of this.updateSystems) {
      system(delta);
    }

    // Request next frame
    requestAnimationFrame(() => this.loop());
  }
}
```

### Using delta time in movement:
```typescript
// ❌ BAD: Frame-dependent movement
player.position.x += 0.1; // Fast at 144fps, slow at 30fps

// ✅ GOOD: Frame-independent movement
player.position.x += 0.1 * delta; // Consistent at any fps

// With smoothing (lerp):
const targetX = currentLane * LANE_WIDTH;
currentX = THREE.MathUtils.lerp(currentX, targetX, LERP_SPEED * delta);
```

### Why delta time matters:

- **144 FPS:** delta ≈ 0.007s
- **60 FPS:** delta ≈ 0.017s
- **30 FPS:** delta ≈ 0.033s

Without delta time, game runs 2.4x faster at 144fps vs 30fps.

## When to use me

**Use proactively when:** Implementing game loop for Toilet Runner or any real-time game.

I should be invoked for:
- Creating any real-time game loop system
- When frame-rate independence is required
- When implementing smooth movement and animations
- Any game with variable frame rates

Always use delta time for movement to ensure consistent gameplay across all devices.

## Notes

- Cap delta to prevent huge jumps after lag spikes
- Use seconds, not milliseconds
- Register systems, call in deterministic order
