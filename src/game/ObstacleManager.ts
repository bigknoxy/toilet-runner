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
  wobbleTime: number;  // For animation
  rotationSpeed: number;  // For spinning obstacles
}

export class ObstacleManager {
  private _scene: THREE.Scene;
  private _trackManager: TrackManager;
  private _obstacles: ObstacleInstance[] = [];
  private _activeCount = 0;
  private _spawnTimer = 0;
  private _waveCounter = 0;
  private _dodgedCount = 0;
  private _emojiFacesEnabled: boolean = false;
  private _bodyMaterial: THREE.MeshLambertMaterial;
  private _eyeMaterial: THREE.MeshBasicMaterial;
  private _faceGeometry?: THREE.PlaneGeometry;
  private _faceMaterial?: THREE.MeshBasicMaterial;
  private _baseRingGeometry: THREE.SphereGeometry;
  private _midRingGeometry: THREE.SphereGeometry;
  private _tipGeometry: THREE.SphereGeometry;
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
    this._bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x8B5E3C });
    this._bodyMaterial.side = THREE.FrontSide;
    this._eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    this._eyeMaterial.side = THREE.FrontSide;

    // Coiled poop geometries (3-tier stack like the emoji)
    this._baseRingGeometry = new THREE.SphereGeometry(0.55, 10, 8);
    this._baseRingGeometry.scale(1, 0.5, 1);
    this._midRingGeometry = new THREE.SphereGeometry(0.45, 10, 8);
    this._midRingGeometry.scale(1, 0.5, 1);
    this._tipGeometry = new THREE.SphereGeometry(0.2, 8, 6);
    this._eyeGeometry = new THREE.SphereGeometry(0.1, 6, 6);
    this._smileGeometry = new THREE.TorusGeometry(0.18, 0.035, 6, 6, Math.PI);

    // Initialize pool
    this.initializeObstaclePool();
  }

  private createObstacleGroup(): THREE.Group {
    const group = new THREE.Group();

    // Bottom ring — wide base
    const base = new THREE.Mesh(this._baseRingGeometry, this._bodyMaterial);
    base.position.set(0, 0.2, 0);
    base.castShadow = true;
    base.receiveShadow = true;
    group.add(base);

    // Middle ring — offset coil
    const mid = new THREE.Mesh(this._midRingGeometry, this._bodyMaterial);
    mid.position.set(0.08, 0.5, 0);
    mid.castShadow = true;
    mid.receiveShadow = true;
    group.add(mid);

    // Top tip — rounded peak
    const tip = new THREE.Mesh(this._tipGeometry, this._bodyMaterial);
    tip.position.set(-0.05, 0.75, 0);
    tip.castShadow = true;
    tip.receiveShadow = true;
    group.add(tip);

    // Emoji face (if enabled, replaces eyes/smile)
    // Each obstacle gets its own cloned geometry to avoid shared UV mutation
    if (this._emojiFacesEnabled && this._faceGeometry && this._faceMaterial) {
      const faceGeo = this._faceGeometry.clone();
      const face = new THREE.Mesh(faceGeo, this._faceMaterial);
      face.position.set(0.08, 0.5, 0.5);
      face.castShadow = false;
      face.receiveShadow = false;
      face.userData.isEmojiFace = true;
      face.userData.emojiIndex = Math.floor(Math.random() * 5);
      group.add(face);
    } else {
      // Eyes centered on middle ring
      const leftEye = new THREE.Mesh(this._eyeGeometry, this._eyeMaterial);
      leftEye.position.set(-0.14, 0.55, 0.45);
      leftEye.castShadow = false;
      leftEye.receiveShadow = false;
      group.add(leftEye);

      const rightEye = new THREE.Mesh(this._eyeGeometry, this._eyeMaterial);
      rightEye.position.set(0.30, 0.55, 0.45);
      rightEye.castShadow = false;
      rightEye.receiveShadow = false;
      group.add(rightEye);

      // Smile centered on middle ring
      const smile = new THREE.Mesh(this._smileGeometry, this._eyeMaterial);
      smile.position.set(0.08, 0.40, 0.50);
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
        rotationY: 0,
        wobbleTime: Math.random() * Math.PI * 2,  // Random start for varied animation
        rotationSpeed: 0  // Default no rotation
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

    const time = Date.now() * 0.001;  // Global time for animations

    for (const obstacle of this._obstacles) {
      if (!obstacle.active) continue;

      const moveSpeed = speed * obstacle.speedVariation;
      obstacle.z += moveSpeed * delta;

      // Update wobble animation
      obstacle.wobbleTime += delta * 3;

      const laneX = this.getLaneX(obstacle.lane);
      obstacle.mesh.position.set(laneX, 0, obstacle.z);

      // Apply wobble rotation for "alive" feeling
      const wobble = Math.sin(obstacle.wobbleTime) * 0.1;
      obstacle.mesh.rotation.y = obstacle.rotationY + wobble;

      // Apply subtle rotation for spinning obstacles
      if (obstacle.rotationSpeed > 0) {
        obstacle.mesh.rotation.y += obstacle.rotationSpeed * delta;
      }

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
    this._activeCount++;

    // Update emoji face UVs on this obstacle's own geometry
    if (this._emojiFacesEnabled) {
      const faceMesh = inactiveObstacle.mesh.children.find(
        (c): c is THREE.Mesh => (c as THREE.Mesh).userData?.isEmojiFace === true
      );
      if (faceMesh) {
        const uvs = EmojiTextureAtlas.getUVs(inactiveObstacle.emojiIndex);
        const geo = faceMesh.geometry;
        geo.attributes.uv.setXY(0, uvs[0].x, uvs[0].y);
        geo.attributes.uv.setXY(1, uvs[1].x, uvs[1].y);
        geo.attributes.uv.setXY(2, uvs[2].x, uvs[2].y);
        geo.attributes.uv.setXY(3, uvs[3].x, uvs[3].y);
        geo.attributes.uv.needsUpdate = true;
      }
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
    
    // Count as a dodge if the obstacle passed the player
    if (obstacle.z > DESPAWN_DISTANCE) {
      this._dodgedCount++;
    }
  }

  private getLaneX(lane: number): number {
    return (lane - 1) * LANE_WIDTH;
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
    this._dodgedCount = 0;
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

  hideObstacle(lane: number, z: number): void {
    let closest: ObstacleInstance | null = null;
    let closestDist = Infinity;
    for (const obs of this._obstacles) {
      if (!obs.active || obs.lane !== lane) continue;
      const dist = Math.abs(obs.z - z);
      if (dist < closestDist) {
        closestDist = dist;
        closest = obs;
      }
    }
    if (closest) {
      closest.active = false;
      this._activeCount--;
      closest.mesh.visible = false;
      closest.mesh.position.set(0, -100, 0);
    }
  }

  getDodgedCount(): number {
    return this._dodgedCount;
  }

  resetDodgedCount(): void {
    this._dodgedCount = 0;
  }
}