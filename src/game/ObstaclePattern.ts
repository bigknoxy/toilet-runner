export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD' | 'EXTREME';

export interface ObstacleConfig {
  lane: 0 | 1 | 2;
  speedMultiplier: number;
}

export interface ObstaclePattern {
  id: string;
  difficulty: Difficulty;
  obstacles: ObstacleConfig[];
  gapToNext: number;
  guaranteedClearLane?: 0 | 1 | 2;
}

export class PatternPool {
  private static patterns: ObstaclePattern[] = [];

  static initialize(): void {
    this.patterns = [
      ...this.getEasyPatterns(),
      ...this.getMediumPatterns(),
      ...this.getHardPatterns(),
      ...this.getExtremePatterns()
    ];
  }

  private static getEasyPatterns(): ObstaclePattern[] {
    return [
      {
        id: 'E1',
        difficulty: 'EASY',
        obstacles: [{ lane: 0, speedMultiplier: 1.0 }],
        gapToNext: 25,
        guaranteedClearLane: 1
      },
      {
        id: 'E2',
        difficulty: 'EASY',
        obstacles: [{ lane: 1, speedMultiplier: 1.1 }],
        gapToNext: 20,
        guaranteedClearLane: 0
      },
      {
        id: 'E3',
        difficulty: 'EASY',
        obstacles: [{ lane: 2, speedMultiplier: 1.0 }],
        gapToNext: 25,
        guaranteedClearLane: 1
      },
      {
        id: 'E4',
        difficulty: 'EASY',
        obstacles: [{ lane: 0, speedMultiplier: 1.2 }],
        gapToNext: 22,
        guaranteedClearLane: 1
      }
    ];
  }

  private static getMediumPatterns(): ObstaclePattern[] {
    return [
      {
        id: 'M1',
        difficulty: 'MEDIUM',
        obstacles: [
          { lane: 0, speedMultiplier: 1.0 },
          { lane: 2, speedMultiplier: 1.0 }
        ],
        gapToNext: 25,
        guaranteedClearLane: 1
      },
      {
        id: 'M2',
        difficulty: 'MEDIUM',
        obstacles: [
          { lane: 1, speedMultiplier: 1.1 },
          { lane: 2, speedMultiplier: 1.0 }
        ],
        gapToNext: 22,
        guaranteedClearLane: 0
      },
      {
        id: 'M3',
        difficulty: 'MEDIUM',
        obstacles: [
          { lane: 0, speedMultiplier: 1.0 },
          { lane: 1, speedMultiplier: 1.1 }
        ],
        gapToNext: 22,
        guaranteedClearLane: 2
      },
      {
        id: 'M4',
        difficulty: 'MEDIUM',
        obstacles: [
          { lane: 0, speedMultiplier: 1.2 },
          { lane: 2, speedMultiplier: 1.1 }
        ],
        gapToNext: 20,
        guaranteedClearLane: 1
      }
    ];
  }

  private static getHardPatterns(): ObstaclePattern[] {
    return [
      {
        id: 'H1',
        difficulty: 'HARD',
        obstacles: [
          { lane: 0, speedMultiplier: 1.2 },
          { lane: 1, speedMultiplier: 1.1 }
        ],
        gapToNext: 18,
        guaranteedClearLane: 2
      },
      {
        id: 'H2',
        difficulty: 'HARD',
        obstacles: [
          { lane: 1, speedMultiplier: 1.3 },
          { lane: 2, speedMultiplier: 1.2 }
        ],
        gapToNext: 18,
        guaranteedClearLane: 0
      },
      {
        id: 'H3',
        difficulty: 'HARD',
        obstacles: [
          { lane: 0, speedMultiplier: 1.3 },
          { lane: 2, speedMultiplier: 1.3 }
        ],
        gapToNext: 16,
        guaranteedClearLane: 1
      },
      {
        id: 'H4',
        difficulty: 'HARD',
        obstacles: [
          { lane: 0, speedMultiplier: 1.4 },
          { lane: 1, speedMultiplier: 1.2 }
        ],
        gapToNext: 16,
        guaranteedClearLane: 2
      }
    ];
  }

  private static getExtremePatterns(): ObstaclePattern[] {
    return [
      {
        id: 'X1',
        difficulty: 'EXTREME',
        obstacles: [
          { lane: 0, speedMultiplier: 1.5 },
          { lane: 1, speedMultiplier: 1.4 }
        ],
        gapToNext: 15,
        guaranteedClearLane: 2
      },
      {
        id: 'X2',
        difficulty: 'EXTREME',
        obstacles: [
          { lane: 1, speedMultiplier: 1.5 },
          { lane: 2, speedMultiplier: 1.4 }
        ],
        gapToNext: 15,
        guaranteedClearLane: 0
      },
      {
        id: 'X3',
        difficulty: 'EXTREME',
        obstacles: [
          { lane: 0, speedMultiplier: 1.6 },
          { lane: 2, speedMultiplier: 1.5 }
        ],
        gapToNext: 14,
        guaranteedClearLane: 1
      },
      {
        id: 'X4',
        difficulty: 'EXTREME',
        obstacles: [
          { lane: 0, speedMultiplier: 1.7 },
          { lane: 1, speedMultiplier: 1.6 }
        ],
        gapToNext: 14,
        guaranteedClearLane: 2
      }
    ];
  }

  static getPatternsByDifficulty(difficulty: Difficulty): ObstaclePattern[] {
    return this.patterns.filter(p => p.difficulty === difficulty);
  }

  static getRandomPattern(difficulty: Difficulty): ObstaclePattern {
    const patterns = this.getPatternsByDifficulty(difficulty);
    const index = Math.floor(Math.random() * patterns.length);
    return patterns[index];
  }

  static getAllPatterns(): ObstaclePattern[] {
    return [...this.patterns];
  }

  static validatePattern(pattern: ObstaclePattern): boolean {
    if (pattern.obstacles.length === 0) return false;
    if (pattern.obstacles.length > 2) return false;

    const usedLanes = pattern.obstacles.map(o => o.lane);
    const uniqueLanes = new Set(usedLanes);

    if (uniqueLanes.size !== usedLanes.length) return false;

    const hasClearLane = [0, 1, 2].some(
      lane => !usedLanes.includes(lane as 0 | 1 | 2)
    );

    return hasClearLane;
  }

  static validateAllPatterns(): { valid: ObstaclePattern[]; invalid: ObstaclePattern[] } {
    const valid: ObstaclePattern[] = [];
    const invalid: ObstaclePattern[] = [];

    for (const pattern of this.patterns) {
      if (this.validatePattern(pattern)) {
        valid.push(pattern);
      } else {
        invalid.push(pattern);
      }
    }

    return { valid, invalid };
  }
}
