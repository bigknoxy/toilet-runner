import * as THREE from 'three';
import { PostProcessingManager } from '../game/visual/PostProcessingManager';

const PIXEL_RATIO_MAX = 2;

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private postProcessing: PostProcessingManager | null = null;
  private sky: THREE.Mesh | null = null;

  constructor() {
    this.scene = this.createScene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
    this.setupLights();
  }

  private createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    const fogColor = 0xffffff;
    scene.background = null;
    scene.fog = new THREE.Fog(fogColor, 20, 60);
    this.createSky(scene);
    return scene;
  }

  private createCamera(): THREE.PerspectiveCamera {
    const aspect = window.innerWidth / window.innerHeight;
    
    // Wider FOV on mobile for better lane visibility
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    const fov = isMobile ? 75 : 60; // 75° on mobile, 60° on desktop
    
    const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 200);
    // Higher camera vantage point (Y=2.8) to look down on player, further Z (6) for better world visibility
    camera.position.set(0, 2.8, 6);
    // Look higher above player (Y=2.5) to push player into lower third, 30 units ahead for obstacle preview
    camera.lookAt(0, 2.5, -30);
    return camera;
  }

  private createRenderer(): THREE.WebGLRenderer {
    const fogColor = 0xffffff;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
      clearColor: fogColor
    });
    renderer.setClearColor(fogColor, 1);

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

    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x362d1d, 0.3);
    this.scene.add(hemiLight);
  }

  private createSky(scene: THREE.Scene): void {
    const skyGeometry = new THREE.SphereGeometry(100, 32, 32);
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x0077ff) },
        bottomColor: { value: new THREE.Color(0xffffff) },
        offset: { value: 33 },
        exponent: { value: 0.6 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        
        void main() {
          vWorldPosition = modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * vWorldPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        
        void main() {
          float h = normalize(vWorldPosition + vec3(0, offset, 0)).y;
          vec3 color = mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.BackSide
    });

    this.sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(this.sky);
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