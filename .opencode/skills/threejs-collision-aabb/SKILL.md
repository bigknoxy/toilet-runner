---
name: threejs-collision-aabb
description: Three.js AABB collision detection for game objects
license: MIT
metadata:
  version: 1.0.0
  category: three.js
  related: collision-detection
---

## What I do

Implement efficient AABB collision detection using Three.js Box3.

### Player vs Obstacle collision:
```typescript
import * as THREE from 'three';

export class CollisionSystem {
  private playerBox: THREE.Box3;
  private obstacleBox: THREE.Box3;

  constructor() {
    this.playerBox = new THREE.Box3();
    this.obstacleBox = new THREE.Box3();
  }

  checkCollision(player: THREE.Mesh, obstacles: THREE.InstancedMesh): boolean {
    // Get player's bounding box
    this.playerBox.setFromObject(player);

    // Check against each active obstacle
    const activeCount = obstacles.count;
    for (let i = 0; i < activeCount; i++) {
      // Get instance matrix
      const matrix = obstacles.getMatrixAt(i);

      // Reconstruct bounding box from matrix
      const dummy = new THREE.Object3D();
      dummy.matrix.fromArray(matrix);
      dummy.updateMatrixWorld();

      // Create temp mesh for bounds
      const tempMesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.6, 0.8, 8),
        new THREE.MeshBasicMaterial()
      );
      tempMesh.matrix.copy(dummy.matrix);
      tempMesh.matrixAutoUpdate = false;

      this.obstacleBox.setFromObject(tempMesh);

      // Check intersection
      if (this.playerBox.intersectsBox(this.obstacleBox)) {
        return true; // Collision detected
      }
    }

    return false; // No collision
  }
}
```

### Optimization tips:

1. **Only check active obstacles** - Skip despawned instances
2. **Use simple bounds first** - AABB before detailed checks
3. **Spatial partitioning** - Grid or octree for many objects (not needed for 50 obstacles)
4. **Reuse Box3 objects** - Don't create in hot loop

## When to use me

**Use proactively when:** Implementing collision detection between toilet paper runner and poop obstacles or any simple 3D game collision system.

I should be invoked for:
- Player vs obstacle collision in endless runners
- Simple box-to-box collision detection
- When collision complexity doesn't require OBB (Oriented Bounding Box)
- Performance-critical collision systems with many objects

AABB is sufficient for simple runner games; don't overengineer with OBB unless rotating collision shapes are needed.

## Notes

- AABB is sufficient for simple runner; OBB is overkill
- Three.js `intersectsBox()` is optimized and fast
- Reuse Box3 instances to avoid GC pressure
