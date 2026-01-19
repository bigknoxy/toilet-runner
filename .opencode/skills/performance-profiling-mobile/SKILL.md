---
name: performance-profiling-mobile
description: Profile and debug Three.js performance on mobile devices
license: MIT
metadata:
  version: 1.0.0
  category: optimization
  related: mobile-optimization
---

## What I do

Profile and debug Three.js performance on mobile browsers.

### FPS counter setup:
```typescript
import Stats from 'three/examples/jsm/libs/stats.module.js';

const stats = new Stats();
document.body.appendChild(stats.dom);

// Update in game loop
gameLoop.registerUpdate(() => {
  stats.update();
});
```

### Chrome DevTools Performance profiling:
1. Open DevTools (F12) → Performance tab
2. Record 5-10 seconds of gameplay
3. Look for:
   - **Long tasks** (>50ms) - indicates blocking operations
   - **FPS drops** - below 55fps on mobile
   - **GC spikes** - frequent garbage collection
   - **Draw calls** - should be <10

### Key metrics to track:
```
Target: 55-60 FPS on mid-range mobile

Draw calls: <10
  - 1 InstancedMesh for obstacles
  - 1-2 for ground segments
  - 1 for player
  - 1-2 for UI overlays

Triangles: <10,000
  - Low-poly models (8-12 segments per geometry)
  - Simple materials (Lambert, not PBR)

Memory: Stable, no growth
  - Object pooling for segments/obstacles
  - Reuse THREE.Vector3, THREE.Box3 in hot loops
```

### Mobile device testing:
```bash
# Local testing on real device
bun run dev

# Find local IP
ip addr  # Linux
ipconfig  # Windows

# Access from mobile
http://<local-ip>:5173

# Remote debugging (Chrome)
chrome://inspect
```

### Common performance fixes:

**Stuttering:**
- Reduce particle count
- Disable antialias: `antialias: false`
- Use MeshLambertMaterial instead of Phong

**Low FPS:**
- Reduce polygon count
- Disable shadows
- Lower render resolution
- Use frustum culling (automatic in Three.js)

**Flickering:**
- Clamp delta time
- Use fixed time step for physics
- Don't modify geometry in render loop

## When to use me

**Use proactively when:** Profiling and optimizing Toilet Runner for mobile devices.

I should be invoked for:
- Before deploying to ensure mobile performance
- When experiencing FPS drops or stuttering
- Any time performance needs optimization
- Testing on actual mobile devices

Profile early, profile often to catch performance issues before deployment.

## Notes

- Profile on real devices, not just DevTools emulation
- Use FPS counter during actual gameplay
- Chrome Remote Debugging is invaluable
