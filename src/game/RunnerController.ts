import * as THREE from 'three';
import { GameState } from '../core/GameState';

const LANE_WIDTH = 3;
const LERP_SPEED = 8;
const PLAYER_RADIUS = 0.8;

export class RunnerController {
  private _mesh: THREE.Group;
  private _tpMesh: THREE.Mesh;
  private _currentLaneIndex: number = 0;
  private _currentX: number = 0;
  private _targetX: number = 0;
  private _speed: number = 0;
  private _bounceY: number = 0;
  private _wobbleTime: number = 0;
  private _isChangingLanes: boolean = false;

  constructor(scene: THREE.Scene) {
    this._mesh = new THREE.Group();

    const tpTexture = this.createTPTexture();
    const tpMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xFFFFF0,
      map: tpTexture
    });

    const geometry = new THREE.CylinderGeometry(PLAYER_RADIUS, PLAYER_RADIUS, 1, 16);
    this._tpMesh = new THREE.Mesh(geometry, tpMaterial);
    this._tpMesh.position.set(0, 0, 0);
    this._mesh.add(this._tpMesh);

    const tubeGeometry = new THREE.CylinderGeometry(PLAYER_RADIUS * 0.35, PLAYER_RADIUS * 0.35, 1.05, 12);
    const tubeMaterial = new THREE.MeshLambertMaterial({ color: 0x8B7355 });
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    tubeMesh.position.set(0, 0, 0);
    this._mesh.add(tubeMesh);

    this._mesh.position.set(0, 0.5, -10);
    
    scene.add(this._mesh);
  }

  private createTPTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#FFFFF0';
    ctx.fillRect(0, 0, 512, 256);

    ctx.strokeStyle = '#E8E8E8';
    ctx.lineWidth = 2;

    const spiralSpacing = 64;
    for (let y = 0; y < 256; y += spiralSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y + 16);
      ctx.stroke();
    }

    for (let y = -16; y < 272; y += spiralSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y + 16);
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(245, 245, 240, 0.3)';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);
    texture.needsUpdate = true;

    return texture;
  }

  moveLeft(): void {
    if (this._currentLaneIndex > -1) {
      this._currentLaneIndex--;
      this._targetX = this._currentLaneIndex * LANE_WIDTH;
      this._isChangingLanes = true;
      this._bounceY = 0.15;
      this._wobbleTime = 0;
    }
  }

  moveRight(): void {
    if (this._currentLaneIndex < 1) {
      this._currentLaneIndex++;
      this._targetX = this._currentLaneIndex * LANE_WIDTH;
      this._isChangingLanes = true;
      this._bounceY = 0.15;
      this._wobbleTime = 0;
    }
  }

  update(delta: number): void {
    this._currentX = THREE.MathUtils.lerp(this._currentX, this._targetX, LERP_SPEED * delta);
    this._mesh.position.x = this._currentX;

    let yOffset = 0.5;

    if (this._isChangingLanes) {
      this._wobbleTime += delta * 12;
      yOffset += Math.sin(this._wobbleTime) * 0.08;
      
      this._bounceY *= 0.85;
      yOffset += this._bounceY;

      if (this._wobbleTime > Math.PI * 2) {
        this._isChangingLanes = false;
        this._wobbleTime = 0;
      }
    }

    this._mesh.position.y = yOffset;
  }

  getMesh(): THREE.Mesh {
    return this._mesh as THREE.Mesh;
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
    this._bounceY = 0;
    this._wobbleTime = 0;
    this._isChangingLanes = false;
    this._mesh.position.set(0, 0.5, -10);
    this._tpMesh.rotation.z = 0;
  }
}
