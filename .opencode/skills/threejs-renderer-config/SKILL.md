---
name: threejs-renderer-config
description: Configure Three.js WebGL renderer for mobile optimization
license: MIT
metadata:
  version: 1.0.0
  category: three.js
  related: mobile-optimization
---

## What I do

Create mobile-optimized Three.js WebGL renderer configuration:

### Renderer configuration pattern:
```typescript
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
  alpha: true,
  outputColorSpace: THREE.SRGBColorSpace
});

// Critical for mobile: clamp pixel ratio
const pixelRatio = Math.min(window.devicePixelRatio, 2);
renderer.setPixelRatio(pixelRatio);

// Set size
renderer.setSize(window.innerWidth, window.innerHeight);
```

### Scene setup:
```typescript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Sky blue

// Fog for distance hiding (performance + aesthetics)
scene.fog = new THREE.Fog(0x87CEEB, 20, 80);
```

### Camera positioning (endless runner view):
```typescript
const camera = new THREE.PerspectiveCamera(
  75,                           // FOV
  window.innerWidth / window.innerHeight,  // Aspect
  0.1,                          // Near
  100                             // Far
);
camera.position.set(0, 3, 6);  // Behind player, slightly elevated
camera.lookAt(0, 0, -10);     // Look ahead
```

## When to use me

**Use proactively when:** Setting up Three.js renderer for Toilet Runner game or any Three.js mobile game project.

I should be invoked for any new Three.js project to ensure:
- Mobile-optimized pixel ratio (clamped to 2x)
- High-performance GPU preference
- Correct color space (SRGB)
- Appropriate fog for distance optimization
- Proper camera positioning for endless runner view

## Best practices enforced

- Pixel ratio clamped to 2x (mobile optimization)
- High-performance GPU preference requested
- SRGB color space for correct rendering
- Fog hides distant geometry (performance)
- Appropriate near/far clipping planes
