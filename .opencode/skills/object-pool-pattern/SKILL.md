---
name: object-pool-pattern
description: Object pooling pattern for Three.js games
license: MIT
metadata:
  version: 1.0.0
  category: performance
  related: memory-optimization
---

## What I do

Implement object pooling pattern to reduce GC pressure.

### Basic pool implementation:
```typescript
class ObjectPool<T extends THREE.Object3D> {
  private available: T[] = [];
  private inUse: Set<T> = new Set();

  constructor(
    private factory: () => T,
    private initialSize: number = 10
  ) {
    // Pre-warm pool
    for (let i = 0; i < initialSize; i++) {
      this.available.push(this.factory());
    }
  }

  acquire(): T {
    let obj: T;
    if (this.available.length > 0) {
      obj = this.available.pop()!;
    } else {
      obj = this.factory(); // Grow pool if needed
    }
    this.inUse.add(obj);
    return obj;
  }

  release(obj: T): void {
    if (this.inUse.has(obj)) {
      this.inUse.delete(obj);
      this.available.push(obj);

      // Reset object state
      obj.visible = false;
      obj.position.set(0, -100, 0);
    }
  }

  getStats(): { available: number; inUse: number } {
    return {
      available: this.available.length,
      inUse: this.inUse.size
    };
  }
}
```

### Usage for track segments:
```typescript
class TrackManager {
  private segmentPool: ObjectPool<THREE.Mesh>;

  constructor(scene: THREE.Scene) {
    this.segmentPool = new ObjectPool(
      () => {
        const geometry = new THREE.PlaneGeometry(10, 10);
        const material = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2;
        return mesh;
      },
      20 // Initial pool size
    );
  }

  spawnSegment(z: number): void {
    const segment = this.segmentPool.acquire();
    segment.position.set(0, 0, z);
    segment.visible = true;
    this.scene.add(segment);
    this.segments.push(segment);
  }

  despawnSegment(segment: THREE.Mesh): void {
    this.scene.remove(segment);
    this.segmentPool.release(segment);
  }
}
```

## When to use me

**Use proactively when:** Implementing segment/obstacle pools in Toilet Runner or any game with frequent object creation/destruction.

I should be invoked for:
- Any game with frequently created/destroyed objects
- When GC pressure causes frame drops
- Particle systems
- Projectiles, enemies, or obstacles
- Track segments in endless runners

Use object pooling whenever you create 10+ objects per minute to eliminate GC pauses.

## Performance impact:

**Without pooling:** 50+ allocations per minute
**With pooling:** 0 allocations after initial warmup
**Result:** Eliminates GC pauses and frame drops

## Notes

- Pre-warm pool at startup
- Grow pool on demand if needed
- Reset object state on release (position, rotation, visible)
- Use InstancedMesh for obstacles instead (better than pool for static instances)
