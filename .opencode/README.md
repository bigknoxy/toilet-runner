# Toilet Runner - OpenCode Skills & Agents Configuration

Complete setup of skills, agents, and workflows for Toilet Runner 3D endless runner project.

## Overview

This directory contains custom agents and skills for OpenCode to efficiently build the Toilet Runner game:

- **Skills (10):** Reusable patterns for Three.js, TypeScript, game logic, and deployment
- **Agents (2):** Specialized experts for Three.js architecture and TypeScript game logic
- **Configuration:** Global permissions and model settings

## Custom Agents

### 1. Three.js Architect
**File:** `.opencode/agents/threejs-architect.md`

**Purpose:** Three.js and WebGL architecture specialist

**When to use proactively:**
- Designing Three.js renderer configuration
- Implementing InstancedMesh for obstacles
- Optimizing mobile performance
- Architecting scene graph and object hierarchies
- Planning endless runner movement patterns
- Reviewing Three.js code for performance issues

**Model:** `opencode/glm-4.7-free`

**Tools:** write, edit, skill

### 2. TypeScript Game Logic
**File:** `.opencode/agents/typescript-gamelogic.md`

**Purpose:** TypeScript and game logic specialist

**When to use proactively:**
- Implementing game systems (RunnerController, TrackManager, ObstacleManager)
- Writing game loop and update systems
- Designing state management architecture
- Implementing collision detection systems
- Creating input handling for keyboard + touch
- Performance optimization of game logic

**Model:** `opencode/glm-4.7-free`
**Temperature:** 0.3 (balanced for code generation)

**Tools:** write, edit, bash, skill

## Skills (10)

### Project Setup

#### 1. bun-project-setup
**Purpose:** Initialize Bun + Vite + Three.js project with TypeScript

**When to use proactively:** Starting a new Toilet Runner project or setting up fresh environment

**Creates:**
- Vite project scaffold
- Package configuration
- Directory structure
- TypeScript setup
- GitHub Pages configuration

#### 2. vite-github-pages-deploy
**Purpose:** Configure Vite for GitHub Pages deployment

**When to use proactively:** Deploying to GitHub Pages or static hosting

**Provides:**
- vite.config.ts with base: './'
- package.json scripts
- GitHub Actions workflow
- gh-pages integration

### Three.js Core

#### 3. threejs-renderer-config
**Purpose:** Configure Three.js WebGL renderer for mobile optimization

**When to use proactively:** Setting up any Three.js renderer

**Key features:**
- Pixel ratio clamped to 2x
- High-performance GPU preference
- SRGB color space
- Fog for distance optimization
- Proper camera positioning

#### 4. threejs-instanced-mesh
**Purpose:** Three.js InstancedMesh patterns for draw call reduction

**When to use proactively:** Implementing obstacles or ground segments with repeated geometry

**Impact:**
- 1 draw call vs 50+ (10-50x reduction)
- Perfect for obstacles, particles, decorations
- Uses setMatrixAt() for per-instance transforms

#### 5. threejs-collision-aabb
**Purpose:** Three.js AABB collision detection for game objects

**When to use proactively:** Implementing player vs obstacle collision

**Features:**
- Efficient Box3 intersection checks
- Reusable collision system
- Optimization tips (spatial partitioning, Box3 reuse)
- Sufficient for simple runners (no OBB overkill)

### Game Logic

#### 6. game-loop-delta-time
**Purpose:** Frame-rate independent game loop with delta time

**When to use proactively:** Implementing any real-time game loop

**Provides:**
- Delta time capping (0.1s)
- System registration pattern
- Consistent movement across frame rates
- Example: 144fps vs 30fps behavior

#### 7. endless-runner-track-segments
**Purpose:** Implement endless runner track with spawning/despawning

**When to use proactively:** Building endless runner mechanics

**Pattern:**
- World moves to player (not player moves)
- No floating-point precision issues
- Spawn ahead, despawn behind
- Speed increases over time

#### 8. input-manager-touch-keyboard
**Purpose:** Handle keyboard and touch input for endless runner

**When to use proactively:** Implementing cross-platform input

**Supports:**
- Keyboard: Arrow keys, WASD, A/D
- Touch: Swipe detection (50px threshold)
- Prevents vertical movement confusion

### Performance & Testing

#### 9. performance-profiling-mobile
**Purpose:** Profile and debug Three.js performance on mobile devices

**When to use proactively:** Optimizing for mobile or before deployment

**Provides:**
- FPS counter setup (Stats)
- Chrome DevTools profiling guide
- Key metrics (55-60 FPS target, <10 draw calls)
- Real device testing workflow
- Common performance fixes

#### 10. object-pool-pattern
**Purpose:** Object pooling pattern for Three.js games

**When to use proactively:** Implementing frequently created/destroyed objects

**Impact:**
- Eliminates GC pauses
- 50+ allocations/minute → 0 after warmup
- Pre-warmed pool with growth on demand
- Perfect for segments, obstacles, particles

## Configuration

### opencode.json
```json
{
  "agent": {
    "threejs-architect": {
      "mode": "primary",
      "model": "opencode/glm-4.7-free"
    },
    "typescript-gamelogic": {
      "mode": "primary",
      "model": "opencode/glm-4.7-free",
      "temperature": 0.3
    }
  },
  "permission": {
    "skill": {
      "*": "allow"
    }
  }
}
```

**Notes:**
- Both custom agents use `opencode/glm-4.7-free` model
- All skills allowed by default
- Three.js Architect has no bash access (architecture focus)
- TypeScript Game Logic has full tool access

## Recommended Workflows

### Phase 1: Project Setup
**Primary agent:** `typescript-gamelogic`

1. Load `@bun-project-setup` skill
2. Create Vite + Bun project
3. Set up directory structure
4. Configure package.json scripts

### Phase 2: Three.js Architecture
**Primary agent:** `threejs-architect`

1. Load `@threejs-renderer-config` skill
2. Design scene graph hierarchy
3. Plan camera positioning for endless runner
4. Review architecture decisions

### Phase 3: Core Systems
**Primary agent:** `threejs-architect` or `typescript-gamelogic`

1. Load `@threejs-instanced-mesh` skill
2. Load `@endless-runner-track-segments` skill
3. Load `@game-loop-delta-time` skill
4. Implement track system with InstancedMesh obstacles

### Phase 4: Collision & Input
**Primary agent:** `typescript-gamelogic`

1. Load `@threejs-collision-aabb` skill
2. Load `@input-manager-touch-keyboard` skill
3. Implement AABB collision detection
4. Add keyboard + touch controls

### Phase 5: Optimization
**Primary agent:** `threejs-architect`

1. Load `@object-pool-pattern` skill
2. Implement object pools for segments
3. Optimize memory usage

### Phase 6: Testing & Profiling
**Primary agent:** `typescript-gamelogic`

1. Load `@performance-profiling-mobile` skill
2. Profile FPS on real devices
3. Optimize based on findings

### Phase 7: Deployment
**Primary agent:** `typescript-gamelogic`

1. Load `@vite-github-pages-deploy` skill
2. Configure Vite for GitHub Pages
3. Set up GitHub Actions workflow
4. Deploy to production

## Agent Selection Guide

### Use Three.js Architect when:
- Designing Three.js renderer configuration
- Implementing InstancedMesh for obstacles
- Optimizing mobile performance (pixel ratio, materials)
- Planning scene graph and object hierarchies
- Architecting endless runner movement patterns
- Reviewing Three.js code for performance issues

### Use TypeScript Game Logic when:
- Implementing game systems (RunnerController, TrackManager, ObstacleManager)
- Writing game loop and update systems
- Designing state management architecture
- Implementing collision detection systems
- Creating input handling for keyboard + touch
- Performance optimization of game logic
- Running bash commands (bun run dev, bun run build)
- Testing and debugging game systems

### Use Plan agent (built-in) when:
- Reviewing code without making changes
- Planning architecture before implementation
- Analyzing performance bottlenecks
- Creating implementation plans

### Use Build agent (built-in) when:
- Writing actual implementation code
- Creating files and directory structures
- Running bash commands
- Full development work with all tools enabled

## Skill Invocation Patterns

### Proactive skill loading

Skills should be loaded **proactively** when relevant:

**Three.js Architect agent should proactively load:**
- `threejs-renderer-config` - When setting up renderer
- `threejs-instanced-mesh` - When creating obstacles
- `endless-runner-track-segments` - When implementing track
- `object-pool-pattern` - When optimizing memory
- `performance-profiling-mobile` - When profiling performance

**TypeScript Game Logic agent should proactively load:**
- `game-loop-delta-time` - When implementing game loop
- `threejs-collision-aabb` - When adding collision
- `input-manager-touch-keyboard` - When adding controls
- `bun-project-setup` - When starting project
- `vite-github-pages-deploy` - When deploying

## Directory Structure

```
toilet-runner/
├── .opencode/
│   ├── agents/
│   │   ├── threejs-architect.md
│   │   └── typescript-gamelogic.md
│   └── skills/
│       ├── bun-project-setup/
│       │   └── SKILL.md
│       ├── threejs-renderer-config/
│       │   └── SKILL.md
│       ├── threejs-instanced-mesh/
│       │   └── SKILL.md
│       ├── threejs-collision-aabb/
│       │   └── SKILL.md
│       ├── game-loop-delta-time/
│       │   └── SKILL.md
│       ├── input-manager-touch-keyboard/
│       │   └── SKILL.md
│       ├── endless-runner-track-segments/
│       │   └── SKILL.md
│       ├── vite-github-pages-deploy/
│       │   └── SKILL.md
│       ├── performance-profiling-mobile/
│       │   └── SKILL.md
│       └── object-pool-pattern/
│           └── SKILL.md
├── opencode.json
├── src/
│   ├── core/
│   │   ├── GameLoop.ts
│   │   ├── SceneManager.ts
│   │   └── GameState.ts
│   ├── game/
│   │   ├── RunnerController.ts
│   │   ├── TrackManager.ts
│   │   ├── ObstacleManager.ts
│   │   └── CollisionSystem.ts
│   ├── input/
│   │   └── InputManager.ts
│   ├── ui/
│   │   └── UIManager.ts
│   └── main.ts
├── public/
│   └── index.html
├── vite.config.ts
└── package.json
```

## Usage Examples

### Example 1: Setting up project

```
User: Set up a new Toilet Runner project with Bun + Vite

Agent (typescript-gamelogic):
I'll load the bun-project-setup skill to set up your Toilet Runner project with Bun + Vite.

[Loads skill and executes setup]
```

### Example 2: Implementing Three.js renderer

```
User: Configure the Three.js renderer for mobile optimization

Agent (threejs-architect):
I'll use the threejs-renderer-config skill to set up a mobile-optimized WebGL renderer for your Toilet Runner game.

[Provides renderer configuration with pixel ratio clamping, fog, and camera positioning]
```

### Example 3: Creating obstacle system

```
User: Implement the poop obstacle system with InstancedMesh

Agent (threejs-architect):
I'll use the threejs-instanced-mesh skill to create an optimized obstacle system using InstancedMesh to reduce draw calls.

[Implements InstancedMesh pattern for 50 obstacles with 1 draw call]
```

### Example 4: Adding collision

```
User: Add collision detection between runner and obstacles

Agent (typescript-gamelogic):
I'll use the threejs-collision-aabb skill to implement efficient AABB collision detection for your game.

[Provides collision system with Box3 and optimization tips]
```

### Example 5: Mobile performance profiling

```
User: Profile the game performance on mobile devices

Agent (threejs-architect):
I'll use the performance-profiling-mobile skill to set up FPS counters and profiling for your mobile devices.

[Provides Stats setup, Chrome DevTools guide, and common fixes]
```

## Best Practices

### For Agents
1. Always mention relevant skills in your description
2. Use skills proactively when the task matches skill purpose
3. Follow the temperature settings in your agent config
4. Respect tool permissions in agent config
5. Provide clear "when to use" guidance for skill invocation

### For Skills
1. Have clear, specific descriptions for discoverability
2. Include "when to use me" section with proactive guidance
3. Provide code examples and patterns
4. Document performance impact and best practices
5. Reference related skills when appropriate

### For Users
1. Switch agents with Tab key
2. Invoke skills by loading them when relevant
3. Use Plan agent for architecture review
4. Use Build agent for implementation
5. Read agent and skill descriptions for guidance

## Troubleshooting

### Skill not showing up
1. Verify SKILL.md is in correct directory
2. Check frontmatter has required fields (name, description)
3. Ensure skill name matches directory name (lowercase, hyphens)
4. Check opencode.json permissions

### Agent not working correctly
1. Verify agent mode (primary/subagent)
2. Check model specified in opencode.json
3. Confirm tools are enabled correctly
4. Review agent description for skill references

### Proactive invocation not happening
1. Check agent description includes "when to use proactively" language
2. Verify skill has clear invocation guidance
3. Review agent temperature settings
4. Test with simple prompts first

## Model Configuration

### Custom Agents
- **Three.js Architect:** `opencode/glm-4.7-free` (balanced)
- **TypeScript Game Logic:** `opencode/glm-4.7-free` (0.3 temperature for code)

### Built-in Agents
- **Build:** Default model from opencode.json or global config
- **Plan:** Default model from opencode.json or global config

## Additional Resources

- OpenCode Docs: https://opencode.ai/docs/
- Agents Guide: https://opencode.ai/docs/agents/
- Skills Guide: https://opencode.ai/docs/skills/
- OpenCode GitHub: https://github.com/opencode-ai/opencode
