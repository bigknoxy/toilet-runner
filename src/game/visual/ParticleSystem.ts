import * as THREE from 'three';

export interface ParticleConfig {
  maxParticles: number;
  colors: number[];
  size: { min: number; max: number };
  speed: { min: number; max: number };
  lifetime: number;
  gravity: number;
}

export interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  lifetime: number;
  maxLifetime: number;
  active: boolean;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private tempVector = new THREE.Vector3();

  constructor(
    private scene: THREE.Scene,
    private config: ParticleConfig
  ) {
    this.initializePool();
  }

  private initializePool(): void {
    const geometry = new THREE.PlaneGeometry(
      this.config.size.max,
      this.config.size.max
    );

    for (let i = 0; i < this.config.maxParticles; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      mesh.position.set(0, -100, 0);
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(),
        lifetime: 0,
        maxLifetime: 0,
        active: false
      });
    }
  }

  emit(position: THREE.Vector3, count: number = 10): void {
    let emitted = 0;
    for (const particle of this.particles) {
      if (!particle.active) {
        this.resetParticle(particle, position);
        particle.active = true;
        particle.mesh.visible = true;
        emitted++;
        if (emitted >= count) break;
      }
    }
  }

  private resetParticle(particle: Particle, position: THREE.Vector3): void {
    particle.mesh.position.copy(position);

    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.5;
    const speed = THREE.MathUtils.randFloat(
      this.config.speed.min,
      this.config.speed.max
    );

    particle.velocity.set(
      Math.sin(phi) * Math.cos(theta) * speed,
      Math.cos(phi) * speed + speed * 0.5,
      Math.sin(phi) * Math.sin(theta) * speed
    );

    particle.maxLifetime = this.config.lifetime * (0.7 + Math.random() * 0.6);
    particle.lifetime = particle.maxLifetime;

    const colorHex = this.config.colors[
      Math.floor(Math.random() * this.config.colors.length)
    ];
    (particle.mesh.material as THREE.MeshBasicMaterial).color.setHex(colorHex);

    const scale = THREE.MathUtils.randFloat(
      this.config.size.min / this.config.size.max,
      1.0
    );
    particle.mesh.scale.setScalar(scale);
    particle.mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
  }

  update(delta: number): void {
    for (const particle of this.particles) {
      if (!particle.active) continue;

      particle.lifetime -= delta;

      particle.velocity.y -= this.config.gravity * delta;

      this.tempVector.copy(particle.velocity).multiplyScalar(delta);
      particle.mesh.position.add(this.tempVector);

      particle.mesh.rotation.x += delta * 3;
      particle.mesh.rotation.y += delta * 5;

      const opacity = Math.max(0, particle.lifetime / particle.maxLifetime);
      (particle.mesh.material as THREE.MeshBasicMaterial).opacity = opacity;

      if (particle.lifetime <= 0) {
        particle.active = false;
        particle.mesh.visible = false;
        particle.mesh.position.set(0, -100, 0);
      }
    }
  }

  reset(): void {
    for (const particle of this.particles) {
      if (particle.active) {
        particle.active = false;
        particle.mesh.visible = false;
        particle.mesh.position.set(0, -100, 0);
      }
    }
  }

  dispose(): void {
    for (const particle of this.particles) {
      this.scene.remove(particle.mesh);
      particle.mesh.geometry.dispose();
      (particle.mesh.material as THREE.Material).dispose();
    }
    this.particles = [];
  }

  getActiveCount(): number {
    return this.particles.filter(p => p.active).length;
  }
}

export const ParticlePresets: Record<string, ParticleConfig> = {
  collision: {
    maxParticles: 50,
    colors: [0xFFFFFF, 0xF5F5DC, 0x8B7355, 0x6B4423],
    size: { min: 0.08, max: 0.25 },
    speed: { min: 2, max: 6 },
    lifetime: 0.6,
    gravity: 8
  },
  scoreSparkle: {
    maxParticles: 30,
    colors: [0xFFD700, 0xFFA500, 0xFFFF00, 0xFFFFFF],
    size: { min: 0.05, max: 0.15 },
    speed: { min: 1, max: 3 },
    lifetime: 0.8,
    gravity: 2
  },
  laneTrail: {
    maxParticles: 20,
    colors: [0xADD8E6, 0x87CEEB, 0xB0E0E6],
    size: { min: 0.03, max: 0.1 },
    speed: { min: 0.5, max: 1.5 },
    lifetime: 0.3,
    gravity: 1
  }
};
