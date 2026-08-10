# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Summary

Toilet Runner is a 3D endless runner game where a toilet paper roll dodges poop obstacles on a three-lane track. Built with Three.js + TypeScript + Vite, deployed as a static site to GitHub Pages.

## Commands

```bash
bun install            # Install dependencies (Bun only — never use npm/yarn/pnpm)
bun run dev            # Start Vite dev server on port 5173
bun run build          # Production build to dist/
bun run preview        # Preview production build
bun run typecheck      # Run tsc --noEmit (must pass before merge)
bun run test           # Run unit tests via bun test (must pass before merge)
bun run deploy         # Deploy dist/ to GitHub Pages via gh-pages
```

There is no linter or formatter configured. TypeScript strict mode is enforced via `tsconfig.json`.

Unit tests live in `tests/` and run on Bun's built-in runner. `bunfig.toml` preloads
`tests/setup.ts`, which registers happy-dom so `window`, `document`, and
`localStorage` exist. Run a single file with `bun test tests/InputManager.test.ts`
and a single case with `bun test -t "held jump does not bunny-hop"`.

Coverage targets execution-order and state-lifetime bugs that `tsc` cannot see:
key auto-repeat (`InputManager`), the personal-best verdict and its
capture-before-`endSession()` ordering rule (`ScoreVerdict`), the score-popup
cap (`UIManager`), and scene detach on dispose (`SpeedLines`).

## CI / CD

- **CI** (`.github/workflows/ci.yml`) — Runs `bun run typecheck`, `bun run test`, and `bun run build` on every PR to `main`. All three must pass before merging.
- **Deploy** (`.github/workflows/deploy.yml`) — Builds and publishes to GitHub Pages on every push to `main`.
- **Release** (`.github/workflows/release.yml`) — Creates a GitHub Release with auto-generated notes when a `v*` tag is pushed. Verifies the tag matches the `package.json` version — the release fails if they differ.

## Versioning

Version lives in `package.json`. Releases use git tags. To cut a release:

1. Update `version` in `package.json` to match the new tag (e.g. `"1.1.0"`)
2. Commit the version bump
3. `git tag v1.1.0 && git push origin v1.1.0`

The release workflow enforces that the tag and `package.json` version stay in sync. GitHub Releases serves as the changelog — no separate changelog file.

## Architecture

### World-Moves-to-Player Pattern

The world moves toward the player (+Z direction), not the player through the world. This avoids floating-point precision issues at large coordinates. Track segments spawn ahead at ~-80Z and despawn behind at ~+20Z.

### Game State Machine

States: `MENU → PLAYING → PAUSED | GAMEOVER → LEADERBOARD | MENU`. Additional menu states: `SKINS`, `CHALLENGES`, `STATS`. State transitions are managed by `ScreenManager` with a stack-based navigation model.

### Source Layout

- `src/main.ts` — Entry point. `ToiletRunner` class wires all systems together.
- `src/core/` — Engine-level systems: `GameLoop` (frame-rate independent with capped delta), `SceneManager` (Three.js renderer/scene/camera), `GameState` enum, `PerformanceManager` (detects LOW/MEDIUM/HIGH tier), `LeaderboardManager`, `StatsManager`.
- `src/game/` — Gameplay: `RunnerController` (3-lane movement with lerp), `TrackManager` (infinite InstancedMesh segments), `ObstacleManager` (pooled InstancedMesh obstacles), `CollisionSystem` (AABB via Box3), `DifficultyManager`, `AudioManager` (Web Audio synthesis, no audio files), `CameraManager`, `DailyChallenges`, `CharacterCustomization`.
- `src/game/visual/` — Effects: `ParticleSystem` (dust/sparkle/impact/coin), `PostProcessingManager` (bloom/FXAA/vignette), `MaterialFactory`, `EmojiTextureAtlas`.
- `src/input/InputManager.ts` — Keyboard (arrows/WASD) + touch swipe (50px threshold).
- `src/ui/` — HUD, ScoreAnimator, ScreenManager, UIManager, AudioControls.

### Key Constants (in `GameConfig.ts`)

Lane width: 3 units. Base speed: 10. Lerp speed: 8. Visible segments: 8. Max obstacles: 50.

### Performance Design

- **InstancedMesh** for all obstacles and track segments (target <10 draw calls, <10K triangles)
- **Object pooling** for obstacles — no per-frame allocations in hot loops
- **Performance tiers** (LOW/MEDIUM/HIGH) auto-detected; controls particle counts, post-processing, pixel ratio
- **MeshLambertMaterial** everywhere (no PBR)
- **Fog** hides pop-in of distant geometry

### Data Persistence

All data in `localStorage` under `toiletRunner_unifiedData` (version 2). Stores player stats, scores, unlocked skins. Legacy keys are auto-migrated.

## Code Style

- 2-space indentation, ESM imports only, `const` by default
- PascalCase classes, camelCase methods, UPPER_SNAKE_CASE constants, `_prefix` private members
- Reuse `THREE.Vector3`/`THREE.Box3` in update loops — never allocate in hot paths
- Explicit TypeScript types, no `any`

## Workflow

After completing any fix or feature change, always start the dev server (`bun run dev`) so the user can playtest immediately.

## Skill Routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill tool as your FIRST action. Do NOT answer directly, do NOT use other tools first. The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Ship, deploy, push, create PR → invoke /ship
- QA, test the site, find bugs → invoke /qa
- Code review, check my diff → invoke /review
- Release verification (before deploy) → invoke /release-verification (see .opencode/skills/release-verification/)
- Bugs, errors, "why is this broken" → invoke /investigate

### Pre-Release Verification (CRITICAL)

**NEVER release to production without verification using /qa and /browse skills.**

Before every release:
1. Run /qa on production URL (https://bigknoxy.github.io/toilet-runner/)
2. Run /browse to verify interactive functionality
3. Verify existing features still work (no regressions)
4. Verify new features work as expected
5. Only proceed if verification passes

See AGENTS.md "Deployment Workflow" section for full details.

## Common Pitfalls

- Vite `base: './'` is required for GitHub Pages asset paths — do not change it
- Delta time is capped at 0.1s in `GameLoop` to prevent physics explosions on tab-switch
- Audio is fully synthesized via Web Audio API — there are no audio files to manage
- The `PerformanceManager` runs a quick WebGL benchmark on startup; features degrade gracefully per tier
