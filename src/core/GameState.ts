export enum GameState {
  MENU,
  PLAYING,
  PAUSED,
  GAMEOVER,
  LEADERBOARD,
  SKINS,
  CHALLENGES,
  STATS,
  SHOP,
  POWERUPS
}

export type GameStateValue = `${GameState}`;
