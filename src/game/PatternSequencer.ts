import { ObstaclePattern, Difficulty } from './ObstaclePattern.js';
import { PatternPool } from './ObstaclePattern.js';
import { DifficultyManager, DifficultyTier } from './DifficultyManager.js';

export interface PatternSequence {
  patterns: ObstaclePattern[];
  currentIndex: number;
  id: string;
}

export class PatternSequencer {
  private static sequences: PatternSequence[] = [];
  private static currentSequence: PatternSequence | null = null;
  private static score: number = 0;

  static initialize(): void {
    this.generateSequences();
  }

  static setScore(newScore: number): void {
    this.score = newScore;
  }

  private static generateSequences(): void {
    const easyPatterns = PatternPool.getPatternsByDifficulty('EASY');
    const mediumPatterns = PatternPool.getPatternsByDifficulty('MEDIUM');
    const hardPatterns = PatternPool.getPatternsByDifficulty('HARD');
    const extremePatterns = PatternPool.getPatternsByDifficulty('EXTREME');

    this.sequences = [
      {
        id: 'SEQ_EE',
        patterns: [
          this.selectRandom(easyPatterns),
          this.selectRandom(easyPatterns),
          this.selectRandom(easyPatterns)
        ],
        currentIndex: 0
      },
      {
        id: 'SEQ_EEM',
        patterns: [
          this.selectRandom(easyPatterns),
          this.selectRandom(easyPatterns),
          this.selectRandom(mediumPatterns)
        ],
        currentIndex: 0
      },
      {
        id: 'SEQ_EMM',
        patterns: [
          this.selectRandom(easyPatterns),
          this.selectRandom(mediumPatterns),
          this.selectRandom(mediumPatterns)
        ],
        currentIndex: 0
      },
      {
        id: 'SEQ_MMH',
        patterns: [
          this.selectRandom(mediumPatterns),
          this.selectRandom(mediumPatterns),
          this.selectRandom(hardPatterns)
        ],
        currentIndex: 0
      },
      {
        id: 'SEQ_MHH',
        patterns: [
          this.selectRandom(mediumPatterns),
          this.selectRandom(hardPatterns),
          this.selectRandom(hardPatterns)
        ],
        currentIndex: 0
      },
      {
        id: 'SEQ_HHX',
        patterns: [
          this.selectRandom(hardPatterns),
          this.selectRandom(hardPatterns),
          this.selectRandom(extremePatterns)
        ],
        currentIndex: 0
      },
      {
        id: 'SEQ_XXX',
        patterns: [
          this.selectRandom(extremePatterns),
          this.selectRandom(extremePatterns),
          this.selectRandom(extremePatterns)
        ],
        currentIndex: 0
      }
    ];
  }

  private static selectRandom(patterns: ObstaclePattern[]): ObstaclePattern {
    const index = Math.floor(Math.random() * patterns.length);
    return patterns[index];
  }

  static getNextPattern(): ObstaclePattern {
    const tier = DifficultyManager.getCurrentTier(this.score);
    const { patternDistribution } = tier;

    if (!this.currentSequence || this.currentSequence.currentIndex >= this.currentSequence.patterns.length) {
      this.currentSequence = this.selectSequence(tier);
    }

    const pattern = this.currentSequence.patterns[this.currentSequence.currentIndex];
    this.currentSequence.currentIndex++;

    return pattern;
  }

  private static selectSequence(tier: DifficultyTier): PatternSequence {
    const { easy, medium, hard, extreme } = tier.patternDistribution;
    const random = Math.random();

    let selectedSequence: PatternSequence;

    if (random < easy) {
      selectedSequence = this.sequences.find(s => s.id === 'SEQ_EE') || this.sequences[0];
    } else if (random < easy + medium) {
      const seqIndex = Math.floor(Math.random() * 3);
      selectedSequence = this.sequences[seqIndex];
    } else if (random < easy + medium + hard) {
      const seqIndex = 3 + Math.floor(Math.random() * 2);
      selectedSequence = this.sequences[seqIndex];
    } else {
      selectedSequence = this.sequences.find(s => s.id === 'SEQ_XXX') || this.sequences[this.sequences.length - 1];
    }

    selectedSequence.currentIndex = 0;
    return selectedSequence;
  }

  static getCurrentSequenceId(): string | null {
    return this.currentSequence?.id || null;
  }

  static getCurrentProgress(): { current: number; total: number } {
    if (!this.currentSequence) {
      return { current: 0, total: 1 };
    }

    return {
      current: this.currentSequence.currentIndex,
      total: this.currentSequence.patterns.length
    };
  }

  static reset(): void {
    this.currentSequence = null;
    this.score = 0;
  }
}
