import { Difficulty } from './ObstaclePattern.js';

export interface PatternDistribution {
  easy: number;
  medium: number;
  hard: number;
  extreme: number;
}

export interface DifficultyTier {
  name: string;
  // Tier bounds are keyed to elapsed survival time (seconds), not score.
  // Score is inflated by near-miss/close-pass bonuses (see issue #76), which
  // let a single dodge throw a brand-new player into the hardest tier. Time
  // is the one clock every run shares regardless of bonus RNG.
  minTime: number;
  maxTime: number;
  patternDistribution: PatternDistribution;
  baseObstacleSpeed: number;
  gapBetweenWaves: number;
}

// Minimum reaction window (seconds) the player must be guaranteed between an
// obstacle spawning and it reaching them, regardless of world speed.
// Human reaction time (~0.25s) + the 0.68s lane-switch cost (issue #15)
// rounds up to ~0.6s as a safety floor per issue #74.
const MIN_REACTION_SECONDS = 0.6;

export class DifficultyManager {
  private static tiers: DifficultyTier[] = [
    {
      name: 'BEGINNER',
      minTime: 0,
      maxTime: 8,
      patternDistribution: { easy: 0.9, medium: 0.1, hard: 0.0, extreme: 0.0 },
      baseObstacleSpeed: 1.0,
      gapBetweenWaves: 28
    },
    {
      name: 'EASY',
      minTime: 8,
      maxTime: 20,
      patternDistribution: { easy: 0.65, medium: 0.3, hard: 0.05, extreme: 0.0 },
      baseObstacleSpeed: 1.05,
      gapBetweenWaves: 25
    },
    {
      name: 'INTERMEDIATE',
      minTime: 20,
      maxTime: 40,
      patternDistribution: { easy: 0.35, medium: 0.45, hard: 0.2, extreme: 0.0 },
      baseObstacleSpeed: 1.1,
      gapBetweenWaves: 22
    },
    {
      name: 'ADVANCED',
      minTime: 40,
      maxTime: 65,
      patternDistribution: { easy: 0.15, medium: 0.4, hard: 0.35, extreme: 0.1 },
      baseObstacleSpeed: 1.15,
      gapBetweenWaves: 19
    },
    {
      name: 'HARD',
      minTime: 65,
      maxTime: 95,
      patternDistribution: { easy: 0.05, medium: 0.25, hard: 0.45, extreme: 0.25 },
      baseObstacleSpeed: 1.2,
      gapBetweenWaves: 16
    },
    {
      name: 'EXPERT',
      minTime: 95,
      maxTime: 130,
      patternDistribution: { easy: 0.0, medium: 0.15, hard: 0.45, extreme: 0.4 },
      baseObstacleSpeed: 1.25,
      gapBetweenWaves: 13
    },
    {
      name: 'MASTER',
      minTime: 130,
      maxTime: Infinity,
      patternDistribution: { easy: 0.0, medium: 0.1, hard: 0.4, extreme: 0.5 },
      baseObstacleSpeed: 1.3,
      gapBetweenWaves: 10
    }
  ];

  // `elapsedSeconds` is survival time (or distance-travelled-as-seconds, if a
  // caller prefers distance), never score. Keeping the parameter typed as
  // `number` (rather than renaming methods) means existing call sites still
  // compile once they're updated to pass time instead of score — see the
  // required call-site changes noted in DifficultyManager's consumers.
  static getCurrentTier(elapsedSeconds: number): DifficultyTier {
    const tier = this.tiers.find(t => elapsedSeconds >= t.minTime && elapsedSeconds < t.maxTime);
    return tier || this.tiers[this.tiers.length - 1];
  }

  static selectDifficulty(tier: DifficultyTier, random: number): Difficulty {
    const { easy, medium, hard, extreme } = tier.patternDistribution;
    const normalizedRandom = random;

    if (normalizedRandom < easy) return 'EASY';
    if (normalizedRandom < easy + medium) return 'MEDIUM';
    if (normalizedRandom < easy + medium + hard) return 'HARD';
    return 'EXTREME';
  }

  static getBaseObstacleSpeed(elapsedSeconds: number): number {
    const tier = this.getCurrentTier(elapsedSeconds);
    const progress = this.getTierProgress(elapsedSeconds, tier);
    const nextTier = this.getNextTier(tier);

    if (!nextTier) return tier.baseObstacleSpeed;

    return this.lerp(
      tier.baseObstacleSpeed,
      nextTier.baseObstacleSpeed,
      progress
    );
  }

  static getGapBetweenWaves(elapsedSeconds: number): number {
    const tier = this.getCurrentTier(elapsedSeconds);
    const progress = this.getTierProgress(elapsedSeconds, tier);
    const nextTier = this.getNextTier(tier);

    if (!nextTier) return tier.gapBetweenWaves;

    const gap = this.lerp(
      tier.gapBetweenWaves,
      nextTier.gapBetweenWaves,
      progress
    );

    return Math.round(gap);
  }

  // Reaction window math (issue #74):
  //
  //   reactionTime = spawnDistance / worldSpeed
  //
  // main.ts currently grows worldSpeed unbounded with survival time
  // (BASE_SPEED + floor(survivalTime) * SPEED_INCREASE), while the spawn
  // runway in ObstacleManager has been a fixed distance. As speed climbs,
  // reactionTime shrinks toward zero because the numerator is constant while
  // the denominator grows. Solving for the distance that keeps reactionTime
  // pinned at-or-above the floor:
  //
  //   spawnDistance >= worldSpeed * MIN_REACTION_SECONDS
  //
  // e.g. at speed 10 (game start): 10 * 0.6 = 6 units minimum.
  //      at speed 70 (uncapped, ~2 minutes in, per issue #74): 70 * 0.6 = 42
  //      units minimum — the runway must grow linearly with speed, not stay
  //      fixed at 46, or the floor is violated well before that point.
  //
  // Callers should take the max of this floor and whatever base runway the
  // track geometry already provides, so early-game spacing (which already
  // exceeds the floor) is left untouched.
  static getMinSpawnDistance(worldSpeed: number): number {
    if (worldSpeed <= 0) return 0;
    return worldSpeed * MIN_REACTION_SECONDS;
  }

  private static getTierProgress(elapsedSeconds: number, tier: DifficultyTier): number {
    if (tier.maxTime === Infinity) return 0;
    return (elapsedSeconds - tier.minTime) / (tier.maxTime - tier.minTime);
  }

  private static getNextTier(tier: DifficultyTier): DifficultyTier | undefined {
    const currentIndex = this.tiers.indexOf(tier);
    return this.tiers[currentIndex + 1];
  }

  private static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * Math.max(0, Math.min(1, t));
  }

  static getTierName(elapsedSeconds: number): string {
    return this.getCurrentTier(elapsedSeconds).name;
  }

  static getAllTiers(): DifficultyTier[] {
    return [...this.tiers];
  }

  static validateDistributions(): boolean {
    return this.tiers.every(tier => {
      const { easy, medium, hard, extreme } = tier.patternDistribution;
      const sum = easy + medium + hard + extreme;
      return Math.abs(sum - 1.0) < 0.0001;
    });
  }
}
