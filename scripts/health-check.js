#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🏥 TBGC Health Check\n');

const checks = [
  {
    name: 'Dependencies',
    command: 'npm list --depth=0',
    successMessage: '✅ All dependencies installed',
    failureMessage: '🚨 Missing dependencies'
  },
  {
    name: 'TypeScript',
    command: 'npx tsc --noEmit',
    successMessage: '✅ TypeScript compiles cleanly',
    failureMessage: '🚨 TypeScript errors found'
  },
  {
    name: 'ESLint',
    command: 'npm run lint',
    successMessage: '✅ Code passes linting',
    failureMessage: '🚨 Linting errors found'
  },
  {
    name: 'Next.js Build',
    command: 'npm run build',
    successMessage: '✅ Next.js builds successfully',
    failureMessage: '🚨 Build failed'
  },
  {
    name: 'Storybook Build',
    command: 'npm run build-storybook',
    successMessage: '✅ Storybook builds successfully',
    failureMessage: '🚨 Storybook build failed'
  }
];

let allPassed = true;

for (const check of checks) {
  console.log(`🔍 Checking ${check.name}...`);
  
  try {
    execSync(check.command, { 
      stdio: 'pipe',
      timeout: 120000 // 2 minute timeout
    });
    console.log(`   ${check.successMessage}`);
  } catch (error) {
    console.log(`   ${check.failureMessage}`);
    allPassed = false;
    
    // Show specific error for debugging
    if (process.argv.includes('--verbose')) {
      console.log(`   Error: ${error.message}`);
    }
  }
  
  console.log('');
}

if (allPassed) {
  console.log('🎉 ALL CHECKS PASSED! System is healthy.');
  console.log('💪 Ready to build amazing features!');
  process.exit(0);
} else {
  console.log('🚨 HEALTH CHECK FAILED!');
  console.log('💡 Try running: node scripts/quick-fix.js');
  console.log('📖 Or check: _resources/DEBUGGING_PREVENTION_PLAN.md');
  process.exit(1);
}
