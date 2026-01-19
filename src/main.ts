import * as THREE from 'three';
import { SceneManager } from './core/SceneManager';
import { GameLoop } from './core/GameLoop';
import { GameState } from './core/GameState';
import { LeaderboardManager } from './core/LeaderboardManager';
import { RunnerController } from './game/RunnerController';
import { TrackManager } from './game/TrackManager';
import { ObstacleManager } from './game/ObstacleManager';
import { CollisionSystem } from './game/CollisionSystem';
import { InputManager } from './input/InputManager';
import { UIManager } from './ui/UIManager';

const BASE_SPEED = 10;
const SPEED_INCREASE = 0.5; // Speed increase per 10 score points
const SCORE_RATE = 10; // Score points per second

class ToiletRunner {
  private sceneManager: SceneManager;
  private gameLoop: GameLoop;
  private runner: RunnerController;
  private track: TrackManager;
  private obstacles: ObstacleManager;
  private collision: CollisionSystem;
  private input: InputManager;
  private ui: UIManager;
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
    this.leaderboard = new LeaderboardManager();

    console.log('ToiletRunner: Setting up input manager');
    this.input = new InputManager(this.handleLaneChange.bind(this), this.togglePause.bind(this));
    this.input.setup();

    console.log('ToiletRunner: Setting up UI manager');
    this.ui = new UIManager();
    this.ui.setOnPlayCallback(this.startGame.bind(this));
    this.ui.setOnRestartCallback(this.restartGame.bind(this));
    this.ui.setOnPauseCallback(this.togglePause.bind(this));
    this.ui.setOnResumeCallback(this.togglePause.bind(this));
    this.ui.setOnViewLeaderboardCallback(this.showLeaderboard.bind(this));
    this.ui.setOnBackToGameOverCallback(this.backToGameOver.bind(this));
    this.ui.setGameState(this.currentGameState);

    console.log('ToiletRunner: Registering systems with game loop');
    this.gameLoop.registerSystem(this.update.bind(this));

    // Setup window resize
    window.addEventListener('resize', this.handleResize.bind(this));

    console.log('ToiletRunner: Starting game loop');
    this.gameLoop.start();
    console.log('ToiletRunner: Constructor complete, game state:', this.currentGameState);
  }

  private update(delta: number): void {
    if (this.currentGameState === GameState.PLAYING) {
      // Calculate game speed with difficulty scaling
      const speedIncrease = Math.floor(this.score / 10) * SPEED_INCREASE;
      const gameSpeed = BASE_SPEED + speedIncrease;

      console.log('Update: speed=' + gameSpeed + ', score=' + this.score + ', delta=' + delta);

      this.runner.setSpeed(gameSpeed);
      this.runner.update(delta);
      this.track.update(delta, gameSpeed);

      // Update obstacles with collision detection
      this.obstacles.update(delta, gameSpeed, this.score);

      // Check collisions using CollisionSystem
      if (this.collision.checkPlayerVsObstacles(this.runner.getMesh(), this.obstacles)) {
        this.endGame();
      }

      // Update score based on time
      this.score += SCORE_RATE * delta;
      this.ui.updateScore(this.score);
    } else if (this.currentGameState === GameState.PAUSED) {
      // Don't update game state when paused, just render
      this.sceneManager.render();
      return;
    }

    // Always render
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
    console.log('startGame: Game state changed to:', this.currentGameState);
  }

  private endGame(): void {
    this.currentGameState = GameState.GAMEOVER;

    // Save score to leaderboard
    this.leaderboard.addScore(this.score);

    // Update leaderboard for display
    const topScores = this.leaderboard.getTopScores();
    this.ui.updateLeaderboardFull(topScores);

    // Show game over screen with score
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
    this.score = 0;
    this.ui.updateScore(this.score);
  }

  private handleLaneChange(direction: -1 | 1): void {
    if (this.currentGameState === GameState.PLAYING) {
      if (direction === -1) {
        this.runner.moveLeft();
      } else {
        this.runner.moveRight();
      }
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

}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const game = new ToiletRunner();
  console.log('Toilet Runner Phase 8 Complete - Final Integration Implemented');
});
