export interface Stats {
  totalRuns: number;
  highestScore: number;
  totalDistance: number;
  totalObstaclesDodged: number;
  perfectLaneChanges: number;
  longestRun: number;
  totalPlayTime: number; // seconds
  gamesToday: number;
  challengesCompleted: number;
  skinsUnlocked: number;
}

export class StatsDashboard {
  private _stats: Stats = {
    totalRuns: 0,
    highestScore: 0,
    totalDistance: 0,
    totalObstaclesDodged: 0,
    perfectLaneChanges: 0,
    longestRun: 0,
    totalPlayTime: 0,
    gamesToday: 0,
    challengesCompleted: 0,
    skinsUnlocked: 1
  };

  private _sessionStartTime: number = 0;
  private _sessionObstaclesDodged: number = 0;

  constructor() {
    this._loadFromStorage();
  }

  private _loadFromStorage(): void {
    try {
      const saved = localStorage.getItem('toiletRunner_stats');
      if (saved) {
        const data = JSON.parse(saved);
        this._stats = { ...this._stats, ...data };
      }
    } catch (e) {
      console.log('No stats data found');
    }
  }

  private _saveToStorage(): void {
    try {
      localStorage.setItem('toiletRunner_stats', JSON.stringify(this._stats));
    } catch (e) {
      console.log('Failed to save stats');
    }
  }

  startSession(): void {
    this._sessionStartTime = Date.now();
    this._sessionObstaclesDodged = 0;
  }

  endSession(score: number, distance: number, obstaclesDodged: number): void {
    const sessionTime = (Date.now() - this._sessionStartTime) / 1000;

    this._stats.totalRuns++;
    this._stats.totalDistance += distance;
    this._stats.totalObstaclesDodged += obstaclesDodged;
    this._stats.totalPlayTime += sessionTime;
    this._stats.gamesToday++;

    if (score > this._stats.highestScore) {
      this._stats.highestScore = score;
    }

    if (distance > this._stats.longestRun) {
      this._stats.longestRun = distance;
    }

    this._saveToStorage();
  }

  updateObstaclesDodged(count: number): void {
    this._sessionObstaclesDodged = count;
  }

  incrementPerfectLaneChanges(): void {
    this._stats.perfectLaneChanges++;
    this._saveToStorage();
  }

  incrementChallengesCompleted(): void {
    this._stats.challengesCompleted++;
    this._saveToStorage();
  }

  incrementSkinsUnlocked(): void {
    this._stats.skinsUnlocked++;
    this._saveToStorage();
  }

  getStats(): Stats {
    return { ...this._stats };
  }

  getFormattedPlayTime(): string {
    const hours = Math.floor(this._stats.totalPlayTime / 3600);
    const minutes = Math.floor((this._stats.totalPlayTime % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }

  getAverageScore(): number {
    if (this._stats.totalRuns === 0) return 0;
    return Math.round(this._stats.totalDistance / this._stats.totalRuns);
  }

  getSuccessRate(): number {
    if (this._stats.totalRuns === 0) return 0;
    return Math.round((this._stats.perfectLaneChanges / this._stats.totalRuns) * 100);
  }

  resetTodayStats(): void {
    const today = this._getTodayString();
    const lastReset = localStorage.getItem('toiletRunner_lastReset');

    if (lastReset !== today) {
      this._stats.gamesToday = 0;
      localStorage.setItem('toiletRunner_lastReset', today);
      this._saveToStorage();
    }
  }

  private _getTodayString(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  resetAllStats(): void {
    this._stats = {
      totalRuns: 0,
      highestScore: 0,
      totalDistance: 0,
      totalObstaclesDodged: 0,
      perfectLaneChanges: 0,
      longestRun: 0,
      totalPlayTime: 0,
      gamesToday: 0,
      challengesCompleted: 0,
      skinsUnlocked: 1
    };
    this._saveToStorage();
  }
}
