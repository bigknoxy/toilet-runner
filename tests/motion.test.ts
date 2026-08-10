import { describe, expect, test } from 'bun:test';
import { damp, easeOutCubic, LANE_SWITCH_DURATION } from '../src/game/motion';

/** Replays the lane tween from RunnerController.update() at a fixed step. */
function simulateLaneTween(fps: number, from: number, to: number, seconds: number): number {
  const step = 1 / fps;
  let elapsed = 0;
  let x = from;
  for (let t = 0; t < seconds; t += step) {
    elapsed = Math.min(LANE_SWITCH_DURATION, elapsed + step);
    x = from + (to - from) * easeOutCubic(elapsed / LANE_SWITCH_DURATION);
  }
  return x;
}

describe('lane switch tween', () => {
  test('settles inside the 0.12-0.20s genre window', () => {
    expect(LANE_SWITCH_DURATION).toBeGreaterThanOrEqual(0.12);
    expect(LANE_SWITCH_DURATION).toBeLessThanOrEqual(0.2);
  });

  test('lands exactly on the target lane, not asymptotically near it', () => {
    expect(simulateLaneTween(60, 0, 3, LANE_SWITCH_DURATION + 0.05)).toBe(3);
  });

  test('is frame-rate independent — 30Hz and 144Hz agree at the same elapsed time', () => {
    const slow = simulateLaneTween(30, 0, 3, 0.2);
    const fast = simulateLaneTween(144, 0, 3, 0.2);
    expect(Math.abs(slow - fast)).toBeLessThan(1e-9);
  });

  test('the old per-frame lerp was NOT frame-rate independent', () => {
    // Documents the bug this replaced: lerp(current, target, 6 * delta).
    const oldLerp = (fps: number): number => {
      const step = 1 / fps;
      let x = 0;
      for (let t = 0; t < 0.2; t += step) x += (3 - x) * 6 * step;
      return x;
    };
    expect(Math.abs(oldLerp(30) - oldLerp(144))).toBeGreaterThan(0.05);
  });
});

describe('damp', () => {
  test('reaches the same value regardless of step size', () => {
    const oneStep = damp(0, 10, 8, 0.5);
    let stepped = 0;
    for (let i = 0; i < 50; i++) stepped = damp(stepped, 10, 8, 0.01);
    expect(Math.abs(oneStep - stepped)).toBeLessThan(1e-9);
  });

  test('never overshoots even with an absurd delta', () => {
    const x = damp(0, 10, 8, 100);
    expect(x).toBeLessThanOrEqual(10);
    expect(x).toBeGreaterThan(9.999);
  });
});

describe('easeOutCubic', () => {
  test('clamps outside 0..1', () => {
    expect(easeOutCubic(-1)).toBe(0);
    expect(easeOutCubic(2)).toBe(1);
  });

  test('front-loads the motion', () => {
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.8);
  });
});
