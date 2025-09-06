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
  const filename = path.basename(filePath, '.tsx');
  // Convert kebab-case to PascalCase
  return filename.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

function getImportPath(storyPath, componentPath) {
  const relativePath = path.relative(path.dirname(storyPath), componentPath);
  return relativePath.replace(/\.tsx$/, '').replace(/\\/g, '/');
}

function generateStoryContent(componentPath, atomicType) {
  const componentName = extractComponentName(componentPath);
  const importPath = getImportPath(
    path.join('src', 'components', atomicType, componentName + '.stories.tsx'),
    componentPath
  );
  
  const typeDescriptions = {
    atoms: 'fundamental building block that cannot be broken down further',
    molecules: 'simple group of atoms functioning together as a unit',
    organisms: 'complex component made up of molecules and/or atoms',
    templates: 'page-level layout combining organisms and other components'
  };
  
  const capitalizedType = atomicType.charAt(0).toUpperCase() + atomicType.slice(1).slice(0, -1);
  
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '${importPath}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Atomic Design/${capitalizedType}s/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The ${componentName} ${atomicType.slice(0, -1)} is a ${typeDescriptions[atomicType]} in our design system.',
      },
    },
  },
  tags: ['autodocs', '${atomicType.slice(0, -1)}'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add default props here
  },
};

export const Example: Story = {
  render: () => <${componentName} />,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage example of the ${componentName} component.',
      },
    },
  },
};`;
}

async function generateStoriesForComponents() {
  console.log('🔍 Scanning components...');
  
  // Find all component files (excluding existing stories)
  const componentFiles = [];
  
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('.stories.')) {
        componentFiles.push(fullPath);
      }
    }
  }
  
  scanDirectory('src/components');
  
  console.log(`📊 Found ${componentFiles.length} components to process`);
  
  // Classify and organize components
  const classified = {
    atoms: [],
    molecules: [],
    organisms: [],
    templates: []
  };
  
  for (const filePath of componentFiles) {
    const componentName = extractComponentName(filePath);
    const atomicType = classifyComponent(path.basename(filePath), componentName);
    classified[atomicType].push(filePath);
  }
  
  // Report classification
  console.log('📋 Classification Results:');
  Object.entries(classified).forEach(([type, components]) => {
    console.log(`  ${type}: ${components.length} components`);
  });
  
  // Create directories and generate stories
  for (const [atomicType, components] of Object.entries(classified)) {
    if (components.length === 0) continue;
    
    const storyDir = path.join('src', 'components', atomicType);
    if (!fs.existsSync(storyDir)) {
      fs.mkdirSync(storyDir, { recursive: true });
    }
    
    console.log(`\n📝 Generating stories for ${components.length} ${atomicType}...`);
    
    for (const componentPath of components.slice(0, 10)) { // Limit to 10 per batch initially
      const componentName = extractComponentName(componentPath);
      const storyPath = path.join(storyDir, `${componentName}.stories.tsx`);
      
      // Skip if story already exists
      if (fs.existsSync(storyPath)) {
        console.log(`  ⏭️  Skipping ${componentName} (story exists)`);
        continue;
      }
      
      try {
        const storyContent = generateStoryContent(componentPath, atomicType);
        fs.writeFileSync(storyPath, storyContent);
        console.log(`  ✅ Generated story for ${componentName}`);
      } catch (error) {
        console.log(`  ❌ Failed to generate story for ${componentName}: ${error.message}`);
      }
    }
  }
  
  console.log('\n🎉 Story generation complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Review generated stories in src/components/');
  console.log('2. Run `npm run storybook` to test');
  console.log('3. Customize stories as needed');
  console.log('4. Run this script again to process more components');
}

// Run the script
if (require.main === module) {
  generateStoriesForComponents().catch(console.error);
}

module.exports = { generateStoriesForComponents, classifyComponent };
