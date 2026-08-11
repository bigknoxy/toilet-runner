/**
 * Runtime frame-rate watchdog that decides when the graphics tier should move.
 *
 * A boot-time benchmark can only ever guess. A phone that benchmarks well still
 * throttles once it warms up, and a desktop can be fine until another tab starts
 * competing for the GPU. This watches the frames actually being delivered and
 * reacts to them, which is the only measurement that reflects what the player
 * is really seeing.
 *
 * Deliberately tier-agnostic: it works on integer tier indices (0 = lowest) so
 * there is no import edge back to PerformanceManager, and so it can be unit
 * tested without a WebGL context.
 *
 * Time is accumulated from the deltas the caller feeds in rather than read from
 * performance.now(). That keeps the state machine deterministic in tests and
 * keeps it aligned with the same capped delta the game loop uses for physics.
 */
export class AdaptiveQuality {
  /** Sustained average below this drops a tier. */
  static readonly DOWNGRADE_FPS = 45;
  /** Sustained average above this climbs a tier, up to the boot-detected ceiling. */
  static readonly UPGRADE_FPS = 58;
  /** Seconds of history required before a downgrade can fire. */
  static readonly DOWNGRADE_WINDOW = 3;
  /**
   * Upgrades need a longer look than downgrades. Being briefly too conservative
   * costs the player some sparkle; being briefly too ambitious costs them frames
   * mid-run, which is what they actually notice in a reaction-time game.
   */
  static readonly UPGRADE_WINDOW = 8;
  /** Quiet period after any tier change, so one change cannot immediately trigger the next. */
  static readonly COOLDOWN = 5;
  /**
   * Frames longer than this are a tab-switch, a GC pause, or an alt-tab - not a
   * signal about sustained rendering cost. Counting them would let a single
   * hitch drop everyone's quality, so they are discarded entirely.
   */
  static readonly MAX_PLAUSIBLE_DELTA = 0.25;

  /** Retained history. Slightly longer than UPGRADE_WINDOW so that window is always coverable. */
  private static readonly HISTORY = AdaptiveQuality.UPGRADE_WINDOW * 1.25;

  private _now = 0;
  private _times: number[] = [];
  private _deltas: number[] = [];
  private _tier: number;
  private _ceiling: number;
  private _cooldownUntil: number;

  /**
   * @param startTier Tier index chosen by the boot benchmark.
   * @param ceiling   Highest tier this session may climb back to. Defaults to
   *                  startTier: the benchmark's verdict is treated as an upper
   *                  bound, so adaptation can only recover ground it gave up,
   *                  never promote a device past what it measured.
   */
  constructor(startTier: number, ceiling: number = startTier) {
    this._tier = startTier;
    this._ceiling = Math.max(startTier, ceiling);
    // Startup is the worst time to judge: shaders are still compiling, textures
    // are uploading, and the first GC has not happened yet.
    this._cooldownUntil = AdaptiveQuality.COOLDOWN;
  }

  get tier(): number {
    return this._tier;
  }

  /**
   * Feed one frame. Returns the new tier index if it changed this frame,
   * otherwise null.
   */
  update(delta: number): number | null {
    if (delta <= 0 || delta > AdaptiveQuality.MAX_PLAUSIBLE_DELTA) return null;

    this._now += delta;
    this._times.push(this._now);
    this._deltas.push(delta);
    this._prune();

    if (this._now < this._cooldownUntil) return null;

    const recent = this._averageFps(AdaptiveQuality.DOWNGRADE_WINDOW);
    if (recent !== null && recent < AdaptiveQuality.DOWNGRADE_FPS && this._tier > 0) {
      return this._change(this._tier - 1);
    }

    const sustained = this._averageFps(AdaptiveQuality.UPGRADE_WINDOW);
    if (sustained !== null && sustained > AdaptiveQuality.UPGRADE_FPS && this._tier < this._ceiling) {
      return this._change(this._tier + 1);
    }

    return null;
  }

  /** Drop samples the longest window no longer needs. */
  private _prune(): void {
    const cutoff = this._now - AdaptiveQuality.HISTORY;
    let drop = 0;
    while (drop < this._times.length && this._times[drop] <= cutoff) drop++;
    if (drop > 0) {
      this._times.splice(0, drop);
      this._deltas.splice(0, drop);
    }
  }

  /**
   * Average FPS over the trailing `window` seconds, or null when history does
   * not yet span it. Returning null rather than a partial average is what stops
   * a half-second of stutter during a state transition from moving the tier.
   */
  private _averageFps(window: number): number | null {
    const cutoff = this._now - window;
    if (this._times.length === 0 || this._times[0] > cutoff) return null;

    let frames = 0;
    let elapsed = 0;
    for (let i = this._times.length - 1; i >= 0; i--) {
      if (this._times[i] <= cutoff) break;
      frames++;
      elapsed += this._deltas[i];
    }
    return elapsed > 0 ? frames / elapsed : null;
  }

  private _change(next: number): number {
    this._tier = next;
    this._cooldownUntil = this._now + AdaptiveQuality.COOLDOWN;
    // History describes rendering at the old tier, so it says nothing about
    // whether the new one holds up. Starting clean also means the next decision
    // has to re-earn a full window of evidence.
    this._times.length = 0;
    this._deltas.length = 0;
    return next;
  }

  /**
   * Forget accumulated history without touching the tier. Called when the player
   * leaves gameplay, so an idle menu (which renders almost nothing) cannot be
   * mistaken for headroom.
   */
  reset(): void {
    this._times.length = 0;
    this._deltas.length = 0;
    this._cooldownUntil = this._now + AdaptiveQuality.COOLDOWN;
  }
}
