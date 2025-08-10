#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 TBGC Build Analysis\n');

const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
const reportDir = `_reports/${timestamp}`;

// Create reports directory
if (!fs.existsSync('_reports')) {
  fs.mkdirSync('_reports');
}
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const checks = [
  {
    name: 'Dependency Analysis',
    command: 'npm audit --audit-level moderate',
    description: 'Checking for security vulnerabilities',
    outputFile: 'security-audit.txt'
  },
  {
    name: 'Package Size Analysis', 
    command: 'du -sh node_modules/* 2>/dev/null | sort -hr | head -20',
    description: 'Analyzing largest packages',
    outputFile: 'package-sizes.txt'
  }
];

const results = [];

console.log(`📁 Report directory: ${reportDir}\n`);

for (const check of checks) {
  console.log(`🔍 ${check.name}...`);
  console.log(`   ${check.description}`);
  
  try {
    const startTime = Date.now();
    const output = execSync(check.command, { 
      encoding: 'utf8',
      timeout: 60000,
      stdio: ['pipe', 'pipe', 'pipe']
    });
    const duration = Date.now() - startTime;
    
    fs.writeFileSync(path.join(reportDir, check.outputFile), output);
    
    console.log(`   ✅ ${check.name} completed (${duration}ms)`);
    results.push({
      name: check.name,
      status: 'success',
      duration,
      outputFile: check.outputFile
    });
  } catch (error) {
    const errorOutput = error.stdout || error.stderr || error.message;
    fs.writeFileSync(path.join(reportDir, check.outputFile), errorOutput);
    
    console.log(`   🚨 ${check.name} failed`);
    results.push({
      name: check.name,
      status: 'failed',
      error: errorOutput.slice(0, 200) + '...',
      outputFile: check.outputFile
    });
  }
  console.log('');
}

// Generate summary report
const summary = {
  timestamp,
  totalChecks: checks.length,
  passed: results.filter(r => r.status === 'success').length,
  failed: results.filter(r => r.status === 'failed').length,
  results
};

fs.writeFileSync(path.join(reportDir, 'summary.json'), JSON.stringify(summary, null, 2));

console.log('📋 Analysis Summary:');
console.log(`   ✅ Passed: ${summary.passed}/${summary.totalChecks}`);
console.log(`   🚨 Failed: ${summary.failed}/${summary.totalChecks}`);
console.log(`   📁 Full report: ${reportDir}/`);
console.log('\n📊 Analysis complete!');
