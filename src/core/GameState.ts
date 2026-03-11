export enum GameState {
  MENU,
  PLAYING,
  PAUSED,
  GAMEOVER,
  LEADERBOARD,
  SKINS,
  CHALLENGES,
  STATS,
  SHOP
}

export type GameStateValue = `${GameState}`;
