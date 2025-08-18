#!/usr/bin/env node

/**
 * Master Health Check Runner
 * Runs all available health and maintenance scripts in proper order
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 The Boise Gun Club - Master Health Check Runner');
console.log('='.repeat(60));

const scripts = [
  {
    name: 'Security Audit',
    command: 'node scripts/security-audit.js',
    description: 'Checks for vulnerabilities and sensitive files'
  },
  {
    name: 'Configuration Optimization', 
    command: 'node scripts/optimize-configs.js',
    description: 'Validates and optimizes project configurations'
  },
  {
    name: 'Build Analysis',
    command: 'node scripts/analyze-build.js', 
    description: 'Analyzes dependencies and package sizes'
  },
  {
    name: 'Performance Monitor',
    command: 'node scripts/performance-monitor.js',
    description: 'Checks animation usage and performance optimizations'
  },
  {
    name: 'Storybook Validation',
    command: 'node scripts/validate-stories.js',
    description: 'Validates Storybook file organization'
  },
  {
    name: 'FFL Data Test',
    command: 'node scripts/test-ffl-import.js',
    description: 'Tests FFL CSV import and data integrity'
  },
  {
    name: 'Icon Migration Validation',
    command: 'python3 scripts/fix_icons.py',
    description: 'Validates Heroicons migration is complete'
  }
];

const results = [];

for (const script of scripts) {
  console.log(`\n🔍 Running: ${script.name}`);
  console.log(`   ${script.description}`);
  
  try {
    const startTime = Date.now();
    execSync(script.command, { stdio: 'inherit' });
    const duration = Date.now() - startTime;
    
    results.push({
      name: script.name,
      status: 'success',
      duration,
      command: script.command
    });
    
    console.log(`   ✅ Completed in ${duration}ms`);
  } catch (error) {
    results.push({
      name: script.name,
      status: 'failed',
      error: error.message,
      command: script.command
    });
    
    console.log(`   🚨 Failed: ${error.message}`);
  }
}

// Generate summary report
console.log('\n📊 HEALTH CHECK SUMMARY');
console.log('='.repeat(40));

const passed = results.filter(r => r.status === 'success').length;
const failed = results.filter(r => r.status === 'failed').length;

console.log(`✅ Passed: ${passed}/${results.length}`);
console.log(`🚨 Failed: ${failed}/${results.length}`);

if (failed === 0) {
  console.log('\n🎉 ALL HEALTH CHECKS PASSED!');
} else {
  console.log('\n⚠️  Some checks failed - see details above');
}

// Save detailed report
const reportDir = '_reports/health-checks';
if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportPath = path.join(reportDir, `health-summary-${timestamp}.json`);

fs.writeFileSync(reportPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  summary: { passed, failed, total: results.length },
  results
}, null, 2));

console.log(`\n📋 Detailed report saved: ${reportPath}`);