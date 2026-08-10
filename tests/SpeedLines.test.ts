import { describe, expect, test } from 'bun:test';
import * as THREE from 'three';
import { SpeedLines } from '../src/game/visual/SpeedLines';

describe('SpeedLines', () => {
  test('dispose detaches the mesh from the scene', () => {
    const scene = new THREE.Scene();
    const lines = new SpeedLines(scene);
    expect(scene.children.length).toBe(1);

    lines.dispose();
    expect(scene.children.length).toBe(0);
  });
});
