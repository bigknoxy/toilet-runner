const SWIPE_THRESHOLD = 80;
const SWIPE_DEBOUNCE_MS = 150;
const TAP_ZONE_RATIO = 0.3; // Tap within 30% of screen edge triggers lane change

export class InputManager {
  private _touchStartX: number = 0;
  private _touchStartY: number = 0;
  private _touchStartTime: number = 0;
  private _lastSwipeTime: number = 0;
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
    window.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    window.addEventListener('touchend', this.handleTouchEnd, { passive: true });
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
      this._touchStartTime = Date.now();
    }
  };

  private handleTouchEnd = (event: TouchEvent): void => {
    if (event.changedTouches.length === 0) return;

    const now = Date.now();

    // Debounce rapid swipes
    if (now - this._lastSwipeTime < SWIPE_DEBOUNCE_MS) return;

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - this._touchStartX;
    const deltaY = Math.abs(touchEndY - this._touchStartY);
    const elapsed = now - this._touchStartTime;

    // Check for swipe gesture
    if (Math.abs(deltaX) > SWIPE_THRESHOLD && deltaY < SWIPE_THRESHOLD * 1.5) {
      this._lastSwipeTime = now;
      if (deltaX > 0) {
        this._onLaneChange(1);
      } else {
        this._onLaneChange(-1);
      }
      return;
    }

    // Check for tap-to-lane (short touch with minimal movement)
    if (elapsed < 300 && Math.abs(deltaX) < 20 && deltaY < 20) {
      const screenWidth = window.innerWidth;
      const tapZone = screenWidth * TAP_ZONE_RATIO;

      if (this._touchStartX < tapZone) {
        this._lastSwipeTime = now;
        this._onLaneChange(-1);
      } else if (this._touchStartX > screenWidth - tapZone) {
        this._lastSwipeTime = now;
        this._onLaneChange(1);
      }
    }
  };
}
