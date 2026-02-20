interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export class InstallPrompt {
  private _button: HTMLButtonElement | null = null;
  private _deferredPrompt: BeforeInstallPromptEvent | null = null;

  constructor() {
    // Don't show if already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this._deferredPrompt = e as BeforeInstallPromptEvent;
      this.showButton();
    });

    window.addEventListener('appinstalled', () => {
      this.hideButton();
      this._deferredPrompt = null;
    });
  }

  private showButton(): void {
    if (this._button) return;

    this._button = document.createElement('button');
    this._button.id = 'install-button';
    this._button.className = 'install-button';
    this._button.innerHTML = '<span aria-hidden="true">&#128229;</span> Install App';
    this._button.setAttribute('aria-label', 'Install Toilet Runner app');
    this._button.addEventListener('click', () => this.handleInstall());
    document.body.appendChild(this._button);

    // Trigger entrance animation on next frame
    requestAnimationFrame(() => {
      if (this._button) this._button.classList.add('install-button--visible');
    });
  }

  private hideButton(): void {
    if (!this._button) return;
    this._button.classList.remove('install-button--visible');
    this._button.addEventListener('transitionend', () => {
      this._button?.remove();
      this._button = null;
    }, { once: true });
  }

  private async handleInstall(): Promise<void> {
    if (!this._deferredPrompt) return;
    await this._deferredPrompt.prompt();
    const { outcome } = await this._deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      this.hideButton();
    }
    this._deferredPrompt = null;
  }
}
