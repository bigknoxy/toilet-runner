import * as THREE from 'three';

export class GameLoop {
  private clock: THREE.Clock;
  private systems: Array<(delta: number) => void> = [];
  private _running: boolean = false;
  private _paused: boolean = false;
  private animationId: number | null = null;

  constructor() {
    this.clock = new THREE.Clock();
  }

  public registerSystem(system: (delta: number) => void): void {
    this.systems.push(system);
  }

  public unregisterSystem(system: (delta: number) => void): void {
    const index = this.systems.indexOf(system);
    if (index !== -1) {
      this.systems.splice(index, 1);
    }
  }

  public start(): void {
    if (this._running) return;
    this._running = true;
    this._paused = false;
    this.clock.start();
    this.loop();
  }

  public stop(): void {
    this._running = false;
    this._paused = false;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  public pause(): void {
    this._paused = true;
  }

  public resume(): void {
    this._paused = false;
  }

  private loop(): void {
    if (!this._running) return;

    if (!this._paused) {
      const delta = Math.min(this.clock.getDelta(), 0.1);

      for (const system of this.systems) {
        system(delta);
      }
    }

    this.animationId = requestAnimationFrame(() => this.loop());
  }

  public get isRunning(): boolean {
    return this._running;
  }

  public get isPaused(): boolean {
    return this._paused;
  }
}