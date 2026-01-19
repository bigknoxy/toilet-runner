import * as THREE from 'three';
import { SceneManager } from './core/SceneManager';
import { GameLoop } from './core/GameLoop';
import { GameState } from './core/GameState';
import { LeaderboardManager } from './core/LeaderboardManager';
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

const BASE_SPEED = 10;
const SPEED_INCREASE = 0.5;
const SCORE_RATE = 10;
const SCORE_MILESTONE = 100;

class ToiletRunner {
  private sceneManager: SceneManager;
  private gameLoop: GameLoop;
  private runner: RunnerController;
  private track: TrackManager;
  private obstacles: ObstacleManager;
  private collision: CollisionSystem;
  private audioManager: AudioManager;
  private environment: EnvironmentManager;
  private cameraManager: CameraManager;
  private input: InputManager;
  private ui: UIManager;
  private audioControls: AudioControls;
  private leaderboard: LeaderboardManager;
  private currentGameState: GameState = GameState.MENU;
  private score = 0;

  constructor() {
    console.log('ToiletRunner: Constructor started');
    this.sceneManager = new SceneManager();
    this.gameLoop = new GameLoop();

    console.log('ToiletRunner: Initializing game systems');
    this.runner = new RunnerController(this.sceneManager.getScene());
    this.track = new TrackManager(this.sceneManager.getScene());
    this.obstacles = new ObstacleManager(this.sceneManager.getScene(), this.track);
    this.collision = new CollisionSystem();
    this.audioManager = new AudioManager();
    this.environment = new EnvironmentManager(this.sceneManager.getScene());
    this.cameraManager = new CameraManager(this.sceneManager.getCamera());
    this.leaderboard = new LeaderboardManager();

    this.track.applyTileTexture(this.environment.getTileTexture());

    console.log('ToiletRunner: Setting up input manager');
    this.input = new InputManager(this.handleLaneChange.bind(this), this.togglePause.bind(this));
    this.input.setup();

    console.log('ToiletRunner: Setting up UI manager');
    this.ui = new UIManager();
    this.ui.setOnPlayCallback(this.startGame.bind(this));
    this.ui.setOnRestartCallback(this.restartGame.bind(this));
    this.ui.setOnPauseCallback(this.handlePause.bind(this));
    this.ui.setOnResumeCallback(this.handleResume.bind(this));
    this.ui.setOnViewLeaderboardCallback(this.showLeaderboard.bind(this));
    this.ui.setOnBackToGameOverCallback(this.backToGameOver.bind(this));
    this.ui.setGameState(this.currentGameState);

    console.log('ToiletRunner: Setting up audio controls');
    this.audioControls = new AudioControls(this.audioManager);

    console.log('ToiletRunner: Registering systems with game loop');
    this.gameLoop.registerSystem(this.update.bind(this));

    window.addEventListener('resize', this.handleResize.bind(this));

    console.log('ToiletRunner: Starting game loop');
    this.gameLoop.start();
    console.log('ToiletRunner: Constructor complete, game state:', this.currentGameState);
  }

  private update(delta: number): void {
    if (this.currentGameState === GameState.PLAYING) {
      const speedIncrease = Math.floor(this.score / 10) * SPEED_INCREASE;
      const gameSpeed = BASE_SPEED + speedIncrease;

      this.runner.setSpeed(gameSpeed);
      this.runner.update(delta);
      this.track.update(delta, gameSpeed);
      this.obstacles.update(delta, gameSpeed, this.score);
      this.environment.update(delta, gameSpeed);
      this.cameraManager.update(delta);

      if (this.collision.checkPlayerVsObstacles(this.runner.getMesh(), this.obstacles)) {
        this.audioManager.playCollision();
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
      }

    } else if (this.currentGameState === GameState.PAUSED) {
      this.sceneManager.render();
      return;
    }

    this.sceneManager.render();
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
    console.log('startGame: Game state changed to:', this.currentGameState);
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

document.addEventListener('DOMContentLoaded', () => {
  const game = new ToiletRunner();
  console.log('Toilet Runner Polish Complete - All Phases Implemented');
});
