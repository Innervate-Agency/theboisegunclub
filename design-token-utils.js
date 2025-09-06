#!/usr/bin/env node
/**
 * BOISE GUN CLUB DESIGN TOKEN MIGRATION UTILITIES
 */

const fs = require('fs');

// Core color palette from globals.css
const BOISE_COLORS = {
  'dark-chocolate': '#1a0f0d',
  'rusty-orange': '#D9863B',
  'crisp-off-white': '#F2F2F2',
  'rich-loam': '#2d201d',
  'slate-blue': '#3A5063',
  'sandy-ochre': '#D99F5D',
  'warning-amber': '#D4A574'
};

// Spacing system
const SPACING_MAP = {
  2: 'spacing-xs',
  4: 'spacing-xs', 
  8: 'spacing-sm',
  12: 'spacing-sm',
  16: 'spacing-base',
  24: 'spacing-lg',
  32: 'spacing-xl',
  48: 'spacing-2xl',
  64: 'spacing-3xl',
  96: 'spacing-4xl'
};

// Shadow progression
const SHADOWS = [
  'shadow-whisper', 'shadow-present', 'shadow-elevated', 
  'shadow-prominent', 'shadow-commanding', 'shadow-hero'
];

/**
 * Convert hex colors to design tokens
 */
function convertHexToToken(hexColor) {
  const normalizedHex = hexColor.toLowerCase();
  
  for (const [tokenName, tokenHex] of Object.entries(BOISE_COLORS)) {
    if (tokenHex.toLowerCase() === normalizedHex) {
      return `var(--color-${tokenName})`;
    }
  }
  
  return `/* TODO: Convert ${hexColor} to design token */`;
}

/**
 * Convert pixel spacing to design tokens
 */
function convertPixelToSpacing(pixelValue) {
  const px = parseInt(pixelValue);
  
  if (SPACING_MAP[px]) {
    return `var(--${SPACING_MAP[px]})`;
  }
  
  // Find closest match
  const closest = Object.keys(SPACING_MAP)
    .map(Number)
    .sort((a, b) => Math.abs(px - a) - Math.abs(px - b))[0];
    
  return `var(--${SPACING_MAP[closest]}) /* closest match for ${px}px */`;
}

/**
 * Generate story controls for colors
 */
function generateColorControls() {
  const options = {};
  const mapping = {};
  
  Object.keys(BOISE_COLORS).forEach(tokenName => {
    options[tokenName] = tokenName;
    mapping[tokenName] = `var(--color-${tokenName})`;
  });
  
  return {
    control: { type: 'select' },
    options,
    mapping
  };
}

/**
 * Generate story controls for spacing
 */
function generateSpacingControls() {
  const options = {};
  const mapping = {};
  
  Object.values(SPACING_MAP).forEach(tokenName => {
    const displayName = tokenName.replace('spacing-', '').toUpperCase();
    options[displayName] = tokenName;
    mapping[tokenName] = `var(--${tokenName})`;
  });
  
  return {
    control: { type: 'select' },
    options,
    mapping
  };
}

/**
 * Generate story controls for shadows
 */
function generateShadowControls() {
  const options = {};
  const mapping = {};
  
  SHADOWS.forEach(shadow => {
    const displayName = shadow.replace('shadow-', '').toUpperCase();
    const key = shadow.replace('shadow-', '');
    options[displayName] = key;
    mapping[key] = `var(--${shadow})`;
  });
  
  return {
    control: { type: 'select' },
    options,
    mapping
  };
}

/**
 * Apply automated migrations to a story file
 */
function migrateStoryFile(filePath) {
  console.log(`🔄 Migrating: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let changeCount = 0;
  
  // Convert hex colors
  content = content.replace(/#[0-9a-fA-F]{6}/g, (match) => {
    const token = convertHexToToken(match);
    if (!token.includes('TODO')) {
      changeCount++;
      return token;
    }
    return match;
  });
  
  // Convert pixel values (basic)
  content = content.replace(/\b(\d+)px\b/g, (match, pixels) => {
    const px = parseInt(pixels);
    if (SPACING_MAP[px]) {
      changeCount++;
      return `var(--${SPACING_MAP[px]})`;
    }
    return match;
  });
  
  // Flag inline styles for manual review
  content = content.replace(/style\s*=\s*\{[^}]+\}/g, (match) => {
    changeCount++;
    return `{/* TODO: Convert to CSS classes: ${match} */}`;
  });
  
  if (changeCount > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`   ✅ Applied ${changeCount} changes`);
  } else {
    console.log(`   ⏭️  No changes needed`);
  }
  
  return changeCount;
}

// Export utilities
module.exports = {
  convertHexToToken,
  convertPixelToSpacing,
  generateColorControls,
  generateSpacingControls,
  generateShadowControls,
  migrateStoryFile,
  BOISE_COLORS,
  SPACING_MAP,
  SHADOWS
};

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🎨 DESIGN TOKEN MIGRATION UTILITIES

Commands:
  test-color <hex>   - Test color conversion
  test-spacing <px>  - Test spacing conversion
  migrate <file>     - Migrate a single story file
  
Examples:
  node design-token-utils.js test-color "#D9863B"
  node design-token-utils.js test-spacing "24px"  
  node design-token-utils.js migrate "src/stories/Foundation/ColorPalette.stories.tsx"
    `);
    process.exit(0);
  }
  
  const [command, value] = args;
  
  switch (command) {
    case 'test-color':
      console.log(`Color: ${value} → ${convertHexToToken(value)}`);
      break;
      
    case 'test-spacing':
      console.log(`Spacing: ${value} → ${convertPixelToSpacing(value)}`);
      break;
      
    case 'migrate':
      if (fs.existsSync(value)) {
        migrateStoryFile(value);
      } else {
        console.log(`❌ File not found: ${value}`);
      }
      break;
      
    default:
      console.log(`Unknown command: ${command}`);
  }
}
