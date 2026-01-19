import * as THREE from 'three';

export interface EmojiConfig {
  emoji: string;
  backgroundColor: string;
  scale: number;
}

export class EmojiTextureAtlas {
  private static canvas: HTMLCanvasElement;
  private static texture: THREE.CanvasTexture;
  private static emojiConfigs: EmojiConfig[] = [
    { emoji: '😠', backgroundColor: '#FFE4B5', scale: 1.0 },
    { emoji: '😫', backgroundColor: '#FFB6C1', scale: 0.9 },
    { emoji: '😤', backgroundColor: '#DDA0DD', scale: 1.1 },
    { emoji: '😡', backgroundColor: '#FF6347', scale: 1.0 },
    { emoji: '😱', backgroundColor: '#98FB98', scale: 0.95 }
  ];

  private static readonly EMOJI_SIZE = 128;
  private static readonly ATLAS_SIZE = this.EMOJI_SIZE * this.emojiConfigs.length;

  static initialize(): void {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.ATLAS_SIZE;
    this.canvas.height = this.ATLAS_SIZE;
    const ctx = this.canvas.getContext('2d')!;

    this.emojiConfigs.forEach((config, index) => {
      this.drawEmoji(ctx, config, index);
    });

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.magFilter = THREE.NearestFilter;
    this.texture.minFilter = THREE.NearestFilter;
  }

  private static drawEmoji(
    ctx: CanvasRenderingContext2D,
    config: EmojiConfig,
    index: number
  ): void {
    const x = index * this.EMOJI_SIZE;
    const y = 0;

    ctx.fillStyle = config.backgroundColor;
    ctx.beginPath();
    ctx.arc(
      x + this.EMOJI_SIZE / 2,
      y + this.EMOJI_SIZE / 2,
      this.EMOJI_SIZE / 2 * 0.9,
      0,
      Math.PI * 2
    );
    ctx.fill();

    ctx.font = `${this.EMOJI_SIZE * 0.6}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000000';
    ctx.fillText(
      config.emoji,
      x + this.EMOJI_SIZE / 2,
      y + this.EMOJI_SIZE / 2
    );
  }

  static getTexture(): THREE.CanvasTexture {
    return this.texture;
  }

  static getRandomConfig(): EmojiConfig {
    return this.emojiConfigs[
      Math.floor(Math.random() * this.emojiConfigs.length)
    ];
  }

  static getUVs(index: number): THREE.Vector2[] {
    const u = index / this.emojiConfigs.length;
    const uWidth = 1 / this.emojiConfigs.length;

    return [
      new THREE.Vector2(u, 0),
      new THREE.Vector2(u + uWidth, 0),
      new THREE.Vector2(u + uWidth, 1),
      new THREE.Vector2(u, 1)
    ];
  }
}
