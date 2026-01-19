import * as THREE from 'three';
import { GameState } from '../core/GameState';

const LANE_WIDTH = 3;
const LERP_SPEED = 8;
const PLAYER_RADIUS = 0.5;

export class RunnerController {
  private _mesh: THREE.Mesh;
  private _currentLaneIndex: number = 0; // 0 = CENTER, -1 = LEFT, 1 = RIGHT
  private _currentX: number = 0; // Actual X position, lerped
  private _targetX: number = 0; // Target lane X position
  private _speed: number = 0;

  constructor(scene: THREE.Scene) {
    // Create toilet roll mesh
    const geometry = new THREE.CylinderGeometry(PLAYER_RADIUS, PLAYER_RADIUS, 1, 12);
    const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this._mesh = new THREE.Mesh(geometry, material);
    
    // Position at center lane, above ground, fixed Z
    this._mesh.position.set(0, 0.5, -10);
    
    // Add to scene
    scene.add(this._mesh);
  }

  moveLeft(): void {
    if (this._currentLaneIndex > -1) {
      this._currentLaneIndex--;
      this._targetX = this._currentLaneIndex * LANE_WIDTH;
    }
  }

  moveRight(): void {
    if (this._currentLaneIndex < 1) {
      this._currentLaneIndex++;
      this._targetX = this._currentLaneIndex * LANE_WIDTH;
    }
  }

  update(delta: number): void {
    // Lerp X position for smooth lane switching
    this._currentX = THREE.MathUtils.lerp(this._currentX, this._targetX, LERP_SPEED * delta);
    
    // Update mesh position
    this._mesh.position.x = this._currentX;
    
    // Rolling animation based on speed (roll around X axis, not Z axis)
    if (this._speed > 0) {
      this._mesh.rotation.x -= this._speed * delta / PLAYER_RADIUS;
    }
  }

  getMesh(): THREE.Mesh {
    return this._mesh;
  }

  getPosition(): THREE.Vector3 {
    return this._mesh.position.clone();
  }

  getLane(): number {
    return this._currentLaneIndex;
  }

  setPosition(x: number, y: number, z: number): void {
    this._mesh.position.set(x, y, z);
    this._currentX = x;
    this._targetX = x;
    
    // Update lane index based on position
    this._currentLaneIndex = Math.round(x / LANE_WIDTH);
  }

  setSpeed(speed: number): void {
    this._speed = speed;
  }

  reset(): void {
    this._currentLaneIndex = 0;
    this._currentX = 0;
    this._targetX = 0;
    this._speed = 0;
    this._mesh.position.set(0, 0.5, -10);
    this._mesh.rotation.z = 0;
  }
}