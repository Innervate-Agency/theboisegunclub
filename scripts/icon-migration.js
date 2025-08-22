#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Simple but comprehensive icon mapping
const iconMap = {
  // Phosphor
  'House': 'HomeIcon',
  'Calendar': 'CalendarIcon',
  'MapPin': 'MapPinIcon',
  'Users': 'UsersIcon',
  'ShoppingCart': 'ShoppingCartIcon',
  'ChatCircle': 'ChatBubbleLeftRightIcon',
  'MagnifyingGlass': 'MagnifyingGlassIcon',
  'User': 'UserIcon',
  'SignOut': 'ArrowRightOnRectangleIcon',
  'Gear': 'Cog6ToothIcon',
  'Bell': 'BellIcon',
  'Heart': 'HeartIcon',
  'Star': 'StarIcon',
  'Check': 'CheckIcon',
  'X': 'XMarkIcon',
  'Plus': 'PlusIcon',
  'Minus': 'MinusIcon',
  'ArrowRight': 'ArrowRightIcon',
  'ArrowLeft': 'ArrowLeftIcon',
  'ChevronRight': 'ChevronRightIcon',
  'ChevronLeft': 'ChevronLeftIcon',
  'ChevronDown': 'ChevronDownIcon',
  'ChevronUp': 'ChevronUpIcon',
  'Phone': 'PhoneIcon',
  'Envelope': 'EnvelopeIcon',
  'Clock': 'ClockIcon',
  'Warning': 'ExclamationTriangleIcon',
  'Info': 'InformationCircleIcon',
  'Target': 'CursorArrowRaysIcon',
  'Trophy': 'TrophyIcon',
  'Shield': 'ShieldCheckIcon',
  'Fire': 'FireIcon',
  'Eye': 'EyeIcon',
  'EyeSlash': 'EyeSlashIcon',
  'Lock': 'LockClosedIcon',
  'Download': 'ArrowDownTrayIcon',
  'Upload': 'ArrowUpTrayIcon',
  'Trash': 'TrashIcon',
  'PencilSimple': 'PencilIcon',
  'List': 'ListBulletIcon',
  'Funnel': 'FunnelIcon',
  'Crosshair': 'CursorArrowRaysIcon',
  
  // Lucide
  'Home': 'HomeIcon',
  'Search': 'MagnifyingGlassIcon',
  'Settings': 'Cog6ToothIcon',
  'LogOut': 'ArrowRightOnRectangleIcon',
  'Mail': 'EnvelopeIcon',
  'AlertTriangle': 'ExclamationTriangleIcon',
  'Edit': 'PencilIcon',
  'Trash2': 'TrashIcon',
  'ExternalLink': 'ArrowTopRightOnSquareIcon',
  'Menu': 'Bars3Icon',
  'MoreHorizontal': 'EllipsisHorizontalIcon',
  'Loader': 'ArrowPathIcon',
  'RefreshCw': 'ArrowPathIcon',
  'Zap': 'BoltIcon',
  'Award': 'TrophyIcon',
  'Flame': 'FireIcon',
  'Sun': 'SunIcon',
  'Moon': 'MoonIcon',
  'Filter': 'FunnelIcon',
  'Grid': 'Squares2X2Icon',
  'Database': 'CircleStackIcon',
  'Activity': 'ChartBarIcon',
  'Gift': 'GiftIcon',
  'Globe': 'GlobeAltIcon',
  'Layers': 'Square3Stack3DIcon',
  'Tag': 'TagIcon',
  'TrendingUp': 'ArrowTrendingUpIcon',
  'Wrench': 'WrenchIcon'
};

let filesProcessed = 0;
let iconsReplaced = 0;

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace Phosphor imports
  if (content.includes('@phosphor-icons/react')) {
    content = content.replace(/@phosphor-icons\/react/g, '@heroicons/react/24/outline');
    modified = true;
  }
  
  // Replace Lucide imports
  if (content.includes('lucide-react')) {
    content = content.replace(/lucide-react/g, '@heroicons/react/24/outline');
    modified = true;
  }
  
  // Replace icon names in JSX
  Object.entries(iconMap).forEach(([old, hero]) => {
    const regex = new RegExp(`<${old}([\\s/>])`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `<${hero}$1`);
      iconsReplaced++;
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesProcessed++;
    return true;
  }
  return false;
}

// Find all TSX/TS files
function findFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['node_modules', '.next', '.git'].includes(item)) {
      findFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  });
  return files;
}

console.log('🔄 Starting icon migration...\n');
const files = findFiles('src');
console.log(`Found ${files.length} files to process\n`);

files.forEach(file => {
  if (migrateFile(file)) {
    console.log(`✅ ${path.relative(process.cwd(), file)}`);
  }
});

console.log(`\n✨ Migration complete!`);
console.log(`   Files modified: ${filesProcessed}`);
console.log(`   Icons replaced: ${iconsReplaced}`);
