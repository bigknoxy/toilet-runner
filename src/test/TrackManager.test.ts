import * as THREE from 'three';
import { TrackManager } from '../game/TrackManager';

// Simple test to verify TrackManager functionality
export function testTrackManager(): void {
  console.log('Testing TrackManager...');
  
  // Create mock scene
  const scene = new THREE.Scene();
  const trackManager = new TrackManager(scene);
  
  // Test initial segments
  const initialRearZ = trackManager.getRearZ();
  console.log('Initial rear Z:', initialRearZ);
  
  // Test update
  trackManager.update(0.016, 10); // 60 FPS delta
  const updatedRearZ = trackManager.getRearZ();
  console.log('Updated rear Z:', updatedRearZ);
  
  // Test reset
  trackManager.reset();
  const resetRearZ = trackManager.getRearZ();
  console.log('Reset rear Z:', resetRearZ);
  
  // Clean up
  trackManager.dispose();
  console.log('TrackManager test completed successfully!');
}