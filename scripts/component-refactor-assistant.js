#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 COMPONENT REFACTORING ASSISTANT');
console.log('🎯 Identifying components that need attention\n');

const refactorPlan = {
  timestamp: new Date().toISOString(),
  highPriority: [],
  mediumPriority: [],
  lowPriority: [],
  recommendations: []
};

// Find all components and analyze for refactoring opportunities
function analyzeForRefactoring(dir, components = []) {
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.')) {
        analyzeForRefactoring(fullPath, components);
      } else if (item.endsWith('.tsx')) {
        components.push(fullPath);
      }
    });
  } catch (error) {
    // Skip directories we can't read
  }
  return components;
}

const components = analyzeForRefactoring('src/components');

console.log('🔍 COMPONENT REFACTORING ANALYSIS\n');

components.forEach(componentPath => {
  const content = fs.readFileSync(componentPath, 'utf8');
  const lines = content.split('\n');
  const lineCount = lines.length;
  
  const analysis = {
    path: componentPath,
    name: path.basename(componentPath, '.tsx'),
    lines: lineCount,
    issues: [],
    refactorSuggestions: []
  };

  // Priority scoring based on multiple factors
  let priorityScore = 0;
  
  // Size-based priority
  if (lineCount > 300) {
    priorityScore += 3;
    analysis.issues.push('Very large component (>300 lines)');
    analysis.refactorSuggestions.push('Break into multiple smaller components');
  } else if (lineCount > 200) {
    priorityScore += 2;
    analysis.issues.push('Large component (>200 lines)');
    analysis.refactorSuggestions.push('Consider extracting sub-components');
  } else if (lineCount > 100) {
    priorityScore += 1;
    analysis.issues.push('Medium-large component (>100 lines)');
  }

  // Complexity indicators
  const complexityIndicators = [
    { pattern: /useState\(/g, weight: 0.1, name: 'useState hooks' },
    { pattern: /useEffect\(/g, weight: 0.2, name: 'useEffect hooks' },
    { pattern: /if\s*\(/g, weight: 0.05, name: 'conditional statements' },
    { pattern: /\?\s*:/g, weight: 0.05, name: 'ternary operators' },
    { pattern: /map\(/g, weight: 0.1, name: 'array mapping' },
    { pattern: /\.filter\(/g, weight: 0.1, name: 'array filtering' }
  ];

  complexityIndicators.forEach(indicator => {
    const matches = content.match(indicator.pattern);
    if (matches && matches.length > 5) {
      priorityScore += indicator.weight * matches.length;
      analysis.issues.push(`High usage of ${indicator.name} (${matches.length} occurrences)`);
    }
  });

  // Missing best practices
  if (!content.includes('Props') && lineCount > 50) {
    priorityScore += 0.5;
    analysis.issues.push('Missing TypeScript Props interface');
    analysis.refactorSuggestions.push('Add Props interface for type safety');
  }

  if (!content.includes('forwardRef') && content.includes('ref') && lineCount > 30) {
    priorityScore += 0.3;
    analysis.issues.push('Uses ref but not forwardRef');
    analysis.refactorSuggestions.push('Consider using forwardRef for better composability');
  }

  // Code smells
  if (content.includes('// TODO') || content.includes('// FIXME')) {
    priorityScore += 0.5;
    analysis.issues.push('Contains TODO/FIXME comments');
  }

  if (content.match(/console\.(log|warn|error)/g)) {
    priorityScore += 0.2;
    analysis.issues.push('Contains console statements');
    analysis.refactorSuggestions.push('Remove console statements for production');
  }

  // Determine priority level
  if (priorityScore >= 3 || lineCount > 250) {
    analysis.priority = 'HIGH';
    refactorPlan.highPriority.push(analysis);
  } else if (priorityScore >= 1.5 || lineCount > 150) {
    analysis.priority = 'MEDIUM';
    refactorPlan.mediumPriority.push(analysis);
  } else if (priorityScore > 0.5 || lineCount > 75) {
    analysis.priority = 'LOW';
    refactorPlan.lowPriority.push(analysis);
  }
});

// Sort by line count (largest first)
refactorPlan.highPriority.sort((a, b) => b.lines - a.lines);
refactorPlan.mediumPriority.sort((a, b) => b.lines - a.lines);

console.log('📊 REFACTORING PRIORITIES:\n');

// Report High Priority
if (refactorPlan.highPriority.length > 0) {
  console.log(`🚨 HIGH PRIORITY (${refactorPlan.highPriority.length} components):`);
  refactorPlan.highPriority.slice(0, 5).forEach((comp, index) => {
    console.log(`   ${index + 1}. ${comp.name} (${comp.lines} lines)`);
    console.log(`      📁 ${comp.path}`);
    if (comp.issues.length > 0) {
      console.log(`      ⚠️  Issues: ${comp.issues.slice(0, 2).join(', ')}`);
    }
    console.log('');
  });
}

// Report Medium Priority  
if (refactorPlan.mediumPriority.length > 0) {
  console.log(`⚠️ MEDIUM PRIORITY (${refactorPlan.mediumPriority.length} components):`);
  refactorPlan.mediumPriority.slice(0, 3).forEach((comp, index) => {
    console.log(`   ${index + 1}. ${comp.name} (${comp.lines} lines) - ${comp.path}`);
  });
  console.log('');
}

// Overall recommendations
const totalComponents = components.length;
const needsRefactoring = refactorPlan.highPriority.length + refactorPlan.mediumPriority.length;

console.log('🎯 REFACTORING STRATEGY:\n');

if (refactorPlan.highPriority.length > 0) {
  console.log(`1. 🚨 Focus on ${refactorPlan.highPriority.length} high-priority components first`);
  console.log(`   • Start with largest: ${refactorPlan.highPriority[0].name} (${refactorPlan.highPriority[0].lines} lines)`);
}

if (refactorPlan.mediumPriority.length > 0) {
  console.log(`2. ⚠️  Address ${refactorPlan.mediumPriority.length} medium-priority components next`);
}

console.log(`3. ✅ ${totalComponents - needsRefactoring} components are in good shape`);

// Generate refactoring recommendations
const recommendations = [
  'Break large components into smaller, focused sub-components',
  'Extract custom hooks for complex state logic',
  'Add TypeScript Props interfaces where missing',
  'Use forwardRef for reusable UI components',
  'Remove console statements and TODO comments',
  'Consider using compound component patterns for complex UIs'
];

console.log('\n💡 REFACTORING RECOMMENDATIONS:');
recommendations.forEach((rec, index) => {
  console.log(`   ${index + 1}. ${rec}`);
});

// Save detailed plan
const reportDir = '_audit-reports';
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
fs.writeFileSync(`${reportDir}/refactoring-plan-${timestamp}.json`, JSON.stringify(refactorPlan, null, 2));

console.log(`\n📁 Detailed refactoring plan: ${reportDir}/refactoring-plan-${timestamp}.json`);

// Summary score
const refactoringProgress = ((totalComponents - needsRefactoring) / totalComponents * 100).toFixed(1);
console.log(`\n📊 REFACTORING STATUS: ${refactoringProgress}% of components are optimally sized`);

if (refactorPlan.highPriority.length === 0) {
  console.log('🎉 No high-priority refactoring needed!');
} else {
  console.log(`🔧 ${refactorPlan.highPriority.length} components need immediate attention`);
}
