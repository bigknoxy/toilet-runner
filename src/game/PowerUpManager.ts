export interface ConsumablePowerUp {
  id: string;
  name: string;
  description: string;
  icon: string;
  cost: number;
  effect: string;
}

export interface ActivePowerUp {
  id: string;
  quantity: number;
}

export class PowerUpManager {
  private static readonly STORAGE_KEY = 'toiletRunner_powerups';

  private _powerUps: ConsumablePowerUp[] = [];
  private _inventory: Record<string, number> = {};
  private _activeForRun: string[] = [];

  constructor() {
    this._initializePowerUps();
    this._loadInventory();
  }

  private _initializePowerUps(): void {
    this._powerUps = [
      {
        id: 'scoreBoost',
        name: '2x Score Boost',
        description: 'Double your score for the next run',
        icon: '⭐',
        cost: 50,
        effect: 'Double points earned during run'
      },
      {
        id: 'consumableShield',
        name: 'Shield',
        description: 'One-hit protection for next run only',
        icon: '🛡️',
        cost: 75,
        effect: 'Absorbs one collision'
      },
      {
        id: 'headStart',
        name: 'Head Start',
        description: 'Begin run at 100 score with boosted speed',
        icon: '🚀',
        cost: 100,
        effect: 'Start at score 100, initial speed boost'
      }
    ];
  }

  private _loadInventory(): void {
    try {
      const saved = localStorage.getItem(PowerUpManager.STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        this._inventory = data.inventory || {};
      }
    } catch (e) {
      console.warn('Failed to load power-up inventory:', e);
      this._inventory = {};
    }
  }

  private _saveInventory(): void {
    try {
      localStorage.setItem(PowerUpManager.STORAGE_KEY, JSON.stringify({
        inventory: this._inventory
      }));
    } catch (e) {
      console.warn('Failed to save power-up inventory:', e);
    }
  }

  getPowerUps(): ConsumablePowerUp[] {
    return this._powerUps.map(p => ({ ...p }));
  }

  getInventory(): Record<string, number> {
    return { ...this._inventory };
  }

  getQuantity(powerUpId: string): number {
    return this._inventory[powerUpId] || 0;
  }

  addToInventory(powerUpId: string, quantity: number = 1): void {
    if (!this._inventory[powerUpId]) {
      this._inventory[powerUpId] = 0;
    }
    this._inventory[powerUpId] += quantity;
    this._saveInventory();
  }

  removeFromInventory(powerUpId: string, quantity: number = 1): boolean {
    const current = this._inventory[powerUpId] || 0;
    if (current < quantity) {
      return false;
    }
    this._inventory[powerUpId] = current - quantity;
    if (this._inventory[powerUpId] <= 0) {
      delete this._inventory[powerUpId];
    }
    this._saveInventory();
    return true;
  }

  activateForRun(powerUpId: string): boolean {
    if (this.getQuantity(powerUpId) <= 0) {
      return false;
    }
    if (this._activeForRun.includes(powerUpId)) {
      return false;
    }
    this._activeForRun.push(powerUpId);
    return true;
  }

  deactivateForRun(powerUpId: string): void {
    const index = this._activeForRun.indexOf(powerUpId);
    if (index >= 0) {
      this._activeForRun.splice(index, 1);
    }
  }

  getActiveForRun(): string[] {
    return [...this._activeForRun];
  }

  hasActivePowerUp(powerUpId: string): boolean {
    return this._activeForRun.includes(powerUpId);
  }

  consumeActivated(): void {
    for (const powerUpId of this._activeForRun) {
      this.removeFromInventory(powerUpId, 1);
    }
    this._activeForRun = [];
  }

  cancelActivated(): void {
    this._activeForRun = [];
  }

  isActive(powerUpId: string): boolean {
    return this._activeForRun.includes(powerUpId);
  }

  getScoreMultiplier(): number {
    return this.hasActivePowerUp('scoreBoost') ? 2 : 1;
  }

  hasConsumableShield(): boolean {
    return this.hasActivePowerUp('consumableShield');
  }

  hasHeadStart(): boolean {
    return this.hasActivePowerUp('headStart');
  }

  resetInventory(): void {
    this._inventory = {};
    this._activeForRun = [];
    this._saveInventory();
  }
}
