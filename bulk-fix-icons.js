const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const iconMappings = {
  'Menu': 'Bars3Icon',
  'X': 'XMarkIcon', 
  'Search': 'MagnifyingGlassIcon',
  'Settings': 'Cog6ToothIcon',
  'User': 'UserIcon',
  'Users': 'UsersIcon',
  'Users2': 'UsersIcon',
  'ArrowRight': 'ArrowRightIcon',
  'ArrowLeft': 'ArrowLeftIcon', 
  'ChevronDown': 'ChevronDownIcon',
  'ChevronRight': 'ChevronRightIcon',
  'ChevronLeft': 'ChevronLeftIcon',
  'ChevronUp': 'ChevronUpIcon',
  'Check': 'CheckIcon',
  'CheckCircle': 'CheckCircleIcon',
  'AlertTriangle': 'ExclamationTriangleIcon',
  'AlertCircle': 'ExclamationCircleIcon', 
  'Share2': 'ShareIcon',
  'Plus': 'PlusIcon',
  'Minus': 'MinusIcon',
  'FileText': 'DocumentTextIcon',
  'Mail': 'EnvelopeIcon',
  'MessageSquare': 'ChatBubbleBottomCenterTextIcon',
  'Building2': 'BuildingOffice2Icon',
  'Building': 'BuildingOfficeIcon',
  'ShoppingCart': 'ShoppingCartIcon',
  'Target': 'CursorArrowRaysIcon',
  'MapPin': 'MapPinIcon',
  'TrendingUp': 'ArrowTrendingUpIcon',
  'BarChart3': 'ChartBarIcon',
  'Calendar': 'CalendarIcon',
  'Bell': 'BellIcon',
  'Trophy': 'TrophyIcon',
  'Shield': 'ShieldCheckIcon',
  'Star': 'StarIcon',
  'Bookmark': 'BookmarkIcon',
  'Database': 'CircleStackIcon',
  'Zap': 'BoltIcon',
  'Megaphone': 'SpeakerWaveIcon',
  'Eye': 'EyeIcon',
  'EyeSlash': 'EyeSlashIcon',
  'Lock': 'LockClosedIcon',
  'Info': 'InformationCircleIcon',
  'Home': 'HomeIcon',
  'Camera': 'CameraIcon',
  'Download': 'ArrowDownTrayIcon',
  'Upload': 'ArrowUpTrayIcon',
  'ExternalLink': 'ArrowTopRightOnSquareIcon',
  'Clock': 'ClockIcon',
  'Award': 'TrophyIcon'
};

// Critical files to fix first
const criticalFiles = [
  'src/components/auth/auth-modal.tsx',
  'src/components/marketing/service-grid.tsx',
  'src/lib/data/brand-carousel-data.tsx',
  'src/lib/data/home-page-data.tsx',
  'src/app/directory/verification/page.tsx',
  'src/app/components-demo/page.tsx'
];

function fixIconImports(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Fix import statements
  const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@heroicons\/react\/24\/outline['"]/g;
  
  content = content.replace(importRegex, (match, iconList) => {
    const icons = iconList.split(',').map(icon => icon.trim());
    const fixedIcons = icons.map(icon => {
      // Handle aliased imports like "Icon as Alias"
      const aliasMatch = icon.match(/^(.+?)\s+as\s+(.+)$/);
      if (aliasMatch) {
        const [, originalName, aliasName] = aliasMatch;
        const fixedName = iconMappings[originalName.trim()] || originalName.trim();
        return `${fixedName} as ${aliasName.trim()}`;
      } else {
        const fixedName = iconMappings[icon] || icon;
        if (iconMappings[icon]) {
          changed = true;
          return `${fixedName} as ${icon}`;
        }
        return icon;
      }
    });
    
    return `import { ${fixedIcons.join(', ')} } from '@heroicons/react/24/outline'`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`No changes needed: ${filePath}`);
  }
}

// Fix critical files
criticalFiles.forEach(file => {
  const fullPath = path.join('/home/sdusk/dev/repositories/client-projects/theboisegunclub', file);
  fixIconImports(fullPath);
});

console.log('Bulk icon fixes completed!');