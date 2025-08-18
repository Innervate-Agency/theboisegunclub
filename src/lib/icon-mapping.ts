/**
 * Universal Icon Mapping for Heroicons Replacement
 * Maps all Phosphor icon usage to available Heroicons equivalents
 */

// Import all commonly used Heroicons
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PlusIcon,
  XMarkIcon,
  CheckIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  UsersIcon,
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  CameraIcon,
  PhotoIcon,
  VideoCameraIcon,
  BookOpenIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
  HeartIcon,
  HandThumbUpIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
  CloudIcon,
  BoltIcon,
  FireIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  LockOpenIcon,
  KeyIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  QuestionMarkCircleIcon,
  ArrowTrendingUpIcon,
  SpeakerWaveIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon,
  MapIcon,
  TagIcon,
  Squares2X2Icon as GridIcon,
  ListBulletIcon,
  AdjustmentsHorizontalIcon as FilterIcon
} from "@heroicons/react/24/outline"

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
} as const

// Type for icon names
export type IconName = keyof typeof iconMapping

// Helper function to get icon component
export const getIcon = (iconName: string) => {
  return iconMapping[iconName as IconName] || InformationCircleIcon // Default fallback
}