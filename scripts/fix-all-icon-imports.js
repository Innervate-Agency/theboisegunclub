#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all available Heroicons from node_modules
const getAvailableHeroicons = () => {
  const iconDir = 'node_modules/@heroicons/react/24/outline';
  const iconFiles = fs.readdirSync(iconDir).filter(file => file.endsWith('.js'));
  return iconFiles.map(file => file.replace('.js', ''));
};

const availableIcons = getAvailableHeroicons();
console.log(`📦 Found ${availableIcons.length} available Heroicons`);

// Smart mapping for common icon replacements
const iconReplacements = {
  // Phosphor Icons to Heroicons
  'Eye': 'EyeIcon',
  'EyeSlash': 'EyeSlashIcon', 
  'Play': 'PlayIcon',
  'Pause': 'PauseIcon',
  'DotsThree': 'EllipsisHorizontalIcon',
  'List': 'ListBulletIcon',
  'SquaresFour': 'Squares2X2Icon',
  'GridFour': 'Squares2X2Icon',
  'SortAscending': 'ArrowUpIcon',
  'Handshake': 'HandRaisedIcon',
  'ChatsCircle': 'ChatBubbleLeftRightIcon',
  'StarFour': 'StarIcon',
  'PencilSimple': 'PencilIcon',
  'Ticket': 'TicketIcon',
  'Diamond': 'Squares2X2Icon',
  'Quote': 'ChatBubbleLeftIcon',
  'ShareNetwork': 'ShareIcon',
  'Bookmark': 'BookmarkIcon',
  'Minus': 'MinusIcon',
  'Database': 'CircleStackIcon',
  'CloudSun': 'SunIcon',
  'Ranking': 'TrophyIcon',
  'Gauge': 'ChartBarIcon',
  'Monitor': 'ComputerDesktopIcon',
  'SignIn': 'ArrowRightOnRectangleIcon',
  
  // Fix common typos
  'InformationCircleIconrmationCircleIcon': 'InformationCircleIcon',
  'EnvelopeIconSimple': 'EnvelopeIcon',
  
  // Fix wrong library imports (HiOutline prefix errors)
  'HiOutlineOfficeBuildingOfficeIcon2': 'BuildingOffice2Icon',
  'HiOutlineLocationMarker': 'MapPinIcon',
  'HiOutlineUserGroup': 'UsersIcon',
  'HiOutlineShieldCheckIcon': 'ShieldCheckIcon',
  
  // Pluralization fixes
  'BuildingOfficeIcons': 'BuildingOfficeIcon',
  'TagIcons': 'TagIcon',
  'CogIcons': 'CogIcon',
  'CalendarIcons': 'CalendarIcon'
};

// Find the closest Heroicon match for unknown icons
const findClosestIcon = (badIcon) => {
  // Remove common suffixes/prefixes to find base name
  let baseName = badIcon
    .replace(/^HiOutline/, '')
    .replace(/Icon$/, '')
    .replace(/s$/, ''); // Remove plural
  
  // Try exact match first
  const exactMatch = availableIcons.find(icon => 
    icon.toLowerCase().includes(baseName.toLowerCase())
  );
  if (exactMatch) return exactMatch;
  
  // Try partial matches with keywords
  const keywords = {
    'office': 'BuildingOfficeIcon',
    'building': 'BuildingOfficeIcon', 
    'location': 'MapPinIcon',
    'map': 'MapPinIcon',
    'user': 'UsersIcon',
    'group': 'UsersIcon',
    'shield': 'ShieldCheckIcon',
    'check': 'CheckIcon',
    'circle': 'CircleStackIcon',
    'arrow': 'ArrowRightIcon',
    'chevron': 'ChevronRightIcon',
    'plus': 'PlusIcon',
    'minus': 'MinusIcon',
    'x': 'XMarkIcon',
    'star': 'StarIcon',
    'heart': 'HeartIcon',
    'home': 'HomeIcon',
    'search': 'MagnifyingGlassIcon',
    'mail': 'EnvelopeIcon',
    'phone': 'PhoneIcon',
    'camera': 'CameraIcon',
    'video': 'VideoCameraIcon',
    'calendar': 'CalendarIcon',
    'clock': 'ClockIcon',
    'book': 'BookOpenIcon',
    'document': 'DocumentTextIcon',
    'folder': 'FolderIcon',
    'trash': 'TrashIcon',
    'pencil': 'PencilIcon',
    'cog': 'CogIcon',
    'gear': 'CogIcon'
  };
  
  for (const [keyword, replacement] of Object.entries(keywords)) {
    if (baseName.toLowerCase().includes(keyword)) {
      return replacement;
    }
  }
  
  // Default fallback
  return 'QuestionMarkCircleIcon';
};

// Process a single file
const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Find all import statements from heroicons
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*["']@heroicons\/react\/24\/outline["']/g;
  
  content = content.replace(importRegex, (match, importList) => {
    const imports = importList.split(',').map(imp => imp.trim());
    const fixedImports = [];
    
    imports.forEach(imp => {
      // Handle aliases (Icon as Alias)
      const aliasMatch = imp.match(/^(.+?)\s+as\s+(.+?)$/);
      if (aliasMatch) {
        const [, iconName, alias] = aliasMatch;
        const cleanIconName = iconName.trim();
        
        if (!availableIcons.includes(cleanIconName)) {
          const replacement = iconReplacements[cleanIconName] || findClosestIcon(cleanIconName);
          console.log(`🔄 ${filePath}: ${cleanIconName} as ${alias} → ${replacement} as ${alias}`);
          fixedImports.push(`${replacement} as ${alias}`);
          modified = true;
        } else {
          fixedImports.push(imp);
        }
      } else {
        const cleanIconName = imp.trim();
        if (!availableIcons.includes(cleanIconName)) {
          const replacement = iconReplacements[cleanIconName] || findClosestIcon(cleanIconName);
          console.log(`🔄 ${filePath}: ${cleanIconName} → ${replacement}`);
          fixedImports.push(replacement);
          modified = true;
        } else {
          fixedImports.push(imp);
        }
      }
    });
    
    return `import {\n  ${fixedImports.join(',\n  ')}\n} from "@heroicons/react/24/outline"`;
  });
  
  return { content, modified };
};

// Find all TypeScript/React files with heroicon imports
const findFilesWithHeroicons = (dir = 'src') => {
  const files = [];
  
  const traverse = (currentDir) => {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('@heroicons/react/24/outline')) {
          files.push(fullPath);
        }
      }
    });
  };
  
  traverse(dir);
  return files;
};

// Main execution
const main = () => {
  console.log('🚀 Starting comprehensive Heroicons import fix...\n');
  
  const files = findFilesWithHeroicons();
  console.log(`📄 Found ${files.length} files with Heroicons imports\n`);
  
  let totalModified = 0;
  
  files.forEach(file => {
    const { content, modified } = processFile(file);
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      totalModified++;
    }
  });
  
  console.log(`\n✅ Complete! Modified ${totalModified} files`);
  console.log(`📦 All icons now use valid Heroicons from the ${availableIcons.length} available icons`);
  console.log(`🎯 Your dev server should now work without undefined component errors!`);
};

main();