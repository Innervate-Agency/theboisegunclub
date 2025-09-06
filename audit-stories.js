#!/usr/bin/env node
/**
 * STORYBOOK DESIGN TOKEN AUDIT TOOL - Comprehensive Analysis
 */

const fs = require('fs');
const path = require('path');

// Design System Constants
const BOISE_COLOR_TOKENS = [
  'color-dark-chocolate', 'color-rusty-orange', 'color-crisp-off-white',
  'color-rich-loam', 'color-warm-stone', 'color-lodgepole-green'
];

const SHADOW_TOKENS = [
  'shadow-whisper', 'shadow-present', 'shadow-elevated', 
  'shadow-prominent', 'shadow-commanding', 'shadow-hero'
];

// Violation patterns
const PATTERNS = {
  hardcodedColors: [
    /#[0-9a-fA-F]{3,6}/g,
    /rgb\s*\([^)]+\)/g,
    /rgba\s*\([^)]+\)/g
  ],
  hardcodedSpacing: [/\b\d+px\b/g],
  inlineStyles: [/style\s*=\s*{[^}]+}/g]
};

function analyzeStoryFile(filePath, content) {
  const violations = {
    hardcodedColors: [],
    incorrectSpacing: [],
    themeViolations: []
  };

  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Check hardcoded colors
    PATTERNS.hardcodedColors.forEach(pattern => {
      const matches = line.match(pattern);
      if (matches) {
        violations.hardcodedColors.push({
          line: index + 1,
          violation: matches[0],
          text: line.trim()
        });
      }
    });

    // Check hardcoded spacing
    if (PATTERNS.hardcodedSpacing[0].test(line)) {
      violations.incorrectSpacing.push({
        line: index + 1,
        violation: line.match(PATTERNS.hardcodedSpacing[0])[0],
        text: line.trim()
      });
    }

    // Check inline styles
    if (PATTERNS.inlineStyles[0].test(line)) {
      violations.themeViolations.push({
        line: index + 1,
        violation: 'inline styles',
        text: line.trim()
      });
    }
  });

  return violations;
}

// Main audit
console.log('🔍 Starting Storybook audit...');

const storiesDir = 'src/stories';
const results = { totalStories: 0, violations: [] };

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.stories.tsx')) {
      results.totalStories++;
      
      const content = fs.readFileSync(filePath, 'utf-8');
      const violations = analyzeStoryFile(filePath, content);
      
      const violationCount = Object.values(violations).reduce((sum, arr) => sum + arr.length, 0);
      
      if (violationCount > 0) {
        results.violations.push({
          file: filePath.replace('src/stories/', ''),
          violations,
          violationCount
        });
      }
    }
  });
}

walkDirectory(storiesDir);

// Sort by violation count
results.violations.sort((a, b) => b.violationCount - a.violationCount);

// Output results
console.log(`\n✅ Audit Complete!`);
console.log(`📁 Total Stories: ${results.totalStories}`);
console.log(`🚨 Stories with violations: ${results.violations.length}`);

if (results.violations.length > 0) {
  console.log(`\n🔥 Top 10 most problematic stories:`);
  results.violations.slice(0, 10).forEach((story, index) => {
    console.log(`${index + 1}. ${story.file} (${story.violationCount} violations)`);
  });
}

// Write summary
fs.writeFileSync('audit-summary.json', JSON.stringify(results, null, 2));
console.log(`\n📂 Detailed results written to: audit-summary.json`);
