import { Difficulty } from './ObstaclePattern.js';

export interface PatternDistribution {
  easy: number;
  medium: number;
  hard: number;
  extreme: number;
}

export interface DifficultyTier {
  name: string;
  minScore: number;
  maxScore: number;
  patternDistribution: PatternDistribution;
  spawnRate: number;
  baseObstacleSpeed: number;
  gapBetweenWaves: number;
}

export class DifficultyManager {
  private static tiers: DifficultyTier[] = [
    {
      name: 'BEGINNER',
      minScore: 0,
      maxScore: 100,
      patternDistribution: { easy: 0.8, medium: 0.2, hard: 0.0, extreme: 0.0 },
      spawnRate: 25,
      baseObstacleSpeed: 1.0,
      gapBetweenWaves: 25
    },
    {
      name: 'INTERMEDIATE',
      minScore: 100,
      maxScore: 250,
      patternDistribution: { easy: 0.4, medium: 0.4, hard: 0.2, extreme: 0.0 },
      spawnRate: 22,
      baseObstacleSpeed: 1.1,
      gapBetweenWaves: 22
    },
    {
      name: 'ADVANCED',
      minScore: 250,
      maxScore: 500,
      patternDistribution: { easy: 0.2, medium: 0.4, hard: 0.3, extreme: 0.1 },
      spawnRate: 18,
      baseObstacleSpeed: 1.2,
      gapBetweenWaves: 18
    },
    {
      name: 'MASTER',
      minScore: 500,
      maxScore: Infinity,
      patternDistribution: { easy: 0.1, medium: 0.3, hard: 0.4, extreme: 0.2 },
      spawnRate: 15,
      baseObstacleSpeed: 1.3,
      gapBetweenWaves: 15
    }
  ];

  static getCurrentTier(score: number): DifficultyTier {
    const tier = this.tiers.find(t => score >= t.minScore && score < t.maxScore);
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

  static getSpawnRate(score: number): number {
    const tier = this.getCurrentTier(score);
    const progress = this.getTierProgress(score, tier);
    const nextTier = this.getNextTier(tier);

    if (!nextTier) return tier.spawnRate;

    const spawnRate = this.lerp(
      tier.spawnRate,
      nextTier.spawnRate,
      progress
    );

    return Math.round(spawnRate);
  }

  static getBaseObstacleSpeed(score: number): number {
    const tier = this.getCurrentTier(score);
    const progress = this.getTierProgress(score, tier);
    const nextTier = this.getNextTier(tier);

    if (!nextTier) return tier.baseObstacleSpeed;

    return this.lerp(
      tier.baseObstacleSpeed,
      nextTier.baseObstacleSpeed,
      progress
    );
  }

  static getGapBetweenWaves(score: number): number {
    const tier = this.getCurrentTier(score);
    const progress = this.getTierProgress(score, tier);
    const nextTier = this.getNextTier(tier);

    if (!nextTier) return tier.gapBetweenWaves;

    const gap = this.lerp(
      tier.gapBetweenWaves,
      nextTier.gapBetweenWaves,
      progress
    );

    return Math.round(gap);
  }

  private static getTierProgress(score: number, tier: DifficultyTier): number {
    if (tier.maxScore === Infinity) return 0;
    return (score - tier.minScore) / (tier.maxScore - tier.minScore);
  }

  private static getNextTier(tier: DifficultyTier): DifficultyTier | undefined {
    const currentIndex = this.tiers.indexOf(tier);
    return this.tiers[currentIndex + 1];
  }

  private static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * Math.max(0, Math.min(1, t));
  }

  static getTierName(score: number): string {
    return this.getCurrentTier(score).name;
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
