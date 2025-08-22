/**
 * Universal Icon Mapping for Heroicons Replacement
 * Maps all Phosphor icon usage to available Heroicons equivalents
 */

// Import all commonly used Heroicons
import { AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsHorizontalIcon as FilterIcon, ArchiveBoxIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, ArrowTrendingUpIcon, ArrowUpIcon, BellIcon, BoltIcon, BookOpenIcon, BuildingOfficeIcon, BuildingStorefrontIcon, CalendarIcon, CameraIcon, ChatBubbleLeftIcon, CheckCircleIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ClockIcon, CloudIcon, CogIcon, CurrencyDollarIcon, DocumentTextIcon, EnvelopeIcon, ExclamationCircleIcon, ExclamationTriangleIcon, FilterIcon, FireIcon, FlagIcon, GridIcon, HandThumbUpIcon, HeartIcon, HomeIcon, InformationCircleIcon, KeyIcon, ListBulletIcon, LockClosedIcon, LockOpenIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, PhoneIcon, PhotoIcon, PlusIcon, QuestionMarkCircleIcon, ReceiptPercentIcon, ShieldCheckIcon, ShoppingCartIcon, SpeakerWaveIcon, Squares2X2Icon as GridIcon, StarIcon, SunIcon, TacticalIcon, TagIcon, TrendingUpIcon, TrophyIcon, TruckIcon, UserCircleIcon, UserIcon, UsersIcon, VideoCameraIcon, WrenchScrewdriverIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Import tactical icons for specialized firearms categories
import { 
  tacticalIconMapping, 
  getTacticalIcon,
  type TacticalIconName 
} from './tactical-icons';

// Complete mapping from Phosphor names to Heroicons
export const iconMapping = {
  // Navigation & UI Icons
  'CaretRight': ChevronRightIcon,
  'CaretLeft': ChevronLeftIcon,
  'CaretDown': ChevronDownIcon,
  'CaretUp': ChevronUpIcon,
  'ArrowRight': ArrowRightIcon,
  'ArrowLeft': ArrowLeftIcon,
  'ArrowUp': ArrowUpIcon,
  'ArrowDown': ArrowDownIcon,
  'Plus': PlusIcon,
  'X': XMarkIcon,
  'XCircle': XCircleIcon,
  'Check': CheckIcon,
  'CheckCircle': CheckCircleIcon,
  
  // Business & Location Icons
  'MapPin': MapPinIcon,
  'Building': BuildingOfficeIcon,
  'House': HomeIcon,
  'Storefront': BuildingStorefrontIcon,
  
  // People & Social Icons
  'User': UserIcon,
  'Users': UsersIcon,
  'UserCircle': UserCircleIcon,
  
  // Communication Icons
  'Phone': PhoneIcon,
  'Envelope': EnvelopeIcon,
  'ChatCircle': ChatBubbleLeftIcon,
  'Bell': BellIcon,
  
  // Media & Content Icons
  'Camera': CameraIcon,
  'Image': PhotoIcon,
  'Video': VideoCameraIcon,
  'BookOpen': BookOpenIcon,
  'Book': BookOpenIcon,
  'Article': DocumentTextIcon,
  
  // Shopping & Commerce Icons
  'ShoppingCart': ShoppingCartIcon,
  'Package': ArchiveBoxIcon,
  'Tag': TagIcon,
  'CurrencyDollar': CurrencyDollarIcon,
  'Receipt': ReceiptPercentIcon,
  
  // Time & Calendar Icons
  'Calendar': CalendarIcon,
  'Clock': ClockIcon,
  'Timer': ClockIcon,
  
  // Status & Feedback Icons
  'Star': StarIcon,
  'Heart': HeartIcon,
  'ThumbsUp': HandThumbUpIcon,
  'Warning': ExclamationTriangleIcon,
  'WarningCircle': ExclamationCircleIcon,
  'Info': InformationCircleIcon,
  
  // Weather & Environment Icons
  'Sun': SunIcon,
  'CloudRain': CloudIcon,
  'Wind': BoltIcon,
  'Fire': FireIcon,
  'Lightning': BoltIcon,
  
  // Security & Protection Icons
  'Shield': ShieldCheckIcon,
  'ShieldCheck': ShieldCheckIcon,
  'Lock': LockClosedIcon,
  'LockOpen': LockOpenIcon,
  'Key': KeyIcon,
  
  // Tools & Equipment Icons
  'Wrench': WrenchScrewdriverIcon,
  'Gear': CogIcon,
  'Target': MapPinIcon, // No direct equivalent, using MapPin
  'Crosshair': MapPinIcon, // No direct equivalent, using MapPin
  
  // Awards & Achievement Icons
  'Trophy': TrophyIcon,
  'Medal': TrophyIcon,
  'Crown': TrophyIcon,
  'Certificate': AcademicCapIcon,
  'GraduationCap': AcademicCapIcon,
  'Student': AcademicCapIcon,
  
  // Transportation Icons
  'Truck': TruckIcon,
  'NavigationArrow': MapIcon,
  
  // Miscellaneous Icons
  'Flag': FlagIcon,
  'TrendUp': TrendingUpIcon,
  'TrendDown': TrendingUpIcon, // No direct equivalent
  'SpeakerHigh': SpeakerWaveIcon,
  'MagnifyingGlass': MagnifyingGlassIcon,
  'Binoculars': MagnifyingGlassIcon,
  'Coin': CurrencyDollarIcon,
  'SignOut': ArrowRightOnRectangleIcon,
  
  // View mode icons
  'GridFour': GridIcon,
  'List': ListBulletIcon,
  'FunnelSimple': FilterIcon,
  
  // Special cases that need aliases
  'AddressBook': BookOpenIcon,
  
  // ============================================================================
  // TACTICAL & FIREARMS SPECIFIC ICONS
  // Specialized icons for authentic firearms business categorization
  // ============================================================================
  
  // Business Category Icons
  'ShootingRange': tacticalIconMapping.ShootingRange,
  'Gunsmith': tacticalIconMapping.Gunsmith,
  'Training': tacticalIconMapping.Training,
  'TacticalRetail': tacticalIconMapping.TacticalRetail,
  'Retail': tacticalIconMapping.TacticalRetail, // Alias for retail
  'Club': tacticalIconMapping.Club,
  'TacticalServices': tacticalIconMapping.TacticalServices,
  'Services': tacticalIconMapping.TacticalServices, // Alias for services
  
  // Membership Tier Icons  
  'GoldPartner': tacticalIconMapping.GoldPartner,
  'SilverMember': tacticalIconMapping.SilverMember,
  'CopperMember': tacticalIconMapping.CopperMember,
  'StandardMember': tacticalIconMapping.StandardMember,
  'Standard': tacticalIconMapping.StandardMember, // Alias for standard
  
  // Sports Category Icons
  'RifleSports': tacticalIconMapping.RifleSports,
  'PistolSports': tacticalIconMapping.PistolSports,
  'ShotgunSports': tacticalIconMapping.ShotgunSports,
  'Archery': tacticalIconMapping.Archery,
  'Paintball': tacticalIconMapping.Paintball,
  'Airsoft': tacticalIconMapping.Airsoft,
  
  // Enhanced Target/Crosshair replacements with tactical icons
  'Target': tacticalIconMapping.ShootingRange, // Better than MapPin
  'Crosshair': tacticalIconMapping.ShootingRange, // Better than MapPin
} as const

// Combined type for all icon names (Heroicons + Tactical)
export type IconName = keyof typeof iconMapping
export type AllIconNames = IconName | TacticalIconName

// Enhanced helper function to get icon component (supports both libraries)
export const getIcon = (iconName: string) => {
  // First try the combined mapping
  const combinedIcon = iconMapping[iconName as IconName];
  if (combinedIcon) return combinedIcon;
  
  // Then try tactical icons directly
  const tacticalIcon = getTacticalIcon(iconName);
  if (tacticalIcon) return tacticalIcon;
  
  // Default fallback
  return InformationCircleIcon;
}

// Helper specifically for tactical icons
export const getTacticalIconComponent = getTacticalIcon;