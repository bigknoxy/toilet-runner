import { GameState } from '../core/GameState';

/**
 * Central state manager for UI screen navigation with history tracking.
 *
 * Responsibilities:
 * - Manage screen state transitions
 * - Track navigation history via stack
 * - Validate transitions before applying
 */
export class ScreenManager {
  private _screenStack: GameState[];
  private _currentState: GameState;

  // Transition rules: Map of source states to allowed destination states
  private readonly _transitionRules: Map<GameState, GameState[]> = new Map([
    [GameState.MENU, [GameState.PLAYING, GameState.SKINS, GameState.CHALLENGES, GameState.STATS, GameState.LEADERBOARD]],
    [GameState.PLAYING, [GameState.PAUSED, GameState.GAMEOVER]],
    [GameState.PAUSED, [GameState.PLAYING, GameState.MENU]],
    [GameState.GAMEOVER, [GameState.MENU, GameState.PLAYING, GameState.LEADERBOARD]],
    [GameState.LEADERBOARD, [GameState.MENU]],
    [GameState.SKINS, [GameState.MENU]],
    [GameState.CHALLENGES, [GameState.MENU]],
    [GameState.STATS, [GameState.MENU]]
  ]);

  constructor() {
    this._screenStack = [GameState.MENU];
    this._currentState = GameState.MENU;
  }

  /**
   * Transition to new state, add to stack.
   * @param state - Target game state
   */
  push(state: GameState): void {
    if (!this.canTransition(state)) {
      console.warn(`Invalid transition from ${GameState[this._currentState]} to ${GameState[state]}`);
      return;
    }

    // Push current state to history if not same state
    if (state !== this._currentState) {
      this._screenStack.push(this._currentState);
    }

    this._currentState = state;
  }

  /**
   * Return to previous state in history.
   */
  pop(): void {
    if (this._screenStack.length <= 1) {
      console.warn('Cannot pop: already at root state (MENU)');
      return;
    }

    const previousState = this._screenStack.pop();
    if (previousState !== undefined) {
      this._currentState = previousState;
    }
  }

  /**
   * Return to MENU state and clear history.
   */
  popToRoot(): void {
    if (this._currentState === GameState.MENU) {
      return;
    }

    this._screenStack = [GameState.MENU];
    this._currentState = GameState.MENU;
  }

  /**
   * Get current active state.
   * @returns Current game state
   */
  getCurrentState(): GameState {
    return this._currentState;
  }

  /**
   * Validate if transition is allowed from current state.
   * @param to - Target game state
   * @returns true if transition is valid
   */
  canTransition(to: GameState): boolean {
    if (to === this._currentState) {
      // Same state transitions are allowed (no-op)
      return true;
    }

    const allowedDestinations = this._transitionRules.get(this._currentState);
    return allowedDestinations?.includes(to) ?? false;
  }

  /**
   * Get previous state without popping from stack.
   * @returns Previous game state or null if at root
   */
  peek(): GameState | null {
    if (this._screenStack.length <= 1) {
      return null;
    }

    const index = this._screenStack.length - 1;
    return this._screenStack[index];
  }
}
