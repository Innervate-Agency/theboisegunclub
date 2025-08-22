#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Map non-standard icon references to Heroicons v2
const ICON_MAPPINGS = {
  'FileText': 'DocumentTextIcon',
  'CheckCircle': 'CheckCircleIcon',
  'Shield': 'ShieldCheckIcon',
  'AlertTriangle': 'ExclamationTriangleIcon',
  'XCircle': 'XCircleIcon',
  'Search': 'MagnifyingGlassIcon',
  'Calendar': 'CalendarIcon',
  'ShoppingCart': 'ShoppingCartIcon',
  'Users': 'UsersIcon',
  'Info': 'InformationCircleIcon',
  'Building': 'BuildingOfficeIcon',
  'Scales': 'ScaleIcon',
  'BookOpen': 'BookOpenIcon',
  'Trophy': 'TrophyIcon',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];
  
  // Replace icon references in JSX
  Object.entries(ICON_MAPPINGS).forEach(([oldName, newName]) => {
    // Replace <IconName /> or <IconName ...props />
    const jsxRegex = new RegExp(`<${oldName}(\\s|/>|\\s[^>]*/>)`, 'g');
    if (content.match(jsxRegex)) {
      content = content.replace(jsxRegex, `<${newName}$1`);
      modified = true;
      changes.push(`Replaced ${oldName} with ${newName}`);
    }
    
    // Replace icon={IconName} patterns
    const propRegex = new RegExp(`icon={${oldName}}`, 'g');
    if (content.match(propRegex)) {
      content = content.replace(propRegex, `icon={${newName}}`);
      modified = true;
      changes.push(`Replaced icon prop ${oldName} with ${newName}`);
    }
    
    // Replace Icon={IconName} patterns
    const capPropRegex = new RegExp(`Icon={${oldName}}`, 'g');
    if (content.match(capPropRegex)) {
      content = content.replace(capPropRegex, `Icon={${newName}}`);
      modified = true;
      changes.push(`Replaced Icon prop ${oldName} with ${newName}`);
    }
  });

  // Collect all used Heroicons
  const usedIcons = new Set();
  const iconRegex = /([A-Z][a-zA-Z]+Icon)\b/g;
  let match;
  while ((match = iconRegex.exec(content)) !== null) {
    if (match[1].endsWith('Icon')) {
      usedIcons.add(match[1]);
    }
  }
  
  // Check what's imported
  const importedIcons = new Set();
  const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@heroicons/g;
  while ((match = importRegex.exec(content)) !== null) {
    const icons = match[1].split(',').map(i => i.trim());
    icons.forEach(icon => importedIcons.add(icon));
  }
  
  // Find missing icons
  const missingIcons = Array.from(usedIcons).filter(icon => !importedIcons.has(icon));
  
  if (missingIcons.length > 0) {
    // Check if there's already a heroicons import
    const heroiconsOutlineImport = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]@heroicons\/react\/24\/outline['"]/);
    
    if (heroiconsOutlineImport) {
      // Add to existing import
      const existingIcons = heroiconsOutlineImport[1].split(',').map(i => i.trim());
      const allIcons = [...new Set([...existingIcons, ...missingIcons])].sort();
      const newImportLine = `import { ${allIcons.join(', ')} } from '@heroicons/react/24/outline'`;
      content = content.replace(heroiconsOutlineImport[0], newImportLine);
      modified = true;
      changes.push(`Added missing icons to import: ${missingIcons.join(', ')}`);
    } else {
      // Add new import at the top of the file after 'use client' if present
      const useClientMatch = content.match(/^['"]use client['"]/m);
      const firstImportMatch = content.match(/^import\s+/m);
      
      if (firstImportMatch) {
        const insertPosition = firstImportMatch.index;
        const newImport = `import { ${missingIcons.sort().join(', ')} } from '@heroicons/react/24/outline'\n`;
        content = content.slice(0, insertPosition) + newImport + content.slice(insertPosition);
        modified = true;
        changes.push(`Added new import for icons: ${missingIcons.join(', ')}`);
      } else if (useClientMatch) {
        // Insert after 'use client'
        const insertPosition = useClientMatch.index + useClientMatch[0].length + 1;
        const newImport = `\nimport { ${missingIcons.sort().join(', ')} } from '@heroicons/react/24/outline'\n`;
        content = content.slice(0, insertPosition) + newImport + content.slice(insertPosition);
        modified = true;
        changes.push(`Added new import for icons: ${missingIcons.join(', ')}`);
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${path.relative(process.cwd(), filePath)}`);
    changes.forEach(change => console.log(`   - ${change}`));
    return true;
  }
  
  return false;
}

// Get all TypeScript/React files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Main
const SRC_DIR = path.join(__dirname, '..', 'src');
console.log('🔧 Fixing missing icon imports...\n');

const files = getAllFiles(SRC_DIR);
let fixedCount = 0;

files.forEach((file) => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✨ Fixed ${fixedCount} files`);
console.log('\n📊 Checking remaining TypeScript errors...\n');

const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit --pretty false 2>&1 | grep "error TS" | sed \'s/.*error TS/TS/\' | cut -d: -f1 | sort | uniq -c | sort -rn | head -20', {
    stdio: 'inherit'
  });
} catch (e) {
  // Ignore error
}
