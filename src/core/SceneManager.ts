import * as THREE from 'three';

const PIXEL_RATIO_MAX = 2;

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private postProcessing: any = null;
  private _contextLost = false;

  constructor() {
    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
    this.setupLights();
    this.setupContextLossHandling();
  }

  private createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x87CEEB, 30, 120);
    return scene;
  }

  private createCamera(): THREE.PerspectiveCamera {
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 200);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, -10);
    return camera;
  }

  private createRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true
    });
    renderer.setClearColor(0x87CEEB, 1);

    const pixelRatio = Math.min(window.devicePixelRatio, PIXEL_RATIO_MAX);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const canvasElement = document.getElementById('canvas');
    if (canvasElement) {
      canvasElement.appendChild(renderer.domElement);
    }

    return renderer;
  }

  private setupContextLossHandling(): void {
    const canvas = this.renderer.domElement;

    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      this._contextLost = true;
      this.showContextLostOverlay();
    });

    canvas.addEventListener('webglcontextrestored', () => {
      this._contextLost = false;
      this.hideContextLostOverlay();
    });
  }

  private showContextLostOverlay(): void {
    let overlay = document.getElementById('webgl-context-lost');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'webgl-context-lost';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:10000;';
      overlay.innerHTML = `
        <div style="text-align:center;color:#fff;font-family:Poppins,sans-serif;">
          <h2 style="color:#ffa500;">Graphics Context Lost</h2>
          <p style="color:#ccc;margin-top:12px;">The game's graphics were interrupted.</p>
          <p style="color:#999;margin-top:8px;">Waiting for recovery... If this persists, refresh the page.</p>
        </div>`;
      document.body.appendChild(overlay);
    }
    overlay.style.display = 'flex';
  }

  private hideContextLostOverlay(): void {
    const overlay = document.getElementById('webgl-context-lost');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }

  private setupLights(): void {
    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0xFFE4C4, 0.7);
    this.scene.add(hemiLight);

    const directionalLight = new THREE.DirectionalLight(0xFFF8DC, 0.6);
    directionalLight.position.set(5, 10, 5);
    this.scene.add(directionalLight);
  }

  public getScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (this.postProcessing && this.postProcessing.resize) {
      this.postProcessing.resize(width, height);
    }
  }

  public setPostProcessing(postProcessing: any): void {
    this.postProcessing = postProcessing;
  }

  public render(): void {
    if (this._contextLost) return;

    if (this.postProcessing && this.postProcessing.isEnabled()) {
      this.postProcessing.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
