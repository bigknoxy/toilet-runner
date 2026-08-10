import { describe, expect, test, beforeEach } from 'bun:test';
import { readFileSync } from 'node:fs';
import { StatsManager } from '../src/core/StatsManager';
import { UIManager } from '../src/ui/UIManager';

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
  localStorage.clear();
});

describe('StatsManager tutorial gate', () => {
  test('has not been seen on a fresh install', () => {
    const stats = new StatsManager();
    expect(stats.hasTutorialBeenSeen()).toBe(false);
  });

  test('marking seen flips the flag and persists it to the unified blob', () => {
    const stats = new StatsManager();
    stats.markTutorialSeen();
    expect(stats.hasTutorialBeenSeen()).toBe(true);

    // A fresh StatsManager instance re-reads localStorage - this simulates the
    // player reloading the page or starting a new session.
    const reloaded = new StatsManager();
    expect(reloaded.hasTutorialBeenSeen()).toBe(true);
  });

  test('does not show again on the second run once dismissed once', () => {
    const first = new StatsManager();
    expect(first.hasTutorialBeenSeen()).toBe(false);
    first.markTutorialSeen();

    const second = new StatsManager();
    expect(second.hasTutorialBeenSeen()).toBe(true);
  });

  test('is stored under the existing unified data key, not a bespoke one', () => {
    const stats = new StatsManager();
    stats.markTutorialSeen();

    const raw = localStorage.getItem('toiletRunner_unifiedData');
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw as string);
    expect(parsed.stats.tutorialSeen).toBe(true);
    expect(localStorage.getItem('toiletRunner_tutorialSeen')).toBeNull();
  });

  test('an older saved blob without tutorialSeen defaults to not-seen rather than throwing', () => {
    localStorage.setItem('toiletRunner_unifiedData', JSON.stringify({
      version: 2,
      stats: {
        totalRuns: 3,
        highestScore: 100,
        totalDistance: 50,
        totalObstaclesDodged: 2,
        longestRun: 100,
        totalPlayTime: 60,
        gamesToday: 1,
        lastPlayDate: '2020-01-01',
        challengesCompleted: 0,
        currentStreak: 0,
        currentStreakDate: '2020-01-01',
        selectedSkin: 'classic',
        unlockedSkins: ['classic']
        // tutorialSeen intentionally absent - simulates pre-existing save data
      },
      metadata: { lastUpdated: '2020-01-01', migratedFrom: [] }
    }));

    const stats = new StatsManager();
    expect(stats.hasTutorialBeenSeen()).toBe(false);
    expect(stats.getHighestScore()).toBe(100);
  });
});

describe('Controls screen', () => {
  beforeEach(mountShell);

  // The real fragment from index.html, so these tests fail if the shipped
  // markup drops a control rather than passing against a hand-rolled stub.
  function controlsFragment(): string {
    const html = readFileSync(new URL('../index.html', import.meta.url), 'utf-8');
    const match = html.match(/<div [^>]*id="controls-screen"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
    expect(match).not.toBeNull();
    return match![0];
  }

  test('lists jump alongside the other controls, with both key and touch bindings', () => {
    document.body.innerHTML += controlsFragment();
    const ui = new UIManager();
    ui.showControlsScreen();

    const screen = document.getElementById('controls-screen');
    expect(screen?.classList.contains('hidden')).toBe(false);

    const rows = Array.from(screen!.querySelectorAll('.control-row')).map(r => r.textContent ?? '');
    const jumpRow = rows.find(t => /Jump/i.test(t));
    expect(jumpRow).toBeDefined();
    // Discovering jump is the whole point of the screen, so it must name a key
    // and a gesture, not just the word "Jump".
    expect(jumpRow).toMatch(/Space/i);
    expect(jumpRow).toMatch(/swipe up/i);
    expect(rows.some(t => /Move Left/i.test(t))).toBe(true);
    expect(rows.some(t => /Move Right/i.test(t))).toBe(true);
    expect(rows.some(t => /Pause/i.test(t))).toBe(true);
  });
});
