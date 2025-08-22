'use client'


import { AirsoftBBIcon, ArcheryArrowIcon, CategoryIcon, PaintballIcon, PistolCalibersIcon, RifleCartridgesIcon, ShotgunShellIcon, TacticalCaseIcon } from '@heroicons/react/24/outline';
import * as React from 'react'
import { cn } from "@/lib/utils"

export interface CategoryIconProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  opacity?: number
}

const iconSizes = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4', 
  lg: 'w-5 h-5'
}

// Shotgun Shell Icon
export function ShotgunShellIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* Shotgun shell body */}
      <rect x="6" y="2" width="4" height="10" rx="0.5" fill="currentColor" opacity="0.8" />
      {/* Shell rim */}
      <rect x="5.5" y="11.5" width="5" height="1.5" rx="0.25" fill="currentColor" opacity="0.9" />
      {/* Brass base */}
      <rect x="6" y="13" width="4" height="1" rx="0.2" fill="currentColor" opacity="0.7" />
      {/* Center dimple */}
      <circle cx="8" cy="13.5" r="0.5" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

// Rifle Cartridges Icon (223 and 7.62x39, one knocked over)
export function RifleCartridgesIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* Standing cartridge (.223) */}
      <g>
        <rect x="3" y="2" width="2" height="8" rx="0.2" fill="currentColor" opacity="0.8" />
        <rect x="2.5" y="9.5" width="3" height="2" rx="0.3" fill="currentColor" opacity="0.9" />
        <circle cx="4" cy="1.5" r="0.8" fill="currentColor" opacity="0.7" />
      </g>
      
      {/* Knocked over cartridge (7.62x39) */}
      <g transform="rotate(25 8 8)">
        <rect x="8" y="6" width="6" height="1.8" rx="0.2" fill="currentColor" opacity="0.6" />
        <rect x="12.5" y="5.5" width="1.5" height="2.8" rx="0.3" fill="currentColor" opacity="0.7" />
        <circle cx="8.5" cy="6.9" r="0.6" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  )
}

// Pistol Calibers Icon (9mm, .45, .40)
export function PistolCalibersIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* 9mm cartridge */}
      <g>
        <rect x="2" y="3" width="1.5" height="6" rx="0.2" fill="currentColor" opacity="0.8" />
        <rect x="1.5" y="8.5" width="2.5" height="1.5" rx="0.2" fill="currentColor" opacity="0.9" />
        <circle cx="2.75" cy="2.5" r="0.6" fill="currentColor" opacity="0.7" />
      </g>
      
      {/* .45 cartridge */}
      <g>
        <rect x="6.5" y="2.5" width="1.8" height="7" rx="0.2" fill="currentColor" opacity="0.8" />
        <rect x="6" y="9" width="2.8" height="1.8" rx="0.3" fill="currentColor" opacity="0.9" />
        <circle cx="7.4" cy="2" r="0.7" fill="currentColor" opacity="0.7" />
      </g>
      
      {/* .40 cartridge */}
      <g>
        <rect x="11.5" y="2.8" width="1.6" height="6.5" rx="0.2" fill="currentColor" opacity="0.8" />
        <rect x="11" y="8.8" width="2.6" height="1.7" rx="0.3" fill="currentColor" opacity="0.9" />
        <circle cx="12.3" cy="2.3" r="0.65" fill="currentColor" opacity="0.7" />
      </g>
    </svg>
  )
}

// Archery Arrow Icon
export function ArcheryArrowIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* Arrow shaft */}
      <rect x="1" y="7.5" width="12" height="1" fill="currentColor" opacity="0.8" />
      
      {/* Broadhead */}
      <polygon 
        points="13,6 15,8 13,10 12,8.5 12,7.5" 
        fill="currentColor" 
        opacity="0.9" 
      />
      
      {/* Fletching */}
      <polygon 
        points="1,6.5 3,7 3,8 1,9.5" 
        fill="currentColor" 
        opacity="0.7" 
      />
      <polygon 
        points="1,6.5 3,7.2 3,7.8 1,9.5" 
        fill="currentColor" 
        opacity="0.6" 
        transform="translate(0,0.5)"
      />
    </svg>
  )
}

// Paintball Icon
export function PaintballIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* Paintball sphere */}
      <circle cx="8" cy="8" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="8" r="3.5" fill="currentColor" opacity="0.4" />
      
      {/* Paint splatter effect */}
      <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="11" cy="7" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="9" cy="11" r="0.6" fill="currentColor" opacity="0.3" />
      <circle cx="5" cy="10" r="0.7" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

// Airsoft BB Icon
export function AirsoftBBIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* BB pellets */}
      <circle cx="4" cy="4" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="8" cy="6" r="1.3" fill="currentColor" opacity="0.9" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" opacity="0.7" />
      <circle cx="6" cy="10" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="10" cy="12" r="1.2" fill="currentColor" opacity="0.8" />
      
      {/* Highlight on main BB */}
      <circle cx="8.3" cy="5.7" r="0.3" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

// Generic Tactical Case Icon (fallback)
export function TacticalCaseIcon({ className, size = 'md', opacity = 0.4 }: CategoryIconProps) {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className={cn(iconSizes[size], className)}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* Case outline */}
      <rect x="2" y="3" width="12" height="9" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      
      {/* Corner brackets */}
      <rect x="1.5" y="2.5" width="1" height="1" fill="currentColor" opacity="0.9" />
      <rect x="13.5" y="2.5" width="1" height="1" fill="currentColor" opacity="0.9" />
      <rect x="1.5" y="12.5" width="1" height="1" fill="currentColor" opacity="0.9" />
      <rect x="13.5" y="12.5" width="1" height="1" fill="currentColor" opacity="0.9" />
      
      {/* Latches */}
      <rect x="7" y="2" width="2" height="0.8" rx="0.2" fill="currentColor" opacity="0.7" />
      <rect x="7" y="13.2" width="2" height="0.8" rx="0.2" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

// Category detection utility
export function getCategoryIcon(category: string, type?: string, content?: string): React.ComponentType<CategoryIconProps> {
  const searchText = `${category} ${type} ${content}`.toLowerCase()
  
  if (searchText.includes('shotgun') || searchText.includes('trap') || searchText.includes('skeet') || searchText.includes('sporting clays')) {
    return ShotgunShellIcon
  }
  
  if (searchText.includes('rifle') || searchText.includes('precision') || searchText.includes('long range') || searchText.includes('marksmanship')) {
    return RifleCartridgesIcon
  }
  
  if (searchText.includes('pistol') || searchText.includes('handgun') || searchText.includes('defensive') || searchText.includes('idpa') || searchText.includes('uspsa')) {
    return PistolCalibersIcon
  }
  
  if (searchText.includes('archery') || searchText.includes('bow') || searchText.includes('arrow')) {
    return ArcheryArrowIcon
  }
  
  if (searchText.includes('paintball')) {
    return PaintballIcon
  }
  
  if (searchText.includes('airsoft') || searchText.includes('bb')) {
    return AirsoftBBIcon
  }
  
  return TacticalCaseIcon
}

// Main category icon component with auto-detection
export interface CategoryIconComponentProps extends CategoryIconProps {
  category?: string
  type?: string
  content?: string
  forceIcon?: React.ComponentType<CategoryIconProps>
}

export function CategoryIcon({ 
  category = '', 
  type = '', 
  content = '', 
  forceIcon,
  ...props 
}: CategoryIconComponentProps) {
  const IconComponent = forceIcon || getCategoryIcon(category, type, content)
  return <IconComponent {...props} />
}