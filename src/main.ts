import '../styles/modals.css';
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
  private passedObstacles: Set<number> = new Set();

  private postProcessing!: PostProcessingManager;
  private dustParticles!: ParticleSystem;
  private sparkleParticles!: ParticleSystem;
  private impactParticles!: ParticleSystem;
  private coinParticles!: ParticleSystem;
  private frameCounter = 0;
  private dustEmissionTimer = 0;

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    console.log('[INIT] Starting...');
    this.sceneManager = new SceneManager();
    this.gameLoop = new GameLoop();

    console.log('[INIT] Creating PerformanceManager...');
    this.performanceConfig = await PerformanceManager.initialize();
    console.log('[INIT] PerformanceManager created:', this.performanceConfig);

    console.log('[INIT] Setting up game logic...');
    this.setupGameLogic();
    console.log('[INIT] Game logic setup complete');

    console.log('[INIT] Setting up UI and input...');
    this.setupUIAndInput();
    console.log('[INIT] UI and input setup complete');

    console.log('[INIT] Setting up visual effects...');
    this.setupVisualEffects();
    console.log('[INIT] Visual effects setup complete');

    console.log('[INIT] Showing loading screen...');
    this.ui.showLoadingScreen();
    console.log('[INIT] Loading screen shown, starting performLoading...');

    console.log('[INIT] Loading assets...');
    await this.performLoading();
    console.log('[INIT] Loading complete');

    console.log('[INIT] Fading loading screen...');
    this.ui.fadeLoadingScreen();
    console.log('[INIT] Fade animation started, waiting 800ms...');

    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('[INIT] 800ms wait complete');

    console.log('[INIT] Explicitly hiding loading screen...');
    this.ui.hideLoadingScreen();
    console.log('[INIT] Loading screen hidden');

    console.log('[INIT] Setting game state to MENU...');
    this.ui.setGameState(this.currentGameState);
    console.log('[INIT] Game state set to MENU');

    console.log('[INIT] Setting up UI system references...');
    this.ui.setDailyChallenges(this.dailyChallenges);
    this.ui.setStatsManager(this.statsManager);
    console.log('[INIT] UI system references set');

    console.log('[INIT] Updating skin display...');
    this.updateSkinDisplay();
    console.log('[INIT] Skin display updated');

    console.log('[INIT] Updating challenges display...');
    this.ui.updateChallengesDisplay();
    console.log('[INIT] Challenges display updated');

    console.log('[INIT] Updating stats from manager...');
    this.ui.updateStatsFromManager();
    console.log('[INIT] Stats updated');

    console.log('[INIT] Registering game loop system...');
    this.gameLoop.registerSystem(this.update.bind(this));
    console.log('[INIT] Game loop system registered');

    console.log('[INIT] Starting game loop...');
    this.gameLoop.start();
    console.log('[INIT] Game loop started - initialization complete!');
  }

  private setupResizeListener(): void {
    let resizeTimeout: number | null = null;

    const debouncedResize = (): void => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        console.log('[RESIZE] Updating renderer size:', window.innerWidth, 'x', window.innerHeight);
        this.sceneManager.resize(window.innerWidth, window.innerHeight);
        resizeTimeout = null;
      }, 100);
    };

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', debouncedResize);

    console.log('[INIT] Resize listener registered');
  }

  private async performLoading(): Promise<void> {
    console.log('[LOADING] performLoading() started');
    
    const minLoadTime = 1500;
    const startTime = Date.now();
    console.log('[LOADING] startTime:', startTime);
    console.log('[LOADING] minLoadTime:', minLoadTime);
    
    const progressBar = this.ui.getLoadingProgressBar();
    if (!progressBar) {
      console.log('[LOADING] Progress bar NOT found!');
    } else {
      console.log('[LOADING] Progress bar found:', progressBar);
    }
    
    while (Date.now() - startTime < minLoadTime) {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / minLoadTime) * 100, 100);
      console.log('[LOADING] Progress:', progress + '%');
      progressBar.style.width = progress + '%';
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    progressBar.style.width = '100%';
    console.log('[LOADING] Loading loop complete');
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
    console.log('[GAMELOOP] UPDATE CALLED - delta:', delta.toFixed(4));
    PerformanceManager.updateFPS(delta);

    // Log state every 60 frames (approx 1 second at 60fps)
    this.frameCounter = (this.frameCounter || 0) + 1;
    if (this.frameCounter % 60 === 0) {
      console.log('[GAMELOOP] Frame:', this.frameCounter, 'State:', this.currentGameState);
    }

    if (this.currentGameState === GameState.PLAYING) {
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
          
          // Trigger celebration effects for successful dodge
          const dodgePos = new THREE.Vector3(obstacle.x, playerPos.y, playerPos.z + 1);
          this.sparkleParticles.emitSparkle(dodgePos);
          
          // Light camera shake for successful dodge
          this.cameraShake.shake(0.03, 0.1);
        }
      }
      
      // Clean up passed obstacles that are too far behind
      this.passedObstacles.forEach((obstacleId) => {
        const [x, z] = obstacleId.split('_').map(Number);
        if (z > playerPos.z + 10) {
          this.passedObstacles.delete(obstacleId);
        }
      });
      
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
        const playerPos = this.runner.getPosition();
        const dustPos = playerPos.clone();
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

      if (this.collision.checkPlayerVsObstacles(this.runner.getMesh(), this.obstacles)) {
        console.log('[MAIN] ==================== COLLISION DETECTED IN MAIN ====================');
        console.log('[MAIN] Calling handleCollision()...');
        this.handleCollision();
        console.log('[MAIN] handleCollision() complete, calling endGame()...');
        this.endGame();
        console.log('[MAIN] endGame() complete, collision handling done');
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

      // Update score animator with actual score
      this.scoreAnimator.updateScore(this.score);

      // Update score display in game loop for smooth animation
      this.scoreAnimator.update(delta);
      
      // Update HUD
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
    // This ensures UI overlays are properly displayed
    this.sceneManager.render();
    
    // Log rendering state every 60 frames
    if (this.frameCounter % 60 === 0) {
      console.log('[GAMELOOP] Frame:', this.frameCounter, 'State:', this.currentGameState, 'Rendered scene');
    }
  }

  private handleCollision(): void {
    this.audioManager.playCollision();
    this.cameraShake.shake(0.3, 0.4); // Heavy shake for collision

    const playerPos = this.runner.getPosition();
    this.impactParticles.emitImpact(playerPos);
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
    console.log('[GAME] startGame called, current state:', this.currentGameState);
    this.ui.hideAllScreens();
    this.currentGameState = GameState.PLAYING;
    this.ui.setGameState(this.currentGameState);
    this.reset();
    this.audioManager.playStartGame();
    this.statsManager.startSession();
    console.log('[GAME] Game started successfully, state is now PLAYING');
  }

  private endGame(): void {
    console.log('[GAME] ==================== ENDGAME START ====================');
    console.log('[GAME] Score:', this.score, 'Survival time:', this.survivalTime);
    console.log('[GAME] Current state before endGame:', this.currentGameState);
    
    this.currentGameState = GameState.GAMEOVER;
    console.log('[GAME] State changed to GAMEOVER');
    
    this.ui.setGameState(this.currentGameState);
    console.log('[GAME] Called ui.setGameState(GAMEOVER)');
    
    this.audioManager.playGameOver();
    this.cameraShake.shake(0.25, 0.5); // Heavy, longer shake for game over

    this.leaderboard.addScore(this.score);
    console.log('[GAME] Score added to leaderboard');

    const sessionDistance = this.score;
    this.statsManager.endSession({
      score: this.score,
      distance: sessionDistance,
      obstaclesDodged: this.obstacles.getDodgedCount(),
      duration: this.survivalTime
    });
    console.log('[GAME] Stats manager updated');

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
    console.log('[GAME] Streak updated:', this.statsManager.getCurrentStreak());

    const topScores = this.leaderboard.getTopScores();
    this.ui.updateLeaderboardFull(topScores);
    console.log('[UI] Leaderboard updated');

    this.ui.updateStatsFromManager();
    console.log('[UI] Stats from manager updated');
    console.log('[GAME] Character customization updated');
    
    this.ui.updateChallengesDisplay();
    console.log('[UI] Challenges display updated');
    
    console.log('[GAME] About to call showGameOverScreen...');
    this.ui.showGameOverScreen(this.score);
    
    // Verify DOM state after a short delay
    setTimeout(() => {
      const overlay = document.getElementById('overlay');
      const gameOverScreen = document.getElementById('game-over-screen');
      console.log('[GAME] ==================== DOM CHECK (100ms delay) ====================');
      console.log('[GAME] Overlay exists:', !!overlay);
      console.log('[GAME] Overlay display:', overlay?.style.display);
      console.log('[GAME] Overlay computed display:', overlay ? window.getComputedStyle(overlay).display : 'N/A');
      console.log('[GAME] Overlay computed z-index:', overlay ? window.getComputedStyle(overlay).zIndex : 'N/A');
      console.log('[GAME] Overlay computed visibility:', overlay ? window.getComputedStyle(overlay).visibility : 'N/A');
      console.log('[GAME] Game over screen exists:', !!gameOverScreen);
      console.log('[GAME] Game over screen display:', gameOverScreen?.style.display);
      console.log('[GAME] Game over screen computed display:', gameOverScreen ? window.getComputedStyle(gameOverScreen).display : 'N/A');
      
      const overlayRect = overlay?.getBoundingClientRect();
      const gameOverRect = gameOverScreen?.getBoundingClientRect();
      console.log('[GAME] Overlay rect:', overlayRect);
      console.log('[GAME] Game over screen rect:', gameOverRect);
      console.log('[GAME] ==================== ENDGAME COMPLETE ====================');
    }, 100);
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
    console.log('[GAME] Restarting game...');
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
    this.passedObstacles.clear();
    this.audioManager.setLastScoreMilestone(0);
    this.scoreAnimator.reset();
    this.hud.reset();
  }

  private handleLaneChange(direction: -1 | 1): void {
    if (this.currentGameState === GameState.PLAYING) {
      if (direction === -1) {
        this.runner.moveLeft();
      } else {
        this.runner.moveRight();
      }
      this.audioManager.playLaneChange();

      // Haptic feedback on mobile instead of camera shake
      if ('vibrate' in navigator && /Android|iPhone|iPad/i.test(navigator.userAgent)) {
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
  console.log('🎮 Toilet Runner - Visual Polish Features Added');
});
