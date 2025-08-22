#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const SRC_DIR = path.join(__dirname, '..', 'src');

// Icon name mappings from Heroicons v1 to v2
const ICON_NAME_MAPPINGS = {
  // Common renames
  'XIcon': 'XMarkIcon',
  'ExternalLinkIcon': 'ArrowTopRightOnSquareIcon',
  'DuplicateIcon': 'Square2StackIcon',
  'MenuIcon': 'Bars3Icon',
  'SearchIcon': 'MagnifyingGlassIcon',
  'FilterIcon': 'FunnelIcon',
  'RefreshIcon': 'ArrowPathIcon',
  'MailIcon': 'EnvelopeIcon',
  'LoginIcon': 'ArrowRightOnRectangleIcon',
  'LogoutIcon': 'ArrowLeftOnRectangleIcon',
  
  // Non-icon mappings for commonly misidentified items
  'Search': 'MagnifyingGlassIcon',
  'FileText': 'DocumentTextIcon',
  'CheckCircle': 'CheckCircleIcon',
  'Shield': 'ShieldCheckIcon',
  'AlertTriangle': 'ExclamationTriangleIcon',
  'XCircle': 'XCircleIcon',
};

// Variant mappings for Button and Badge components
const VARIANT_MAPPINGS = {
  'primary': 'default',
  'accent': 'default',
  'success': 'secondary',
  'info': 'secondary',
  'warning': 'destructive',
  'danger': 'destructive',
  'error': 'destructive',
  'tertiary': 'ghost',
  'subtle': 'ghost',
  'light': 'outline',
  'directory-new': 'outline',
  'intel-location': 'outline',
  'intel-weather': 'outline',
  'intel-verified': 'secondary',
  'intel-unverified': 'outline',
  'intel-priority': 'destructive',
  'intel-access': 'secondary',
  'intel-restricted': 'destructive',
  'intel-closed': 'destructive',
  'intel-distance': 'outline',
  'directory-range': 'outline',
  'fire': 'destructive',
  'fire-blue': 'default',
  'fire-green': 'secondary',
  'fire-purple': 'secondary',
  'elite': 'default',
  'premium': 'default',
  'glass': 'secondary',
  'filled': 'default',
};

// Helper function to get all files recursively
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

// Process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];

  // Fix heroicons imports - normalize to v2 subpaths
  content = content.replace(
    /from ['"]@heroicons\/react(?:\/outline|\/solid)?['"]/g,
    (match) => {
      const newImport = match.includes('/solid') 
        ? "from '@heroicons/react/24/solid'"
        : "from '@heroicons/react/24/outline'";
      if (match !== newImport) {
        modified = true;
        changes.push(`Updated import: ${match} -> ${newImport}`);
      }
      return newImport;
    }
  );

  // Fix variant prop values
  Object.entries(VARIANT_MAPPINGS).forEach(([oldVariant, newVariant]) => {
    const variantRegex = new RegExp(`variant=["']${oldVariant}["']`, 'g');
    const beforeVariant = content;
    content = content.replace(variantRegex, `variant="${newVariant}"`);
    if (beforeVariant !== content) {
      modified = true;
      changes.push(`Updated variant: ${oldVariant} -> ${newVariant}`);
    }
  });

  // Fix size="md" to size="default"
  content = content.replace(/size=["']md["']/g, (match) => {
    modified = true;
    changes.push('Updated size: md -> default');
    return 'size="default"';
  });

  // Remove duplicate imports
  const importLines = content.match(/^import\s+.*$/gm) || [];
  const importMap = new Map();
  
  importLines.forEach((line) => {
    const moduleMatch = line.match(/from\s+['"]([^'"]+)['"]/);
    if (moduleMatch) {
      const module = moduleMatch[1];
      if (!importMap.has(module)) {
        importMap.set(module, []);
      }
      importMap.get(module).push(line);
    }
  });

  // Merge duplicate imports
  importMap.forEach((lines, module) => {
    if (lines.length > 1 && module.includes('@heroicons')) {
      const namedImports = new Set();
      
      lines.forEach((line) => {
        const namedMatch = line.match(/{\s*([^}]+)\s*}/);
        if (namedMatch) {
          const imports = namedMatch[1].split(',').map(i => i.trim());
          imports.forEach(imp => namedImports.add(imp));
        }
      });

      if (namedImports.size > 0) {
        const newImport = `import { ${Array.from(namedImports).join(', ')} } from '${module}'`;
        
        // Replace first occurrence and remove others
        let replaced = false;
        lines.forEach((line) => {
          if (!replaced) {
            content = content.replace(line, newImport);
            replaced = true;
          } else {
            content = content.replace(line + '\n', '');
          }
        });
        
        modified = true;
        changes.push(`Merged duplicate imports from ${module}`);
      }
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${path.relative(process.cwd(), filePath)}`);
    changes.forEach(change => console.log(`   - ${change}`));
    return true;
  }
  
  return false;
}

// Main function
function main() {
  console.log('🔧 Starting TypeScript error fixes...\n');
  
  const files = getAllFiles(SRC_DIR);
  console.log(`Found ${files.length} TypeScript/React files to process\n`);
  
  let fixedCount = 0;
  
  files.forEach((file) => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Fixed ${fixedCount} files`);
  console.log('\n📊 Running TypeScript check to verify fixes...\n');
  
  try {
    execSync('npx tsc --noEmit --pretty false 2>&1 | grep "error TS" | sed \'s/.*error TS/TS/\' | cut -d: -f1 | sort | uniq -c | sort -rn | head -20', {
      stdio: 'inherit'
    });
  } catch (e) {
    // TypeScript will return non-zero if there are errors, but we still want to see the output
  }
}

// Run the script
main();
