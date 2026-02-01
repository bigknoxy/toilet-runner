import * as THREE from 'three';

// Smooth damping for camera follow (Higher = snappier, Lower = floatier)
const CAMERA_DAMPING = 2.5;  // Slower, smoother camera follow
// Camera offset constants
const CAMERA_HEIGHT_OFFSET = 2;
const CAMERA_Z_OFFSET = 8; // Was -5, fixed to +8 to place camera in front of player (Z=4) looking toward -Z (forward), so obstacles come from front of screen toward player

export class CameraManager {
  private _camera: THREE.PerspectiveCamera;
  private _basePosition: THREE.Vector3;
  // Target position for smooth following
  private _targetPosition: THREE.Vector3;

  constructor(camera: THREE.PerspectiveCamera) {
    this._camera = camera;
    // Match SceneManager: higher vantage point (Y=2.8), further from player (Z=6)
    this._basePosition = new THREE.Vector3(0, 2.8, 6);
    this._targetPosition = new THREE.Vector3();
    this._camera.position.copy(this._basePosition);
  }

  update(delta: number): void {
    // No-op - CameraManager no longer handles shake directly
    // Camera follow is handled by updateCameraFollow()
    // Shake is handled by CameraShake system
  }

  updateCameraFollow(playerPosition: THREE.Vector3, delta: number): void {
    // Calculate target position (behind and above player)
    this._targetPosition.set(
      0,  // FIXED: Camera stays centered, no X follow
      playerPosition.y + CAMERA_HEIGHT_OFFSET,
      playerPosition.z + CAMERA_Z_OFFSET
    );
    
    // Smooth lerp instead of direct assignment
    this._basePosition.lerp(this._targetPosition, CAMERA_DAMPING * delta);
    
    // Look at center of track ahead
    this._camera.lookAt(
      0,                       // Look at center line
      playerPosition.y + 0.5,  // Keep Y follow for height context
      playerPosition.z - 15    // Look ahead down the track
    );
  }

  reset(): void {
    this._targetPosition.set(0, 0, 0);
    this._camera.position.copy(this._basePosition);
  }

  getCurrentPosition(): THREE.Vector3 {
    return this._basePosition.clone();
  }
}
