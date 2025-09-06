/**
 * Universal Icon Mapping for Heroicons Replacement
 * Maps all Phosphor icon usage to available Heroicons equivalents
 */

// Import all commonly used Heroicons
import { AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsHorizontalIcon as FilterIcon, ArchiveBoxIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowRightOnRectangleIcon, ArrowTrendingUpIcon, ArrowUpIcon, BellIcon, BoltIcon, BookOpenIcon, BuildingOfficeIcon, BuildingStorefrontIcon, CalendarIcon, CameraIcon, ChatBubbleLeftIcon, CheckCircleIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ClockIcon, CloudIcon, CogIcon, CurrencyDollarIcon, DocumentTextIcon, EnvelopeIcon, ExclamationCircleIcon, ExclamationTriangleIcon, FilterIcon, FireIcon, FlagIcon, GridIcon, HandThumbUpIcon, HeartIcon, HomeIcon, InformationCircleIcon, KeyIcon, ListBulletIcon, LockClosedIcon, LockOpenIcon, MagnifyingGlassIcon, MapIcon, MapPinIcon, PhoneIcon, PhotoIcon, PlusIcon, QuestionMarkCircleIcon, ReceiptPercentIcon, ShieldCheckIcon, ShoppingCartIcon, SpeakerWaveIcon, Squares2X2Icon as GridIcon, StarIcon, SunIcon, TacticalIcon, TagIcon, TrendingUpIcon, TrophyIcon, TruckIcon, UserEllipsisHorizontalIcon, UserIcon, UsersIcon, VideoCameraIcon, WrenchScrewdriverIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Import tactical icons for specialized firearms categories
import { 
  tacticalIconMapping, 
  getTacticalIcon,
  type TacticalIconName 
} from './site-icons';

// Complete mapping from Phosphor names to Heroicons
export const iconMapping = {
  // Navigation & UI Icons
  'ChevronRightIcon': ChevronRightIcon,
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
  'CheckCircleIcon': CheckCircleIcon,
  
  // Business & Location Icons
  'MapPinIcon': MapPinIcon,
  'BuildingOfficeIcon': BuildingOfficeIcon,
  'House': HomeIcon,
  'BuildingStorefrontIcon': BuildingStorefrontIcon,
  
  // People & Social Icons
  'User': UserIcon,
  'UsersIcon': UsersIcon,
  'UserCircle': UserEllipsisHorizontalIcon,
  
  // Communication Icons
  'Phone': PhoneIcon,
  'Envelope': EnvelopeIcon,
  'ChatCircle': ChatBubbleLeftIcon,
  'Bell': BellIcon,
  
  // Media & Content Icons
  'Camera': CameraIcon,
  'Image': PhotoIcon,
  'Video': VideoCameraIcon,
  'BookOpenIcon': BookOpenIcon,
  'Book': BookOpenIcon,
  'Article': DocumentTextIcon,
  
  // Shopping & Commerce Icons
  'ShoppingCartIcon': ShoppingCartIcon,
  'ArchiveBoxIcon': ArchiveBoxIcon,
  'TagIcon': TagIcon,
  'CurrencyDollarIcon': CurrencyDollarIcon,
  'Receipt': ReceiptPercentIcon,
  
  // Time & CalendarDaysIcon Icons
  'CalendarDaysIcon': CalendarIcon,
  'ClockIcon': ClockIcon,
  'Timer': ClockIcon,
  
  // Status & Feedback Icons
  'StarIcon': StarIcon,
  'HeartIcon': HeartIcon,
  'ThumbsUp': HandThumbUpIcon,
  'Warning': ExclamationTriangleIcon,
  'WarningCircle': ExclamationCircleIcon,
  'InformationCircleIcon': InformationCircleIcon,
  
  // Weather & Environment Icons
  'SunIcon': SunIcon,
  'CloudRain': CloudIcon,
  'WindIcon': BoltIcon,
  'FireIcon': FireIcon,
  'Lightning': BoltIcon,
  
  // Security & Protection Icons
  'ShieldCheckIcon': ShieldCheckIcon,
  'ShieldCheck': ShieldCheckIcon,
  'Lock': LockClosedIcon,
  'LockOpen': LockOpenIcon,
  'Key': KeyIcon,
  
  // Tools & Equipment Icons
  'WrenchScrewdriverIcon': WrenchScrewdriverIcon,
  'Gear': CogIcon,
  'CursorArrowRaysIcon': MapPinIcon, // No direct equivalent, using MapPinIcon
  'Crosshair': MapPinIcon, // No direct equivalent, using MapPinIcon
  
  // Awards & Achievement Icons
  'Trophy': TrophyIcon,
  'Medal': TrophyIcon,
  'StarIcon': TrophyIcon,
  'Certificate': AcademicCapIcon,
  'GraduationCap': AcademicCapIcon,
  'Student': AcademicCapIcon,
  
  // Transportation Icons
  'Truck': TruckIcon,
  'NavigationArrow': MapIcon,
  
  // Miscellaneous Icons
  'Flag': FlagIcon,
  'ArrowTrendingUpIcon': TrendingUpIcon,
  'TrendDown': TrendingUpIcon, // No direct equivalent
  'SpeakerHigh': SpeakerWaveIcon,
  'MagnifyingGlass': MagnifyingGlassIcon,
  'Binoculars': MagnifyingGlassIcon,
  'Coin': CurrencyDollarIcon,
  'SignOut': ArrowRightOnRectangleIcon,
  
  // View mode icons
  'GridFour': GridIcon,
  'ListBulletIcon': ListBulletIcon,
  'FunnelSimple': FilterIcon,
  
  // Special cases that need aliases
  'BookOpenIcon': BookOpenIcon,
  
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
  
  // Enhanced CursorArrowRaysIcon/Crosshair replacements with tactical icons
  'CursorArrowRaysIcon': tacticalIconMapping.ShootingRange, // Better than MapPinIcon
  'Crosshair': tacticalIconMapping.ShootingRange, // Better than MapPinIcon
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