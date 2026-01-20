import * as THREE from 'three';

// Phase 3: More subtle shake for closer camera (was 0.02)
const SHAKE_AMPLITUDE = 0.015;
// Phase 3: Quicker shake for less disorienting feedback (was 0.08)
const SHAKE_DURATION = 0.06;
// Smooth damping for X-axis follow (Subway Surfers uses ~0.2-0.3s)
const CAMERA_DAMPING = 8;

export class CameraManager {
  private _camera: THREE.PerspectiveCamera;
  private _shakeTime: number = 0;
  private _isShaking: boolean = false;
  private _basePosition: THREE.Vector3;
  // Target X position for smooth following
  private _targetX: number = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this._camera = camera;
    // Match SceneManager: higher vantage point (Y=2.8), further from player (Z=6)
    this._basePosition = new THREE.Vector3(0, 2.8, 6);
    this._camera.position.copy(this._basePosition);
    this._targetX = 0;
  }

  triggerShake(): void {
    this._shakeTime = SHAKE_DURATION;
    this._isShaking = true;
  }

  update(delta: number): void {
    // Smoothly follow player's X position (Subway Surfers lerp)
    this._targetX = THREE.MathUtils.lerp(
      this._camera.position.x,
      this._basePosition.x,
      CAMERA_DAMPING * delta
    );
    this._basePosition.x = this._targetX;

    if (this._isShaking) {
      this._shakeTime -= delta;

      if (this._shakeTime <= 0) {
        this._isShaking = false;
        this._camera.position.copy(this._basePosition);
      } else {
        // Phase 3: More subtle shake (amplitude 0.015), reduced vertical component (0.25 instead of 0.3)
        const shakeX = Math.sin(this._shakeTime * 80) * SHAKE_AMPLITUDE;
        const shakeY = Math.cos(this._shakeTime * 80) * SHAKE_AMPLITUDE * 0.25;
        this._camera.position.x = this._basePosition.x + shakeX;
        this._camera.position.y = this._basePosition.y + shakeY;
        this._camera.position.z = this._basePosition.z;
      }
    } else {
      // When not shaking, smoothly update position
      this._camera.position.copy(this._basePosition);
    }
  }

  reset(): void {
    this._isShaking = false;
    this._shakeTime = 0;
    this._targetX = 0;
    this._camera.position.copy(this._basePosition);
  }
}
