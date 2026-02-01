import * as THREE from 'three';

/**
 * TrailRenderer creates a motion blur trail behind the player
 */
export class TrailRenderer {
  private positions: THREE.Vector3[] = [];
  private readonly maxPoints = 15;
  private trailMesh: THREE.Line;
  private geometry: THREE.BufferGeometry;
  private material: THREE.LineBasicMaterial;
  private tempVector = new THREE.Vector3();
  private _isLaneChanging: boolean = false;

  constructor(private player: THREE.Mesh, private scene: THREE.Scene) {
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.LineBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.5
    });
    
    this.trailMesh = new THREE.Line(this.geometry, this.material);
    this.trailMesh.visible = false; // Start hidden
    scene.add(this.trailMesh);
  }

  /**
   * Update trail effect with player position and speed
   * @param playerPosition Current player world position
   * @param speed Current player speed for trail scaling
   * @param isLaneChanging Whether the player is currently changing lanes
   */
  public update(playerPosition: THREE.Vector3, speed: number, isLaneChanging: boolean = false): void {
    this._isLaneChanging = isLaneChanging;
    
    if (isLaneChanging) {
      // Reset trail during lane change - don't record curved path
      this.positions = [playerPosition.clone()];
      this.trailMesh.visible = false;
      return;
    }
    // Add new position at the front
    this.positions.unshift(playerPosition.clone());
    
    // Scale trail length based on speed (minimum 3 points, maximum maxPoints)
    const speedFactor = Math.min(speed / 15, 1); // Normalize to 0-1 range
    const trailLength = Math.floor(3 + (this.maxPoints - 3) * speedFactor);
    this.positions = this.positions.slice(0, trailLength);
    
    // Only show trail if we have enough points
    if (this.positions.length >= 2) {
      this.trailMesh.visible = true;
      
      // Update geometry with current positions
      const points = new Float32Array(this.positions.length * 3);
      this.positions.forEach((p, i) => {
        points[i * 3] = p.x;
        points[i * 3 + 1] = p.y - 0.1; // Slightly below player center
        points[i * 3 + 2] = p.z;
      });
      
      this.trailMesh.geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
      
      // Update opacity based on speed
      this.material.opacity = 0.3 + (0.4 * speedFactor);
      
      // Fade trail by distance (older points are more transparent)
      const colors = new Float32Array(this.positions.length * 3);
      for (let i = 0; i < this.positions.length; i++) {
        const alpha = (1 - i / this.positions.length) * this.material.opacity;
        colors[i * 3] = 1;     // R
        colors[i * 3 + 1] = 1; // G  
        colors[i * 3 + 2] = 1; // B
      }
      this.trailMesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      this.material.vertexColors = true;
      
    } else {
      this.trailMesh.visible = false;
    }
  }

  /**
   * Reset trail when game restarts
   */
  public reset(): void {
    this.positions = [];
    this.trailMesh.visible = false;
    
    // Clear geometry
    this.trailMesh.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(0), 3));
    this.trailMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(0), 3));
  }

  /**
   * Dispose of resources
   */
  public dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.scene.remove(this.trailMesh);
  }

  /**
   * Get trail visibility state
   */
  public isVisible(): boolean {
    return this.trailMesh.visible;
  }

  /**
   * Manually set trail visibility
   */
  public setVisibility(visible: boolean): void {
    this.trailMesh.visible = visible;
  }
}