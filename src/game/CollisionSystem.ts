import * as THREE from 'three';
import { ObstacleManager } from './ObstacleManager';
import { ObstacleType } from './ObstacleTypes';

// Tolerance is subtracted from the player hitbox (forgiving), never added to
// the obstacle hitbox (which would just make obstacles bigger). See #70.
const COLLISION_TOLERANCE = 0.1;

// Fixed, authored player hitbox instead of Box3.setFromObject(playerMesh).
// The mesh Group inherits lane-change tilt and landing-squash scale
// (RunnerController._scaleX/_scaleY), which grow the derived AABB by ~12-20%
// at exactly the moments the player is threading a gap or just landed —
// the two most skill-expressive moments in the game. Dimensions mirror the
// unscaled TP-roll geometry: PLAYER_RADIUS = 0.8, half-height = 0.5.
const PLAYER_HALF_WIDTH = 0.8 - COLLISION_TOLERANCE;
const PLAYER_HALF_HEIGHT = 0.5 - COLLISION_TOLERANCE;
const PLAYER_HALF_DEPTH = 0.8 - COLLISION_TOLERANCE;

// Authored obstacle hitbox, matching the size previously passed to
// setFromCenterAndSize (1.0 x 1.6 x 1.4), expressed as half-extents.
const OBSTACLE_HALF_WIDTH = 0.5;
const OBSTACLE_HALF_HEIGHT = 0.8;
const OBSTACLE_HALF_DEPTH = 0.7;

// BARRIER_HIGH is the anti-jump obstacle (#71): its top sits at 3.1, above the
// 2.6 the player underside reaches at jump apex, so the jump-clears-everything
// branch below can never fire for it. Values mirror the mesh built in
// ObstacleManager.createBarrierGroup().
const BARRIER_HALF_WIDTH = 1.2;
const BARRIER_HALF_HEIGHT = 1.6;
const BARRIER_HALF_DEPTH = 0.35;

interface HalfExtents {
  width: number;
  height: number;
  depth: number;
}

function halfExtentsFor(type: ObstacleType): HalfExtents {
  if (type === ObstacleType.BARRIER_HIGH) {
    return { width: BARRIER_HALF_WIDTH, height: BARRIER_HALF_HEIGHT, depth: BARRIER_HALF_DEPTH };
  }
  return { width: OBSTACLE_HALF_WIDTH, height: OBSTACLE_HALF_HEIGHT, depth: OBSTACLE_HALF_DEPTH };
}

export class CollisionSystem {
  private _playerBox: THREE.Box3;
  private _obstacleBox: THREE.Box3;
  private _playerCenter: THREE.Vector3;
  private _playerSize: THREE.Vector3;

  // Z position of each obstacle on the previous call, keyed by spawnId. At
  // speed 105 a single 30fps frame (or the 0.1s GameLoop delta cap) can
  // advance an obstacle 3.5-10.5 units — far more than its own 1.4-unit
  // depth — so testing only the instantaneous box lets it tunnel through
  // the player entirely. Sweeping the Z range travelled since last frame
  // closes that gap. See #75.
  private _previousZBySpawnId: Map<number, number>;
  private _seenSpawnIds: Set<number>;

  constructor() {
    this._playerBox = new THREE.Box3();
    this._obstacleBox = new THREE.Box3();
    this._playerCenter = new THREE.Vector3();
    this._playerSize = new THREE.Vector3(
      PLAYER_HALF_WIDTH * 2,
      PLAYER_HALF_HEIGHT * 2,
      PLAYER_HALF_DEPTH * 2
    );
    this._previousZBySpawnId = new Map();
    this._seenSpawnIds = new Set();
  }

  checkPlayerVsObstacles(
    playerMesh: THREE.Mesh,
    obstacleManager: ObstacleManager,
    playerY: number = 0,
    isJumping: boolean = false
  ): { x: number; y: number; z: number; lane: number } | null {
    // playerMesh.position is the Group's authored transform (unscaled,
    // untilted), unlike a bounding box derived from the animated mesh.
    this._playerCenter.set(playerMesh.position.x, playerMesh.position.y, playerMesh.position.z);
    this._playerBox.setFromCenterAndSize(this._playerCenter, this._playerSize);

    const activeObstacles = obstacleManager.getActiveObstacles();
    this._seenSpawnIds.clear();

    for (const obstacle of activeObstacles) {
      this._seenSpawnIds.add(obstacle.spawnId);

      const previousZ = this._previousZBySpawnId.get(obstacle.spawnId) ?? obstacle.z;
      this._previousZBySpawnId.set(obstacle.spawnId, obstacle.z);

      const half = halfExtentsFor(obstacle.type);

      const zTravelMin = Math.min(previousZ, obstacle.z) - half.depth;
      const zTravelMax = Math.max(previousZ, obstacle.z) + half.depth;

      this._obstacleBox.min.set(
        obstacle.x - half.width,
        obstacle.y - half.height,
        zTravelMin
      );
      this._obstacleBox.max.set(
        obstacle.x + half.width,
        obstacle.y + half.height,
        zTravelMax
      );

      const obstacleTop = obstacle.y + half.height;
      const playerBottom = playerY - PLAYER_HALF_HEIGHT;

      if (isJumping && playerBottom > obstacleTop) {
        continue;
      }

      if (this._playerBox.intersectsBox(this._obstacleBox)) {
        return obstacle;
      }
    }

    // Drop history for obstacles no longer active (despawned/recycled) so the
    // map doesn't grow without bound over a long session.
    for (const spawnId of this._previousZBySpawnId.keys()) {
      if (!this._seenSpawnIds.has(spawnId)) {
        this._previousZBySpawnId.delete(spawnId);
      }
    }

    return null;
  }

  checkPlayerVsTrack(playerMesh: THREE.Mesh): boolean {
    return false;
  }

  reset(): void {
    this._playerBox.makeEmpty();
    this._obstacleBox.makeEmpty();
    this._previousZBySpawnId.clear();
    this._seenSpawnIds.clear();
  }
}
