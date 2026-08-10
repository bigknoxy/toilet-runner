import { describe, expect, test, beforeEach } from 'bun:test';
import {
  getEncouragingMessage,
  getScoreVerdict,
  isNewPersonalBest
} from '../src/game/ScoreVerdict';
import { StatsManager } from '../src/core/StatsManager';

describe('getEncouragingMessage', () => {
  test('a fresh profile beating zero is a personal best', () => {
    expect(getEncouragingMessage(61, 0, 12)).toBe('New Personal Best!');
  });

  test('beating the stored best is a personal best', () => {
    expect(getEncouragingMessage(120, 100, 12)).toBe('New Personal Best!');
  });

  test('within 10% of the best is "so close"', () => {
    expect(getEncouragingMessage(95, 100, 12)).toBe('So close to your record!');
  });

  test('a run compared against itself is never a personal best', () => {
    // The regression: previousBest read AFTER the run was recorded.
    expect(getEncouragingMessage(61.656, 61.656, 12)).toBe('So close to your record!');
  });

  test('falls through to time and score tiers', () => {
    expect(getEncouragingMessage(10, 100, 90)).toBe('Great endurance!');
    expect(getEncouragingMessage(250, 1000, 10)).toBe('Impressive run!');
    expect(getEncouragingMessage(60, 1000, 10)).toBe('Nice dodging!');
    expect(getEncouragingMessage(5, 1000, 10)).toBe('Keep practicing!');
  });

  test('a zero score on a fresh profile is not a personal best', () => {
    expect(getEncouragingMessage(0, 0, 0)).toBe('Keep practicing!');
    expect(isNewPersonalBest(0, 0)).toBe(false);
  });
});

describe('isNewPersonalBest', () => {
  test('compares the floored score, matching the displayed value', () => {
    expect(isNewPersonalBest(61.9, 61)).toBe(false);
    expect(isNewPersonalBest(62.1, 61)).toBe(true);
  });
});

describe('game over ordering', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('previousBest captured BEFORE endSession reports a personal best', () => {
    const stats = new StatsManager();
    stats.startSession();

    const previousBest = stats.getHighestScore();
    stats.endSession({ score: 61.656, distance: 61.656, obstaclesDodged: 3, duration: 12 });
    stats.updateHighestScore(Math.floor(61.656));

    expect(getScoreVerdict(61.656, previousBest, 12)).toEqual({
      isNewBest: true,
      message: 'New Personal Best!'
    });
  });

  test('previousBest captured AFTER endSession loses the personal best', () => {
    const stats = new StatsManager();
    stats.startSession();

    stats.endSession({ score: 61.656, distance: 61.656, obstaclesDodged: 3, duration: 12 });
    const previousBest = stats.getHighestScore();

    // Documents why the capture must stay above endSession(): endSession()
    // already stored this run's score, so the run now loses to itself.
    expect(previousBest).toBeGreaterThanOrEqual(61);
    expect(getScoreVerdict(61.656, previousBest, 12).isNewBest).toBe(false);
  });
});
