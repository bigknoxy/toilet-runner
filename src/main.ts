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
import { ParticleSystem, ParticlePresets } from './game/visual/ParticleSystem';
import { MaterialFactory } from './game/visual/MaterialFactory';
import { IntroSequence } from './game/IntroSequence';

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
  private introSequence!: IntroSequence;
  private currentGameState: GameState = GameState.MENU;
  private score = 0;

  private postProcessing!: PostProcessingManager;
  private particles!: ParticleSystem;

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    console.log('ToiletRunner: Initializing...');

    this.performanceConfig = await PerformanceManager.initialize();
    console.log('📊 Performance config:', this.performanceConfig);

    this.sceneManager = new SceneManager();
    this.gameLoop = new GameLoop();

    this.setupVisualEffects();
    this.setupGameLogic();
    this.setupUIAndInput();

    // Initialize intro sequence
    this.introSequence = new IntroSequence(
      this.sceneManager.getCamera(),
      this.sceneManager.getScene(),
      this.ui
    );

    // Show loading screen, then play intro sequence
    this.ui.showLoadingScreen();
    this.simulateLoading().then(() => {
      this.ui.hideLoadingScreen();
      this.playIntroSequence();
    });

    console.log('✅ ToiletRunner initialized');
  }

  private async simulateLoading(): Promise<void> {
    const stages = [20, 40, 60, 80, 100];
    for (const progress of stages) {
      this.ui.updateLoadingProgress(progress);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  private playIntroSequence(): void {
    this.introSequence.start({
      onComplete: () => {
        console.log('Intro sequence completed');
        this.ui.showStartScreen();
      }
    });
  }

  private setupVisualEffects(): void {
    const scene = this.sceneManager.getScene();
    const camera = this.sceneManager.getCamera();
    const renderer = this.sceneManager.getRenderer();

    MaterialFactory.setQuality(this.performanceConfig.tier);

    const particleConfig = this.performanceConfig.particles;
    this.particles = new ParticleSystem(scene, {
      ...ParticlePresets.collision,
      maxParticles: particleConfig.collision
    });

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
      fxaa: true
    });
  }

  private setupGameLogic(): void {
    const scene = this.sceneManager.getScene();

    this.runner = new RunnerController(scene);
    this.track = new TrackManager(scene);
    this.obstacles = new ObstacleManager(scene, this.track, this.performanceConfig.emojiFaces);
    this.collision = new CollisionSystem();
    this.audioManager = new AudioManager();
    this.environment = new EnvironmentManager(scene);
    this.cameraManager = new CameraManager(this.sceneManager.getCamera());
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
    this.ui.setGameState(this.currentGameState);

    this.audioControls = new AudioControls(this.audioManager);

    // Register game loop after intro sequence is complete
    this.introSequence.start({
      onComplete: () => {
        console.log('Intro sequence completed, starting game loop');
        this.gameLoop.registerSystem(this.update.bind(this));
        this.gameLoop.start();
        this.ui.showStartScreen();
      }
    });
  }

  private update(delta: number): void {
    PerformanceManager.updateFPS(delta);

    if (this.currentGameState === GameState.PLAYING) {
      const speedIncrease = Math.floor(this.score / 10) * SPEED_INCREASE;
      const gameSpeed = BASE_SPEED + speedIncrease;

      this.runner.setSpeed(gameSpeed);
      this.runner.update(delta);
      this.track.update(delta, gameSpeed);
      this.obstacles.update(delta, gameSpeed, this.score);
      this.environment.update(delta, gameSpeed);
      this.cameraManager.update(delta);
      this.particles.update(delta);

      if (this.collision.checkPlayerVsObstacles(this.runner.getMesh(), this.obstacles)) {
        this.handleCollision();
        this.endGame();
        return;
      }

      const prevScore = Math.floor(this.score);
      this.score += SCORE_RATE * delta;
      const newScore = Math.floor(this.score);

      this.ui.updateScore(this.score);

      if (Math.floor(newScore / SCORE_MILESTONE) > Math.floor(prevScore / SCORE_MILESTONE)) {
        this.audioManager.playScoreMilestone(newScore);
        this.ui.triggerScoreFlash();
        this.handleScoreMilestone();
      }

    } else if (this.currentGameState === GameState.PAUSED) {
      this.sceneManager.render();
      return;
    }

    this.sceneManager.render();
  }

  private handleCollision(): void {
    this.audioManager.playCollision();
    this.cameraManager.triggerShake();

    const playerPos = this.runner.getPosition();
    this.particles.emit(playerPos, this.performanceConfig.particles.collision);
  }

  private handleScoreMilestone(): void {
    const playerPos = this.runner.getPosition();
    const sparklePos = playerPos.clone();
    sparklePos.y += 1;
    this.particles.emit(sparklePos, this.performanceConfig.particles.effects);
  }

  private handleResize(): void {
    this.sceneManager.resize(window.innerWidth, window.innerHeight);
  }

  public startGame(): void {
    console.log('startGame: Starting game, current state:', this.currentGameState);
    this.reset();
    this.currentGameState = GameState.PLAYING;
    this.ui.setGameState(this.currentGameState);
    this.audioManager.playStartGame();
  }

  private endGame(): void {
    this.currentGameState = GameState.GAMEOVER;
    this.audioManager.playGameOver();
    this.cameraManager.triggerShake();

    this.leaderboard.addScore(this.score);

    const topScores = this.leaderboard.getTopScores();
    this.ui.updateLeaderboardFull(topScores);

    this.ui.showGameOverScreen(this.score);
  }

  public showLeaderboard(): void {
    this.currentGameState = GameState.LEADERBOARD;
    this.ui.setGameState(this.currentGameState);
  }

  public backToGameOver(): void {
    this.currentGameState = GameState.GAMEOVER;
    this.ui.showGameOverScreen(this.score);
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
    this.particles.reset();
    this.score = 0;
    this.audioManager.setLastScoreMilestone(0);
    this.ui.updateScore(this.score);
  }

  private handleLaneChange(direction: -1 | 1): void {
    if (this.currentGameState === GameState.PLAYING) {
      if (direction === -1) {
        this.runner.moveLeft();
      } else {
        this.runner.moveRight();
      }
      this.audioManager.playLaneChange();
      this.cameraManager.triggerShake();

      const playerPos = this.runner.getPosition();
      playerPos.z += 0.5;
      this.particles.emit(playerPos, 3);
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
}

document.addEventListener('DOMContentLoaded', async () => {
  const game = new ToiletRunner();
  console.log('🎮 Toilet Runner - Visual Polish Features Added');
});
