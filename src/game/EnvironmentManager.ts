import * as THREE from 'three';

const DECORATION_INTERVAL = 40;
const MAX_DECORATIONS = 20;
const SPAWN_DISTANCE = 80;

const GRAFFITI_COLORS = ['#8B5E3C', '#4A90D9', '#D94A4A', '#FF69B4', '#9B59B6'];
const GRAFFITI_PHRASES = [
  'FLUSH THE COMPETITION', 'TP WAS HERE', 'WIPE OUT!', 'NO.1 RUNNER',
  'PAPER BEATS ROCK', 'THIS GAME STINKS ;)', 'SIT DOWN. BE HUMBLE.', 'PLUNGER WAS HERE'
];

interface Decoration {
  mesh: THREE.Group;
  active: boolean;
  z: number;
  lane: number;
}

export class EnvironmentManager {
  private _scene: THREE.Scene;
  private _tileTexture: THREE.CanvasTexture;
  private _toiletMesh: THREE.Group;
  private _urinalMesh: THREE.Group;
  private _sinkMesh: THREE.Group;
  private _decorations: Decoration[] = [];
  private _activeCount = 0;
  private _lastDecorationZ = 0;
  private _leftWall: THREE.Mesh | null = null;
  private _rightWall: THREE.Mesh | null = null;
  private _wallScrollOffset = 0;

  constructor(scene: THREE.Scene) {
    this._scene = scene;
    this._tileTexture = this.createTileTexture();
    this._toiletMesh = this.createToiletMesh();
    this._urinalMesh = this.createUrinalMesh();
    this._sinkMesh = this.createSinkMesh();

    this.initializeDecorations();
    this.createWalls();
  }

  private createTileTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Warm cream base
    ctx.fillStyle = '#FFFAF0';
    ctx.fillRect(0, 0, 512, 512);

    const tileSize = 64;
    const pastelColors = ['#B5D8F7', '#F7C5D0', '#C5E8C5', '#FFF3B5'];

    // Scatter ~15% pastel accent tiles
    for (let x = 0; x < 512; x += tileSize) {
      for (let y = 0; y < 512; y += tileSize) {
        if (Math.random() < 0.15) {
          ctx.fillStyle = pastelColors[Math.floor(Math.random() * pastelColors.length)];
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
        }
      }
    }

    // Warm beige grout lines
    ctx.strokeStyle = '#E8DDD0';
    ctx.lineWidth = 3;

    for (let x = 0; x <= 512; x += tileSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }

    for (let y = 0; y <= 512; y += tileSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.needsUpdate = true;

    return texture;
  }

  private createWallTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Warm cream base
    ctx.fillStyle = '#FFFAF0';
    ctx.fillRect(0, 0, 1024, 1024);

    const tileSize = 48;
    const pastelColors = ['#B5D8F7', '#F7C5D0', '#C5E8C5', '#FFF3B5', '#E8D0F7'];

    // Scatter ~15% pastel accent tiles
    for (let x = 0; x < 1024; x += tileSize) {
      for (let y = 0; y < 1024; y += tileSize) {
        if (Math.random() < 0.15) {
          ctx.fillStyle = pastelColors[Math.floor(Math.random() * pastelColors.length)];
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
        }
      }
    }

    // Warm beige grout lines
    ctx.strokeStyle = '#E8DDD0';
    ctx.lineWidth = 3;

    for (let x = 0; x <= 1024; x += tileSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }

    for (let y = 0; y <= 1024; y += tileSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Draw graffiti on top
    this.drawGraffiti(ctx, 1024);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;

    return texture;
  }

  private drawGraffiti(ctx: CanvasRenderingContext2D, size: number): void {
    const count = 10 + Math.floor(Math.random() * 5); // 10-14 elements

    for (let i = 0; i < count; i++) {
      const x = 100 + Math.random() * (size - 200);
      const y = 100 + Math.random() * (size - 200);
      const rotation = (Math.random() - 0.5) * 0.4; // slight random tilt
      const color = GRAFFITI_COLORS[Math.floor(Math.random() * GRAFFITI_COLORS.length)];

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      if (Math.random() < 0.6) {
        // Text graffiti
        const phrase = GRAFFITI_PHRASES[Math.floor(Math.random() * GRAFFITI_PHRASES.length)];
        const fontSize = 60 + Math.floor(Math.random() * 60);
        ctx.font = `bold ${fontSize}px "Comic Sans MS", cursive`;
        ctx.globalAlpha = 0.7 + Math.random() * 0.3;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.lineWidth = 4;
        ctx.strokeText(phrase, 0, 0);
        ctx.fillStyle = color;
        ctx.fillText(phrase, 0, 0);
      } else {
        // Doodle
        ctx.globalAlpha = 0.7 + Math.random() * 0.3;
        this.drawRandomDoodle(ctx, color);
      }

      ctx.restore();
    }
  }

  private drawRandomDoodle(ctx: CanvasRenderingContext2D, color: string): void {
    const type = Math.floor(Math.random() * 4);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 6;

    switch (type) {
      case 0: // Heart
        ctx.beginPath();
        ctx.moveTo(0, -25);
        ctx.bezierCurveTo(-50, -75, -100, 0, 0, 62);
        ctx.moveTo(0, -25);
        ctx.bezierCurveTo(50, -75, 100, 0, 0, 62);
        ctx.stroke();
        break;
      case 1: // Poop coil
        ctx.beginPath();
        ctx.arc(0, 25, 38, 0, Math.PI, false);
        ctx.arc(12, 25, 25, Math.PI, 0, false);
        ctx.arc(0, 25, 12, 0, Math.PI, false);
        ctx.moveTo(0, -12);
        ctx.lineTo(5, -25);
        ctx.stroke();
        break;
      case 2: // Plunger
        ctx.fillRect(-7, -62, 15, 75);
        ctx.beginPath();
        ctx.arc(0, 12, 30, 0, Math.PI);
        ctx.fill();
        break;
      case 3: // Star
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const outerAngle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
          const innerAngle = outerAngle + (2 * Math.PI) / 10;
          const ox = Math.cos(outerAngle) * 50;
          const oy = Math.sin(outerAngle) * 50;
          const ix = Math.cos(innerAngle) * 20;
          const iy = Math.sin(innerAngle) * 20;
          if (i === 0) ctx.moveTo(ox, oy);
          else ctx.lineTo(ox, oy);
          ctx.lineTo(ix, iy);
        }
        ctx.closePath();
        ctx.stroke();
        break;
    }
  }

  private createWalls(): void {
    const wallLength = 120;
    const wallHeight = 6;
    const geometry = new THREE.PlaneGeometry(wallLength, wallHeight);

    // Left wall
    const leftTexture = this.createWallTexture();
    leftTexture.repeat.set(12, 1.2);
    const leftMaterial = new THREE.MeshLambertMaterial({ map: leftTexture });
    this._leftWall = new THREE.Mesh(geometry, leftMaterial);
    this._leftWall.position.set(-8.5, 3, -30);
    this._leftWall.rotation.y = Math.PI / 2;
    this._scene.add(this._leftWall);

    // Right wall (separate texture for different graffiti)
    const rightTexture = this.createWallTexture();
    rightTexture.repeat.set(12, 1.2);
    const rightMaterial = new THREE.MeshLambertMaterial({ map: rightTexture });
    this._rightWall = new THREE.Mesh(geometry, rightMaterial);
    this._rightWall.position.set(8.5, 3, -30);
    this._rightWall.rotation.y = -Math.PI / 2;
    this._scene.add(this._rightWall);
  }

  private createToiletMesh(): THREE.Group {
    const toiletGroup = new THREE.Group();
    const material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

    const tankGeometry = new THREE.BoxGeometry(1.2, 0.9, 0.45);
    const tank = new THREE.Mesh(tankGeometry, material);
    tank.position.set(0, 0.95, -0.45);
    toiletGroup.add(tank);

    const bowlGeometry = new THREE.CylinderGeometry(0.85, 0.65, 0.6, 12);
    const bowl = new THREE.Mesh(bowlGeometry, material);
    bowl.position.y = 0.3;
    toiletGroup.add(bowl);

    const seatGeometry = new THREE.TorusGeometry(0.85, 0.12, 8, 16, Math.PI);
    const seatMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFF0 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.position.set(0, 0.58, 0);
    seat.rotation.x = Math.PI / 2;
    toiletGroup.add(seat);

    const lidGeometry = new THREE.CylinderGeometry(0.9, 0.9, 0.08, 12);
    const lid = new THREE.Mesh(lidGeometry, seatMaterial);
    lid.position.set(0, 0.75, 0);
    toiletGroup.add(lid);

    const baseGeometry = new THREE.CylinderGeometry(0.5, 0.6, 0.15, 12);
    const base = new THREE.Mesh(baseGeometry, material);
    base.position.y = 0.075;
    toiletGroup.add(base);

    toiletGroup.scale.setScalar(0.8);

    return toiletGroup;
  }

  private createUrinalMesh(): THREE.Group {
    const group = new THREE.Group();
    const white = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const chrome = new THREE.MeshLambertMaterial({ color: 0xC0C0C0 });

    // Back plate
    const backplate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 0.1), white);
    backplate.position.set(0, 0.8, -0.35);
    group.add(backplate);

    // Basin
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.7, 10), white);
    basin.position.set(0, 0.5, -0.1);
    group.add(basin);

    // Flush pipe
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6), chrome);
    pipe.position.set(0, 1.6, -0.3);
    group.add(pipe);

    // Flush handle
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.06, 0.06), chrome);
    handle.position.set(0.12, 1.55, -0.3);
    group.add(handle);

    group.scale.setScalar(0.8);
    return group;
  }

  private createSinkMesh(): THREE.Group {
    const group = new THREE.Group();
    const white = new THREE.MeshLambertMaterial({ color: 0xF5F5F5 });
    const chrome = new THREE.MeshLambertMaterial({ color: 0xC0C0C0 });

    // Basin
    const basin = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.2, 0.6), white);
    basin.position.set(0, 0.75, 0);
    group.add(basin);

    // Pedestal
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.7, 8), white);
    pedestal.position.set(0, 0.35, 0);
    group.add(pedestal);

    // Faucet
    const faucetBase = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.25, 6), chrome);
    faucetBase.position.set(0, 0.97, -0.15);
    group.add(faucetBase);

    // Faucet spout
    const spout = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.15), chrome);
    spout.position.set(0, 1.08, -0.05);
    group.add(spout);

    group.scale.setScalar(0.8);
    return group;
  }

  private getRandomDecoration(): THREE.Group {
    const roll = Math.random();
    if (roll < 0.5) return this._toiletMesh.clone();
    if (roll < 0.8) return this._urinalMesh.clone();
    return this._sinkMesh.clone();
  }

  private initializeDecorations(): void {
    for (let i = 0; i < MAX_DECORATIONS; i++) {
      const decoration: Decoration = {
        mesh: this.getRandomDecoration(),
        active: false,
        z: 0,
        lane: 0
      };
      this._scene.add(decoration.mesh);
      decoration.mesh.visible = false;
      this._decorations.push(decoration);
    }

    for (let i = 0; i < 6; i++) {
      this.spawnDecoration();
    }
  }

  private spawnDecoration(): void {
    const inactive = this._decorations.find(d => !d.active);
    if (!inactive) return;

    const side = Math.random() < 0.5 ? -1 : 1;
    const laneX = side * 7.0;
    const z = this._lastDecorationZ - DECORATION_INTERVAL;

    inactive.active = true;
    inactive.lane = side;
    inactive.z = z;

    inactive.mesh.position.set(laneX, 0, z);
    inactive.mesh.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
    inactive.mesh.visible = true;

    this._activeCount++;
    this._lastDecorationZ = z;
  }

  update(delta: number, speed: number): void {
    for (const deco of this._decorations) {
      if (!deco.active) continue;

      deco.z += speed * delta;
      deco.mesh.position.z = deco.z;

      if (deco.z > 20) {
        this.despawnDecoration(deco);
      }
    }

    if (this._lastDecorationZ > -SPAWN_DISTANCE) {
      this.spawnDecoration();
    }

    // Scroll wall textures
    this._wallScrollOffset += speed * delta;
    const wallOffset = this._wallScrollOffset / 10;
    if (this._leftWall) {
      const leftTex = (this._leftWall.material as THREE.MeshLambertMaterial).map;
      if (leftTex) leftTex.offset.x = wallOffset;
    }
    if (this._rightWall) {
      const rightTex = (this._rightWall.material as THREE.MeshLambertMaterial).map;
      if (rightTex) rightTex.offset.x = -wallOffset;
    }
  }

  private despawnDecoration(decoration: Decoration): void {
    decoration.active = false;
    this._activeCount--;
    decoration.mesh.visible = false;
    decoration.mesh.position.set(0, -100, 0);
  }

  getTileTexture(): THREE.CanvasTexture {
    return this._tileTexture;
  }

  reset(): void {
    for (const deco of this._decorations) {
      if (deco.active) {
        this.despawnDecoration(deco);
      }
    }
    this._activeCount = 0;
    this._lastDecorationZ = 0;

    for (let i = 0; i < 6; i++) {
      this.spawnDecoration();
    }

    this._wallScrollOffset = 0;
    if (this._leftWall) {
      const leftTex = (this._leftWall.material as THREE.MeshLambertMaterial).map;
      if (leftTex) leftTex.offset.x = 0;
    }
    if (this._rightWall) {
      const rightTex = (this._rightWall.material as THREE.MeshLambertMaterial).map;
      if (rightTex) rightTex.offset.x = 0;
    }
  }

  dispose(): void {
    if (this._leftWall) {
      this._scene.remove(this._leftWall);
      this._leftWall.geometry.dispose();
      (this._leftWall.material as THREE.Material).dispose();
    }
    if (this._rightWall) {
      this._scene.remove(this._rightWall);
      this._rightWall.geometry.dispose();
      (this._rightWall.material as THREE.Material).dispose();
    }
  }
}
