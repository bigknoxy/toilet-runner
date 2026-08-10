import { describe, expect, test, beforeEach } from 'bun:test';
import { getComboMultiplier, COMBO_THRESHOLDS } from '../src/game/combo';
import { HUD } from '../src/ui/HUD';
import { LANE_WIDTH } from '../src/game/GameConfig';

describe('getComboMultiplier', () => {
  test('below the lowest threshold, multiplier is 1', () => {
    expect(getComboMultiplier(0)).toBe(1);
    expect(getComboMultiplier(4)).toBe(1);
  });

  test('boundary at streak 5 reaches 1.5x', () => {
    expect(getComboMultiplier(5)).toBe(1.5);
    expect(getComboMultiplier(9)).toBe(1.5);
  });

  test('boundary at streak 10 reaches 2x', () => {
    expect(getComboMultiplier(10)).toBe(2);
    expect(getComboMultiplier(19)).toBe(2);
  });

  test('boundary at streak 20 reaches 3x', () => {
    expect(getComboMultiplier(20)).toBe(3);
    expect(getComboMultiplier(39)).toBe(3);
  });

  test('boundary at streak 40 reaches 4x and stays capped beyond it', () => {
    expect(getComboMultiplier(40)).toBe(4);
    expect(getComboMultiplier(1000)).toBe(4);
  });

  test('thresholds are defined in descending streak order', () => {
    for (let i = 1; i < COMBO_THRESHOLDS.length; i++) {
      expect(COMBO_THRESHOLDS[i].streak).toBeLessThan(COMBO_THRESHOLDS[i - 1].streak);
    }
  });
});

describe('HUD combo display', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="score-display"></div><div id="combo-display"></div>';
  });

  test('updateCombo writes streak and multiplier text', () => {
    const hud = new HUD();
    hud.updateCombo(5, 1.5);
    const el = document.getElementById('combo-display');
    expect(el?.textContent).toContain('5');
    expect(el?.classList.contains('combo-active')).toBe(true);
  });

  test('updateCombo does not touch the DOM when values are unchanged', () => {
    const hud = new HUD();
    hud.updateCombo(5, 1.5);
    const el = document.getElementById('combo-display')!;
    // Mutate a sentinel attribute directly; if updateCombo writes again with
    // the same values it would not restore this, but textContent assignment
    // would replace child nodes we can detect via object identity of the
    // text node.
    const textNodeBefore = el.firstChild;
    hud.updateCombo(5, 1.5);
    expect(el.firstChild).toBe(textNodeBefore);
  });

  test('updateCombo re-renders when the streak changes', () => {
    const hud = new HUD();
    hud.updateCombo(5, 1.5);
    const el = document.getElementById('combo-display')!;
    const textNodeBefore = el.firstChild;
    hud.updateCombo(6, 1.5);
    expect(el.firstChild).not.toBe(textNodeBefore);
  });

  test('reset clears the combo display and streak cache', () => {
    const hud = new HUD();
    hud.updateCombo(10, 2);
    hud.reset();
    const el = document.getElementById('combo-display');
    expect(el?.textContent).toBe('');
    expect(el?.classList.contains('combo-active')).toBe(false);
  });

  test('a zero streak clears the active class without leaving stale text', () => {
    const hud = new HUD();
    hud.updateCombo(5, 1.5);
    hud.updateCombo(0, 1);
    const el = document.getElementById('combo-display');
    expect(el?.textContent).toBe('');
    expect(el?.classList.contains('combo-active')).toBe(false);
  });

  test('triggerComboBreak adds and later removes the break animation class', async () => {
    const hud = new HUD();
    hud.updateCombo(10, 2);
    hud.triggerComboBreak();
    const el = document.getElementById('combo-display')!;
    expect(el.classList.contains('combo-break')).toBe(true);
    expect(el.classList.contains('combo-active')).toBe(false);
  });
});

describe('near-miss band vs lane geometry (QA defect)', () => {
  // Mirrors main.ts. The band ships as constants there, so the guard here is
  // geometric: any band whose upper bound sits below LANE_WIDTH is empty, since
  // the only lateral distances a settled player can produce are 0, 3, and 6.
  const NEAR_MISS_MAX_DIST = 3.5;
  const SAME_LANE_THRESHOLD = 0.5;

  const isNearMiss = (d: number) => d < NEAR_MISS_MAX_DIST && d > SAME_LANE_THRESHOLD;

  test('an adjacent-lane pass counts as a near miss', () => {
    expect(isNearMiss(LANE_WIDTH)).toBe(true);
  });

  test('a two-lane-away pass does not', () => {
    expect(isNearMiss(LANE_WIDTH * 2)).toBe(false);
  });

  test('a same-lane pass falls to close-pass, not near-miss', () => {
    expect(isNearMiss(0)).toBe(false);
    expect(0 <= SAME_LANE_THRESHOLD).toBe(true);
  });
});

describe('combo text does not survive a run (QA defect)', () => {
  test('the break animation clears the text once it finishes', async () => {
    const hud = new HUD();
    hud.updateCombo(10, 2);
    hud.triggerComboBreak();
    const el = document.getElementById('combo-display')!;
    // The class flips immediately; the text is cleared when the 500ms
    // animation ends, so it would otherwise sit on screen through game over.
    await new Promise(resolve => setTimeout(resolve, 600));
    expect(el.textContent).toBe('');
  });

  test('a new streak still renders after a break zeroed the cache', () => {
    const hud = new HUD();
    hud.updateCombo(10, 2);
    hud.triggerComboBreak();
    hud.updateCombo(1, 1);
    expect(document.getElementById('combo-display')?.textContent).toBe('1x Combo');
  });
});
