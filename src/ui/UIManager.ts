import { GameState } from '../core/GameState';

export class UIManager {
  private _startScreen: HTMLElement | null = null;
  private _pauseScreen: HTMLElement | null = null;
  private _overlay: HTMLElement | null = null;
  private _scoreDisplay: HTMLElement | null = null;
  private _gameOverScreen: HTMLElement | null = null;
  private _finalScore: HTMLElement | null = null;
  private _restartButton: HTMLElement | null = null;
  private _pauseButton: HTMLElement | null = null;
  private _pauseButtonContainer: HTMLElement | null = null;
  private _resumeButton: HTMLElement | null = null;
  private _leaderboardScreen: HTMLElement | null = null;
  private _leaderboardListFull: HTMLElement | null = null;
  private _viewLeaderboardButton: HTMLElement | null = null;
  private _backToGameOverButton: HTMLElement | null = null;
  
  private currentGameState: number = 0;

  private _onPlay: (() => void) | null = null;
  private _onRestart: (() => void) | null = null;
  private _onPause: (() => void) | null = null;
  private _onResume: (() => void) | null = null;
  private _onViewLeaderboard: (() => void) | null = null;
  private _onBackToGameOver: (() => void) | null = null;

  constructor() {
    this.cacheElements();
    this.setupEventListeners();
  }

  private cacheElements(): void {
    this._startScreen = document.getElementById('start-screen');
    this._pauseScreen = document.getElementById('pause-screen');
    this._overlay = document.getElementById('overlay');
    this._scoreDisplay = document.getElementById('score');
    this._gameOverScreen = document.getElementById('game-over-screen');
    this._finalScore = document.getElementById('final-score');
    this._restartButton = document.getElementById('restart-button');
    this._pauseButton = document.getElementById('pause-btn');
    this._pauseButtonContainer = document.getElementById('pause-button');
    this._resumeButton = document.getElementById('resume-button');
    this._leaderboardScreen = document.getElementById('leaderboard-screen');
    this._leaderboardListFull = document.getElementById('leaderboard-list-full');
    this._viewLeaderboardButton = document.getElementById('view-leaderboard-button');
    this._backToGameOverButton = document.getElementById('back-to-game-over-button');

    if (!this._startScreen || !this._pauseScreen || !this._overlay || !this._scoreDisplay ||
        !this._gameOverScreen || !this._finalScore || !this._restartButton ||
        !this._pauseButton || !this._pauseButtonContainer || !this._resumeButton ||
        !this._leaderboardScreen || !this._leaderboardListFull ||
        !this._viewLeaderboardButton || !this._backToGameOverButton) {
      throw new Error('Failed to cache UI elements');
    }
  }

  private setupEventListeners(): void {
    if (this._restartButton) {
      this._restartButton.addEventListener('click', () => {
        if (this._onRestart) {
          this._onRestart();
        }
      });
    }

    if (this._pauseButton) {
      this._pauseButton.addEventListener('click', () => {
        if (this._onPause) {
          this._onPause();
        }
      });
    }

    if (this._resumeButton) {
      this._resumeButton.addEventListener('click', () => {
        if (this._onResume) {
          this._onResume();
        }
      });
    }

    // Global keyboard escape - perform action based on current state
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.currentGameState === GameState.PAUSED) {
          if (this._onResume) this._onResume();
        } else if (this.currentGameState === GameState.GAMEOVER) {
          if (this._onRestart) this._onRestart();
        } else if (this.currentGameState === GameState.LEADERBOARD) {
          if (this._onBackToGameOver) this._onBackToGameOver();
        }
      }
    });

    // Global keyboard and touch events for start screen
    const startGame = () => {
      console.log('UIManager: Start game triggered');
      if (this._onPlay) {
        this._onPlay();
      }
    };

    document.addEventListener('keydown', (event) => {
      if (this._startScreen && this._startScreen.style.display !== 'none') {
        console.log('UIManager: Keydown detected, starting game');
        startGame();
      }
    });

    document.addEventListener('touchstart', (event) => {
      if (this._startScreen && this._startScreen.style.display !== 'none') {
        console.log('UIManager: Touch detected, starting game');
        startGame();
      }
    });

    // Also add click to start screen
    if (this._startScreen) {
      this._startScreen.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this._startScreen.style.display !== 'none') {
          console.log('UIManager: Click detected on start screen');
          startGame();
        }
      });
    }

    // Also add click to overlay
    if (this._overlay) {
      this._overlay.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this._startScreen && this._startScreen.style.display !== 'none') {
          console.log('UIManager: Click detected on overlay');
          startGame();
        }
      });
    }

    // Leaderboard navigation buttons
    if (this._viewLeaderboardButton) {
      this._viewLeaderboardButton.addEventListener('click', () => {
        if (this._onViewLeaderboard) {
          this._onViewLeaderboard();
        }
      });
    }

    if (this._backToGameOverButton) {
      this._backToGameOverButton.addEventListener('click', () => {
        if (this._onBackToGameOver) {
          this._onBackToGameOver();
        }
      });
    }
  }

  public updateScore(score: number): void {
    if (this._scoreDisplay) {
      this._scoreDisplay.textContent = Math.floor(score).toString();
    }
  }

  public showStartScreen(): void {
    this.hideAllScreens();
    if (this._startScreen && this._overlay) {
      this._overlay.style.display = 'flex';
      this._startScreen.style.display = 'flex';
    }
  }

  public hideStartScreen(): void {
    if (this._startScreen && this._overlay) {
      this._overlay.style.display = 'none';
      this._startScreen.style.display = 'none';
    }
  }

  public showGameOverScreen(finalScore: number): void {
    this.hideAllScreens();
    if (this._gameOverScreen && this._finalScore && this._overlay) {
      this._overlay.style.display = 'flex';
      this._gameOverScreen.style.display = 'flex';
      this._finalScore.textContent = `Score: ${Math.floor(finalScore)}`;
    }
  }

  public showLeaderboardScreen(): void {
    this.hideAllScreens();
    if (this._leaderboardScreen && this._leaderboardListFull && this._overlay) {
      this._overlay.style.display = 'flex';
      this._leaderboardScreen.style.display = 'flex';
    }
  }

  public hideLeaderboardScreen(): void {
    if (this._leaderboardScreen && this._overlay) {
      this._overlay.style.display = 'none';
      this._leaderboardScreen.style.display = 'none';
    }
  }

  public hideGameOverScreen(): void {
    if (this._gameOverScreen && this._overlay) {
      this._overlay.style.display = 'none';
      this._gameOverScreen.style.display = 'none';
    }
  }

  public hideAllScreens(): void {
    if (this._overlay) {
      this._overlay.style.display = 'none';
    }
    if (this._startScreen) {
      this._startScreen.style.display = 'none';
    }
    if (this._pauseScreen) {
      this._pauseScreen.style.display = 'none';
    }
    if (this._gameOverScreen) {
      this._gameOverScreen.style.display = 'none';
    }
    if (this._leaderboardScreen) {
      this._leaderboardScreen.style.display = 'none';
    }
  }

  public showScoreDisplay(): void {
    if (this._scoreDisplay) {
      this._scoreDisplay.style.display = 'block';
    }
  }

  public hideScoreDisplay(): void {
    if (this._scoreDisplay) {
      this._scoreDisplay.style.display = 'none';
    }
  }

  public setOnPlayCallback(callback: () => void): void {
    this._onPlay = callback;
  }

  public setOnRestartCallback(callback: () => void): void {
    this._onRestart = callback;
  }

  public setOnPauseCallback(callback: () => void): void {
    this._onPause = callback;
  }

  public setOnResumeCallback(callback: () => void): void {
    this._onResume = callback;
  }

  public setOnViewLeaderboardCallback(callback: () => void): void {
    this._onViewLeaderboard = callback;
  }

  public setOnBackToGameOverCallback(callback: () => void): void {
    this._onBackToGameOver = callback;
  }

  public showPauseButton(): void {
    if (this._pauseButtonContainer) {
      this._pauseButtonContainer.style.display = 'block';
    }
  }

  public hidePauseButton(): void {
    if (this._pauseButtonContainer) {
      this._pauseButtonContainer.style.display = 'none';
    }
  }

  public showPauseScreen(): void {
    this.hideAllScreens();
    if (this._pauseScreen && this._overlay) {
      this._overlay.style.display = 'flex';
      this._pauseScreen.style.display = 'flex';
    }
  }

  public hidePauseScreen(): void {
    if (this._pauseScreen && this._overlay) {
      this._overlay.style.display = 'none';
      this._pauseScreen.style.display = 'none';
    }
  }

  public updateLeaderboardFull(scores: Array<{ score: number; date: string }>): void {
    if (this._leaderboardListFull) {
      this._leaderboardListFull.innerHTML = '';
      scores.forEach((entry, index) => {
        const li = document.createElement('li');
        li.className = 'leaderboard-item';
        li.innerHTML = `
          <span class="leaderboard-rank">#${index + 1}</span>
          <span class="leaderboard-score">${Math.floor(entry.score)}</span>
          <span class="leaderboard-date">${entry.date}</span>
        `;
        this._leaderboardListFull.appendChild(li);
      });
    }
  }

  public setGameState(gameState: GameState): void {
    this.currentGameState = gameState;
    switch (gameState) {
      case GameState.MENU:
        this.showStartScreen();
        this.hideScoreDisplay();
        this.hidePauseButton();
        break;
      case GameState.PLAYING:
        this.hideAllScreens();
        this.showScoreDisplay();
        this.showPauseButton();
        break;
      case GameState.PAUSED:
        this.showPauseScreen();
        this.hidePauseButton();
        break;
      case GameState.GAMEOVER:
        this.hideScoreDisplay();
        this.hidePauseButton();
        // Will show game over screen with score when needed
        break;
      case GameState.LEADERBOARD:
        this.showLeaderboardScreen();
        this.hidePauseButton();
        break;
      default:
        break;
    }
  }
}