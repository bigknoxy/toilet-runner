/**
 * HUD - Heads Up Display with enhanced visual styling
 * 
 * Features:
 * - Background panel with blur effect
 * - Larger, bolder score display (28px, 700 weight)
 * - Poppins font family
 * - Letter spacing -0.5px
 * - Integration with ScoreAnimator
 * - Integer score display
 */

export class HUD {
  private _scoreElement: HTMLElement | null = null;
  private _scoreAnimator: any = null; // ScoreAnimator instance

  constructor() {
    this._scoreElement = document.getElementById('score-display');
    if (!this._scoreElement) {
      console.warn('[HUD] Score display element not found');
    } else {
      this._applyEnhancedStyling();
    }
  }

  /**
   * Set the ScoreAnimator instance for integration
   */
  public setScoreAnimator(scoreAnimator: any): void {
    this._scoreAnimator = scoreAnimator;
  }

  /**
   * Update score display (delegates to ScoreAnimator if available)
   */
  public updateScore(score: number): void {
    if (this._scoreAnimator) {
      this._scoreAnimator.updateScore(score);
    } else {
      // Fallback: direct update if no ScoreAnimator
      this._updateDirectScore(score);
    }
  }

  /**
   * Update animation frame (delegates to ScoreAnimator if available)
   */
  public update(delta: number): void {
    if (this._scoreAnimator) {
      this._scoreAnimator.update(delta);
    }
  }

  /**
   * Reset HUD (delegates to ScoreAnimator if available)
   */
  public reset(): void {
    if (this._scoreAnimator) {
      this._scoreAnimator.reset();
    } else {
      // Fallback: direct reset
      this._updateDirectScore(0);
    }
  }

  /**
   * Apply enhanced visual styling to the score display
   */
  private _applyEnhancedStyling(): void {
    if (!this._scoreElement) return;

    // Enhanced background panel with blur effect
    (this._scoreElement as any).style.background = 'rgba(26, 26, 46, 0.85)';
    (this._scoreElement as any).style.backdropFilter = 'blur(8px)';
    (this._scoreElement as any).style.borderRadius = '12px';
    (this._scoreElement as any).style.padding = '12px 20px';
    (this._scoreElement as any).style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';

    // Larger, bolder score display
    (this._scoreElement as any).style.fontSize = '28px';
    (this._scoreElement as any).style.fontWeight = '700';
    (this._scoreElement as any).style.fontFamily = 'Poppins, sans-serif';
    (this._scoreElement as any).style.color = '#FFFFFF';
    (this._scoreElement as any).style.letterSpacing = '-0.5px';

    console.log('[HUD] Enhanced styling applied to score display');
  }

  /**
   * Direct score update fallback (when ScoreAnimator not available)
   */
  private _updateDirectScore(score: number): void {
    if (this._scoreElement) {
      // Display as integer (no decimals)
      this._scoreElement.textContent = Math.floor(score).toString();
    }
  }

  /**
   * Get current score element
   */
  public getScoreElement(): HTMLElement | null {
    return this._scoreElement;
  }

  /**
   * Show/hide HUD
   */
  public setVisible(visible: boolean): void {
    if (this._scoreElement) {
      (this._scoreElement as any).style.display = visible ? 'block' : 'none';
    }
  }

  /**
   * Trigger score flash animation
   */
  public triggerFlash(): void {
    if (this._scoreElement) {
      this._scoreElement.classList.remove('score-flash');
      // Force reflow to restart animation
      void this._scoreElement.offsetWidth;
      this._scoreElement.classList.add('score-flash');
      
      // Remove flash class after animation completes
      setTimeout(() => {
        if (this._scoreElement) {
          this._scoreElement.classList.remove('score-flash');
        }
      }, 500);
    }
  }

  /**
   * Trigger pulse animation for milestones
   */
  public triggerPulse(): void {
    if (this._scoreElement) {
      this._scoreElement.classList.remove('pulse');
      // Force reflow to restart animation
      void this._scoreElement.offsetWidth;
      this._scoreElement.classList.add('pulse');
      
      // Remove pulse class after animation completes
      setTimeout(() => {
        if (this._scoreElement) {
          this._scoreElement.classList.remove('pulse');
        }
      }, 300);
    }
  }
}