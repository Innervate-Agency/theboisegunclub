#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📚 TBGC Documentation Generator\n');

// Create documentation directory
const docsDir = '_documentation';
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

const timestamp = new Date().toISOString();

console.log('🔍 Analyzing project structure...');

// Analyze package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Count files
const countFiles = (dir, extensions) => {
  if (!fs.existsSync(dir)) return 0;
  try {
    const files = execSync(`find ${dir} -name "*.{${extensions.join(',')}}" 2>/dev/null | wc -l`, {encoding: 'utf8'});
    return parseInt(files.trim()) || 0;
  } catch {
    return 0;
  }
};

const stats = {
  components: countFiles('src/components', ['tsx', 'ts']),
  stories: countFiles('src/stories', ['stories.tsx', 'stories.ts']),
  pages: countFiles('src/app', ['tsx', 'ts']),
  totalDependencies: Object.keys(packageJson.dependencies || {}).length,
  totalDevDependencies: Object.keys(packageJson.devDependencies || {}).length
};

// Generate project overview
const projectOverview = `# 📋 The Boise Gun Club - Project Overview
*Generated: ${timestamp}*

## 📊 Project Statistics
- **Components**: ${stats.components} files
- **Stories**: ${stats.stories} files  
- **Pages**: ${stats.pages} files
- **Dependencies**: ${stats.totalDependencies} production
- **Dev Dependencies**: ${stats.totalDevDependencies} development

## 🏗️ Technology Stack
- **Framework**: Next.js ${packageJson.dependencies.next}
- **React**: ${packageJson.dependencies.react}
- **TypeScript**: ${packageJson.devDependencies.typescript}
- **Styling**: TailwindCSS ${packageJson.devDependencies.tailwindcss}
- **Testing**: Vitest ${packageJson.devDependencies.vitest}
- **Documentation**: Storybook ${packageJson.devDependencies.storybook}

## 🎨 UI Library Dependencies
${Object.entries(packageJson.dependencies)
  .filter(([name]) => name.includes('@radix-ui'))
  .map(([name, version]) => `- **${name}**: ${version}`)
  .join('\n')}

## 📦 Key Dependencies
${Object.entries(packageJson.dependencies)
  .filter(([name]) => !name.includes('@radix-ui'))
  .slice(0, 10)
  .map(([name, version]) => `- **${name}**: ${version}`)
  .join('\n')}

## 🛠️ Development Scripts
${Object.entries(packageJson.scripts)
  .map(([name, command]) => `- \`npm run ${name}\`: ${command}`)
  .join('\n')}

---
*Auto-generated documentation - DO NOT EDIT MANUALLY*
`;

fs.writeFileSync(path.join(docsDir, 'PROJECT_OVERVIEW.md'), projectOverview);

// Generate dependency analysis
console.log('📦 Analyzing dependencies...');

const dependencyAnalysis = `# 🔍 Dependency Analysis
*Generated: ${timestamp}*

## 📈 Dependency Categories

### 🎨 UI & Styling (${Object.entries(packageJson.dependencies).filter(([name]) => 
  name.includes('radix-ui') || name.includes('tailwind') || name.includes('class-variance') || name.includes('clsx')).length})
${Object.entries(packageJson.dependencies)
  .filter(([name]) => name.includes('radix-ui') || name.includes('tailwind') || name.includes('class-variance') || name.includes('clsx'))
  .map(([name, version]) => `- ${name}@${version}`)
  .join('\n')}

### 🚀 Framework & Core (${Object.entries(packageJson.dependencies).filter(([name]) => 
  ['next', 'react', 'react-dom'].includes(name)).length})
${Object.entries(packageJson.dependencies)
  .filter(([name]) => ['next', 'react', 'react-dom'].includes(name))
  .map(([name, version]) => `- ${name}@${version}`)
  .join('\n')}

### 📝 Forms & Validation (${Object.entries(packageJson.dependencies).filter(([name]) => 
  name.includes('hook-form') || name.includes('zod') || name.includes('resolvers')).length})
${Object.entries(packageJson.dependencies)
  .filter(([name]) => name.includes('hook-form') || name.includes('zod') || name.includes('resolvers'))
  .map(([name, version]) => `- ${name}@${version}`)
  .join('\n')}

### ✨ Animation & Interaction (${Object.entries(packageJson.dependencies).filter(([name]) => 
  name.includes('framer') || name.includes('motion') || name.includes('embla')).length})
${Object.entries(packageJson.dependencies)
  .filter(([name]) => name.includes('framer') || name.includes('motion') || name.includes('embla'))
  .map(([name, version]) => `- ${name}@${version}`)
  .join('\n')}

### 🛠️ Development Tools
${Object.entries(packageJson.devDependencies)
  .slice(0, 15)
  .map(([name, version]) => `- ${name}@${version}`)
  .join('\n')}

## 🎯 Optimization Opportunities
1. **Bundle Size**: Monitor large dependencies
2. **Tree Shaking**: Ensure unused exports are eliminated
3. **Code Splitting**: Implement dynamic imports for heavy components
4. **Dependency Updates**: Regular updates for security and performance

---
*Auto-generated analysis - DO NOT EDIT MANUALLY*
`;

fs.writeFileSync(path.join(docsDir, 'DEPENDENCY_ANALYSIS.md'), dependencyAnalysis);

console.log('✅ Documentation generated:');
console.log(`   📋 Project Overview: ${docsDir}/PROJECT_OVERVIEW.md`);
console.log(`   📦 Dependency Analysis: ${docsDir}/DEPENDENCY_ANALYSIS.md`);
console.log('\n📚 Documentation complete!');
