import { ObstaclePattern, Difficulty } from './ObstaclePattern.js';
import { PatternPool } from './ObstaclePattern.js';
import { DifficultyManager, DifficultyTier } from './DifficultyManager.js';

export interface PatternSequence {
  patterns: ObstaclePattern[];
  currentIndex: number;
}

export class PatternSequencer {
  private static currentSequence: PatternSequence | null = null;
  private static score: number = 0;
  private static lastSpawnedPattern: ObstaclePattern | null = null;
  private static currentClearLane: 0 | 1 | 2 = 1;
  private static recentDifficulties: Difficulty[] = [];

  static initialize(): void {
    // No pre-built sequences needed
  }

  static setScore(newScore: number): void {
    this.score = newScore;
  }

  static getNextPattern(): ObstaclePattern {
    if (!this.currentSequence || this.currentSequence.currentIndex >= this.currentSequence.patterns.length) {
      const tier = DifficultyManager.getCurrentTier(this.score);
      this.currentSequence = this.buildSequence(tier);
    }

    let pattern = this.currentSequence.patterns[this.currentSequence.currentIndex];

    // Ensure solvability by checking clear lane continuity
    const tier = DifficultyManager.getCurrentTier(this.score);
    pattern = this.ensureSolvablePattern(pattern, tier);

    this.currentSequence.currentIndex++;
    this.lastSpawnedPattern = pattern;

    // Update current clear lane
    this.currentClearLane = pattern.guaranteedClearLane;

    // Track recent difficulties for anti-streak
    this.recentDifficulties.push(pattern.difficulty);
    if (this.recentDifficulties.length > 3) {
      this.recentDifficulties.shift();
    }

    return pattern;
  }

  private static buildSequence(tier: DifficultyTier): PatternSequence {
    const difficulties: Difficulty[] = [];
    for (let i = 0; i < 3; i++) {
      difficulties.push(this.rollDifficulty(tier));
    }

    const patternGroups = difficulties.map(d => PatternPool.getPatternsByDifficulty(d));
    const patterns = this.generateSolvableSequence(patternGroups);

    return { patterns, currentIndex: 0 };
  }

  private static rollDifficulty(tier: DifficultyTier): Difficulty {
    let { easy, medium, hard, extreme } = tier.patternDistribution;

    // Anti-streak: if 2+ of the same difficulty in recent history, suppress its weight
    if (this.recentDifficulties.length >= 2) {
      const counts: Record<string, number> = {};
      for (const d of this.recentDifficulties) {
        counts[d] = (counts[d] || 0) + 1;
      }
      if ((counts['EASY'] || 0) >= 2) easy *= 0.1;
      if ((counts['MEDIUM'] || 0) >= 2) medium *= 0.1;
      if ((counts['HARD'] || 0) >= 2) hard *= 0.1;
      if ((counts['EXTREME'] || 0) >= 2) extreme *= 0.1;
    }

    // Normalize weights
    const total = easy + medium + hard + extreme;
    if (total === 0) return 'EASY';

    const random = Math.random() * total;
    if (random < easy) return 'EASY';
    if (random < easy + medium) return 'MEDIUM';
    if (random < easy + medium + hard) return 'HARD';
    return 'EXTREME';
  }

  private static generateSolvableSequence(patternGroups: ObstaclePattern[][]): ObstaclePattern[] {
    const sequence: ObstaclePattern[] = [];

    for (let i = 0; i < patternGroups.length; i++) {
      const patterns = patternGroups[i];
      let selectedPattern: ObstaclePattern;

      if (i === 0) {
        selectedPattern = this.selectRandom(patterns);
      } else {
        const lastPattern = sequence[i - 1];
        const lastClearLane = lastPattern.guaranteedClearLane;

        // Try to find pattern with same clear lane
        const sameLanePatterns = patterns.filter(p =>
          p.guaranteedClearLane === lastClearLane
        );

        if (sameLanePatterns.length > 0) {
          selectedPattern = this.selectRandom(sameLanePatterns);
        } else {
          if (lastPattern.gapToNext >= 14) {
            // Sufficient gap for lane change — any pattern works
            selectedPattern = this.selectRandom(patterns);
          } else {
            // Tight gap, no same-lane option in this difficulty — pick any
            // (ensureSolvablePattern will fix this later if needed)
            selectedPattern = this.selectRandom(patterns);
          }
        }
      }

      sequence.push(selectedPattern);
    }

    return sequence;
  }

  private static selectRandom(patterns: ObstaclePattern[]): ObstaclePattern {
    const index = Math.floor(Math.random() * patterns.length);
    return patterns[index];
  }

  /** Returns true when the current sequence just finished (caller should add wave rest). */
  static isSequenceComplete(): boolean {
    return this.currentSequence !== null &&
      this.currentSequence.currentIndex >= this.currentSequence.patterns.length;
  }

  static getCurrentProgress(): { current: number; total: number } {
    if (!this.currentSequence) {
      return { current: 0, total: 3 };
    }

    return {
      current: this.currentSequence.currentIndex,
      total: this.currentSequence.patterns.length
    };
  }

  private static ensureSolvablePattern(originalPattern: ObstaclePattern, tier: DifficultyTier): ObstaclePattern {
    if (!this.lastSpawnedPattern ||
        this.lastSpawnedPattern.guaranteedClearLane === originalPattern.guaranteedClearLane) {
      return originalPattern;
    }

    const currentClearLane = this.lastSpawnedPattern.guaranteedClearLane;

    // Check if we have enough spatial gap for lane change (scales with lane distance)
    const lastGap = this.lastSpawnedPattern.gapToNext;
    const laneDistance = Math.abs(currentClearLane - originalPattern.guaranteedClearLane);
    const minGapForLaneChange = laneDistance <= 1 ? 14 : 22;

    if (lastGap >= minGapForLaneChange) {
      return originalPattern;
    }

    // Not enough gap - MUST maintain same clear lane for solvability

    // First try: same difficulty with same clear lane
    const sameDifficultyPatterns = PatternPool.getPatternsByDifficulty(originalPattern.difficulty);
    const compatiblePatterns = sameDifficultyPatterns.filter(p =>
      p.guaranteedClearLane === currentClearLane
    );

    if (compatiblePatterns.length > 0) {
      const randomIndex = Math.floor(Math.random() * compatiblePatterns.length);
      return compatiblePatterns[randomIndex];
    }

    // Second try: ANY allowed difficulty with same clear lane
    const allPatterns = PatternPool.getAllPatterns();
    const allowedPatterns = allPatterns.filter(p =>
      p.guaranteedClearLane === currentClearLane &&
      this.isDifficultyAllowed(p.difficulty, tier)
    );

    if (allowedPatterns.length > 0) {
      allowedPatterns.sort((a, b) => b.gapToNext - a.gapToNext);
      const randomIndex = Math.floor(Math.random() * Math.min(3, allowedPatterns.length));
      return allowedPatterns[randomIndex];
    }

    // Ultimate fallback: ANY pattern with same clear lane
    const anySameLanePatterns = allPatterns.filter(p =>
      p.guaranteedClearLane === currentClearLane
    );

    if (anySameLanePatterns.length > 0) {
      const randomIndex = Math.floor(Math.random() * anySameLanePatterns.length);
      return anySameLanePatterns[randomIndex];
    }

    console.warn(`[PatternSequencer] No pattern found with clearLane=${currentClearLane} — returning original pattern '${originalPattern.id}' (potentially unsolvable)`);
    return originalPattern;
  }

  private static isDifficultyAllowed(difficulty: Difficulty, tier: DifficultyTier): boolean {
    const { easy, medium, hard, extreme } = tier.patternDistribution;

    switch (difficulty) {
      case 'EASY': return easy > 0;
      case 'MEDIUM': return medium > 0;
      case 'HARD': return hard > 0;
      case 'EXTREME': return extreme > 0;
      default: return false;
    }
  }

  static getCurrentClearLane(): 0 | 1 | 2 {
    return this.currentClearLane;
  }

  static reset(): void {
    this.currentSequence = null;
    this.score = 0;
    this.lastSpawnedPattern = null;
    this.currentClearLane = 1;
    this.recentDifficulties = [];
  }
}
