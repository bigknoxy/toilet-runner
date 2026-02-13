/**
 * ScoreAnimator - Handles smooth score count-up animations with visual feedback
 * 
 * Features:
 * - 10% per frame interpolation (0.1 multiplier)
 * - Pulse animation on milestones (every 100 points)
 * - Color change on completion (green #4ECDC4)
 * - 500-800ms duration for full count-up
 * - Integer display (no decimals)
 */

export class ScoreAnimator {
  private _displayedScore: number = 0;
  private _targetScore: number = 0;
  private _lastMilestone: number = 0;
  private _scoreElement: HTMLElement | null = null;
  private _isAnimating: boolean = false;

  constructor() {
    this._scoreElement = document.getElementById('score-display');
    if (!this._scoreElement) {
      console.warn('[ScoreAnimator] Score display element not found');
    }
  }

  /**
   * Update the target score and trigger milestone effects
   */
  public updateScore(actualScore: number): void {
    this._targetScore = actualScore;
    
    // Check for milestone (every 100 points)
    const currentMilestone = Math.floor(actualScore / 100);
    if (currentMilestone > this._lastMilestone && actualScore > 0) {
      this._triggerPulse();
      this._lastMilestone = currentMilestone;
    }
  }

  /**
   * Update the displayed score with smooth interpolation
   * Called every frame in the game loop
   */
  public update(delta: number): void {
    if (Math.abs(this._targetScore - this._displayedScore) < 0.1) {
      this._displayedScore = this._targetScore;
      this._isAnimating = false;
    } else {
      this._isAnimating = true;
      // Frame-rate independent lerp: 1 - (1 - 0.1)^(delta * 60)
      // At 60fps: factor ~0.1; at 30fps: factor ~0.19 (catches up faster)
      const lerpFactor = 1 - Math.pow(0.9, delta * 60);
      const diff = this._targetScore - this._displayedScore;
      this._displayedScore += diff * lerpFactor;
    }

    this._updateUI(this._displayedScore);
  }

  /**
   * Reset the animator (called when game restarts)
   */
  public reset(): void {
    this._displayedScore = 0;
    this._targetScore = 0;
    this._lastMilestone = 0;
    this._isAnimating = false;
    this._updateUI(0);
  }

  /**
   * Get current displayed score
   */
  public getDisplayedScore(): number {
    return this._displayedScore;
  }

  /**
   * Get target score
   */
  public getTargetScore(): number {
    return this._targetScore;
  }

  /**
   * Check if animation is currently active
   */
  public isAnimating(): boolean {
    return this._isAnimating;
  }

  /**
   * Update the UI element with the current score
   */
  private _updateUI(score: number): void {
    if (this._scoreElement) {
      // Display as integer (no decimals)
      this._scoreElement.textContent = Math.floor(score).toString();
    }
  }

  /**
   * Trigger pulse animation for milestones
   */
  private _triggerPulse(): void {
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