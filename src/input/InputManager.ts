export class InputManager {
  private _touchStartX: number = 0;
  private _touchStartY: number = 0;
  private _onLaneChange: (direction: -1 | 1) => void;
  private _onPause?: () => void;

  constructor(onLaneChange: (direction: -1 | 1) => void, onPause?: () => void) {
    this._onLaneChange = onLaneChange;
    this._onPause = onPause;
  }

  setup(): void {
    this.setupKeyboard();
    this.setupTouch();
  }

  teardown(): void {
    this.removeKeyboard();
    this.removeTouch();
  }

  private setupKeyboard(): void {
    window.addEventListener('keydown', this.handleKeyboard);
  }

  private removeKeyboard(): void {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  private setupTouch(): void {
    window.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchend', this.handleTouchEnd);
  }

  private removeTouch(): void {
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchend', this.handleTouchEnd);
  }

  private handleKeyboard = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        this._onLaneChange(-1);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        this._onLaneChange(1);
        break;
      case 'p':
      case 'P':
      case 'Escape':
        if (this._onPause) {
          this._onPause();
        }
        break;
    }
  };

  private handleTouchStart = (event: TouchEvent): void => {
    if (event.touches.length > 0) {
      this._touchStartX = event.touches[0].clientX;
      this._touchStartY = event.touches[0].clientY;
    }
  };

  private handleTouchEnd = (event: TouchEvent): void => {
    if (event.changedTouches.length > 0) {
      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;

      const deltaX = touchEndX - this._touchStartX;
      const deltaY = Math.abs(touchEndY - this._touchStartY);

      if (Math.abs(deltaX) > SWIPE_THRESHOLD && deltaY < SWIPE_THRESHOLD * 1.5) {
        if (deltaX > 0) {
          this._onLaneChange(1);
        } else {
          this._onLaneChange(-1);
        }
      }
    }
  };
}

const SWIPE_THRESHOLD = 50;