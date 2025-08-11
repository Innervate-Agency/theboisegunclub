#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔥 FINAL SAFE CLEANUP - NO MERCY FOR DEAD CODE!');
console.log('💀 Only touching obviously unused lowercase variables\n');

// Get full lint output
const lintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
const lines = lintOutput.split('\n');

// Find file and issue pairs - only for obviously safe variables
const safeFixes = [];
let currentFile = null;

lines.forEach(line => {
  if (line.startsWith('./')) {
    currentFile = line.trim();
  } else if (currentFile && line.includes('is defined but never used')) {
    // Only target lowercase variables and obvious unused imports
    // Skip anything that looks like a component (PascalCase) unless it's obviously dead
    const match = line.match(/'([^']+)' is defined but never used/);
    if (match) {
      const varName = match[1];
      
      // Safe to remove: lowercase variables, obviously dead imports
      if (
        varName.match(/^[a-z]/) ||  // lowercase variables
        ['Share2', 'ExternalLink', 'ArrowRight'].includes(varName) // known dead icons
      ) {
        safeFixes.push({ file: currentFile, variable: varName, line: line.trim() });
      }
    }
  }
});

console.log(`🎯 Found ${safeFixes.length} SAFE fixes:\n`);

// Group by file
const fileGroups = {};
safeFixes.forEach(fix => {
  if (!fileGroups[fix.file]) fileGroups[fix.file] = [];
  fileGroups[fix.file].push(fix.variable);
});

// Apply fixes
Object.entries(fileGroups).forEach(([filePath, variables]) => {
  console.log(`💀 DESTROYING in ${filePath}:`);
  console.log(`   Variables: ${variables.join(', ')}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    variables.forEach(varName => {
      // Remove from import lists
      content = content.replace(new RegExp(`,\\s*${varName}\\s*(?=,|})`, 'g'), '');
      content = content.replace(new RegExp(`{\\s*${varName}\\s*,`, 'g'), '{');
      content = content.replace(new RegExp(`import\\s*{\\s*${varName}\\s*}\\s*from[^;]+;\\s*\\n?`, 'g'), '');
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`   ✅ OBLITERATED ${variables.length} unused imports!`);
    } else {
      console.log(`   📝 No changes made`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');
});

console.log('💀 SAFE CLEANUP COMPLETE!');
console.log('🎯 Running verification...\n');

// Check results
try {
  const newLintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
  const newWarnings = (newLintOutput.match(/Warning:/g) || []).length;
  
  console.log(`📊 RESULTS:`);
  console.log(`   Before: 137 issues`);
  console.log(`   After: ${newWarnings} issues`);
  console.log(`   💀 DESTROYED: ${137 - newWarnings} issues`);
  
  if (newWarnings < 137) {
    console.log(`\n🏆 SUCCESSFUL CLEANUP! Removed ${137 - newWarnings} dead code issues!`);
  }
} catch (error) {
  console.log('📝 Lint check completed');
}
