#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🧠 SMART LINT ANALYSIS - Development-Friendly Mode');
console.log('🔍 Categorizing issues by safety and development impact\n');

// Get lint output
let lintOutput = '';
try {
  lintOutput = execSync('npm run lint', { encoding: 'utf8' });
} catch (error) {
  lintOutput = error.stdout + error.stderr;
}

// Parse and categorize issues
const issues = {
  safe_to_fix: [],        // Won't break anything
  maybe_safe: [],         // Probably safe but need review
  development_noise: [],  // Active development artifacts
  potentially_risky: []   // Could break functionality
};

const lines = lintOutput.split('\n').filter(line => line.includes('Warning:'));

lines.forEach(line => {
  const issue = {
    line: line.trim(),
    type: '',
    risk: '',
    file: ''
  };

  // Extract rule type
  if (line.includes('@typescript-eslint/no-unused-vars')) {
    issue.type = 'unused-vars';
    // Check if it's an import vs a variable
    if (line.includes('is defined but never used') && !line.includes('Allowed unused args')) {
      if (line.match(/'[A-Z][a-zA-Z]*'/)) {
        // Likely a component/icon import - could be intended for future use
        issue.risk = 'development-noise';
        issues.development_noise.push(issue);
      } else {
        // Regular unused variable - safer to clean
        issue.risk = 'safe';
        issues.safe_to_fix.push(issue);
      }
    } else if (line.includes('Allowed unused args must match')) {
      // Function parameter not used - common in development
      issue.risk = 'development-noise';
      issues.development_noise.push(issue);
    }
  } 
  else if (line.includes('@typescript-eslint/no-explicit-any')) {
    issue.type = 'explicit-any';
    issue.risk = 'maybe-safe';
    issues.maybe_safe.push(issue);
  }
  else if (line.includes('react-hooks/exhaustive-deps')) {
    issue.type = 'react-deps';
    issue.risk = 'potentially-risky';
    issues.potentially_risky.push(issue);
  }
  else if (line.includes('@next/next/no-img-element')) {
    issue.type = 'next-img';
    issue.risk = 'safe';
    issues.safe_to_fix.push(issue);
  }
  else {
    issue.type = 'other';
    issue.risk = 'review-needed';
    issues.maybe_safe.push(issue);
  }
});

console.log('📊 LINT ISSUE BREAKDOWN:\n');

console.log(`🟢 SAFE TO FIX (${issues.safe_to_fix.length} issues):`);
console.log('   These won\'t break your active development:');
issues.safe_to_fix.slice(0, 3).forEach(issue => {
  console.log(`   • ${issue.type}: ${issue.line.substring(0, 80)}...`);
});
if (issues.safe_to_fix.length > 3) {
  console.log(`   ... and ${issues.safe_to_fix.length - 3} more`);
}

console.log(`\n🟡 DEVELOPMENT NOISE (${issues.development_noise.length} issues):`);
console.log('   These are likely intentional for active development:');
issues.development_noise.slice(0, 3).forEach(issue => {
  console.log(`   • ${issue.type}: ${issue.line.substring(0, 80)}...`);
});
if (issues.development_noise.length > 3) {
  console.log(`   ... and ${issues.development_noise.length - 3} more`);
}

console.log(`\n🟠 MAYBE SAFE (${issues.maybe_safe.length} issues):`);
console.log('   These need review before fixing:');
issues.maybe_safe.forEach(issue => {
  console.log(`   • ${issue.type}: ${issue.line.substring(0, 80)}...`);
});

console.log(`\n🔴 POTENTIALLY RISKY (${issues.potentially_risky.length} issues):`);
console.log('   DON\'T touch these during active development:');
issues.potentially_risky.forEach(issue => {
  console.log(`   • ${issue.type}: ${issue.line.substring(0, 80)}...`);
});

console.log('\n🎯 RECOMMENDATION FOR ACTIVE DEVELOPMENT:');
if (issues.safe_to_fix.length > 0) {
  console.log(`✅ Fix ${issues.safe_to_fix.length} safe issues (won't break anything)`);
}
if (issues.development_noise.length > 0) {
  console.log(`⏸️  Skip ${issues.development_noise.length} development noise issues (keep for now)`);
}
if (issues.maybe_safe.length > 0) {
  console.log(`🤔 Review ${issues.maybe_safe.length} issues manually`);
}
if (issues.potentially_risky.length > 0) {
  console.log(`🚨 AVOID ${issues.potentially_risky.length} risky issues (could break functionality)`);
}

const totalSafe = issues.safe_to_fix.length;
const totalIssues = lines.length;

console.log(`\n📈 SAFETY SCORE: ${totalSafe}/${totalIssues} issues are safe to fix in active development`);

if (totalSafe > 10) {
  console.log('🔥 Worth doing a targeted cleanup of safe issues!');
} else if (totalSafe > 0) {
  console.log('✨ A few quick wins available');
} else {
  console.log('🎯 All issues require careful consideration - good for active development!');
}
