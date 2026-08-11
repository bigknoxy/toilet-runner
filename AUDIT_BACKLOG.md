# Toilet Runner — Audit Backlog

Consolidated from a five-lens expert review (UX, game feel, code quality, mobile perf/PWA, accessibility/visual) against `main` @ `0aa0f86`, v1.9.0. Every item below is anchored to source that was read, not inferred. Findings corroborated by more than one reviewer are marked **[×2]**.

Totals: 5 a11y blockers, 1 economy-breaking exploit, ~85 distinct findings.

**This is a snapshot, not a live tracker.** It records the state of `main` at `0aa0f86`
(v1.9.0). Items have shipped since; the anchors below are line numbers as they were at
that commit and many no longer resolve. Resolved as of v1.13.0, at least: the whole P0
sweep (1–14), #26/#27/#28 (measured tiering plus `AdaptiveQuality`), #34 (`ScoreVerdict`
ordering), #53 (`performanceConfig` is now typed `PerformanceConfig`), and the testing
gap below. Verify against the source before acting on any remaining item.

---

## P0 — Broken now, cheap to fix

Ship these first. All are Small effort, all are user-visible defects today.

| # | Item | Anchor | Why it matters |
|---|---|---|---|
| 1 | **Near-miss reward fires every frame** **[×2]** | `main.ts:425` | Dedupe key is `` `${obstacle.x}_${obstacle.z}` `` but `z` advances every frame, so the key is never a repeat. Each dodge re-awards for ~48–70 frames ≈ **480 score + 240 coins**. Max shop upgrade is 300 coins — the entire economy is void. Also spawns ~70 unpooled DOM popups and 70 camera shakes per obstacle. Fix: stable `spawnId` per pooled obstacle, `Set<number>`. |
| 2 | **Spacebar in the name field restarts the run** | `UIManager.ts:159` | Global keydown restarts on `' '` during GAMEOVER with no focus check, while the name input is auto-focused. Two-word names are impossible; the score silently saves as "Anonymous". Fix: early-return when `event.target` is an input. |
| 3 | **Gameplay keys never state-gated** | `InputManager.ts:53`, `main.ts:325` | `handleKeyboard` listens on `window` unconditionally; `teardown()` is never called. Space on game-over triple-fires (button + jump + restart). WASD in the name field drives the runner. No `preventDefault`, so Space scrolls the page. No `event.repeat` guard → held Space auto-bunny-hops. |
| 4 | **ESC double-toggles pause** | `UIManager.ts:150` + `InputManager.ts:70` | Both listeners fire; two `togglePause()` calls net to a no-op. The pause screen literally instructs "Press Resume or ESC to continue". Fix: one owner for the key. |
| 5 | **"New Personal Best!" on every run** | `main.ts:710` vs `729` | `updateHighestScore()` runs *before* `getHighestScore()` is read, so `isNewBest` is always true. The strongest positive signal in the game is worthless, and four other tiered messages are dead code. Fix: capture `prevBest` first. |
| 6 | **Score HUD is an `aria-live` region updated 60×/sec** | `index.html:63`, `ScoreAnimator.ts:56` | Turns every screen reader into an unusable firehose. **A11y blocker.** Fix: drop the live role; add a separate `sr-only` region written on milestones only. |
| 7 | **Unguarded full-screen white flash on every hit** | `main.ts:621-625` | `opacity: 0.6` full-viewport flash, no `prefers-reduced-motion` gate anywhere in JS. Repeated hits = rapid luminance flashing — **photosensitive-seizure risk**, not a comfort issue. |
| 8 | **Every primary button fails WCAG AA** | `modals.css:249, 369` | White on `#87CEEB` ≈ **1.8:1** (AA needs 4.5:1). This is Play, Resume, Play Again, Submit Score — the whole primary action set. Live score HUD is ~2:1 white-on-light-blue over a light-blue sky. |
| 9 | **Renderer ignores the perf config it just computed** | `SceneManager.ts:34`, `main.ts:115` vs `:118` | `SceneManager` is constructed *before* `PerformanceManager.initialize()`, and hardcodes `antialias: true` + `pixelRatio: min(dpr, 2)`. LOW tier's `antialias:false` / `pixelRatio:1` are computed and discarded — MSAA on a 2× framebuffer on the exact devices that can least afford it. Often the 60→30 FPS difference on mid-range Android. |
| 10 | **`backToGameOver()` desyncs state, can double-write a score** | `main.ts:761` | Never calls `ui.setGameState()`, and passes only `score` so `isHighScore` is `undefined` — the name prompt vanishes. With no `submitted` guard in `handleNameSubmit`, submit → leaderboard → back → submit writes the score twice. |
| 11 | **`backToMenu()` silently discards a pending high score** | `main.ts:766` vs `:808` | `restartGame()` flushes as "Anonymous"; `backToMenu()` doesn't. Earn a top-10, tap Home, it's gone — and the stale pending score can be submitted during the *next* run. |
| 12 | **Coin save wedges permanently on one failed write** | `DailyChallenges.ts:222` | Unguarded `setItem` inside a rAF callback; one `QuotaExceededError` (or Safari private mode, which always throws) leaves `_savePending = true` forever. All coins for the session are silently lost. Fix: `try/finally`. |
| 13 | **Analytics hardcodes version `'1.6.0'`** | `main.ts:279` | Actual version is 1.9.0 and `__APP_VERSION__` is in scope two lines away. Every analytics event is attributed three releases stale. |
| 14 | **`user-scalable=no` blocks pinch-zoom** | `index.html:6` | WCAG 1.4.4 failure. Zoom-during-play is already correctly prevented by `touch-action: none` on the canvas — this attribute only hurts low-vision users. |

---

## P1 — Core loop is broken

The panel's verdict on why a player stops after three runs. Fixing 15–19 is roughly one focused day and addresses most of it.

| # | Item | Anchor | Why it matters |
|---|---|---|---|
| 15 | **Lane switch takes ~0.68 s and is framerate-dependent** | `RunnerController.ts:7, 691` | `lerp(cur, target, LERP_SPEED * delta)` is non-exponential, so the game genuinely moves differently at 30 Hz vs 60 Hz. Genre standard is 0.12–0.20 s. Reads as "the controls are laggy" — the top reason to quit run 1. Fix: `t = 1 - exp(-K*delta)`, K≈18, or a fixed 0.18 s eased tween. |
| 16 | **Collision tolerance is inverted — the hitbox is inflated** | `CollisionSystem.ts:4, 32` | `COLLISION_TOLERANCE = 0.1` is *added* to the obstacle on all six axes, and the player box comes from `setFromObject` on the whole Group — so it inherits the lane-change tilt (AABB grows ~12% **exactly while threading a gap**) and the landing squash (1.92 wide for 0.15 s after every jump). Unfair deaths concentrated at the two most skill-expressive moments. |
| 17 | **Jump is a dominant, cost-free strategy** | `JumpConfig.ts:2`, `CollisionSystem.ts:42` | 0.8 s airtime clears every obstacle in the game; there is only one obstacle type. No cooldown, no air penalty. `while(true) jump()` beats the entire three-lane design. `ObstacleTypes.ts:4-10` already declares `MOVING_BRUSH`, `WATER_PUDDLE`, `BARRIER_HIGH`, `BARRIER_LOW` — **none is referenced anywhere**. |
| 18 | **Only six real obstacle layouts exist, forever** | `ObstaclePattern.ts:28-207`, `GameConfig.ts:28` | 18 patterns collapse to ~6 distinct arrangements (E1/E3 differ only by a 1.0 vs 1.1 speed multiplier — invisible). All ≤2 obstacles, all with a guaranteed clear lane. Difficulty "progression" is the same shapes moving faster. No content horizon. |
| 19 | **No in-run combo or multiplier** | `main.ts:90` | `currentStreak` is declared and reset but **never incremented**. A clean 10-dodge streak pays exactly what a sloppy one does. Nothing accumulates that the player fears losing — the core compulsion hook of the genre is absent. |
| 20 | **Reaction distance collapses; deaths unavoidable after ~90 s** | `main.ts:399`, `ObstacleManager.ts:254` | `gameSpeed = 10 + t*0.5`, uncapped (70 at 120 s), against a *fixed* 46-unit runway → 4.6 s of reaction at start, **0.65 s at 120 s** — below human reaction plus the 0.68 s lane switch. Score becomes a function of clock time, not skill. |
| 21 | **No swept collision — obstacles tunnel through the player** | `CollisionSystem.ts:22` | Overlap window is ~1.6 units of travel; at speed 105 a 30 fps frame advances 3.5 units. The 0.1 s delta cap still permits a 10.5-unit jump. Free passes on stuttering frames, then arbitrary-feeling deaths. Compounds with the GC hitches in #25. |
| 22 | **Difficulty tiers keyed to score, which is inflated** | `DifficultyManager.ts:20` | Thresholds are score-based; with #1 live a single dodge adds ~350 score, throwing a new player into MASTER within ~15 s. The two difficulty axes (score-driven patterns, time-driven speed) can desynchronize badly. Fix: drive tiers off survival time. |
| 23 | **No tutorial, no controls, anywhere** | `index.html:95` | The only instruction in the app is a loading tip shown for ~1.5 s on first load, mentioning swipe only. **Jump is never mentioned** — yet close-pass scoring requires it. Desktop players mash keys; mobile players never learn they can jump, making same-lane obstacles feel unfair. |
| 24 | **Mobile swipe: 80 px threshold, resolved only on `touchend`** | `InputManager.ts:1, 89` | Action fires when the finger *lifts*, adding 150–250 ms before the 0.68 s lerp even starts. Mobile is near-unplayable past 60 s. The tap fallback needs `<20 px` in `<300 ms`, which most real taps fail. |

---

## P2 — Performance and correctness

| # | Item | Anchor | Why it matters |
|---|---|---|---|
| 25 | **Per-frame allocations in the hottest loops** **[×2]** | `CollisionSystem.ts:28`, `ObstacleManager.ts:323`, `ParticleSystem.ts:163` | Two `Vector3` per obstacle per frame (≤6,000/sec), a fresh array + object literal per obstacle **twice per frame**, a `new Quaternion()` per particle per frame, and a `split('_').map(Number)` per `passedObstacles` entry per frame. Directly violates the project's own stated rule. Produces the GC hitches that make #21 lethal. |
| 26 | **Every mobile device hard-forced to LOW by a UA regex** | `PerformanceManager.ts:38` | An iPhone 15 Pro gets `pixelRatio: 1`, no AA, no post-processing — visibly blurry on a 3× display. The benchmark that would discriminate runs only on desktop, where it's least needed. |
| 27 | **The benchmark measures nothing** | `PerformanceManager.ts:51` | 100×100 canvas, 50 iterations, no `gl.finish()`, no rAF pacing — `render()` only queues GL commands, so it times JS submission, not GPU throughput. Every desktop scores 10,000+ and lands in HIGH regardless of hardware. |
| 28 | **FPS samples collected, nothing ever adapts** | `PerformanceManager.ts:84`, `main.ts:374` | `updateFPS`/`getAverageFPS`/`setTier` all exist and are wired — but no caller ever downgrades. A phone that thermally throttles to 25 FPS stays there forever. Highest-leverage fix for the 55–60 FPS target; the plumbing is already built. |
| 29 | **SW precaches none of the hashed assets** | `public/sw.js:2` | The list names `./index.html` and icons; Vite emits `assets/index-*.js` with a hash that changes every build. Install the PWA, go offline, and the shell 404s its own bundle. `vite-plugin-pwa@1.2.0` is already a devDependency and unwired. |
| 30 | **`CACHE_NAME` frozen at `v1`; SW bytes never change** | `public/sw.js:1` | The browser only re-runs `install` when the file differs — it never does, so the activate-time cleanup never deletes anything and the first install's `index.html` is served forever. Runtime cache grows unboundedly with dead bundles from every deploy. `skipWaiting()` swaps assets under a running game. |
| 31 | **Obstacles are not instanced** | `ObstacleManager.ts:86` | 50 pooled `THREE.Group`s of 4–6 individual meshes each, all `scene.add`ed at construction, so 200–300 objects are traversed and culled every frame. Real draw calls ≈60–150 against a documented "<10" target. (Docs corrected in this PR.) |
| 32 | **2.3 s of manufactured load delay** **[×2]** | `main.ts:192, 131` | `minLoadTime = 1500` busy-waits polling every 50 ms to animate a progress bar, then an 800 ms `setTimeout`. **Nothing is actually loading** — assets are procedural and synchronous. The game is ready in ~400 ms and then deliberately stalls. Hits every launch, including from the home screen. |
| 33 | **Post-processing code-splitting is defeated** | `PostProcessingManager.ts:1-7` | The passes are statically imported at the top *and* dynamically `await import()`ed below. The static imports pull everything into the main chunk anyway; the dynamic ones just add round-trips and a Rollup warning. LOW-tier mobile downloads all of it and never uses it. |
| 34 | **`StatsManager` writes `version: 2` but never reads it** | `StatsManager.ts:38, 48` | No version check, no field validation, no merge against defaults. A v1 blob or a partial write yields `unlockedSkins: undefined` → throws on the skins screen; `totalDistance += x` on `undefined` poisons every stat to `NaN`, which is then persisted. `UIManager._safeNumber` exists as a downstream band-aid, which suggests this has already happened. |
| 35 | **No `visibilitychange` handling** **[×2]** | `main.ts:175`, `GameLoop.ts:41` | `pause()`/`resume()`/`stop()` are never called from anywhere. Tab away and the player keeps running, colliding, and dying while hidden; Web Audio stays running. Delta capping protects the physics, not the session. |
| 36 | **Skin cards are click-only `<div>`s** | `UIManager.ts:667` | No `tabindex`, no `role`, no key handler, inside a `role="listbox"` with no `option` children. Keyboard and switch users can open the Skins screen but can never change a skin. **A11y blocker.** |
| 37 | **No focus management or focus trap on any transition** | `UIManager.ts:333` | Focus is never moved into a shown dialog nor restored on close; Tab walks out of the "modal" into the page behind it despite `aria-modal="true"`. Pause and audio buttons stay tabbable under the overlay. **A11y blocker.** |
| 38 | **Render-blocking Noto Color Emoji from Google Fonts** | `index.html:18` | A multi-megabyte color-bitmap font, cross-origin so the SW can't cache it (opaque response), dwarfing the 160 kB app bundle. Platform emoji fonts are already installed everywhere, and `EmojiTextureAtlas` renders to canvas anyway. |

---

## P3 — Structure and polish

| # | Item | Anchor | Why it matters |
|---|---|---|---|
| 39 | **`ScreenManager` is 110 lines of dead code** **[×2]** | `ScreenManager.ts` | Zero importers. All nine transitions in `main.ts` are bare `currentGameState = X; ui.setGameState(X)` pairs with no validation. The unused table omits `SHOP` entirely, so wiring it up today would make the shop unreachable. Root cause of #10 and #11. Either wire it in as the single `transitionTo()` seam (recommended — it's also what makes state testable) or delete it. |
| 40 | **`ToiletRunner` is a 932-line god object** | `main.ts:60` | 27 `!`-asserted manager fields, 13 pieces of mutable state, and a **210-line `update()`**. Nothing in it is reachable without a WebGL context and a DOM, so none of it is testable. Bugs #1, #21, #25 all live inside it. Suggested extraction order: `ScoringSystem` (pure, zero Three.js, where #1 lives) → `DeathSequence` → `EffectsCoordinator` → `GameSession`. |
| 41 | **Coins/shop live outside the "unified" store; dates disagree** | `DailyChallenges.ts:100` vs `StatsManager.ts:80` | Seven live localStorage keys. `StatsManager._getTodayString()` zero-pads (`2026-08-07`), `DailyChallenges._getTodayString()` does not (`2026-8-7`) — the two daily-reset systems can never cross-check, and challenge IDs sort wrong. `expiresAt` is typed `Date` but is a `string` after the JSON round-trip. |
| 42 | **Twelve silent `catch {}` blocks swallow every storage failure** | `StatsManager.ts:56, 97, 158, 178` etc. | Safari private mode throws on every `setItem`; the player loses coins, stats, skins, and leaderboard entries for a whole session with zero indication. The migration catch can abandon after `_save()` succeeded but before legacy keys are removed, leaving both stores live. Fix: one `Storage` port with in-memory fallback + a single non-blocking toast. |
| 43 | **Coins are invisible outside submenus** | `index.html:59` | Earned constantly with popups, but the balance renders only inside Challenges and Shop. No HUD counter, none on the main menu. The entire earn→spend loop is unmotivated. |
| 44 | **Progression events are all silent** | `main.ts:711`, `DailyChallenges.ts:173` | Skin unlocks happen in `endGame()` with no notification. Challenge completion credits coins with no toast or sound. Locked skin cards are silently unclickable — no shake, no "Reach 500 pts". The long-term reward layer is invisible at the exact moment it's earned. |
| 45 | **Paused players are trapped** | `index.html:128` | The pause modal offers only Resume. `ScreenManager` permits `PAUSED → MENU`, but no UI exposes it — the only route to the menu mid-run is to deliberately crash. Genre standard is Quit + Restart on pause. |
| 46 | **Leaderboard unreachable from the main menu** | `index.html:105` | `showLeaderboard()` is bound only to a button inside the game-over modal. To see your own top-10 you must play and die. |
| 47 | **No empty states anywhere** | `UIManager.ts:925, 793, 1068` | Fresh leaderboard is a blank modal body; fresh stats are seven zeros; a 0-coin shop is four disabled buttons with no explanation. Three of the four menu destinations read as "broken" in the first session. |
| 48 | **Audio: 7 cues for a dozen events** | `main.ts:868`, `AudioManager.ts:139` | Jumping plays the **lane-change** sound. Landing, near-miss, coin pickup, shield absorb, and revive are all silent. The jump feels weightless despite squash/stretch already being implemented. All fixes fit the existing `playTone` helper. |
| 49 | **Camera never sells speed** | `CameraManager.ts:4, 32` | X hard-pinned to 0, damping 2.5 (~1.2 s to settle), FOV constant. Speed 40 looks identical to speed 10 apart from faint streaks that don't even activate below speed 15. Speed is the entire fantasy of the genre. |
| 50 | **Death sequence hides its own cause** | `main.ts:378, 620` | A flat 6.7× slowdown held for 1.0 s with a white flash firing simultaneously — the flash blows out the exact frame the player needs to learn *why* they died. Obstacles freeze but the track keeps scrolling, so the world visually decouples. Nothing indicates which obstacle, which lane, or that a jump would have cleared it. |
| 51 | **Three unrelated type families; menus and start screen look like different apps** | `base.css:9`, `modals.css:24` | Fredoka One + system-ui + Poppins, mixed *within* one card. Dark-navy start screen vs white-and-sky-blue modals vs a sky-blue game world. Nine raw pixel literals with no scale tokens; 10px labels. |
| 52 | **Dead code and config lies** | various | 510 lines of `intro.css` styling elements that don't exist in `index.html`; `castShadow`/`receiveShadow` on ~300 meshes while `shadowMap` is never enabled; `checkPlayerVsTrack()` returns `false` with no callers; `getSuccessRate()` computes something that isn't a success rate; `_convertSkinsNumberToArray` duplicates `'classic'`; `build.target: 'es2015'` downlevels for browsers that can't run the game anyway (it needs WebGL2). |
| 53 | **`any` at every DI seam** | `main.ts:63`, `SceneManager.ts:9`, `HUD.ts:15` | `performanceConfig: any` is read for five nested fields with zero checking and already hedges `|| 15` twice. These are exactly the boundaries where a type would catch a wiring mistake; `PerformanceManager` already returns a concrete shape that just needs exporting. |

---

## Testing

**Resolved.** A suite now lives in `tests/` on Bun's built-in runner with happy-dom
preloaded via `bunfig.toml`, and CI runs `bun run test` beside `typecheck` and `build`.
The recommendation below was Vitest; Bun's runner was used instead, same effect.
`src/test/TrackManager.test.ts` is the leftover `console.log` harness and is still
unwired.

Test targets that were named here, in order:

1. **`ScoringSystem`** (after the #40 extraction) — pure functions over `(delta, playerPos, obstacles, upgrades)`. The first assertion, "one obstacle yields exactly one award", **fails today** and pins bug #1.
2. **`StatsManager` migration** against a mocked `localStorage`: absent key, `{}`, v1 blobs, truncated JSON, missing `unlockedSkins`, a v3-from-the-future blob. Pins #34.
3. **State transitions** — once #39 routes everything through `transitionTo()`, table-test all pairs and assert `main.currentGameState === ui.currentGameState`. Fails today; pins #10.
4. **`CollisionSystem`** with a stub obstacle provider — jump clearance at the boundary, tolerance edges, empty pool.
5. **Allocation regression guard** — 600 simulated frames under `--expose-gc`, assert bounded heap growth. The only thing that will stop #25 from silently returning.

Config notes: `tsconfig.json` uses `esModuleInterop: false` and `moduleResolution: "node"`, both deprecated and slated for removal in TS 7 — move to `"bundler"` / `true`. And `bun install` is a prerequisite for `typecheck` passing at all; the failure mode (`Cannot find type definition file for 'vite/client'`) reads like a code error rather than a missing install, so it belongs in the README.

---

## Suggested sequencing

1. **P0 sweep** — items 1–14. All Small. Fixes the economy exploit, the two input bugs that make the game-over screen hostile, both a11y blockers that are cheap, and the perf config that's being computed and thrown away.
2. **Game-feel pass** — 15, 16, 17, 19, then 18. This is the "player quits after 3 runs" cluster; the panel estimates roughly one focused day for the first four.
3. **Structural pass** — 39 and 40 together (wiring `ScreenManager` is what makes 40's extraction testable), then the Vitest setup and tests 1–3.
4. **Perf/PWA pass** — 26–30 as one cluster; they compound, and #9 (already in P0) is the prerequisite for the rest of the tier work.
5. **Polish** — P3 remainder, driven by whatever the QA pass surfaces.

Item 31 (instancing obstacles) is Large and should wait until after the game-feel pass — obstacle *types* (#17) will change the geometry, and doing the instancing work first means doing it twice.
