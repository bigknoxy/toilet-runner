# Jump Feature Implementation Plan

## Goal
Add a fixed-height jump mechanic to the toilet paper roll runner, allowing mid-air lane changes, with jump-over-obstacle collision detection.

---

## Confirmed Design Decisions

- **All obstacles jumpable** - No distinction between low/high barriers for now
- **Snappy jump feel** - 0.4s to apex (easily configurable)
- **Single jump only** - No double-jump, must land before jumping again

---

## Configuration (Easily Tunable)

All jump parameters will be defined as constants at the top of `RunnerController.ts` for easy adjustment:

```typescript
// ============================================
// JUMP CONFIGURATION - Easy to tune
// ============================================
const JUMP_HEIGHT = 2.5;        // Units - must clear 1.6-unit obstacles
const TIME_TO_APEX = 0.4;       // Seconds - lower = snappier, higher = floaty
const COYOTE_TIME = 0.1;        // Seconds - grace period for edge jumps
const JUMP_BUFFER_TIME = 0.1;   // Seconds - pre-landing input window

// Derived physics (auto-calculated from above)
const GRAVITY = (2 * JUMP_HEIGHT) / (TIME_TO_APEX * TIME_TO_APEX);      // 31.25
const JUMP_FORCE = (2 * JUMP_HEIGHT) / TIME_TO_APEX;                    // 12.5
```

**To change jump feel**, just modify `JUMP_HEIGHT` and `TIME_TO_APEX`:
- **Snappier**: Lower `TIME_TO_APEX` (e.g., 0.35s) - faster, more responsive
- **Floatier**: Higher `TIME_TO_APEX` (e.g., 0.5s) - slower, more hang time
- **Higher jump**: Increase `JUMP_HEIGHT` (e.g., 3.0)

### Input Mapping
- **Keyboard**: Space, ArrowUp, W
- **Touch**: Vertical swipe up (>80px, horizontal <120px)

### Collision Behavior
- Player can jump over all obstacles (1.6 units tall)
- Collision checks player bottom vs obstacle top to detect "jumped over"
- Shrink hitbox by 0.1 units while jumping for forgiveness

---

## Implementation Checklist

### Phase 1: Input System
- [ ] Add `onJump` callback parameter to `InputManager` constructor
- [ ] Add keyboard handler: Space, ArrowUp, W trigger jump
- [ ] Add touch handler: Vertical swipe up detection
- [ ] Test: Console log on jump input

### Phase 2: Jump Physics in RunnerController
- [ ] Add jump state variables:
  ```typescript
  private _isJumping: boolean = false;
  private _velocityY: number = 0;
  private _groundY: number = 0.5;  // Player's resting Y
  private _coyoteTimer: number = 0;
  private _jumpBufferTimer: number = 0;
  ```
- [ ] Add constants for physics
- [ ] Add `jump()` method (public, called by InputManager callback)
- [ ] Modify `update(delta)`:
  - Process jump buffer + coyote time
  - Apply gravity to `_velocityY`
  - Update `position.y` based on velocity
  - Ground check and state reset
- [ ] Keep lane switching working during jump (already independent)
- [ ] Test: Jump arc visually correct, lane changes mid-air

### Phase 3: Jump Animation
- [ ] Add squash on jump start (scale Y down, X/Z up)
- [ ] Add stretch at apex (scale Y up)
- [ ] Add squash on landing
- [ ] Test: Animation feels polished

### Phase 4: Collision System Update
- [ ] Modify `checkPlayerVsObstacles()` to accept player Y position
- [ ] Check if player bottom > obstacle top (jumped over)
- [ ] Optionally shrink player hitbox while jumping
- [ ] Test: Can jump over obstacles, collision when not jumping

### Phase 5: Main Game Integration
- [ ] Wire jump callback in `main.ts` InputManager instantiation
- [ ] Pass player Y to collision check
- [ ] Test: Full game flow with jumping

### Phase 6: Polish (Optional)
- [ ] Add dust particle effect on landing
- [ ] Add jump sound effect (when audio system exists)
- [ ] Add shadow to show height

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/input/InputManager.ts` | Add jump input handling |
| `src/game/RunnerController.ts` | Add jump physics, state, animation |
| `src/game/CollisionSystem.ts` | Jump-over collision detection |
| `src/main.ts` | Wire jump callback |

---

## Testing Strategy

1. **Visual**: Jump arc reaches expected height (~2.5 units) and duration (~0.8s total)
2. **Collision**: Can clear obstacles when jumping, hit when not
3. **Input**: All mapped keys and touch gestures work
4. **Edge cases**: 
   - Lane change during jump works smoothly
   - Jump at edge (coyote time)
   - Rapid jump input (jump buffer)

---

## Risk Mitigation

- **Scope creep**: Start simple (fixed jump), no variable height yet
- **Physics bugs**: Use frame-rate independent delta, cap delta at 0.1s
- **Collision false positives**: Shrink hitbox while jumping, add tolerance
- **Touch conflicts**: Vertical swipe shouldn't trigger horizontal lane change

---

## Ready for Implementation

All design decisions confirmed. Proceed with implementation when approved.
