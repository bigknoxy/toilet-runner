import '../styles/modals.css';

declare const __APP_VERSION__: string;

import * as THREE from 'three';
import { SceneManager } from './core/SceneManager';
import { GameLoop } from './core/GameLoop';
import { GameState } from './core/GameState';
import { LeaderboardManager } from './core/LeaderboardManager';
import { PerformanceManager, PerformanceTier } from './core/PerformanceManager';
import { RunnerController } from './game/RunnerController';
import { TrackManager } from './game/TrackManager';
import { ObstacleManager } from './game/ObstacleManager';
import { CollisionSystem } from './game/CollisionSystem';
import { AudioManager } from './game/AudioManager';
import { EnvironmentManager } from './game/EnvironmentManager';
import { CameraManager } from './game/CameraManager';
import { InputManager } from './input/InputManager';
import { UIManager } from './ui/UIManager';
import { AudioControls } from './ui/AudioControls';
import { PostProcessingManager } from './game/visual/PostProcessingManager';
import { ParticleSystem, ParticlePresets, ParticleType } from './game/visual/ParticleSystem';
import { MaterialFactory } from './game/visual/MaterialFactory';
import { CharacterCustomization } from './game/CharacterCustomization';
import { DailyChallengeSystem } from './game/DailyChallenges';
import { StatsManager } from './core/StatsManager';
import { CameraShake } from './game/CameraShake';
import { ScoreAnimator } from './ui/ScoreAnimator';
import { HUD } from './ui/HUD';
import { TrailRenderer } from './game/TrailRenderer';
import { SpeedLines } from './game/visual/SpeedLines';

const BASE_SPEED = 10;
const SPEED_INCREASE = 0.5;
const SCORE_RATE = 10;
const SCORE_MILESTONE = 100;

class ToiletRunner {
  private sceneManager!: SceneManager;
  private gameLoop!: GameLoop;
  private performanceConfig: any;

  private runner!: RunnerController;
  private track!: TrackManager;
  private obstacles!: ObstacleManager;
  private collision!: CollisionSystem;
  private audioManager!: AudioManager;
  private environment!: EnvironmentManager;
  private cameraManager!: CameraManager;
  private input!: InputManager;
  private ui!: UIManager;
  private audioControls!: AudioControls;
  private leaderboard!: LeaderboardManager;
  private characterCustomization!: CharacterCustomization;
  private dailyChallenges!: DailyChallengeSystem;
  private statsManager!: StatsManager;
  private cameraShake!: CameraShake;
  private scoreAnimator!: ScoreAnimator;
  private hud!: HUD;
  private trailRenderer!: TrailRenderer;
  private currentGameState: GameState = GameState.MENU;
  private score = 0;
  private survivalTime = 0;
  private lastDodgedCount = 0;
  private currentStreak = 0;
  private challengesNeedUpdate = false;
  private passedObstacles: Set<string> = new Set();
  private _isDying: boolean = false;
  private _deathTimer: number = 0;
  private readonly _deathDuration = 1.0;

  private postProcessing!: PostProcessingManager;
  private dustParticles!: ParticleSystem;
  private sparkleParticles!: ParticleSystem;
  private impactParticles!: ParticleSystem;
  private coinParticles!: ParticleSystem;
  private speedLines!: SpeedLines;
  private dustEmissionTimer = 0;

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    try {
      this.sceneManager = new SceneManager();
      this.gameLoop = new GameLoop();

      this.performanceConfig = await PerformanceManager.initialize();

      this.setupGameLogic();
      this.setupUIAndInput();
      this.setupVisualEffects();
      this.setupResizeListener();

      this.ui.showLoadingScreen();

      await this.performLoading();

      this.ui.fadeLoadingScreen();

      await new Promise(resolve => setTimeout(resolve, 800));

      this.ui.hideLoadingScreen();

      const versionEl = document.getElementById('app-version');
      if (versionEl) versionEl.textContent = `v${__APP_VERSION__}`;

      this.ui.setGameState(this.currentGameState);

      this.ui.setDailyChallenges(this.dailyChallenges);
      this.ui.setStatsManager(this.statsManager);

      this.updateSkinDisplay();
      this.ui.updateChallengesDisplay();
      this.ui.updateStatsFromManager();

      this.gameLoop.registerSystem(this.update.bind(this));
      this.gameLoop.start();
    } catch (error) {
      this.showFatalError(error);
    }
  }

  private showFatalError(error: unknown): void {
    const message = error instanceof Error ? error.message : 'Unknown error';
    const isWebGLError = message.includes('WebGL') || message.includes('canvas') || message.includes('renderer');

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:#1a1a2e;display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;';

    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;color:#fff;font-family:Poppins,sans-serif;max-width:400px;';
    content.innerHTML = isWebGLError
      ? `<h2 style="color:#ff6b6b;">WebGL Not Supported</h2>
         <p style="color:#ccc;margin-top:12px;">Your browser or device doesn't support WebGL, which is required to run this game.</p>
         <p style="color:#999;margin-top:8px;">Try using a modern browser like Chrome, Firefox, or Safari.</p>`
      : `<h2 style="color:#ff6b6b;">Failed to Load Game</h2>
         <p style="color:#ccc;margin-top:12px;">Something went wrong while starting the game.</p>
         <p style="color:#999;margin-top:8px;">Try refreshing the page. If the problem persists, try a different browser.</p>`;

    overlay.appendChild(content);
    document.body.appendChild(overlay);
  }

  private setupResizeListener(): void {
    let resizeTimeout: number | null = null;

    const debouncedResize = (): void => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        this.sceneManager.resize(window.innerWidth, window.innerHeight);
        resizeTimeout = null;
      }, 100);
    };

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);
  }

  private async performLoading(): Promise<void> {
    const minLoadTime = 1500;
    const startTime = Date.now();

    const progressBar = this.ui.getLoadingProgressBar();

    while (Date.now() - startTime < minLoadTime) {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / minLoadTime) * 100, 100);
      if (progressBar) {
        progressBar.style.width = progress + '%';
      }
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    if (progressBar) {
      progressBar.style.width = '100%';
    }
  }

  private setupVisualEffects(): void {
    const scene = this.sceneManager.getScene();
    const camera = this.sceneManager.getCamera();
    const renderer = this.sceneManager.getRenderer();

    MaterialFactory.setQuality(this.performanceConfig.tier);

    const particleConfig = this.performanceConfig.particles;

    this.dustParticles = new ParticleSystem(scene, {
      ...ParticlePresets[ParticleType.DUST],
      maxParticles: Math.min(50, particleConfig.collision)
    });

    this.sparkleParticles = new ParticleSystem(scene, {
      ...ParticlePresets[ParticleType.SPARKLE],
      maxParticles: Math.min(30, particleConfig.effects || 15)
    });

    this.impactParticles = new ParticleSystem(scene, {
      ...ParticlePresets[ParticleType.IMPACT],
      maxParticles: particleConfig.collision
    });

    this.coinParticles = new ParticleSystem(scene, {
      ...ParticlePresets[ParticleType.COIN],
      maxParticles: Math.min(40, particleConfig.effects || 15)
    });

    // Initialize trail renderer
    this.trailRenderer = new TrailRenderer(this.runner.getMesh(), scene);

    // Speed lines effect
    this.speedLines = new SpeedLines(scene);

    this.postProcessing = new PostProcessingManager(renderer, scene, camera);
    this.setupPostProcessing();
  }

  private setupPostProcessing(): void {
    if (!this.performanceConfig.postProcessing) return;

    this.postProcessing.initialize({
      enabled: true,
      bloom: {
        strength: 0.4,
        threshold: 0.9,
        radius: 0.3
      },
      fxaa: true,
      vignette: {
        offset: 0.5,
        darkness: 0.3
      }
    });

    this.sceneManager.setPostProcessing(this.postProcessing);
  }

  private setupGameLogic(): void {
    const scene = this.sceneManager.getScene();

    // Initialize stats manager (unified)
    this.statsManager = new StatsManager();

    // Initialize score animator
    this.scoreAnimator = new ScoreAnimator();

    // Initialize HUD and integrate with ScoreAnimator
    this.hud = new HUD();
    this.hud.setScoreAnimator(this.scoreAnimator);

    // Initialize daily challenges with stats manager reference
    this.dailyChallenges = new DailyChallengeSystem();
    this.dailyChallenges.setStatsManager(this.statsManager);

    // Initialize character customization
    this.characterCustomization = new CharacterCustomization();
    this.characterCustomization.setStatsManager(this.statsManager);

    this.runner = new RunnerController(
      scene,
      this.characterCustomization,
      this.statsManager.getSelectedSkin()
    );
    this.track = new TrackManager(scene);
    this.obstacles = new ObstacleManager(scene, this.track, this.performanceConfig.emojiFaces);
    this.collision = new CollisionSystem();
    this.audioManager = new AudioManager();
    this.environment = new EnvironmentManager(scene);
    this.cameraManager = new CameraManager(this.sceneManager.getCamera());
    this.cameraShake = new CameraShake(this.sceneManager.getCamera());
    this.leaderboard = new LeaderboardManager();

    const texture = this.environment.getTileTexture();
    const trackMaterial = MaterialFactory.getTrackMaterial(texture);
    this.track.applyTileTexture(texture);
  }

  private setupUIAndInput(): void {
    this.input = new InputManager(
      this.handleLaneChange.bind(this),
      this.togglePause.bind(this)
    );
    this.input.setup();

    this.ui = new UIManager();
    this.ui.setOnPlayCallback(this.startGame.bind(this));
    this.ui.setOnRestartCallback(this.restartGame.bind(this));
    this.ui.setOnPauseCallback(this.handlePause.bind(this));
    this.ui.setOnResumeCallback(this.handleResume.bind(this));
    this.ui.setOnViewLeaderboardCallback(this.showLeaderboard.bind(this));
    this.ui.setOnBackToGameOverCallback(this.backToGameOver.bind(this));
    this.ui.setOnBackToMenuCallback(this.backToMenu.bind(this));

    // Navigation button callbacks
    this.ui.setOnSkinsCallback(this.showSkinsScreen.bind(this));
    this.ui.setOnChallengesCallback(this.showChallengesScreen.bind(this));
    this.ui.setOnStatsCallback(this.showStatsScreen.bind(this));

    // Skin selection callback
    this.ui.setOnSelectSkinCallback((skinId: string) => {
      if (this.statsManager.selectSkin(skinId)) {
        this.runner.updateSkin(skinId);
        this.updateSkinDisplay();
      }
    });

    this.audioControls = new AudioControls(this.audioManager);

  }

  private update(delta: number): void {
    PerformanceManager.updateFPS(delta);

    if (this.currentGameState === GameState.PLAYING) {
      // Death slow-motion sequence
      if (this._isDying) {
        this._deathTimer += delta;
        if (this._deathTimer >= this._deathDuration) {
          this._isDying = false;
          this.endGame();
          return;
        }
        // Scale delta for slow-mo, only update visuals
        const slowDelta = delta * 0.15;
        const gameSpeed = BASE_SPEED + Math.floor(this.score / 10) * SPEED_INCREASE;
        this.runner.update(slowDelta);
        this.track.update(slowDelta, gameSpeed);
        this.dustParticles.update(slowDelta);
        this.sparkleParticles.update(slowDelta);
        this.impactParticles.update(slowDelta);
        this.coinParticles.update(slowDelta);
        this.cameraShake.update(slowDelta);
        this.sceneManager.render();
        return;
      }

      const speedIncrease = Math.floor(this.score / 10) * SPEED_INCREASE;
      const gameSpeed = BASE_SPEED + speedIncrease;

      // Update survival time and challenge progress
      this.survivalTime += delta;
      this.dailyChallenges.updateProgress('survive', delta);

      // Track obstacle dodging
      const currentDodged = this.obstacles.getDodgedCount();
      const newDodges = currentDodged - this.lastDodgedCount;
      if (newDodges > 0) {
        this.dailyChallenges.updateProgress('dodge', newDodges);
        this.lastDodgedCount = currentDodged;
      }

      this.runner.setSpeed(gameSpeed);
      this.runner.update(delta);
      this.track.update(delta, gameSpeed);
      this.obstacles.update(delta, gameSpeed, this.score);
      this.environment.update(delta, gameSpeed);

      // Check for successful dodges and trigger celebration effects
      const activeObstacles = this.obstacles.getActiveObstacles();
      const playerPos = this.runner.getPosition();

      for (const obstacle of activeObstacles) {
        const obstacleId = `${obstacle.x}_${obstacle.z}`;

        // If obstacle is behind player and not yet counted as passed
        if (obstacle.z > playerPos.z + 2 && !this.passedObstacles.has(obstacleId)) {
          this.passedObstacles.add(obstacleId);

          // Check for near miss (obstacle in adjacent lane, close to player)
          const lateralDist = Math.abs(obstacle.x - playerPos.x);
          const isNearMiss = lateralDist < 2.5 && lateralDist > 0.5;

          if (isNearMiss) {
            this.ui.showScorePopup('CLOSE!', true);
            this.runner.triggerSuccessBounce();
          } else if (lateralDist <= 0.5) {
            this.ui.showScorePopup('+10', false);
          }

          // Trigger celebration effects only for same-lane or near-miss dodges
          if (lateralDist <= 2.5) {
            const dodgePos = new THREE.Vector3(obstacle.x, playerPos.y, playerPos.z + 1);
            this.sparkleParticles.emitSparkle(dodgePos);
            this.cameraShake.shake(0.03, 0.1);
          }
        }
      }

      // Clean up passed obstacles that are too far behind
      // Copy to array first to avoid mutating Set during iteration
      const toDelete: string[] = [];
      this.passedObstacles.forEach((obstacleId) => {
        const [x, z] = obstacleId.split('_').map(Number);
        if (z > playerPos.z + 10) {
          toDelete.push(obstacleId);
        }
      });
      for (const id of toDelete) {
        this.passedObstacles.delete(id);
      }

      // Update camera follow with player position
      const playerPosition = this.runner.getPosition();
      this.cameraManager.updateCameraFollow(playerPosition, delta);

      // Sync CameraShake with new camera base position
      this.cameraShake.syncWithBasePosition(this.cameraManager.getCurrentPosition());

      // Update camera shake (now uses synced position)
      this.cameraShake.update(delta);
      // Emit dust particles continuously while running
      this.dustEmissionTimer += delta;
      if (this.dustEmissionTimer > 0.1) { // Emit dust every 0.1 seconds
        const dustPos = this.runner.getPosition();
        dustPos.z += 0.3; // Position slightly behind the runner
        dustPos.y -= 0.2; // Position near the ground
        this.dustParticles.emitDust(dustPos);
        this.dustEmissionTimer = 0;
      }

      this.dustParticles.update(delta);
      this.sparkleParticles.update(delta);
      this.impactParticles.update(delta);
      this.coinParticles.update(delta);

      // Update trail effect
      this.trailRenderer.update(playerPosition, gameSpeed, this.runner.isChangingLanes());

      // Update speed lines
      this.speedLines.update(delta, gameSpeed);

      const hitObstacle = this.collision.checkPlayerVsObstacles(this.runner.getMesh(), this.obstacles);
      if (!this._isDying && hitObstacle) {
        this.handleCollision(hitObstacle);
        this.runner.startDeathTumble();
        this._isDying = true;
        this._deathTimer = 0;
        this.showDeathFlash();
      }

      const prevScore = Math.floor(this.score);
      this.score += SCORE_RATE * delta;
      const newScore = Math.floor(this.score);

      // Update challenge progress
      if (newScore > prevScore) {
        this.dailyChallenges.updateProgress('score', newScore - prevScore);
        this.challengesNeedUpdate = true;
      }

      // Update distance challenge progress
      this.dailyChallenges.updateProgress('distance', SCORE_RATE * delta);
      this.challengesNeedUpdate = true;

      // Update HUD (handles ScoreAnimator internally)
      this.hud.updateScore(this.score);
      this.hud.update(delta);

      if (Math.floor(newScore / SCORE_MILESTONE) > Math.floor(prevScore / SCORE_MILESTONE)) {
        this.audioManager.playScoreMilestone(newScore);
        this.ui.triggerScoreFlash();
        this.hud.triggerPulse(); // Enhanced milestone animation
        this.cameraShake.shake(0.08, 0.2); // Light celebratory shake for milestone
        this.handleScoreMilestone();
      }

    } else if (this.currentGameState === GameState.PAUSED) {
      this.sceneManager.render();
      return;
    }

    // Update challenges display if needed (MENU state)
    if (this.challengesNeedUpdate) {
      this.ui.updateChallengesDisplay();
      this.challengesNeedUpdate = false;
    }

    // Always render, even in MENU and GAMEOVER states
    this.sceneManager.render();
  }

  private handleCollision(hitPos: { x: number; y: number; z: number; lane: number }): void {
    this.audioManager.playCollision();
    this.cameraShake.shake(0.3, 0.4);

    const obstaclePos = new THREE.Vector3(hitPos.x, hitPos.y, hitPos.z);
    for (let i = 0; i < 8; i++) {
      this.impactParticles.emitImpact(obstaclePos);
    }

    this.obstacles.hideObstacle(hitPos.lane, hitPos.z);
  }

  private showDeathFlash(): void {
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;background:white;opacity:0.6;z-index:9000;pointer-events:none;transition:opacity 0.3s ease-out;';
    document.body.appendChild(flash);
    requestAnimationFrame(() => { flash.style.opacity = '0'; });
    setTimeout(() => flash.remove(), 400);
  }

  private handleScoreMilestone(): void {
    const playerPos = this.runner.getPosition();
    const sparklePos = playerPos.clone();
    sparklePos.y += 1;
    this.sparkleParticles.emitSparkle(sparklePos);
  }

  private handleResize(): void {
    this.sceneManager.resize(window.innerWidth, window.innerHeight);
  }

  public startGame(): void {
    this.ui.hideAllScreens();
    this.currentGameState = GameState.PLAYING;
    this.ui.setGameState(this.currentGameState);
    this.reset();
    this.audioManager.playStartGame();
    this.statsManager.startSession();
  }

  private endGame(): void {
    this.currentGameState = GameState.GAMEOVER;
    this.ui.setGameState(this.currentGameState);
    this.audioManager.playGameOver();
    this.cameraShake.shake(0.25, 0.5);

    this.leaderboard.addScore(this.score);

    const sessionDistance = this.score;
    this.statsManager.endSession({
      score: this.score,
      distance: sessionDistance,
      obstaclesDodged: this.obstacles.getDodgedCount(),
      duration: this.survivalTime
    });

    // Update highest score and check for skin unlocks
    this.statsManager.updateHighestScore(Math.floor(this.score));
    const { newlyUnlocked } = this.characterCustomization.updateStats(this.statsManager.getHighestScore());
    newlyUnlocked.forEach(skinId => this.statsManager.unlockSkin(skinId));

    const successfulRun = this.survivalTime >= 30 || this.score >= 100;
    if (successfulRun) {
      this.statsManager.updateStreak(true);
      this.dailyChallenges.updateProgress('streak', 1);
      this.ui.showStreakNotification(this.statsManager.getCurrentStreak());
    } else {
      this.statsManager.updateStreak(false);
    }

    const topScores = this.leaderboard.getTopScores();
    this.ui.updateLeaderboardFull(topScores);

    this.ui.updateStatsFromManager();
    this.ui.updateChallengesDisplay();

    const highScore = this.statsManager.getHighestScore();
    const isNewBest = Math.floor(this.score) >= highScore && this.score > 0;
    const message = this.getEncouragingMessage(this.score, highScore, this.survivalTime);
    this.ui.showGameOverScreen(this.score, message, isNewBest);
  }

  private getEncouragingMessage(score: number, highScore: number, time: number): string {
    if (score >= highScore && score > 0) return 'New Personal Best!';
    if (score > highScore * 0.9 && highScore > 0) return 'So close to your record!';
    if (time > 60) return 'Great endurance!';
    if (score > 200) return 'Impressive run!';
    if (score > 50) return 'Nice dodging!';
    return 'Keep practicing!';
  }

  public showLeaderboard(): void {
    this.currentGameState = GameState.LEADERBOARD;
    this.ui.setGameState(this.currentGameState);
  }

  public backToGameOver(): void {
    this.currentGameState = GameState.GAMEOVER;
    this.ui.showGameOverScreen(this.score);
  }

  public backToMenu(): void {
    this.currentGameState = GameState.MENU;
    this.ui.setGameState(this.currentGameState);
    this.ui.showStartScreen();
    this.ui.updateSkinDisplay();
    this.ui.updateChallengesDisplay();
    this.ui.updateStatsFromManager();

    // Update skins system with latest stats to auto-unlock skins
    const { newlyUnlocked } = this.characterCustomization.updateStats(this.statsManager.getHighestScore());
    newlyUnlocked.forEach(skinId => this.statsManager.unlockSkin(skinId));
  }

  public showSkinsScreen(): void {
    this.currentGameState = GameState.SKINS;
    this.ui.setGameState(this.currentGameState);
    this.updateSkinDisplay();
  }

  public showChallengesScreen(): void {
    this.currentGameState = GameState.CHALLENGES;
    this.ui.setGameState(this.currentGameState);
  }

  public showStatsScreen(): void {
    this.currentGameState = GameState.STATS;
    this.ui.setGameState(this.currentGameState);
  }

  public restartGame(): void {
    this.startGame();
  }

  private reset(): void {
    this.runner.reset();
    this.track.reset();
    this.obstacles.reset();
    this.collision.reset();
    this.environment.reset();
    this.cameraManager.reset();
    this.cameraShake.reset();
    this.trailRenderer.reset();
    this.speedLines.reset();
    this.dustParticles.reset();
    this.sparkleParticles.reset();
    this.impactParticles.reset();
    this.coinParticles.reset();
    this.score = 0;
    this.survivalTime = 0;
    this.lastDodgedCount = 0;
    this.currentStreak = 0;
    this.challengesNeedUpdate = false;
    this.dustEmissionTimer = 0;
    this._isDying = false;
    this._deathTimer = 0;
    this.passedObstacles.clear();
    this.audioManager.setLastScoreMilestone(0);
    this.scoreAnimator.reset();
    this.hud.reset();
  }

  private handleLaneChange(direction: -1 | 1): void {
    if (this.currentGameState === GameState.PLAYING && !this._isDying) {
      if (direction === -1) {
        this.runner.moveLeft();
      } else {
        this.runner.moveRight();
      }
      this.audioManager.playLaneChange();

      // Haptic feedback on mobile
      if ('vibrate' in navigator && navigator.maxTouchPoints > 0) {
        navigator.vibrate(15);
      }

      const playerPos = this.runner.getPosition();
      playerPos.z += 0.5;
      this.dustParticles.emitDust(playerPos);
    }
  }

  private togglePause(): void {
    if (this.currentGameState === GameState.PLAYING) {
      this.currentGameState = GameState.PAUSED;
      this.ui.setGameState(this.currentGameState);
    } else if (this.currentGameState === GameState.PAUSED) {
      this.currentGameState = GameState.PLAYING;
      this.ui.setGameState(this.currentGameState);
    }
  }

  private handlePause(): void {
    this.togglePause();
    this.audioManager.playPause();
  }

  private handleResume(): void {
    this.togglePause();
    this.audioManager.playResume();
  }

  private updateSkinDisplay(): void {
    const skins = this.characterCustomization.getSkins();
    const selectedSkinId = this.statsManager.getSelectedSkin();
    const unlockedSkins = this.statsManager.getUnlockedSkins();
    const bestScore = this.statsManager.getHighestScore();

    this.ui.updateSkinGrid(skins, selectedSkinId, unlockedSkins, bestScore);
  }

  public triggerCoinPickup(position?: THREE.Vector3): void {
    const coinPos = position || this.runner.getPosition();
    const sparklePos = coinPos.clone();
    sparklePos.y += 0.5;
    this.coinParticles.emitCoin(sparklePos);
    this.sparkleParticles.emitSparkle(sparklePos);
  }

  public triggerScoreCelebration(position?: THREE.Vector3): void {
    const celebrationPos = position || this.runner.getPosition();
    celebrationPos.y += 1;
    this.sparkleParticles.emitSparkle(celebrationPos);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const game = new ToiletRunner();

  // Register service worker for offline support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Service worker registration failed - app still works without it
    });
  }
});
