/**
import { BookOpenIcon, CalendarDaysIcon, CalendarIcon, CubeTransparentIcon, FilterIcon, GamePistolIcon, GameRifleIcon, GameTargetIcon, ShoppingCartIcon, UsersIcon, WrenchIcon } from '@heroicons/react/24/outline'
 * Tactical Filter Icon System
 * Meaningful, geometric icons for shooting sports filters
 * Uses game-icons, lucide, tabler, and heroicons for appropriate representations
 */

import React from 'react';

import {
  IconBullseye,
  IconCircleDot,
  IconCircle,
  IconSquare,
  IconTriangle,
  IconHexagon,
  IconOctagon,
  IconCrosshair,
  IconStack3,
  IconArrowsLeftRight,
  IconArrowsSplit,
  IconArrowsJoin,
  CubeTransparentIcon,
  IconStarFilled,
  IconStar,
  IconCircles,
  IconGrid3x3,
  IconList,
} from '@tabler/icons-react';

// Import existing game icons
import { 
  GameTargetIcon, 
  GameRifleIcon, 
  GamePistolIcon 
} from './game-icons-logos';

/**
 * Discipline Category Icons - Meaningful representations
 */
export const DisciplineIcons = {
  // Main Categories
  'pistol-rifle': GameTargetIcon, // Bullseye target - universal shooting symbol
  '3gun': IconStack3, // Three stacked elements representing multi-gun
  'trap': IconTriangle, // Triangle pointing up (clay trajectory)
  'skeet': IconCrosshair, // Intersecting paths for crossing clays
  'sporting-clays': IconCircles, // Multiple targets/stations
  'cowboy-action': IconStarFilled, // Western star
  'leagues-misc': IconGrid3x3, // Grid for organized activities

  // Pistol & Rifle Sub-disciplines
  'uspsa': IconBullseye, // Precision target
  'idpa': IconCircleDot, // Center dot target
  'prs': IconHexagon, // Precision geometry
  'steel': IconOctagon, // Steel target shape
  'nrl22': IconCircle, // Simple rimfire target
  'benchrest': CubeTransparentIcon, // Precision diamond

  // 3-Gun Sub-disciplines  
  '3gun': IconStack3, // Three weapons stacked
  '2gun': IconArrowsLeftRight, // Two weapon transition
  'multigun': IconArrowsSplit, // Multiple weapon paths

  // Trap Sub-disciplines
  'ata-trap': IconTriangle, // Standard trap trajectory
  'pita-trap': IconTriangle, // Same family
  'continental': CubeTransparentIcon, // Olympic precision
  'wobble-trap': IconArrowsJoin, // Variable trajectory

  // Skeet Sub-disciplines
  'american-skeet': IconCrosshair, // Standard crossing
  '5stand': IconCircles, // Multiple stations
  'international-skeet': IconHexagon, // International precision

  // Sporting Clays Sub-disciplines
  'nsca-sporting': IconCircles, // Multiple targets
  'fitasc': IconOctagon, // International precision
  'super-sporting': IconBullseye, // Premium precision

  // Cowboy Action Sub-disciplines
  'sass': IconStarFilled, // Official SASS
  'cowboy-general': IconStar, // General cowboy
  'western-events': IconStar, // Western theme

  // Leagues & Misc Sub-disciplines
  'league': CalendarIcon, // Scheduled events
  'training': BookOpenIcon, // Education
  'expo': ShoppingCartIcon, // Commercial events
  'fun-shoots': UsersIcon, // Social gatherings
  'charity': IconStarFilled // Special events
};

/**
 * Skill Level Icons - Progressive complexity
 */
export const SkillLevelIcons = {
  'beginner': CheckCircleIcon, // Simple check - you can do this
  'intermediate': IconCircleDot, // Centered dot - focused improvement
  'advanced': IconBullseye, // Bullseye - precision required
  'all-levels': IconCircles, // Multiple levels welcome
  'youth': IconStar // Special recognition
};

/**
 * Equipment Type Icons - Geometric weapon representations
 */
export const EquipmentIcons = {
  'pistol': IconCircle, // Simple, compact
  'rifle': IconArrowsLeftRight, // Extended length
  'shotgun': IconOctagon, // Wider pattern
  'multigun': IconStack3, // Multiple firearms
  'rimfire': IconCircleDot, // Small caliber precision
  'centerfire': IconBullseye // Full power precision
};

/**
 * Match Level Icons - Hierarchical progression
 */
export const MatchLevelIcons = {
  'club': IconCircle, // Local/basic
  'state': IconSquare, // Regional authority
  'regional': IconHexagon, // Multi-state
  'national': IconOctagon, // Top tier
  'special': IconStarFilled // Unique events
};

/**
 * Registration Status Icons - Clear status indicators
 */
export const RegistrationIcons = {
  'open': CheckCircleIcon, // Available - green light
  'closing': ExclamationTriangleIcon, // Warning - time running out
  'waitlist': ClockIcon, // Waiting - time/patience needed
  'walkins': Infinity // Always available
};

/**
 * Icon Component Factory
 * Returns the appropriate icon component for a given category and type
 */
export const getFilterIcon = (
  category: 'discipline' | 'skillLevel' | 'equipment' | 'matchLevel' | 'registration',
  type: string
): React.ComponentType<{ className?: string }> => {
  let icon: React.ComponentType<{ className?: string }> | undefined;
  
  switch (category) {
    case 'discipline':
      icon = DisciplineIcons[type as keyof typeof DisciplineIcons];
      break;
    case 'skillLevel':
      icon = SkillLevelIcons[type as keyof typeof SkillLevelIcons];
      break;
    case 'equipment':
      icon = EquipmentIcons[type as keyof typeof EquipmentIcons];
      break;
    case 'matchLevel':
      icon = MatchLevelIcons[type as keyof typeof MatchLevelIcons];
      break;
    case 'registration':
      icon = RegistrationIcons[type as keyof typeof RegistrationIcons];
      break;
  }
  
  // Fallback to safe icons if the requested icon is undefined
  if (!icon) {
    switch (category) {
      case 'discipline':
        return GameTargetIcon;
      case 'skillLevel':
        return CheckCircleIcon;
      case 'equipment':
        return IconCircle;
      case 'matchLevel':
        return IconCircle;
      case 'registration':
        return CheckCircleIcon;
      default:
        return IconCircle;
    }
  }
  
  return icon;
};

/**
 * Color mapping for tactical theming
 */
export const getIconColor = (
  category: 'discipline' | 'skillLevel' | 'equipment' | 'matchLevel' | 'registration',
  type: string
): string => {
  switch (category) {
    case 'discipline':
      // Use shooting sport specific colors
      if (type.includes('uspsa') || type.includes('idpa') || type.includes('pistol-rifle')) {
        return 'text-nav-events';
      }
      if (type.includes('3gun') || type.includes('multigun')) {
        return 'text-rusty-orange';
      }
      if (type.includes('trap') || type.includes('skeet') || type.includes('sporting')) {
        return 'text-nav-buysell';
      }
      if (type.includes('cowboy') || type.includes('sass')) {
        return 'text-sandy-ochre';
      }
      return 'text-nav-forums';

    case 'skillLevel':
      // Progressive difficulty colors
      if (type === 'beginner') return 'text-sagebrush-green';
      if (type === 'intermediate') return 'text-sandy-ochre';
      if (type === 'advanced') return 'text-rusty-orange';
      if (type === 'youth') return 'text-lodgepole-green';
      return 'text-slate-blue';

    case 'equipment':
      return 'text-nav-armory';

    case 'matchLevel':
      // Hierarchical importance colors
      if (type === 'club') return 'text-nav-forums';
      if (type === 'state') return 'text-nav-events';
      if (type === 'regional') return 'text-sagebrush-green';
      if (type === 'national') return 'text-rusty-orange';
      return 'text-lodgepole-green';

    case 'registration':
      // Status-appropriate colors
      if (type === 'open') return 'text-sagebrush-green';
      if (type === 'closing') return 'text-sandy-ochre';
      if (type === 'waitlist') return 'text-rusty-orange';
      return 'text-slate-blue';

    default:
      return 'text-muted-foreground';
  }
};

/**
 * Enhanced Filter Icon Component
 * Renders tactical icons with appropriate styling and color
 * Normalizes size differences between icon libraries
 */
interface FilterIconProps {
  category: 'discipline' | 'skillLevel' | 'equipment' | 'matchLevel' | 'registration';
  type: string;
  className?: string;
  size?: number;
}

export const FilterIcon: React.FC<FilterIconProps> = ({ 
  category, 
  type, 
  className = "h-4 w-4",
  size = 16 
}) => {
  const IconComponent = getFilterIcon(category, type);
  const color = getIconColor(category, type);
  
  // Normalize icon sizing across different libraries - use ONLY Tailwind classes
  const normalizedClassName = `${className} ${color} flex-shrink-0`;
  
  return (
    <div className="flex items-center justify-center">
      <IconComponent className={normalizedClassName} />
    </div>
  );
};

export default FilterIcon;