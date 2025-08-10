#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🎯 Code Quality Analysis\n');

// 1. File structure analysis
console.log('📁 Project structure analysis...');

const directoriesToAnalyze = ['src/components', 'src/app', 'src/stories'];
const fileStats = {};

directoriesToAnalyze.forEach(dir => {
  if (fs.existsSync(dir)) {
    try {
      const fileCount = execSync(`find ${dir} -name "*.tsx" -o -name "*.ts" | wc -l`, { encoding: 'utf8' });
      const lineCount = execSync(`find ${dir} -name "*.tsx" -o -name "*.ts" -exec wc -l {} + | tail -1 | awk '{print $1}'`, { encoding: 'utf8' });
      fileStats[dir] = {
        files: parseInt(fileCount.trim()),
        lines: parseInt(lineCount.trim()) || 0
      };
      console.log(`   📦 ${dir}: ${fileStats[dir].files} files, ${fileStats[dir].lines} lines`);
    } catch (error) {
      console.log(`   ⚠️  Could not analyze ${dir}`);
    }
  }
});

// 2. Large file detection
console.log('\n🔍 Detecting large files (>500 lines)...');

try {
  const largeFiles = execSync(`find src -name "*.tsx" -o -name "*.ts" -exec wc -l {} + | awk '$1 > 500 {print $1, $2}' | sort -nr`, { encoding: 'utf8' });
  
  if (largeFiles.trim()) {
    console.log('   ⚠️  Large files found:');
    largeFiles.trim().split('\n').forEach(line => {
      const [lines, file] = line.trim().split(/\s+/);
      console.log(`      • ${file}: ${lines} lines`);
    });
  } else {
    console.log('   ✅ No excessively large files found');
  }
} catch (error) {
  console.log('   📝 Could not analyze file sizes');
}

// 3. TypeScript usage analysis
console.log('\n🔍 TypeScript usage analysis...');

try {
  const tsFiles = execSync(`find src -name "*.ts" | wc -l`, { encoding: 'utf8' });
  const tsxFiles = execSync(`find src -name "*.tsx" | wc -l`, { encoding: 'utf8' });
  const jsFiles = execSync(`find src -name "*.js" -o -name "*.jsx" | wc -l`, { encoding: 'utf8' });
  
  const tsCount = parseInt(tsFiles.trim());
  const tsxCount = parseInt(tsxFiles.trim());
  const jsCount = parseInt(jsFiles.trim());
  const total = tsCount + tsxCount + jsCount;
  
  console.log(`   📊 TypeScript files: ${tsCount + tsxCount}/${total} (${Math.round((tsCount + tsxCount)/total * 100)}%)`);
  
  if (jsCount > 0) {
    console.log(`   ⚠️  ${jsCount} JavaScript files found - consider migrating to TypeScript`);
  } else {
    console.log('   ✅ 100% TypeScript usage');
  }
} catch (error) {
  console.log('   📝 Could not analyze TypeScript usage');
}

// 4. Import/Export analysis
console.log('\n📦 Import/Export patterns...');

try {
  // Check for default vs named exports
  const defaultExports = execSync(`grep -r "export default" src --include="*.ts" --include="*.tsx" | wc -l`, { encoding: 'utf8' });
  const namedExports = execSync(`grep -r "export const\\|export function\\|export class" src --include="*.ts" --include="*.tsx" | wc -l`, { encoding: 'utf8' });
  
  console.log(`   📤 Default exports: ${defaultExports.trim()}`);
  console.log(`   📤 Named exports: ${namedExports.trim()}`);
  
  // Check for barrel exports
  const indexFiles = execSync(`find src -name "index.ts" -o -name "index.tsx" | wc -l`, { encoding: 'utf8' });
  console.log(`   📦 Index files (barrel exports): ${indexFiles.trim()}`);
  
} catch (error) {
  console.log('   📝 Could not analyze import/export patterns');
}

// 5. Component conventions
console.log('\n🧩 Component conventions analysis...');

try {
  // Check for consistent naming
  const pascalCaseComponents = execSync(`find src/components -name "*.tsx" | grep -E "^[A-Z][a-zA-Z0-9]*\\.tsx$" | wc -l`, { encoding: 'utf8' });
  const totalComponents = execSync(`find src/components -name "*.tsx" | wc -l`, { encoding: 'utf8' });
  
  console.log(`   📝 Component naming: ${pascalCaseComponents.trim()}/${totalComponents.trim()} follow PascalCase`);
  
  // Check for prop interfaces
  const interfaceDeclarations = execSync(`grep -r "interface.*Props" src/components --include="*.tsx" | wc -l`, { encoding: 'utf8' });
  console.log(`   🔧 Components with Props interfaces: ${interfaceDeclarations.trim()}`);
  
} catch (error) {
  console.log('   📝 Could not analyze component conventions');
}

console.log('\n📊 Code Quality Summary:');
const totalFiles = Object.values(fileStats).reduce((sum, stat) => sum + stat.files, 0);
const totalLines = Object.values(fileStats).reduce((sum, stat) => sum + stat.lines, 0);

console.log(`   📁 Total analyzed files: ${totalFiles}`);
console.log(`   📏 Total lines of code: ${totalLines}`);
console.log(`   📊 Average file size: ${Math.round(totalLines / totalFiles)} lines`);

console.log('\n💡 Quality Recommendations:');
console.log('   1. Break down files >1000 lines into smaller modules');
console.log('   2. Ensure consistent TypeScript usage across all files');
console.log('   3. Use proper Props interfaces for all components');
console.log('   4. Follow consistent naming conventions');
console.log('   5. Consider barrel exports for better import organization');

console.log('\n✅ Code quality analysis complete!');
