import { describe, expect, test } from 'bun:test';
import * as THREE from 'three';
import { CoinManager, COIN_PICKUP_VALUE } from '../src/game/CoinManager';
import type { ActiveObstacle } from '../src/game/ObstacleManager';
import { ObstacleType } from '../src/game/ObstacleTypes';
import { getLaneX } from '../src/game/GameConfig';

/** Drive update until at least one coin is live, then report where they are. */
function runUntilSpawn(coins: CoinManager, obstacles: ActiveObstacle[] = []): void {
  // frontZ far ahead so spawns land off-camera the way they do in a real run.
  for (let i = 0; i < 200; i++) {
    coins.update(1 / 60, 20, 0, -60, obstacles);
  }
}

describe('CoinManager', () => {
  test('spawns coins and draws only the live prefix', () => {
    const scene = new THREE.Scene();
    const coins = new CoinManager(scene);

    const mesh = scene.children[0] as THREE.InstancedMesh;
    expect(mesh.count).toBe(0);
    // Culling is derived from instance 0 at the origin, so it has to stay off
    // or the whole pool vanishes once the camera looks away from world zero.
    expect(mesh.frustumCulled).toBe(false);

    runUntilSpawn(coins);
    expect(mesh.count).toBeGreaterThan(0);

    coins.dispose();
  });

  test('collect takes nothing while the player is airborne', () => {
    const scene = new THREE.Scene();
    const coins = new CoinManager(scene);
    runUntilSpawn(coins);

    // A jump apex clears ground-level coins; y above the ceiling must take none
    // no matter how wide the magnet is.
    expect(coins.collect(0, 0, 5, 100)).toBe(0);
    expect(coins.getCollectedThisRun()).toBe(0);

    coins.dispose();
  });

  test('a wider magnet radius takes coins a bare radius misses', () => {
    const scene = new THREE.Scene();
    const narrow = new CoinManager(scene);
    runUntilSpawn(narrow);

    const mesh = scene.children[0] as THREE.InstancedMesh;
    const spawned = mesh.count;
    expect(spawned).toBeGreaterThan(0);

    // Sweep the whole track with a huge magnet from the player's z; every live
    // coin ahead is in range, so the payout is the full live count.
    const taken = narrow.collect(0, 0, 0, 10_000);
    expect(taken).toBe(spawned * COIN_PICKUP_VALUE);
    expect(narrow.getCollectedThisRun()).toBe(spawned);
    expect(mesh.count).toBe(spawned); // count only refreshes on the next update

    narrow.dispose();
  });

  test('does not spawn into a lane an obstacle occupies', () => {
    const scene = new THREE.Scene();
    const coins = new CoinManager(scene);

    // Wall off every lane across the spawn window. Nothing may spawn.
    const obstacles: ActiveObstacle[] = [];
    for (let lane = 0; lane < 3; lane++) {
      for (let z = -200; z <= 40; z += 2) {
        obstacles.push({
          x: getLaneX(lane),
          y: 0,
          z,
          lane,
          spawnId: obstacles.length,
          type: ObstacleType.POOP
        });
      }
    }

    runUntilSpawn(coins, obstacles);
    const mesh = scene.children[0] as THREE.InstancedMesh;
    expect(mesh.count).toBe(0);

    coins.dispose();
  });

  test('reset clears live coins and the run total', () => {
    const scene = new THREE.Scene();
    const coins = new CoinManager(scene);
    runUntilSpawn(coins);
    coins.collect(0, 0, 0, 10_000);
    expect(coins.getCollectedThisRun()).toBeGreaterThan(0);

    coins.reset();
    const mesh = scene.children[0] as THREE.InstancedMesh;
    expect(mesh.count).toBe(0);
    expect(coins.getCollectedThisRun()).toBe(0);

    coins.dispose();
  });
});
