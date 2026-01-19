# 🚽 Stage 3: Groups + Optimizations Fallback Plan

**Document Version:** 1.0  
**Date:** January 19, 2026  
**Status:** FALLBACK ONLY  
**Trigger:** Stage 2 (BufferGeometryUtils fix) fails or performance inadequate on Pixel 9a

---

## 📋 Overview

This plan documents the fallback approach if Stage 2's BufferGeometryUtils fix doesn't resolve the poop emoji transparency issue or if performance drops below acceptable levels on target devices (Pixel 9a, iPhone 8+).

### When to Use This Plan

| Condition | Action |
|-----------|--------|
| Poop still transparent after Stage 2 | ✅ Proceed to Stage 3 |
| FPS < 50 on Pixel 9a | ✅ Proceed to Stage 3 |
| BufferGeometryUtils import fails | ✅ Proceed to Stage 3 |
| Stage 2 works perfectly | ❌ SKIP - Stage 3 not needed |

---

## 🎯 Why Groups Instead of InstancedMesh?

### The Trade-off

| Approach | Draw Calls | Performance | Visual Quality | Implementation |
|----------|------------|-------------|----------------|----------------|
| **InstancedMesh (Stage 2)** | 1 | 100% | Risk of issues | Medium |
| **Groups (Stage 3)** | ~250 | 85% | Guaranteed perfect | Medium |

### Why Accept 250 Draw Calls?

**Pixel 9a Performance Capability:**
- GPU: ARM Mali-G68 (or equivalent)
- Typical mobile GPU can handle 500+ draw calls easily
- With proper optimizations, 250 draw calls = 55-60 FPS

**Optimizations Included:**
1. Reduced polygon counts (40% less vertices)
2. Shadow casters limited to body + tip only
3. Object pooling (no GC pressure)
4. Material reuse (2 materials, 4 geometries shared)

---

## 🏗️ Architectural Design

### Data Structure Change

```typescript
// BEFORE (InstancedMesh)
interface ObstacleInstance {
  instance: number;        // Index in InstancedMesh
  active: boolean;
  z: number;
  lane: number;
  speedVariation: number;
  scale: number;
  rotationY: number;
}

// AFTER (Groups)
interface ObstacleInstance {
  mesh: THREE.Group;       // Complete obstacle Group
  active: boolean;
  z: number;
  lane: number;
  speedVariation: number;
  scale: number;
  rotationY: number;
}
```

### Object Pooling Pattern

```
Pool Size: 50 obstacles (same as Stage 2)

Initialization:
├── Create 50 Group objects (hidden)
├── Each Group contains 5 meshes (body, tip, 2 eyes, smile)
├── Share 2 materials across all obstacles
├── Share 4 geometries across all obstacles

During Game:
├── Spawn: Find inactive Group, set position, show
├── Update: Move active Groups toward player
├── Despawn: Hide Group (don't destroy)
└── Reuse: Pooled objects reused indefinitely
```

---

## 🎨 Poop Emoji Composition

### Visual Assembly

```
        ▲ (tip - cone, brown)
       / \
      /___\
     | 👁  | ← (body - flattened sphere, brown)
     | 👁  |
     |  U  | ← (smile - torus segment, black)
     |_____|
```

### Component Breakdown

| Component | Geometry | Segments | Material | Shadows |
|-----------|----------|----------|----------|---------|
| Body | Sphere | 12×8 (reduced) | Lambert (brown) | ✅ Cast |
| Tip | Cone | 8 (reduced) | Lambert (brown) | ✅ Cast |
| Left Eye | Sphere | 6×6 (reduced) | Basic (black) | ❌ No |
| Right Eye | Sphere | 6×6 (reduced) | Basic (black) | ❌ No |
| Smile | Torus | 6×6 (reduced) | Basic (black) | ❌ No |

### Why No Shadows on Eyes/Smile?

- Eyes/smile are small, flat meshes
- Shadows wouldn't be visible from gameplay angle
- Removing shadows saves ~150 shadow map renders per frame
- **Performance gain**: ~15% FPS improvement

---

## 📊 Performance Budget

### Draw Call Breakdown

| Category | Count | Notes |
|----------|-------|-------|
| Body meshes | 50 | 1 material = batched |
| Tip meshes | 50 | 1 material = batched |
| Eye meshes | 100 | 1 material = batched |
| Smile meshes | 50 | 1 material = batched |
| **Total** | **~250** | Modern GPUs handle easily |

### Memory Impact

| Resource | Before (Stage 2) | After (Stage 3) | Change |
|----------|------------------|-----------------|--------|
| Geometries | ~2MB | ~5MB | +3MB |
| Materials | Minimal | Minimal | Same |
| Mesh objects | 50 | 250 | +200 |
| **Total** | **~2MB** | **~5MB** | **+3MB** |

**Assessment**: +3MB is negligible for modern devices (Pixel 9a has 8GB RAM)

### FPS Expectations by Device

| Device | GPU Tier | Expected FPS | Notes |
|--------|----------|--------------|-------|
| Pixel 9a | High | 55-60 | Target device ✅ |
| iPhone 13+ | High | 60 | No issues |
| iPhone XR | Mid | 55-60 | Should be fine |
| iPhone 8 | Low | 45-50 | Below target |
| Desktop | High | 60 | No issues |

---

## 🔧 Implementation Details

### File Changes Required

| File | Lines | Action |
|------|-------|--------|
| `src/game/ObstacleManager.ts` | 11-19 | Replace interface |
| `src/game/ObstacleManager.ts` | 21-23 | Add shared resources |
| `src/game/ObstacleManager.ts` | Constructor | Initialize pool |
| `src/game/ObstacleManager.ts` | New method | `createObstacleGroup()` |
| `src/game/ObstacleManager.ts` | New method | `initializeObstaclePool()` |
| `src/game/ObstacleManager.ts` | ~138-169 | Replace `update()` |
| `src/game/ObstacleManager.ts` | ~211-232 | Replace `spawnObstacle()` |
| `src/game/ObstacleManager.ts` | ~234-241 | Replace `despawnObstacle()` |
| `src/game/ObstacleManager.ts` | ~243-267 | Replace `checkCollisions()` |
| `src/game/ObstacleManager.ts` | ~269-285 | Replace `getActiveObstacles()` |
| `src/game/ObstacleManager.ts` | Various | Delete unused methods |

### Key Methods

#### 1. Create Obstacle Group

```typescript
private createObstacleGroup(): THREE.Group {
  const group = new THREE.Group();

  // Body (casts shadows)
  const body = new THREE.Mesh(this._bodyGeometry, this._bodyMaterial);
  body.position.set(0, 0.3, 0);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Tip (casts shadows)
  const tip = new THREE.Mesh(this._tipGeometry, this._bodyMaterial);
  tip.rotation.x = -Math.PI / 2;
  tip.position.set(0, 0.85, 0);
  tip.castShadow = true;
  tip.receiveShadow = true;
  group.add(tip);

  // Eyes (no shadows - optimization)
  const leftEye = new THREE.Mesh(this._eyeGeometry, this._eyeMaterial);
  leftEye.position.set(-0.22, 0.65, 0.55);
  leftEye.castShadow = false;
  leftEye.receiveShadow = false;
  group.add(leftEye);

  const rightEye = new THREE.Mesh(this._eyeGeometry, this._eyeMaterial);
  rightEye.position.set(0.22, 0.65, 0.55);
  rightEye.castShadow = false;
  rightEye.receiveShadow = false;
  group.add(rightEye);

  // Smile (no shadows - optimization)
  const smile = new THREE.Mesh(this._smileGeometry, this._eyeMaterial);
  smile.position.set(0, 0.45, 0.65);
  smile.rotation.x = Math.PI / 4;
  smile.castShadow = false;
  smile.receiveShadow = false;
  group.add(smile);

  return group;
}
```

#### 2. Initialize Object Pool

```typescript
private initializeObstaclePool(): void {
  for (let i = 0; i < MAX_OBSTACLES; i++) {
    const group = this.createObstacleGroup();
    group.visible = false;
    this._scene.add(group);
    
    this._obstacles.push({
      mesh: group,
      active: false,
      z: 0,
      lane: 0,
      speedVariation: 1,
      scale: 1,
      rotationY: 0
    });
  }
}
```

#### 3. Update Method

```typescript
update(delta: number, speed: number, score: number): void {
  this._spawnTimer -= delta;
  
  const currentSpawnRate = Math.max(0.5, SPAWN_RATE_BASE - (score * DIFFICULTY_MULTIPLIER));

  if (this._spawnTimer <= 0) {
    this.spawnObstaclePattern();
    this._spawnTimer = currentSpawnRate;
    this._waveCounter++;
    
    if (this._waveCounter >= 10) {
      this._waveCounter = 0;
      this.updateWaveMode();
    }
  }

  // Move active obstacles
  for (const obstacle of this._obstacles) {
    if (!obstacle.active) continue;

    const moveSpeed = speed * obstacle.speedVariation;
    obstacle.z += moveSpeed * delta;

    const laneX = this.getLaneX(obstacle.lane);
    obstacle.mesh.position.set(laneX, 0, obstacle.z);
    obstacle.mesh.rotation.y = obstacle.rotationY;
    obstacle.mesh.scale.setScalar(obstacle.scale);

    if (obstacle.z > DESPAWN_DISTANCE) {
      this.despawnObstacle(obstacle);
    }
  }
}
```

---

## 🚀 Implementation Steps

### Step 1: Replace Interface
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 11-19

```typescript
// BEFORE:
interface ObstacleInstance {
  instance: number;
  active: boolean;
  z: number;
  lane: number;
  speedVariation: number;
  scale: number;
  rotationY: number;
}

// AFTER:
interface ObstacleInstance {
  mesh: THREE.Group;
  active: boolean;
  z: number;
  lane: number;
  speedVariation: number;
  scale: number;
  rotationY: number;
}
```

### Step 2: Add Shared Resources
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 21-23 (after class properties)

```typescript
private _bodyMaterial: THREE.MeshLambertMaterial;
private _eyeMaterial: THREE.MeshBasicMaterial;
private _bodyGeometry: THREE.SphereGeometry;
private _tipGeometry: THREE.ConeGeometry;
private _eyeGeometry: THREE.SphereGeometry;
private _smileGeometry: THREE.TorusGeometry;
```

### Step 3: Update Constructor
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 35-68

```typescript
constructor(scene: THREE.Scene, trackManager: TrackManager) {
  this._scene = scene;
  this._trackManager = trackManager;

  // Materials
  this._bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x6B4423 });
  this._bodyMaterial.side = THREE.FrontSide;
  this._eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  this._eyeMaterial.side = THREE.FrontSide;

  // Optimized geometries (reduced polygons for mobile)
  this._bodyGeometry = new THREE.SphereGeometry(0.7, 12, 8);
  this._bodyGeometry.scale(1, 0.7, 1);
  this._tipGeometry = new THREE.ConeGeometry(0.35, 0.6, 8);
  this._eyeGeometry = new THREE.SphereGeometry(0.1, 6, 6);
  this._smileGeometry = new THREE.TorusGeometry(0.18, 0.035, 6, 6, Math.PI);

  // Initialize pool
  this.initializeObstaclePool();
}
```

### Step 4: Add New Methods
Add these methods to the class:
- `createObstacleGroup()`
- `initializeObstaclePool()`

### Step 5: Update Existing Methods
Replace these methods:
- `update()`
- `spawnObstacle()`
- `despawnObstacle()`
- `checkCollisions()`
- `getActiveObstacles()`

### Step 6: Delete Unused Code
Delete:
- `createPoopGeometry()`
- `createMergedPoopGeometry()`
- `simpleMergeGeometries()`
- `_instancedMesh` property
- `_dummy` property
- `_material` property (replaced by `_bodyMaterial`)

---

## 🧪 Testing Checklist

### Visual Tests
- [ ] Poop emoji appears solid brown
- [ ] Eyes visible and black
- [ ] Smile visible and clear
- [ ] No visible seams between parts
- [ ] Shadows render correctly on body/tip

### Performance Tests (Pixel 9a)
- [ ] FPS ≥ 55 during gameplay
- [ ] No sustained drops below 50
- [ ] No stuttering during spawn/despawn
- [ ] Memory stable (no leaks)

### Regression Tests
- [ ] TP roll still static (not spinning)
- [ ] Lane change works correctly
- [ ] Collision detection accurate
- [ ] Score increases correctly
- [ ] Game over triggers properly

---

## 📈 Rollback Plan

If Stage 3 causes issues:

```bash
# Revert all changes
cd /root/code/toilet-runner
git checkout src/game/ObstacleManager.ts

# Rebuild
bun run build
```

**Rollback Time**: ~30 seconds

---

## 🎯 Success Criteria

| Metric | Target | Status |
|--------|--------|--------|
| Visual Quality | Perfect (no transparency) | ⏳ Pending |
| FPS (Pixel 9a) | ≥ 55 | ⏳ Pending |
| FPS (Desktop) | 60 | ⏳ Pending |
| Memory | < 10MB increase | ⏳ Pending |
| Build Size | < 1MB | ⏳ Pending |

---

## 📝 Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Dev Team | Initial fallback plan |

---

**Document Ready for Implementation**  
**Trigger**: Stage 2 fails OR performance inadequate on Pixel 9a