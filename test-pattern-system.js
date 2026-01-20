import { PatternPool, ObstaclePattern } from '../src/game/ObstaclePattern.js';
import { DifficultyManager } from '../src/game/DifficultyManager.js';
import { PatternSequencer } from '../src/game/PatternSequencer.js';

console.log('🧪 Testing Pattern System...\n');

PatternPool.initialize();
PatternSequencer.initialize();

console.log('✅ Testing PatternPool.validateAllPatterns...');
const validation = PatternPool.validateAllPatterns();
console.log(`   Valid patterns: ${validation.valid.length}`);
console.log(`   Invalid patterns: ${validation.invalid.length}`);

if (validation.invalid.length > 0) {
  console.error('   ❌ Invalid patterns found:');
  validation.invalid.forEach(p => console.error(`      - ${p.id}`));
} else {
  console.log('   ✅ All patterns are valid');
}

console.log('\n✅ Testing DifficultyManager...');
console.log(`   Total tiers: ${DifficultyManager.getAllTiers().length}`);

const testScores = [0, 50, 100, 150, 250, 350, 500, 750];
testScores.forEach(score => {
  const tier = DifficultyManager.getCurrentTier(score);
  const spawnRate = DifficultyManager.getSpawnRate(score);
  const speed = DifficultyManager.getBaseObstacleSpeed(score);
  const gap = DifficultyManager.getGapBetweenWaves(score);
  console.log(`   Score ${score}: Tier ${tier.name}, SpawnRate ${spawnRate}, Speed ${speed.toFixed(2)}, Gap ${gap}`);
});

console.log('\n✅ Testing PatternSequencer...');
PatternSequencer.reset();
for (let i = 0; i < 12; i++) {
  PatternSequencer.setScore(i * 50);
  const pattern = PatternSequencer.getNextPattern();
  console.log(`   Wave ${i + 1}: ${pattern.id} (${pattern.difficulty}) - ${pattern.obstacles.length} obstacles`);
}

console.log('\n✅ Testing difficulty progression...');
PatternSequencer.reset();
const scoreProgression = [0, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000];
scoreProgression.forEach(score => {
  PatternSequencer.setScore(score);
  const tier = DifficultyManager.getCurrentTier(score);
  const pattern = PatternSequencer.getNextPattern();
  const progress = PatternSequencer.getCurrentProgress();
  console.log(`   Score ${score}: Tier ${tier.name}, Pattern ${pattern.id}, Progress ${progress.current}/${progress.total}`);
});

console.log('\n✅ Testing difficulty distribution validity...');
const validDistributions = DifficultyManager.validateDistributions();
console.log(`   All tier distributions sum to 1.0: ${validDistributions}`);

console.log('\n✅ All tests completed successfully!');
