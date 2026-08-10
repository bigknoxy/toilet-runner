import { describe, expect, test, beforeEach } from 'bun:test';
import { UIManager } from '../src/ui/UIManager';

// Only the ids cacheElements() hard-requires; everything else is optional.
const REQUIRED_IDS = [
  'start-screen', 'pause-screen', 'overlay', 'score-display',
  'game-over-screen', 'final-score', 'restart-button', 'pause-btn',
  'pause-button', 'resume-button', 'leaderboard-screen',
  'leaderboard-list-full', 'view-leaderboard-button', 'back-to-game-over-button'
];

function mountShell(): void {
  document.body.innerHTML = REQUIRED_IDS
    .map(id => `<div id="${id}"></div>`)
    .join('');
}

beforeEach(() => {
  mountShell();
});

describe('showScorePopup', () => {
  test('near-miss bursts cannot pile up unbounded divs', () => {
    const ui = new UIManager();
    for (let i = 0; i < 25; i++) {
      ui.showScorePopup(`+${i}`, i % 2 === 0);
    }
    expect(ui.getLivePopupCount()).toBeLessThanOrEqual(3);
    expect(document.querySelectorAll('.score-popup').length).toBeLessThanOrEqual(3);
  });

  test('the newest popups are the ones kept', () => {
    const ui = new UIManager();
    ui.showScorePopup('first', false);
    ui.showScorePopup('second', false);
    ui.showScorePopup('third', false);
    ui.showScorePopup('fourth', false);

    const texts = Array.from(document.querySelectorAll('.score-popup')).map(el => el.textContent);
    expect(texts).toEqual(['second', 'third', 'fourth']);
  });

  test('near-miss popups carry the near-miss class', () => {
    const ui = new UIManager();
    ui.showScorePopup('+5', true);
    expect(document.querySelector('.score-popup')?.className).toContain('near-miss');
  });
});
