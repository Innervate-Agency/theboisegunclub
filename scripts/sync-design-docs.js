#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📚 Syncing Design System Documentation...\n');

const sourceDir = '_resources/docs';
const targetDir = 'src/stories';

const documentationMap = [
  {
    source: 'DESIGN_SYSTEM.md',
    target: 'Design-System.mdx',
    title: 'Documentation/Design System'
  },
  {
    source: 'AI_ENFORCEMENT_CHECKLIST.md', 
    target: 'AI-Enforcement.mdx',
    title: 'Documentation/AI Enforcement Checklist'
  },
  {
    source: 'BUSINESS_PIVOT_CONTEXT.md',
    target: 'Business-Context.mdx',
    title: 'Documentation/Business Context'
  },
  {
    source: 'CODE_GUIDELINES.md',
    target: 'Code-Guidelines.mdx',
    title: 'Documentation/Code Guidelines'
  }
];

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let syncedFiles = 0;

documentationMap.forEach(({ source, target, title }) => {
  const sourcePath = path.join(sourceDir, source);
  const targetPath = path.join(targetDir, target);
  
  if (fs.existsSync(sourcePath)) {
    console.log(`🔄 Processing ${source}...`);
    
    let content = fs.readFileSync(sourcePath, 'utf8');
    
    // Convert to Storybook v9 MDX format
    const mdxContent = `---
title: '${title}'
---

${content}`;
    
    // Clean up any problematic markdown syntax for Storybook
    const cleanContent = mdxContent
      .replace(/```javascript/g, '```js')
      .replace(/```typescript/g, '```ts')
      .replace(/<!-- .*? -->/gs, '') // Remove HTML comments
      .replace(/\n{3,}/g, '\n\n'); // Normalize multiple newlines
    
    fs.writeFileSync(targetPath, cleanContent);
    console.log(`   ✅ Synced to ${target}`);
    syncedFiles++;
  } else {
    console.log(`   ⚠️ Source file not found: ${source}`);
  }
});

console.log(`\n🎉 Documentation sync complete!`);
console.log(`📊 Files synced: ${syncedFiles}/${documentationMap.length}`);

if (syncedFiles === documentationMap.length) {
  console.log('✅ All documentation files are up to date in Storybook');
} else {
  console.log('⚠️ Some source files were missing. Check _resources/docs/');
}
