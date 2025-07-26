#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Storybook file organization...\n');

const srcDir = path.join(__dirname, '..', 'src');
const storiesDir = path.join(srcDir, 'stories');
const docsDir = path.join(srcDir, 'docs');

let hasErrors = false;

// Check 1: No loose MDX files in stories directory
console.log('1️⃣ Checking for loose MDX files in stories directory...');
if (fs.existsSync(storiesDir)) {
  const files = fs.readdirSync(storiesDir, { recursive: true })
    .filter(file => typeof file === 'string')
    .filter(file => file.endsWith('.mdx') && !file.includes('.stories.'));
  
  if (files.length > 0) {
    console.log('   ❌ FOUND LOOSE MDX FILES:');
    files.forEach(file => {
      console.log(`      - ${file}`);
    });
    console.log('   💡 SOLUTION: Move these files to src/docs/');
    hasErrors = true;
  } else {
    console.log('   ✅ No loose MDX files found');
  }
} else {
  console.log('   ⚠️  Stories directory not found');
}

// Check 2: All story files follow naming convention
console.log('\n2️⃣ Checking story file naming conventions...');
if (fs.existsSync(storiesDir)) {
  const allFiles = fs.readdirSync(storiesDir, { recursive: true })
    .filter(file => typeof file === 'string')
    .filter(file => file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx'));
  
  const invalidStoryFiles = allFiles.filter(file => 
    !file.includes('.stories.') && 
    !file.includes('README.md') &&
    !file.includes('.css') &&
    !file.startsWith('assets/')
  );
  
  if (invalidStoryFiles.length > 0) {
    console.log('   ⚠️  Files without .stories suffix:');
    invalidStoryFiles.forEach(file => {
      console.log(`      - ${file} (should be ${file.replace(/\.(ts|tsx|js|jsx)$/, '.stories.$1')}`);
    });
    console.log('   💡 These might break if they contain exports Storybook tries to load');
  } else {
    console.log('   ✅ All TypeScript/JavaScript files follow .stories.* convention');
  }
}

// Check 3: Documentation directory structure
console.log('\n3️⃣ Checking documentation directory...');
if (fs.existsSync(docsDir)) {
  const docFiles = fs.readdirSync(docsDir).filter(file => file.endsWith('.mdx'));
  console.log(`   ✅ Found ${docFiles.length} documentation files:`);
  docFiles.forEach(file => {
    console.log(`      - ${file}`);
  });
} else {
  console.log('   ⚠️  Documentation directory not found - creating...');
  fs.mkdirSync(docsDir, { recursive: true });
  console.log('   ✅ Created src/docs directory');
}

// Check 4: Validate main.ts configuration
console.log('\n4️⃣ Checking Storybook configuration...');
const mainTsPath = path.join(__dirname, '..', '.storybook', 'main.ts');
if (fs.existsSync(mainTsPath)) {
  const content = fs.readFileSync(mainTsPath, 'utf8');
  
  // Check for dangerous wildcard patterns
  if (content.includes('../src/**/*.mdx') && !content.includes('../src/docs/*.mdx')) {
    console.log('   ❌ DANGEROUS CONFIG: Loading all MDX files with wildcard');
    console.log('   💡 SOLUTION: Replace with specific paths like ../src/docs/*.mdx');
    hasErrors = true;
  } else {
    console.log('   ✅ Configuration safely targets specific directories');
  }
} else {
  console.log('   ❌ main.ts not found');
  hasErrors = true;
}

// Final verdict
console.log('\n' + '='.repeat(60));
if (hasErrors) {
  console.log('❌ VALIDATION FAILED - Fix errors above before running Storybook');
  console.log('\n🔧 Quick fixes:');
  console.log('   • Run: npm run storybook:fix');
  console.log('   • Move loose MDX files from src/stories/ to src/docs/');
  console.log('   • Ensure main.ts uses safe, specific file patterns');
  process.exit(1);
} else {
  console.log('✅ VALIDATION PASSED - Storybook configuration is safe');
  console.log('\n🎉 You can safely run: npm run storybook');
}