/**
 * Tactical & Firearms Icon Library
 * Custom SVG React components for specialized firearms, sporting, and tactical categories
 * Integrates with existing Heroicons system while providing authentic firearm-specific iconography
 */

import { AirsoftIcon, ArcheryIcon, CubeIcon, UserIcon, StarIcon, GunsmithIcon, PaintballIcon, PistolSportsIcon, RifleSportsIcon, ShootingRangeIcon, ShotgunSportsIcon, UserIcon, UserIcon, TacticalIcon, TacticalRetailIcon, TacticalServicesIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import React from 'react';

// Base icon props interface matching Heroicons pattern
interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

// Default props matching Heroicons 24x24 outline style
const defaultProps: Required<Pick<IconProps, 'size' | 'strokeWidth'>> = {
  size: 24,
  strokeWidth: 1.5,
};

/**
 * ============================================================================
 * BUSINESS CATEGORY ICONS
 * ============================================================================
 */

// Shooting Range Icon - CursorArrowRaysIcon with crosshairs
export const ShootingRangeIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="m8 12 8 0" />
    <path d="m12 8 0 8" />
  </svg>
);

// Gunsmith Icon - WrenchScrewdriverIcon with tactical elements
export const GunsmithIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    <path d="m13 13 1.5 1.5" />
    <circle cx="17" cy="7" r="1" />
  </svg>
);

// Training Icon - ShieldCheckIcon with graduation cap elements
export const AcademicCapIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m6 12 6 3 6-3" />
    <path d="M12 22V12" />
  </svg>
);

// Retail Store Icon - BuildingStorefrontIcon with tactical elements
export const TacticalRetailIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h20l-1 4H3l-1-4z" />
    <path d="M7 7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7" />
    <path d="M10 11h4" />
    <path d="M12 9v6" />
  </svg>
);

// Club Icon - UsersIcon with shield
export const CubeIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M12 14c-3.5 0-7 1.5-7 4v3h14v-3c0-2.5-3.5-4-7-4z" />
    <path d="M5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M19 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

// Services Icon - Gear with tactical elements
export const TacticalServicesIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6" />
    <path d="m15.5 4.5-3 3m3 9-3-3" />
    <path d="m19.5 8.5-6 3m-3 3-6-3" />
    <path d="m19.5 15.5-6-3m-3-3-6 3" />
    <path d="m15.5 19.5-3-3m-6-6 3 3" />
  </svg>
);

/**
 * ============================================================================
 * MEMBERSHIP TIER ICONS
 * ============================================================================
 */

// Gold Partner Badge
export const StarIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Silver Member Badge
export const UserIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    <path d="M12 7v10" />
    <path d="M8 12h8" />
  </svg>
);

// Copper Member Badge
export const UserIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// Standard Member Badge
export const UserIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/**
 * ============================================================================
 * SPORTS CATEGORY ICONS
 * ============================================================================
 */

// Rifle Sports Icon
export const RifleSportsIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12h20" />
    <path d="M19 8v8" />
    <path d="M21 10h2v4h-2" />
    <circle cx="5" cy="12" r="2" />
    <path d="M7 10v4" />
    <path d="M15 8v8" />
  </svg>
);

// Pistol Sports Icon
export const PistolSportsIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12h12" />
    <path d="M15 8v8" />
    <path d="M17 9h4v6h-4" />
    <circle cx="6" cy="12" r="2" />
    <path d="M8 10v4" />
  </svg>
);

// Shotgun Sports Icon
export const ShotgunSportsIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 11h20v2H2z" />
    <path d="M19 7v10" />
    <path d="M21 9h2v6h-2" />
    <rect x="4" y="10" width="3" height="4" />
    <path d="M15 7v10" />
  </svg>
);

// Archery Icon
export const ArcheryIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12h20" />
    <path d="M22 6l-10 6-10-6" />
    <path d="M22 18l-10-6-10 6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

// Paintball Icon
export const PaintballIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

// Airsoft Icon
export const AirsoftIcon: React.FC<IconProps> = ({ className, size = 24, strokeWidth = 1.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12h14" />
    <path d="M17 8v8" />
    <path d="M19 9h3v6h-3" />
    <circle cx="7" cy="12" r="2" />
    <path d="M9 10v4" />
    <path d="M13 10v4" />
  </svg>
);

/**
 * ============================================================================
 * ICON MAPPING OBJECT
 * ============================================================================
 */

export const tacticalIconMapping = {
  // Business Categories
  'ShootingRange': ShootingRangeIcon,
  'Gunsmith': GunsmithIcon,
  'Training': AcademicCapIcon,
  'TacticalRetail': TacticalRetailIcon,
  'Club': CubeIcon,
  'TacticalServices': TacticalServicesIcon,
  
  // Membership Tiers
  'GoldPartner': StarIcon,
  'SilverMember': UserIcon,
  'CopperMember': UserIcon,
  'StandardMember': UserIcon,
  
  // Sports Categories
  'RifleSports': RifleSportsIcon,
  'PistolSports': PistolSportsIcon,
  'ShotgunSports': ShotgunSportsIcon,
  'Archery': ArcheryIcon,
  'Paintball': PaintballIcon,
  'Airsoft': AirsoftIcon,
} as const;

export type TacticalIconName = keyof typeof tacticalIconMapping;

// Helper function to get tactical icon component
export const getTacticalIcon = (iconName: string) => {
  return tacticalIconMapping[iconName as TacticalIconName] || UserIcon; // Default fallback
};