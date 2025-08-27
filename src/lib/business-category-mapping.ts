/**
 * Business Category Icon Mapping System
 * Maps Idaho firearms business types to appropriate tactical icons
 * Integrates with the existing Boise Gun Club design system
 */

import { AirsoftIcon, ArcheryIcon, CubeIcon, UserIcon, StarIcon, GunsmithIcon, PaintballIcon, PistolSportsIcon, RifleSportsIcon, ShootingRangeIcon, ShotgunSportsIcon, UserIcon, UserIcon, TacticalRetailIcon, TacticalServicesIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { getIcon } from './icon-mapping';
import { 
  ShootingRangeIcon,
  GunsmithIcon,
  AcademicCapIcon,
  TacticalRetailIcon,
  CubeIcon,
  TacticalServicesIcon,
  StarIcon,
  UserIcon,
  UserIcon,
  UserIcon,
  RifleSportsIcon,
  PistolSportsIcon,
  ShotgunSportsIcon,
  ArcheryIcon,
  PaintballIcon,
  AirsoftIcon
} from './tactical-icons';

// Business category definitions with icons and styling
export interface BusinessCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string; // Tailwind class for category color
  bgClass: string; // Background class for badges/cards
  examples: string[];
}

// Membership tier definitions
export interface MembershipTier {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  bgClass: string;
  benefits: string[];
  priority: number; // For sorting/display order
}

// Sports category definitions
export interface SportsCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  bgClass: string;
  disciplines: string[];
}

/**
 * ============================================================================
 * BUSINESS CATEGORIES
 * ============================================================================
 */

export const businessCategories: Record<string, BusinessCategory> = {
  shootingRange: {
    id: 'shooting-range',
    name: 'Shooting Ranges',
    description: 'Indoor and outdoor shooting facilities with rental equipment',
    icon: ShootingRangeIcon,
    colorClass: 'text-nav-armory',
    bgClass: 'bg-nav-armory/10 border-nav-armory/20',
    examples: [
      'Indoor pistol ranges',
      'Outdoor rifle ranges', 
      'Clay pigeon facilities',
      'Tactical training courses'
    ]
  },
  
  gunsmith: {
    id: 'gunsmith',
    name: 'Gunsmiths',
    description: 'Professional firearm repair, customization, and manufacturing',
    icon: GunsmithIcon,
    colorClass: 'text-nav-intel',
    bgClass: 'bg-nav-intel/10 border-nav-intel/20',
    examples: [
      'Custom rifle builds',
      'Precision barrel work',
      'Trigger modifications',
      'Restoration services'
    ]
  },
  
  training: {
    id: 'training',
    name: 'Training & Education',
    description: 'Professional firearms training and safety education',
    icon: AcademicCapIcon,
    colorClass: 'text-nav-events',
    bgClass: 'bg-nav-events/10 border-nav-events/20',
    examples: [
      'Concealed carry classes',
      'Hunter safety courses',
      'Tactical training',
      'Marksmanship instruction'
    ]
  },
  
  retail: {
    id: 'retail',
    name: 'Retail Stores',
    description: 'Licensed firearms dealers and sporting goods retailers',
    icon: TacticalRetailIcon,
    colorClass: 'text-nav-marketplace',
    bgClass: 'bg-nav-marketplace/10 border-nav-marketplace/20',
    examples: [
      'Gun stores',
      'Sporting goods stores',
      'Ammunition dealers',
      'Outdoor equipment retailers'
    ]
  },
  
  club: {
    id: 'club',
    name: 'Clubs & Organizations',
    description: 'Shooting clubs, hunting organizations, and firearms groups',
    icon: CubeIcon,
    colorClass: 'text-nav-forums',
    bgClass: 'bg-nav-forums/10 border-nav-forums/20',
    examples: [
      'Rifle and pistol clubs',
      'Hunting organizations',
      'Competitive shooting teams',
      'Military surplus groups'
    ]
  },
  
  services: {
    id: 'services',
    name: 'Professional Services',
    description: 'Specialized firearms-related professional services',
    icon: TacticalServicesIcon,
    colorClass: 'text-nav-directory',
    bgClass: 'bg-nav-directory/10 border-nav-directory/20',
    examples: [
      'Legal consultants',
      'Appraisal services',
      'Insurance specialists',
      'Transportation services'
    ]
  }
};

/**
 * ============================================================================
 * MEMBERSHIP TIERS
 * ============================================================================
 */

export const membershipTiers: Record<string, MembershipTier> = {
  goldPartner: {
    id: 'gold-partner',
    name: 'Gold Partners',
    description: 'Premium verified businesses with exclusive benefits',
    icon: StarIcon,
    colorClass: 'text-weathered-gold',
    bgClass: 'bg-weathered-gold/10 border-weathered-gold/30',
    priority: 1,
    benefits: [
      'Featured placement in search results',
      'Premium business profile with photos',
      'Direct customer messaging',
      'Event hosting capabilities',
      'Analytics and insights dashboard'
    ]
  },
  
  silverMember: {
    id: 'silver-member', 
    name: 'Silver Members',
    description: 'Verified businesses with enhanced visibility',
    icon: UserIcon,
    colorClass: 'text-warm-stone',
    bgClass: 'bg-warm-stone/10 border-warm-stone/30',
    priority: 2,
    benefits: [
      'Enhanced business profile',
      'Customer review responses',
      'Basic analytics',
      'Event listing capabilities'
    ]
  },
  
  copperMember: {
    id: 'copper-member',
    name: 'Copper Members', 
    description: 'Verified businesses with standard listing benefits',
    icon: UserIcon,
    colorClass: 'text-sandy-ochre',
    bgClass: 'bg-sandy-ochre/10 border-sandy-ochre/30',
    priority: 3,
    benefits: [
      'Verified business badge',
      'Standard business profile',
      'Customer contact information',
      'Basic event listings'
    ]
  },
  
  standard: {
    id: 'standard',
    name: 'Standard Listings',
    description: 'Basic verified business information',
    icon: UserIcon,
    colorClass: 'text-slate-blue',
    bgClass: 'bg-slate-blue/10 border-slate-blue/20',
    priority: 4,
    benefits: [
      'Basic contact information',
      'Hours and location',
      'Category classification'
    ]
  }
};

/**
 * ============================================================================
 * SPORTS CATEGORIES
 * ============================================================================
 */

export const sportsCategories: Record<string, SportsCategory> = {
  rifleSports: {
    id: 'rifle-sports',
    name: 'Rifle Sports',
    description: 'Precision rifle and long-range shooting disciplines',
    icon: RifleSportsIcon,
    colorClass: 'text-nav-armory',
    bgClass: 'bg-nav-armory/10 border-nav-armory/20',
    disciplines: [
      'Long-range precision',
      'F-Class competition',
      'Benchrest shooting',
      'Service rifle matches'
    ]
  },
  
  pistolSports: {
    id: 'pistol-sports',
    name: 'Pistol Sports',
    description: 'Handgun competitions and tactical pistol events',
    icon: PistolSportsIcon,
    colorClass: 'text-nav-events',
    bgClass: 'bg-nav-events/10 border-nav-events/20',
    disciplines: [
      'USPSA competition',
      'IDPA matches',
      'Bullseye precision',
      'Steel challenge'
    ]
  },
  
  shotgunSports: {
    id: 'shotgun-sports',
    name: 'Shotgun Sports',
    description: 'Clay target sports and wingshooter competitions',
    icon: ShotgunSportsIcon,
    colorClass: 'text-nav-marketplace',
    bgClass: 'bg-nav-marketplace/10 border-nav-marketplace/20',
    disciplines: [
      'Trap shooting',
      'Skeet competition',
      'Sporting clays',
      'Five stand'
    ]
  },
  
  archery: {
    id: 'archery',
    name: 'Archery',
    description: 'Traditional and competitive archery sports',
    icon: ArcheryIcon,
    colorClass: 'text-nav-intel',
    bgClass: 'bg-nav-intel/10 border-nav-intel/20',
    disciplines: [
      'CursorArrowRaysIcon archery',
      'Field archery', 
      'Traditional bow hunting',
      '3D archery competitions'
    ]
  },
  
  paintball: {
    id: 'paintball',
    name: 'Paintball',
    description: 'Paintball sports and tactical simulation games',
    icon: PaintballIcon,
    colorClass: 'text-nav-forums',
    bgClass: 'bg-nav-forums/10 border-nav-forums/20',
    disciplines: [
      'Speedball tournaments',
      'Woodsball scenarios',
      'Tactical simulations',
      'Recreational games'
    ]
  },
  
  airsoft: {
    id: 'airsoft',
    name: 'Airsoft',
    description: 'Airsoft sports and military simulation events',
    icon: AirsoftIcon,
    colorClass: 'text-nav-directory',
    bgClass: 'bg-nav-directory/10 border-nav-directory/20',
    disciplines: [
      'Military simulation (MilSim)',
      'Close quarters battle (CQB)',
      'Tactical team events',
      'CursorArrowRaysIcon shooting'
    ]
  }
};

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 */

// Get business category by ID
export const getBusinessCategory = (categoryId: string): BusinessCategory | null => {
  return businessCategories[categoryId] || null;
};

// Get membership tier by ID
export const getMembershipTier = (tierId: string): MembershipTier | null => {
  return membershipTiers[tierId] || null;
};

// Get sports category by ID  
export const getSportsCategory = (categoryId: string): SportsCategory | null => {
  return sportsCategories[categoryId] || null;
};

// Get all categories as arrays for iteration
export const getAllBusinessCategories = (): BusinessCategory[] => {
  return Object.values(businessCategories);
};

export const getAllMembershipTiers = (): MembershipTier[] => {
  return Object.values(membershipTiers).sort((a, b) => a.priority - b.priority);
};

export const getAllSportsCategories = (): SportsCategory[] => {
  return Object.values(sportsCategories);
};

// MagnifyingGlassIcon/filter helpers
export const searchBusinessCategories = (query: string): BusinessCategory[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllBusinessCategories().filter(category => 
    category.name.toLowerCase().includes(lowercaseQuery) ||
    category.description.toLowerCase().includes(lowercaseQuery) ||
    category.examples.some(example => example.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchSportsCategories = (query: string): SportsCategory[] => {
  const lowercaseQuery = query.toLowerCase();
  return getAllSportsCategories().filter(category =>
    category.name.toLowerCase().includes(lowercaseQuery) ||
    category.description.toLowerCase().includes(lowercaseQuery) ||
    category.disciplines.some(discipline => discipline.toLowerCase().includes(lowercaseQuery))
  );
};

// Auto-categorization helper (for directory imports)
export const suggestBusinessCategory = (businessName: string, businessType?: string): string => {
  const name = businessName.toLowerCase();
  const type = businessType?.toLowerCase() || '';
  
  // Shooting ranges
  if (name.includes('range') || name.includes('shooting') || type.includes('range')) {
    return 'shootingRange';
  }
  
  // Gunsmiths
  if (name.includes('gunsmith') || name.includes('custom') || type.includes('gunsmith')) {
    return 'gunsmith';
  }
  
  // Training
  if (name.includes('training') || name.includes('education') || name.includes('safety') || type.includes('training')) {
    return 'training';
  }
  
  // Clubs
  if (name.includes('club') || name.includes('association') || type.includes('club')) {
    return 'club';
  }
  
  // Default to retail for most FFLs
  return 'retail';
};