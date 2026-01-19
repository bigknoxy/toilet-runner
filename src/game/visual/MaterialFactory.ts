import * as THREE from 'three';
import { PerformanceTier } from '../../core/PerformanceManager';

export class MaterialFactory {
  private static materials: Map<string, THREE.Material> = new Map();
  private static quality: PerformanceTier = PerformanceTier.MEDIUM;

  static setQuality(quality: PerformanceTier): void {
    if (this.quality === quality) return;
    this.disposeAll();
    this.quality = quality;
  }

  static getTrackMaterial(texture?: THREE.Texture): THREE.Material {
    const key = `track_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0x88cc88,
          map: texture,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0x88cc88,
          map: texture,
          roughness: config.roughness,
          metalness: config.metalness,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  static getObstacleMaterial(): THREE.Material {
    const key = `obstacle_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0x6B4423,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0x6B4423,
          roughness: config.roughness + 0.2,
          metalness: 0,
          emissive: 0x3D2817,
          emissiveIntensity: 0.2,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  static getToiletMaterial(): THREE.Material {
    const key = `toilet_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0xFFFFFF,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0xFFFFFF,
          roughness: config.roughness - 0.1,
          metalness: config.metalness,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  static getPlayerMaterial(texture?: THREE.Texture): THREE.Material {
    const key = `player_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const config = this.getMaterialConfig();
    const mat = this.quality === PerformanceTier.LOW
      ? new THREE.MeshLambertMaterial({
          color: 0xFFFFF0,
          map: texture,
          side: THREE.FrontSide
        })
      : new THREE.MeshStandardMaterial({
          color: 0xFFFFF0,
          map: texture,
          roughness: config.roughness + 0.1,
          metalness: 0,
          side: THREE.FrontSide
        });

    this.materials.set(key, mat);
    return mat;
  }

  static getWhiteMaterial(): THREE.Material {
    const key = `white_${this.quality}`;
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }

    const mat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      side: THREE.FrontSide
    });

    this.materials.set(key, mat);
    return mat;
  }

  private static getMaterialConfig() {
    switch (this.quality) {
      case PerformanceTier.LOW:
        return { roughness: 1.0, metalness: 0.0, envMapIntensity: 0.0 };
      case PerformanceTier.MEDIUM:
        return { roughness: 0.8, metalness: 0.05, envMapIntensity: 0.2 };
      case PerformanceTier.HIGH:
        return { roughness: 0.6, metalness: 0.1, envMapIntensity: 0.5 };
    }
  }

  static disposeAll(): void {
    this.materials.forEach(mat => mat.dispose());
    this.materials.clear();
  }
}
