import * as THREE from 'three';
import { GameState } from '../core/GameState';
import { CharacterCustomization } from './CharacterCustomization';

const LANE_WIDTH = 3;
const LERP_SPEED = 6;
const PLAYER_RADIUS = 0.8;
// Player Z position: -4 for lower screen position (closer to camera, ~9 unit gap)
const PLAYER_Z = -4;

// Character personality animation constants
const IDLE_WOBBLE_SPEED = 3;      // Speed of idle wobble
const IDLE_WOBBLE_AMPLITUDE = 0.05;  // Angle of idle wobble (radians)
const TILT_ANGLE = 0.25;          // Max tilt radians (~14 degrees)
const TILT_LERP_SPEED = 10;       // How fast tilt engages
const TILT_RETURN_SPEED = 6;      // How fast tilt returns to 0
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
  private _tiltAngle: number = 0;
  private _isDead: boolean = false;
  private _deathBounceVelocity: number = 0;
  private _characterCustomization: CharacterCustomization;
  private _tpMaterial: THREE.MeshLambertMaterial;
  private _textureCache: Map<string, THREE.CanvasTexture> = new Map();

  constructor(scene: THREE.Scene, characterCustomization: CharacterCustomization, 
              selectedSkinId: string = 'classic') {
    this._mesh = new THREE.Group();
    this._characterCustomization = characterCustomization;

    // Use the passed selectedSkinId, fallback to first skin if not found
    const skin = characterCustomization.getSkins().find(s => s.id === selectedSkinId) 
                || characterCustomization.getSkins()[0];

    this._tpMaterial = new THREE.MeshLambertMaterial({
      color: this._getMaterialColor(skin),
      map: this.createTPTexture(skin),
      side: THREE.DoubleSide,
    });

    const tpInnerR = PLAYER_RADIUS * 0.36;
    const tpOuterR = PLAYER_RADIUS;
    const tpHalfH = 0.5;
    const tpProfile = [
      new THREE.Vector2(tpOuterR, -tpHalfH),
      new THREE.Vector2(tpOuterR,  tpHalfH),
      new THREE.Vector2(tpInnerR,  tpHalfH),
      new THREE.Vector2(tpInnerR, -tpHalfH),
    ];
    const geometry = new THREE.LatheGeometry(tpProfile, 32);
    this._tpMesh = new THREE.Mesh(geometry, this._tpMaterial);
    this._tpMesh.position.set(0, 0, 0);
    this._mesh.add(this._tpMesh);

    const innerR = PLAYER_RADIUS * 0.28;
    const outerR = PLAYER_RADIUS * 0.35;
    const halfH = 1.05 / 2;
    const tubeProfile = [
      new THREE.Vector2(outerR, -halfH),
      new THREE.Vector2(outerR,  halfH),
      new THREE.Vector2(innerR,  halfH),
      new THREE.Vector2(innerR, -halfH),
    ];
    const tubeGeometry = new THREE.LatheGeometry(tubeProfile, 32);
    const tubeMaterial = new THREE.MeshLambertMaterial({
      color: 0x8B7355,
      map: this.createCardboardTexture(),
      side: THREE.DoubleSide,
    });
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    tubeMesh.position.set(0, 0, 0);
    this._tpMesh.add(tubeMesh);

    this._mesh.position.set(0, 0.5, PLAYER_Z);

    scene.add(this._mesh);
  }

  private _getMaterialColor(skin: { color: number | string; gradient?: number[] } | undefined): number | string {
    if (!skin) return 0xFFFFF0;

    // For gradient skins, use white material since texture contains the gradient
    if (skin.gradient && skin.gradient.length >= 2) {
      return 0xFFFFFF; // White material for gradient textures
    }
    return skin.color; // Colored material for solid skins
  }

  private _hexToCanvasColor(hexColor: number): string {
    // Convert hex number to CSS color string
    const r = (hexColor >> 16) & 0xFF;
    const g = (hexColor >> 8) & 0xFF;
    const b = hexColor & 0xFF;
    return `rgb(${r}, ${g}, ${b})`;
  }

  private _generateCacheKey(skin: { color: number | string; gradient?: number[] } | undefined): string {
    if (!skin) return 'default';
    if (skin.gradient && skin.gradient.length >= 2) {
      return `gradient_${skin.gradient.join('_')}`;
    }
    return `solid_${skin.color}`;
  }

  updateSkin(skinId: string): void {
    const skin = this._characterCustomization.getSkins().find(s => s.id === skinId);
    if (skin) {
      const color = this._getMaterialColor(skin);
      this._tpMaterial.color.set(color);
      
      // Update texture with new skin
      const newTexture = this.createTPTexture(skin);
      this._tpMaterial.map = newTexture;
      
    }
  }

  private createTPTexture(skin: { color: number | string; gradient?: number[] } | undefined): THREE.CanvasTexture {
    const cacheKey = this._generateCacheKey(skin);
    
    // Check cache first
    if (this._textureCache.has(cacheKey)) {
      const cachedTexture = this._textureCache.get(cacheKey)!;
      cachedTexture.needsUpdate = true;
      return cachedTexture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Create background (gradient or solid)
    if (skin && skin.gradient && skin.gradient.length >= 2) {
      // Create horizontal gradient
      const gradient = ctx.createLinearGradient(0, 0, 512, 0);
      
      // Add color stops evenly distributed
      skin.gradient.forEach((color, index) => {
        const position = index / (skin.gradient!.length - 1);
        gradient.addColorStop(position, this._hexToCanvasColor(color));
      });
      
      ctx.fillStyle = gradient;
    } else {
      // Solid color background
      ctx.fillStyle = '#FFFFF0';
    }
    
    ctx.fillRect(0, 0, 512, 256);

    // Add spiral pattern overlay
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

    // Add texture dots for more realistic paper look
    ctx.fillStyle = 'rgba(245, 245, 240, 0.3)';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Paper layer lines on rim (visible at top/bottom of roll)
    ctx.strokeStyle = 'rgba(200, 195, 185, 0.4)';
    ctx.lineWidth = 1;
    for (let y = 240; y < 256; y += 3) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // Create Three.js texture with proper settings
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;

    // Cache the texture
    this._textureCache.set(cacheKey, texture);

    return texture;
  }

  private createCardboardTexture(): THREE.CanvasTexture {
    if (this._textureCache.has('cardboard')) {
      const cached = this._textureCache.get('cardboard')!;
      cached.needsUpdate = true;
      return cached;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    // Base brown fill
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, 0, 256, 128);

    // Corrugated ridges — alternating dark/light horizontal lines
    for (let y = 0; y < 128; y += 4) {
      ctx.fillStyle = y % 8 === 0 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.08)';
      ctx.fillRect(0, y, 256, 2);
    }

    // Paper fiber grain dots
    ctx.fillStyle = 'rgba(60,40,20,0.15)';
    for (let i = 0; i < 80; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 128;
      ctx.fillRect(x, y, 1, 1);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 1);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;

    this._textureCache.set('cardboard', texture);
    return texture;
  }

  private _disposeOldTextures(): void {
    // Dispose of textures that are no longer needed (if cache gets too large)
    if (this._textureCache.size > 20) { // Keep cache size reasonable
      const firstKey = this._textureCache.keys().next().value;
      if (firstKey) {
        const texture = this._textureCache.get(firstKey);
        if (texture) {
          texture.dispose();
        }
        this._textureCache.delete(firstKey);
      }
    }
  }

  moveLeft(): void {
    if (this._isDead) return;
    if (this._currentLaneIndex > -1) {
      this._currentLaneIndex--;
      this._targetX = this._currentLaneIndex * LANE_WIDTH;
      this._isChangingLanes = true;
      this._scaleX = 0.9;
      this._scaleY = 1.1;
    }
  }

  moveRight(): void {
    if (this._isDead) return;
    if (this._currentLaneIndex < 1) {
      this._currentLaneIndex++;
      this._targetX = this._currentLaneIndex * LANE_WIDTH;
      this._isChangingLanes = true;
      this._scaleX = 0.9;
      this._scaleY = 1.1;
    }
  }

  update(delta: number): void {
    // Death tumble animation
    if (this._isDead) {
      this._tpMesh.rotation.x += delta * 8;
      this._deathBounceVelocity -= delta * 12;
      this._mesh.position.y += this._deathBounceVelocity * delta;
      if (this._mesh.position.y < -0.5) this._mesh.position.y = -0.5;
      return;
    }

    this._currentX = THREE.MathUtils.lerp(this._currentX, this._targetX, LERP_SPEED * delta);
    this._mesh.position.x = this._currentX;

    let yOffset = 0.5;

    // Check if lane change is complete
    if (this._isChangingLanes) {
      if (Math.abs(this._currentX - this._targetX) < 0.05) {
        this._isChangingLanes = false;
      }
    }

    // Tilt during lane changes
    const dx = this._targetX - this._currentX;
    if (this._isChangingLanes && Math.abs(dx) > 0.05) {
      const targetTilt = -Math.sign(dx) * TILT_ANGLE;
      this._tiltAngle = THREE.MathUtils.lerp(this._tiltAngle, targetTilt, TILT_LERP_SPEED * delta);
    } else {
      this._tiltAngle = THREE.MathUtils.lerp(this._tiltAngle, 0, TILT_RETURN_SPEED * delta);
    }

    // Scale normalization (smooth transition to normal)
    this._scaleY = THREE.MathUtils.lerp(this._scaleY, 1, delta * 5);
    this._scaleX = THREE.MathUtils.lerp(this._scaleX, 1, delta * 5);

    // Idle personality: gentle wobble animation (only when NOT changing lanes)
    let wobbleZ = 0;
    if (!this._isChangingLanes) {
      this._idleTime += delta;
      const wobbleSpeed = this._isNearObstacle ? NEAR_OBSTACLE_SPEED : IDLE_WOBBLE_SPEED;
      const wobbleAmp = this._isNearObstacle ? IDLE_WOBBLE_AMPLITUDE * 1.5 : IDLE_WOBBLE_AMPLITUDE;

      wobbleZ = Math.sin(this._idleTime * wobbleSpeed) * wobbleAmp;

      // Slight bounce when near obstacle (nervous animation)
      if (this._isNearObstacle) {
        yOffset += Math.sin(this._idleTime * 15) * 0.03;
      }
    }

    // Combine wobble + tilt
    this._tpMesh.rotation.z = wobbleZ + this._tiltAngle;

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

  isChangingLanes(): boolean {
    return this._isChangingLanes;
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

  startDeathTumble(): void {
    this._isDead = true;
    this._deathBounceVelocity = 5;
  }

  reset(): void {
    this._currentLaneIndex = 0;
    this._currentX = 0;
    this._targetX = 0;
    this._speed = 0;
    // No initialization needed since these are no longer used
    this._isChangingLanes = false;
    this._isNearObstacle = false;
    this._successBounce = 0;
    this._idleTime = 0;
    this._scaleY = 1;
    this._scaleX = 1;
    this._tiltAngle = 0;
    this._isDead = false;
    this._deathBounceVelocity = 0;
    this._mesh.position.set(0, 0.5, PLAYER_Z);
    this._tpMesh.rotation.set(0, 0, 0);
    this._mesh.scale.set(1, 1, 1);
    
    // Restore selected skin
    const savedSkinId = this._characterCustomization.getSelectedSkinId?.() || 'classic';
    this.updateSkin(savedSkinId);
  }
}
