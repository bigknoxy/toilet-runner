import * as THREE from 'three';

export interface LeaderboardEntry {
  score: number;
  date: string;
}

export class LeaderboardManager {
  private static STORAGE_KEY = 'toilet_runner_leaderboard';
  private static MAX_ENTRIES = 10;
  private _entries: LeaderboardEntry[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(LeaderboardManager.STORAGE_KEY);
      if (stored) {
        this._entries = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load leaderboard from storage:', error);
      this._entries = [];
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(LeaderboardManager.STORAGE_KEY, JSON.stringify(this._entries));
    } catch (error) {
      console.error('Failed to save leaderboard to storage:', error);
    }
  }

  public addScore(score: number): void {
    const date = new Date().toLocaleDateString();
    const entry: LeaderboardEntry = { score, date };

    this._entries.push(entry);
    this._entries.sort((a, b) => b.score - a.score);

    if (this._entries.length > LeaderboardManager.MAX_ENTRIES) {
      this._entries = this._entries.slice(0, LeaderboardManager.MAX_ENTRIES);
    }

    this.saveToStorage();
  }

  public getTopScores(): LeaderboardEntry[] {
    return [...this._entries];
  }

  public getHighScore(): number {
    return this._entries.length > 0 ? this._entries[0].score : 0;
  }

  public isHighScore(score: number): boolean {
    if (this._entries.length < LeaderboardManager.MAX_ENTRIES) {
      return score > 0;
    }
    return score > this._entries[this._entries.length - 1].score;
  }
}
