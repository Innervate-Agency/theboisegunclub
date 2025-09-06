#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Atomic design classification patterns
const ATOMIC_PATTERNS = {
  atoms: [
    'button', 'badge', 'avatar', 'input', 'label', 'checkbox', 'radio', 
    'switch', 'slider', 'progress', 'separator', 'skeleton', 'spinner',
    'icon', 'image', 'text', 'link', 'alert'
  ],
  molecules: [
    'card', 'form', 'dropdown', 'popover', 'tooltip', 'dialog', 'sheet',
    'accordion', 'tabs', 'menu', 'navigation', 'breadcrumb', 'pagination',
    'search', 'select', 'combobox', 'calendar', 'date-picker'
  ],
  organisms: [
    'header', 'footer', 'sidebar', 'navigation', 'hero', 'gallery', 'grid',
    'list', 'table', 'chart', 'feed', 'timeline', 'stats', 'dashboard',
    'profile', 'settings', 'pricing', 'testimonial', 'contact', 'newsletter'
  ],
  templates: [
    'layout', 'page', 'template', 'wrapper', 'container', 'section',
    'article', 'blog', 'product', 'landing', 'auth', 'error'
  ]
};

function classifyComponent(filename, componentName) {
  const lowerName = componentName.toLowerCase();
  const lowerFilename = filename.toLowerCase();
  
  for (const [type, patterns] of Object.entries(ATOMIC_PATTERNS)) {
    for (const pattern of patterns) {
      if (lowerName.includes(pattern) || lowerFilename.includes(pattern)) {
        return type;
      }
    }
  }
  
  // Fallback classification based on complexity indicators
  if (lowerName.includes('page') || lowerFilename.includes('page')) return 'templates';
  if (lowerName.length > 15 || lowerFilename.includes('complex')) return 'organisms';
  if (lowerName.includes('item') || lowerName.includes('card')) return 'molecules';
  
  return 'atoms'; // Default to atoms for simple components
}

function extractComponentName(filePath) {
  const filename = path.basename(filePath, '.stories.tsx');
  return filename.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

function updateStoryFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const componentName = extractComponentName(filePath);
    const atomicType = classifyComponent(path.basename(filePath), componentName);
    const capitalizedType = atomicType.charAt(0).toUpperCase() + atomicType.slice(1).slice(0, -1);
    
    const titleRegex = /title:\s*['\"`]([^'\"`]+)['\"`]/;
    const match = content.match(titleRegex);
    
    if (match) {
      const oldTitle = match[1];
      const newTitle = `Atomic Design/${capitalizedType}s/${componentName}`;
      
      if (!oldTitle.includes('Atomic Design')) {
        const updatedContent = content.replace(titleRegex, `title: '${newTitle}'`);
        fs.writeFileSync(filePath, updatedContent);
        console.log(`  ✅ Updated: ${componentName} (${oldTitle} → ${newTitle})`);
        return true;
      } else {
        console.log(`  ⏭️  Already atomic: ${componentName}`);
        return false;
      }
    } else {
      console.log(`  ❌ No title found in: ${componentName}`);
      return false;
    }
  } catch (error) {
    console.log(`  ❌ Error updating ${filePath}: ${error.message}`);
    return false;
  }
}

const storyFiles = [];

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (item.endsWith('.stories.tsx') || item.endsWith('.stories.ts')) {
      storyFiles.push(fullPath);
    }
  }
}

console.log('🔍 Finding existing story files...');
scanDirectory('src/components');

console.log(`📊 Found ${storyFiles.length} story files to update`);

let updatedCount = 0;
for (const filePath of storyFiles) {
  const updated = updateStoryFile(filePath);
  if (updated) updatedCount++;
}

console.log(`\n🎉 Updated ${updatedCount} story files with atomic design structure!`);
console.log('\n📋 Now run: npm run storybook');
