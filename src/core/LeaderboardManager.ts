export interface LeaderboardEntry {
  score: number;
  date: string;
  name: string;
}

export class LeaderboardManager {
  private static STORAGE_KEY = 'toilet_runner_leaderboard';
  private static MAX_ENTRIES = 10;
  private static MAX_NAME_LENGTH = 20;
  private _entries: LeaderboardEntry[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private sanitizeName(name: string): string {
    // Remove HTML tags, control characters, and trim
    return name
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
      .trim()
      .slice(0, LeaderboardManager.MAX_NAME_LENGTH) || 'Anonymous';
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(LeaderboardManager.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate entries without name field
        this._entries = parsed.map((entry: Partial<LeaderboardEntry>) => ({
          score: entry.score ?? 0,
          date: entry.date ?? '',
          name: entry.name || 'Anonymous'
        }));
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

  public addScore(score: number, name: string = 'Anonymous'): void {
    const sanitizedName = this.sanitizeName(name);
    const date = new Date().toLocaleDateString();
    const entry: LeaderboardEntry = { score, date, name: sanitizedName };

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
