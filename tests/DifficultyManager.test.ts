import { describe, expect, test } from 'bun:test';
import { DifficultyManager } from '../src/game/DifficultyManager';

describe('getMinSpawnDistance (issue #74: reaction window floor)', () => {
  test('reaction time never drops below the 0.6s floor at high speed', () => {
    // Regression for the old fixed-46-unit runway: at speed 70 (~2 minutes
    // in, per issue #74's own math) 46 / 70 = 0.657s today, but the runway
    // was fixed and would have kept shrinking the reaction window as speed
    // climbed further with no floor at all.
    const speeds = [10, 20, 40, 70, 100, 250];
    for (const speed of speeds) {
      const distance = DifficultyManager.getMinSpawnDistance(speed);
      const reactionTime = distance / speed;
      expect(reactionTime).toBeGreaterThanOrEqual(0.6 - 1e-9);
    }
  });

  test('scales linearly with world speed', () => {
    expect(DifficultyManager.getMinSpawnDistance(10)).toBeCloseTo(6, 5);
    expect(DifficultyManager.getMinSpawnDistance(70)).toBeCloseTo(42, 5);
  });

  test('zero or negative speed yields zero distance (no divide-by-zero surprises)', () => {
    expect(DifficultyManager.getMinSpawnDistance(0)).toBe(0);
    expect(DifficultyManager.getMinSpawnDistance(-5)).toBe(0);
  });
});

describe('getCurrentTier / getTierName (issue #76: tiers keyed to time, not score)', () => {
  test('elapsed time alone determines the tier', () => {
    expect(DifficultyManager.getTierName(0)).toBe('BEGINNER');
    expect(DifficultyManager.getTierName(9)).toBe('EASY');
    expect(DifficultyManager.getTierName(21)).toBe('INTERMEDIATE');
    expect(DifficultyManager.getTierName(200)).toBe('MASTER');
  });

  test('a score-inflating bonus does not advance the tier on its own', () => {
    // Simulates the near-miss/close-pass bonus bug: a huge score spike at
    // low elapsed survival time. Because tiers are keyed to time, not score,
    // passing the (now-irrelevant) score has no bearing here — a caller
    // must pass survival time, and a brand-new player 3 seconds into a run
    // must stay in BEGINNER no matter how much bonus score they've banked.
    const elapsedSeconds = 3;
    const tier = DifficultyManager.getCurrentTier(elapsedSeconds);
    expect(tier.name).toBe('BEGINNER');
  });

  test('tier progression is monotonic and reaches MASTER eventually', () => {
    const names = [0, 10, 25, 45, 70, 100, 140].map(t => DifficultyManager.getTierName(t));
    expect(names).toEqual([
      'BEGINNER',
      'EASY',
      'INTERMEDIATE',
      'ADVANCED',
      'HARD',
      'EXPERT',
      'MASTER'
    ]);
  });
});

describe('getBaseObstacleSpeed / getGapBetweenWaves interpolate on time', () => {
  test('speed multiplier increases monotonically with elapsed time', () => {
    const early = DifficultyManager.getBaseObstacleSpeed(0);
    const mid = DifficultyManager.getBaseObstacleSpeed(50);
    const late = DifficultyManager.getBaseObstacleSpeed(150);
    expect(mid).toBeGreaterThan(early);
    expect(late).toBeGreaterThan(mid);
  });

  test('gap between waves shrinks (tighter spacing) as elapsed time grows', () => {
    const early = DifficultyManager.getGapBetweenWaves(0);
    const late = DifficultyManager.getGapBetweenWaves(150);
    expect(late).toBeLessThan(early);
  });
});

describe('validateDistributions', () => {
  test('every tier pattern distribution still sums to 1', () => {
    expect(DifficultyManager.validateDistributions()).toBe(true);
  });
});
