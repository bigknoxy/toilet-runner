import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

interface PostProcessingConfig {
  enabled: boolean;
  bloom?: { strength: number; threshold: number; radius: number };
  fxaa?: boolean;
  vignette?: { offset: number; darkness: number };
}

export class PostProcessingManager {
  private composer: EffectComposer | null = null;
  private renderPass: RenderPass | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private fxaaPass: ShaderPass | null = null;
  private vignettePass: ShaderPass | null = null;
  private outputPass: OutputPass | null = null;

  constructor(
    private renderer: THREE.WebGLRenderer,
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera
  ) {}

  async initialize(config: PostProcessingConfig): Promise<void> {
    if (!config.enabled) return;

    const {
      EffectComposer: Composer
    } = await import('three/examples/jsm/postprocessing/EffectComposer.js');

    this.composer = new Composer(this.renderer);
    this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const {
      RenderPass
    } = await import('three/examples/jsm/postprocessing/RenderPass.js');

    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    if (config.bloom) {
      const { UnrealBloomPass } = await import(
        'three/examples/jsm/postprocessing/UnrealBloomPass.js'
      );

      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
      const bloomResolution = new THREE.Vector2(
        isMobile ? window.innerWidth * 0.5 : window.innerWidth,
        isMobile ? window.innerHeight * 0.5 : window.innerHeight
      );

      this.bloomPass = new UnrealBloomPass(
        bloomResolution,
        config.bloom.strength,
        config.bloom.radius,
        config.bloom.threshold
      );
      this.composer.addPass(this.bloomPass);
    }

    if (config.fxaa) {
      const { ShaderPass } = await import(
        'three/examples/jsm/postprocessing/ShaderPass.js'
      );

      const { FXAAShader } = await import(
        'three/examples/jsm/shaders/FXAAShader.js'
      );

      this.fxaaPass = new ShaderPass(FXAAShader);
      this.fxaaPass.uniforms['resolution'].value.set(
        1 / window.innerWidth,
        1 / window.innerHeight
      );
      this.composer.addPass(this.fxaaPass);
    }

    // Add vignette effect (desktop only for performance)
    if (config.vignette && !this.isMobile()) {
      this.vignettePass = new ShaderPass(VignetteShader);
      this.vignettePass.uniforms['offset'].value = config.vignette.offset;
      this.vignettePass.uniforms['darkness'].value = config.vignette.darkness;
      this.composer.addPass(this.vignettePass);
    }

    // Add output pass
    const { OutputPass } = await import('three/examples/jsm/postprocessing/OutputPass.js');
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);
  }

  render(): void {
    if (this.composer) {
      this.composer.render();
    }
  }

  resize(width: number, height: number): void {
    if (this.composer) {
      this.composer.setSize(width, height);
    }
    if (this.fxaaPass) {
      this.fxaaPass.uniforms['resolution'].value.set(1 / width, 1 / height);
    }
  }

  dispose(): void {
    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }
  }

  isEnabled(): boolean {
    return this.composer !== null;
  }

  private isMobile(): boolean {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}

// Vignette shader for post-processing effect
const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    offset: { value: 0.5 },
    darkness: { value: 0.3 }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float dist = distance(vUv, vec2(0.5, 0.5));
      float vignette = smoothstep(offset, offset - darkness, dist);
      color.rgb *= vignette;
      gl_FragColor = color;
    }
  `
};
