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
  private static lastSpawnedPattern: ObstaclePattern | null = null;
  private static currentClearLane: 0 | 1 | 2 = 1;

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
        patterns: this.generateSolvableSequence([easyPatterns, easyPatterns, easyPatterns]),
        currentIndex: 0
      },
      {
        id: 'SEQ_EEM',
        patterns: this.generateSolvableSequence([easyPatterns, easyPatterns, mediumPatterns]),
        currentIndex: 0
      },
      {
        id: 'SEQ_EMM',
        patterns: this.generateSolvableSequence([easyPatterns, mediumPatterns, mediumPatterns]),
        currentIndex: 0
      },
      {
        id: 'SEQ_MMH',
        patterns: this.generateSolvableSequence([mediumPatterns, mediumPatterns, hardPatterns]),
        currentIndex: 0
      },
      {
        id: 'SEQ_MHH',
        patterns: this.generateSolvableSequence([mediumPatterns, hardPatterns, hardPatterns]),
        currentIndex: 0
      },
      {
        id: 'SEQ_HHX',
        patterns: this.generateSolvableSequence([hardPatterns, hardPatterns, extremePatterns]),
        currentIndex: 0
      },
      {
        id: 'SEQ_XXX',
        patterns: this.generateSolvableSequence([extremePatterns, extremePatterns, extremePatterns]),
        currentIndex: 0
      }
    ];
  }

  private static generateSolvableSequence(patternGroups: ObstaclePattern[][]): ObstaclePattern[] {
    const sequence: ObstaclePattern[] = [];
    
    for (let i = 0; i < patternGroups.length; i++) {
      const patterns = patternGroups[i];
      let selectedPattern: ObstaclePattern;

      if (i === 0) {
        // First pattern - any pattern works
        selectedPattern = this.selectRandom(patterns);
      } else {
        // Subsequent patterns - prefer same clear lane or ensure sufficient gap
        const lastPattern = sequence[i - 1];
        const lastClearLane = lastPattern.guaranteedClearLane;
        
        // Try to find pattern with same clear lane
        const sameLanePatterns = patterns.filter(p => 
          p.guaranteedClearLane === lastClearLane
        );
        
        if (sameLanePatterns.length > 0) {
          selectedPattern = this.selectRandom(sameLanePatterns);
        } else {
          // If no same lane patterns, find one with sufficient gap
          const sufficientGapPatterns = patterns.filter(p => 
            lastPattern.gapToNext >= 20 // Minimum gap for lane change
          );
          
          if (sufficientGapPatterns.length > 0) {
            selectedPattern = this.selectRandom(sufficientGapPatterns);
          } else {
            // Fallback to any pattern (should be rare)
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

  static getNextPattern(): ObstaclePattern {
    const tier = DifficultyManager.getCurrentTier(this.score);
    const { patternDistribution } = tier;

    if (!this.currentSequence || this.currentSequence.currentIndex >= this.currentSequence.patterns.length) {
      this.currentSequence = this.selectSequence(tier);
    }

    let pattern = this.currentSequence.patterns[this.currentSequence.currentIndex];
    
    // Ensure solvability by checking clear lane continuity
    pattern = this.ensureSolvablePattern(pattern, tier);
    
    this.currentSequence.currentIndex++;
    this.lastSpawnedPattern = pattern;
    
    // Update current clear lane
    if (pattern.guaranteedClearLane !== undefined) {
      this.currentClearLane = pattern.guaranteedClearLane;
    }

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

  private static ensureSolvablePattern(originalPattern: ObstaclePattern, tier: DifficultyTier): ObstaclePattern {
    // First pattern or pattern with same clear lane is always solvable
    if (!this.lastSpawnedPattern || 
        this.lastSpawnedPattern.guaranteedClearLane === originalPattern.guaranteedClearLane) {
      return originalPattern;
    }

    const currentClearLane = this.lastSpawnedPattern.guaranteedClearLane;
    if (currentClearLane === undefined) {
      return originalPattern; // Fallback
    }

    // Check if we have enough spatial gap for lane change
    const lastGap = this.lastSpawnedPattern.gapToNext;
    const minGapForLaneChange = 20; // Minimum spatial units needed for safe lane change
    
    // If last pattern has sufficient gap, lane change is possible
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
      // Prioritize patterns with larger gaps to give more flexibility for next pattern
      allowedPatterns.sort((a, b) => b.gapToNext - a.gapToNext);
      const randomIndex = Math.floor(Math.random() * Math.min(3, allowedPatterns.length));
      return allowedPatterns[randomIndex];
    }

    // Ultimate fallback: ANY pattern with same clear lane (ignore difficulty restrictions)
    const anySameLanePatterns = allPatterns.filter(p => 
      p.guaranteedClearLane === currentClearLane
    );

    if (anySameLanePatterns.length > 0) {
      const randomIndex = Math.floor(Math.random() * anySameLanePatterns.length);
      return anySameLanePatterns[randomIndex];
    }

    // This should never happen with our pattern pool, but just in case:
    console.warn('Warning: No compatible pattern found, using original pattern - solvability not guaranteed');
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
  }
}
