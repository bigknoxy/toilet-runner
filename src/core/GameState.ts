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
  CONTROLS
}

export type GameStateValue = `${GameState}`;
