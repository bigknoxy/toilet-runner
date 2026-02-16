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
  baseObstacleSpeed: number;
  gapBetweenWaves: number;
}

export class DifficultyManager {
  private static tiers: DifficultyTier[] = [
    {
      name: 'BEGINNER',
      minScore: 0,
      maxScore: 50,
      patternDistribution: { easy: 0.9, medium: 0.1, hard: 0.0, extreme: 0.0 },
      baseObstacleSpeed: 1.0,
      gapBetweenWaves: 28
    },
    {
      name: 'EASY',
      minScore: 50,
      maxScore: 120,
      patternDistribution: { easy: 0.65, medium: 0.3, hard: 0.05, extreme: 0.0 },
      baseObstacleSpeed: 1.05,
      gapBetweenWaves: 25
    },
    {
      name: 'INTERMEDIATE',
      minScore: 120,
      maxScore: 200,
      patternDistribution: { easy: 0.35, medium: 0.45, hard: 0.2, extreme: 0.0 },
      baseObstacleSpeed: 1.1,
      gapBetweenWaves: 22
    },
    {
      name: 'ADVANCED',
      minScore: 200,
      maxScore: 320,
      patternDistribution: { easy: 0.15, medium: 0.4, hard: 0.35, extreme: 0.1 },
      baseObstacleSpeed: 1.15,
      gapBetweenWaves: 19
    },
    {
      name: 'HARD',
      minScore: 320,
      maxScore: 450,
      patternDistribution: { easy: 0.05, medium: 0.25, hard: 0.45, extreme: 0.25 },
      baseObstacleSpeed: 1.2,
      gapBetweenWaves: 16
    },
    {
      name: 'EXPERT',
      minScore: 450,
      maxScore: 600,
      patternDistribution: { easy: 0.0, medium: 0.15, hard: 0.45, extreme: 0.4 },
      baseObstacleSpeed: 1.25,
      gapBetweenWaves: 13
    },
    {
      name: 'MASTER',
      minScore: 600,
      maxScore: Infinity,
      patternDistribution: { easy: 0.0, medium: 0.1, hard: 0.4, extreme: 0.5 },
      baseObstacleSpeed: 1.3,
      gapBetweenWaves: 10
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
