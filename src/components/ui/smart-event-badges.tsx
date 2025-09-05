'use client'

import React from 'react'
import { Badge } from './badge'
import { useBadge } from '@/hooks/useBadge'
import { 
  AcademicCapIcon, 
  CalendarDaysIcon, 
  CheckIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  ExclamationTriangleIcon, 
  SunIcon, 
  UserIcon, 
  UsersIcon,
  BuildingOfficeIcon,
  HandRaisedIcon,
  FireIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface SmartEventBadgesProps {
  title: string
  eventType?: string
  date: string
  time?: string
  description: string
  price?: string
  registrationUrl?: string
  venue?: string
  maxBadges?: number
  priorityFirst?: boolean
}

/**
 * Icon mapping for badge types
 */
const BadgeIcons: Record<string, React.ComponentType<any>> = {
  'multiday': CalendarDaysIcon,
  'series': CalendarDaysIcon,
  'championship': CheckIcon,
  'byoa': ExclamationTriangleIcon,
  'gear-available': CheckIcon,
  'bring-your-own': HandRaisedIcon,
  'pre-registration': UserIcon,
  'walk-ins-welcome': UsersIcon,
  'closing-soon': ClockIcon,
  'beginner-friendly': AcademicCapIcon,
  'all-skill-levels': UsersIcon,
  'experienced-shooters': ExclamationTriangleIcon,
  'indoor-range': BuildingOfficeIcon,
  'outdoor-range': SunIcon,
  'weekend-event': CalendarDaysIcon,
  'evening-match': ClockIcon,
  'all-day': SunIcon,
  'free': CheckIcon,
  'under-25': CurrencyDollarIcon,
  'youth-program': AcademicCapIcon,
  'charity-event': CheckIcon,
  'training': AcademicCapIcon
};

/**
 * Smart Event Badges - Refactored with Utility System
 * Uses centralized badge logic to eliminate code duplication
 * Only shows verifiable, helpful information that adds real value
 */
export function SmartEventBadges({
  title,
  eventType,
  date,
  time,
  description,
  price,
  registrationUrl,
  venue,
  maxBadges,
  priorityFirst = true
}: SmartEventBadgesProps) {
  
  // Use the badge hook with all event data
  const { formattedBadges, totalBadges, hasAnyBadges } = useBadge({
    title,
    eventType,
    date,
    time,
    description,
    price,
    registrationUrl,
    venue
  });

  // Filter and limit badges if requested
  const displayBadges = React.useMemo(() => {
    let badges = formattedBadges;
    
    // Sort priority badges first if requested
    if (priorityFirst) {
      const priorityIds = ['championship', 'series', 'training', 'youth-program', 'charity-event', 'free'];
      badges = badges.sort((a, b) => {
        const aIsPriority = priorityIds.includes(a.id);
        const bIsPriority = priorityIds.includes(b.id);
        
        if (aIsPriority && !bIsPriority) return -1;
        if (!aIsPriority && bIsPriority) return 1;
        return 0;
      });
    }
    
    // Limit number of badges if specified
    if (maxBadges && maxBadges > 0) {
      badges = badges.slice(0, maxBadges);
    }
    
    return badges;
  }, [formattedBadges, priorityFirst, maxBadges]);

  // Don't render anything if no badges
  if (!hasAnyBadges || displayBadges.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-xs">
      {displayBadges.map((badge) => {
        const IconComponent = BadgeIcons[badge.id];
        
        return (
          <Badge 
            key={badge.id}
            variant={badge.variant}
            size="sm"
            hideIcon={!IconComponent}
            className="transition-all duration-200 hover:scale-105"
          >
            {IconComponent && <IconComponent className="w-3 h-3 mr-1" />}
            {badge.text}
          </Badge>
        );
      })}
      
      {/* Show truncation indicator if badges were limited */}
      {maxBadges && totalBadges > maxBadges && (
        <Badge variant="status-info" size="sm" className="text-muted-foreground">
          +{totalBadges - maxBadges} more
        </Badge>
      )}
    </div>
  );
}

/**
 * Compact version that only shows the most important badges
 */
export function CompactEventBadges(props: SmartEventBadgesProps) {
  return (
    <SmartEventBadges 
      {...props} 
      maxBadges={3} 
      priorityFirst={true}
    />
  );
}

/**
 * Full version that shows all applicable badges
 */
export function FullEventBadges(props: SmartEventBadgesProps) {
  return (
    <SmartEventBadges 
      {...props} 
      maxBadges={undefined}
      priorityFirst={true}
    />
  );
}

/**
 * Category-specific badge display
 */
export function CategoryEventBadges({ 
  category, 
  ...props 
}: SmartEventBadgesProps & { 
  category: 'format' | 'equipment' | 'registration' | 'skill' | 'location' | 'timing' | 'cost' | 'special' 
}) {
  const { badgesByCategory } = useBadge({
    title: props.title,
    eventType: props.eventType,
    date: props.date,
    time: props.time,
    description: props.description,
    price: props.price,
    registrationUrl: props.registrationUrl,
    venue: props.venue
  });

  const categoryBadges = badgesByCategory[category] || [];

  if (categoryBadges.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-xs">
      {categoryBadges.map((badgeConfig) => {
        const IconComponent = BadgeIcons[badgeConfig.id];
        
        return (
          <Badge 
            key={badgeConfig.id}
            variant={badgeConfig.variant}
            size={badgeConfig.size}
            hideIcon={badgeConfig.hideIcon || !IconComponent}
          >
            {!badgeConfig.hideIcon && IconComponent && <IconComponent className="w-3 h-3 mr-1" />}
            {badgeConfig.text}
          </Badge>
        );
      })}
    </div>
  );
}
