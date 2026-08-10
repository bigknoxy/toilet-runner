/**
 * Shared world geometry.
 *
 * LANE_WIDTH used to be redeclared in RunnerController, TrackManager and
 * ObstacleManager, and main.ts's near-miss band was tuned against none of
 * them — it capped at 2.5 while lanes sit 3 apart, so the band was empty and
 * the combo streak could never start. One definition, so a change to the
 * track cannot silently desync gameplay tuning again.
 */
export const LANE_WIDTH = 3;

/** World x of a lane index: 0 = left, 1 = center, 2 = right. */
export function getLaneX(lane: number): number {
  return (lane - 1) * LANE_WIDTH;
}
