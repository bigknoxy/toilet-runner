import * as THREE from 'three';
import { UIManager } from '../ui/UIManager';

const INTRO_DURATION = 4.8;

interface IntroCallbacks {
  onComplete: () => void;
  onFadeInComplete?: () => void;
}

export class IntroSequence {
  private _camera: THREE.PerspectiveCamera;
  private _scene: THREE.Scene;
  private _ui: UIManager;
  private _callbacks: IntroCallbacks;
  private _elapsed: number = 0;
  private _isPlaying: boolean = false;
  private _originalCameraPosition: THREE.Vector3;
  private _originalCameraLookAt: THREE.Vector3;
  private _logoMesh: THREE.Mesh | null = null;
  private _particleSystem: THREE.Points | null = null;

  constructor(camera: THREE.PerspectiveCamera, scene: THREE.Scene, ui: UIManager) {
    this._camera = camera;
    this._scene = scene;
    this._ui = ui;
    this._originalCameraPosition = camera.position.clone();
    this._originalCameraLookAt = new THREE.Vector3(0, 1.5, -30);
  }

  start(callbacks: IntroCallbacks): void {
    this._callbacks = callbacks;
    this._elapsed = 0;
    this._isPlaying = true;

    this._ui.showIntroOverlay();
    this._ui.updateIntroProgress(0);

    this._createLogo();
    this._createParticles();

    this._animate();
  }

  private _createLogo(): void {
    const logoGeometry = new THREE.PlaneGeometry(8, 4);
    const logoMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide
    });

    this._logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
    this._logoMesh.position.set(0, 3, -10);
    this._scene.add(this._logoMesh);
  }

  private _createParticles(): void {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 15;
      positions[i * 3 + 2] = -15 + Math.random() * 10;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.1 + 0.05, 1, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0
    });

    this._particleSystem = new THREE.Points(geometry, material);
    this._scene.add(this._particleSystem);
  }

  private _animate(): void {
    if (!this._isPlaying) return;

    this._elapsed += 0.016;
    const progress = Math.min(this._elapsed / INTRO_DURATION, 1);
    this._ui.updateIntroProgress(progress * 100);

    if (progress < 0.1) {
      this._phaseFadeIn();
    } else if (progress < 0.35) {
      this._phaseCameraFlyover();
    } else if (progress < 0.55) {
      this._phaseCameraSwoop();
    } else if (progress < 0.75) {
      this._phaseLogoBounce();
    } else if (progress < 0.85) {
      this._phaseParticleExplosion();
    } else if (progress < 0.95) {
      this._phaseTapPrompt();
    } else {
      this._phaseComplete();
      return;
    }

    requestAnimationFrame(() => this._animate());
  }

  private _phaseFadeIn(): void {
    const t = this._elapsed / 0.5;
    this._ui.setIntroOpacity(Math.min(t, 1));
  }

  private _phaseCameraFlyover(): void {
    const t = (this._elapsed - 0.5) / 1.5;
    const eased = this._easeInOutCubic(t);

    this._camera.position.x = THREE.MathUtils.lerp(-15, 0, eased);
    this._camera.position.y = THREE.MathUtils.lerp(8, 2.8, eased);
    this._camera.position.z = THREE.MathUtils.lerp(-20, 6, eased);

    this._camera.lookAt(0, 1, -30);
  }

  private _phaseCameraSwoop(): void {
    const t = (this._elapsed - 2.0) / 0.8;
    const eased = this._easeOutBack(t);

    this._camera.position.x = THREE.MathUtils.lerp(0, 0, eased);
    this._camera.position.y = THREE.MathUtils.lerp(2.8, 2.8, eased);
    this._camera.position.z = THREE.MathUtils.lerp(6, 6, eased);

    this._camera.lookAt(0, 2.5, -30);
  }

  private _phaseLogoBounce(): void {
    const t = (this._elapsed - 2.8) / 0.8;

    if (this._logoMesh) {
      const bounce = Math.sin(t * Math.PI * 4) * 0.2 * (1 - t);
      const scale = 1 + bounce;

      (this._logoMesh.material as THREE.MeshBasicMaterial).opacity = Math.min(t * 2, 1);
      this._logoMesh.scale.set(scale, scale, scale);
      this._logoMesh.position.y = THREE.MathUtils.lerp(3, 3.5, t);
    }
  }

  private _phaseParticleExplosion(): void {
    const t = (this._elapsed - 3.6) / 0.5;

    if (this._particleSystem) {
      (this._particleSystem.material as THREE.PointsMaterial).opacity = 1 - t;

      const positions = this._particleSystem.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.3;
        positions[i + 1] += (Math.random() - 0.5) * 0.3;
        positions[i + 2] += (Math.random() - 0.5) * 0.3;
      }
      this._particleSystem.geometry.attributes.position.needsUpdate = true;
    }
  }

  private _phaseTapPrompt(): void {
    const t = (this._elapsed - 4.1) / 0.4;
    const pulse = Math.sin(t * Math.PI * 3) * 0.2 + 1;

    this._ui.setTapPromptOpacity(Math.min(t, 1) * pulse);
  }

  private _phaseComplete(): void {
    this._isPlaying = false;

    if (this._logoMesh) {
      this._scene.remove(this._logoMesh);
      this._logoMesh = null;
    }

    if (this._particleSystem) {
      this._scene.remove(this._particleSystem);
      this._particleSystem = null;
    }

    this._camera.position.copy(this._originalCameraPosition);
    this._camera.lookAt(this._originalCameraLookAt);

    this._ui.hideIntroOverlay();
    this._ui.showStartScreen();

    if (this._callbacks.onComplete) {
      this._callbacks.onComplete();
    }
  }

  private _easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private _easeOutBack(t: number): number {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }

  stop(): void {
    this._isPlaying = false;
    this._elapsed = 0;

    if (this._logoMesh) {
      this._scene.remove(this._logoMesh);
      this._logoMesh = null;
    }

    if (this._particleSystem) {
      this._scene.remove(this._particleSystem);
      this._particleSystem = null;
    }

    this._camera.position.copy(this._originalCameraPosition);
    this._camera.lookAt(this._originalCameraLookAt);

    this._ui.hideIntroOverlay();
  }
}
