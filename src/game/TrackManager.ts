import * as THREE from 'three';

const LANE_WIDTH = 3;
const SEGMENT_LENGTH = 10;
const VISIBLE_SEGMENTS = 8;
// Reduced from 80 to 60 - obstacles spawn closer for better visibility
const SPAWN_DISTANCE = 60;
const DESPAWN_DISTANCE = 20;

interface TrackSegment {
  mesh: THREE.InstancedMesh;
  z: number;
  instanceIndex: number;
}

export class TrackManager {
  private scene: THREE.Scene;
  private segments: TrackSegment[] = [];
  private instancedMesh: THREE.InstancedMesh;
  private nextInstanceIndex: number = 0;
  private freeInstanceIndices: number[] = [];
  private tempMatrix: THREE.Matrix4;
  private tempVector: THREE.Vector3;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.tempMatrix = new THREE.Matrix4();
    this.tempVector = new THREE.Vector3();

    // Create ground geometry spanning all 3 lanes with margins
    const geometry = new THREE.BoxGeometry(LANE_WIDTH * 3 + 6, 0.5, SEGMENT_LENGTH);
    const material = new THREE.MeshLambertMaterial({ color: 0x88cc88 });

    // Create InstancedMesh for performance (1 draw call)
    const maxInstances = VISIBLE_SEGMENTS * 2; // Buffer for active segments
    this.instancedMesh = new THREE.InstancedMesh(geometry, material, maxInstances);
    this.scene.add(this.instancedMesh);

    // Initialize track segments
    this.initializeSegments();
  }

  private initializeSegments(): void {
    // Create initial segments centered around player position (PLAYER_Z = -4)
    // Spawn from Z=-40 to Z=30 (70 units total = 7 segments visible)
    const startZ = -40;
    for (let i = 0; i < VISIBLE_SEGMENTS; i++) {
      const z = startZ + i * SEGMENT_LENGTH;
      this.createSegment(z);
    }
  }

  private createSegment(z: number): void {
    let instanceIndex: number;

    if (this.freeInstanceIndices.length > 0) {
      instanceIndex = this.freeInstanceIndices.pop()!;
    } else {
      if (this.nextInstanceIndex >= this.instancedMesh.count) {
        console.warn('Reached maximum track instances');
        return;
      }
      instanceIndex = this.nextInstanceIndex++;
    }

    // Set segment position
    this.tempVector.set(0, -0.25, z); // Y = -0.25 to sit flush with ground
    this.tempMatrix.makeTranslation(this.tempVector.x, this.tempVector.y, this.tempVector.z);
    this.instancedMesh.setMatrixAt(instanceIndex, this.tempMatrix);

    // Track segment
    const segment: TrackSegment = {
      mesh: this.instancedMesh,
      z: z,
      instanceIndex: instanceIndex
    };

    this.segments.push(segment);
  }

  update(delta: number, speed: number): void {
    const moveDelta = speed * delta;

    // Move all segments toward player (+Z)
    for (const segment of this.segments) {
      segment.z += moveDelta;
      
      // Update InstancedMesh matrix
      this.instancedMesh.getMatrixAt(segment.instanceIndex, this.tempMatrix);
      this.tempVector.setFromMatrixPosition(this.tempMatrix);
      this.tempVector.z = segment.z;
      this.tempMatrix.setPosition(this.tempVector);
      this.instancedMesh.setMatrixAt(segment.instanceIndex, this.tempMatrix);
    }

    // Update InstancedMesh matrices
    this.instancedMesh.instanceMatrix.needsUpdate = true;

    // Check spawn/despawn conditions
    this.handleSpawnDespawn();
  }

  private handleSpawnDespawn(): void {
    // Find frontmost and rearmost segments
    let frontmostZ = Number.MAX_VALUE;
    let rearmostZ = -Number.MAX_VALUE;
    let frontmostIndex = -1;
    let rearmostIndex = -1;

    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i];
      if (segment.z < frontmostZ) {
        frontmostZ = segment.z;
        frontmostIndex = i;
      }
      if (segment.z > rearmostZ) {
        rearmostZ = segment.z;
        rearmostIndex = i;
      }
    }

    // Spawn segments ahead if needed (spawn 40 units ahead for better visibility)
    const SPAWN_DISTANCE_ADJUSTED = 40;
    if (frontmostZ > -SPAWN_DISTANCE_ADJUSTED) {
      const newZ = frontmostZ - SEGMENT_LENGTH;
      this.createSegment(newZ);
    }

    // Despawn segments behind if needed
    if (rearmostZ > DESPAWN_DISTANCE) {
      const segment = this.segments[rearmostIndex];
      this.freeInstanceIndices.push(segment.instanceIndex);
      this.segments.splice(rearmostIndex, 1);
    }
  }

  getRearZ(): number {
    if (this.segments.length === 0) return 0;

    let rearmostZ = -Number.MAX_VALUE;
    for (const segment of this.segments) {
      if (segment.z > rearmostZ) {
        rearmostZ = segment.z;
      }
    }
    return rearmostZ;
  }

  getFrontZ(): number {
    if (this.segments.length === 0) return 0;

    let frontmostZ = Number.MAX_VALUE;
    for (const segment of this.segments) {
      if (segment.z < frontmostZ) {
        frontmostZ = segment.z;
      }
    }
    return frontmostZ;
  }

  reset(): void {
    // Clear all segments
    this.segments = [];
    this.nextInstanceIndex = 0;

    // Reinitialize segments at starting positions
    this.initializeSegments();
  }

  dispose(): void {
    this.scene.remove(this.instancedMesh);
    this.instancedMesh.geometry.dispose();
    (this.instancedMesh.material as THREE.Material).dispose();
  }

  applyTileTexture(texture: THREE.CanvasTexture): void {
    const material = new THREE.MeshLambertMaterial({ map: texture });
    this.instancedMesh.material = material;
    this.instancedMesh.material.needsUpdate = true;
  }
}