#!/usr/bin/env node

const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Add new scripts while preserving existing ones
const newScripts = {
  "analyze": "node scripts/analyze-build.js",
  "docs:generate": "node scripts/generate-docs.js",
  "perf": "node scripts/performance-monitor.js", 
  "reports": "ls -la _reports/",
  "clean:reports": "rm -rf _reports/*",
  "clean:docs": "rm -rf _documentation/*"
};

// Merge scripts
packageJson.scripts = { ...packageJson.scripts, ...newScripts };

// Write back to file
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('📦 Added new npm scripts:');
Object.entries(newScripts).forEach(([name, command]) => {
  console.log(`   ✅ npm run ${name}`);
});
console.log('\n🎉 Package.json updated!');
