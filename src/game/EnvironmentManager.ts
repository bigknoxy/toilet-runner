import * as THREE from 'three';

const LANE_WIDTH = 3;
const DECORATION_INTERVAL = 40;
const MAX_DECORATIONS = 20;
const SPAWN_DISTANCE = 80;

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
  private _decorations: Decoration[] = [];
  private _activeCount = 0;
  private _lastDecorationZ = 0;

  constructor(scene: THREE.Scene) {
    this._scene = scene;
    this._tileTexture = this.createTileTexture();
    this._toiletMesh = this.createToiletMesh();

    this.initializeDecorations();
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

  private initializeDecorations(): void {
    for (let i = 0; i < MAX_DECORATIONS; i++) {
      const decoration: Decoration = {
        mesh: this._toiletMesh.clone(),
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
    const laneX = side * (LANE_WIDTH * 2.5);
    const z = this._lastDecorationZ - DECORATION_INTERVAL;

    inactive.active = true;
    inactive.lane = side;
    inactive.z = z;

    inactive.mesh.position.set(laneX, 0, z);
    inactive.mesh.rotation.y = side === -1 ? Math.PI / 4 : -Math.PI / 4;
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
  }
}
