---
name: bun-project-setup
description: Set up Bun + Vite + Three.js project with TypeScript
license: MIT
metadata:
  version: 1.0.0
  category: project-creation
---

## What I do

Initialize a new Bun + Vite project for Three.js game development:

1. Create project scaffold using `bun create vite --template vanilla-ts`
2. Install dependencies: `bun add three @types/three`
3. Configure Vite for GitHub Pages: `base: './'`
4. Set up package.json scripts
5. Create directory structure per game architecture

### Directory structure created:
```
src/
  ├── core/
  │   ├── GameLoop.ts
  │   ├── SceneManager.ts
  │   └── GameState.ts
  ├── game/
  │   ├── RunnerController.ts
  │   ├── TrackManager.ts
  │   ├── ObstacleManager.ts
  │   └── CollisionSystem.ts
  ├── input/
  │   └── InputManager.ts
  ├── ui/
  │   └── UIManager.ts
  └── main.ts
```

### Scripts configured:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## When to use me

**Use proactively when:** Starting a new Toilet Runner project or setting up a fresh Vite + Bun + Three.js environment.

I should be invoked at the beginning of any new Three.js game project to ensure:
- Proper Bun configuration (not npm/yarn/pnpm)
- Vite for HMR and optimized builds
- Static hosting configuration (GitHub Pages)
- TypeScript with strict mode enabled
- Correct directory structure for game systems

## Notes

- Uses Bun as package manager (not npm/yarn/pnpm)
- Sets up Vite for HMR and optimized builds
- Configured for static hosting (GitHub Pages)
- TypeScript with strict mode enabled
