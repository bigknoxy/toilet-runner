import * as THREE from 'three';
import { getLaneX } from './GameConfig';
import type { ActiveObstacle } from './ObstacleManager';

/** Pool size. Spawn patterns place at most 3 at a time and the run is short. */
const MAX_COINS = 60;

/** World z past the camera at which a coin is recycled. */
const DESPAWN_Z = 15;

/** Height above the floor. Sits at roll height so it reads as on the path. */
const COIN_Y = 0.8;

/** Base pickup radius in world units, before the coinMagnet upgrade widens it. */
const BASE_COLLECT_RADIUS = 1.2;

/** A jump apex clears this, so airborne runs skip ground-level pickups. */
const COLLECT_MAX_Y = 1.5;

/** Coins awarded per pickup. */
export const COIN_PICKUP_VALUE = 1;

/** Radians per second of spin. */
const SPIN_SPEED = 3;

/** Distance travelled between spawn attempts, before the score-based squeeze. */
const MIN_SPAWN_GAP = 15;
const MAX_SPAWN_GAP = 30;

/**
 * Lanes are 3 apart, so an obstacle within this of a coin's lane centre is in
 * the same lane. Coins that spawn inside a pile of poop cannot be taken without
 * dying, which reads as the game cheating rather than as a hard choice.
 */
const LANE_OCCUPIED_DIST = 1.5;

/** Z window around a spawn point that an obstacle has to be inside to block it. */
const LANE_OCCUPIED_Z = 4;

interface Coin {
  active: boolean;
  z: number;
  lane: number;
  spinOffset: number;
}

/**
 * Collectible coins on the track.
 *
 * Coins were previously earned only by dodging (near-miss and close-pass in
 * main.ts), which left the shop's `coinMagnet` upgrade with nothing physical to
 * pull toward — it widened a scoring band instead. These are the things the
 * magnet is named for: it grows the pickup radius directly.
 *
 * One `InstancedMesh` for the whole pool, so 60 coins cost one draw call. Only
 * the live prefix is drawn: inactive coins are skipped and `count` is set to the
 * number written this frame, so a hidden coin costs nothing rather than being
 * parked off-screen.
 */
export class CoinManager {
  private _scene: THREE.Scene;
  private _mesh: THREE.InstancedMesh;
  private _coins: Coin[] = [];

  private _distanceSinceSpawn = 0;
  private _nextSpawnGap = MAX_SPAWN_GAP;
  private _elapsed = 0;
  private _collectedThisRun = 0;

  /** Scratch objects. `update` runs every frame, so it allocates nothing. */
  private _matrix = new THREE.Matrix4();
  private _position = new THREE.Vector3();
  private _quaternion = new THREE.Quaternion();
  private _scale = new THREE.Vector3(1, 1, 1);
  private _spinAxis = new THREE.Vector3(0, 1, 0);
  private _layFlat = new THREE.Quaternion();
  private _spin = new THREE.Quaternion();

  constructor(scene: THREE.Scene) {
    this._scene = scene;

    const geometry = new THREE.CylinderGeometry(0.35, 0.35, 0.12, 16);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffd700,
      emissive: 0xffaa00,
      emissiveIntensity: 0.3
    });

    this._mesh = new THREE.InstancedMesh(geometry, material, MAX_COINS);
    // The bounding volume is computed from instance 0 at construction, when
    // every coin still sits at the origin. Left on, the whole pool vanishes the
    // moment the camera stops looking at world zero.
    this._mesh.frustumCulled = false;
    this._mesh.count = 0;
    this._scene.add(this._mesh);

    // A cylinder stands on end. Face it at the camera by tipping it a quarter
    // turn about x, baked per instance rather than set on the mesh itself —
    // rotating the parent would rotate the instance translations with it and
    // bury the coins under the floor.
    this._layFlat.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

    for (let i = 0; i < MAX_COINS; i++) {
      this._coins.push({ active: false, z: 0, lane: 0, spinOffset: Math.random() * Math.PI * 2 });
    }
  }

  /**
   * Advance coins toward the player and spawn new ones.
   *
   * `score` tightens the spawn gap as the run goes on, so the reward rate keeps
   * up with the speed rather than thinning out.
   */
  update(delta: number, speed: number, score: number, frontZ: number, obstacles: ActiveObstacle[]): void {
    this._elapsed += delta;
    this._distanceSinceSpawn += speed * delta;

    if (this._distanceSinceSpawn >= this._nextSpawnGap) {
      this._distanceSinceSpawn = 0;
      this._nextSpawnGap = Math.max(
        MIN_SPAWN_GAP,
        MIN_SPAWN_GAP + Math.random() * (MAX_SPAWN_GAP - MIN_SPAWN_GAP) - Math.floor(score / 200) * 2
      );
      this._spawnPattern(frontZ, obstacles);
    }

    let drawn = 0;

    for (const coin of this._coins) {
      if (!coin.active) continue;

      coin.z += speed * delta;
      if (coin.z > DESPAWN_Z) {
        coin.active = false;
        continue;
      }

      this._position.set(getLaneX(coin.lane), COIN_Y, coin.z);
      this._spin.setFromAxisAngle(this._spinAxis, this._elapsed * SPIN_SPEED + coin.spinOffset);
      this._quaternion.copy(this._spin).multiply(this._layFlat);
      this._matrix.compose(this._position, this._quaternion, this._scale);

      this._mesh.setMatrixAt(drawn, this._matrix);
      drawn++;
    }

    this._mesh.count = drawn;
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Take every coin within reach of the player and return the total value.
   *
   * `magnetBonus` comes from the shop's coinMagnet upgrade and widens the
   * radius. Returns 0 when nothing was taken, so the caller can skip the
   * pickup effects without a second query.
   */
  collect(playerX: number, playerZ: number, playerY: number, magnetBonus: number): number {
    if (playerY >= COLLECT_MAX_Y) return 0;

    const radius = BASE_COLLECT_RADIUS + magnetBonus * 0.1;
    const radiusSq = radius * radius;
    let taken = 0;

    for (const coin of this._coins) {
      if (!coin.active) continue;

      const dx = playerX - getLaneX(coin.lane);
      const dz = playerZ - coin.z;
      if (dx * dx + dz * dz >= radiusSq) continue;

      coin.active = false;
      taken++;
    }

    this._collectedThisRun += taken;
    return taken * COIN_PICKUP_VALUE;
  }

  /** Coins picked up since the last `reset`. */
  getCollectedThisRun(): number {
    return this._collectedThisRun;
  }

  reset(): void {
    for (const coin of this._coins) coin.active = false;
    this._mesh.count = 0;
    this._distanceSinceSpawn = 0;
    this._nextSpawnGap = MAX_SPAWN_GAP;
    this._elapsed = 0;
    this._collectedThisRun = 0;
  }

  dispose(): void {
    this._scene.remove(this._mesh);
    this._mesh.geometry.dispose();
    (this._mesh.material as THREE.Material).dispose();
    this._mesh.dispose();
  }

  private _spawnPattern(frontZ: number, obstacles: ActiveObstacle[]): void {
    // Two segments ahead of the frontmost track piece, matching where obstacles
    // appear, so a coin is never seen popping into an already-visible stretch.
    const z = frontZ - 20;
    const roll = Math.random();

    if (roll < 0.4) {
      this._spawn(Math.floor(Math.random() * 3), z, obstacles);
    } else if (roll < 0.7) {
      const start = Math.floor(Math.random() * 2);
      this._spawn(start, z, obstacles);
      this._spawn(start + 1, z, obstacles);
    } else if (roll < 0.85) {
      for (let lane = 0; lane < 3; lane++) this._spawn(lane, z, obstacles);
    } else {
      // A trail down one lane. Rewards committing to a lane rather than weaving.
      const lane = Math.floor(Math.random() * 3);
      for (let i = 0; i < 3; i++) this._spawn(lane, z - i * 3, obstacles);
    }
  }

  private _spawn(lane: number, z: number, obstacles: ActiveObstacle[]): void {
    if (this._isBlocked(lane, z, obstacles)) return;

    const free = this._coins.find(c => !c.active);
    if (!free) return;

    free.active = true;
    free.lane = lane;
    free.z = z;
    free.spinOffset = Math.random() * Math.PI * 2;
  }

  private _isBlocked(lane: number, z: number, obstacles: ActiveObstacle[]): boolean {
    const laneX = getLaneX(lane);
    for (const obstacle of obstacles) {
      if (Math.abs(obstacle.x - laneX) > LANE_OCCUPIED_DIST) continue;
      if (Math.abs(obstacle.z - z) > LANE_OCCUPIED_Z) continue;
      return true;
    }
    return false;
  }
}
