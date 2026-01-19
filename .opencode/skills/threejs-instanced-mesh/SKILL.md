---
name: threejs-instanced-mesh
description: Three.js InstancedMesh patterns for draw call optimization
license: MIT
metadata:
  version: 1.0.0
  category: three.js
  related: performance-optimization
---

## What I do

Implement Three.js InstancedMesh patterns for reducing draw calls.

### Pattern: Obstacle Instancing
```typescript
const OBSTACLE_COUNT = 50;

// Create one geometry shared by all instances
const geometry = new THREE.ConeGeometry(0.6, 0.8, 8);
const material = new THREE.MeshLambertMaterial({ color: 0x8B4513 });

// InstancedMesh: 1 draw call for all obstacles
const instancedMesh = new THREE.InstancedMesh(
  geometry,
  material,
  OBSTACLE_COUNT
);
scene.add(instancedMesh);

// Matrices for position/rotation of each instance
const dummy = new THREE.Object3D();
const matrices = new Float32Array(OBSTACLE_COUNT * 16);

// Update instance at index i
function updateObstacle(i: number, x: number, z: number): void {
  const offset = i * 16;
  dummy.position.set(x, 0.4, z);
  dummy.rotation.y = Math.random() * Math.PI * 2;
  dummy.updateMatrix();

  const elements = dummy.matrix.elements;
  for (let j = 0; j < 16; j++) {
    matrices[offset + j] = elements[j];
  }
}

// Apply matrices to InstancedMesh
instancedMesh.instanceMatrix.set(matrices);
```

### Pattern: Ground Segment Instancing
```typescript
// Instead of creating multiple ground meshes:
// ❌ BAD: 8 draw calls for 8 segments
for (let i = 0; i < 8; i++) {
  const segment = new THREE.Mesh(geometry, material);
  scene.add(segment);
}

// ✅ GOOD: 1 draw call using InstancedMesh
const groundMesh = new THREE.InstancedMesh(
  planeGeometry,
  groundMaterial,
  SEGMENT_COUNT
);
scene.add(groundMesh);
```

## Performance impact

- **Without instancing:** 50+ draw calls for obstacles
- **With instancing:** 1 draw call for all obstacles
- **Result:** 10-50x GPU overhead reduction

## When to use me

**Use proactively when:** Implementing obstacle or ground segment systems in Toilet Runner or any game with repeated 3D objects.

I should be invoked for:
- Creating obstacle pools with multiple instances
- Implementing ground segments that repeat
- Any scenario where the same geometry appears multiple times
- Particle systems or decorative elements

Use instancing whenever you have 10+ copies of the same geometry to significantly reduce draw calls.

## Notes

- All instances share same geometry and material
- Use `setMatrixAt()` and `setColorAt()` for per-instance customization
- Call `instanceMatrix.needsUpdate = true` after modifying matrices
- Ideal for repeated objects: obstacles, particles, decorations
