import { describe, expect, test } from 'bun:test';
import { AdaptiveQuality } from '../src/core/AdaptiveQuality';

const FAST = 1 / 60;
const SLOW = 1 / 30;

/**
 * Feed `seconds` worth of frames at a fixed delta and return the first tier
 * change reported, or null. Returning the first rather than the last matters:
 * the tests are about *when* a change fires, so a later change would mask an
 * early one.
 */
function run(aq: AdaptiveQuality, seconds: number, delta: number): number | null {
  let first: number | null = null;
  const frames = Math.round(seconds / delta);
  for (let i = 0; i < frames; i++) {
    const change = aq.update(delta);
    if (change !== null && first === null) first = change;
  }
  return first;
}

describe('AdaptiveQuality', () => {
  test('boot cooldown blocks any change during the first seconds', () => {
    const aq = new AdaptiveQuality(2);
    // Well past the 3s downgrade window but still inside the 5s cooldown.
    expect(run(aq, AdaptiveQuality.COOLDOWN - 0.5, SLOW)).toBeNull();
    expect(aq.tier).toBe(2);
  });

  test('sustained slow frames drop exactly one tier', () => {
    const aq = new AdaptiveQuality(2);
    expect(run(aq, 10, SLOW)).toBe(1);
    expect(aq.tier).toBe(1);
  });

  test('downgrade needs a full window, not a single slow frame', () => {
    const aq = new AdaptiveQuality(2);
    run(aq, AdaptiveQuality.COOLDOWN + 1, FAST);
    // One slow frame inside an otherwise fast history must not move the tier.
    expect(aq.update(SLOW)).toBeNull();
    expect(aq.tier).toBe(2);
  });

  test('cooldown prevents back-to-back downgrades', () => {
    const aq = new AdaptiveQuality(2);
    run(aq, 10, SLOW);
    expect(aq.tier).toBe(1);
    // A second drop would need another cooldown plus another full window.
    // Just under that, so the tier must still be 1.
    const aq2 = new AdaptiveQuality(2);
    run(aq2, AdaptiveQuality.COOLDOWN + AdaptiveQuality.DOWNGRADE_WINDOW + 0.5, SLOW);
    expect(aq2.tier).toBe(1);
  });

  test('fast frames climb back up but never past the ceiling', () => {
    const aq = new AdaptiveQuality(0, 2);
    expect(run(aq, 30, FAST)).toBe(1);
    expect(aq.tier).toBe(2);
    // Already at the ceiling: more fast frames change nothing.
    expect(run(aq, 30, FAST)).toBeNull();
    expect(aq.tier).toBe(2);
  });

  test('default ceiling is the start tier, so a healthy device never promotes', () => {
    const aq = new AdaptiveQuality(1);
    expect(run(aq, 30, FAST)).toBeNull();
    expect(aq.tier).toBe(1);
  });

  test('tier 0 cannot drop below zero', () => {
    const aq = new AdaptiveQuality(0);
    expect(run(aq, 30, SLOW)).toBeNull();
    expect(aq.tier).toBe(0);
  });

  test('implausible deltas are discarded, not counted as slow frames', () => {
    const aq = new AdaptiveQuality(2);
    run(aq, AdaptiveQuality.COOLDOWN + 1, FAST);
    // A 2s tab-switch hitch. Counting it would tank the average instantly.
    expect(aq.update(2)).toBeNull();
    expect(aq.update(0)).toBeNull();
    expect(aq.update(-1)).toBeNull();
    expect(aq.tier).toBe(2);
    // History still reads as fast, so no downgrade follows either.
    expect(run(aq, 5, FAST)).toBeNull();
    expect(aq.tier).toBe(2);
  });

  test('reset clears history and re-arms the cooldown without moving the tier', () => {
    const aq = new AdaptiveQuality(2);
    run(aq, AdaptiveQuality.COOLDOWN + 2, SLOW);
    expect(aq.tier).toBe(1);

    aq.reset();
    expect(aq.tier).toBe(1);
    // Freshly re-armed cooldown swallows a window that would otherwise downgrade.
    expect(run(aq, AdaptiveQuality.COOLDOWN - 0.5, SLOW)).toBeNull();
    expect(aq.tier).toBe(1);
  });

  test('an upgrade has to earn the full upgrade window, not just the cooldown', () => {
    const aq = new AdaptiveQuality(0, 2);
    // Cooldown expires at COOLDOWN, but promotion also needs UPGRADE_WINDOW of
    // history. Stopping short of that must leave the tier alone.
    expect(run(aq, AdaptiveQuality.UPGRADE_WINDOW - 0.5, FAST)).toBeNull();
    expect(aq.tier).toBe(0);
  });
});
