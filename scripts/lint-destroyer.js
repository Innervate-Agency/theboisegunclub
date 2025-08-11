#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔥 ULTIMATE LINT DESTROYER ACTIVATED!');
console.log('💀 Fine tooth comb mode - NO MERCY FOR BAD CODE! 💀\n');

// Run lint and capture output
console.log('🔍 RUNNING COMPREHENSIVE LINT ANALYSIS...\n');

let lintOutput = '';
try {
  lintOutput = execSync('npm run lint', { encoding: 'utf8' });
  console.log('✅ Linting completed - analyzing results...');
} catch (error) {
  lintOutput = error.stdout + error.stderr;
  console.log('⚠️  Linting found issues - DESTRUCTION MODE ACTIVATED!');
}

console.log('\n📊 LINT DESTRUCTION ANALYSIS:\n');

// Parse the lint output
const lines = lintOutput.split('\n').filter(line => line.trim());
const fileIssues = {};
let currentFile = null;

lines.forEach(line => {
  if (line.startsWith('./')) {
    currentFile = line.trim();
    if (!fileIssues[currentFile]) fileIssues[currentFile] = [];
  } else if (currentFile && line.match(/^\d+:\d+/)) {
    fileIssues[currentFile].push(line.trim());
  }
});

// Analyze each file
let totalIssues = 0;
let unusedVars = 0;
let explicitAny = 0;

Object.entries(fileIssues).forEach(([filePath, issues]) => {
  if (issues.length === 0) return;
  
  console.log(`🎯 ${filePath}:`);
  console.log(`   💀 Issues to DESTROY: ${issues.length}`);
  
  const unusedInFile = issues.filter(issue => issue.includes('is defined but never used')).length;
  const anyInFile = issues.filter(issue => issue.includes('Unexpected any')).length;
  
  if (unusedInFile > 0) {
    console.log(`      🗑️  Unused imports/vars: ${unusedInFile}`);
    unusedVars += unusedInFile;
  }
  if (anyInFile > 0) {
    console.log(`      ⚠️  Explicit 'any' types: ${anyInFile}`);
    explicitAny += anyInFile;
  }
  
  totalIssues += issues.length;
  console.log('');
});

console.log('💥 DESTRUCTION SUMMARY:');
console.log(`   🎯 Total files with issues: ${Object.keys(fileIssues).length}`);
console.log(`   💀 Total issues to destroy: ${totalIssues}`);
console.log(`   🗑️  Unused variables/imports: ${unusedVars}`);
console.log(`   ⚠️  Explicit 'any' types: ${explicitAny}`);

if (totalIssues > 0) {
  console.log('\n🔥 ISSUES DETECTED - INITIATING MANUAL DESTRUCTION!');
  console.log('💀 Each file needs individual attention for perfect cleanup');
  
  // Save detailed report
  const reportData = {
    timestamp: new Date().toISOString(),
    totalIssues,
    unusedVars,
    explicitAny,
    files: fileIssues
  };
  
  if (!fs.existsSync('_lint-reports')) fs.mkdirSync('_lint-reports');
  
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  fs.writeFileSync(`_lint-reports/destruction-plan-${timestamp}.json`, JSON.stringify(reportData, null, 2));
  
  console.log(`📁 Detailed destruction plan saved: _lint-reports/destruction-plan-${timestamp}.json`);
} else {
  console.log('\n✅ CODE IS ALREADY PERFECT! NO DESTRUCTION NEEDED!');
  console.log('🏆 Your codebase is LINT-FREE and BULLETPROOF!');
}

console.log('\n🔥 LINT DESTROYER ANALYSIS COMPLETE!');
