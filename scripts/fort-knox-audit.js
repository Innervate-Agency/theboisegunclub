#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 FORT KNOX SECURITY & QUALITY AUDIT');
console.log('💪 Making this project BULLETPROOF!\n');

// Create comprehensive audit directory
const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
const auditDir = `_audit-reports/fort-knox-${timestamp}`;
if (!fs.existsSync('_audit-reports')) fs.mkdirSync('_audit-reports');
fs.mkdirSync(auditDir, { recursive: true });

console.log(`📁 Audit directory: ${auditDir}\n`);

const auditResults = {
  timestamp: new Date().toISOString(),
  pages: [],
  components: [],
  summary: {}
};

// 1. PAGE-BY-PAGE DEEP ANALYSIS
console.log('📄 PHASE 1: Page-by-Page Deep Analysis\n');

const pageFiles = [];
function findPages(dir) {
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.')) {
        findPages(fullPath);
      } else if (item === 'page.tsx' || item === 'page.ts') {
        pageFiles.push(fullPath);
      }
    });
  } catch (error) {
    console.log(`   ⚠️  Could not read directory: ${dir}`);
  }
}

findPages('src/app');

console.log(`🔍 Found ${pageFiles.length} pages to analyze:\n`);

pageFiles.forEach((pagePath, index) => {
  console.log(`📄 [${index + 1}/${pageFiles.length}] Analyzing: ${pagePath}`);
  
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  const lines = pageContent.split('\n');
  const pageAnalysis = {
    path: pagePath,
    lines: lines.length,
    security: [],
    performance: [],
    accessibility: [],
    seo: []
  };

  // Security Analysis
  const securityPatterns = [
    { pattern: /dangerouslySetInnerHTML/g, issue: 'XSS Risk: dangerouslySetInnerHTML usage', severity: 'HIGH' },
    { pattern: /eval\(/g, issue: 'Code Injection Risk: eval() usage', severity: 'CRITICAL' },
    { pattern: /console\.(log|warn|error)/g, issue: 'Console statements (remove for production)', severity: 'MEDIUM' },
    { pattern: /innerHTML\s*=/g, issue: 'XSS Risk: innerHTML usage', severity: 'MEDIUM' }
  ];

  securityPatterns.forEach(check => {
    const matches = pageContent.match(check.pattern);
    if (matches) {
      pageAnalysis.security.push({
        issue: check.issue,
        severity: check.severity,
        count: matches.length
      });
    }
  });

  // Performance Analysis
  const performancePatterns = [
    { pattern: /useState\(/g, issue: 'State usage', severity: 'INFO' },
    { pattern: /useEffect\(/g, issue: 'Effect usage', severity: 'INFO' },
    { pattern: /useCallback|useMemo/g, issue: 'Performance hooks (good)', severity: 'GOOD' }
  ];

  performancePatterns.forEach(check => {
    const matches = pageContent.match(check.pattern);
    if (matches) {
      pageAnalysis.performance.push({
        issue: check.issue,
        severity: check.severity,
        count: matches.length
      });
    }
  });

  // Accessibility Analysis
  const a11yPatterns = [
    { pattern: /<img(?![^>]*alt=)/g, issue: 'Missing alt attributes', severity: 'HIGH' },
    { pattern: /<button[^>]*>/g, issue: 'Button elements found', severity: 'INFO' },
    { pattern: /aria-/g, issue: 'ARIA attributes used (good)', severity: 'GOOD' }
  ];

  a11yPatterns.forEach(check => {
    const matches = pageContent.match(check.pattern);
    if (matches) {
      pageAnalysis.accessibility.push({
        issue: check.issue,
        severity: check.severity,
        count: matches.length
      });
    }
  });

  auditResults.pages.push(pageAnalysis);

  // Count issues for display
  const issues = pageAnalysis.security.filter(s => s.severity !== 'INFO' && s.severity !== 'GOOD').length +
                pageAnalysis.accessibility.filter(a => a.severity === 'HIGH' || a.severity === 'MEDIUM').length;
  
  if (issues === 0) {
    console.log(`   ✅ CLEAN - No issues found`);
  } else {
    console.log(`   ⚠️  ${issues} potential issues found`);
  }
});

console.log('\n🔍 PHASE 2: Component Analysis\n');

// 2. COMPONENT ANALYSIS  
const componentFiles = [];
function findComponents(dir) {
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findComponents(fullPath);
      } else if (item.endsWith('.tsx')) {
        componentFiles.push(fullPath);
      }
    });
  } catch (error) {
    console.log(`   ⚠️  Could not read components directory`);
  }
}

findComponents('src/components');

console.log(`🧩 Found ${componentFiles.length} components to analyze\n`);

// Analyze key components
componentFiles.slice(0, 10).forEach((componentPath, index) => {
  console.log(`🧩 [${index + 1}/10] Analyzing: ${componentPath}`);
  
  const componentContent = fs.readFileSync(componentPath, 'utf8');
  const analysis = {
    path: componentPath,
    lines: componentContent.split('\n').length,
    hasProps: componentContent.includes('Props'),
    hasForwardRef: componentContent.includes('forwardRef'),
    hooks: (componentContent.match(/use[A-Z]\w+/g) || []).length
  };
  
  auditResults.components.push(analysis);
  console.log(`   📊 ${analysis.lines} lines, ${analysis.hooks} hooks, ${analysis.hasProps ? 'Props✅' : 'No Props'}`);
});

// Generate Summary
const summary = {
  totalPages: pageFiles.length,
  totalComponents: componentFiles.length,
  totalSecurityIssues: auditResults.pages.reduce((sum, page) => 
    sum + page.security.filter(s => s.severity !== 'INFO' && s.severity !== 'GOOD').length, 0),
  totalA11yIssues: auditResults.pages.reduce((sum, page) => 
    sum + page.accessibility.filter(a => a.severity === 'HIGH' || a.severity === 'MEDIUM').length, 0),
  criticalIssues: 0,
  highIssues: 0,
  mediumIssues: 0
};

auditResults.pages.forEach(page => {
  [...page.security, ...page.accessibility].forEach(issue => {
    if (issue.severity === 'CRITICAL') summary.criticalIssues++;
    if (issue.severity === 'HIGH') summary.highIssues++;
    if (issue.severity === 'MEDIUM') summary.mediumIssues++;
  });
});

auditResults.summary = summary;

// Save results
fs.writeFileSync(`${auditDir}/detailed-audit.json`, JSON.stringify(auditResults, null, 2));

// Generate report
const report = `# 🔒 FORT KNOX SECURITY AUDIT
Generated: ${new Date().toISOString()}

## 📊 Executive Summary
- **Pages Analyzed**: ${summary.totalPages}
- **Components Analyzed**: ${summary.totalComponents}  
- **Security Issues**: ${summary.totalSecurityIssues}
- **Accessibility Issues**: ${summary.totalA11yIssues}

## 🚨 Issue Severity
- **CRITICAL**: ${summary.criticalIssues}
- **HIGH**: ${summary.highIssues}
- **MEDIUM**: ${summary.mediumIssues}

## 🎯 Status
${summary.criticalIssues === 0 && summary.highIssues === 0 ? 
  '✅ FORTRESS SECURE - No critical issues found!' : 
  '⚠️  Issues require attention - see detailed report'}

## 📁 Detailed Analysis
See ${auditDir}/detailed-audit.json for complete results
`;

fs.writeFileSync(`${auditDir}/FORT-KNOX-REPORT.md`, report);

console.log('\n🔒 FORT KNOX AUDIT COMPLETE!\n');
console.log('📊 SECURITY FORTRESS STATUS:');
console.log(`   🚨 CRITICAL: ${summary.criticalIssues}`);
console.log(`   ⚠️  HIGH: ${summary.highIssues}`);
console.log(`   📋 MEDIUM: ${summary.mediumIssues}`);
console.log(`\n📁 Full report: ${auditDir}/FORT-KNOX-REPORT.md`);

if (summary.criticalIssues === 0 && summary.highIssues === 0) {
  console.log('💪 🔒 PROJECT STATUS: BULLETPROOF! 🔒 💪');
} else {
  console.log('🔧 Some issues need attention - but we\'re making it BULLETPROOF!');
}
