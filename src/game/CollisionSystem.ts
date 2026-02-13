import * as THREE from 'three';
import { ObstacleManager } from './ObstacleManager';

const COLLISION_TOLERANCE = 0.1;

export class CollisionSystem {
  private _playerBox: THREE.Box3;
  private _obstacleBox: THREE.Box3;

  constructor() {
    this._playerBox = new THREE.Box3();
    this._obstacleBox = new THREE.Box3();
  }

  checkPlayerVsObstacles(playerMesh: THREE.Mesh, obstacleManager: ObstacleManager): boolean {
    // Set player bounding box from mesh
    this._playerBox.setFromObject(playerMesh);

    // Get active obstacles from obstacle manager
    const activeObstacles = obstacleManager.getActiveObstacles();

    // Check collision with each active obstacle
    for (const obstacle of activeObstacles) {
      // Set obstacle bounding box with actual size (based on poop obstacle geometry)
      // Body is ~1.4 wide, total height ~1.6 with tip, depth ~1.4
      // Reduced width to 1.0 for +50% wider gaps (0.6 units vs 0.4 before)
      this._obstacleBox.setFromCenterAndSize(
        new THREE.Vector3(obstacle.x, obstacle.y, obstacle.z),
        new THREE.Vector3(1.0, 1.6, 1.4)
      );

      // Add tolerance to make collision more forgiving
      this._obstacleBox.min.x -= COLLISION_TOLERANCE;
      this._obstacleBox.max.x += COLLISION_TOLERANCE;
      this._obstacleBox.min.y -= COLLISION_TOLERANCE;
      this._obstacleBox.max.y += COLLISION_TOLERANCE;
      this._obstacleBox.min.z -= COLLISION_TOLERANCE;
      this._obstacleBox.max.z += COLLISION_TOLERANCE;

      // Check intersection
      if (this._playerBox.intersectsBox(this._obstacleBox)) {
        return true; // Collision detected
      }
    }

    return false; // No collision
  }

  checkPlayerVsTrack(playerMesh: THREE.Mesh): boolean {
    return false;
  }

  reset(): void {
    this._playerBox.makeEmpty();
    this._obstacleBox.makeEmpty();
  }
}
