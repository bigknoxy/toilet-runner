export interface AnalyticsEvent {
  name: string;
  timestamp: number;
  properties: Record<string, string | number | boolean>;
}

export interface SessionData {
  sessionId: string;
  startTime: number;
  endTime?: number;
  duration?: number;
}

export class AnalyticsManager {
  private static readonly STORAGE_KEY = 'toiletRunner_analytics';
  private static readonly SESSION_KEY = 'toiletRunner_session';
  private static readonly MAX_EVENTS = 500;
  private static readonly BATCH_SIZE = 20;
  
  private _sessionId: string = '';
  private _sessionStartTime: number = 0;
  private _events: AnalyticsEvent[] = [];
  private _isInitialized: boolean = false;
  private _gameVersion: string = '1.6.0';
  
  constructor() {
    this._loadPersistedData();
  }
  
  private _loadPersistedData(): void {
    try {
      const saved = localStorage.getItem(AnalyticsManager.STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.events && Array.isArray(data.events)) {
          this._events = data.events.slice(-AnalyticsManager.MAX_EVENTS);
        }
      }
    } catch (e) {
      console.warn('Failed to load analytics data:', e);
    }
  }
  
  private _persistData(): void {
    try {
      localStorage.setItem(AnalyticsManager.STORAGE_KEY, JSON.stringify({
        events: this._events,
        lastUpdated: Date.now()
      }));
    } catch (e) {
      console.warn('Failed to persist analytics data:', e);
    }
  }
  
  private _generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }
  
  public initialize(gameVersion: string): void {
    if (this._isInitialized) return;
    
    this._gameVersion = gameVersion;
    this._isInitialized = true;
    
    this.trackEvent('app_start', {
      version: this._gameVersion,
      platform: this._detectPlatform(),
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      device_pixel_ratio: window.devicePixelRatio
    });
  }
  
  private _detectPlatform(): string {
    const ua = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|ipod/.test(ua)) {
      return /android/.test(ua) ? 'android' : 'ios';
    }
    return 'desktop';
  }
  
  public startSession(): void {
    this._sessionId = this._generateSessionId();
    this._sessionStartTime = Date.now();
    
    const sessionData: SessionData = {
      sessionId: this._sessionId,
      startTime: this._sessionStartTime
    };
    
    try {
      localStorage.setItem(AnalyticsManager.SESSION_KEY, JSON.stringify(sessionData));
    } catch (e) {
      console.warn('Failed to save session:', e);
    }
    
    this.trackEvent('session_start', {
      session_id: this._sessionId
    });
  }
  
  public endSession(finalScore?: number, distance?: number): void {
    if (!this._sessionId) return;
    
    const duration = Math.floor((Date.now() - this._sessionStartTime) / 1000);
    
    this.trackEvent('session_end', {
      session_id: this._sessionId,
      duration_seconds: duration,
      final_score: finalScore ?? 0,
      distance: distance ?? 0
    });
    
    try {
      localStorage.removeItem(AnalyticsManager.SESSION_KEY);
    } catch (e) {
      // Ignore
    }
    
    this._sessionId = '';
    this._sessionStartTime = 0;
  }
  
  public trackGameStart(upgrades: { shield: boolean; extraLife: boolean; coinMagnetLevel: number; speedControlLevel: number }): void {
    this.trackEvent('game_start', {
      has_shield: upgrades.shield,
      has_extra_life: upgrades.extraLife,
      coin_magnet_level: upgrades.coinMagnetLevel,
      speed_control_level: upgrades.speedControlLevel
    });
  }
  
  public trackGameOver(score: number, distance: number, survivalTime: number, obstaclesDodged: number): void {
    this.trackEvent('game_over', {
      score,
      distance,
      survival_time_seconds: Math.floor(survivalTime),
      obstacles_dodged: obstaclesDodged,
      death_lane: 'unknown'
    });
  }
  
  public trackDeath(obstacleType: string, lane: number, score: number): void {
    this.trackEvent('player_death', {
      obstacle_type: obstacleType,
      lane,
      score_at_death: score
    });
  }
  
  public trackShieldUsed(score: number): void {
    this.trackEvent('shield_used', {
      score_at_use: score
    });
  }
  
  public trackExtraLifeUsed(score: number): void {
    this.trackEvent('extra_life_used', {
      score_at_use: score
    });
  }
  
  public trackUpgradePurchase(upgradeId: string, cost: number, newLevel: number, coinBalanceAfter: number): void {
    this.trackEvent('upgrade_purchase', {
      upgrade_id: upgradeId,
      cost,
      new_level: newLevel,
      coin_balance_after: coinBalanceAfter
    });
  }
  
  public trackShopOpened(coinBalance: number): void {
    this.trackEvent('shop_opened', {
      coin_balance: coinBalance
    });
  }
  
  public trackChallengeCompleted(challengeType: string, reward: number): void {
    this.trackEvent('challenge_completed', {
      challenge_type: challengeType,
      coins_earned: reward
    });
  }
  
  public trackSkinUnlocked(skinId: string, unlockMethod: string): void {
    this.trackEvent('skin_unlocked', {
      skin_id: skinId,
      unlock_method: unlockMethod
    });
  }
  
  public trackSkinSelected(skinId: string): void {
    this.trackEvent('skin_selected', {
      skin_id: skinId
    });
  }
  
  public trackMilestoneReached(milestone: number, score: number): void {
    this.trackEvent('milestone_reached', {
      milestone,
      score_at_milestone: score
    });
  }
  
  public trackNearMiss(score: number, bonusEarned: number): void {
    this.trackEvent('near_miss', {
      score,
      bonus_earned: bonusEarned
    });
  }
  
  public trackStreakBroken(streak: number, score: number): void {
    this.trackEvent('streak_broken', {
      streak,
      score
    });
  }
  
  public trackEvent(name: string, properties: Record<string, string | number | boolean> = {}): void {
    const event: AnalyticsEvent = {
      name,
      timestamp: Date.now(),
      properties: {
        ...properties,
        session_id: this._sessionId || 'none',
        game_version: this._gameVersion
      }
    };
    
    this._events.push(event);
    
    if (this._events.length > AnalyticsManager.MAX_EVENTS) {
      this._events = this._events.slice(-AnalyticsManager.MAX_EVENTS);
    }
    
    this._persistData();
  }
  
  public getEvents(count?: number): AnalyticsEvent[] {
    const n = count ?? 50;
    return this._events.slice(-n);
  }
  
  public getEventCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    
    for (const event of this._events) {
      counts[event.name] = (counts[event.name] || 0) + 1;
    }
    
    return counts;
  }
  
  public getSessionStats(): { totalSessions: number; avgDuration: number; avgScore: number } {
    const sessionEnds = this._events.filter(e => e.name === 'session_end');
    
    if (sessionEnds.length === 0) {
      return { totalSessions: 0, avgDuration: 0, avgScore: 0 };
    }
    
    const totalDuration = sessionEnds.reduce((sum, e) => sum + (e.properties.duration_seconds as number || 0), 0);
    const totalScore = sessionEnds.reduce((sum, e) => sum + (e.properties.final_score as number || 0), 0);
    
    return {
      totalSessions: sessionEnds.length,
      avgDuration: Math.floor(totalDuration / sessionEnds.length),
      avgScore: Math.floor(totalScore / sessionEnds.length)
    };
  }
  
  public clearData(): void {
    this._events = [];
    try {
      localStorage.removeItem(AnalyticsManager.STORAGE_KEY);
      localStorage.removeItem(AnalyticsManager.SESSION_KEY);
    } catch (e) {
      // Ignore
    }
  }
  
  public exportData(): string {
    return JSON.stringify({
      exportedAt: new Date().toISOString(),
      gameVersion: this._gameVersion,
      events: this._events,
      stats: this.getSessionStats(),
      eventCounts: this.getEventCounts()
    }, null, 2);
  }
}
