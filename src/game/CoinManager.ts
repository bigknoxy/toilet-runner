import * as THREE from 'three';
import { TrackManager } from './TrackManager';

const LANE_WIDTH = 3;
const SEGMENT_LENGTH = 10;
const MAX_COINS = 60;
const DESPAWN_DISTANCE = 15;
const COIN_VALUE = 5;
const COLLECT_RADIUS = 1.2;

interface CoinInstance {
  active: boolean;
  z: number;
  lane: number;
  collected: boolean;
  spinOffset: number;
}

export class CoinManager {
  private _scene: THREE.Scene;
  private _trackManager: TrackManager;
  private _coins: CoinInstance[] = [];
  private _coinMesh: THREE.InstancedMesh;
  private _distanceSinceLastSpawn = 0;
  private _nextSpawnGap = 25;
  private _tempMatrix: THREE.Matrix4;
  private _tempVector: THREE.Vector3;
  private _rotationMatrix: THREE.Matrix4;
  private _coinCount: number = 0;
  private _onCoinCollected?: (count: number) => void;

  constructor(scene: THREE.Scene, trackManager: TrackManager) {
    this._scene = scene;
    this._trackManager = trackManager;
    this._tempMatrix = new THREE.Matrix4();
    this._tempVector = new THREE.Vector3();
    this._rotationMatrix = new THREE.Matrix4();

    const geometry = new THREE.CylinderGeometry(0.35, 0.35, 0.12, 16);
    const material = new THREE.MeshLambertMaterial({ 
      color: 0xFFD700,
      emissive: 0xFFAA00,
      emissiveIntensity: 0.3
    });

    this._coinMesh = new THREE.InstancedMesh(geometry, material, MAX_COINS);
    this._coinMesh.rotation.x = Math.PI / 2;
    this._coinMesh.count = 0;
    this._scene.add(this._coinMesh);

    this.initializeCoinPool();
  }

  private initializeCoinPool(): void {
    for (let i = 0; i < MAX_COINS; i++) {
      this._coins.push({
        active: false,
        z: 0,
        lane: 0,
        collected: false,
        spinOffset: Math.random() * Math.PI * 2
      });
    }
  }

  setOnCoinCollected(callback: (count: number) => void): void {
    this._onCoinCollected = callback;
  }

  update(delta: number, speed: number, score: number): void {
    this._distanceSinceLastSpawn += speed * delta;

    const spawnGap = Math.max(15, this._nextSpawnGap - Math.floor(score / 200) * 2);
    
    if (this._distanceSinceLastSpawn >= spawnGap) {
      this._distanceSinceLastSpawn = 0;
      this.spawnCoinPattern();
      this._nextSpawnGap = 18 + Math.random() * 12;
    }

    const time = Date.now() * 0.003;
    let activeCount = 0;

    for (let i = 0; i < this._coins.length; i++) {
      const coin = this._coins[i];
      if (!coin.active) continue;

      coin.z += speed * delta;

      if (coin.z > DESPAWN_DISTANCE || coin.collected) {
        coin.active = false;
        coin.collected = false;
        continue;
      }

      const laneX = this.getLaneX(coin.lane);
      this._tempVector.set(laneX, 0.8, coin.z);

      this._tempMatrix.makeTranslation(
        this._tempVector.x, 
        this._tempVector.y, 
        this._tempVector.z
      );
      
      const spinRotation = time + coin.spinOffset;
      this._rotationMatrix.makeRotationY(spinRotation);
      this._tempMatrix.multiply(this._rotationMatrix);

      this._coinMesh.setMatrixAt(activeCount, this._tempMatrix);
      activeCount++;
    }

    this._coinMesh.count = activeCount;
    this._coinMesh.instanceMatrix.needsUpdate = true;
  }

  private spawnCoinPattern(): void {
    const pattern = Math.random();
    const spawnZ = this._trackManager.getFrontZ() - SEGMENT_LENGTH * 2;

    if (pattern < 0.4) {
      const lane = Math.floor(Math.random() * 3);
      this.spawnCoin(lane, spawnZ);
    } else if (pattern < 0.7) {
      const startLane = Math.floor(Math.random() * 2);
      for (let i = 0; i < 2; i++) {
        this.spawnCoin(startLane + i, spawnZ);
      }
    } else if (pattern < 0.85) {
      for (let lane = 0; lane < 3; lane++) {
        this.spawnCoin(lane, spawnZ);
      }
    } else {
      const lane = Math.floor(Math.random() * 3);
      for (let i = 0; i < 3; i++) {
        this.spawnCoin(lane, spawnZ - i * 3);
      }
    }
  }

  private spawnCoin(lane: number, z: number): void {
    const inactiveCoin = this._coins.find(c => !c.active && !c.collected);
    if (!inactiveCoin) return;

    inactiveCoin.active = true;
    inactiveCoin.lane = lane;
    inactiveCoin.z = z;
    inactiveCoin.collected = false;
    inactiveCoin.spinOffset = Math.random() * Math.PI * 2;
  }

  private getLaneX(lane: number): number {
    return (lane - 1) * LANE_WIDTH;
  }

  checkCollection(playerX: number, playerZ: number, playerY: number): number {
    let collectedCount = 0;

    for (const coin of this._coins) {
      if (!coin.active || coin.collected) continue;

      const coinX = this.getLaneX(coin.lane);
      const dx = playerX - coinX;
      const dz = playerZ - coin.z;
      const distance = Math.sqrt(dx * dx + dz * dz);

      if (distance < COLLECT_RADIUS && playerY < 1.5) {
        coin.collected = true;
        coin.active = false;
        collectedCount++;
        this._coinCount++;
      }
    }

    if (collectedCount > 0 && this._onCoinCollected) {
      this._onCoinCollected(collectedCount * COIN_VALUE);
    }

    return collectedCount;
  }

  getActiveCoins(): Array<{ x: number; y: number; z: number; lane: number }> {
    return this._coins
      .filter(c => c.active && !c.collected)
      .map(c => ({
        x: this.getLaneX(c.lane),
        y: 0.8,
        z: c.z,
        lane: c.lane
      }));
  }

  getCoinCount(): number {
    return this._coinCount;
  }

  reset(): void {
    for (const coin of this._coins) {
      coin.active = false;
      coin.collected = false;
    }
    this._coinMesh.count = 0;
    this._distanceSinceLastSpawn = 0;
    this._nextSpawnGap = 25;
    this._coinCount = 0;
  }

  dispose(): void {
    this._scene.remove(this._coinMesh);
    this._coinMesh.geometry.dispose();
    (this._coinMesh.material as THREE.Material).dispose();
  }
}
