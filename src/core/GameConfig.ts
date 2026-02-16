export interface PatternSettings {
  minGapBetweenWaves: number;
  maxGapBetweenWaves: number;
  minSpeedMultiplier: number;
  maxSpeedMultiplier: number;
  maxObstaclesPerPattern: number;
}

export interface EmojiSettings {
  enabled: boolean;
  fallbackMode: boolean;
  fallbackCharacters: string[];
  fontChain: string;
  preloadFonts: boolean;
}

export interface GameConfig {
  patterns: PatternSettings;
  emojis: EmojiSettings;
}

export const CONFIG: GameConfig = {
  patterns: {
    minGapBetweenWaves: 10,
    maxGapBetweenWaves: 28,
    minSpeedMultiplier: 1.0,
    maxSpeedMultiplier: 1.7,
    maxObstaclesPerPattern: 2
  },
  emojis: {
    enabled: true,
    fallbackMode: false,
    fallbackCharacters: ['!', '?', '*', '#', '@'],
    fontChain: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif',
    preloadFonts: true
  }
};
