export type SkinPattern = 'solid' | 'gradient' | 'camo' | 'rainbow' | 'circuit' | 'flames' | 'frost' | 'stars' | 'metallic' | 'paper';

export interface CharacterSkin {
  id: string;
  name: string;
  color: number | string;
  gradient?: number[];
  pattern?: SkinPattern;
  patternColors?: string[];
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
      pattern: 'paper',
      patternColors: ['#FFFFFF', '#F5F5F5', '#E8E8E8'],
      unlockScore: 0,
      icon: '🧻',
      description: 'The original toilet paper roll'
    },
    {
      id: 'gold',
      name: 'Golden Roll',
      color: 0xFFD700,
      pattern: 'metallic',
      patternColors: ['#FFD700', '#DAA520', '#B8860B', '#FFA500'],
      unlockScore: 100,
      icon: '✨',
      description: 'For champions only!'
    },
    {
      id: 'rainbow',
      name: 'Pride',
      color: 0xFF69B4,
      pattern: 'rainbow',
      patternColors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'],
      unlockScore: 200,
      icon: '🌈',
      description: 'Celebrate diversity!'
    },
    {
      id: 'neon',
      name: 'Cyber Glow',
      color: 0x00FF00,
      pattern: 'circuit',
      patternColors: ['#0D0D0D', '#00FFFF', '#FF00FF', '#00FF00'],
      unlockScore: 300,
      icon: '⚡',
      description: 'Future is now!'
    },
    {
      id: 'camo',
      name: 'Military',
      color: 0x4B5320,
      pattern: 'camo',
      patternColors: ['#556B2F', '#8B7355', '#D2B48C', '#2F4F2F', '#6B8E23'],
      unlockScore: 400,
      icon: '🎖️',
      description: 'Tactical toilet paper'
    },
    {
      id: 'fire',
      name: 'Hot Stuff',
      color: 0xFF4500,
      pattern: 'flames',
      patternColors: ['#FF4500', '#FF6600', '#FFD700', '#FF0000', '#FF8C00'],
      unlockScore: 500,
      icon: '🔥',
      description: 'Feeling spicy!'
    },
    {
      id: 'ice',
      name: 'Cool Ice',
      color: 0x00FFFF,
      pattern: 'frost',
      patternColors: ['#B0E0E6', '#87CEEB', '#FFFFFF', '#E0FFFF', '#ADD8E6'],
      unlockScore: 600,
      icon: '❄️',
      description: 'Chill vibes only'
    },
    {
      id: 'shadow',
      name: 'Dark Mode',
      color: 0x1a1a2e,
      pattern: 'stars',
      patternColors: ['#1a1a2e', '#16213e', '#0f0f1a', '#FFFFFF', '#E8E8E8'],
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
