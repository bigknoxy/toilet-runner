import * as THREE from 'three';

export type ExpressionType = 'angry' | 'mischievous' | 'surprised' | 'sleepy';

export interface FaceConfig {
  expression: ExpressionType;
  backgroundColor: string;
}

export class EmojiTextureAtlas {
  private static canvas: HTMLCanvasElement;
  private static texture: THREE.CanvasTexture;
  private static faceConfigs: FaceConfig[] = [
    { expression: 'angry', backgroundColor: '#8B4513' },
    { expression: 'mischievous', backgroundColor: '#6B4423' },
    { expression: 'surprised', backgroundColor: '#A0522D' },
    { expression: 'sleepy', backgroundColor: '#5D4037' }
  ];

  private static readonly FACE_SIZE = 128;
  private static readonly ATLAS_SIZE = this.FACE_SIZE * this.faceConfigs.length;

  static initialize(): void {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.ATLAS_SIZE;
    this.canvas.height = this.FACE_SIZE;
    const ctx = this.canvas.getContext('2d')!;

    this.faceConfigs.forEach((config, index) => {
      this.drawCartoonFace(ctx, config, index);
    });

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.minFilter = THREE.NearestFilter;
  }

  private static drawCartoonFace(
    ctx: CanvasRenderingContext2D,
    config: FaceConfig,
    index: number
  ): void {
    const cx = index * this.FACE_SIZE + this.FACE_SIZE / 2;
    const cy = this.FACE_SIZE / 2;
    const radius = this.FACE_SIZE / 2 * 0.9;

    // Draw background circle (poop brown base)
    ctx.fillStyle = config.backgroundColor;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    // Add subtle gradient shading to the face
    const gradient = ctx.createRadialGradient(
      cx - radius * 0.3, cy - radius * 0.3, 0,
      cx, cy, radius
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw expression-specific features
    switch (config.expression) {
      case 'angry':
        this.drawAngryFace(ctx, cx, cy, radius);
        break;
      case 'mischievous':
        this.drawMischievousFace(ctx, cx, cy, radius);
        break;
      case 'surprised':
        this.drawSurprisedFace(ctx, cx, cy, radius);
        break;
      case 'sleepy':
        this.drawSleepyFace(ctx, cx, cy, radius);
        break;
    }
  }

  private static drawAngryFace(ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number): void {
    const eyeY = cy - radius * 0.1;
    const eyeSpacing = radius * 0.35;
    const eyeWidth = radius * 0.2;
    const eyeHeight = radius * 0.25;

    // Left eye - narrowed/angry
    this.drawEye(ctx, cx - eyeSpacing, eyeY, eyeWidth, eyeHeight * 0.7);
    // Right eye - narrowed/angry
    this.drawEye(ctx, cx + eyeSpacing, eyeY, eyeWidth, eyeHeight * 0.7);

    // Angry pupils - slightly smaller
    this.drawPupil(ctx, cx - eyeSpacing, eyeY, eyeWidth * 0.4, eyeHeight * 0.35);
    this.drawPupil(ctx, cx + eyeSpacing, eyeY, eyeWidth * 0.4, eyeHeight * 0.35);

    // Angry eyebrows - furrowed and angled inward
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.08;
    ctx.lineCap = 'round';

    // Left eyebrow - angled down inward
    ctx.beginPath();
    ctx.moveTo(cx - eyeSpacing - eyeWidth, eyeY - eyeHeight - radius * 0.15);
    ctx.lineTo(cx - eyeSpacing + eyeWidth * 0.3, eyeY - eyeHeight - radius * 0.05);
    ctx.stroke();

    // Right eyebrow - angled down inward
    ctx.beginPath();
    ctx.moveTo(cx + eyeSpacing + eyeWidth, eyeY - eyeHeight - radius * 0.15);
    ctx.lineTo(cx + eyeSpacing - eyeWidth * 0.3, eyeY - eyeHeight - radius * 0.05);
    ctx.stroke();

    // Sharp frown mouth
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.06;
    ctx.beginPath();
    ctx.moveTo(cx - radius * 0.25, cy + radius * 0.45);
    ctx.quadraticCurveTo(cx, cy + radius * 0.35, cx + radius * 0.25, cy + radius * 0.45);
    ctx.stroke();

    // Rosy cheeks (angry flush)
    ctx.fillStyle = 'rgba(255, 100, 100, 0.4)';
    ctx.beginPath();
    ctx.arc(cx - radius * 0.5, cy + radius * 0.15, radius * 0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + radius * 0.5, cy + radius * 0.15, radius * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // Sweat drops (stress)
    ctx.fillStyle = 'rgba(135, 206, 250, 0.8)';
    this.drawTeardrop(ctx, cx + radius * 0.55, cy - radius * 0.35, radius * 0.08);
    this.drawTeardrop(ctx, cx - radius * 0.6, cy - radius * 0.2, radius * 0.06);
  }

  private static drawMischievousFace(ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number): void {
    const eyeY = cy - radius * 0.1;
    const eyeSpacing = radius * 0.35;
    const eyeWidth = radius * 0.2;
    const eyeHeight = radius * 0.25;

    // Left eye - winking
    this.drawEye(ctx, cx - eyeSpacing, eyeY, eyeWidth, eyeHeight * 0.5);
    // Draw wink line
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.06;
    ctx.beginPath();
    ctx.moveTo(cx - eyeSpacing - eyeWidth * 0.8, eyeY);
    ctx.lineTo(cx - eyeSpacing + eyeWidth * 0.8, eyeY);
    ctx.stroke();

    // Right eye - normal but slightly larger (raised eyebrow effect)
    this.drawEye(ctx, cx + eyeSpacing, eyeY, eyeWidth * 1.1, eyeHeight * 1.1);
    // Right pupil - looking to the side (mischievous)
    this.drawPupil(ctx, cx + eyeSpacing + eyeWidth * 0.15, eyeY, eyeWidth * 0.4, eyeHeight * 0.4);

    // Raised eyebrow on right side
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.07;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx + eyeSpacing - eyeWidth, eyeY - eyeHeight - radius * 0.2);
    ctx.quadraticCurveTo(cx + eyeSpacing, eyeY - eyeHeight - radius * 0.35, cx + eyeSpacing + eyeWidth * 0.5, eyeY - eyeHeight - radius * 0.2);
    ctx.stroke();

    // Crooked smirk
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.06;
    ctx.beginPath();
    ctx.moveTo(cx - radius * 0.2, cy + radius * 0.38);
    ctx.quadraticCurveTo(cx, cy + radius * 0.42, cx + radius * 0.25, cy + radius * 0.32);
    ctx.stroke();

    // Small dimple
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(cx + radius * 0.28, cy + radius * 0.35, radius * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // Rosy cheeks
    ctx.fillStyle = 'rgba(255, 150, 150, 0.35)';
    ctx.beginPath();
    ctx.arc(cx - radius * 0.5, cy + radius * 0.12, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + radius * 0.5, cy + radius * 0.12, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawSurprisedFace(ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number): void {
    const eyeY = cy - radius * 0.15;
    const eyeSpacing = radius * 0.35;
    const eyeWidth = radius * 0.25;
    const eyeHeight = radius * 0.28;

    // Wide eyes
    this.drawEye(ctx, cx - eyeSpacing, eyeY, eyeWidth, eyeHeight);
    this.drawEye(ctx, cx + eyeSpacing, eyeY, eyeWidth, eyeHeight);

    // Small pupils (shock)
    this.drawPupil(ctx, cx - eyeSpacing, eyeY, eyeWidth * 0.25, eyeHeight * 0.25);
    this.drawPupil(ctx, cx + eyeSpacing, eyeY, eyeWidth * 0.25, eyeHeight * 0.25);

    // Raised eyebrows (high surprise)
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.06;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(cx - eyeSpacing - eyeWidth * 0.8, eyeY - eyeHeight - radius * 0.25);
    ctx.quadraticCurveTo(cx - eyeSpacing, eyeY - eyeHeight - radius * 0.4, cx - eyeSpacing + eyeWidth * 0.8, eyeY - eyeHeight - radius * 0.3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx + eyeSpacing - eyeWidth * 0.8, eyeY - eyeHeight - radius * 0.25);
    ctx.quadraticCurveTo(cx + eyeSpacing, eyeY - eyeHeight - radius * 0.4, cx + eyeSpacing + eyeWidth * 0.8, eyeY - eyeHeight - radius * 0.3);
    ctx.stroke();

    // O-shaped open mouth
    ctx.fillStyle = '#2D1810';
    ctx.beginPath();
    ctx.ellipse(cx, cy + radius * 0.4, radius * 0.18, radius * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tongue inside mouth
    ctx.fillStyle = '#FF6B8A';
    ctx.beginPath();
    ctx.ellipse(cx, cy + radius * 0.48, radius * 0.1, radius * 0.08, 0, 0, Math.PI);
    ctx.fill();

    // Small rosy cheeks
    ctx.fillStyle = 'rgba(255, 180, 180, 0.3)';
    ctx.beginPath();
    ctx.arc(cx - radius * 0.5, cy + radius * 0.08, radius * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + radius * 0.5, cy + radius * 0.08, radius * 0.08, 0, Math.PI * 2);
    ctx.fill();
  }

  private static drawSleepyFace(ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number): void {
    const eyeY = cy - radius * 0.05;
    const eyeSpacing = radius * 0.35;
    const eyeWidth = radius * 0.22;
    const eyeHeight = radius * 0.15;

    // Half-closed droopy eyes (drawn as curved lines)
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.06;
    ctx.lineCap = 'round';

    // Left eye - heavy lid
    ctx.beginPath();
    ctx.ellipse(cx - eyeSpacing, eyeY, eyeWidth, eyeHeight, 0, 0, Math.PI);
    ctx.stroke();
    // Eyelid line above
    ctx.beginPath();
    ctx.moveTo(cx - eyeSpacing - eyeWidth, eyeY - eyeHeight * 0.8);
    ctx.quadraticCurveTo(cx - eyeSpacing, eyeY - eyeHeight * 1.5, cx - eyeSpacing + eyeWidth, eyeY - eyeHeight * 0.8);
    ctx.stroke();

    // Right eye - heavy lid
    ctx.beginPath();
    ctx.ellipse(cx + eyeSpacing, eyeY, eyeWidth, eyeHeight, 0, 0, Math.PI);
    ctx.stroke();
    // Eyelid line above
    ctx.beginPath();
    ctx.moveTo(cx + eyeSpacing - eyeWidth, eyeY - eyeHeight * 0.8);
    ctx.quadraticCurveTo(cx + eyeSpacing, eyeY - eyeHeight * 1.5, cx + eyeSpacing + eyeWidth, eyeY - eyeHeight * 0.8);
    ctx.stroke();

    // Small sleep pupils (barely visible)
    ctx.fillStyle = '#2D1810';
    ctx.beginPath();
    ctx.arc(cx - eyeSpacing, eyeY + eyeHeight * 0.3, eyeWidth * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + eyeSpacing, eyeY + eyeHeight * 0.3, eyeWidth * 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Small flat/small mouth
    ctx.strokeStyle = '#2D1810';
    ctx.lineWidth = radius * 0.05;
    ctx.beginPath();
    ctx.moveTo(cx - radius * 0.12, cy + radius * 0.4);
    ctx.lineTo(cx + radius * 0.12, cy + radius * 0.4);
    ctx.stroke();

    // Zzz bubble
    ctx.fillStyle = 'rgba(135, 206, 250, 0.7)';
    ctx.strokeStyle = 'rgba(70, 130, 180, 0.8)';
    ctx.lineWidth = radius * 0.03;

    // First Z
    this.drawZ(ctx, cx + radius * 0.5, cy - radius * 0.3, radius * 0.15);
    // Second Z (larger)
    this.drawZ(ctx, cx + radius * 0.7, cy - radius * 0.55, radius * 0.2);
    // Third Z (largest)
    this.drawZ(ctx, cx + radius * 0.9, cy - radius * 0.85, radius * 0.25);

    // Slight rosy cheeks (peaceful)
    ctx.fillStyle = 'rgba(255, 180, 180, 0.25)';
    ctx.beginPath();
    ctx.arc(cx - radius * 0.5, cy + radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx + radius * 0.5, cy + radius * 0.1, radius * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }

  // Helper: Draw an eye with white oval and subtle gradient
  private static drawEye(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void {
    // White of eye
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
    ctx.fill();

    // Subtle gradient shading
    const gradient = ctx.createRadialGradient(
      x - w * 0.3, y - h * 0.3, 0,
      x, y, Math.max(w, h)
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(240, 240, 250, 0.3)');
    gradient.addColorStop(1, 'rgba(200, 200, 210, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Eye outline
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Helper: Draw a pupil with highlight
  private static drawPupil(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void {
    // Black pupil
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
    ctx.fill();

    // White highlight dot
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x - w * 0.3, y - h * 0.3, w * 0.35, 0, Math.PI * 2);
    ctx.fill();
  }

  // Helper: Draw a teardrop/sweat drop shape
  private static drawTeardrop(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.bezierCurveTo(
      x + size, y - size * 0.3,
      x + size, y + size * 0.5,
      x, y + size
    );
    ctx.bezierCurveTo(
      x - size, y + size * 0.5,
      x - size, y - size * 0.3,
      x, y - size
    );
    ctx.fill();
  }

  // Helper: Draw Z letter for sleep
  private static drawZ(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    ctx.beginPath();
    ctx.moveTo(x - size * 0.4, y - size * 0.4);
    ctx.lineTo(x + size * 0.4, y - size * 0.4);
    ctx.lineTo(x - size * 0.4, y + size * 0.4);
    ctx.lineTo(x + size * 0.4, y + size * 0.4);
    ctx.stroke();
  }

  static getTexture(): THREE.CanvasTexture {
    return this.texture;
  }

  static getRandomConfig(): FaceConfig {
    return this.faceConfigs[
      Math.floor(Math.random() * this.faceConfigs.length)
    ];
  }

  static getExpressionIndex(expression: ExpressionType): number {
    return this.faceConfigs.findIndex(c => c.expression === expression);
  }

  static getUVs(index: number): THREE.Vector2[] {
    const u = index / this.faceConfigs.length;
    const uWidth = 1 / this.faceConfigs.length;

    return [
      new THREE.Vector2(u, 0),
      new THREE.Vector2(u + uWidth, 0),
      new THREE.Vector2(u + uWidth, 1),
      new THREE.Vector2(u, 1)
    ];
  }
}
