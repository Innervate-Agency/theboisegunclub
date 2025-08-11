#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧬 COMPONENT DEEP-DIVE ANALYZER');
console.log('🔬 Surgical precision analysis of every component\n');

const analysis = {
  timestamp: new Date().toISOString(),
  components: [],
  patterns: {},
  recommendations: [],
  quality_metrics: {}
};

// Find all components
function findAllComponents(dir, components = []) {
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.')) {
        findAllComponents(fullPath, components);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        components.push(fullPath);
      }
    });
  } catch (error) {
    console.log(`   ⚠️  Could not read: ${dir}`);
  }
  return components;
}

const allComponents = findAllComponents('src/components');
console.log(`🧬 Found ${allComponents.length} components for deep analysis\n`);

// Pattern tracking
const patterns = {
  propsInterfaces: 0,
  forwardRefs: 0,
  hooks: 0,
  exports: 0,
  defaultExports: 0,
  namedExports: 0,
  typeScriptComponents: 0,
  functionalComponents: 0,
  complexComponents: 0, // >100 lines
  simpleComponents: 0,  // <50 lines
  mediumComponents: 0   // 50-100 lines
};

console.log('🔍 DEEP COMPONENT ANALYSIS:\n');

allComponents.forEach((componentPath, index) => {
  if (index > 0 && index % 20 === 0) {
    console.log(`   📊 Progress: ${index}/${allComponents.length} components analyzed\n`);
  }

  const content = fs.readFileSync(componentPath, 'utf8');
  const lines = content.split('\n');
  
  const componentAnalysis = {
    path: componentPath,
    name: path.basename(componentPath, '.tsx'),
    lines: lines.length,
    patterns: {},
    quality: {},
    issues: [],
    recommendations: []
  };

  // Pattern Analysis
  componentAnalysis.patterns = {
    hasPropsInterface: content.includes('Props') && content.includes('interface'),
    usesForwardRef: content.includes('forwardRef'),
    hooksUsed: (content.match(/use[A-Z]\w+/g) || []).length,
    hasDefaultExport: content.includes('export default'),
    hasNamedExports: content.includes('export const') || content.includes('export function'),
    isTypeScript: componentPath.endsWith('.tsx'),
    isFunctional: content.includes('const ') && content.includes('=>') || content.includes('function'),
    hasJSXReturn: content.includes('return (') || content.includes('return <'),
    importsCount: (content.match(/^import/gm) || []).length
  };

  // Quality Metrics
  componentAnalysis.quality = {
    complexity: lines.length > 100 ? 'complex' : lines.length > 50 ? 'medium' : 'simple',
    typesSafety: componentAnalysis.patterns.hasPropsInterface ? 'excellent' : 'good',
    accessibility: content.includes('aria-') || content.includes('role=') ? 'good' : 'check',
    performance: content.includes('useMemo') || content.includes('useCallback') ? 'optimized' : 'standard',
    testing: content.includes('test') || content.includes('spec') ? 'tested' : 'needs_tests'
  };

  // Issue Detection
  if (!componentAnalysis.patterns.hasPropsInterface && lines.length > 20) {
    componentAnalysis.issues.push('Consider adding Props interface for type safety');
  }
  
  if (lines.length > 200) {
    componentAnalysis.issues.push('Component is very large - consider breaking down');
  }
  
  if (content.includes('any') && !content.includes('// eslint-disable')) {
    componentAnalysis.issues.push('Uses "any" type - consider more specific typing');
  }

  // Update global patterns
  if (componentAnalysis.patterns.hasPropsInterface) patterns.propsInterfaces++;
  if (componentAnalysis.patterns.usesForwardRef) patterns.forwardRefs++;
  if (componentAnalysis.patterns.hasDefaultExport) patterns.defaultExports++;
  if (componentAnalysis.patterns.hasNamedExports) patterns.namedExports++;
  if (componentAnalysis.patterns.isTypeScript) patterns.typeScriptComponents++;
  if (componentAnalysis.patterns.isFunctional) patterns.functionalComponents++;
  
  patterns.hooks += componentAnalysis.patterns.hooksUsed;
  
  switch (componentAnalysis.quality.complexity) {
    case 'complex': patterns.complexComponents++; break;
    case 'medium': patterns.mediumComponents++; break;
    case 'simple': patterns.simpleComponents++; break;
  }

  analysis.components.push(componentAnalysis);
});

analysis.patterns = patterns;

// Quality Assessment
const qualityMetrics = {
  typeScriptAdoption: (patterns.typeScriptComponents / allComponents.length * 100).toFixed(1),
  propsInterfaceUsage: (patterns.propsInterfaces / allComponents.length * 100).toFixed(1),
  forwardRefUsage: (patterns.forwardRefs / allComponents.length * 100).toFixed(1),
  averageComplexity: patterns.simpleComponents > patterns.complexComponents ? 'Low' : 
                     patterns.mediumComponents > patterns.complexComponents ? 'Medium' : 'High',
  componentDistribution: {
    simple: patterns.simpleComponents,
    medium: patterns.mediumComponents,
    complex: patterns.complexComponents
  }
};

analysis.quality_metrics = qualityMetrics;

// Generate Recommendations
const recommendations = [];

if (patterns.propsInterfaces < allComponents.length * 0.8) {
  recommendations.push('Consider adding Props interfaces to more components for better type safety');
}

if (patterns.complexComponents > allComponents.length * 0.2) {
  recommendations.push('Consider breaking down complex components (>100 lines) into smaller pieces');
}

if (patterns.forwardRefs < allComponents.length * 0.3) {
  recommendations.push('Consider using forwardRef for more UI components to improve composability');
}

analysis.recommendations = recommendations;

// Save detailed analysis
const reportDir = '_audit-reports';
if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);

const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
fs.writeFileSync(`${reportDir}/component-deep-dive-${timestamp}.json`, JSON.stringify(analysis, null, 2));

// Console Report
console.log('\n🧬 COMPONENT DEEP-DIVE COMPLETE!\n');

console.log('📊 COMPONENT ARCHITECTURE ANALYSIS:');
console.log(`   🧩 Total Components: ${allComponents.length}`);
console.log(`   📝 TypeScript Usage: ${qualityMetrics.typeScriptAdoption}%`);
console.log(`   🔧 Props Interfaces: ${qualityMetrics.propsInterfaceUsage}%`);
console.log(`   📎 ForwardRef Usage: ${qualityMetrics.forwardRefUsage}%`);
console.log(`   ⚡ Hooks Used: ${patterns.hooks} total`);

console.log('\n📏 COMPLEXITY DISTRIBUTION:');
console.log(`   🟢 Simple (<50 lines): ${patterns.simpleComponents}`);
console.log(`   🟡 Medium (50-100 lines): ${patterns.mediumComponents}`);
console.log(`   🟠 Complex (>100 lines): ${patterns.complexComponents}`);

console.log('\n📋 EXPORT PATTERNS:');
console.log(`   📤 Default Exports: ${patterns.defaultExports}`);
console.log(`   📤 Named Exports: ${patterns.namedExports}`);

if (recommendations.length > 0) {
  console.log('\n💡 RECOMMENDATIONS:');
  recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });
} else {
  console.log('\n✅ COMPONENT ARCHITECTURE: EXCELLENT!');
}

console.log(`\n📁 Detailed analysis: ${reportDir}/component-deep-dive-${timestamp}.json`);

// Quality Score
const qualityScore = (
  (parseFloat(qualityMetrics.typeScriptAdoption) * 0.3) +
  (parseFloat(qualityMetrics.propsInterfaceUsage) * 0.3) +
  (parseFloat(qualityMetrics.forwardRefUsage) * 0.2) +
  (patterns.complexComponents < allComponents.length * 0.2 ? 20 : 10)
) / 100 * 100;

console.log(`\n🏆 COMPONENT QUALITY SCORE: ${qualityScore.toFixed(1)}/100`);

if (qualityScore > 90) {
  console.log('💪 🏆 COMPONENT ARCHITECTURE: WORLD-CLASS! 🏆 💪');
} else if (qualityScore > 80) {
  console.log('🎯 COMPONENT ARCHITECTURE: EXCELLENT!');
} else if (qualityScore > 70) {
  console.log('✅ COMPONENT ARCHITECTURE: VERY GOOD!');
} else {
  console.log('🔧 COMPONENT ARCHITECTURE: Room for improvement');
}
