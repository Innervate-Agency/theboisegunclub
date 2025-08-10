#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('⚡ TBGC Performance Monitor\n');

const metrics = [];

console.log('📊 Collecting performance metrics...\n');

// Build time measurement
console.log('🏗️ Measuring build performance...');
try {
  const start = Date.now();
  execSync('npm run build', { stdio: 'pipe' });
  const buildTime = Date.now() - start;
  metrics.push({ metric: 'Build Time', value: `${buildTime}ms`, status: 'success' });
  console.log(`   ✅ Build completed in ${buildTime}ms`);
} catch (error) {
  metrics.push({ metric: 'Build Time', value: 'Failed', status: 'failed' });
  console.log('   🚨 Build failed');
}

// Bundle size analysis
console.log('\n📦 Analyzing bundle sizes...');
try {
  if (fs.existsSync('.next')) {
    const bundleInfo = execSync('du -sh .next', { encoding: 'utf8' }).trim();
    metrics.push({ metric: 'Bundle Size', value: bundleInfo.split('\t')[0], status: 'success' });
    console.log(`   ✅ Bundle size: ${bundleInfo.split('\t')[0]}`);
  }
} catch (error) {
  metrics.push({ metric: 'Bundle Size', value: 'Unknown', status: 'failed' });
  console.log('   🚨 Could not measure bundle size');
}

// Node modules size
console.log('\n📂 Measuring node_modules size...');
try {
  const nodeModulesSize = execSync('du -sh node_modules', { encoding: 'utf8' }).trim();
  metrics.push({ metric: 'Dependencies Size', value: nodeModulesSize.split('\t')[0], status: 'info' });
  console.log(`   📦 Dependencies: ${nodeModulesSize.split('\t')[0]}`);
} catch (error) {
  console.log('   ⚠️  Could not measure node_modules size');
}

// TypeScript check performance
console.log('\n🔍 TypeScript compilation check...');
try {
  const start = Date.now();
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  const tscTime = Date.now() - start;
  metrics.push({ metric: 'TypeScript Check', value: `${tscTime}ms`, status: 'success' });
  console.log(`   ✅ TypeScript check: ${tscTime}ms`);
} catch (error) {
  console.log('   🚨 TypeScript errors found');
  metrics.push({ metric: 'TypeScript Check', value: 'Has errors', status: 'warning' });
}

// Summary
console.log('\n📋 Performance Summary:');
metrics.forEach(m => {
  const icon = m.status === 'success' ? '✅' : m.status === 'warning' ? '⚠️' : m.status === 'failed' ? '🚨' : '📊';
  console.log(`   ${icon} ${m.metric}: ${m.value}`);
});

// Save metrics
const timestamp = new Date().toISOString();
const report = { timestamp, metrics };
if (!fs.existsSync('_reports')) fs.mkdirSync('_reports');
fs.writeFileSync('_reports/performance-latest.json', JSON.stringify(report, null, 2));

console.log('\n⚡ Performance monitoring complete!');
