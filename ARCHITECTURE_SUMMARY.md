# Toilet Runner - Architecture Review Summary

## Key Recommendations at a Glance

### 1. New Manager Classes to Create

| Manager | Purpose | Dependencies |
|---------|---------|--------------|
| **PerformanceManager** | Device detection, auto-tier, FPS tracking | None (foundation) |
| **PostProcessingManager** | Bloom, vignette, FXAA effects | SceneManager |
| **ParticleSystem** | Collision, score, trail effects | Scene only |
| **LightingManager** | Shadows, light quality tiers | Scene only |
| **MaterialFactory** | PBR material pooling | PerformanceTier |
| **EmojiTextureAtlas** | Canvas-based emoji faces | None |

### 2. Architecture Strengths (Keep These!)

✅ Manager pattern with clear separation
✅ Object pooling (obstacles, decorations) - **Reuse this pattern for particles**
✅ Centralized GameLoop with delta time
✅ TypeScript interfaces for type safety
✅ Explicit dispose patterns

### 3. Integration Points

```typescript
// main.ts changes needed:
1. await PerformanceManager.initialize()  // First!
2. postProcessing = new PostProcessingManager(...)
3. particles = new ParticleSystem(...)
4. MaterialFactory.setQuality(tier)
5. lighting = new LightingManager(...)
6. SceneManager.render() check postProcessing
7. CollisionSystem → emit particle events
```

### 4. Performance Tiers

| Tier | Shadows | Post-Proc | Particles | Materials | Emoji |
|------|---------|-----------|-----------|------------|-------|
| LOW | ❌ | ❌ | 10 | Lambert | ❌ |
| MEDIUM | ✅ (1024px) | FXAA only | 25 | Standard (no env) | ✅ |
| HIGH | ✅ (2048px) | Full | 40 | Standard + envMap | ✅ |
| ULTRA | ✅ (cascades) | Full + color | 50 | Full PBR + HDRI | ✅ animated |

### 5. Implementation Priority

```
Week 1: PerformanceManager → MaterialFactory → LightingManager
Week 2: ParticleSystem → Collision integration
Week 3: PostProcessingManager → SceneManager integration
Week 4: EmojiTextureAtlas → ObstacleManager update → Polish
```

### 6. Mobile Optimization Checklist

- [ ] Pixel ratio capped at 1-2 based on tier
- [ ] Shadow map size scales with tier (512 → 2048)
- [ ] Particle count adjustable (10 → 50)
- [ ] Post-processing optional and lazy-loaded
- [ ] Geometry poly count adjustable
- [ ] Object pooling for all dynamic objects

### 7. Junior Developer Maintainability Tips

**DO:**
- Use existing patterns (Manager pattern, object pooling)
- Follow the established file structure
- Add JSDoc comments to new classes
- Keep update(delta) signature consistent

**DON'T:**
- Create circular dependencies
- Add complex shader code (use Three.js built-ins)
- Bypass the GameLoop for frame updates
- Hardcode magic numbers (use constants)

### 8. Testing Strategy

```
Unit Tests:
  - PerformanceManager benchmark simulation
  - ParticleSystem pool lifecycle
  - MaterialFactory quality switching

Integration Tests:
  - Full game loop with all managers
  - FPS monitoring under load
  - Cross-tier switching

Manual Testing:
  - Low-end device (Chrome DevTools throttling)
  - High-end desktop
  - Mobile browser
```

### 9. File Changes Summary

**New Files (6):**
```
src/core/PerformanceManager.ts
src/game/visual/PostProcessingManager.ts
src/game/visual/ParticleSystem.ts
src/game/visual/LightingManager.ts
src/game/visual/MaterialFactory.ts
src/game/visual/EmojiTextureAtlas.ts
```

**Modified Files (4):**
```
src/main.ts         - New manager initialization
src/core/SceneManager.ts - Post-processing support
src/game/CollisionSystem.ts - Particle emission
src/ui/UIManager.ts - Optional: quality settings UI
```

### 10. Critical Code Patterns to Follow

**Object Pooling (reuse existing pattern):**
```typescript
// Like ObstacleManager, but for particles
private particles: Particle[] = [];
private initializePool() {
  for (let i = 0; i < MAX_PARTICLES; i++) {
    this.particles.push({ active: false, mesh: ... });
  }
}
```

**Quality-Aware Factory:**
```typescript
// Centralized material creation
MaterialFactory.getObstacleMaterial() {
  // Returns Lambert or Standard based on tier
}
```

**Lazy Loading:**
```typescript
// Don't bundle post-processing if not used
const { EffectComposer } = await import('three/examples/jsm/...');
```

---

## Quick Decision Matrix

| Question | Answer |
|----------|--------|
| Environment map source? | Start with procedural (CubeCamera), HDRI optional later |
| Emoji font source? | Use system fonts via Canvas API (no external assets) |
| User override settings? | Optional UI panel, default to auto-detect |
| FPS monitoring? | Add small counter in UI, log to console |
| Asset loading strategy? | All procedural for now (no external files) |

---

## Unresolved Questions for Product Owner

1. **Target mobile devices** - Should we optimize for 2020+ or older?
2. **Minimum FPS target** - 30 FPS minimum or 45 FPS?
3. **Download size budget** - Post-processing adds ~50KB (code splitting helps)
4. **Analytics** - Should we track device tiers for optimization?
5. **HDRI environment maps** - Procedural or download assets (~2-5MB)?

---

## Files Generated

1. **ARCHITECTURE_REVIEW.md** - Full detailed analysis (9000+ words)
2. **ARCHITECTURE_DIAGRAM.md** - Visual diagrams and data flows
3. **QUICK_START.md** - Copy-paste ready implementation guide

---

## One-Page Architecture Summary

```
┌─────────────────────────────────────────────────────────────┐
│                     main.ts                                │
│  PerfManager → SceneManager → GameLoop → All Managers     │
└─────────────────────────────────────────────────────────────┘
                          │
    ┌─────────────────────┼─────────────────────┐
    │                     │                     │
    ▼                     ▼                     ▼
┌───────────┐      ┌───────────┐        ┌───────────┐
│ Core      │      │ Visual    │        │ Game      │
│ - PerfMgr │      │ - PostProc│        │ - Runner  │
│ - GameLoop│      │ - Particle│        │ - Track   │
│ - SceneMgr│      │ - Lighting│        │ - Obstacle│
└───────────┘      │ - Material│        │ - Collision│
                   │ - Emoji   │        └───────────┘
                   └───────────┘              │
                                             │
┌─────────────────────────────────────────────┴─────────────┐
│                        UI & Input                          │
│ UIManager | InputManager | AudioManager                    │
└─────────────────────────────────────────────────────────────┘
```

---

**Bottom Line**: The existing architecture is solid. Add PerformanceManager first, then build visual systems using the same Manager pattern and object pooling approach that's already proven in the codebase.
