import { describe, expect, test, beforeAll } from 'bun:test';
import { PatternPool, type Difficulty } from '../src/game/ObstaclePattern';
import { ObstacleType } from '../src/game/ObstacleTypes';

const DIFFICULTIES: Difficulty[] = ['EASY', 'MEDIUM', 'HARD', 'EXTREME'];

// The known-good gapToNext range from the original six-pattern pool
// (EASY 22 down to EXTREME 13). New patterns must not exceed this range.
const MIN_GAP = 13;
const MAX_GAP = 22;

beforeAll(() => {
  PatternPool.initialize();
});

describe('PatternPool', () => {
  test('pool has grown substantially past the original six patterns', () => {
    const all = PatternPool.getAllPatterns();
    expect(all.length).toBeGreaterThan(20);
  });

  test('every difficulty bucket is non-empty', () => {
    for (const difficulty of DIFFICULTIES) {
      const patterns = PatternPool.getPatternsByDifficulty(difficulty);
      expect(patterns.length).toBeGreaterThan(0);
    }
  });

  test('every pattern has a genuinely clear guaranteed lane', () => {
    const all = PatternPool.getAllPatterns();
    for (const pattern of all) {
      const occupiedLanes = new Set(pattern.obstacles.map(o => o.lane));
      expect(occupiedLanes.has(pattern.guaranteedClearLane)).toBe(false);
    }
  });

  test('every pattern has a positive gapToNext within the existing range', () => {
    const all = PatternPool.getAllPatterns();
    for (const pattern of all) {
      expect(pattern.gapToNext).toBeGreaterThan(0);
      expect(pattern.gapToNext).toBeGreaterThanOrEqual(MIN_GAP);
      expect(pattern.gapToNext).toBeLessThanOrEqual(MAX_GAP);
    }
  });

  test('every pattern passes the existing validator', () => {
    const all = PatternPool.getAllPatterns();
    for (const pattern of all) {
      expect(PatternPool.validatePattern(pattern)).toBe(true);
    }
  });

  test('pattern ids are unique across the pool', () => {
    const all = PatternPool.getAllPatterns();
    const ids = all.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('BARRIER_HIGH patterns (#71)', () => {
  test('the pool actually ships barriers, so jump is no longer a free answer', () => {
    const withBarrier = PatternPool.getAllPatterns().filter(p =>
      p.obstacles.some(o => o.type === ObstacleType.BARRIER_HIGH)
    );
    expect(withBarrier.length).toBeGreaterThan(0);
  });

  test('barriers appear before EXTREME so the player meets one while there is still time to react', () => {
    const barrierDifficulties = new Set(
      PatternPool.getAllPatterns()
        .filter(p => p.obstacles.some(o => o.type === ObstacleType.BARRIER_HIGH))
        .map(p => p.difficulty)
    );
    expect(barrierDifficulties.has('MEDIUM')).toBe(true);
  });

  test('no barrier pattern blocks every lane', () => {
    for (const pattern of PatternPool.getAllPatterns()) {
      if (!pattern.obstacles.some(o => o.type === ObstacleType.BARRIER_HIGH)) continue;
      const occupied = new Set(pattern.obstacles.map(o => o.lane));
      expect(occupied.size).toBeLessThan(3);
      expect(occupied.has(pattern.guaranteedClearLane)).toBe(false);
    }
  });
});
