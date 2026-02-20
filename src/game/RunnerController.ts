import * as THREE from 'three';
import { GameState } from '../core/GameState';
import { CharacterCustomization, CharacterSkin, SkinPattern } from './CharacterCustomization';
import { JUMP_CONFIG } from '../config/JumpConfig';

const LANE_WIDTH = 3;
const LERP_SPEED = 6;
const PLAYER_RADIUS = 0.8;
const PLAYER_Z = -4;
const GROUND_Y = 0.5;

const IDLE_WOBBLE_SPEED = 3;
const IDLE_WOBBLE_AMPLITUDE = 0.05;
const TILT_ANGLE = 0.25;
const TILT_LERP_SPEED = 10;
const TILT_RETURN_SPEED = 6;
const SUCCESS_BOUNCE = 0.2;
const NEAR_OBSTACLE_SPEED = 8;

export class RunnerController {
  private _mesh: THREE.Group;
  private _tpMesh: THREE.Mesh;
  private _currentLaneIndex: number = 0;
  private _currentX: number = 0;
  private _targetX: number = 0;
  private _speed: number = 0;
  private _wobbleTime: number = 0;
  private _isChangingLanes: boolean = false;
  private _isNearObstacle: boolean = false;
  private _successBounce: number = 0;
  private _idleTime: number = 0;
  private _scaleY: number = 1;
  private _scaleX: number = 1;
  private _tiltAngle: number = 0;
  private _isDead: boolean = false;
  private _deathBounceVelocity: number = 0;
  private _characterCustomization: CharacterCustomization;
  private _tpMaterial: THREE.MeshLambertMaterial;
  private _textureCache: Map<string, THREE.CanvasTexture> = new Map();

  private _isJumping: boolean = false;
  private _isGrounded: boolean = true;
  private _velocityY: number = 0;
  private _coyoteTimer: number = 0;
  private _jumpBufferTimer: number = 0;
  private _landSquashTimer: number = 0;

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

  private _getMaterialColor(skin: CharacterSkin | undefined): number | string {
    if (!skin) return 0xFFFFF0;

    if (skin.gradient && skin.gradient.length >= 2) {
      return 0xFFFFFF;
    }
    return skin.color;
  }

  private _hexToCanvasColor(hexColor: number): string {
    const r = (hexColor >> 16) & 0xFF;
    const g = (hexColor >> 8) & 0xFF;
    const b = hexColor & 0xFF;
    return `rgb(${r}, ${g}, ${b})`;
  }

  private _generateCacheKey(skin: CharacterSkin | undefined): string {
    if (!skin) return 'default';
    return `skin_${skin.id}`;
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

  private createTPTexture(skin: CharacterSkin | undefined): THREE.CanvasTexture {
    const cacheKey = this._generateCacheKey(skin);
    
    if (this._textureCache.has(cacheKey)) {
      const cachedTexture = this._textureCache.get(cacheKey)!;
      cachedTexture.needsUpdate = true;
      return cachedTexture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    if (skin?.pattern && skin?.pattern !== 'solid' && skin?.pattern !== 'gradient') {
      const pattern = skin.pattern as Exclude<SkinPattern, 'solid' | 'gradient'>;
      const colors = skin.patternColors || ['#FFFFFF'];
      this._drawPattern(ctx, pattern, colors, 512, 256);
    } else if (skin && skin.gradient && skin.gradient.length >= 2) {
      const gradient = ctx.createLinearGradient(0, 0, 512, 0);
      skin.gradient.forEach((color, index) => {
        const position = index / (skin.gradient!.length - 1);
        gradient.addColorStop(position, this._hexToCanvasColor(color));
      });
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 256);
    } else {
      ctx.fillStyle = '#FFFFF0';
      ctx.fillRect(0, 0, 512, 256);
    }

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

    ctx.strokeStyle = 'rgba(200, 195, 185, 0.4)';
    ctx.lineWidth = 1;
    for (let y = 240; y < 256; y += 3) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;

    this._textureCache.set(cacheKey, texture);
    return texture;
  }

  private _drawPattern(ctx: CanvasRenderingContext2D, pattern: string, colors: string[], width: number, height: number): void {
    switch (pattern) {
      case 'camo':
        this._drawCamoPattern(ctx, colors, width, height);
        break;
      case 'rainbow':
        this._drawRainbowStripes(ctx, colors, width, height);
        break;
      case 'circuit':
        this._drawCircuitPattern(ctx, colors, width, height);
        break;
      case 'flames':
        this._drawFlamePattern(ctx, colors, width, height);
        break;
      case 'frost':
        this._drawFrostPattern(ctx, colors, width, height);
        break;
      case 'stars':
        this._drawStarfield(ctx, colors, width, height);
        break;
      case 'metallic':
        this._drawMetallicGold(ctx, colors, width, height);
        break;
      case 'paper':
        this._drawPaperTexture(ctx, colors, width, height);
        break;
      default:
        ctx.fillStyle = colors[0] || '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
    }
  }

  private _drawCamoPattern(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    const bgColor = colors[0] || '#556B2F';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);

    const seed = 12345;
    const random = (i: number) => {
      const x = Math.sin(seed + i * 9999) * 10000;
      return x - Math.floor(x);
    };

    const blobColors = colors.slice(1);
    for (let i = 0; i < 12; i++) {
      ctx.fillStyle = blobColors[i % blobColors.length];
      ctx.beginPath();
      
      const cx = random(i * 3) * w;
      const cy = random(i * 3 + 1) * h;
      const rx = 40 + random(i * 3 + 2) * 80;
      const ry = 30 + random(i * 7) * 60;
      
      ctx.ellipse(cx, cy, rx, ry, random(i * 11) * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = blobColors[(i + 2) % blobColors.length];
      ctx.beginPath();
      
      const cx = random(i * 5 + 20) * w;
      const cy = random(i * 5 + 21) * h;
      const rx = 30 + random(i * 5 + 22) * 50;
      const ry = 25 + random(i * 7 + 10) * 40;
      
      ctx.ellipse(cx, cy, rx, ry, random(i * 13) * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  private _drawRainbowStripes(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    
    colors.forEach((color, i) => {
      gradient.addColorStop(i / (colors.length - 1), color);
    });
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
  }

  private _drawCircuitPattern(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    ctx.fillStyle = colors[0] || '#0D0D0D';
    ctx.fillRect(0, 0, w, h);

    const traceColors = colors.slice(1);
    ctx.shadowBlur = 8;
    ctx.lineWidth = 3;

    ctx.strokeStyle = traceColors[0] || '#00FFFF';
    ctx.shadowColor = traceColors[0] || '#00FFFF';
    
    for (let y = 32; y < h; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      let x = 0;
      while (x < w) {
        const nextX = x + 40 + Math.random() * 80;
        const midY = y + (Math.random() - 0.5) * 32;
        ctx.lineTo(nextX / 2 + (x + nextX) / 2, midY);
        ctx.lineTo(nextX, y);
        x = nextX;
      }
      ctx.stroke();
    }

    for (let x = 32; x < w; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      let y = 0;
      while (y < h) {
        const nextY = y + 40 + Math.random() * 80;
        const midX = x + (Math.random() - 0.5) * 32;
        ctx.lineTo(midX, nextY / 2 + (y + nextY) / 2);
        ctx.lineTo(x, nextY);
        y = nextY;
      }
      ctx.stroke();
    }

    ctx.strokeStyle = traceColors[1] || '#FF00FF';
    ctx.shadowColor = traceColors[1] || '#FF00FF';
    for (let i = 0; i < 5; i++) {
      const startX = (i * 100 + 50) % w;
      const startY = (i * 80 + 30) % h;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + 60, startY);
      ctx.lineTo(startX + 60, startY + 80);
      ctx.lineTo(startX + 120, startY + 80);
      ctx.stroke();
    }

    ctx.fillStyle = traceColors[0] || '#00FFFF';
    ctx.shadowBlur = 0;
    for (let x = 32; x < w; x += 64) {
      for (let y = 32; y < h; y += 64) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  private _drawFlamePattern(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    const gradient = ctx.createLinearGradient(0, h, 0, 0);
    gradient.addColorStop(0, colors[0] || '#FF4500');
    gradient.addColorStop(0.4, colors[1] || '#FF6600');
    gradient.addColorStop(0.7, colors[2] || '#FFD700');
    gradient.addColorStop(1, '#8B0000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    ctx.shadowBlur = 15;
    ctx.shadowColor = colors[2] || '#FFD700';

    for (let i = 0; i < 8; i++) {
      const x = (i * 70 + 30) % w;
      const baseWidth = 30 + Math.random() * 40;
      
      ctx.fillStyle = colors[3] || '#FF0000';
      ctx.beginPath();
      ctx.moveTo(x - baseWidth / 2, h);
      ctx.quadraticCurveTo(x - baseWidth / 4, h * 0.6, x, h * 0.2);
      ctx.quadraticCurveTo(x + baseWidth / 4, h * 0.6, x + baseWidth / 2, h);
      ctx.fill();
    }

    for (let i = 0; i < 6; i++) {
      const x = (i * 90 + 15) % w;
      const baseWidth = 20 + Math.random() * 30;
      
      ctx.fillStyle = colors[4] || '#FF8C00';
      ctx.beginPath();
      ctx.moveTo(x - baseWidth / 2, h);
      ctx.quadraticCurveTo(x - baseWidth / 4, h * 0.5, x + 10, h * 0.15);
      ctx.quadraticCurveTo(x + baseWidth / 3, h * 0.5, x + baseWidth / 2, h);
      ctx.fill();
    }

    for (let i = 0; i < 5; i++) {
      const x = (i * 110 + 60) % w;
      const baseWidth = 15 + Math.random() * 20;
      
      ctx.fillStyle = colors[2] || '#FFD700';
      ctx.beginPath();
      ctx.moveTo(x - baseWidth / 2, h);
      ctx.quadraticCurveTo(x, h * 0.4, x + 5, h * 0.1);
      ctx.quadraticCurveTo(x + baseWidth / 2, h * 0.4, x + baseWidth / 2, h);
      ctx.fill();
    }

    ctx.shadowBlur = 0;
  }

  private _drawFrostPattern(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, colors[0] || '#B0E0E6');
    gradient.addColorStop(0.5, colors[1] || '#87CEEB');
    gradient.addColorStop(1, colors[4] || '#ADD8E6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    const crystalColors = [colors[2] || '#FFFFFF', colors[3] || '#E0FFFF'];

    for (let i = 0; i < 15; i++) {
      const cx = (i * 37 + 20) % w;
      const cy = (i * 41 + 30) % h;
      const size = 15 + (i % 5) * 8;
      
      ctx.fillStyle = crystalColors[i % 2];
      ctx.beginPath();
      for (let j = 0; j < 6; j++) {
        const angle = (j / 6) * Math.PI * 2 - Math.PI / 2;
        const r = j % 2 === 0 ? size : size * 0.5;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + size * 1.5, cy + size * 0.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx - size, cy + size);
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = 1 + Math.random() * 2;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 10; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - 8, y);
      ctx.lineTo(x + 8, y);
      ctx.moveTo(x, y - 8);
      ctx.lineTo(x, y + 8);
      ctx.stroke();
    }
  }

  private _drawStarfield(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, colors[0] || '#1a1a2e');
    gradient.addColorStop(0.5, colors[1] || '#16213e');
    gradient.addColorStop(1, colors[2] || '#0f0f1a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    const starColors = [colors[3] || '#FFFFFF', colors[4] || '#E8E8E8'];
    
    for (let i = 0; i < 50; i++) {
      const x = ((i * 73 + 17) % w);
      const y = ((i * 97 + 31) % h);
      const size = 1 + (i % 4) * 0.8;
      const brightness = 0.3 + (i % 5) * 0.15;
      
      ctx.fillStyle = starColors[i % 2];
      ctx.globalAlpha = brightness;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 0.15;
    ctx.fillStyle = colors[3] || '#FFFFFF';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.4, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.6, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 1;
  }

  private _drawMetallicGold(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, colors[0] || '#FFD700');
    gradient.addColorStop(0.3, colors[1] || '#DAA520');
    gradient.addColorStop(0.5, colors[0] || '#FFD700');
    gradient.addColorStop(0.7, colors[2] || '#B8860B');
    gradient.addColorStop(1, colors[3] || '#FFA500');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 8; i++) {
      const y = (i * 35 + 10) % h;
      const waveHeight = 3 + (i % 3) * 2;
      
      ctx.strokeStyle = '#FFFFAA';
      ctx.lineWidth = 2 + (i % 3);
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x < w; x += 20) {
        ctx.quadraticCurveTo(x + 10, y - waveHeight, x + 20, y);
      }
      ctx.stroke();
    }

    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1;
    for (let x = 20; x < w; x += 30) {
      const offset = (x * 7) % 20 - 10;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + offset, h);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }

  private _drawPaperTexture(ctx: CanvasRenderingContext2D, colors: string[], w: number, h: number): void {
    ctx.fillStyle = colors[0] || '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    const seed = 54321;
    const random = (i: number) => {
      const x = Math.sin(seed + i * 7777) * 10000;
      return x - Math.floor(x);
    };

    ctx.fillStyle = colors[1] || '#F5F5F5';
    for (let i = 0; i < 800; i++) {
      const x = random(i * 2) * w;
      const y = random(i * 2 + 1) * h;
      const size = 0.5 + random(i) * 1.5;
      ctx.fillRect(x, y, size, size);
    }

    ctx.strokeStyle = 'rgba(220, 220, 215, 0.15)';
    ctx.lineWidth = 1;
    for (let y = 2; y < h; y += 4 + Math.random() * 3) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      let x = 0;
      while (x < w) {
        x += 20 + Math.random() * 40;
        ctx.lineTo(x, y + (Math.random() - 0.5) * 2);
      }
      ctx.stroke();
    }

    ctx.fillStyle = 'rgba(200, 200, 195, 0.1)';
    for (let i = 0; i < 30; i++) {
      const x = random(i * 3 + 100) * w;
      const y = random(i * 3 + 101) * h;
      ctx.beginPath();
      ctx.ellipse(x, y, 15 + random(i) * 25, 8 + random(i + 50) * 15, 0, 0, Math.PI * 2);
      ctx.fill();
    }
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

  jump(): void {
    if (this._isDead) return;
    this._jumpBufferTimer = JUMP_CONFIG.JUMP_BUFFER_TIME;
  }

  isJumping(): boolean {
    return this._isJumping;
  }

  getYPosition(): number {
    return this._mesh.position.y;
  }

  update(delta: number): void {
    if (this._isDead) {
      this._tpMesh.rotation.x += delta * 8;
      this._deathBounceVelocity -= delta * 12;
      this._mesh.position.y += this._deathBounceVelocity * delta;
      if (this._mesh.position.y < -0.5) this._mesh.position.y = -0.5;
      return;
    }

    this._currentX = THREE.MathUtils.lerp(this._currentX, this._targetX, LERP_SPEED * delta);
    this._mesh.position.x = this._currentX;

    if (this._isGrounded) {
      this._coyoteTimer = 0;
    } else {
      this._coyoteTimer += delta;
    }

    this._jumpBufferTimer = Math.max(0, this._jumpBufferTimer - delta);

    if (this._jumpBufferTimer > 0 && 
        (this._isGrounded || this._coyoteTimer < JUMP_CONFIG.COYOTE_TIME)) {
      this._velocityY = JUMP_CONFIG.JUMP_FORCE;
      this._isJumping = true;
      this._isGrounded = false;
      this._jumpBufferTimer = 0;
      this._coyoteTimer = JUMP_CONFIG.COYOTE_TIME;
    }

    this._velocityY -= JUMP_CONFIG.GRAVITY * delta;
    this._mesh.position.y += this._velocityY * delta;

    if (this._mesh.position.y <= GROUND_Y) {
      if (this._isJumping) {
        this._landSquashTimer = JUMP_CONFIG.LAND_SQUASH_DURATION;
        this._scaleY = JUMP_CONFIG.LAND_SQUASH_SCALE;
        this._scaleX = 1.2;
      }
      this._mesh.position.y = GROUND_Y;
      this._velocityY = 0;
      this._isJumping = false;
      this._isGrounded = true;
    }

    if (this._landSquashTimer > 0) {
      this._landSquashTimer -= delta;
      if (this._landSquashTimer <= 0) {
        this._landSquashTimer = 0;
      }
    }

    let yOffset = GROUND_Y;

    if (this._isChangingLanes) {
      if (Math.abs(this._currentX - this._targetX) < 0.05) {
        this._isChangingLanes = false;
      }
    }

    const dx = this._targetX - this._currentX;
    if (this._isChangingLanes && Math.abs(dx) > 0.05) {
      const targetTilt = -Math.sign(dx) * TILT_ANGLE;
      this._tiltAngle = THREE.MathUtils.lerp(this._tiltAngle, targetTilt, TILT_LERP_SPEED * delta);
    } else {
      this._tiltAngle = THREE.MathUtils.lerp(this._tiltAngle, 0, TILT_RETURN_SPEED * delta);
    }

    if (!this._isJumping) {
      this._scaleY = THREE.MathUtils.lerp(this._scaleY, 1, delta * 8);
      this._scaleX = THREE.MathUtils.lerp(this._scaleX, 1, delta * 8);
    } else {
      const jumpProgress = this._velocityY > 0 ? 0.5 : 0.5;
      const stretchFactor = 1 + Math.abs(this._velocityY) * 0.02;
      this._scaleY = THREE.MathUtils.lerp(this._scaleY, stretchFactor, delta * 5);
      this._scaleX = THREE.MathUtils.lerp(this._scaleX, 1 / stretchFactor, delta * 5);
    }

    let wobbleZ = 0;
    if (!this._isChangingLanes && !this._isJumping) {
      this._idleTime += delta;
      const wobbleSpeed = this._isNearObstacle ? NEAR_OBSTACLE_SPEED : IDLE_WOBBLE_SPEED;
      const wobbleAmp = this._isNearObstacle ? IDLE_WOBBLE_AMPLITUDE * 1.5 : IDLE_WOBBLE_AMPLITUDE;

      wobbleZ = Math.sin(this._idleTime * wobbleSpeed) * wobbleAmp;

      if (this._isNearObstacle) {
        yOffset += Math.sin(this._idleTime * 15) * 0.03;
      }
    }

    this._tpMesh.rotation.z = wobbleZ + this._tiltAngle;

    if (this._successBounce > 0.01) {
      yOffset += this._successBounce;
      this._successBounce *= 0.8;
      this._scaleY = 1 + this._successBounce * 2;
    }

    if (!this._isJumping) {
      this._mesh.position.y = yOffset;
    }

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
    this._isChangingLanes = false;
    this._isNearObstacle = false;
    this._successBounce = 0;
    this._idleTime = 0;
    this._scaleY = 1;
    this._scaleX = 1;
    this._tiltAngle = 0;
    this._isDead = false;
    this._deathBounceVelocity = 0;
    this._isJumping = false;
    this._isGrounded = true;
    this._velocityY = 0;
    this._coyoteTimer = 0;
    this._jumpBufferTimer = 0;
    this._landSquashTimer = 0;
    this._mesh.position.set(0, GROUND_Y, PLAYER_Z);
    this._tpMesh.rotation.set(0, 0, 0);
    this._mesh.scale.set(1, 1, 1);

    const savedSkinId = this._characterCustomization.getSelectedSkinId?.() || 'classic';
    this.updateSkin(savedSkinId);
  }
}
