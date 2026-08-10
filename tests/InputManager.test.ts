import { describe, expect, test, beforeEach, afterEach } from 'bun:test';
import { InputManager } from '../src/input/InputManager';

interface Calls {
  lanes: number[];
  jumps: number;
  pauses: number;
}

let calls: Calls;
let input: InputManager;

function makeInput(gate: () => boolean = () => true): InputManager {
  const manager = new InputManager(
    d => calls.lanes.push(d),
    () => { calls.jumps++; },
    () => { calls.pauses++; }
  );
  manager.setGameplayInputGate(gate);
  manager.setup();
  return manager;
}

function press(key: string, init: KeyboardEventInit = {}): KeyboardEvent {
  const event = new KeyboardEvent('keydown', { key, cancelable: true, ...init });
  window.dispatchEvent(event);
  return event;
}

beforeEach(() => {
  calls = { lanes: [], jumps: 0, pauses: 0 };
  document.body.innerHTML = '';
});

afterEach(() => {
  input?.teardown();
});

describe('keyboard', () => {
  test('arrows and WASD change lanes, space jumps', () => {
    input = makeInput();
    press('ArrowLeft');
    press('d');
    press('A');
    press(' ');
    press('w');
    expect(calls.lanes).toEqual([-1, 1, -1]);
    expect(calls.jumps).toBe(2);
  });

  test('consumed keys are preventDefault-ed, others are not', () => {
    input = makeInput();
    expect(press(' ').defaultPrevented).toBe(true);
    expect(press('Tab').defaultPrevented).toBe(false);
  });

  test('OS key auto-repeat never strobes pause', () => {
    input = makeInput();
    press('p');
    press('p', { repeat: true });
    press('p', { repeat: true });
    expect(calls.pauses).toBe(1);
  });

  test('held jump does not bunny-hop', () => {
    input = makeInput();
    press(' ');
    press(' ', { repeat: true });
    press(' ', { repeat: true });
    expect(calls.jumps).toBe(1);
  });

  test('Escape pauses even while gameplay input is gated off', () => {
    input = makeInput(() => false);
    press('Escape');
    expect(calls.pauses).toBe(1);
  });

  test('gate blocks movement keys but not pause', () => {
    input = makeInput(() => false);
    press('ArrowLeft');
    press(' ');
    press('p');
    expect(calls.lanes).toEqual([]);
    expect(calls.jumps).toBe(0);
    expect(calls.pauses).toBe(1);
  });

  test('typing into the name field never reaches the game', () => {
    input = makeInput();
    const field = document.createElement('input');
    document.body.appendChild(field);
    field.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'a', bubbles: true, cancelable: true })
    );
    field.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })
    );
    expect(calls.lanes).toEqual([]);
    expect(calls.pauses).toBe(0);
  });

  test('teardown unbinds the listener', () => {
    input = makeInput();
    input.teardown();
    press('ArrowLeft');
    expect(calls.lanes).toEqual([]);
  });
});
