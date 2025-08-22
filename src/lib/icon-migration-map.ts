/**
 * Comprehensive Icon Migration Map: Phosphor Icons → Heroicons
 * 
 * This mapping preserves the tactical aesthetic while optimizing for
 * bundle size and Tailwind ecosystem integration.
 */

export const ICON_MIGRATION_MAP = {
  // Navigation & Core UI  
  'AddressBook': 'UserGroupIcon',
  'Shield': 'ShieldCheckIcon', 
  'Target': 'MapPinIcon', // No BullseyeIcon in Heroicons, use MapPin as targeting icon
  'Storefront': 'BuildingStorefrontIcon',
  'BookOpen': 'BookOpenIcon',
  'Calendar': 'CalendarDaysIcon',
  'MapPin': 'MapPinIcon',
  'Phone': 'PhoneIcon',
  'Globe': 'GlobeAltIcon',
  'Buildings': 'BuildingOffice2Icon',
  'Users': 'UserGroupIcon',
  
  // Interactive Elements
  'ArrowRight': 'ArrowRightIcon',
  'CaretRight': 'ChevronRightIcon',
  'ChevronRight': 'ChevronRightIcon',
  'Plus': 'PlusIcon',
  'X': 'XMarkIcon',
  'Check': 'CheckIcon',
  'Minus': 'MinusIcon',
  
  // Actions & Interface
  'Eye': 'EyeIcon',
  'EyeSlash': 'EyeSlashIcon',
  'Heart': 'HeartIcon',
  'Star': 'StarIcon',
  'Clock': 'ClockIcon',
  'Lock': 'LockClosedIcon',
  'EnvelopeSimple': 'EnvelopeIcon',
  'User': 'UserIcon',
  'UserCircle': 'UserCircleIcon',
  'SignIn': 'ArrowRightOnRectangleIcon',
  'Monitor': 'ComputerDesktopIcon',
  
  // Content & Communication
  'FileText': 'DocumentTextIcon',
  'Quote': 'ChatBubbleLeftEllipsisIcon',
  'ChatsCircle': 'ChatBubbleLeftEllipsisIcon', // Use standard chat bubble
  'Info': 'InformationCircleIcon',
  'Warning': 'ExclamationTriangleIcon',
  'CheckCircle': 'CheckCircleIcon',
  
  // Business & Commerce
  'ShoppingBag': 'ShoppingBagIcon',
  'CreditCard': 'CreditCardIcon',
  'Money': 'BanknotesIcon',
  'Receipt': 'ReceiptRefundIcon',
  
  // Tools & Equipment
  'Wrench': 'WrenchScrewdriverIcon',
  'Gear': 'CogIcon', 
  'GraduationCap': 'AcademicCapIcon',
  'Lightning': 'BoltIcon',
  'Fire': 'FireIcon',
  
  // Location & Geography  
  'MapTrifold': 'MapIcon',
  'Compass': 'CompassIcon',
  'NavigationArrow': 'CursorArrowRaysIcon',
  
  // Media & Display
  'Image': 'PhotoIcon',
  'Play': 'PlayIcon',
  'Pause': 'PauseIcon',
  'Camera': 'CameraIcon',
  
  // Data & Analytics
  'TrendUp': 'ArrowTrendingUpIcon',
  'ChartBar': 'ChartBarIcon',
  'Trophy': 'TrophyIcon',
  'Scales': 'ScaleIcon',
  
  // Special Cases - Custom Replacements
  'Diamond': 'TacticalReticleLogo', // Our custom component!
  'Mountain': 'MapPinIcon', // Already fixed in intel page
}

export const IMPORT_REPLACEMENTS = {
  // Phosphor imports to Heroicons imports
  "import { AcademicCapIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, ArrowTrendingUpIcon, BanknotesIcon, BoltIcon, BookOpenIcon, BuildingStorefrontIcon, BullseyeIcon, CalendarDaysIcon, CameraIcon, ChartBarIcon, ChatBubbleLeftEllipsisIcon, CheckCircleIcon, CheckIcon, ChevronRightIcon, ClockIcon, CogIcon, CompassIcon, ComputerDesktopIcon, CreditCardIcon, CursorArrowRaysIcon, Diamond, DocumentTextIcon, EnvelopeIcon, ExclamationTriangleIcon, EyeIcon, EyeSlashIcon, FireIcon, GlobeAltIcon, HeartIcon, InformationCircleIcon, LockClosedIcon, MapIcon, MapPinIcon, MinusIcon, PauseIcon, PhoneIcon, PhotoIcon, PlayIcon, PlusIcon, ReceiptRefundIcon, ScaleIcon, ShieldCheckIcon, ShoppingBagIcon, StarIcon, TrophyIcon, UserCircleIcon, UserGroupIcon, UserIcon, WrenchScrewdriverIcon, XMarkIcon } from '@heroicons/react/24/outline'": 
    "import { TacticalReticleLogo } from '@/components/ui/tactical-reticle-logo'",
  
  "from '@heroicons/react/24/outline'": 
    "from '@heroicons/react/24/outline'",
    
  // Handle solid variants
  "from '@heroicons/react/24/outline/solid'": 
    "from '@heroicons/react/24/solid'",
}

export const WEIGHT_REPLACEMENTS = {
  // Phosphor weight props to Heroicons equivalents
  'weight="bold"': '', // Remove weight prop, use solid import instead
  'weight="fill"': '', // Remove weight prop, use solid import instead  
  'weight="regular"': '', // Remove weight prop (default)
  'weight="light"': '', // Remove weight prop
  'weight="thin"': '', // Remove weight prop
}

export const SIZE_STANDARDIZATION = {
  // Ensure consistent sizing with our design system
  'className="w-8 h-8': 'className="h-8 w-8',
  'className="w-6 h-6': 'className="h-6 w-6',
  'className="w-4 h-4': 'className="h-4 w-4',
  'className="w-5 h-5': 'className="h-5 w-5',
}

// Files to prioritize in migration (core components first)
export const MIGRATION_PRIORITY = [
  // Navigation (highest priority)
  'src/components/ui/site-navigation.tsx',
  'src/components/ui/site-footer.tsx',
  'src/components/ui/tactical-reticle-logo.tsx',
  
  // Recently unified components 
  'src/components/pages/directory-page-standardized.tsx',
  'src/components/pages/events-page-standardized.tsx', 
  'src/components/pages/marketplace-page-standardized.tsx',
  'src/components/pages/guides-page-standardized.tsx',
  'src/components/pages/armory-page-standardized.tsx',
  
  // Core UI components
  'src/components/ui/VendorCard.tsx',
  'src/components/ui/marketplace-deal-card.tsx',
  'src/components/ui/EventCard.tsx',
  'src/components/ui/button.tsx',
  'src/components/ui/badge.tsx',
  
  // Page components
  'src/app/page.tsx',
  'src/app/intel/page.tsx',
  'src/app/*/page.tsx',
]

export default ICON_MIGRATION_MAP