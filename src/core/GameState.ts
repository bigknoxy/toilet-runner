export enum GameState {
  MENU,
  PLAYING,
  PAUSED,
  GAMEOVER,
  LEADERBOARD,
  SKINS,
  CHALLENGES,
  STATS
}

export type GameStateValue = `${GameState}`;
