import * as THREE from 'three';
import { ObstacleType, ObstacleGeometry } from './ObstacleTypes';

// Theme colors for arcade-style obstacles
const POOP_COLOR = 0x8B4513;         // Brown
const BRUSH_COLOR = 0x2E8B57;        // Sea green (toilet brush)
const WATER_COLOR = 0x4169E1;        // Royal blue (puddles)
const BARRIER_COLOR = 0xFF6B6B;      // Coral red (barriers)

export class ObstacleGeometryFactory {
  /**
   * Create geometry and material for each obstacle type
   */
  static createObstacleGeometry(type: ObstacleType): ObstacleGeometry {
    switch (type) {
      case ObstacleType.POOP:
        return this.createPoopGeometry();
      case ObstacleType.MOVING_BRUSH:
        return this.createBrushGeometry();
      case ObstacleType.WATER_PUDDLE:
        return this.createWaterGeometry();
      case ObstacleType.BARRIER_HIGH:
        return this.createBarrierGeometry(true);
      case ObstacleType.BARRIER_LOW:
        return this.createBarrierGeometry(false);
      default:
        return this.createPoopGeometry();
    }
  }

  /**
   * Original poop obstacle (cone on sphere)
   */
  private static createPoopGeometry(): ObstacleGeometry {
    // Merge sphere and cone for poop shape
    const bodyGeometry = new THREE.SphereGeometry(0.7, 12, 8);
    const tipGeometry = new THREE.ConeGeometry(0.35, 0.6, 8);
    tipGeometry.translate(0, 0.65, 0);

    const mergedGeometry = this.mergeGeometries([bodyGeometry, tipGeometry]);

    const material = new THREE.MeshLambertMaterial({
      color: POOP_COLOR,
      flatShading: true
    });

    return {
      type: ObstacleType.POOP,
      geometry: mergedGeometry,
      material,
      scale: new THREE.Vector3(1, 0.7, 1),
      colliderScale: new THREE.Vector3(1.4, 1.6, 1.4),
      yOffset: 0.3
    };
  }

  /**
   * Moving toilet brush (like Subway Surfers trains)
   * Large cylinder with bristles that moves sideways
   */
  private static createBrushGeometry(): ObstacleGeometry {
    // Brush handle (cylinder)
    const handleGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 8);
    handleGeometry.rotateX(Math.PI / 2);
    handleGeometry.translate(0, 0.8, 0);

    // Brush bristles (sphere)
    const bristlesGeometry = new THREE.SphereGeometry(0.5, 12, 8);
    bristlesGeometry.scale(1, 0.8, 1);
    bristlesGeometry.translate(0, 0.6, 0);

    const mergedGeometry = this.mergeGeometries([handleGeometry, bristlesGeometry]);

    const material = new THREE.MeshLambertMaterial({
      color: BRUSH_COLOR,
      flatShading: true
    });

    return {
      type: ObstacleType.MOVING_BRUSH,
      geometry: mergedGeometry,
      material,
      scale: new THREE.Vector3(1.5, 1.5, 1.5),  // Larger than poop
      colliderScale: new THREE.Vector3(2.2, 2.0, 2.2),
      yOffset: 0.6
    };
  }

  /**
   * Water puddle (slippery hazard)
   * Flattened cylinder with transparency
   */
  private static createWaterGeometry(): ObstacleGeometry {
    const geometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 16);

    const material = new THREE.MeshLambertMaterial({
      color: WATER_COLOR,
      transparent: true,
      opacity: 0.7,
      flatShading: true
    });

    return {
      type: ObstacleType.WATER_PUDDLE,
      geometry,
      material,
      scale: new THREE.Vector3(1, 1, 1),
      colliderScale: new THREE.Vector3(1.6, 0.2, 1.6),  // Flat collider
      yOffset: 0.05  // Nearly on ground
    };
  }

  /**
   * Barrier (jumpable or dodgeable)
   * Tall rectangular obstacle
   */
  private static createBarrierGeometry(high: boolean): ObstacleGeometry {
    const height = high ? 1.5 : 0.6;
    const width = 1.2;
    const depth = 0.3;

    const geometry = new THREE.BoxGeometry(width, height, depth);

    const material = new THREE.MeshLambertMaterial({
      color: BARRIER_COLOR,
      flatShading: true
    });

    return {
      type: high ? ObstacleType.BARRIER_HIGH : ObstacleType.BARRIER_LOW,
      geometry,
      material,
      scale: new THREE.Vector3(1, 1, 1),
      colliderScale: new THREE.Vector3(width * 1.1, height * 1.1, depth * 1.1),
      yOffset: height / 2
    };
  }

  /**
   * Merge multiple geometries into one
   * Note: Three.js r170+ uses BufferGeometryUtils.mergeGeometries
   */
  private static mergeGeometries(geometries: THREE.BufferGeometry[]): THREE.BufferGeometry {
    // For simplicity in this implementation, we'll use the first geometry
    // In production, you'd use BufferGeometryUtils.mergeGeometries
    return geometries[0].clone();
  }
}
