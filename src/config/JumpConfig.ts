export const JUMP_CONFIG = {
  JUMP_HEIGHT: 2.5,
  TIME_TO_APEX: 0.4,
  COYOTE_TIME: 0.1,
  JUMP_BUFFER_TIME: 0.1,
  LAND_SQUASH_DURATION: 0.15,
  LAND_SQUASH_SCALE: 0.7,
  
  get GRAVITY() { return 2 * this.JUMP_HEIGHT / (this.TIME_TO_APEX * this.TIME_TO_APEX); },
  get JUMP_FORCE() { return 2 * this.JUMP_HEIGHT / this.TIME_TO_APEX; }
} as const;
