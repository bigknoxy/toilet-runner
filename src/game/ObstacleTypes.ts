import * as THREE from 'three';

// Obstacle types for Toilet Runner
export enum ObstacleType {
  POOP = 'poop',              // Original static obstacle
  MOVING_BRUSH = 'brush',     // Moving toilet brush (like Subway Surfers trains)
  WATER_PUDDLE = 'water',     // Slippery puddle that slows player
  BARRIER_HIGH = 'barrier',   // High barrier (jumpable)
  BARRIER_LOW = 'low_barrier' // Low barrier (dodgeable)
}

export interface ObstacleData {
  id: string;
  type: ObstacleType;
  lane: number;              // -1 (left), 0 (center), 1 (right)
  z: number;                 // Z position
  active: boolean;           // Is obstacle active in scene
  scale: number;             // Size scale (0.9-1.1)
  speedMultiplier: number;   // Speed modifier for moving obstacles
  moveDirection?: number;    // -1 (left), 1 (right) for moving obstacles
  moveSpeed?: number;        // Speed for moving obstacles
  slowMultiplier?: number;   // Speed reduction for puddles (0.5 = half speed)
}

export interface ObstacleGeometry {
  type: ObstacleType;
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  scale: THREE.Vector3;
  colliderScale: THREE.Vector3;
  yOffset: number;
}
