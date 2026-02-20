import * as THREE from 'three';
import { ObstacleManager } from './ObstacleManager';

const COLLISION_TOLERANCE = 0.1;
const PLAYER_HALF_HEIGHT = 0.5;

export class CollisionSystem {
  private _playerBox: THREE.Box3;
  private _obstacleBox: THREE.Box3;

  constructor() {
    this._playerBox = new THREE.Box3();
    this._obstacleBox = new THREE.Box3();
  }

  checkPlayerVsObstacles(
    playerMesh: THREE.Mesh, 
    obstacleManager: ObstacleManager,
    playerY: number = 0,
    isJumping: boolean = false
  ): { x: number; y: number; z: number; lane: number } | null {
    this._playerBox.setFromObject(playerMesh);

    const activeObstacles = obstacleManager.getActiveObstacles();

    for (const obstacle of activeObstacles) {
      this._obstacleBox.setFromCenterAndSize(
        new THREE.Vector3(obstacle.x, obstacle.y, obstacle.z),
        new THREE.Vector3(1.0, 1.6, 1.4)
      );

      this._obstacleBox.min.x -= COLLISION_TOLERANCE;
      this._obstacleBox.max.x += COLLISION_TOLERANCE;
      this._obstacleBox.min.y -= COLLISION_TOLERANCE;
      this._obstacleBox.max.y += COLLISION_TOLERANCE;
      this._obstacleBox.min.z -= COLLISION_TOLERANCE;
      this._obstacleBox.max.z += COLLISION_TOLERANCE;

      const obstacleTop = this._obstacleBox.max.y;
      const playerBottom = playerY - PLAYER_HALF_HEIGHT;

      if (isJumping && playerBottom > obstacleTop) {
        continue;
      }

      if (this._playerBox.intersectsBox(this._obstacleBox)) {
        return obstacle;
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
  }
}
