import { PatternPool } from './src/game/ObstaclePattern.js';
import { DifficultyManager } from './src/game/DifficultyManager.js';
import { PatternSequencer } from './src/game/PatternSequencer.js';

let allPassed = true;
let totalTests = 0;
let passedTests = 0;

function test(name, condition, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✅ ${name} ${details}`);
  } else {
    allPassed = false;
    console.error(`❌ ${name} ${details}`);
  }
}

console.log('\n🧪 Pattern System Integration Tests\n');

console.log('=== Phase 1: Pattern Pool ===\n');
try {
  PatternPool.initialize();
  test('PatternPool.initialize()', true);

  const allPatterns = PatternPool.getAllPatterns();
  test('Pattern pool size', allPatterns.length >= 8, `(${allPatterns.length} patterns)`);

  const validation = PatternPool.validateAllPatterns();
  test('All patterns valid', validation.invalid.length === 0, `(${validation.valid.length} valid, ${validation.invalid.length} invalid)`);

  validation.invalid.forEach(p => {
    test(`Pattern ${p.id} invalid`, false, 'Should have 1-2 obstacles and 1 clear lane');
  });

  const easyPatterns = PatternPool.getPatternsByDifficulty('EASY');
  test('Easy patterns exist', easyPatterns.length > 0, `(${easyPatterns.length} patterns)`);

  const mediumPatterns = PatternPool.getPatternsByDifficulty('MEDIUM');
  test('Medium patterns exist', mediumPatterns.length > 0, `(${mediumPatterns.length} patterns)`);

  const hardPatterns = PatternPool.getPatternsByDifficulty('HARD');
  test('Hard patterns exist', hardPatterns.length > 0, `(${hardPatterns.length} patterns)`);

  const extremePatterns = PatternPool.getPatternsByDifficulty('EXTREME');
  test('Extreme patterns exist', extremePatterns.length > 0, `(${extremePatterns.length} patterns)`);

  const randomPattern = PatternPool.getRandomPattern('EASY');
  test('Get random pattern', randomPattern !== null, `Got ${randomPattern.id}`);

} catch (e) {
  test('Pattern Pool initialization', false, e.message);
}

console.log('\n=== Phase 2: Difficulty Manager ===\n');
try {
  const tiers = DifficultyManager.getAllTiers();
  test('Tier count', tiers.length === 4, `(${tiers.length} tiers)`);

  test('Tier names',
    tiers.every(t => ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'MASTER'].includes(t.name)),
    tiers.map(t => t.name).join(', ')
  );

  const tier0 = DifficultyManager.getCurrentTier(0);
  test('Score 0 -> BEGINNER', tier0.name === 'BEGINNER');

  const tier50 = DifficultyManager.getCurrentTier(50);
  test('Score 50 -> BEGINNER', tier50.name === 'BEGINNER');

  const tier100 = DifficultyManager.getCurrentTier(100);
  test('Score 100 -> INTERMEDIATE', tier100.name === 'INTERMEDIATE');

  const tier250 = DifficultyManager.getCurrentTier(250);
  test('Score 250 -> ADVANCED', tier250.name === 'ADVANCED');

  const tier500 = DifficultyManager.getCurrentTier(500);
  test('Score 500 -> MASTER', tier500.name === 'MASTER');

  const tier1000 = DifficultyManager.getCurrentTier(1000);
  test('Score 1000 -> MASTER', tier1000.name === 'MASTER');

  const spawnRate0 = DifficultyManager.getSpawnRate(0);
  test('Spawn rate at score 0', spawnRate0 === 25, `(${spawnRate0} frames)`);

  const spawnRate500 = DifficultyManager.getSpawnRate(500);
  test('Spawn rate at score 500', spawnRate0 > spawnRate500, `(${spawnRate0} -> ${spawnRate500})`);

  const speed0 = DifficultyManager.getBaseObstacleSpeed(0);
  const speed500 = DifficultyManager.getBaseObstacleSpeed(500);
  test('Speed increases with score', speed500 > speed0, `(${speed0.toFixed(2)} -> ${speed500.toFixed(2)})`);

  const gap0 = DifficultyManager.getGapBetweenWaves(0);
  const gap500 = DifficultyManager.getGapBetweenWaves(500);
  test('Gap decreases with score', gap500 < gap0, `(${gap0} -> ${gap500})`);

  const distValid = DifficultyManager.validateDistributions();
  test('Distributions valid', distValid, 'All sum to 1.0');

} catch (e) {
  test('Difficulty Manager tests', false, e.message);
}

console.log('\n=== Phase 3: Pattern Sequencer ===\n');
try {
  PatternSequencer.initialize();
  test('PatternSequencer.initialize()', true);

  PatternSequencer.reset();
  test('PatternSequencer.reset()', true);

  for (let i = 0; i < 5; i++) {
    PatternSequencer.setScore(0);
    const pattern = PatternSequencer.getNextPattern();
    test(`Get pattern at score 0 (wave ${i+1})`, pattern !== null, `${pattern.id} (${pattern.difficulty})`);
  }

  PatternSequencer.reset();
  for (let i = 0; i < 5; i++) {
    PatternSequencer.setScore(500);
    const pattern = PatternSequencer.getNextPattern();
    test(`Get pattern at score 500 (wave ${i+1})`, pattern !== null, `${pattern.id} (${pattern.difficulty})`);
  }

  const progress = PatternSequencer.getCurrentProgress();
  test('Get progress', progress.total > 0, `(${progress.current}/${progress.total})`);

} catch (e) {
  test('Pattern Sequencer tests', false, e.message);
}

console.log('\n=== Phase 4: Difficulty Progression ===\n');
try {
  const scoreProgression = [0, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000];

  scoreProgression.forEach(score => {
    PatternSequencer.setScore(score);
    const tier = DifficultyManager.getCurrentTier(score);
    const pattern = PatternSequencer.getNextPattern();
    test(`Score ${score} -> ${tier.name}`, pattern.difficulty !== undefined, `${pattern.id}`);
  });

} catch (e) {
  test('Difficulty progression tests', false, e.message);
}

console.log('\n=== Phase 5: Pattern Solvability ===\n');
try {
  const allPatterns = PatternPool.getAllPatterns();

  allPatterns.forEach(pattern => {
    const lanes = pattern.obstacles.map(o => o.lane);
    const hasClearLane = [0, 1, 2].some(lane => !lanes.includes(lane));
    const uniqueLanes = new Set(lanes).size === lanes.length;

    test(`Pattern ${pattern.id} has clear lane`, hasClearLane);
    test(`Pattern ${pattern.id} has unique lanes`, uniqueLanes);
    test(`Pattern ${pattern.id} max 2 obstacles`, pattern.obstacles.length <= 2);
  });

} catch (e) {
  test('Pattern solvability tests', false, e.message);
}

console.log('\n=== Test Summary ===\n');
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passedTests}`);
console.log(`Failed: ${totalTests - passedTests}`);

if (allPassed) {
  console.log('\n✅ ALL TESTS PASSED\n');
  process.exit(0);
} else {
  console.error('\n❌ SOME TESTS FAILED\n');
  process.exit(1);
}
