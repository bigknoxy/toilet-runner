/**
 * End-of-run verdict shown on the game over screen.
 *
 * Kept as pure functions so the ordering rule they depend on is testable:
 * `previousBest` must be captured BEFORE the run is written to StatsManager.
 * Reading it afterwards compares the run against itself, which silently turns
 * every personal best into "So close to your record!".
 */

export interface ScoreVerdict {
  isNewBest: boolean;
  message: string;
}

export function isNewPersonalBest(score: number, previousBest: number): boolean {
  return Math.floor(score) > previousBest && score > 0;
}

export function getEncouragingMessage(
  score: number,
  previousBest: number,
  survivalTime: number
): string {
  if (score > previousBest && score > 0) return 'New Personal Best!';
  if (score > previousBest * 0.9 && previousBest > 0) return 'So close to your record!';
  if (survivalTime > 60) return 'Great endurance!';
  if (score > 200) return 'Impressive run!';
  if (score > 50) return 'Nice dodging!';
  return 'Keep practicing!';
}

export function getScoreVerdict(
  score: number,
  previousBest: number,
  survivalTime: number
): ScoreVerdict {
  return {
    isNewBest: isNewPersonalBest(score, previousBest),
    message: getEncouragingMessage(score, previousBest, survivalTime)
  };
}
