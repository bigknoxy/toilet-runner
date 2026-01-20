import * as THREE from 'three';
import { GameState } from '../core/GameState';

const LANE_WIDTH = 3;
const LERP_SPEED = 6;
const PLAYER_RADIUS = 0.8;
// Player Z position: -4 for lower screen position (closer to camera, ~9 unit gap)
const PLAYER_Z = -4;

// Character personality animation constants
const IDLE_WOBBLE_SPEED = 3;      // Speed of idle wobble
const IDLE_WOBBLE_AMPLITUDE = 0.05;  // Angle of idle wobble (radians)
const SQUASH_STRETCH = 0.15;      // Scale amount for squash/stretch
const SUCCESS_BOUNCE = 0.2;       // Bounce height on successful dodge
const NEAR_OBSTACLE_SPEED = 8;    // Wobble speed when near obstacle

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
  private _isNearObstacle: boolean = false;
  private _successBounce: number = 0;
  private _idleTime: number = 0;  // Track idle time for continuous wobble
  private _scaleY: number = 1;    // For squash/stretch effect
  private _scaleX: number = 1;

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

    this._mesh.position.set(0, 0.5, PLAYER_Z);

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

    // Squash/stretch effect - stretch when moving, squash when landing
    if (this._isChangingLanes) {
      // Stretch: scale Y up, X down during movement
      this._scaleY = THREE.MathUtils.lerp(this._scaleY, 1 + SQUASH_STRETCH, delta * 10);
      this._scaleX = THREE.MathUtils.lerp(this._scaleX, 1 - SQUASH_STRETCH * 0.5, delta * 10);
      
      this._wobbleTime += delta * 12;
      yOffset += Math.sin(this._wobbleTime) * 0.08;
      
      this._bounceY *= 0.85;
      yOffset += this._bounceY;

      if (this._wobbleTime > Math.PI * 2) {
        this._isChangingLanes = false;
        this._wobbleTime = 0;
        // Land: normalize scale
        this._scaleY = 1;
        this._scaleX = 1;
      }
    } else {
      // Normalize scale when not changing lanes
      this._scaleY = THREE.MathUtils.lerp(this._scaleY, 1, delta * 5);
      this._scaleX = THREE.MathUtils.lerp(this._scaleX, 1, delta * 5);

      // Idle personality: gentle wobble animation
      if (!this._isChangingLanes) {
        this._idleTime += delta;
        const wobbleSpeed = this._isNearObstacle ? NEAR_OBSTACLE_SPEED : IDLE_WOBBLE_SPEED;
        const wobbleAmp = this._isNearObstacle ? IDLE_WOBBLE_AMPLITUDE * 1.5 : IDLE_WOBBLE_AMPLITUDE;
        
        // Apply wobble rotation to the TP mesh
        this._tpMesh.rotation.z = Math.sin(this._idleTime * wobbleSpeed) * wobbleAmp;
        
        // Slight bounce when near obstacle (nervous animation)
        if (this._isNearObstacle) {
          yOffset += Math.sin(this._idleTime * 15) * 0.03;
        }
      }
    }

    // Success bounce effect
    if (this._successBounce > 0.01) {
      yOffset += this._successBounce;
      this._successBounce *= 0.8;
      this._scaleY = 1 + this._successBounce * 2;
    }

    this._mesh.position.y = yOffset;
    
    // Apply squash/stretch scale to the mesh
    this._mesh.scale.set(this._scaleX, this._scaleY, this._scaleX);
  }

  getMesh(): THREE.Mesh {
    return this._mesh as unknown as THREE.Mesh;
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

  setNearObstacle(near: boolean): void {
    this._isNearObstacle = near;
  }

  triggerSuccessBounce(): void {
    this._successBounce = SUCCESS_BOUNCE;
  }

  reset(): void {
    this._currentLaneIndex = 0;
    this._currentX = 0;
    this._targetX = 0;
    this._speed = 0;
    this._bounceY = 0;
    this._wobbleTime = 0;
    this._isChangingLanes = false;
    this._isNearObstacle = false;
    this._successBounce = 0;
    this._idleTime = 0;
    this._scaleY = 1;
    this._scaleX = 1;
    this._mesh.position.set(0, 0.5, PLAYER_Z);
    this._tpMesh.rotation.z = 0;
    this._mesh.scale.set(1, 1, 1);
  }
}
