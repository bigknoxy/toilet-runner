import * as THREE from 'three';
import { TrackManager } from './TrackManager';
import { EmojiTextureAtlas } from './visual/EmojiTextureAtlas';
import { PatternPool } from './ObstaclePattern.js';
import { PatternSequencer } from './PatternSequencer.js';
import { DifficultyManager } from './DifficultyManager.js';
import { CONFIG } from '../core/GameConfig.js';

const LANE_WIDTH = 3;
const SEGMENT_LENGTH = 10;
const MAX_OBSTACLES = 50;
const SPAWN_RATE_BASE = 2.0;
const DESPAWN_DISTANCE = 10;
const DIFFICULTY_MULTIPLIER = 0.01;

interface ObstacleInstance {
  mesh: THREE.Group;
  active: boolean;
  z: number;
  lane: number;
  speedVariation: number;
  scale: number;
  rotationY: number;
  emojiIndex?: number;
}

export class ObstacleManager {
  private _scene: THREE.Scene;
  private _trackManager: TrackManager;
  private _obstacles: ObstacleInstance[] = [];
  private _activeCount = 0;
  private _spawnTimer = 0;
  private _waveCounter = 0;
  private _emojiFacesEnabled: boolean = false;
  private _bodyMaterial: THREE.MeshLambertMaterial;
  private _eyeMaterial: THREE.MeshBasicMaterial;
  private _faceGeometry?: THREE.PlaneGeometry;
  private _faceMaterial?: THREE.MeshBasicMaterial;
  private _bodyGeometry: THREE.SphereGeometry;
  private _tipGeometry: THREE.ConeGeometry;
  private _eyeGeometry: THREE.SphereGeometry;
  private _smileGeometry: THREE.TorusGeometry;

  constructor(scene: THREE.Scene, trackManager: TrackManager, emojiFacesEnabled: boolean = true) {
    this._scene = scene;
    this._trackManager = trackManager;
    this._emojiFacesEnabled = emojiFacesEnabled;

    PatternPool.initialize();
    PatternSequencer.initialize();

    // Initialize emoji atlas if enabled
    if (this._emojiFacesEnabled) {
      EmojiTextureAtlas.initialize();
      this._faceGeometry = new THREE.PlaneGeometry(0.6, 0.6);
      this._faceMaterial = new THREE.MeshBasicMaterial({
        map: EmojiTextureAtlas.getTexture(),
        transparent: true,
        side: THREE.DoubleSide,
        depthTest: false
      });
    }

    // Materials
    this._bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x6B4423 });
    this._bodyMaterial.side = THREE.FrontSide;
    this._eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    this._eyeMaterial.side = THREE.FrontSide;

    // Optimized geometries (reduced polygons for mobile)
    this._bodyGeometry = new THREE.SphereGeometry(0.7, 12, 8);
    this._bodyGeometry.scale(1, 0.7, 1);
    this._tipGeometry = new THREE.ConeGeometry(0.35, 0.6, 8);
    this._eyeGeometry = new THREE.SphereGeometry(0.1, 6, 6);
    this._smileGeometry = new THREE.TorusGeometry(0.18, 0.035, 6, 6, Math.PI);

    // Initialize pool
    this.initializeObstaclePool();
  }

  private createObstacleGroup(): THREE.Group {
    const group = new THREE.Group();
    
    // Body (casts shadows)
    const body = new THREE.Mesh(this._bodyGeometry, this._bodyMaterial);
    body.position.set(0, 0.3, 0);
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);
    
    // Tip (casts shadows)
    const tip = new THREE.Mesh(this._tipGeometry, this._bodyMaterial);
    tip.rotation.x = -Math.PI / 2;
    tip.position.set(0, 0.85, 0);
    tip.castShadow = true;
    tip.receiveShadow = true;
    group.add(tip);
    
    // Emoji face (if enabled, replaces eyes/smile)
    if (this._emojiFacesEnabled && this._faceGeometry && this._faceMaterial) {
      const face = new THREE.Mesh(this._faceGeometry, this._faceMaterial);
      face.position.set(0, 0.65, 0.6);
      face.castShadow = false;
      face.receiveShadow = false;
      face.userData.emojiIndex = Math.floor(Math.random() * 5);
      group.add(face);
    } else {
      // Eyes (no shadows - optimization)
      const leftEye = new THREE.Mesh(this._eyeGeometry, this._eyeMaterial);
      leftEye.position.set(-0.22, 0.65, 0.55);
      leftEye.castShadow = false;
      leftEye.receiveShadow = false;
      group.add(leftEye);
      
      const rightEye = new THREE.Mesh(this._eyeGeometry, this._eyeMaterial);
      rightEye.position.set(0.22, 0.65, 0.55);
      rightEye.castShadow = false;
      rightEye.receiveShadow = false;
      group.add(rightEye);
      
      // Smile (no shadows - optimization)
      const smile = new THREE.Mesh(this._smileGeometry, this._eyeMaterial);
      smile.position.set(0, 0.45, 0.65);
      smile.rotation.x = Math.PI / 4;
      smile.castShadow = false;
      smile.receiveShadow = false;
      group.add(smile);
    }
    
    return group;
  }

  private initializeObstaclePool(): void {
    for (let i = 0; i < MAX_OBSTACLES; i++) {
      const group = this.createObstacleGroup();
      group.visible = false;
      this._scene.add(group);
      
      this._obstacles.push({
        mesh: group,
        active: false,
        z: 0,
        lane: 0,
        speedVariation: 1,
        scale: 1,
        rotationY: 0
      });
    }
  }

  update(delta: number, speed: number, score: number): void {
    this._spawnTimer -= delta;
    PatternSequencer.setScore(score);

    const spawnRate = DifficultyManager.getSpawnRate(score);

    if (this._spawnTimer <= 0) {
      this.spawnPatternObstacles();
      this._spawnTimer = spawnRate / 60;
      this._waveCounter++;
    }

    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;

      const moveSpeed = speed * obstacle.speedVariation;
      obstacle.z += moveSpeed * delta;

      const laneX = this.getLaneX(obstacle.lane);
      obstacle.mesh.position.set(laneX, 0, obstacle.z);
      obstacle.mesh.rotation.y = obstacle.rotationY;
      obstacle.mesh.scale.setScalar(obstacle.scale);

      if (obstacle.z > DESPAWN_DISTANCE) {
        this.despawnObstacle(obstacle);
      }
    }
  }

  private spawnPatternObstacles(): void {
    const pattern = PatternSequencer.getNextPattern();

    for (const obstacleConfig of pattern.obstacles) {
      this.spawnObstacle(
        obstacleConfig.lane,
        obstacleConfig.speedMultiplier
      );
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

  private spawnObstacle(lane: number, speedMultiplier: number = 1.0): void {
    const inactiveObstacle = this._obstacles.find(obs => !obs.active);
    if (!inactiveObstacle) return;

    const spawnZ = this._trackManager.getFrontZ() - SEGMENT_LENGTH;

    inactiveObstacle.active = true;
    inactiveObstacle.lane = lane;
    inactiveObstacle.z = spawnZ;
    inactiveObstacle.speedVariation = speedMultiplier;
    inactiveObstacle.scale = 0.9 + Math.random() * 0.2;
    inactiveObstacle.rotationY = (Math.random() - 0.5) * 0.5;
    inactiveObstacle.emojiIndex = Math.floor(Math.random() * 5);

    // Update emoji face UVs if enabled
    if (this._emojiFacesEnabled && this._faceGeometry) {
      const uvs = EmojiTextureAtlas.getUVs(inactiveObstacle.emojiIndex);
      this._faceGeometry.attributes.uv.setXY(0, uvs[0].x, uvs[0].y);
      this._faceGeometry.attributes.uv.setXY(1, uvs[1].x, uvs[1].y);
      this._faceGeometry.attributes.uv.setXY(2, uvs[2].x, uvs[2].y);
      this._faceGeometry.attributes.uv.setXY(3, uvs[3].x, uvs[3].y);
      this._faceGeometry.attributes.uv.needsUpdate = true;
    }

    const laneX = this.getLaneX(lane);
    inactiveObstacle.mesh.position.set(laneX, 0, spawnZ);
    inactiveObstacle.mesh.rotation.y = inactiveObstacle.rotationY;
    inactiveObstacle.mesh.scale.setScalar(inactiveObstacle.scale);
    inactiveObstacle.mesh.visible = true;
  }

  private despawnObstacle(obstacle: ObstacleInstance): void {
    obstacle.active = false;
    this._activeCount--;
    obstacle.mesh.visible = false;
    obstacle.mesh.position.set(0, -100, 0);
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
        new THREE.Vector3(obstacleX, 0.3, obstacle.z),
        new THREE.Vector3(1.4 * obstacle.scale, 1.0 * obstacle.scale, 1.2 * obstacle.scale)
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
    PatternSequencer.reset();
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
        y: 0.3,
        z: obstacle.z,
        lane: obstacle.lane
      });
    }
    
    return activeObstacles;
  }
}