import * as THREE from 'three';

const LINE_COUNT = 20;
const SPEED_THRESHOLD = 15;
const LINE_Z_RANGE = 40; // Spread lines from -40 to 0 (in front of player)
const LINE_RESET_Z = 10; // Reset when line passes behind player

export class SpeedLines {
  private _mesh: THREE.InstancedMesh;
  private _positions: Float32Array;
  private _tempMatrix: THREE.Matrix4;
  private _material: THREE.MeshBasicMaterial;

  constructor(scene: THREE.Scene) {
    this._tempMatrix = new THREE.Matrix4();

    const geometry = new THREE.PlaneGeometry(0.04, 3);
    this._material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this._mesh = new THREE.InstancedMesh(geometry, this._material, LINE_COUNT);
    this._mesh.frustumCulled = false;
    scene.add(this._mesh);

    // Initialize random positions
    this._positions = new Float32Array(LINE_COUNT * 3);
    for (let i = 0; i < LINE_COUNT; i++) {
      this._positions[i * 3] = (Math.random() - 0.5) * 12;     // x: spread across lanes
      this._positions[i * 3 + 1] = Math.random() * 4 + 0.5;    // y: above ground
      this._positions[i * 3 + 2] = -Math.random() * LINE_Z_RANGE; // z: in front
      this._updateInstance(i);
    }
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  private _updateInstance(i: number): void {
    const x = this._positions[i * 3];
    const y = this._positions[i * 3 + 1];
    const z = this._positions[i * 3 + 2];
    // Rotate plane to lie along Z-axis (horizontal streak)
    this._tempMatrix.makeRotationX(Math.PI / 2);
    this._tempMatrix.setPosition(x, y, z);
    this._mesh.setMatrixAt(i, this._tempMatrix);
  }

  update(delta: number, gameSpeed: number): void {
    if (gameSpeed <= SPEED_THRESHOLD) {
      this._material.opacity = 0;
      return;
    }

    // Intensity scales from 0 to 1 as speed goes from threshold to threshold+10
    const intensity = Math.min((gameSpeed - SPEED_THRESHOLD) / 10, 1);
    this._material.opacity = intensity * 0.35;

    const moveDelta = gameSpeed * delta * 1.5;

    for (let i = 0; i < LINE_COUNT; i++) {
      this._positions[i * 3 + 2] += moveDelta;

      // Reset line when it passes behind
      if (this._positions[i * 3 + 2] > LINE_RESET_Z) {
        this._positions[i * 3] = (Math.random() - 0.5) * 12;
        this._positions[i * 3 + 1] = Math.random() * 4 + 0.5;
        this._positions[i * 3 + 2] = -LINE_Z_RANGE + Math.random() * 5;
      }
      this._updateInstance(i);
    }
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  reset(): void {
    this._material.opacity = 0;
    for (let i = 0; i < LINE_COUNT; i++) {
      this._positions[i * 3] = (Math.random() - 0.5) * 12;
      this._positions[i * 3 + 1] = Math.random() * 4 + 0.5;
      this._positions[i * 3 + 2] = -Math.random() * LINE_Z_RANGE;
      this._updateInstance(i);
    }
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  dispose(): void {
    this._mesh.geometry.dispose();
    this._material.dispose();
  }
}
