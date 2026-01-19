import * as THREE from 'three';
import { TrackManager } from './TrackManager';

const LANE_WIDTH = 3;
const SEGMENT_LENGTH = 10;
const MAX_OBSTACLES = 50;
const SPAWN_RATE_BASE = 2.0;
const DESPAWN_DISTANCE = 10;
const DIFFICULTY_MULTIPLIER = 0.01;

interface ObstacleInstance {
  instance: number;
  active: boolean;
  z: number;
  lane: number;
}

export class ObstacleManager {
  private _scene: THREE.Scene;
  private _trackManager: TrackManager;
  private _instancedMesh: THREE.InstancedMesh;
  private _obstacles: ObstacleInstance[] = [];
  private _activeCount = 0;
  private _spawnTimer = 0;
  private _dummy = new THREE.Object3D();
  private _tempBox = new THREE.Box3();
  private _obstacleBox = new THREE.Box3();

  constructor(scene: THREE.Scene, trackManager: TrackManager) {
    this._scene = scene;
    this._trackManager = trackManager;

    // Create geometry for poop obstacles (box shape - large and bright for visibility)
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });

    // Create InstancedMesh for all obstacles (1 draw call)
    this._instancedMesh = new THREE.InstancedMesh(geometry, material, MAX_OBSTACLES);
    this._instancedMesh.castShadow = true;
    this._instancedMesh.receiveShadow = true;
    this._instancedMesh.frustumCulled = false;
    this._scene.add(this._instancedMesh);

    // Initialize obstacle pool
    for (let i = 0; i < MAX_OBSTACLES; i++) {
      this._obstacles.push({
        instance: i,
        active: false,
        z: 0,
        lane: 0
      });
    }

    // Hide all instances initially (move out of view)
    for (let i = 0; i < MAX_OBSTACLES; i++) {
      this._dummy.position.set(9999, -100, 9999);
      this._dummy.updateMatrix();
      this._instancedMesh.setMatrixAt(i, this._dummy.matrix);
    }
    this._instancedMesh.instanceMatrix.needsUpdate = true;
  }

  update(delta: number, speed: number, score: number): void {
    // Update spawn timer
    this._spawnTimer -= delta;

    // Calculate current spawn rate based on difficulty
    const currentSpawnRate = Math.max(0.5, SPAWN_RATE_BASE - (score * DIFFICULTY_MULTIPLIER));

    // Spawn new obstacles if timer expired
    if (this._spawnTimer <= 0) {
      this.spawnObstaclePattern();
      this._spawnTimer = currentSpawnRate;
    }

    // Move active obstacles toward player
    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;

      obstacle.z += speed * delta;

      // Update InstancedMesh matrix for this obstacle
      const laneX = this.getLaneX(obstacle.lane);
      this._dummy.position.set(laneX, 1, obstacle.z);
      this._dummy.updateMatrix();
      this._instancedMesh.setMatrixAt(obstacle.instance, this._dummy.matrix);

      // Despawn if passed camera
      if (obstacle.z > DESPAWN_DISTANCE) {
        this.despawnObstacle(obstacle);
      }
    }

    this._instancedMesh.instanceMatrix.needsUpdate = true;
  }

  private spawnObstaclePattern(): void {
    // Random spawn pattern selection
    const pattern = Math.random();
    
    if (pattern < 0.6) {
      // Single obstacle (60% chance)
      const lane = Math.floor(Math.random() * 3);
      this.spawnObstacle(lane);
    } else if (pattern < 0.9) {
      // Double obstacles (30% chance)
      const lanes = this.getRandomLanes(2);
      lanes.forEach(lane => this.spawnObstacle(lane));
    } else {
      // Triple obstacles (10% chance)
      const lanes = [0, 1, 2]; // All lanes
      lanes.forEach(lane => this.spawnObstacle(lane));
    }
  }

  private spawnObstacle(lane: number): void {
    // Find inactive obstacle instance
    const inactiveObstacle = this._obstacles.find(obs => !obs.active);
    if (!inactiveObstacle) return; // No available instances

    // Spawn obstacles at track front (ahead of player)
    const spawnZ = this._trackManager.getFrontZ() - SEGMENT_LENGTH;

    inactiveObstacle.active = true;
    inactiveObstacle.lane = lane;
    inactiveObstacle.z = spawnZ;
    this._activeCount++;

    // Set initial position (box sits on ground with center at Y=1)
    const laneX = this.getLaneX(lane);
    this._dummy.position.set(laneX, 1, spawnZ);
    this._dummy.rotation.y = Math.random() * Math.PI * 2; // Random rotation for variety
    this._dummy.updateMatrix();
    this._instancedMesh.setMatrixAt(inactiveObstacle.instance, this._dummy.matrix);
  }

  private despawnObstacle(obstacle: ObstacleInstance): void {
    obstacle.active = false;
    this._activeCount--;

    // Move far below camera to hide
    this._dummy.position.set(0, -100, 0);
    this._dummy.updateMatrix();
    this._instancedMesh.setMatrixAt(obstacle.instance, this._dummy.matrix);
  }

  private getLaneX(lane: number): number {
    return (lane - 1) * LANE_WIDTH; // LEFT(-3), CENTER(0), RIGHT(3)
  }

  private getRandomLanes(count: number): number[] {
    const lanes = [0, 1, 2];
    const selected: number[] = [];
    
    while (selected.length < count && lanes.length > 0) {
      const index = Math.floor(Math.random() * lanes.length);
      selected.push(lanes[index]);
      lanes.splice(index, 1);
    }
    
    return selected;
  }

  checkCollisions(playerX: number, playerZ: number): boolean {
    // Create player bounding box
    const playerBox = new THREE.Box3().setFromCenterAndSize(
      new THREE.Vector3(playerX, 0.5, playerZ),
      new THREE.Vector3(1, 1, 1)
    );

    // Check collision with active obstacles
    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;

      const obstacleX = this.getLaneX(obstacle.lane);
      const obstacleBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(obstacleX, 0.4, obstacle.z),
        new THREE.Vector3(1.2, 0.8, 1.2)
      );

      if (playerBox.intersectsBox(obstacleBox)) {
        return true; // Collision detected
      }
    }

    return false; // No collision
  }

  reset(): void {
    // Deactivate all obstacles
    for (const obstacle of this._obstacles) {
      if (obstacle.active) {
        this.despawnObstacle(obstacle);
      }
    }

    this._activeCount = 0;
    this._spawnTimer = 0;

    // Ensure matrices are updated
    this._instancedMesh.instanceMatrix.needsUpdate = true;
  }

  getActiveCount(): number {
    return this._activeCount;
  }

  getActiveObstacles(): Array<{ x: number, y: number, z: number, lane: number }> {
    const activeObstacles: Array<{ x: number, y: number, z: number, lane: number }> = [];
    
    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;
      
      const obstacleX = this.getLaneX(obstacle.lane);
      activeObstacles.push({
        x: obstacleX,
        y: 0.4,
        z: obstacle.z,
        lane: obstacle.lane
      });
    }
    
    return activeObstacles;
  }
}