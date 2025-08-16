#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Running Storybook configuration fix...\n');

const storybookDir = path.join(__dirname, '..', '.storybook');
const mainTsPath = path.join(storybookDir, 'main.ts');
const previewTsPath = path.join(storybookDir, 'preview.ts');
const previewTsxPath = path.join(storybookDir, 'preview.tsx');

// Step 1: Check for conflicting preview files
console.log('1️⃣ Checking for conflicting preview files...');
if (fs.existsSync(previewTsPath) && fs.existsSync(previewTsxPath)) {
  console.log('   ⚠️  Found both preview.ts and preview.tsx');
  console.log('   🗑️  Removing preview.ts...');
  fs.unlinkSync(previewTsPath);
  console.log('   ✅ Conflict resolved');
} else {
  console.log('   ✅ No conflicting preview files found');
}

// Step 2: Validate main.ts configuration
console.log('\n2️⃣ Validating main.ts configuration...');
if (fs.existsSync(mainTsPath)) {
  const mainContent = fs.readFileSync(mainTsPath, 'utf8');
  
  let needsUpdate = false;
  let updatedContent = mainContent;
  
  // Check framework
  if (!mainContent.includes('@storybook/nextjs-vite')) {
    console.log('   ⚠️  Framework should be @storybook/nextjs-vite');
    needsUpdate = true;
  }
  
  // Check for addon-docs
  if (!mainContent.includes('@storybook/addon-docs')) {
    console.log('   ⚠️  Missing @storybook/addon-docs');
    needsUpdate = true;
  }
  
  if (needsUpdate) {
    console.log('   🔄 Configuration needs manual review - check CLAUDE.md for proper setup');
  } else {
    console.log('   ✅ Configuration looks good');
  }
} else {
  console.log('   ❌ main.ts not found!');
}

// Step 3: Clear Storybook cache
console.log('\n3️⃣ Clearing Storybook cache...');
try {
  const cacheDir = path.join(__dirname, '..', 'node_modules', '.cache', 'storybook');
  if (fs.existsSync(cacheDir)) {
    execSync(`rm -rf "${cacheDir}"`, { stdio: 'inherit' });
    console.log('   ✅ Cache cleared');
  } else {
    console.log('   ✅ No cache to clear');
  }
} catch (error) {
  console.log('   ⚠️  Cache clearing failed:', error.message);
}

// Step 4: Verify package dependencies
console.log('\n4️⃣ Checking package.json for required dependencies...');
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const devDeps = packageJson.devDependencies || {};
  
  const requiredDeps = [
    'storybook',
    '@storybook/nextjs-vite'
  ];
  
  const missing = requiredDeps.filter(dep => !devDeps[dep]);
  
  if (missing.length > 0) {
    console.log(`   ⚠️  Missing dependencies: ${missing.join(', ')}`);
    console.log('   💡 Run: npm install --save-dev ' + missing.join(' '));
  } else {
    console.log('   ✅ All required dependencies found');
  }
}

// Step 5: Validate file organization
console.log('\n5️⃣ Validating file organization...');
const storiesDir = path.join(__dirname, '..', 'src', 'stories');
const docsDir = path.join(__dirname, '..', 'src', 'docs');

// Check for loose MDX files in stories directory
if (fs.existsSync(storiesDir)) {
  const storiesFiles = fs.readdirSync(storiesDir);
  const looseMdxFiles = storiesFiles.filter(file => 
    file.endsWith('.mdx') && !file.includes('.stories.')
  );
  
  if (looseMdxFiles.length > 0) {
    console.log('   ⚠️  Found loose MDX files in stories directory:');
    looseMdxFiles.forEach(file => {
      console.log(`       - ${file}`);
    });
    console.log('   💡 Move these to src/docs/ to prevent build breaks');
  } else {
    console.log('   ✅ No loose MDX files in stories directory');
  }
}

// Check docs directory exists
if (!fs.existsSync(docsDir)) {
  console.log('   ⚠️  Creating missing src/docs directory...');
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('   ✅ Created src/docs directory');
}

console.log('\n🎉 Storybook fix complete!');
console.log('\n💡 Next steps:');
console.log('   • Run: npm run storybook');
console.log('   • If issues persist, check CLAUDE.md for debugging steps');
console.log('   • For MDX errors, ensure files are in src/docs/ not src/stories/');
console.log('\n🔒 Safety rules:');
console.log('   • Stories (.stories.tsx) → src/stories/');
console.log('   • Documentation (.mdx) → src/docs/');
console.log('   • Never put loose MDX files in src/stories/');