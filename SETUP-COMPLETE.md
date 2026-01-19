# Setup Complete: OpenCode Skills & Agents for Toilet Runner

## Summary

Successfully created complete OpenCode configuration for Toilet Runner 3D endless runner project with:

- **10 Skills:** Reusable patterns for Three.js, TypeScript, game logic, and deployment
- **2 Custom Agents:** Three.js Architect and TypeScript Game Logic specialists
- **Full project scaffolding:** package.json, vite.config.ts, tsconfig.json, GitHub Actions workflow

## Created Files

### Skills (10)
Located in: `.opencode/skills/`

1. **bun-project-setup** - Initialize Bun + Vite project
2. **threejs-renderer-config** - Mobile-optimized WebGL renderer
3. **threejs-instanced-mesh** - Draw call reduction patterns
4. **threejs-collision-aabb** - AABB collision detection
5. **game-loop-delta-time** - Frame-rate independent game loop
6. **input-manager-touch-keyboard** - Desktop + mobile input
7. **endless-runner-track-segments** - World-moves-to-player pattern
8. **vite-github-pages-deploy** - Static hosting deployment
9. **performance-profiling-mobile** - Device testing and profiling
10. **object-pool-pattern** - Memory optimization

### Agents (2)
Located in: `.opencode/agents/`

1. **threejs-architect** - Three.js and WebGL architecture specialist
   - Model: `opencode/glm-4.7-free`
   - Tools: write, edit, skill
   - Focus: Performance optimization, InstancedMesh, mobile best practices

2. **typescript-gamelogic** - TypeScript and game logic specialist
   - Model: `opencode/glm-4.7-free`
   - Temperature: 0.3 (balanced code generation)
   - Tools: write, edit, bash, skill
   - Focus: Game systems, state management, input, collision

### Configuration (3)
1. **opencode.json** - Global agent configuration with model assignments and permissions
2. **.opencode/README.md** - Comprehensive documentation and workflows
3. **Project scaffolding** - package.json, vite.config.ts, tsconfig.json, GitHub Actions workflow

### Documentation (3)
1. **README.md** - Project overview and quick start
2. **.opencode/README.md** - Skills/agents guide with usage examples
3. **Stub files** - HTML, CSS, main.ts placeholder

## Key Features

### Proactive Skill Loading

All skills include "Use proactively when:" language to ensure agents invoke them at the right time:

- **Three.js Architect** proactively loads skills for: renderer setup, InstancedMesh, performance profiling, object pooling
- **TypeScript Game Logic** proactively loads skills for: game loop, input, collision, track management

### Clear Invocation Guidance

Each skill has explicit "When to use me" section with:
- Specific scenarios where skill should be applied
- Proactive language for automatic invocation
- Example code patterns
- Performance impact notes

## Recommended Usage Workflow

### Phase 1: Project Setup
```
User: Set up Toilet Runner project
Agent (typescript-gamelogic):
I'll load the bun-project-setup skill to initialize your Bun + Vite project.

[Skill creates project structure, package.json, and directory layout]
```

### Phase 2: Three.js Architecture
```
User: Configure Three.js renderer for mobile
Agent (threejs-architect):
I'll use the threejs-renderer-config skill to set up a mobile-optimized WebGL renderer.

[Provides renderer with pixel ratio clamping, fog, and camera positioning]
```

### Phase 3: Core Systems
```
User: Implement obstacle system
Agent (threejs-architect):
I'll use the threejs-instanced-mesh skill to create an optimized obstacle system using InstancedMesh.

[Implements InstancedMesh pattern reducing draw calls from 50+ to 1]
```

### Phase 4: Game Logic
```
User: Add collision detection
Agent (typescript-gamelogic):
I'll use the threejs-collision-aabb skill to implement efficient AABB collision detection.

[Provides collision system with Box3 and optimization tips]
```

### Phase 5: Testing & Deployment
```
User: Deploy to GitHub Pages
Agent (typescript-gamelogic):
I'll use the vite-github-pages-deploy skill to configure Vite for GitHub Pages deployment.

[Provides vite.config.ts with base: './', package.json scripts, and GitHub Actions workflow]
```

## Quick Reference

### Agent Selection
- **Tab key** - Switch between Three.js Architect and TypeScript Game Logic
- **Plan agent** - Use for architecture review (no code changes)
- **Build agent** - Use for implementation (full tool access)

### Skill Invocation
Skills are loaded automatically based on context. To use manually:
```
Load skill name: @threejs-renderer-config
```

### Project Commands
```bash
# Development
bun run dev

# Build
bun run build

# Deploy
bun run deploy

# Preview build
bun run preview
```

## Next Steps

1. Run `bun install` to install dependencies (three, vite, gh-pages)
2. Run `bun run dev` to start development server
3. Use OpenCode agents to implement game systems
4. Profile on mobile devices before deployment
5. Deploy to GitHub Pages

## Model Configuration

All agents use `opencode/glm-4.7-free` as specified:
- Three.js Architect: Standard settings
- TypeScript Game Logic: Temperature 0.3 for balanced code generation

## Performance Targets

- **FPS:** 55-60 on mid-range mobile
- **Draw calls:** <10 total
- **Triangles:** <10,000
- **Memory:** Stable, no growth

All skills and agents are designed to achieve these targets through:
- InstancedMesh for obstacles (1 draw call)
- Object pooling for segments
- Simple materials (Lambert, not PBR)
- Pixel ratio clamping (2x on mobile)
