import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
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
  speedVariation: number;
  scale: number;
  rotationY: number;
}

export class ObstacleManager {
  private _scene: THREE.Scene;
  private _trackManager: TrackManager;
  private _instancedMesh: THREE.InstancedMesh;
  private _obstacles: ObstacleInstance[] = [];
  private _activeCount = 0;
  private _spawnTimer = 0;
  private _dummy = new THREE.Object3D();
  private _material: THREE.MeshLambertMaterial;
  private _waveCounter = 0;
  private _currentWaveMode: 'easy' | 'medium' | 'hard' = 'easy';

  constructor(scene: THREE.Scene, trackManager: TrackManager) {
    this._scene = scene;
    this._trackManager = trackManager;

    this._material = new THREE.MeshLambertMaterial({ color: 0x6B4423 });

    const mergedGeometry = this.createMergedPoopGeometry();

    this._instancedMesh = new THREE.InstancedMesh(mergedGeometry, this._material, MAX_OBSTACLES);
    this._instancedMesh.castShadow = true;
    this._instancedMesh.receiveShadow = true;
    this._instancedMesh.frustumCulled = false;
    this._scene.add(this._instancedMesh);

    for (let i = 0; i < MAX_OBSTACLES; i++) {
      this._obstacles.push({
        instance: i,
        active: false,
        z: 0,
        lane: 0,
        speedVariation: 1,
        scale: 1,
        rotationY: 0
      });
    }

    for (let i = 0; i < MAX_OBSTACLES; i++) {
      this._dummy.position.set(9999, -100, 9999);
      this._dummy.updateMatrix();
      this._instancedMesh.setMatrixAt(i, this._dummy.matrix);
    }
    this._instancedMesh.instanceMatrix.needsUpdate = true;
  }

  private createMergedPoopGeometry(): THREE.BufferGeometry {
    const geometries: THREE.BufferGeometry[] = [];

    const bodyGeometry = new THREE.SphereGeometry(0.7, 16, 12);
    bodyGeometry.scale(1, 0.7, 1);
    bodyGeometry.translate(0, 0.3, 0);
    geometries.push(bodyGeometry);

    const tipGeometry = new THREE.ConeGeometry(0.35, 0.6, 12);
    tipGeometry.rotateX(-Math.PI / 2);
    tipGeometry.translate(0, 0.85, 0);
    geometries.push(tipGeometry);

    const eyeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    eyeGeometry.translate(-0.22, 0.65, 0.55);
    geometries.push(eyeGeometry);

    const rightEyeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    rightEyeGeometry.translate(0.22, 0.65, 0.55);
    geometries.push(rightEyeGeometry);

    const smileGeometry = new THREE.TorusGeometry(0.18, 0.035, 8, 8, Math.PI);
    smileGeometry.rotateX(Math.PI / 4);
    smileGeometry.translate(0, 0.45, 0.65);
    geometries.push(smileGeometry);

    const merged = BufferGeometryUtils.mergeGeometries(geometries, false);
    merged.computeVertexNormals();

    return merged;
  }

  update(delta: number, speed: number, score: number): void {
    this._spawnTimer -= delta;

    const currentSpawnRate = Math.max(0.5, SPAWN_RATE_BASE - (score * DIFFICULTY_MULTIPLIER));

    if (this._spawnTimer <= 0) {
      this.spawnObstaclePattern();
      this._spawnTimer = currentSpawnRate;
      this._waveCounter++;

      if (this._waveCounter >= 10) {
        this._waveCounter = 0;
        this.updateWaveMode();
      }
    }

    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;

      const moveSpeed = speed * obstacle.speedVariation;
      obstacle.z += moveSpeed * delta;

      const laneX = this.getLaneX(obstacle.lane);
      this._dummy.position.set(laneX, 0.6, obstacle.z);
      this._dummy.rotation.y = obstacle.rotationY;
      this._dummy.scale.setScalar(obstacle.scale);
      this._dummy.updateMatrix();
      this._instancedMesh.setMatrixAt(obstacle.instance, this._dummy.matrix);

      if (obstacle.z > DESPAWN_DISTANCE) {
        this.despawnObstacle(obstacle);
      }
    }

    this._instancedMesh.instanceMatrix.needsUpdate = true;
  }

  private updateWaveMode(): void {
    const modeRoll = Math.random();
    if (modeRoll < 0.5) {
      this._currentWaveMode = 'easy';
    } else if (modeRoll < 0.8) {
      this._currentWaveMode = 'medium';
    } else {
      this._currentWaveMode = 'hard';
    }
  }

  private spawnObstaclePattern(): void {
    const clearLane = this.getWeightedRandomLane([0.4, 0.3, 0.3]);
    
    let patternThreshold = 0.7;
    if (this._currentWaveMode === 'easy') patternThreshold = 0.8;
    else if (this._currentWaveMode === 'medium') patternThreshold = 0.7;
    else if (this._currentWaveMode === 'hard') patternThreshold = 0.5;

    const pattern = Math.random();

    if (pattern < patternThreshold) {
      const availableLanes = [0, 1, 2].filter(l => l !== clearLane);
      const lane = availableLanes[Math.floor(Math.random() * availableLanes.length)];
      this.spawnObstacle(lane);
    } else {
      const doubleLanes = this.getAdjacentLanes(clearLane);
      doubleLanes.forEach(lane => this.spawnObstacle(lane));
    }
  }

  private getWeightedRandomLane(weights: number[]): number {
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < weights.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return i;
      }
    }
    return 0;
  }

  private getAdjacentLanes(clearLane: number): number[] {
    if (clearLane === 0) return [1, 2];
    if (clearLane === 1) return [0, 2];
    if (clearLane === 2) return [0, 1];
    return [1, 2];
  }

  private spawnObstacle(lane: number): void {
    const inactiveObstacle = this._obstacles.find(obs => !obs.active);
    if (!inactiveObstacle) return;

    const spawnZ = this._trackManager.getFrontZ() - SEGMENT_LENGTH;

    inactiveObstacle.active = true;
    inactiveObstacle.lane = lane;
    inactiveObstacle.z = spawnZ;
    inactiveObstacle.speedVariation = 0.85 + Math.random() * 0.3;
    inactiveObstacle.scale = 0.9 + Math.random() * 0.2;
    inactiveObstacle.rotationY = (Math.random() - 0.5) * 0.5;
    this._activeCount++;

    const laneX = this.getLaneX(lane);
    this._dummy.position.set(laneX, 0.6, spawnZ);
    this._dummy.rotation.y = inactiveObstacle.rotationY;
    this._dummy.scale.setScalar(inactiveObstacle.scale);
    this._dummy.updateMatrix();
    this._instancedMesh.setMatrixAt(inactiveObstacle.instance, this._dummy.matrix);
  }

  private despawnObstacle(obstacle: ObstacleInstance): void {
    obstacle.active = false;
    this._activeCount--;

    this._dummy.position.set(0, -100, 0);
    this._dummy.updateMatrix();
    this._instancedMesh.setMatrixAt(obstacle.instance, this._dummy.matrix);
  }

  private getLaneX(lane: number): number {
    return (lane - 1) * LANE_WIDTH;
  }

  checkCollisions(playerX: number, playerZ: number): boolean {
    const playerBox = new THREE.Box3().setFromCenterAndSize(
      new THREE.Vector3(playerX, 0.5, playerZ),
      new THREE.Vector3(1.4, 1.4, 1.0)
    );

    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;

      const obstacleX = this.getLaneX(obstacle.lane);
      const obstacleBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(obstacleX, 0.6, obstacle.z),
        new THREE.Vector3(1.4 * obstacle.scale, 1.4 * obstacle.scale, 1.2 * obstacle.scale)
      );

      if (playerBox.intersectsBox(obstacleBox)) {
        return true;
      }
    }

    return false;
  }

  reset(): void {
    for (const obstacle of this._obstacles) {
      if (obstacle.active) {
        this.despawnObstacle(obstacle);
      }
    }

    this._activeCount = 0;
    this._spawnTimer = 0;
    this._waveCounter = 0;
    this._currentWaveMode = 'easy';

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
        y: 0.6,
        z: obstacle.z,
        lane: obstacle.lane
      });
    }
    
    return activeObstacles;
  }
}
