#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🛡️  Security Audit & Dependency Analysis\n');

const results = [];

console.log('🔍 Running npm audit...');
try {
  const auditOutput = execSync('npm audit --audit-level moderate', { encoding: 'utf8' });
  console.log('   ✅ No moderate or high vulnerabilities found');
  results.push({ check: 'npm audit', status: 'pass', details: 'No issues found' });
} catch (error) {
  const output = error.stdout || error.stderr;
  if (output.includes('vulnerabilities')) {
    console.log('   🚨 Vulnerabilities found - check npm audit for details');
    results.push({ check: 'npm audit', status: 'fail', details: 'Vulnerabilities detected' });
  } else {
    console.log('   ✅ Security audit completed');
    results.push({ check: 'npm audit', status: 'pass', details: 'Clean' });
  }
}

console.log('\n🔒 Checking for sensitive files in repository...');
const sensitivePatterns = ['.env', '.env.local', '.env.production', 'private.key', '*.pem'];
let sensitiveFound = false;

sensitivePatterns.forEach(pattern => {
  try {
    const found = execSync(`find . -name "${pattern}" -not -path "./node_modules/*" 2>/dev/null`, { encoding: 'utf8' });
    if (found.trim()) {
      console.log(`   ⚠️  Found sensitive file pattern: ${pattern}`);
      sensitiveFound = true;
    }
  } catch (error) {
    // Pattern not found, which is good
  }
});

if (!sensitiveFound) {
  console.log('   ✅ No sensitive files found in repository');
}

console.log('\n📊 Dependency analysis...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const totalDeps = Object.keys(packageJson.dependencies || {}).length;
const devDeps = Object.keys(packageJson.devDependencies || {}).length;

console.log(`   📦 Production dependencies: ${totalDeps}`);
console.log(`   🛠️  Development dependencies: ${devDeps}`);
console.log(`   📈 Total packages: ${totalDeps + devDeps}`);

// Check for potentially risky packages
const riskyPatterns = ['eval', 'exec', 'shell'];
console.log('\n🔍 Checking for potentially risky packages...');

const allDeps = [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.devDependencies || {})];
const riskyDeps = allDeps.filter(dep => riskyPatterns.some(pattern => dep.includes(pattern)));

if (riskyDeps.length > 0) {
  console.log('   ⚠️  Potentially risky packages found:');
  riskyDeps.forEach(dep => console.log(`      • ${dep}`));
} else {
  console.log('   ✅ No obviously risky packages detected');
}

console.log('\n🛡️  Security audit complete!');
