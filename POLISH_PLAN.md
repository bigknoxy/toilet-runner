# 🎯 Toilet Runner - Professional Polish Implementation Plan

**Document Version:** 1.0
**Date:** January 19, 2026
**Status:** Ready for Implementation

---

## 📋 Executive Summary

This document outlines the comprehensive polish plan for the Toilet Runner endless runner game. The goal is to transform the MVP into a professional, polished mobile game while maintaining the silly cartoon theme (toilet paper vs. poop emojis).

**Key Improvements:**
1. Enhanced TP Roll Player (larger, no spin, visible texture)
2. Cartoon Poop Emoji Obstacles (with faces)
3. Fair Obstacle System (always passable)
4. Audio System (synthesized sounds, mute button)
5. Bathroom Environment (tiles + toilet decorations)
6. UI Polish (score flash, cartoon font, camera shake)

---

## 📦 Bundle Size Strategy (<40MB)

### Optimizations:
- Vite production build with tree-shaking
- ES6 modules (no transpilation to ES5 unless needed)
- All textures generated procedurally (no external image files)
- All audio synthesized via Web Audio API (no audio files)
- Three.js production CDN or bundled only used features
- Draco compression for any future models
- Code splitting for non-critical features

### Estimated final size: ~2-5MB (well under 40MB limit)

---

## 🚽 Phase 1: Enhanced TP Roll Player

**File:** `src/game/RunnerController.ts`

### Changes:
1. **Size Increase**: PLAYER_RADIUS: 0.5 → 0.8
2. **Remove Spinning**: Delete rolling animation (lines 49-52)
3. **Add TP Texture**: Create procedural spiral texture
4. **Add Cardboard Tube**: Inner brown cylinder (radius 0.3)
5. **Add Wobble Animation**: Sin wave (amplitude 0.1, duration 0.3s)
6. **Add Bounce Effect**: Y-axis offset on lane change (0.2, decay 0.85)

### Visual Result:
Larger, recognizable TP roll with visible paper spiraling around brown center, slight bounce on movement.

---

## 💩 Phase 2: Cartoon Poop Emoji Obstacles

**File:** `src/game/ObstacleManager.ts`

### Changes:
1. **Replace BoxGeometry** with custom poop emoji shape:
   - Main body: Flattened sphere (dome shape)
   - Tip: Rounded cone
   - Scale: Height 1.5, Width 1.2
   - Color: 0x6B4423 (brown)

2. **Add Cartoon Face**:
   - Eyes: Two black spheres (small, low-poly)
   - Smile: Torus segment (curved line)

3. **Variety**: Random rotation (±15°), scale variation (±5%)

4. **Material**: MeshLambertMaterial for cartoon look

### Visual Result:
Silly brown poop emojis with eyes and smile, varying slightly.

---

## 🚧 Phase 3: Fair Obstacle System

**File:** `src/game/ObstacleManager.ts`

### Algorithm:
1. **Remove triple pattern** (currently 10% chance)
2. **Guaranteed passable lane**:
   - Single obstacle: 70% chance → Random lane (0, 1, or 2)
   - Double obstacles: 30% chance → 2 adjacent lanes, 1 clear
   - Clear lane distribution: Center 40%, Left 30%, Right 30%
3. **Obstacle speed variation**: Each obstacle ±20% from game speed
4. **Wave patterns**: Cluster 3-4 easy patterns, then 1-2 hard

### Code Reference:
```typescript
function spawnObstaclePattern() {
  const pattern = Math.random();
  const clearLane = getWeightedRandomLane([0.4, 0.3, 0.3]); // Center, Left, Right
  
  if (pattern < 0.7) {
    // Single obstacle in 2 random lanes
    const lanes = [0, 1, 2].filter(l => l !== clearLane);
    spawnObstacle(lanes[Math.floor(Math.random() * 2)]);
  } else {
    // Double obstacles - 2 lanes adjacent, leaving clearLane open
    const doubleLanes = getAdjacentLanes(clearLane);
    doubleLanes.forEach(lane => spawnObstacle(lane));
  }
}
```

---

## 🔊 Phase 4: Audio System

**New File:** `src/game/AudioManager.ts`

### Implementation:
1. **Web Audio API** (no external files):
   - Create `AudioContext` on first interaction
   - Oscillator-based synthesis for all sounds

2. **Sounds**:
   - **Lane change**: Slide/whoosh (sine sweep, 200-400Hz, 0.15s)
   - **Game over**: Cartoon crash (low frequency sawtooth, 100Hz, 0.3s)
   - **Score milestone**: Ding (high sine wave, 800Hz, 0.2s)
   - **Collision**: Boing/bounce (frequency sweep, 150-300Hz, 0.2s)
   - **Start game**: Upbeat chord (3 oscillators, 0.4s)

3. **Default**: ON (as requested)

4. **Volume control**: Master gain node (0-1)

---

## 📱 Phase 5: Audio Controls UI

**New File:** `src/ui/AudioControls.ts`

### UI Component:
- Position: Top-right, next to pause button
- Icon: 🔊 (muted: 🔇)
- Click toggles audio
- Persist state: localStorage ('toiletRunner.audioEnabled')

---

## 🎨 Phase 6: Bathroom-Themed Environment

**File:** `src/game/EnvironmentManager.ts` (new)

### Changes:
1. **Bathroom tile texture** (procedural):
   - `CanvasTexture` with grid pattern
   - White tiles (0xF5F5F5) with gray grout (0xCCCCCC)
   - 8x8 tile pattern, seamless tiling

2. **Floor tiles**:
   - Replace green grass with tile texture
   - Apply to track segments

3. **Toilet decorations**:
   - Low-poly toilet mesh (cylinder + box + torus)
   - Place at intervals (every 40 units)
   - Spawn/despawn like obstacles
   - Object pool for efficiency

---

## 📹 Phase 7: Camera & UI Polish

### Camera Manager (new: `src/game/CameraManager.ts`)
- Shake on lane change (amplitude 0.05, duration 0.1s)
- Smooth follow easing

### UI Enhancements:
1. **Score flash**:
   - CSS animation on milestones (100, 500, 1000)
   - Scale up/down with color change

2. **Cartoon font**:
   - Google Font "Fredoka One"
   - Apply to score, title, buttons

3. **Mute button integration**:
   - Add to existing pause button area
   - Share click handler

---

## 📂 File Structure

### Modified Files (5):
```
src/
├── game/
│   ├── RunnerController.ts       # MOD - TP roll, no spin, bounce
│   ├── ObstacleManager.ts        # MOD - Poop emoji, fair patterns
│   └── CollisionSystem.ts       # MOD - Adjust collision box
├── core/
│   └── SceneManager.ts          # MOD - Add camera manager
└── main.ts                      # MOD - Integrate new managers
```

### New Files (6):
```
src/
├── game/
│   ├── AudioManager.ts           # NEW - Web Audio API
│   ├── EnvironmentManager.ts     # NEW - Bathroom tiles, toilets
│   └── CameraManager.ts         # NEW - Camera shake
└── ui/
    └── AudioControls.ts          # NEW - Mute button UI
```

### Updated Files (2):
```
index.html                        # ADD - Audio button HTML
styles/modals.css                 # ADD - Audio button CSS
```

---

## 📅 Implementation Order

| Week | Phase | Tasks |
|------|-------|-------|
| **Week 1** | 1-2 | TP Roll + Poop Emoji + Collision Box |
| **Week 2** | 3 | Fair Obstacle System + Testing |
| **Week 3** | 4-5 | Audio System + Audio Controls UI |
| **Week 4** | 6 | Bathroom Environment (Tiles + Toilets) |
| **Week 5** | 7 | Camera Shake + UI Polish |
| **Week 6** | All | Integration Testing + Bug Fixes + Balance |

---

## ✅ Success Criteria Checklist

### Phase 1: TP Roll
- [ ] TP roll larger (radius 0.8)
- [ ] No spinning animation
- [ ] Visible paper spiral texture
- [ ] Brown cardboard tube visible
- [ ] Wobble on lane change
- [ ] Bounce effect

### Phase 2: Poop Emoji
- [ ] Cartoon poop shape (dome + tip)
- [ ] Brown color (0x6B4423)
- [ ] Eyes (two black spheres)
- [ ] Smile (torus segment)
- [ ] Random rotation/scale variation

### Phase 3: Fair Obstacles
- [ ] No triple obstacle pattern
- [ ] Always 1 passable lane
- [ ] Weighted random (center 40%, sides 30%)
- [ ] Speed variation (±20%)
- [ ] Wave patterns implemented

### Phase 4-5: Audio
- [ ] All sounds synthesized (no files)
- [ ] Lane change whoosh
- [ ] Game over crash
- [ ] Score milestone ding
- [ ] Collision boing
- [ ] Start game chord
- [ ] Default ON
- [ ] Mute button in UI
- [ ] State persists in localStorage

### Phase 6: Environment
- [ ] Bathroom tile texture (procedural)
- [ ] Low-poly toilet models
- [ ] Tiles on floor
- [ ] Toilets on sides (decorations)

### Phase 7: Polish
- [ ] Camera shake on lane change
- [ ] Score flash animation
- [ ] Cartoon font (Fredoka One)
- [ ] Smooth camera follow

### Performance
- [ ] Bundle size <40MB (target ~2-5MB)
- [ ] 55-60 FPS on mobile
- [ ] No memory leaks

---

## 🎯 Requirements Confirmed

| # | Requirement | Response |
|---|-------------|----------|
| 1 | TP Roll Texture | Yes - visible paper spiraling |
| 2 | Poop Style | Cartoon emoji with eyes/smile |
| 3 | Obstacle Fairness | Market research - always passable |
| 4 | Audio Default | ON, with mute button |
| 5 | Environment | Bathroom tiles + occasional toilets |
| 6 | Bundle Size | <40MB, best practices |

---

## ⚠️ Potential Issues & Solutions

| Issue | Solution |
|-------|----------|
| Audio autoplay policy | Initialize AudioContext on first user interaction |
| Procedural texture quality | Use high-resolution canvas (1024x1024), mipmaps |
| Face geometry adds polygons | Keep eyes simple (8 segments), smile torus (8 segments) |
| Toilet mesh complex | Very low-poly (cylinder + hemisphere, <100 triangles) |
| Too many objects | Object pool for decorations, frustum culling |

---

## 📚 References & Research

### Market Research:
- Subway Surfers: Never blocks all lanes - always has passable route
- Temple Run: Uses learned patterns, clear visual language
- Supersonic best practices: Pattern recognition key, progressive difficulty

### Technical References:
- Three.js InstancedMesh for performance
- Web Audio API for synthesized sounds
- CanvasTexture for procedural textures
- Object pooling for memory management

---

**Document Status:** Ready for Implementation
**Last Updated:** January 19, 2026
