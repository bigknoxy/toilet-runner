import { describe, expect, test, beforeEach } from 'bun:test';
import * as THREE from 'three';
import { CollisionSystem } from '../src/game/CollisionSystem';
import type { ObstacleManager, ActiveObstacle } from '../src/game/ObstacleManager';
import { ObstacleType } from '../src/game/ObstacleTypes';

// Minimal stand-in for ObstacleManager: CollisionSystem only ever calls
// getActiveObstacles(), so a full instance (which needs a THREE.Scene,
// TrackManager, etc.) would be unrelated setup noise.
class FakeObstacleManager {
  constructor(private _obstacles: ActiveObstacle[]) {}
  getActiveObstacles(): ActiveObstacle[] {
    return this._obstacles;
  }
}

function fakeManager(obstacles: ActiveObstacle[]): ObstacleManager {
  return new FakeObstacleManager(obstacles) as unknown as ObstacleManager;
}

function playerMeshAt(x: number, y: number, z: number): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
  mesh.position.set(x, y, z);
  return mesh;
}

describe('CollisionSystem tolerance (#70)', () => {
  let collision: CollisionSystem;

  beforeEach(() => {
    collision = new CollisionSystem();
  });

  test('a near-miss that only grazes the old inflated obstacle box is not a hit', () => {
    // Player half-width is 0.8, tolerance is 0.1, so the forgiving edge sits
    // at x = 0.7 from player center. Obstacle half-width is 0.5, centered at
    // x = 1.3, so its near edge is at x = 0.8. Gap of 0.1 between them: with
    // the old bug (tolerance ADDED to the obstacle box) the obstacle's edge
    // would reach x = 0.7 and this would incorrectly register as a hit.
    const player = playerMeshAt(0, 0.5, 0);
    const obstacles: ActiveObstacle[] = [
      { x: 1.3, y: 0.5, z: 0, lane: 1, spawnId: 1, type: ObstacleType.POOP }
    ];

    const hit = collision.checkPlayerVsObstacles(player, fakeManager(obstacles), 0.5, false);
    expect(hit).toBeNull();
  });

  test('a genuine overlap within the shrunk player hitbox still registers', () => {
    const player = playerMeshAt(0, 0.5, 0);
    const obstacles: ActiveObstacle[] = [
      { x: 0.5, y: 0.5, z: 0, lane: 1, spawnId: 2, type: ObstacleType.POOP }
    ];

    const hit = collision.checkPlayerVsObstacles(player, fakeManager(obstacles), 0.5, false);
    expect(hit).not.toBeNull();
    expect(hit?.x).toBe(0.5);
  });
});

describe('CollisionSystem swept collision (#75)', () => {
  let collision: CollisionSystem;

  beforeEach(() => {
    collision = new CollisionSystem();
  });

  test('an obstacle that jumps past the player in one frame still registers a hit', () => {
    const player = playerMeshAt(0, 0.5, 0);

    // Frame 1: obstacle is far ahead, no overlap.
    const frame1: ActiveObstacle[] = [
      { x: 0, y: 0.5, z: -10, lane: 1, spawnId: 7, type: ObstacleType.POOP }
    ];
    expect(collision.checkPlayerVsObstacles(player, fakeManager(frame1), 0.5, false)).toBeNull();

    // Frame 2: a stutter/delta-cap frame moves the obstacle 12 units in one
    // step — more than its own 1.4-unit depth — landing it at z = 2, past
    // the player at z = 0. A discrete instantaneous-box test would find no
    // overlap between the frame-1 and frame-2 boxes and let it tunnel
    // through untouched. The swept test must still catch it because the
    // obstacle's travelled range [-10, 2] crosses the player's position.
    const frame2: ActiveObstacle[] = [
      { x: 0, y: 0.5, z: 2, lane: 1, spawnId: 7, type: ObstacleType.POOP }
    ];
    const hit = collision.checkPlayerVsObstacles(player, fakeManager(frame2), 0.5, false);
    expect(hit).not.toBeNull();
    expect(hit?.z).toBe(2);
  });

  test('an obstacle far outside the sweep path in both frames is not a hit', () => {
    const player = playerMeshAt(0, 0.5, 0);

    const frame1: ActiveObstacle[] = [
      { x: 0, y: 0.5, z: -20, lane: 1, spawnId: 9, type: ObstacleType.POOP }
    ];
    collision.checkPlayerVsObstacles(player, fakeManager(frame1), 0.5, false);

    const frame2: ActiveObstacle[] = [
      { x: 0, y: 0.5, z: -15, lane: 1, spawnId: 9, type: ObstacleType.POOP }
    ];
    const hit = collision.checkPlayerVsObstacles(player, fakeManager(frame2), 0.5, false);
    expect(hit).toBeNull();
  });
});

describe('BARRIER_HIGH is unjumpable (#71)', () => {
  let collision: CollisionSystem;

  beforeEach(() => {
    collision = new CollisionSystem();
  });

  // Jump apex puts the player mesh at GROUND_Y + JUMP_HEIGHT = 3.0.
  const APEX_Y = 3.0;

  test('a jump at full apex still hits a barrier in the same lane', () => {
    const player = playerMeshAt(0, APEX_Y, 0);
    const obstacles: ActiveObstacle[] = [
      { x: 0, y: 1.5, z: 0, lane: 1, spawnId: 1, type: ObstacleType.BARRIER_HIGH }
    ];

    const hit = collision.checkPlayerVsObstacles(player, fakeManager(obstacles), APEX_Y, true);
    expect(hit).not.toBeNull();
  });

  test('the same jump clears a poop pile, so the barrier result is not just a broken jump', () => {
    const player = playerMeshAt(0, APEX_Y, 0);
    const obstacles: ActiveObstacle[] = [
      { x: 0, y: 0.3, z: 0, lane: 1, spawnId: 2, type: ObstacleType.POOP }
    ];

    const hit = collision.checkPlayerVsObstacles(player, fakeManager(obstacles), APEX_Y, true);
    expect(hit).toBeNull();
  });

  test('a barrier is escapable by lane change: the neighbouring lane stays clear', () => {
    // Lane pitch is 3 and the barrier half-width is 1.2, so a player one lane
    // over must not clip it. If this fails the type is undodgeable, not hard.
    const player = playerMeshAt(0, 0.5, 0);
    const obstacles: ActiveObstacle[] = [
      { x: 3, y: 1.5, z: 0, lane: 2, spawnId: 3, type: ObstacleType.BARRIER_HIGH }
    ];

    const hit = collision.checkPlayerVsObstacles(player, fakeManager(obstacles), 0.5, false);
    expect(hit).toBeNull();
  });

  test('running into a barrier on the ground is a hit', () => {
    const player = playerMeshAt(0, 0.5, 0);
    const obstacles: ActiveObstacle[] = [
      { x: 0, y: 1.5, z: 0, lane: 1, spawnId: 4, type: ObstacleType.BARRIER_HIGH }
    ];

    const hit = collision.checkPlayerVsObstacles(player, fakeManager(obstacles), 0.5, false);
    expect(hit).not.toBeNull();
  });
});
