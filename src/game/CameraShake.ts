import * as THREE from 'three';

/**
 * CameraShake - Professional camera shake system for visual feedback
 * Provides configurable intensity and duration with smooth decay
 */
export class CameraShake {
  private _camera: THREE.PerspectiveCamera;
  private _intensity: number = 0;
  private _duration: number = 0;
  private _elapsed: number = 0;
  private _isShaking: boolean = false;
  private _originalPosition: THREE.Vector3;
  private _currentOffset: THREE.Vector3;
  private _targetOffset: THREE.Vector3;

  constructor(camera: THREE.PerspectiveCamera) {
    this._camera = camera;
    this._originalPosition = new THREE.Vector3();
    this._currentOffset = new THREE.Vector3();
    this._targetOffset = new THREE.Vector3();
    
    // Store original camera position
    camera.getWorldPosition(this._originalPosition);
  }

  /**
   * Trigger camera shake with specified intensity and duration
   * @param intensity - Shake strength (0.05-0.3, where 0.05=light, 0.3=heavy)
   * @param duration - Shake duration in seconds (0.15-0.5)
   */
  shake(intensity: number, duration: number): void {
    // If already shaking, take the maximum intensity and extend duration if needed
    if (this._isShaking) {
      this._intensity = Math.max(this._intensity, intensity);
      this._duration = Math.max(this._duration, duration);
      // Reset elapsed time to extend the shake
      this._elapsed = 0;
    } else {
      this._intensity = intensity;
      this._duration = duration;
      this._elapsed = 0;
      this._isShaking = true;
      
      // Update original position in case camera moved
      this._camera.getWorldPosition(this._originalPosition);
    }
  }

  /**
   * Update camera shake every frame
   * @param delta - Time since last frame in seconds
   */
  update(delta: number): void {
    if (!this._isShaking) {
      // Smoothly lerp back to original position
      this._currentOffset.lerp(new THREE.Vector3(0, 0, 0), delta * 10);
      this._applyOffset();
      return;
    }

    this._elapsed += delta;
    const progress = this._elapsed / this._duration;

    if (progress >= 1) {
      // Shake complete
      this._isShaking = false;
      this._currentOffset.set(0, 0, 0);
      this._applyOffset();
      return;
    }

    // Calculate decayed intensity (smooth exponential decay)
    const decayedIntensity = this._intensity * Math.exp(-progress * 3);

    // Generate random shake offset (X and Y only, no Z shake)
    const time = this._elapsed * 15; // Frequency multiplier for natural feel
    const randomX = (Math.random() - 0.5) * 2; // Random between -1 and 1
    const randomY = (Math.random() - 0.5) * 2; // Random between -1 and 1

    // Apply sine wave for more organic movement
    const sineX = Math.sin(time * 1.7) * 0.7;
    const sineY = Math.cos(time * 2.3) * 0.7;

    // Combine random and sine waves, apply decay
    this._targetOffset.x = (randomX + sineX) * decayedIntensity;
    this._targetOffset.y = (randomY + sineY) * decayedIntensity;
    this._targetOffset.z = 0; // Never shake in Z direction

    // Smooth lerp to target offset for smooth transitions
    this._currentOffset.lerp(this._targetOffset, delta * 20);

    this._applyOffset();
  }

  /**
   * Apply the current offset to the camera position
   */
  private _applyOffset(): void {
    this._camera.position.copy(this._originalPosition).add(this._currentOffset);
  }

  /**
   * Check if camera is currently shaking
   */
  get isShaking(): boolean {
    return this._isShaking;
  }

  /**
   * Get current shake intensity
   */
  get currentIntensity(): number {
    if (!this._isShaking) return 0;
    const progress = this._elapsed / this._duration;
    return this._intensity * Math.exp(-progress * 3);
  }

  /**
   * Reset camera shake system
   */
  reset(): void {
    this._isShaking = false;
    this._intensity = 0;
    this._duration = 0;
    this._elapsed = 0;
    this._currentOffset.set(0, 0, 0);
    this._targetOffset.set(0, 0, 0);
    
    // Reset camera to original position
    this._camera.position.copy(this._originalPosition);
  }

  /**
    * Sync original position with current camera base position
    * @param basePosition - The current base position of the camera
    */
  syncWithBasePosition(basePosition: THREE.Vector3): void {
    this._originalPosition.copy(basePosition);
  }

  /**
    * Update original camera position (call if camera base position changes)
    */
  updateOriginalPosition(): void {
    if (!this._isShaking) {
      this._camera.getWorldPosition(this._originalPosition);
    }
  }
}