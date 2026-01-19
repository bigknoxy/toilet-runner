# 🎯 Toilet Runner - TP & Poop Fix Implementation Plan

**Document Version:** 1.0
**Date:** January 19, 2026
**Status:** Ready for Implementation
**Author:** Development Team

---

## 📋 Executive Summary

This document provides a comprehensive, production-ready plan to fix two critical issues in Toilet Runner:

1. **TP Paper Still Spinning** - Simple 2-minute fix
2. **Poop Emoji Transparency** - Requires staged approach

### Target Devices
- **Mobile**: Pixel 9a, iPhone 8+ (iOS 12+)
- **Desktop**: Laptop/Desktop browsers

### Performance Target
- **Acceptable**: 50+ FPS (primary goal)
- **Ideal**: 60 FPS (best effort)

---

## 🎯 Issue 1: TP Paper Spinning Fix

### Problem
The TP paper texture is still rotating despite requirement for static paper.

### Root Cause
`src/game/RunnerController.ts` line 131:
```typescript
if (this._speed > 0) {
  this._tpMesh.rotation.z -= this._speed * delta * 0.3;  // ❌ CAUSES SPINNING
}
```

### Fix
**File**: `src/game/RunnerController.ts`

**Line**: 131

**Action**: DELETE the entire if block (lines 130-132):
```typescript
// ❌ DELETE THIS:
if (this._speed > 0) {
  this._tpMesh.rotation.z -= this._speed * delta * 0.3;
}
```

**Expected Result**: TP paper texture becomes completely static.

### Effort
- **Time**: 2 minutes
- **Risk**: NONE
- **Testing**: Immediate visual verification

---

## 🎯 Issue 2: Poop Emoji Transparency Fix

### Problem
Poop emoji obstacles appear see-through/transparent due to merged geometry UV/normals issues.

### Root Cause
`src/game/ObstacleManager.ts` uses `simpleMergeGeometries()` which:
1. Concatenates position/normal/UV arrays incorrectly
2. Doesn't compute proper normals after merging
3. Causes lighting artifacts → semi-transparent appearance

### Recommended Solution: Staged Approach

| Stage | Approach | Effort | Performance | Risk | Status |
|-------|----------|--------|-------------|------|--------|
| **1** | Fix TP Paper | 2 min | No change | None | 🚀 **READY** |
| **2** | Fix Merged Geometry | 2-4 hrs | 100% (60 FPS) | Low | ✅ **RECOMMENDED** |
| **3** | Groups + Optimizations | 8-12 hrs | 85% (55-60 FPS) | Medium | ⚠️ **FALLBACK** |

**Recommendation**: Proceed with Stage 2 first. If it fails or performance is inadequate, then Stage 3.

---

## 🚀 STAGE 1: TP Paper Fix (2 minutes)

### File Changes

| File | Lines | Action |
|------|-------|--------|
| `src/game/RunnerController.ts` | 130-132 | DELETE if block |

### Code Change
```typescript
// BEFORE (lines 130-132):
if (this._speed > 0) {
  this._tpMesh.rotation.z -= this._speed * delta * 0.3;
}

// AFTER:
// (Delete entire block - nothing remains)
```

### Verification Checklist
- [ ] TP paper texture is static (no rotation)
- [ ] Paper windings visible and clear
- [ ] Build succeeds
- [ ] No console errors

---

## ✅ STAGE 2: Fix Merged Geometry (2-4 hours)

### Rationale
- Preserves 1 draw call (optimal performance)
- Fixes UV/normals issues properly
- Uses Three.js official utility (BufferGeometryUtils)

### File Changes

| File | Lines | Action |
|------|-------|--------|
| `src/game/ObstacleManager.ts` | 1-2 | ADD BufferGeometryUtils import |
| `src/game/ObstacleManager.ts` | 68-136 | REPLACE createMergedPoopGeometry() |
| `src/game/ObstacleManager.ts` | 75-105 | DELETE createPoopGeometry() |
| `src/game/ObstacleManager.ts` | 120-136 | DELETE simpleMergeGeometries() |
| `src/game/ObstacleManager.ts` | 28-41 | UPDATE constructor |

### Step-by-Step Implementation

#### Step 2.1: Add BufferGeometryUtils Import
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 1-2 (after `import * as THREE from 'three';`)

```typescript
import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
```

#### Step 2.2: Replace createMergedPoopGeometry()
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 68-136

```typescript
private createMergedPoopGeometry(): THREE.BufferGeometry {
  const geometries: THREE.BufferGeometry[] = [];

  // Body - flattened sphere, positioned at bottom
  const bodyGeo = new THREE.SphereGeometry(0.7, 16, 12);
  bodyGeo.scale(1, 0.7, 1);
  bodyGeo.translate(0, 0.3, 0);
  geometries.push(bodyGeo);

  // Tip - cone, rotated and positioned at top
  const tipGeo = new THREE.ConeGeometry(0.35, 0.6, 12);
  tipGeo.rotateX(-Math.PI / 2);
  tipGeo.translate(0, 0.85, 0);
  geometries.push(tipGeo);

  // Left Eye - small sphere
  const leftEyeGeo = new THREE.SphereGeometry(0.1, 8, 8);
  leftEyeGeo.translate(-0.22, 0.65, 0.55);
  geometries.push(leftEyeGeo);

  // Right Eye - small sphere
  const rightEyeGeo = new THREE.SphereGeometry(0.1, 8, 8);
  rightEyeGeo.translate(0.22, 0.65, 0.55);
  geometries.push(rightEyeGeo);

  // Smile - torus segment
  const smileGeo = new THREE.TorusGeometry(0.18, 0.035, 8, 8, Math.PI);
  smileGeo.rotateX(Math.PI / 4);
  smileGeo.translate(0, 0.45, 0.65);
  geometries.push(smileGeo);

  // Merge with proper UV/normals preservation
  const merged = BufferGeometryUtils.mergeGeometries(geometries, false);

  // Recompute normals after merge (critical for lighting)
  merged.computeVertexNormals();

  return merged;
}
```

#### Step 2.3: Delete Broken Methods
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 75-105 (createPoopGeometry) and 120-136 (simpleMergeGeometries)

```typescript
// DELETE this entire method (lines 75-105):
private createPoopGeometry(): THREE.Group {
  const poopGroup = new THREE.Group();
  // ... (unused code)
  return poopGroup;
}

// DELETE this entire method (lines 120-136):
private simpleMergeGeometries(geometries: THREE.BufferGeometry[]): THREE.BufferGeometry {
  // ... (broken manual implementation)
  return merged;
}
```

#### Step 2.4: Update Constructor
**File**: `src/game/ObstacleManager.ts`  
**Lines**: 28-41

```typescript
constructor(scene: THREE.Scene, trackManager: TrackManager) {
  this._scene = scene;
  this._trackManager = trackManager;

  // Materials
  this._material = new THREE.MeshLambertMaterial({ color: 0x6B4423 });
  this._eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

  // Create proper merged geometry using BufferGeometryUtils
  const mergedGeometry = this.createMergedPoopGeometry();

  // Create InstancedMesh with merged geometry
  this._instancedMesh = new THREE.InstancedMesh(mergedGeometry, this._material, MAX_OBSTACLES);
  this._instancedMesh.castShadow = true;
  this._instancedMesh.receiveShadow = true;
  this._instancedMesh.frustumCulled = false;
  this._scene.add(this._instancedMesh);

  // Initialize obstacle pool
  for (let i = 0; i < MAX_OBSTACLES; i++) {
    this._obstacles.push({
      instance: i,
      active: false,
      z: 0,
      lane: 0,
      speedVariation: 1,
      scale: 1,
      rotationY: 0
    });
  }

  // Hide all instances initially
  const dummy = new THREE.Object3D();
  for (let i = 0; i < MAX_OBSTACLES; i++) {
    dummy.position.set(9999, -100, 9999);
    dummy.updateMatrix();
    this._instancedMesh.setMatrixAt(i, dummy.matrix);
  }
  this._instancedMesh.instanceMatrix.needsUpdate = true;
}
```

### Expected Results

| Metric | Expected Value | Device |
|--------|---------------|--------|
| Visual Quality | Solid brown poop emoji | All |
| Transparency | None (fully opaque) | All |
| Eyes/Smile | Clear black visibility | All |
| Draw Calls | 1 | All |
| FPS (Pixel 9a) | 55-60 | Mobile |
| FPS (iPhone 13+) | 60 | Mobile |
| FPS (Desktop) | 60 | Desktop |

### Testing Procedure

```bash
# 1. Build
cd /root/code/toilet-runner
bun run build

# 2. Test on Pixel 9a
# - Connect device via USB
# - Enable USB debugging
# - Open chrome://inspect in desktop Chrome
# - Navigate to localhost:3000 (or deployed URL)
# - Verify visual appearance
# - Check FPS using DevTools Performance tab

# 3. Test on iPhone (if available)
# - Use Safari Web Inspector
# - Verify visual appearance
# - Check performance

# 4. Visual Verification Checklist
# - [ ] Poop body appears solid brown (not see-through)
# - [ ] Eyes visible as black circles
# - [ ] Smile visible as black curve
# - [ ] No visible seams between body/tip/eyes/smile
# - [ ] Shadows render on obstacles
# - [ ] No flickering or z-fighting
```

### Success Criteria

**GO to Production IF:**
- [ ] All visual tests pass
- [ ] FPS ≥ 50 on Pixel 9a
- [ ] No console errors
- [ ] Build succeeds

**FALLBACK to Stage 3 IF:**
- [ ] Poop appears still transparent
- [ ] Geometry seams visible
- [ ] FPS < 50 consistently on Pixel 9a
- [ ] BufferGeometryUtils fails to import/build

---

## ⚠️ STAGE 3: Groups + Optimizations (8-12 hours)

**Trigger**: Stage 2 fails OR performance inadequate

### Rationale
- Guaranteed visual fix (Groups always render correctly)
- Performance manageable with optimizations
- ~250 draw calls acceptable for Pixel 9a with proper culling

### File Changes

| File | Lines | Action |
|------|-------|--------|
| `src/game/ObstacleManager.ts` | 11-19 | REPLACE interface |
| `src/game/ObstacleManager.ts` | 21-23 | ADD shared resources |
| `src/game/ObstacleManager.ts` | Constructor | ADD init + shared geometry/material |
| `src/game/ObstacleManager.ts` | New method | ADD createObstacleGroup() |
| `src/game/ObstacleManager.ts` | New method | ADD initializeObstaclePool() |
| `src/game/ObstacleManager.ts` | ~138-169 | REPLACE update() |
| `src/game/ObstacleManager.ts` | ~211-232 | REPLACE spawnObstacle() |
| `src/game/ObstacleManager.ts` | ~234-241 | REPLACE despawnObstacle() |
| `src/game/ObstacleManager.ts` | ~243-267 | REPLACE checkCollisions() |
| `src/game/ObstacleManager.ts` | ~269-285 | REPLACE getActiveObstacles() |
| `src/game/ObstacleManager.ts` | Various | DELETE unused methods |

### Implementation Details

#### Step 3.1: Replace Interface
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
  mesh: THREE.Group;      // Complete obstacle Group
  active: boolean;
  z: number;
  lane: number;
  speedVariation: number;
  scale: number;
  rotationY: number;
}
```

#### Step 3.2: Add Shared Resources
```typescript
private _bodyMaterial: THREE.MeshLambertMaterial;
private _eyeMaterial: THREE.MeshBasicMaterial;
private _bodyGeometry: THREE.SphereGeometry;
private _tipGeometry: THREE.ConeGeometry;
private _eyeGeometry: THREE.SphereGeometry;
private _smileGeometry: THREE.TorusGeometry;
```

#### Step 3.3: Initialize Shared Resources
```typescript
// In constructor:
this._bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x6B4423 });
this._bodyMaterial.side = THREE.FrontSide;  // Optimize
this._eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
this._eyeMaterial.side = THREE.FrontSide;

// Optimized geometries for mobile
this._bodyGeometry = new THREE.SphereGeometry(0.7, 12, 8);
this._bodyGeometry.scale(1, 0.7, 1);
this._tipGeometry = new THREE.ConeGeometry(0.35, 0.6, 8);
this._eyeGeometry = new THREE.SphereGeometry(0.1, 6, 6);
this._smileGeometry = new THREE.TorusGeometry(0.18, 0.035, 6, 6, Math.PI);
```

#### Step 3.4: Create Obstacle Group
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

#### Step 3.5: Initialize Object Pool
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

#### Step 3.6: Update Methods
See full implementation details in sections below.

### Performance Budget (Stage 3)

| Metric | Value | Notes |
|--------|-------|-------|
| Draw Calls | ~250 | 50 obstacles × 5 meshes |
| Memory | ~5MB | +3MB vs InstancedMesh |
| FPS (Pixel 9a) | 55-60 | With optimizations |
| FPS (iPhone 8) | 45-50 | Below target |
| FPS (Desktop) | 60 | No issues |

### Performance Optimizations Included

1. **Reduced Polygon Count**
   - Body: 16,12 → 12,8 segments
   - Tip: 12 → 8 segments
   - Eyes: 8,8 → 6,6 segments
   - Smile: 8,8 → 6,6 segments

2. **Shadow Casters Reduced**
   - Body and tip only cast shadows
   - Eyes and smile don't cast shadows

3. **Material Optimization**
   - FrontSide only (never viewed from inside)
   - No unnecessary calculations

### Expected Results (Stage 3)

| Metric | Expected Value | Device |
|--------|---------------|--------|
| Visual Quality | Perfect (Groups always work) | All |
| FPS (Pixel 9a) | 55-60 | Mobile |
| FPS (iPhone 13+) | 60 | Mobile |
| FPS (iPhone 8) | 45-50 | Mobile |
| FPS (Desktop) | 60 | Desktop |

---

## 📊 Complete Implementation Checklist

### Stage 1 (2 minutes)
- [ ] `src/game/RunnerController.ts` line 130-132 deleted
- [ ] TP paper texture is static
- [ ] Build succeeds

### Stage 2 (2-4 hours)
- [ ] BufferGeometryUtils import added
- [ ] createMergedPoopGeometry() implemented correctly
- [ ] createPoopGeometry() deleted
- [ ] simpleMergeGeometries() deleted
- [ ] Constructor updated
- [ ] Poop emoji appears solid brown
- [ ] Eyes visible and black
- [ ] Smile visible and clear
- [ ] No transparency artifacts
- [ ] No geometry seams
- [ ] FPS ≥ 50 on Pixel 9a
- [ ] Build succeeds

### Stage 3 (8-12 hours) - FALLBACK ONLY
- [ ] All Stage 2 changes reverted
- [ ] Interface updated to use Group
- [ ] Shared resources initialized
- [ ] createObstacleGroup() implemented
- [ ] initializeObstaclePool() implemented
- [ ] update() updated for Groups
- [ ] spawnObstacle() updated for Groups
- [ ] despawnObstacle() updated for Groups
- [ ] checkCollisions() updated for Groups
- [ ] getActiveObstacles() updated for Groups
- [ ] Unused methods deleted
- [ ] Poop emoji appears solid
- [ ] FPS ≥ 50 on Pixel 9a
- [ ] Build succeeds

---

## 🧪 Testing Procedures

### Visual Testing
1. Open game in browser
2. Start gameplay
3. Observe TP roll:
   - [ ] Paper texture is static (not spinning)
   - [ ] Brown cardboard tube visible in center
4. Observe obstacles:
   - [ ] Body appears solid brown (not transparent)
   - [ ] Eyes visible as black circles
   - [ ] Smile visible as black curve
   - [ ] No visible seams between parts
   - [ ] Shadows render correctly

### Performance Testing (Pixel 9a)
1. Connect Pixel 9a via USB
2. Enable USB debugging
3. Open Chrome → chrome://inspect
4. Navigate to game URL
5. Open DevTools → Performance tab
6. Record 60-second gameplay session
7. Analyze results:
   - [ ] Average FPS ≥ 50
   - [ ] No sustained drops below 45
   - [ ] No major stuttering

### Mobile Browser Testing
1. **Pixel 9a**: Chrome browser
   - FPS target: 55-60
   - Visual quality: Perfect

2. **iPhone (if available)**:
   - Safari browser
   - FPS target: 50-60
   - Visual quality: Perfect

3. **Desktop**:
   - Chrome/Edge/Firefox
   - FPS target: 60
   - Visual quality: Perfect

---

## 🔧 Troubleshooting

### Issue: BufferGeometryUtils import fails
**Symptom**: Build error "BufferGeometryUtils not exported"

**Solution**:
```bash
# Install if not present
npm install three@latest
# or
bun add three@latest

# If still fails, use full path:
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
```

### Issue: Poop still transparent after Stage 2
**Symptom**: Body appears see-through

**Solution**:
1. Verify `merged.computeVertexNormals()` is called
2. Check material: `MeshLambertMaterial({ color: 0x6B4423 })`
3. Ensure no transparency in material settings
4. Fallback to Stage 3

### Issue: FPS < 50 on Pixel 9a
**Symptom**: Performance stuttering

**Solution**:
1. Enable low performance mode in code
2. Reduce active obstacle count (50 → 30)
3. Disable shadows on all obstacles
4. Fallback to Stage 2 if using Stage 3

### Issue: TP still spinning
**Symptom**: Paper texture rotates

**Solution**:
1. Verify line 130-132 is completely deleted
2. Check for any other rotation code
3. Clear browser cache and rebuild

---

## 📦 Build Commands

```bash
# Always use bun (not npm)
cd /root/code/toilet-runner

# Development (with hot reload)
bun run dev

# Production build
bun run build

# Preview production build
bun run preview

# Type check
bun run typecheck
```

### Expected Build Sizes
| Build | Size | Gzipped |
|-------|------|---------|
| Development | ~2 MB | ~500 KB |
| Production | ~524 KB | ~132 KB |
| Change | None | None |

---

## 🎯 Rollback Plan

### If Stage 2 Causes Issues
```bash
# Revert changes using git
cd /root/code/toilet-runner
git checkout src/game/ObstacleManager.ts
git checkout src/game/RunnerController.ts

# Rebuild
bun run build
```

### If Stage 3 Causes Issues
```bash
# Revert all changes
cd /root/code/toilet-runner
git checkout src/game/ObstacleManager.ts

# Rebuild
bun run build
```

---

## ✅ Final Approval

| Stage | Approve? | Notes |
|-------|----------|-------|
| Stage 1: TP Paper Fix | ☐ Yes / ☐ No | |
| Stage 2: Fix Merged Geometry | ☐ Yes / ☐ No | Recommended first |
| Stage 3: Groups + Optimizations | ☐ Yes / ☐ No | Fallback only |

**Implementation Priority**: Stage 1 → Stage 2 → (Test) → Stage 3 if needed

---

## 📝 Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Dev Team | Initial plan |

---

**Plan ready for implementation. Awaiting approval to proceed.**