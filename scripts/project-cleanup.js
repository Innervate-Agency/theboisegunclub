#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Project Cleanup & Optimization Suite\n');

const cleanupActions = [];

console.log('🔍 Scanning for cleanup opportunities...\n');

// 1. Check for unnecessary files
console.log('📁 Checking for unnecessary files...');

const unnecessaryFiles = [
  'package-lock.json.bak',
  'yarn.lock',
  '.DS_Store',
  'Thumbs.db',
  '*.log',
  '.env.example',
  'tsconfig.json.bak'
];

unnecessaryFiles.forEach(pattern => {
  try {
    const found = execSync(`find . -name "${pattern}" -not -path "./node_modules/*" 2>/dev/null`, { encoding: 'utf8' });
    if (found.trim()) {
      console.log(`   🗑️  Found unnecessary file: ${pattern}`);
      cleanupActions.push(`Remove ${pattern}`);
    }
  } catch (error) {
    // File not found, which is good
  }
});

// 2. Check for empty directories
console.log('\n📂 Checking for empty directories...');

try {
  const emptyDirs = execSync(`find src -type d -empty 2>/dev/null`, { encoding: 'utf8' });
  if (emptyDirs.trim()) {
    console.log('   📂 Empty directories found:');
    emptyDirs.trim().split('\n').forEach(dir => {
      console.log(`      • ${dir}`);
    });
    cleanupActions.push('Remove empty directories');
  } else {
    console.log('   ✅ No empty directories found');
  }
} catch (error) {
  console.log('   📝 Could not scan directories');
}

// 3. Check for duplicate dependencies in package.json
console.log('\n📦 Checking for potential dependency optimizations...');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const deps = Object.keys(packageJson.dependencies || {});
const devDeps = Object.keys(packageJson.devDependencies || {});

// Check for deps in both prod and dev
const duplicates = deps.filter(dep => devDeps.includes(dep));
if (duplicates.length > 0) {
  console.log('   ⚠️  Dependencies in both prod and dev:');
  duplicates.forEach(dep => console.log(`      • ${dep}`));
  cleanupActions.push('Review duplicate dependencies');
} else {
  console.log('   ✅ No duplicate dependencies found');
}

// 4. Check for unused Storybook addons
console.log('\n📚 Checking Storybook configuration...');

if (fs.existsSync('.storybook/main.ts')) {
  const storybookConfig = fs.readFileSync('.storybook/main.ts', 'utf8');
  
  // Check for commented out addons
  if (storybookConfig.includes('//')) {
    console.log('   📝 Commented code found in Storybook config');
    cleanupActions.push('Clean up commented Storybook config');
  }
  
  console.log('   ✅ Storybook configuration looks clean');
} else {
  console.log('   📝 No Storybook main.ts found');
}

// 5. Check git status for uncommitted changes
console.log('\n🔄 Checking git status...');

try {
  const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
  if (gitStatus.trim()) {
    const changes = gitStatus.trim().split('\n').length;
    console.log(`   📝 ${changes} uncommitted changes detected`);
    console.log('   💡 Consider committing changes before major refactoring');
  } else {
    console.log('   ✅ Working directory clean');
  }
} catch (error) {
  console.log('   📝 Not a git repository or git not available');
}

// 6. Generate cleanup script
const cleanupScript = `#!/bin/bash

echo "🧹 Running automated project cleanup..."

# Clean npm cache
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Remove node_modules and reinstall (optional)
read -p "🔄 Reinstall node_modules? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf node_modules package-lock.json
    npm install
fi

# Clean Next.js cache
echo "🧹 Cleaning Next.js cache..."
rm -rf .next

# Clean Storybook cache
echo "🧹 Cleaning Storybook cache..."
rm -rf node_modules/.cache/storybook
rm -rf storybook-static

echo "✅ Cleanup complete!"
`;

if (!fs.existsSync('_reports')) fs.mkdirSync('_reports');
fs.writeFileSync('_reports/cleanup-script.sh', cleanupScript);
execSync('chmod +x _reports/cleanup-script.sh');

// Summary
console.log('\n📊 Cleanup Analysis Summary:');
console.log(`   🔧 Cleanup actions identified: ${cleanupActions.length}`);
console.log(`   📁 Generated cleanup script: _reports/cleanup-script.sh`);

if (cleanupActions.length > 0) {
  console.log('\n📝 Recommended actions:');
  cleanupActions.forEach((action, index) => {
    console.log(`   ${index + 1}. ${action}`);
  });
} else {
  console.log('\n🎉 Project is already well-maintained!');
}

console.log('\n✅ Project cleanup analysis complete!');
console.log('💡 Run ./_reports/cleanup-script.sh for automated cleanup');
