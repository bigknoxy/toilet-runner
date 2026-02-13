import * as THREE from 'three';

export enum PerformanceTier {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export interface PerformanceConfig {
  tier: PerformanceTier;
  shadows: boolean;
  postProcessing: boolean;
  particles: { collision: number; effects: number };
  pixelRatio: number;
  antialias: boolean;
  emojiFaces: boolean;
}

export class PerformanceManager {
  private static tier: PerformanceTier = PerformanceTier.MEDIUM;
  private static currentFPS: number = 60;
  private static fpsSamples: number[] = [];

  static async initialize(): Promise<PerformanceConfig> {
    await this.detectCapabilities();
    return this.getConfig();
  }

  private static async detectCapabilities(): Promise<void> {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    
    if (!gl) {
      this.tier = PerformanceTier.LOW;
      return;
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;

    if (isMobile || hasLowMemory) {
      this.tier = PerformanceTier.LOW;
    } else {
      const score = await this.runQuickBenchmark();
      if (score < 20) this.tier = PerformanceTier.LOW;
      else if (score < 40) this.tier = PerformanceTier.MEDIUM;
      else this.tier = PerformanceTier.HIGH;
    }
  }

  private static async runQuickBenchmark(): Promise<number> {
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(100, 100);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 64, 8);
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const startTime = performance.now();
    const iterations = 50;

    for (let i = 0; i < iterations; i++) {
      mesh.rotation.x += 0.1;
      mesh.rotation.y += 0.1;
      renderer.render(scene, camera);
    }

    const score = (iterations / (performance.now() - startTime)) * 1000;

    renderer.dispose();
    geometry.dispose();
    material.dispose();
    mesh.removeFromParent();
    scene.remove(mesh);
    canvas.remove();

    return score;
  }

  static updateFPS(delta: number): void {
    const fps = Math.round(1 / delta);
    this.fpsSamples.push(fps);
    if (this.fpsSamples.length > 30) this.fpsSamples.shift();
  }

  static getAverageFPS(): number {
    if (this.fpsSamples.length === 0) return 60;
    return Math.round(
      this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length
    );
  }

  static getConfig(): PerformanceConfig {
    switch (this.tier) {
      case PerformanceTier.LOW:
        return {
          tier: this.tier,
          shadows: false,
          postProcessing: false,
          particles: { collision: 15, effects: 0 },
          pixelRatio: 1,
          antialias: false,
          emojiFaces: false
        };
      case PerformanceTier.MEDIUM:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 25, effects: 15 },
          pixelRatio: 1.5,
          antialias: true,
          emojiFaces: true
        };
      case PerformanceTier.HIGH:
        return {
          tier: this.tier,
          shadows: true,
          postProcessing: true,
          particles: { collision: 40, effects: 25 },
          pixelRatio: 2,
          antialias: true,
          emojiFaces: true
        };
    }
  }

  static getCurrentTier(): PerformanceTier {
    return this.tier;
  }

  static setTier(tier: PerformanceTier): void {
    this.tier = tier;
    this.fpsSamples = [];
  }
}
