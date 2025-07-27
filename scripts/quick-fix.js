#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Quick Fix Script - Solving Common Issues...\n');

// 1. First, let's see what's actually broken
console.log('1️⃣ Running diagnostic...');
let buildFailed = false;
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('   ✅ Lint passed');
} catch (error) {
  console.log('   🚨 Lint issues found');
  buildFailed = true;
}

// 2. Reset Storybook cache (safe operation)
console.log('\n2️⃣ Resetting Storybook cache...');
try {
  execSync('rm -rf node_modules/.cache/storybook', { stdio: 'inherit' });
  console.log('   ✅ Storybook cache cleared');
} catch (error) {
  console.log('   ⚠️ Cache clear failed (maybe already clean)');
}

// 3. Try auto-fixing lint issues
if (buildFailed) {
  console.log('\n3️⃣ Attempting auto-fix of lint issues...');
  try {
    execSync('npm run lint:fix', { stdio: 'inherit' });
    console.log('   ✅ Auto-fix applied');
  } catch (error) {
    console.log('   ⚠️ Some issues need manual review');
  }
}

// 4. Sync documentation
console.log('\n4️⃣ Syncing documentation...');
try {
  execSync('node scripts/sync-design-docs.js', { stdio: 'inherit' });
  console.log('   ✅ Documentation synced');
} catch (error) {
  console.log('   ⚠️ Doc sync failed - script may not exist yet');
}

// 5. Final health check
console.log('\n5️⃣ Running final health check...');
try {
  execSync('npm run health', { stdio: 'inherit' });
  console.log('\n🎉 SUCCESS! All systems healthy.');
} catch (error) {
  console.log('\n🚨 Some issues remain. Check the output above for details.');
  console.log('💡 For manual fixes, check: _resources/FINAL_PREVENTION_PLAN.md');
  process.exit(1);
}

console.log('\n✅ Quick fix complete! You can now resume development.');
