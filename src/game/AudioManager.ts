export class AudioManager {
  private _context: AudioContext | null = null;
  private _masterGain: GainNode | null = null;
  private _enabled: boolean = true;
  private _lastScoreMilestone: number = 0;
  private _bgmOscillators: OscillatorNode[] = [];
  private _bgmGain: GainNode | null = null;
  private _speed: number = 10;
  private _isPlaying: boolean = false;

  private ensureContext(): void {
    if (!this._context) {
      this._context = new (window.AudioContext || (window as any).webkitAudioContext)();
      this._masterGain = this._context.createGain();
      this._masterGain.connect(this._context.destination);
      this._masterGain.gain.value = 0.25;

      // Create background music gain node
      this._bgmGain = this._context.createGain();
      this._bgmGain.connect(this._masterGain);
      this._bgmGain.gain.value = 0.08;
    }
  }

  // Layered background music that changes with speed
  startBackgroundMusic(): void {
    this.ensureContext();
    if (!this._context || !this._bgmGain) return;

    this._isPlaying = true;
    this._updateBackgroundMusic();
  }

  stopBackgroundMusic(): void {
    this._isPlaying = false;
    this._bgmOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this._bgmOscillators = [];
  }

  private _updateBackgroundMusic(): void {
    if (!this._isPlaying || !this._context || !this._bgmGain) return;

    // Stop existing oscillators
    this._bgmOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this._bgmOscillators = [];

    // Base rhythm - lower tempo when slower
    const tempo = Math.max(60, this._speed * 6);
    const beatInterval = 60 / tempo;

    // Create ambient bass drone
    const bassOsc = this._context.createOscillator();
    const bassGain = this._bgmGain;
    bassOsc.type = 'sine';
    bassOsc.frequency.value = 55 + (this._speed * 0.5); // Bass rises with speed
    bassGain.gain.value = 0.1;
    bassOsc.connect(bassGain);
    bassOsc.start();
    this._bgmOscillators.push(bassOsc);

    // Create rhythmic beeps based on speed
    const createBeat = (delay: number, freq: number) => {
      setTimeout(() => {
        if (!this._isPlaying || !this._context) return;

        const osc = this._context.createOscillator();
        const gain = this._context.createGain();
        const filter = this._context.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.value = freq;

        filter.type = 'lowpass';
        filter.frequency.value = 800 + this._speed * 50;

        gain.gain.setValueAtTime(0.05, this._context.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this._masterGain!);

        osc.start();
        osc.stop(this._context.currentTime + 0.1);

        // Schedule next beat
        if (this._isPlaying) {
          createBeat(beatInterval, freq);
        }
      }, delay * 1000);
    };

    // Start rhythmic pattern
    createBeat(0, 220 + this._speed * 2);
    createBeat(beatInterval * 0.5, 277 + this._speed * 2);
  }

  update(speed: number): void {
    this._speed = speed;
    if (this._isPlaying) {
      this._updateBackgroundMusic();
    }
  }

  private playTone(frequency: number, type: OscillatorType, duration: number, volume: number = 0.3): void {
    if (!this._enabled || !this._context) return;

    const oscillator = this._context.createOscillator();
    const gain = this._context.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this._context.currentTime);

    gain.gain.setValueAtTime(volume, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + duration);

    oscillator.connect(gain);
    gain.connect(this._masterGain!);

    oscillator.start();
    oscillator.stop(this._context.currentTime + duration);
  }

  playLaneChange(): void {
    this.ensureContext();
    if (!this._context) return;

    const osc = this._context.createOscillator();
    const gain = this._context.createGain();
    const filter = this._context.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, this._context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this._context.currentTime + 0.12);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, this._context.currentTime);
    filter.Q.value = 1;

    gain.gain.setValueAtTime(0.2, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this._masterGain!);

    osc.start();
    osc.stop(this._context.currentTime + 0.12);
  }

  playGameOver(): void {
    this.ensureContext();
    if (!this._context) return;

    const osc = this._context.createOscillator();
    const gain = this._context.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this._context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this._context.currentTime + 0.4);

    gain.gain.setValueAtTime(0.35, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(this._masterGain!);

    osc.start();
    osc.stop(this._context.currentTime + 0.4);
  }

  playScoreMilestone(score: number): void {
    if (score - this._lastScoreMilestone < 100) return;
    this._lastScoreMilestone = score;

    this.ensureContext();
    if (!this._context) return;

    const osc = this._context.createOscillator();
    const gain = this._context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this._context.currentTime);
    osc.frequency.setValueAtTime(1100, this._context.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this._masterGain!);

    osc.start();
    osc.stop(this._context.currentTime + 0.25);
  }

  playCollision(): void {
    this.ensureContext();
    if (!this._context) return;

    const osc = this._context.createOscillator();
    const gain = this._context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, this._context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(250, this._context.currentTime + 0.15);

    gain.gain.setValueAtTime(0.3, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this._masterGain!);

    osc.start();
    osc.stop(this._context.currentTime + 0.15);
  }

  playStartGame(): void {
    this.ensureContext();
    if (!this._context) return;

    const frequencies = [349, 440, 523];
    const now = this._context.currentTime;

    frequencies.forEach((freq, i) => {
      setTimeout(() => {
        const osc = this._context!.createOscillator();
        const gain = this._context!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this._context!.currentTime);

        gain.gain.setValueAtTime(0.2, this._context!.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this._context!.currentTime + 0.35);

        osc.connect(gain);
        gain.connect(this._masterGain!);

        osc.start();
        osc.stop(this._context!.currentTime + 0.35);
      }, i * 60);
    });
  }

  playPause(): void {
    this.ensureContext();
    if (!this._context) return;

    const osc = this._context.createOscillator();
    const gain = this._context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this._context.currentTime);
    osc.frequency.setValueAtTime(330, this._context.currentTime + 0.1);

    gain.gain.setValueAtTime(0.15, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this._masterGain!);

    osc.start();
    osc.stop(this._context.currentTime + 0.15);
  }

  playResume(): void {
    this.ensureContext();
    if (!this._context) return;

    const osc = this._context.createOscillator();
    const gain = this._context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(330, this._context.currentTime);
    osc.frequency.setValueAtTime(440, this._context.currentTime + 0.1);

    gain.gain.setValueAtTime(0.15, this._context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this._masterGain!);

    osc.start();
    osc.stop(this._context.currentTime + 0.15);
  }

  setVolume(value: number): void {
    if (this._masterGain) {
      this._masterGain.gain.value = Math.max(0, Math.min(1, value));
    }
  }

  setEnabled(enabled: boolean): void {
    this._enabled = enabled;
    if (this._masterGain) {
      this._masterGain.gain.value = enabled ? 0.25 : 0;
    }
  }

  isEnabled(): boolean {
    return this._enabled;
  }

  getLastScoreMilestone(): number {
    return this._lastScoreMilestone;
  }

  setLastScoreMilestone(score: number): void {
    this._lastScoreMilestone = score;
  }
}
