# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Summary

Toilet Runner is a 3D endless runner game where a toilet paper roll dodges poop obstacles on a three-lane track. Built with Three.js + TypeScript + Vite, deployed as a static PWA to GitHub Pages.

## Commands

```bash
bun install            # Install dependencies (Bun only — never use npm/yarn/pnpm)
bun run dev            # Start Vite dev server on port 5173
bun run build          # Production build to dist/
bun run preview        # Preview production build
bun run typecheck      # Run tsc --noEmit (must pass before merge)
bun run deploy         # Deploy dist/ to GitHub Pages via gh-pages
```

**Port 5173 is mandatory** — `strictPort: true` in `vite.config.ts` and firewall rules for mobile LAN testing depend on it. Server binds `0.0.0.0`.

There is no linter, formatter, or test runner configured. `src/test/TrackManager.test.ts` is a manually-invoked `console.log` harness, not an automated test — there is no `bun test` suite despite `bun test` appearing in `AGENTS.md`. TypeScript strict mode is the only automated gate.

## CI / CD

- **CI** (`.github/workflows/ci.yml`) — `bun run typecheck` + `bun run build` on every PR to `main`. Both must pass.
- **Deploy** (`.github/workflows/deploy.yml`) — builds and publishes to GitHub Pages on every push to `main`.
- **Release** (`.github/workflows/release.yml`) — creates a GitHub Release when a `v*` tag is pushed; fails if the tag does not match the `package.json` version.

## Versioning

Version lives in `package.json` (currently `1.9.0`) and is injected into the bundle as the `__APP_VERSION__` global via `vite.config.ts` `define` — the UI displays it, so a bump changes visible output. To cut a release:

1. Update `version` in `package.json`
2. Commit the bump
3. `git tag v1.9.1 && git push origin v1.9.1`

GitHub Releases serves as the changelog — no changelog file.

## Architecture

### World-Moves-to-Player Pattern

The world moves toward the player (+Z direction), not the player through the world. This avoids floating-point precision issues at large coordinates. Track segments spawn ahead at ~-80Z and despawn behind at ~+20Z.

### Game State Machine

`GameState` (`src/core/GameState.ts`): `MENU, PLAYING, PAUSED, GAMEOVER, LEADERBOARD, SKINS, CHALLENGES, STATS, SHOP`. `ScreenManager` owns transitions with a stack-based navigation model.

### Source Layout

- `src/main.ts` — Entry point. The `ToiletRunner` class constructs and wires every system; it is the single integration point, so new subsystems get instantiated, updated, and reset here. Also registers the service worker (`public/sw.js`).
- `src/core/` — Engine-level: `GameLoop` (frame-rate independent, delta capped at 0.1s), `SceneManager`, `GameState`, `GameConfig`, `PerformanceManager` (LOW/MEDIUM/HIGH tier detection), `LeaderboardManager`, `StatsManager`, `AnalyticsManager`.
- `src/game/` — Gameplay: `RunnerController` (3-lane lerp movement + jump), `TrackManager`, `ObstacleManager` (pooled InstancedMesh) with `ObstacleTypes` / `ObstacleGeometryFactory` / `ObstaclePattern` / `PatternSequencer`, `CollisionSystem` (AABB via `Box3`), `DifficultyManager`, `PowerUpManager`, `ShopManager`, `CharacterCustomization`, `DailyChallenges`, `AudioManager` (Web Audio synthesis, no audio files), `CameraManager`, `CameraShake`, `EnvironmentManager`, `TrailRenderer`.
- `src/game/visual/` — `ParticleSystem`, `PostProcessingManager` (bloom/FXAA/vignette), `MaterialFactory`, `SpeedLines`, `EmojiTextureAtlas`.
- `src/config/JumpConfig.ts` — jump tuning, separate from `GameConfig`.
- `src/input/InputManager.ts` — keyboard (arrows/WASD) + touch swipe (50px threshold).
- `src/ui/` — `HUD`, `ScoreAnimator`, `ScreenManager`, `UIManager`, `AudioControls`, `InstallPrompt`.
- `public/` — PWA assets: `manifest.json`, hand-written `sw.js`, icons, `privacy-policy.html`.

### Key Constants

`GameConfig.ts`: lane width 3 units, base speed 10, visible segments 8, max obstacles 50, `maxObstaclesPerPattern` 2.

Constants that live in their own modules and have drifted from what older docs claimed — check the source, not the docs:
- `LERP_SPEED = 6` in `RunnerController.ts:7` (not 8)
- `SWIPE_THRESHOLD = 80`, `SWIPE_VERTICAL_THRESHOLD = 60` in `InputManager.ts:1-2` (not 50)
- Jump tuning in `src/config/JumpConfig.ts`, separate from `GameConfig`

### Performance Design

- **Object pooling** for obstacles — `ObstacleManager` keeps a pool of 50, all added to the scene at construction
- **InstancedMesh** in `TrackManager` for track segments and lane lines. Note `instancedMesh.visible = false` (`TrackManager.ts:275`) — a floor plane replaced the instanced segments visually, but their matrices are still updated every frame.
- **Obstacles are NOT instanced**, despite older docs claiming so: `createObstacleGroup` (`ObstacleManager.ts:86`) builds a `THREE.Group` of 4-6 individual `Mesh` objects (base/mid/tip + emoji plane or eyes+smile). Real draw calls are well above the aspirational "<10" target. Converting these to `InstancedMesh` is open work, not a done thing.
- No per-frame allocations in hot loops (aspirational — `CollisionSystem` and `ParticleSystem` currently violate it)
- **Performance tiers** auto-detected via a startup WebGL benchmark; controls particle counts, post-processing, pixel ratio
- **MeshLambertMaterial** everywhere (no PBR); fog hides distant pop-in

### Data Persistence

`StatsManager` owns `toiletRunner_unifiedData` (player stats, scores, unlocked skins) and migrates the legacy `toiletRunner_stats` / `toiletRunner_gameData` keys into it.

It is **not** a single unified store despite the name. These keys are also live and independent: `toiletRunner_coins` and `toiletRunner_challenges` (`DailyChallenges`), `toiletRunner_shop` (`ShopManager`), `toiletRunner_powerups`, `toiletRunner_analytics`, `toiletRunner_session`.

`StatsManager` writes `version: 2` but never reads it back on load — there is no working migration path for a future schema change, and a partial blob yields `undefined` fields. Treat the version field as aspirational.

## Code Style

- 2-space indentation, ESM imports only, `const` by default
- PascalCase classes, camelCase methods, UPPER_SNAKE_CASE constants, `_prefix` private members
- Reuse `THREE.Vector3`/`THREE.Box3` in update loops — never allocate in hot paths
- Dispose geometries/materials when removing objects from the scene
- Explicit TypeScript types, no `any`

## Workflow

After completing any fix or feature change, always start the dev server (`bun run dev`) so the user can playtest immediately.

## Skill Routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.

Key routing rules:
- Ship, deploy, push, create PR → `/ship`
- QA, test the site, find bugs → `/qa`
- Code review, check my diff → `/review`
- Bugs, errors, "why is this broken" → `/investigate`

Repo-local skills live in `.opencode/skills/` (e.g. `release-verification`, `threejs-instanced-mesh`, `object-pool-pattern`, `endless-runner-track-segments`, `performance-profiling-mobile`) — consult them before reinventing these patterns.

### Pre-Release Verification (CRITICAL)

**NEVER release to production without verification using /qa and /browse skills.**

1. Run /qa on production URL (https://bigknoxy.github.io/toilet-runner/)
2. Run /browse to verify interactive functionality
3. Verify existing features still work (no regressions)
4. Verify new features work as expected
5. Only proceed if verification passes

See AGENTS.md "Deployment Workflow" for full details.

## Common Pitfalls

- Vite `base: './'` is required for GitHub Pages asset paths — do not change it
- `vite-plugin-pwa` is a devDependency but is **not** wired into `vite.config.ts`; the service worker in `public/sw.js` is hand-written and cache versions must be bumped there manually
- Delta time is capped at 0.1s in `GameLoop` to prevent physics explosions on tab-switch
- Audio is fully synthesized via Web Audio API — there are no audio files to manage
- `dist/` is gitignored, but `dist/index.html` is tracked from before the ignore rule — leave it alone, never hand-edit build output
