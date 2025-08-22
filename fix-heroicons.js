const fs = require('fs');
const path = require('path');

// Get all available Heroicons
const heroicons = require('@heroicons/react/24/outline');
const availableIcons = Object.keys(heroicons);

console.log(`Found ${availableIcons.length} available Heroicons`);

// Common icon mappings for icons that don't exist in Heroicons
const iconMappings = {
  // Basic UI
  'Menu': 'Bars3Icon',
  'X': 'XMarkIcon',
  'Search': 'MagnifyingGlassIcon',
  'Settings': 'Cog6ToothIcon',
  'User': 'UserIcon',
  'Users': 'UsersIcon',
  'Home': 'HomeIcon',
  'Calendar': 'CalendarIcon',
  'Info': 'InformationCircleIcon',
  
  // Arrows and Navigation
  'ArrowRight': 'ArrowRightIcon',
  'ArrowLeft': 'ArrowLeftIcon',
  'ChevronDown': 'ChevronDownIcon',
  'ChevronRight': 'ChevronRightIcon',
  'ChevronLeft': 'ChevronLeftIcon',
  'ChevronUp': 'ChevronUpIcon',
  
  // Actions
  'Check': 'CheckIcon',
  'CheckCircle': 'CheckCircleIcon',
  'AlertTriangle': 'ExclamationTriangleIcon',
  'AlertCircle': 'ExclamationCircleIcon',
  'Share2': 'ShareIcon',
  'Download': 'ArrowDownTrayIcon',
  'Upload': 'ArrowUpTrayIcon',
  'Plus': 'PlusIcon',
  'Minus': 'MinusIcon',
  
  // Content
  'FileText': 'DocumentTextIcon',
  'Bookmark': 'BookmarkIcon',
  'Star': 'StarIcon',
  'Heart': 'HeartIcon',
  'Eye': 'EyeIcon',
  'EyeSlash': 'EyeSlashIcon',
  
  // Communication
  'Mail': 'EnvelopeIcon',
  'MessageSquare': 'ChatBubbleBottomCenterTextIcon',
  'Bell': 'BellIcon',
  
  // Business/Commerce  
  'Building2': 'BuildingOffice2Icon',
  'Building': 'BuildingOfficeIcon',
  'ShoppingCart': 'ShoppingCartIcon',
  'Store': 'BuildingStorefrontIcon',
  'Storefront': 'BuildingStorefrontIcon',
  
  // Media/Content
  'Camera': 'CameraIcon',
  'Image': 'PhotoIcon',
  'Video': 'VideoCameraIcon',
  'Play': 'PlayIcon',
  'Pause': 'PauseIcon',
  
  // Tools/Utilities
  'Shield': 'ShieldCheckIcon',
  'Lock': 'LockClosedIcon',
  'Unlock': 'LockOpenIcon',
  'Key': 'KeyIcon',
  'Wrench': 'WrenchIcon',
  'Gear': 'Cog6ToothIcon',
  
  // Sports/Activity (for gun site)
  'Target': 'CursorArrowRaysIcon',
  'Crosshair': 'CursorArrowRaysIcon',
  'Trophy': 'TrophyIcon',
  'Award': 'TrophyIcon',
  'Medal': 'TrophyIcon',
  
  // Location/Map
  'MapPin': 'MapPinIcon',
  'Map': 'MapIcon',
  'Navigation': 'ArrowUpIcon',
  'Compass': 'CompassIcon',
  
  // Data/Analytics
  'TrendingUp': 'ArrowTrendingUpIcon',
  'TrendingDown': 'ArrowTrendingDownIcon',
  'BarChart3': 'ChartBarIcon',
  'Database': 'CircleStackIcon',
  
  // Accessibility
  'Accessibility': 'UserIcon',
  'Type': 'DocumentTextIcon',
  'Monitor': 'ComputerDesktopIcon',
  'Contrast': 'SwatchIcon',
  
  // Weather
  'Sun': 'SunIcon',
  'Moon': 'MoonIcon',
  'Cloud': 'CloudIcon',
  'CloudRain': 'CloudIcon',
  
  // Misc
  'Circle': 'CircleStackIcon',
  'Square': 'SquaresPlusIcon',
  'Diamond': 'CubeTransparentIcon',
  'Zap': 'BoltIcon',
  'Fire': 'FireIcon',
  'Flame': 'FireIcon'
};

console.log('Icon mappings created');
console.log('Available mappings:', Object.keys(iconMappings).length);

// Function to check if icon exists
function iconExists(iconName) {
  return availableIcons.includes(iconName);
}

// List icons that need mapping
const problematicIcons = [
  'Menu', 'X', 'Search', 'Settings', 'User', 'Users', 'ArrowRight', 'ChevronDown', 
  'Check', 'AlertTriangle', 'Share2', 'Plus', 'FileText', 'Mail', 'MessageSquare',
  'Building2', 'ShoppingCart', 'Target', 'MapPin', 'TrendingUp', 'BarChart3'
];

console.log('\nChecking problematic icons:');
problematicIcons.forEach(icon => {
  const mapped = iconMappings[icon];
  const exists = iconExists(mapped);
  console.log(`${icon} -> ${mapped} (${exists ? 'EXISTS' : 'MISSING'})`);
});