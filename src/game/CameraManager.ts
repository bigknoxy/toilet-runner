import * as THREE from 'three';

const SHAKE_AMPLITUDE = 0.04;
const SHAKE_DURATION = 0.08;

export class CameraManager {
  private _camera: THREE.PerspectiveCamera;
  private _shakeTime: number = 0;
  private _isShaking: boolean = false;
  private _basePosition: THREE.Vector3;

  constructor(camera: THREE.PerspectiveCamera) {
    this._camera = camera;
    this._basePosition = new THREE.Vector3(0, 3, 6);
    this._camera.position.copy(this._basePosition);
  }

  triggerShake(): void {
    this._shakeTime = SHAKE_DURATION;
    this._isShaking = true;
  }

  update(delta: number): void {
    if (this._isShaking) {
      this._shakeTime -= delta;

      if (this._shakeTime <= 0) {
        this._isShaking = false;
        this._camera.position.copy(this._basePosition);
      } else {
        const shakeX = Math.sin(this._shakeTime * 80) * SHAKE_AMPLITUDE;
        const shakeY = Math.cos(this._shakeTime * 80) * SHAKE_AMPLITUDE * 0.5;
        this._camera.position.x = this._basePosition.x + shakeX;
        this._camera.position.y = this._basePosition.y + shakeY;
        this._camera.position.z = this._basePosition.z;
      }
    }
  }

  reset(): void {
    this._isShaking = false;
    this._shakeTime = 0;
    this._camera.position.copy(this._basePosition);
  }
}
