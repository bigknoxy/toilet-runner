export interface CharacterSkin {
  id: string;
  name: string;
  color: number | string;
  gradient?: [number, number, number];
  unlockScore: number;
  icon: string;
  description: string;
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

  private _statsManager: any = null;

  constructor() {
    this._initializeSkins();
  }

  public setStatsManager(statsManager: any): void {
    this._statsManager = statsManager;
  }

  private _initializeSkins(): void {
    // Skins are already initialized above
  }

  getSkins(): CharacterSkin[] {
    return this._skins;
  }

  getSelectedSkinId(): string {
    if (!this._statsManager) {
      return 'classic';
    }
    return this._statsManager.getSelectedSkin();
  }

  getSelectedSkin(): CharacterSkin | undefined {
    if (!this._statsManager) {
      return undefined;
    }
    const selectedSkinId = this._statsManager.getSelectedSkin();
    return this._skins.find(s => s.id === selectedSkinId);
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

  isSkinUnlocked(skinId: string): boolean {
    if (!this._statsManager) {
      return false;
    }
    return this._statsManager.isSkinUnlocked(skinId);
  }

  // Helper method to update stats and check for skin unlocks
  updateStats(highestScore: number): { newlyUnlocked: string[] } {
    const newlyUnlocked: string[] = [];

    // Check for new skin unlocks
    for (const skin of this._skins) {
      if (highestScore >= skin.unlockScore) {
        newlyUnlocked.push(skin.id);
      }
    }

    return { newlyUnlocked };
  }
}
