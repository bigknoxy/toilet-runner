/**
 * Frame-rate independent motion helpers.
 *
 * `THREE.MathUtils.lerp(a, b, k * delta)` is the common shortcut, but it is not
 * exponential: the fraction of the remaining gap it closes per second depends on
 * how often it is called, so the same code settles at a different speed at 30Hz,
 * 60Hz and 144Hz. These helpers close that gap.
 */

/** Fixed lane-switch duration in seconds. Genre standard is 0.12-0.20s. */
export const LANE_SWITCH_DURATION = 0.16;

/**
 * Exponential smoothing with the delta baked into the exponent, so the result
 * is identical for a given elapsed time regardless of step size.
 * `lambda` is the decay rate: higher converges faster.
 */
export function damp(current: number, target: number, lambda: number, delta: number): number {
  return target + (current - target) * Math.exp(-lambda * delta);
}

/** Ease-out cubic. Fast off the mark, soft on arrival. */
export function easeOutCubic(t: number): number {
  const clamped = t < 0 ? 0 : t > 1 ? 1 : t;
  return 1 - Math.pow(1 - clamped, 3);
}
