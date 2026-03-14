import { DailyChallengeSystem } from './DailyChallenges';

export interface ShopUpgrade {
  id: string;
  name: string;
  description: string;
  icon: string;
  cost: number;
  maxLevel: number;
  currentLevel: number;
  effect: (level: number) => string;
}

export interface ShopState {
  upgrades: Record<string, number>;
  totalSpent: number;
}

export class ShopManager {
  private static readonly STORAGE_KEY = 'toiletRunner_shop';
  
  private _upgrades: ShopUpgrade[] = [];
  private _dailyChallenges: DailyChallengeSystem | null = null;
  private _state: ShopState;
  
  constructor() {
    this._state = this._loadState();
    this._initializeUpgrades();
    this._syncUpgradeLevels();
  }
  
  public setDailyChallenges(dailyChallenges: DailyChallengeSystem): void {
    this._dailyChallenges = dailyChallenges;
  }
  
  private _initializeUpgrades(): void {
    this._upgrades = [
      {
        id: 'shield',
        name: 'Shield',
        description: 'Start each run with a protective shield',
        icon: '🛡️',
        cost: 200,
        maxLevel: 1,
        currentLevel: 0,
        effect: (level: number) => level > 0 ? 'Active: 1-hit protection per run' : 'Not purchased'
      },
      {
        id: 'coinMagnet',
        name: 'Coin Magnet',
        description: 'Increase score bonus from near-misses',
        icon: '🧲',
        cost: 150,
        maxLevel: 3,
        currentLevel: 0,
        effect: (level: number) => `Near-miss bonus: +${5 + (level * 5)} points`
      },
      {
        id: 'speedControl',
        name: 'Speed Control',
        description: 'Slow down speed increase over time',
        icon: '⏱️',
        cost: 100,
        maxLevel: 3,
        currentLevel: 0,
        effect: (level: number) => `Speed increase reduced by ${level * 10}%`
      },
      {
        id: 'extraLife',
        name: 'Extra Life',
        description: 'Second chance on first collision each run',
        icon: '💫',
        cost: 300,
        maxLevel: 1,
        currentLevel: 0,
        effect: (level: number) => level > 0 ? 'Active: Revive once per run' : 'Not purchased'
      }
    ];
  }
  
  private _syncUpgradeLevels(): void {
    for (const upgrade of this._upgrades) {
      if (this._state.upgrades[upgrade.id] !== undefined) {
        upgrade.currentLevel = this._state.upgrades[upgrade.id];
      }
    }
  }
  
  private _loadState(): ShopState {
    try {
      const saved = localStorage.getItem(ShopManager.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object' && 'upgrades' in parsed) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load shop state:', e);
    }
    
    return {
      upgrades: {},
      totalSpent: 0
    };
  }
  
  private _saveState(): void {
    try {
      localStorage.setItem(ShopManager.STORAGE_KEY, JSON.stringify(this._state));
    } catch (e) {
      console.warn('Failed to save shop state:', e);
    }
  }
  
  public getUpgrades(): ShopUpgrade[] {
    return this._upgrades.map(u => ({ ...u }));
  }
  
  public getCoinBalance(): number {
    return this._dailyChallenges?.getCoinBalance() ?? 0;
  }
  
  public canPurchase(upgradeId: string): boolean {
    const upgrade = this._upgrades.find(u => u.id === upgradeId);
    if (!upgrade) return false;
    
    if (upgrade.currentLevel >= upgrade.maxLevel) return false;
    
    return this.getCoinBalance() >= this._calculateCost(upgrade);
  }
  
  public purchase(upgradeId: string): { success: boolean; message: string } {
    const upgrade = this._upgrades.find(u => u.id === upgradeId);
    
    if (!upgrade) {
      return { success: false, message: 'Upgrade not found' };
    }
    
    if (upgrade.currentLevel >= upgrade.maxLevel) {
      return { success: false, message: 'Already maxed out!' };
    }
    
    const cost = this._calculateCost(upgrade);
    const balance = this.getCoinBalance();
    
    if (balance < cost) {
      return { success: false, message: `Need ${cost - balance} more coins` };
    }
    
    if (!this._dailyChallenges) {
      return { success: false, message: 'System error' };
    }
    
    this._dailyChallenges.updateCoinBalance(-cost);
    upgrade.currentLevel++;
    this._state.upgrades[upgradeId] = upgrade.currentLevel;
    this._state.totalSpent += cost;
    this._saveState();
    
    return { success: true, message: `${upgrade.name} upgraded to level ${upgrade.currentLevel}!` };
  }
  
  public getUpgradeLevel(upgradeId: string): number {
    return this._state.upgrades[upgradeId] ?? 0;
  }
  
  public hasShield(): boolean {
    return this.getUpgradeLevel('shield') > 0;
  }
  
  public hasExtraLife(): boolean {
    return this.getUpgradeLevel('extraLife') > 0;
  }
  
  public getCoinMagnetBonus(): number {
    const level = this.getUpgradeLevel('coinMagnet');
    return level * 5;
  }
  
  public getSpeedReduction(): number {
    const level = this.getUpgradeLevel('speedControl');
    return level * 0.1;
  }
  
  public getTotalSpent(): number {
    return this._state.totalSpent;
  }
  
  public resetShop(): void {
    this._state = { upgrades: {}, totalSpent: 0 };
    this._initializeUpgrades();
    this._saveState();
  }

  private _calculateCost(upgrade: ShopUpgrade): number {
    return upgrade.cost * (upgrade.currentLevel + 1);
  }
}
