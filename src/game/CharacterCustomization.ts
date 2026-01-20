export interface CharacterSkin {
  id: string;
  name: string;
  color: number | string;
  gradient?: [number, number, number];
  unlockScore: number;
  icon: string;
  description: string;
}

export interface PlayerStats {
  totalRuns: number;
  highestScore: number;
  totalDistance: number;
  totalObstaclesDodged: number;
  perfectLaneChanges: number;
  longestRun: number;
  currentStreak: number;
  skinsUnlocked: string[];
  challengesCompleted: number;
}

export class CharacterCustomization {
  private _skins: CharacterSkin[] = [
    {
      id: 'classic',
      name: 'Classic White',
      color: 0xFFFFFF,
      unlockScore: 0,
      icon: '🧻',
      description: 'The original toilet paper roll'
    },
    {
      id: 'gold',
      name: 'Golden Roll',
      color: 0xFFD700,
      unlockScore: 100,
      icon: '✨',
      description: 'For champions only!'
    },
    {
      id: 'rainbow',
      name: 'Pride',
      color: 0xFF69B4,
      gradient: [0xFF0000, 0xFFA500, 0xFFFF00, 0x008000, 0x0000FF, 0x4B0082, 0x9400D3],
      unlockScore: 200,
      icon: '🌈',
      description: 'Celebrate diversity!'
    },
    {
      id: 'neon',
      name: 'Cyber Glow',
      color: 0x00FF00,
      gradient: [0x00FF00, 0x00FFFF],
      unlockScore: 300,
      icon: '⚡',
      description: 'Future is now!'
    },
    {
      id: 'camo',
      name: 'Military',
      color: 0x4B5320,
      unlockScore: 400,
      icon: '🎖️',
      description: 'Tactical toilet paper'
    },
    {
      id: 'fire',
      name: 'Hot Stuff',
      color: 0xFF4500,
      gradient: [0xFF4500, 0xFFD700],
      unlockScore: 500,
      icon: '🔥',
      description: 'Feeling spicy!'
    },
    {
      id: 'ice',
      name: 'Cool Ice',
      color: 0x00FFFF,
      gradient: [0x00FFFF, 0xADD8E6],
      unlockScore: 600,
      icon: '❄️',
      description: 'Chill vibes only'
    },
    {
      id: 'shadow',
      name: 'Dark Mode',
      color: 0x1a1a2e,
      gradient: [0x1a1a2e, 0x0f3460],
      unlockScore: 750,
      icon: '🌙',
      description: 'Stealth mode activated'
    }
  ];

  private _selectedSkin: string = 'classic';
  private _unlockedSkins: Set<string> = new Set(['classic']);
  private _stats: PlayerStats = {
    totalRuns: 0,
    highestScore: 0,
    totalDistance: 0,
    totalObstaclesDodged: 0,
    perfectLaneChanges: 0,
    longestRun: 0,
    currentStreak: 0,
    skinsUnlocked: ['classic'],
    challengesCompleted: 0
  };

  constructor() {
    this._loadFromStorage();
  }

  private _loadFromStorage(): void {
    try {
      const saved = localStorage.getItem('toiletRunner_data');
      if (saved) {
        const data = JSON.parse(saved);
        this._selectedSkin = data.selectedSkin || 'classic';
        this._unlockedSkins = new Set(data.unlockedSkins || ['classic']);
        this._stats = { ...this._stats, ...data.stats };
      }
    } catch (e) {
      console.log('No save data found, using defaults');
    }
  }

  private _saveToStorage(): void {
    try {
      const data = {
        selectedSkin: this._selectedSkin,
        unlockedSkins: Array.from(this._unlockedSkins),
        stats: this._stats
      };
      localStorage.setItem('toiletRunner_data', JSON.stringify(data));
    } catch (e) {
      console.log('Failed to save data');
    }
  }

  getSkins(): CharacterSkin[] {
    return this._skins;
  }

  getSelectedSkin(): CharacterSkin | undefined {
    return this._skins.find(s => s.id === this._selectedSkin);
  }

  getUnlockedSkins(): string[] {
    return Array.from(this._unlockedSkins);
  }

  isSkinUnlocked(skinId: string): boolean {
    return this._unlockedSkins.has(skinId);
  }

  selectSkin(skinId: string): boolean {
    if (this._unlockedSkins.has(skinId)) {
      this._selectedSkin = skinId;
      this._saveToStorage();
      return true;
    }
    return false;
  }

  unlockSkin(skinId: string): void {
    if (!this._unlockedSkins.has(skinId)) {
      this._unlockedSkins.add(skinId);
      this._stats.skinsUnlocked.push(skinId);
      this._saveToStorage();
    }
  }

  getUnlockProgress(skinId: string): { current: number; required: number; percent: number } {
    const skin = this._skins.find(s => s.id === skinId);
    if (!skin) return { current: 0, required: 0, percent: 100 };

    const current = this._stats.highestScore;
    const required = skin.unlockScore;
    const percent = Math.min(100, (current / required) * 100);

    return { current, required, percent };
  }

  updateStats(updates: Partial<PlayerStats>): void {
    this._stats = { ...this._stats, ...updates };

    // Check for new skin unlocks
    for (const skin of this._skins) {
      if (!this._unlockedSkins.has(skin.id) && this._stats.highestScore >= skin.unlockScore) {
        this.unlockSkin(skin.id);
      }
    }

    this._saveToStorage();
  }

  getStats(): PlayerStats {
    return { ...this._stats };
  }

  getSkinColor(skinId: string): number | string {
    const skin = this._skins.find(s => s.id === skinId);
    return skin ? skin.color : 0xFFFFFF;
  }

  getSkinGradient(skinId: string): [number, number] | undefined {
    const skin = this._skins.find(s => s.id === skinId);
    if (skin && skin.gradient && skin.gradient.length >= 2) {
      return [skin.gradient[0], skin.gradient[1]];
    }
    return undefined;
  }

  resetProgress(): void {
    this._unlockedSkins = new Set(['classic']);
    this._selectedSkin = 'classic';
    this._stats = {
      totalRuns: 0,
      highestScore: 0,
      totalDistance: 0,
      totalObstaclesDodged: 0,
      perfectLaneChanges: 0,
      longestRun: 0,
      currentStreak: 0,
      skinsUnlocked: ['classic'],
      challengesCompleted: 0
    };
    this._saveToStorage();
  }
}
