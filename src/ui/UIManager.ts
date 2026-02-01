import { GameState } from '../core/GameState';

import { GameState } from '../core/GameState';
import { DailyChallengeSystem } from '../game/DailyChallenges';
import { StatsManager, PlayerStats } from '../core/StatsManager';

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

  // Intro sequence elements
  private _introOverlay: HTMLElement | null = null;
  private _introProgressBar: HTMLElement | null = null;
  private _introTapPrompt: HTMLElement | null = null;
  private _loadingScreen: HTMLElement | null = null;
  private _loadingProgressBar: HTMLElement | null = null;
  private _loadingTip: HTMLElement | null = null;

  private currentGameState: number = 0;

  private _onPlay: (() => void) | null = null;
  private _onRestart: (() => void) | null = null;
  private _onPause: (() => void) | null = null;
  private _onResume: (() => void) | null = null;
  private _onViewLeaderboard: (() => void) | null = null;
  private _onBackToGameOver: (() => void) | null = null;
  private _onBackToMenu: (() => void) | null = null;

  private _onSkins: (() => void) | null = null;
  private _onChallenges: (() => void) | null = null;
  private _onStats: (() => void) | null = null;
  private _onSelectSkin: ((skinId: string) => void) | null = null;

  // System references
  private dailyChallenges: DailyChallengeSystem | null = null;
  private statsManager: StatsManager | null = null;

  constructor() {
    this.cacheElements();
    this.setupEventListeners();
  }

  private cacheElements(): void {
    this._startScreen = document.getElementById('start-screen');
    this._pauseScreen = document.getElementById('pause-screen');
    this._overlay = document.getElementById('overlay');
    this._scoreDisplay = document.getElementById('score-display');
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

    // Intro sequence elements
    this._introOverlay = document.getElementById('intro-overlay');
    this._introProgressBar = document.getElementById('intro-progress-bar');
    this._introTapPrompt = document.getElementById('intro-tap-prompt');
    this._loadingScreen = document.getElementById('loading-screen');
    this._loadingProgressBar = document.getElementById('loading-progress-bar');
    this._loadingTip = document.getElementById('loading-tip');

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
      // TEST: Press 'T' to manually trigger game over screen
      if (e.key === 't' || e.key === 'T') {
        console.log('[DEBUG] T key pressed - testing game over screen directly');
        this.showGameOverScreen(12345);
      }
      
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



    // Add click to start screen - but ignore clicks on navigation buttons
    if (this._startScreen) {
      this._startScreen.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this._startScreen && !this._startScreen.classList.contains('hidden')) {
          // Don't start game if clicking on navigation buttons or interactive elements
          const target = e.target as HTMLElement;
          const isNavigationButton = target.closest('#skins-button') || 
                                    target.closest('#challenges-button') || 
                                    target.closest('#stats-button') ||
                                    target.closest('#play-button') ||
                                    target.closest('.skin-card') ||
                                    target.closest('.challenge-item') ||
                                    target.closest('.stat-card') ||
                                    target.closest('button') ||
                                    target.closest('a');

          if (!isNavigationButton) {
            console.log('UIManager: Click detected on start screen (not button)');
            if (this._onPlay) {
              this._onPlay();
            }
          } else {
            console.log('UIManager: Click on button, ignoring for game start');
          }
        }
      });
    }

    // Remove overlay click handler - only use start screen handler and specific button handlers

    // Play button handler (prevent bubbling to parent)
    const playButton = document.getElementById('play-button');
    if (playButton) {
      playButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onPlay) {
          this._onPlay();
        }
      });
    }

    // Skins button handler
    const skinsButton = document.getElementById('skins-button');
    if (skinsButton) {
      skinsButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onSkins) {
          this._onSkins();
        }
      });
    }

    // Challenges button handler
    const challengesButton = document.getElementById('challenges-button');
    if (challengesButton) {
      challengesButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onChallenges) {
          this._onChallenges();
        }
      });
    }

    // Stats button handler
    const statsButton = document.getElementById('stats-button');
    if (statsButton) {
      statsButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onStats) {
          this._onStats();
        }
      });
    }

    // Home button handler (for game over screen)
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
      homeButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onBackToMenu) {
          this._onBackToMenu();
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

    // Back buttons for modal screens
    const backFromSkinsButton = document.getElementById('back-from-skins-button');
    if (backFromSkinsButton) {
      backFromSkinsButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onBackToMenu) {
          this._onBackToMenu();
        }
      });
    }

    const backFromChallengesButton = document.getElementById('back-from-challenges-button');
    if (backFromChallengesButton) {
      backFromChallengesButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onBackToMenu) {
          this._onBackToMenu();
        }
      });
    }

    const backFromStatsButton = document.getElementById('back-from-stats-button');
    if (backFromStatsButton) {
      backFromStatsButton.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (this._onBackToMenu) {
          this._onBackToMenu();
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
    console.log('[UI] showStartScreen() called');
    this.hideAllScreens();
    console.log('[UI] hideAllScreens() completed');
    console.log('[UI] _startScreen:', !!this._startScreen);
    console.log('[UI] _overlay:', !!this._overlay);
    if (this._startScreen && this._overlay) {
      console.log('[UI] Removing hidden class from overlay and start-screen');
      this._overlay.classList.remove('hidden');
      this._startScreen.classList.remove('hidden');
      // Add visible class for transitions
      this._startScreen.classList.add('visible');
      this._overlay.classList.add('visible');
      console.log('[UI] overlay classList:', this._overlay.classList);
      console.log('[UI] startScreen classList:', this._startScreen.classList);
      console.log('[UI] overlay display:', window.getComputedStyle(this._overlay).display);
      console.log('[UI] startScreen display:', window.getComputedStyle(this._startScreen).display);
    } else {
      console.error('[UI] showStartScreen() failed - startScreen:', !!this._startScreen, 'overlay:', !!this._overlay);
    }
  }

  public hideStartScreen(): void {
    if (this._startScreen && this._overlay) {
      this._overlay.classList.add('hidden');
      this._startScreen.classList.add('hidden');
    }
    // Show pause button when gameplay starts
    if (this._pauseButtonContainer) {
      this._pauseButtonContainer.style.display = 'block';
    }
  }

  public showGameOverScreen(finalScore: number): void {
    this.hideAllScreens();
    if (this._gameOverScreen && this._finalScore && this._overlay) {
      this._overlay.classList.remove('hidden');
      this._gameOverScreen.classList.remove('hidden');
      this._finalScore.textContent = `Score: ${Math.floor(finalScore)}`;
      // Add visible class for transitions
      this._gameOverScreen.classList.add('visible');
      this._overlay.classList.add('visible');
    }
  }

  public showLeaderboardScreen(): void {
    this.hideAllScreens();
    if (this._leaderboardScreen && this._leaderboardListFull && this._overlay) {
      this._overlay.classList.remove('hidden');
      this._leaderboardScreen.classList.remove('hidden');
      // Add visible class for transitions
      this._leaderboardScreen.classList.add('visible');
      this._overlay.classList.add('visible');
    }
  }

  public showSkinsScreen(): void {
    this.hideAllScreens();
    const skinScreen = document.getElementById('skin-screen');
    if (skinScreen && this._overlay) {
      this._overlay.classList.remove('hidden');
      skinScreen.classList.remove('hidden');
      skinScreen.style.display = 'block';
      // Add visible class for transitions
      skinScreen.classList.add('visible');
      this._overlay.classList.add('visible');
    }
  }

  public showChallengesScreen(): void {
    this.hideAllScreens();
    const challengesScreen = document.getElementById('challenges-screen');
    if (challengesScreen && this._overlay) {
      this._overlay.classList.remove('hidden');
      challengesScreen.classList.remove('hidden');
      challengesScreen.style.display = 'block';
      // Add visible class for transitions
      challengesScreen.classList.add('visible');
      this._overlay.classList.add('visible');
    }
  }

  public showStatsScreen(): void {
    this.hideAllScreens();
    const statsScreen = document.getElementById('stats-screen');
    if (statsScreen && this._overlay) {
      this._overlay.classList.remove('hidden');
      statsScreen.classList.remove('hidden');
      statsScreen.style.display = 'block';
      // Add visible class for transitions
      statsScreen.classList.add('visible');
      this._overlay.classList.add('visible');
    }
  }

  public hideLeaderboardScreen(): void {
    if (this._leaderboardScreen && this._overlay) {
      this._overlay.classList.add('hidden');
      this._leaderboardScreen.classList.add('hidden');
    }
  }

  public hideGameOverScreen(): void {
    if (this._gameOverScreen && this._overlay) {
      this._overlay.classList.add('hidden');
      this._gameOverScreen.classList.add('hidden');
    }
  }

  public hideAllScreens(): void {
    if (this._overlay) {
      this._overlay.classList.add('hidden');
      this._overlay.classList.remove('visible');
    }
    if (this._startScreen) {
      this._startScreen.classList.add('hidden');
      this._startScreen.classList.remove('visible');
    }
    if (this._pauseScreen) {
      this._pauseScreen.classList.add('hidden');
      this._pauseScreen.classList.remove('visible');
    }
    if (this._gameOverScreen) {
      this._gameOverScreen.classList.add('hidden');
      this._gameOverScreen.classList.remove('visible');
    }
    if (this._leaderboardScreen) {
      this._leaderboardScreen.classList.add('hidden');
      this._leaderboardScreen.classList.remove('visible');
    }
    
    // Hide modal screens
    const skinScreen = document.getElementById('skin-screen');
    if (skinScreen) {
      skinScreen.classList.add('hidden');
      skinScreen.classList.remove('visible');
      skinScreen.style.display = 'none';
    }
    
    const challengesScreen = document.getElementById('challenges-screen');
    if (challengesScreen) {
      challengesScreen.classList.add('hidden');
      challengesScreen.classList.remove('visible');
      challengesScreen.style.display = 'none';
    }
    
    const statsScreen = document.getElementById('stats-screen');
    if (statsScreen) {
      statsScreen.classList.add('hidden');
      statsScreen.classList.remove('visible');
      statsScreen.style.display = 'none';
    }
    
    // Hide pause button on all non-gameplay screens
    if (this._pauseButtonContainer) {
      this._pauseButtonContainer.style.display = 'none';
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

  // Intro Sequence Methods
  public showIntroOverlay(): void {
    if (this._introOverlay) {
      this._introOverlay.style.display = 'flex';
      setTimeout(() => {
        this._introOverlay?.classList.add('visible');
      }, 10);
    }
  }

  public hideIntroOverlay(): void {
    if (this._introOverlay) {
      this._introOverlay.classList.remove('visible');
      setTimeout(() => {
        if (this._introOverlay) {
          this._introOverlay.style.display = 'none';
        }
      }, 500);
    }
  }

  public updateIntroProgress(progress: number): void {
    if (this._introProgressBar) {
      this._introProgressBar.style.width = `${progress}%`;
    }
  }

  public setIntroOpacity(opacity: number): void {
    if (this._introOverlay) {
      this._introOverlay.style.opacity = opacity.toString();
    }
  }

  public setTapPromptOpacity(opacity: number): void {
    if (this._introTapPrompt) {
      this._introTapPrompt.style.opacity = opacity.toString();
    }
  }

  public showLoadingScreen(): void {
    if (this._loadingScreen) {
      this._loadingScreen.classList.remove('hidden');
    }
    this._updateLoadingTip();
  }

  public hideLoadingScreen(): void {
    if (this._loadingScreen) {
      this._loadingScreen.classList.add('hidden');
    }
  }

  public fadeLoadingScreen(): void {
    if (this._loadingScreen) {
      this._loadingScreen.classList.add('fade-out');
    }
  }

  public updateLoadingProgress(progress: number): void {
    if (this._loadingProgressBar) {
      this._loadingProgressBar.style.width = `${progress}%`;
    }
  }

  private _updateLoadingTip(): void {
    const tips = [
      'Tip: Swipe left or right to dodge!',
      'Tip: Tap edges of screen to change lanes!',
      'Tip: Watch for gaps between obstacles!',
      'Tip: Speed increases over time!',
      'Tip: Dodge, don\'t get hit!',
      'Tip: Practice makes perfect!',
      'Tip: Stay focused!',
      'Tip: Every second counts!'
    ];

    if (this._loadingTip) {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      this._loadingTip.textContent = randomTip;
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

  public setOnBackToMenuCallback(callback: () => void): void {
    this._onBackToMenu = callback;
  }

  public setOnSkinsCallback(callback: () => void): void {
    this._onSkins = callback;
  }

  public setOnChallengesCallback(callback: () => void): void {
    this._onChallenges = callback;
  }

  public setOnStatsCallback(callback: () => void): void {
    this._onStats = callback;
  }

  public setOnSelectSkinCallback(callback: (skinId: string) => void): void {
    this._onSelectSkin = callback;
  }

  public setDailyChallenges(dailyChallenges: DailyChallengeSystem): void {
    this.dailyChallenges = dailyChallenges;
  }

  public setStatsManager(statsManager: StatsManager): void {
    this.statsManager = statsManager;
  }

  public getLoadingProgressBar(): HTMLElement | null {
    return this._loadingProgressBar;
  }

  public updateSkinGrid(skins: any[], selectedSkinId: string, unlockedSkins: string[], bestScore: number): void {
    const skinGrid = document.getElementById('skin-grid');
    if (!skinGrid) {
      console.error('[UI] Skin grid element not found');
      return;
    }

    console.log('[UI] Updating skin grid with:', {
      skinsCount: skins.length,
      selectedSkinId,
      unlockedSkins,
      bestScore
    });

    // Clear existing skins
    skinGrid.innerHTML = '';

    // Update header high score instead of showing duplicate in grid
    const headerScoreElement = document.getElementById('skin-best-score');
    if (headerScoreElement) {
      headerScoreElement.textContent = `Best: ${Math.floor(bestScore)}`;
    }

    // Create skin cards
    skins.forEach((skin: any) => {
      const isUnlocked = unlockedSkins.includes(skin.id);
      const isSelected = skin.id === selectedSkinId;
      const canUnlock = bestScore >= skin.unlockScore;

      const card = document.createElement('div');
      card.className = `skin-card ${isSelected ? 'selected' : ''} ${!isUnlocked ? 'locked' : ''}`;
      card.dataset.skinId = skin.id;

      // Generate gradient CSS
      const previewStyle = this._generatePreviewStyle(skin);

      card.innerHTML = `
        <div class="skin-preview" style="${previewStyle}"></div>
        <div class="skin-info">
          <div class="skin-name">${skin.name}</div>
          <div class="skin-status">
            ${isUnlocked
              ? '✓ Unlocked'
              : `<span class="lock-req">🔒 ${skin.unlockScore} pts</span>`
            }
          </div>
        </div>
        ${isSelected ? '<div class="selected-badge">★</div>' : ''}
        ${canUnlock && !isUnlocked ? '<div class="unlock-ready">New!</div>' : ''}
      `;

      card.addEventListener('click', () => {
        if (isUnlocked && this._onSelectSkin) {
          this._onSelectSkin(skin.id);
        }
      });

      skinGrid.appendChild(card);
    });
  }

  private _generatePreviewStyle(skin: any): string {
    if (skin.gradient && skin.gradient.length >= 2) {
      const start = this._hexToCss(skin.gradient[0]);
      const end = skin.gradient.length > 2 ? this._hexToCss(skin.gradient[1]) : this._hexToCss(skin.gradient[skin.gradient.length - 1]);
      return `background: linear-gradient(135deg, ${start} 0%, ${end} 100%);`;
    }
    return `background-color: ${this._hexToCss(skin.color)};`;
  }

  private _hexToCss(hex: number): string {
    return '#' + hex.toString(16).padStart(6, '0');
  }

  public updateChallengesList(challenges: any[], timeRemaining: { hours: number, minutes: number, seconds: number }): void {
    const challengesList = document.getElementById('challenges-list');
    if (!challengesList) {
      console.error('[UI] Challenges list element not found');
      return;
    }

    // Update timer display
    const timerDisplay = document.getElementById('challenges-timer');
    if (timerDisplay) {
      const timeString = `${timeRemaining.hours.toString().padStart(2, '0')}:${timeRemaining.minutes.toString().padStart(2, '0')}:${timeRemaining.seconds.toString().padStart(2, '0')}`;
      timerDisplay.textContent = `Reset in ${timeString}`;
    }

    // Clear existing challenges
    challengesList.innerHTML = '';

    // Create challenge items
    challenges.forEach((challenge: any) => {
      const item = document.createElement('div');
      const isCompleted = challenge.completed;
      const challengeId = `challenge-${challenge.id}`;
      item.className = `challenge-item ${isCompleted ? 'completed' : ''}`;
      item.innerHTML = `
        <div class="challenge-icon">${challenge.icon}</div>
        <div class="challenge-info">
          <div class="challenge-title">
            ${challenge.title}
            <button class="challenge-info-btn" data-challenge="${challengeId}" aria-label="Show challenge details">ℹ️</button>
          </div>
          <div class="challenge-details" id="${challengeId}">
            <div class="challenge-details-content">
              <div class="challenge-detail-description">${challenge.description}</div>
              <div class="challenge-detail-type">Type: ${challenge.type}</div>
            </div>
          </div>
          <div class="challenge-progress">
            <div class="progress-bar">
              <div class="progress-bar-fill" style="width: ${Math.min((challenge.progress / challenge.target) * 100, 100)}%"></div>
            </div>
            <div class="progress-text">${challenge.progress}/${challenge.target}</div>
          </div>
        </div>
        <div class="challenge-reward">${challenge.reward} coins</div>
      `;

      // Add click handler for info button
      const infoBtn = item.querySelector('.challenge-info-btn');
      if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const detailsPanel = document.getElementById(challengeId);
          if (detailsPanel) {
            detailsPanel.classList.toggle('visible');
          }
        });
      }

      challengesList.appendChild(item);
    });
  }

  public updateChallengesDisplay(): void {
    try {
      if (!this.dailyChallenges) {
        console.warn('[UI] Daily challenges system not set');
        return;
      }
      const challenges = this.dailyChallenges.getChallenges();
      const timeRemaining = this.dailyChallenges.getTimeRemaining();
      this.updateChallengesList(challenges, timeRemaining);
      this._updateCoinDisplay();
    } catch (error) {
      console.error('[UI] Error updating challenges display:', error);
      // Don't let this error crash the app initialization
    }
  }

  public updateStatsFromManager(): void {
    try {
      if (!this.statsManager) {
        console.warn('[UI] Stats manager system not set');
        return;
      }
      const stats = this.statsManager.getStats();
      this.updateStatsDisplay(stats);
    } catch (error) {
      console.error('[UI] Error updating stats from manager:', error);
      // Don't let this error crash the app initialization
    }
  }

  public updateStatsDisplay(stats: PlayerStats): void {
    // Helper method for safe number validation
    const safeStats = {
      totalRuns: this._safeNumber(stats.totalRuns, 0),
      highestScore: this._safeNumber(stats.highestScore, 0),
      totalDistance: this._safeNumber(stats.totalDistance, 0),
      totalObstaclesDodged: this._safeNumber(stats.totalObstaclesDodged, 0),
      totalPlayTime: this._safeNumber(stats.totalPlayTime, 0),
      challengesCompleted: this._safeNumber(stats.challengesCompleted, 0),
      skinsUnlocked: stats.unlockedSkins.length
    };

    const statElements: Record<string, HTMLElement | null> = {
      'stat-total-runs': document.getElementById('stat-total-runs'),
      'stat-highest-score': document.getElementById('stat-highest-score'),
      'stat-total-distance': document.getElementById('stat-total-distance'),
      'stat-obstacles-dodged': document.getElementById('stat-obstacles-dodged'),
      'stat-play-time': document.getElementById('stat-play-time'),
      'stat-challenges-completed': document.getElementById('stat-challenges'),
      'stat-skins-unlocked': document.getElementById('stat-skins')
    };

    if (statElements['stat-total-runs']) {
      statElements['stat-total-runs']!.textContent = safeStats.totalRuns.toString();
    }
    if (statElements['stat-highest-score']) {
      statElements['stat-highest-score']!.textContent = Math.floor(safeStats.highestScore).toString();
    }
    if (statElements['stat-total-distance']) {
      statElements['stat-total-distance']!.textContent = Math.round(safeStats.totalDistance).toString();
    }
    if (statElements['stat-obstacles-dodged']) {
      statElements['stat-obstacles-dodged']!.textContent = safeStats.totalObstaclesDodged.toString();
    }
    if (statElements['stat-play-time']) {
      // Format seconds to "1h 5m" or "65m" format
      const totalSeconds = this._safeNumber(stats.totalPlayTime, 0);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const timeString = hours > 0 
        ? `${hours}h ${minutes}m` 
        : `${minutes}m`;
      statElements['stat-play-time']!.textContent = timeString;
    }
    if (statElements['stat-challenges-completed']) {
      statElements['stat-challenges-completed']!.textContent = safeStats.challengesCompleted.toString();
    }
    if (statElements['stat-skins-unlocked']) {
      statElements['stat-skins-unlocked']!.textContent = safeStats.skinsUnlocked.toString();
    }
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
      this._overlay.classList.remove('hidden');
      this._pauseScreen.classList.remove('hidden');
      // Add visible class for transitions
      this._pauseScreen.classList.add('visible');
      this._overlay.classList.add('visible');
    }
  }

  public hidePauseScreen(): void {
    if (this._pauseScreen && this._overlay) {
      this._overlay.classList.add('hidden');
      this._pauseScreen.classList.add('hidden');
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
        this._leaderboardListFull?.appendChild(li);
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
        break;
      case GameState.LEADERBOARD:
        this.showLeaderboardScreen();
        this.hidePauseButton();
        break;
      case GameState.SKINS:
        this.showSkinsScreen();
        this.hidePauseButton();
        break;
      case GameState.CHALLENGES:
        this.showChallengesScreen();
        this.hidePauseButton();
        break;
      case GameState.STATS:
        this.showStatsScreen();
        this.hidePauseButton();
        break;
      default:
        break;
    }
  }

  public triggerScoreFlash(): void {
    if (this._scoreDisplay) {
      this._scoreDisplay.classList.remove('score-flash');
      void this._scoreDisplay.offsetWidth;
      this._scoreDisplay.classList.add('score-flash');
    }
  }

  public showStreakNotification(streak: number): void {
    // Create and show toast notification
    const toast = document.createElement('div');
    toast.className = 'streak-notification';
    toast.innerHTML = `
      <span class="streak-fire">🔥</span>
      <span class="streak-text">Streak x${streak}!</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('visible'), 10);
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  private _updateCoinDisplay(): void {
    if (!this.dailyChallenges) {
      console.warn('[UI] Daily challenges system not set');
      return;
    }
    
    const coinValueElement = document.getElementById('challenges-coin-value');
    if (coinValueElement) {
      const coinBalance = this.dailyChallenges.getCoinBalance();
      coinValueElement.textContent = coinBalance.toString();
    }
  }

  private _safeNumber(value: any, defaultValue: number): number {
    if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
      return Math.max(0, value);
    }
    return defaultValue;
  }
}