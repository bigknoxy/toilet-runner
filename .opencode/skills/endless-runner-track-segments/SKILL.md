---
name: endless-runner-track-segments
description: Implement endless runner track with spawning/despawning
license: MIT
metadata:
  version: 1.0.0
  category: game-patterns
  related: endless-runner
---

## What I do

Implement world-moves-to-player pattern for endless runners.

### Core concept:
Instead of moving player through infinite world, move world toward player:

```typescript
export class TrackManager {
  private scene: THREE.Scene;
  private segments: THREE.Mesh[] = [];
  private speed: number = 10;
  private lastSpawnZ: number = 0;

  // Configuration
  readonly SEGMENT_LENGTH = 10;
  readonly SPAWN_DISTANCE = 80;  // 8 segments visible
  readonly DESPAWN_DISTANCE = 20; // Behind camera

  update(delta: number): void {
    const moveDelta = this.speed * delta;

    // Move segments TOWARD player (+Z)
    for (const segment of this.segments) {
      segment.position.z += moveDelta;
    }
    this.lastSpawnZ += moveDelta;

    // Spawn new segments ahead
    if (this.lastSpawnZ > -this.SPAWN_DISTANCE) {
      this.spawnSegment(this.lastSpawnZ - this.SEGMENT_LENGTH);
    }

    // Despawn segments behind
    this.segments = this.segments.filter(segment => {
      if (segment.position.z > this.DESPAWN_DISTANCE) {
        this.scene.remove(segment);
        segment.geometry.dispose();
        return false;
      }
      return true;
    });
  }
}
```

### Why this pattern:

**Player-stays, world-moves:**
- ✅ No floating-point precision issues at large coordinates
- ✅ Camera always at same relative position
- ✅ Simplified collision (player X/Y only changes)
- ✅ Easy spawn/despawn logic

**Player-moves, world-static:**
- ❌ x=1000000.0 precision issues
- ❌ Complex camera follow
- ❌ More complex collision checks

## When to use me

**Use proactively when:** Implementing endless track system for Toilet Runner or any infinite runner game.

I should be invoked for:
- Creating endless runner game mechanics
- When floating-point precision is a concern
- Implementing spawn/despawn systems
- World-moves-to-player pattern

Always use this pattern for endless runners to avoid precision issues and simplify collision.

## Notes

- Use object pooling for segments (optional, good for memory)
- Fog hides spawn/despawn edge
- Despawn behind camera, spawn ahead
- Speed increases over time (difficulty)
