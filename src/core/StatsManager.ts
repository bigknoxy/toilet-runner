import * as THREE from 'three';

export interface PlayerStats {
  totalRuns: number;
  highestScore: number;
  totalDistance: number;
  totalObstaclesDodged: number;
  longestRun: number;
  totalPlayTime: number;
  gamesToday: number;
  lastPlayDate: string;
  challengesCompleted: number;
  currentStreak: number;
  currentStreakDate: string;
  selectedSkin: string;
  unlockedSkins: string[];
}

export interface SessionStats {
  score: number;
  distance: number;
  obstaclesDodged: number;
  duration: number;
}

export interface UnifiedData {
  version: number;
  stats: PlayerStats;
  metadata: {
    lastUpdated: string;
    migratedFrom: string[];
  };
}

export class StatsManager {
  private static readonly STORAGE_KEY = 'toiletRunner_unifiedData';
  private static readonly CURRENT_VERSION = 2;

  private _stats: PlayerStats;
  private _sessionStartTime: number = 0;
  private _sessionObstaclesDodged: number = 0;

  constructor() {
    this._stats = this._loadOrCreateStats();
    this._migrateLegacyData();
    this._checkDailyReset();
  }

  private _loadOrCreateStats(): PlayerStats {
    try {
      const data = localStorage.getItem(StatsManager.STORAGE_KEY);
      if (data) {
        const parsed: UnifiedData = JSON.parse(data);
        if (parsed.stats) {
          return parsed.stats;
        }
      }
    } catch (e) {
      // Fall through to default stats
    }

    return this._getDefaultStats();
  }

  private _getDefaultStats(): PlayerStats {
    return {
      totalRuns: 0,
      highestScore: 0,
      totalDistance: 0,
      totalObstaclesDodged: 0,
      longestRun: 0,
      totalPlayTime: 0,
      gamesToday: 0,
      lastPlayDate: this._getTodayString(),
      challengesCompleted: 0,
      currentStreak: 0,
      currentStreakDate: this._getTodayString(),
      selectedSkin: 'classic',
      unlockedSkins: ['classic']
    };
  }

  private _getTodayString(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private _save(): void {
    try {
      const data: UnifiedData = {
        version: StatsManager.CURRENT_VERSION,
        stats: this._stats,
        metadata: {
          lastUpdated: new Date().toISOString(),
          migratedFrom: ['toiletRunner_stats', 'toiletRunner_gameData']
        }
      };
      localStorage.setItem(StatsManager.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // localStorage quota exceeded or unavailable - silently fail
    }
  }

  private _migrateLegacyData(): void {
    const legacyStats = localStorage.getItem('toiletRunner_stats');
    const legacyGameData = localStorage.getItem('toiletRunner_gameData');

    if (!legacyStats && !legacyGameData) {
      return;
    }

    try {
      const oldStats = legacyStats ? JSON.parse(legacyStats) : {};
      const oldGameData = legacyGameData ? JSON.parse(legacyGameData) : {};

      this._stats.totalRuns = Math.max(
        this._stats.totalRuns,
        oldStats.totalRuns || oldGameData.totalRuns || 0
      );

      this._stats.highestScore = Math.max(
        this._stats.highestScore,
        oldStats.highestScore || oldGameData.highestScore || 0
      );

      this._stats.totalDistance = Math.max(
        this._stats.totalDistance,
        oldStats.totalDistance || oldGameData.totalDistance || 0
      );

      this._stats.totalObstaclesDodged = Math.max(
        this._stats.totalObstaclesDodged,
        oldStats.totalObstaclesDodged || oldGameData.totalObstaclesDodged || 0
      );

      this._stats.longestRun = Math.max(
        this._stats.longestRun,
        oldStats.longestRun || oldGameData.longestRun || 0
      );

      this._stats.totalPlayTime = oldStats.totalPlayTime || 0;
      this._stats.gamesToday = oldStats.gamesToday || 0;
      this._stats.challengesCompleted = oldStats.challengesCompleted || 0;

      this._stats.currentStreak = oldGameData.currentStreak || 0;
      this._stats.currentStreakDate = oldGameData.currentStreakDate || this._getTodayString();

      this._stats.selectedSkin = oldGameData.selectedSkin || 'classic';

      if (oldGameData.unlockedSkins && Array.isArray(oldGameData.unlockedSkins)) {
        this._stats.unlockedSkins = [...new Set(oldGameData.unlockedSkins)];
      } else if (oldStats.skinsUnlocked && typeof oldStats.skinsUnlocked === 'number') {
        this._stats.unlockedSkins = this._convertSkinsNumberToArray(oldStats.skinsUnlocked);
      }

      this._save();
      this._backupLegacyData(legacyStats, legacyGameData);

      localStorage.removeItem('toiletRunner_stats');
      localStorage.removeItem('toiletRunner_gameData');
    } catch (e) {
      // Migration failed - continue with current stats
    }
  }

  private _backupLegacyData(stats: string | null, gameData: string | null): void {
    const backup: Record<string, string> = {};

    if (stats) {
      backup['toiletRunner_stats_backup'] = stats;
    }

    if (gameData) {
      backup['toiletRunner_gameData_backup'] = gameData;
    }

    try {
      localStorage.setItem(
        'toiletRunner_legacy_backup_' + Date.now(),
        JSON.stringify(backup)
      );
    } catch (e) {
      // Ignore backup failure
    }
  }

  private _convertSkinsNumberToArray(count: number): string[] {
    const skinIds = ['classic', 'gold', 'rainbow', 'neon', 'camo', 'fire', 'ice', 'shadow'];
    const result = ['classic'];

    for (let i = 0; i < Math.min(count - 1, skinIds.length - 1); i++) {
      result.push(skinIds[i]);
    }

    return result;
  }

  private _checkDailyReset(): void {
    const today = this._getTodayString();
    if (this._stats.lastPlayDate !== today) {
      this._stats.gamesToday = 0;
      this._stats.lastPlayDate = today;
      this._save();
    }
  }

  public startSession(): void {
    this._sessionStartTime = Date.now();
    this._sessionObstaclesDodged = 0;
  }

  public endSession(sessionStats: SessionStats): void {
    const sessionEndTime = Date.now();
    const sessionDuration = (sessionEndTime - this._sessionStartTime) / 1000;

    this._stats.totalRuns++;
    this._stats.totalDistance += sessionStats.distance;
    this._stats.totalObstaclesDodged += sessionStats.obstaclesDodged;
    this._stats.totalPlayTime += sessionDuration;
    this._stats.gamesToday++;

    if (sessionStats.score > this._stats.highestScore) {
      this._stats.highestScore = sessionStats.score;
    }

    if (sessionStats.distance > this._stats.longestRun) {
      this._stats.longestRun = sessionStats.distance;
    }

    this._save();
  }

  public updateHighestScore(score: number): void {
    if (score > this._stats.highestScore) {
      this._stats.highestScore = score;
      this._save();
    }
  }

  public incrementChallengesCompleted(): void {
    this._stats.challengesCompleted++;
    this._save();
  }

  public updateStreak(increment: boolean): void {
    const today = this._getTodayString();

    if (increment) {
      if (this._stats.currentStreakDate !== today) {
        this._stats.currentStreak++;
        this._stats.currentStreakDate = today;
      }
    } else {
      this._stats.currentStreak = 0;
      this._stats.currentStreakDate = today;
    }

    this._save();
  }

  public selectSkin(skinId: string): boolean {
    if (!this.isSkinUnlocked(skinId)) {
      return false;
    }

    this._stats.selectedSkin = skinId;
    this._save();
    return true;
  }

  public unlockSkin(skinId: string): void {
    if (!this._stats.unlockedSkins.includes(skinId)) {
      this._stats.unlockedSkins.push(skinId);
      this._stats.unlockedSkins.sort();
      this._save();
    }
  }

  public isSkinUnlocked(skinId: string): boolean {
    return this._stats.unlockedSkins.includes(skinId);
  }

  public getStats(): PlayerStats {
    return { ...this._stats };
  }

  public getHighestScore(): number {
    return this._stats.highestScore;
  }

  public getCurrentStreak(): number {
    return this._stats.currentStreak;
  }

  public getUnlockedSkins(): string[] {
    return [...this._stats.unlockedSkins];
  }

  public getSelectedSkin(): string {
    return this._stats.selectedSkin;
  }

  public getFormattedPlayTime(): string {
    const hours = Math.floor(this._stats.totalPlayTime / 3600);
    const minutes = Math.floor((this._stats.totalPlayTime % 3600) / 60);
    const seconds = Math.floor(this._stats.totalPlayTime % 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }

  public getAverageScore(): number {
    if (this._stats.totalRuns === 0) return 0;
    return Math.round(this._stats.totalDistance / this._stats.totalRuns);
  }

  public getSuccessRate(): number {
    if (this._stats.totalRuns === 0 || this._stats.totalDistance === 0) return 0;
    return Math.round((this._stats.longestRun / this._stats.totalDistance) * 100);
  }

  public resetAllStats(): void {
    this._stats = this._getDefaultStats();
    this._save();
  }

  public resetTodayStats(): void {
    this._stats.gamesToday = 0;
    this._stats.lastPlayDate = this._getTodayString();
    this._save();
  }
}

export function rollbackToLegacyData(): boolean {
  try {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('toiletRunner_legacy_backup_'));
    if (keys.length === 0) {
      return false;
    }

    const latestKey = keys.sort().pop()!;
    const backup = JSON.parse(localStorage.getItem(latestKey) || '{}');

    if (backup['toiletRunner_stats_backup']) {
      localStorage.setItem('toiletRunner_stats', backup['toiletRunner_stats_backup']);
    }

    if (backup['toiletRunner_gameData_backup']) {
      localStorage.setItem('toiletRunner_gameData', backup['toiletRunner_gameData_backup']);
    }

    localStorage.removeItem('toiletRunner_unifiedData');

    return true;
  } catch (e) {
    return false;
  }
}
