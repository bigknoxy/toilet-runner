import * as THREE from 'three';
import { PostProcessingManager } from '../game/visual/PostProcessingManager';

const PIXEL_RATIO_MAX = 2;

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private postProcessing: PostProcessingManager | null = null;

  constructor() {
    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
    this.setupLights();
  }

  private createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xE0F7FA, 0.012);
    return scene;
  }

  private createCamera(): THREE.PerspectiveCamera {
    const aspect = window.innerWidth / window.innerHeight;
    // Natural FOV (60°) for less distortion, better aesthetics
    const camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 200);
    // Higher camera vantage point (Y=2.8) to look down on player, further Z (6) for better world visibility
    camera.position.set(0, 2.8, 6);
    // Look higher above player (Y=2.5) to push player into lower third, 30 units ahead for obstacle preview
    camera.lookAt(0, 2.5, -30);
    return camera;
  }

  private createRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true
    });

    const pixelRatio = Math.min(window.devicePixelRatio, PIXEL_RATIO_MAX);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const canvasElement = document.getElementById('canvas');
    if (canvasElement) {
      canvasElement.appendChild(renderer.domElement);
    }

    return renderer;
  }

  private setupLights(): void {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    this.scene.add(directionalLight);

    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x362d1d, 0.3);
    this.scene.add(hemiLight);
  }

  setPostProcessing(postProcessing: PostProcessingManager): void {
    this.postProcessing = postProcessing;
  }

  getPostProcessing(): PostProcessingManager | null {
    return this.postProcessing;
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



  public render(): void {
    if (this.postProcessing && this.postProcessing.isEnabled()) {
      this.postProcessing.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  public resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    if (this.postProcessing) {
      this.postProcessing.resize(width, height);
    }
  }
}