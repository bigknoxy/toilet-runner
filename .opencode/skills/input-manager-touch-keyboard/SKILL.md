---
name: input-manager-touch-keyboard
description: Handle keyboard and touch input for endless runner
license: MIT
metadata:
  version: 1.0.0
  category: input-handling
  related: mobile-support
---

## What I do

Implement dual input system for desktop (keyboard) and mobile (touch/swipe).

### Keyboard handling:
```typescript
export class InputManager {
  constructor(private runner: RunnerController) {
    this.setupKeyboard();
    this.setupTouch();
  }

  private setupKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          this.runner.moveLeft();
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          this.runner.moveRight();
          break;
      }
    });
  }
}
```

### Touch swipe detection:
```typescript
export class InputManager {
  private touchStartX: number = 0;
  private touchStartY: number = 0;
  private SWIPE_THRESHOLD = 50;

  private setupTouch(): void {
    window.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - this.touchStartX;
      const deltaY = Math.abs(touchEndY - this.touchStartY);

      // Swipe if horizontal movement dominates
      if (Math.abs(deltaX) > this.SWIPE_THRESHOLD &&
          deltaY < this.SWIPE_THRESHOLD * 1.5) {
        if (deltaX > 0) {
          this.runner.moveRight();
        } else {
          this.runner.moveLeft();
        }
      }
    });
  }
}
```

## When to use me

**Use proactively when:** Implementing input controls for Toilet Runner (desktop + mobile).

I should be invoked for:
- Creating any game with keyboard controls
- Implementing touch/swipe support for mobile devices
- When cross-platform input is required (desktop + mobile)
- Lane-based movement systems

## Notes

- Swipe threshold: 50px (adjust for feel)
- Check vertical movement to avoid diagonal confusion
- Use touchstart/touchend, not touchmove (scrolls page)
- Prevent default on swipe to stop scroll
