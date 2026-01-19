import { AudioManager } from '../game/AudioManager';

export class AudioControls {
  private _button: HTMLElement;
  private _icon: HTMLElement;
  private _audioManager: AudioManager;
  private _storageKey: string = 'toiletRunner.audioEnabled';

  constructor(audioManager: AudioManager) {
    this._audioManager = audioManager;
    this._button = document.getElementById('audio-button')!;
    this._icon = this._button.querySelector('.audio-icon')!;

    const savedState = localStorage.getItem(this._storageKey);
    const enabled = savedState !== 'false';
    this._audioManager.setEnabled(enabled);
    this.updateIcon(enabled);

    this._button.addEventListener('click', () => this.toggleAudio());
  }

  private toggleAudio(): void {
    const current = this._audioManager.isEnabled();
    const newState = !current;
    this._audioManager.setEnabled(newState);
    this.updateIcon(newState);
    localStorage.setItem(this._storageKey, newState.toString());
  }

  private updateIcon(enabled: boolean): void {
    this._icon.textContent = enabled ? '🔊' : '🔇';
  }
}
