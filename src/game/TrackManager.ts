import * as THREE from 'three';

const LANE_WIDTH = 3;
const SEGMENT_LENGTH = 10;
const VISIBLE_SEGMENTS = 8;
// Reduced from 80 to 60 - obstacles spawn closer for better visibility
const SPAWN_DISTANCE = 60;
const DESPAWN_DISTANCE = 30;

interface TrackSegment {
  mesh: THREE.InstancedMesh;
  z: number;
  instanceIndex: number;
  lineIndices: number[];
}

export class TrackManager {
  private scene: THREE.Scene;
  private segments: TrackSegment[] = [];
  private instancedMesh: THREE.InstancedMesh;
  private nextInstanceIndex: number = 0;
  private freeInstanceIndices: number[] = [];
  private lineMesh: THREE.InstancedMesh;
  private nextLineIndex: number = 0;
  private freeLineIndices: number[] = [];
  private tempMatrix: THREE.Matrix4;
  private tempVector: THREE.Vector3;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.tempMatrix = new THREE.Matrix4();
    this.tempVector = new THREE.Vector3();

    // Create ground geometry spanning all 3 lanes with margins
    const geometry = new THREE.BoxGeometry(LANE_WIDTH * 3 + 6, 0.5, SEGMENT_LENGTH);
    const material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

    // Create InstancedMesh for performance (1 draw call)
    const maxInstances = VISIBLE_SEGMENTS * 2; // Buffer for active segments
    this.instancedMesh = new THREE.InstancedMesh(geometry, material, maxInstances);
    this.scene.add(this.instancedMesh);

    // Lane line markings
    const lineGeometry = new THREE.PlaneGeometry(0.12, SEGMENT_LENGTH);
    const lineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    this.lineMesh = new THREE.InstancedMesh(lineGeometry, lineMaterial, maxInstances * 2);
    this.lineMesh.count = 0;
    this.scene.add(this.lineMesh);

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
        return;
      }
      instanceIndex = this.nextInstanceIndex++;
    }

    // Set segment position
    this.tempVector.set(0, -0.25, z); // Y = -0.25 to sit flush with ground
    this.tempMatrix.makeTranslation(this.tempVector.x, this.tempVector.y, this.tempVector.z);
    this.instancedMesh.setMatrixAt(instanceIndex, this.tempMatrix);

    // Create lane line instances (2 per segment at x = -1.5 and x = +1.5)
    const lineIndices: number[] = [];
    for (const lx of [-LANE_WIDTH / 2, LANE_WIDTH / 2]) {
      let li: number;
      if (this.freeLineIndices.length > 0) {
        li = this.freeLineIndices.pop()!;
      } else {
        li = this.nextLineIndex++;
      }
      this.tempMatrix.makeRotationX(-Math.PI / 2);
      this.tempMatrix.setPosition(lx, 0.01, z);
      this.lineMesh.setMatrixAt(li, this.tempMatrix);
      lineIndices.push(li);
    }
    this.lineMesh.count = Math.max(this.lineMesh.count, this.nextLineIndex);
    this.lineMesh.instanceMatrix.needsUpdate = true;

    // Track segment
    const segment: TrackSegment = {
      mesh: this.instancedMesh,
      z: z,
      instanceIndex: instanceIndex,
      lineIndices: lineIndices,
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

    // Move lane lines alongside track segments
    for (const segment of this.segments) {
      for (const li of segment.lineIndices) {
        this.lineMesh.getMatrixAt(li, this.tempMatrix);
        this.tempVector.setFromMatrixPosition(this.tempMatrix);
        this.tempVector.z = segment.z;
        this.tempMatrix.makeRotationX(-Math.PI / 2);
        this.tempMatrix.setPosition(this.tempVector.x, 0.01, this.tempVector.z);
        this.lineMesh.setMatrixAt(li, this.tempMatrix);
      }
    }

    // Update InstancedMesh matrices
    this.instancedMesh.instanceMatrix.needsUpdate = true;
    this.lineMesh.instanceMatrix.needsUpdate = true;

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
      for (const li of segment.lineIndices) {
        this.freeLineIndices.push(li);
      }
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
    this.freeInstanceIndices = [];
    this.nextLineIndex = 0;
    this.freeLineIndices = [];
    this.lineMesh.count = 0;

    // Reinitialize segments at starting positions
    this.initializeSegments();
  }

  dispose(): void {
    this.scene.remove(this.instancedMesh);
    this.instancedMesh.geometry.dispose();
    (this.instancedMesh.material as THREE.Material).dispose();
    this.scene.remove(this.lineMesh);
    this.lineMesh.geometry.dispose();
    (this.lineMesh.material as THREE.Material).dispose();
  }

  applyTileTexture(texture: THREE.CanvasTexture): void {
    const material = new THREE.MeshLambertMaterial({ map: texture });
    this.instancedMesh.material = material;
    this.instancedMesh.material.needsUpdate = true;
  }
}