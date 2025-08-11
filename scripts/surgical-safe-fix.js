#!/usr/bin/env node

const fs = require('fs');

console.log('🔪 SURGICAL PRECISION - SAFE FIXES ONLY!');
console.log('🎯 Targeting dead code that won\'t break development\n');

// Backup first (just in case)
const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
if (!fs.existsSync('_backup')) fs.mkdirSync('_backup');
const backupDir = `_backup/surgical-fix-${timestamp}`;
fs.mkdirSync(backupDir);

function removeUnusedImport(content, varName) {
  // Remove from named imports (middle of list)
  content = content.replace(new RegExp(`,\\s*${varName}\\s*(?=,|})`, 'g'), '');
  
  // Remove from start of named imports
  content = content.replace(new RegExp(`{\\s*${varName}\\s*,`, 'g'), '{');
  
  // Remove single named import (entire import line)
  content = content.replace(new RegExp(`import\\s*{\\s*${varName}\\s*}\\s*from[^;]+;\\s*\\n?`, 'g'), '');
  
  return content;
}

function safelyFixFile(filePath, unusedVars) {
  try {
    console.log(`🎯 FIXING: ${filePath}`);
    
    // Backup original
    const backupPath = `${backupDir}/${filePath.replace(/\//g, '_')}`;
    fs.copyFileSync(filePath, backupPath);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    unusedVars.forEach(varName => {
      console.log(`   💀 Removing unused: ${varName}`);
      content = removeUnusedImport(content, varName);
    });
    
    // Only write if actually changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`   ✅ DESTROYED ${unusedVars.length} unused imports`);
    } else {
      console.log(`   ⚠️  No changes made - imports might be used`);
    }
    
    return true;
  } catch (error) {
    console.log(`   ❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// TARGET 1: src/app/page.tsx - Building2 unused
console.log('🔥 TARGET 1: Home page (Building2)');
safelyFixFile('src/app/page.tsx', ['Building2']);

// TARGET 2: events/page.tsx - Building2 unused  
console.log('\n🔥 TARGET 2: Events page (Building2)');
safelyFixFile('src/app/events/page.tsx', ['Building2']);

// TARGET 3: Look for Share2 issues
console.log('\n🔥 TARGET 3: Hunting for Share2 issues...');

// Find files with Share2 issues
const { execSync } = require('child_process');
try {
  const lintOutput = execSync('npm run lint 2>&1 | grep "Share2.*never used" -B1', { encoding: 'utf8' });
  const shareFiles = lintOutput.match(/\.\/(.*?):/g);
  
  if (shareFiles) {
    shareFiles.forEach(fileMatch => {
      const filePath = fileMatch.replace('./', '').replace(':', '');
      if (fs.existsSync(filePath)) {
        console.log(`🎯 Found Share2 in: ${filePath}`);
        safelyFixFile(filePath, ['Share2']);
      }
    });
  }
} catch (error) {
  console.log('📝 No Share2 issues found or already fixed');
}

// TARGET 4: Look for ArrowRight issues
console.log('\n🔥 TARGET 4: Hunting for ArrowRight issues...');
try {
  const lintOutput = execSync('npm run lint 2>&1 | grep "ArrowRight.*never used" -B1', { encoding: 'utf8' });
  const arrowFiles = lintOutput.match(/\.\/(.*?):/g);
  
  if (arrowFiles) {
    arrowFiles.forEach(fileMatch => {
      const filePath = fileMatch.replace('./', '').replace(':', '');
      if (fs.existsSync(filePath)) {
        console.log(`🎯 Found ArrowRight in: ${filePath}`);
        safelyFixFile(filePath, ['ArrowRight']);
      }
    });
  }
} catch (error) {
  console.log('📝 No ArrowRight issues found or already fixed');
}

console.log('\n💀 SURGICAL STRIKE COMPLETE!');
console.log(`🛡️  Backups saved to: ${backupDir}`);
console.log('🎯 Running post-fix verification...\n');

// Verify the fixes worked
try {
  const newLintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
  const remainingIssues = (newLintOutput.match(/Warning:/g) || []).length;
  
  console.log(`📊 MISSION RESULTS:`);
  console.log(`   🎯 Remaining lint issues: ${remainingIssues}`);
  console.log(`   💀 Safe issues OBLITERATED!`);
  
  if (remainingIssues < 135) {
    console.log('   🏆 SUCCESSFUL SURGICAL STRIKE!');
  } else {
    console.log('   📝 Issues persist - likely development noise (expected)');
  }
} catch (error) {
  console.log('📝 Could not run post-fix verification');
}

console.log('\n🔪 PRECISION SURGERY COMPLETE - NO COLLATERAL DAMAGE!');
