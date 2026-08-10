/**
 * combo.ts - Pure functions for the combo streak/multiplier system.
 *
 * A "clean pass" (near-miss or close-pass dodge) increments the streak.
 * A collision resets it to zero. The multiplier scales bonus score awarded
 * for clean passes, so a long clean run pays out more than a sloppy one.
 */

/** Streak length required to reach each multiplier tier, ascending. */
export const COMBO_THRESHOLDS: ReadonlyArray<{ streak: number; multiplier: number }> = [
  { streak: 40, multiplier: 4 },
  { streak: 20, multiplier: 3 },
  { streak: 10, multiplier: 2 },
  { streak: 5, multiplier: 1.5 },
];

/**
 * Returns the score multiplier for a given streak length.
 * Below the lowest threshold, the multiplier is 1 (no bonus).
 */
export function getComboMultiplier(streak: number): number {
  for (const tier of COMBO_THRESHOLDS) {
    if (streak >= tier.streak) {
      return tier.multiplier;
    }
  }
  return 1;
}
