import * as THREE from 'three';

export enum ParticleType {
  DUST = 'dust',
  SPARKLE = 'sparkle',
  IMPACT = 'impact',
  COIN = 'coin'
}

export interface ParticleConfig {
  maxParticles: number;
  colors: number[];
  size: { min: number; max: number };
  speed: { min: number; max: number };
  lifetime: number;
  gravity: number;
}

export interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  lifetime: number;
  maxLifetime: number;
  active: boolean;
  color: THREE.Color;
  size: number;
  rotation: THREE.Euler;
  rotationSpeed: THREE.Vector3;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private instancedMesh!: THREE.InstancedMesh;
  private matrix = new THREE.Matrix4();
  private tempVector = new THREE.Vector3();
  private tempColor = new THREE.Color();
  private tempEuler = new THREE.Euler();

  constructor(
    private scene: THREE.Scene,
    private config: ParticleConfig
  ) {
    this.initializeInstancedMesh();
    this.initializeParticles();
  }

  private initializeInstancedMesh(): void {
    const geometry = new THREE.PlaneGeometry(
      this.config.size.max,
      this.config.size.max
    );

    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
      depthWrite: false,
      vertexColors: true
    });

    this.instancedMesh = new THREE.InstancedMesh(
      geometry,
      material,
      this.config.maxParticles
    );

    this.instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.instancedMesh);
  }

  private initializeParticles(): void {
    for (let i = 0; i < this.config.maxParticles; i++) {
      this.particles.push({
        position: new THREE.Vector3(0, -100, 0),
        velocity: new THREE.Vector3(),
        lifetime: 0,
        maxLifetime: 0,
        active: false,
        color: new THREE.Color(1, 1, 1),
        size: 1,
        rotation: new THREE.Euler(),
        rotationSpeed: new THREE.Vector3()
      });
    }
  }

 emit(position: THREE.Vector3, count: number = 10): void {
    let emitted = 0;
    for (const particle of this.particles) {
      if (!particle.active) {
        this.resetParticle(particle, position);
        particle.active = true;
        emitted++;
        if (emitted >= count) break;
      }
    }
  }

  private resetParticle(particle: Particle, position: THREE.Vector3): void {
    particle.position.copy(position);

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
    particle.color.setHex(colorHex);

    particle.size = THREE.MathUtils.randFloat(
      this.config.size.min / this.config.size.max,
      1.0
    );

    particle.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );

    particle.rotationSpeed.set(
      Math.random() * 6 - 3,
      Math.random() * 10 - 5,
      Math.random() * 6 - 3
    );
  }

  update(delta: number): void {
    let activeCount = 0;

    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      
      if (!particle.active) {
        this.matrix.setPosition(0, -100, 0);
        this.instancedMesh.setMatrixAt(i, this.matrix);
        continue;
      }

      particle.lifetime -= delta;
      particle.velocity.y -= this.config.gravity * delta;

      this.tempVector.copy(particle.velocity).multiplyScalar(delta);
      particle.position.add(this.tempVector);

      particle.rotation.x += particle.rotationSpeed.x * delta;
      particle.rotation.y += particle.rotationSpeed.y * delta;
      particle.rotation.z += particle.rotationSpeed.z * delta;

      this.matrix.compose(
        particle.position,
        new THREE.Quaternion().setFromEuler(particle.rotation),
        this.tempVector.setScalar(particle.size * this.config.size.max)
      );

      this.instancedMesh.setMatrixAt(i, this.matrix);

      const opacity = Math.max(0, particle.lifetime / particle.maxLifetime);
      this.tempColor.copy(particle.color);
      this.tempColor.multiplyScalar(opacity);
      this.instancedMesh.setColorAt(i, this.tempColor);

      if (particle.lifetime <= 0) {
        particle.active = false;
        particle.position.set(0, -100, 0);
        this.matrix.setPosition(0, -100, 0);
        this.instancedMesh.setMatrixAt(i, this.matrix);
      } else {
        activeCount++;
      }
    }

    this.instancedMesh.instanceMatrix.needsUpdate = true;
    if (this.instancedMesh.instanceColor) {
      this.instancedMesh.instanceColor.needsUpdate = true;
    }

    this.instancedMesh.visible = activeCount > 0;
  }

  reset(): void {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      if (particle.active) {
        particle.active = false;
        particle.position.set(0, -100, 0);
        this.matrix.setPosition(0, -100, 0);
        this.instancedMesh.setMatrixAt(i, this.matrix);
      }
    }
    this.instancedMesh.instanceMatrix.needsUpdate = true;
    this.instancedMesh.visible = false;
  }

  dispose(): void {
    this.scene.remove(this.instancedMesh);
    this.instancedMesh.geometry.dispose();
    (this.instancedMesh.material as THREE.Material).dispose();
    this.particles = [];
  }

  getActiveCount(): number {
    return this.particles.filter(p => p.active).length;
  }

  emitDust(position: THREE.Vector3): void {
    const dustConfig = ParticlePresets.dust;
    for (let i = 0; i < 3; i++) {
      this.emit(position, 2);
    }
  }

  emitSparkle(position: THREE.Vector3): void {
    this.tempVector.copy(position);
    this.tempVector.y += 1;
    this.emit(this.tempVector, 8);
  }

  emitImpact(position: THREE.Vector3): void {
    this.emit(position, 15);
  }

  emitCoin(position: THREE.Vector3): void {
    this.emit(position, 20);
  }
}

export const ParticlePresets: Record<ParticleType, ParticleConfig> = {
  [ParticleType.DUST]: {
    maxParticles: 200,
    colors: [0xD2B48C, 0xC19A6B, 0xA0826D, 0x8B7355],
    size: { min: 0.04, max: 0.12 },
    speed: { min: 0.5, max: 2.0 },
    lifetime: 0.4,
    gravity: 1
  },
  [ParticleType.SPARKLE]: {
    maxParticles: 200,
    colors: [0xFFD700, 0xFFA500, 0xFFFF00, 0xFFFFFF, 0xFFE4B5],
    size: { min: 0.06, max: 0.18 },
    speed: { min: 1, max: 4 },
    lifetime: 1.0,
    gravity: 0.5
  },
  [ParticleType.IMPACT]: {
    maxParticles: 200,
    colors: [0xFFFFFF, 0xF5F5DC, 0x8B7355, 0x6B4423, 0xFF6B6B],
    size: { min: 0.08, max: 0.25 },
    speed: { min: 2, max: 8 },
    lifetime: 0.8,
    gravity: 12
  },
  [ParticleType.COIN]: {
    maxParticles: 200,
    colors: [0xFFD700, 0xFFA500, 0xFFFF00, 0xFFE4B5, 0x00FF00],
    size: { min: 0.05, max: 0.15 },
    speed: { min: 2, max: 6 },
    lifetime: 1.2,
    gravity: 3
  }
};
