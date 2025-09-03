import type { ReactNode } from 'react';

/**
 * Badge configuration interface
 */
export interface BadgeConfig {
  id: string;
  variant: string;
  size: 'sm' | 'default' | 'lg';
  hideIcon?: boolean;
  icon?: ReactNode;
  text: string;
  condition: (data: EventBadgeData) => boolean;
}

/**
 * Event data interface for badge generation
 */
export interface EventBadgeData {
  title: string;
  eventType?: string;
  date: string;
  time?: string;
  description: string;
  price?: string;
  registrationUrl?: string;
  venue?: string;
}

/**
 * Badge category types
 */
export type BadgeCategory = 
  | 'format'          // Multi-day, series, championship
  | 'equipment'       // BYOA, gear available, bring your own
  | 'registration'    // Pre-reg required, walk-ins welcome
  | 'skill'          // Beginner friendly, all levels, experienced
  | 'location'       // Indoor/outdoor, venue type
  | 'timing'         // Weekend, evening, all-day
  | 'cost'           // Free, under $25, pricing info
  | 'special';       // Youth, charity, training

/**
 * Pre-defined badge configurations organized by category
 */
export const BadgeConfigs: Record<BadgeCategory, BadgeConfig[]> = {
  format: [
    {
      id: 'multiday',
      variant: 'info-river',
      size: 'sm',
      hideIcon: true,
      text: 'Multi-Day',
      condition: (data) => 
        data.date.includes(' - ') || 
        data.description.toLowerCase().includes('multi-day') || 
        data.description.toLowerCase().includes('weekend') || 
        (data.description.toLowerCase().includes('saturday') && data.description.toLowerCase().includes('sunday'))
    },
    {
      id: 'series',
      variant: 'warm-stone',
      size: 'sm', 
      hideIcon: true,
      text: 'Series Event',
      condition: (data) => 
        data.title.toLowerCase().includes('series') || 
        data.description.toLowerCase().includes('part of') || 
        data.description.toLowerCase().includes('round ')
    },
    {
      id: 'championship',
      variant: 'rusty-orange',
      size: 'sm',
      hideIcon: true,
      text: 'Championship',
      condition: (data) => {
        const titleLower = data.title.toLowerCase();
        return titleLower.includes('championship') || titleLower.includes('state') || 
               titleLower.includes('national') || titleLower.includes('regional');
      }
    }
  ],

  equipment: [
    {
      id: 'byoa',
      variant: 'sandy-ochre',
      size: 'sm',
      hideIcon: true,
      text: 'BYOA',
      condition: (data) => {
        const descLower = data.description.toLowerCase();
        return descLower.includes('byoa') || descLower.includes('bring your own ammo') || 
               descLower.includes('bring ammo') || descLower.includes('ammunition not provided');
      }
    }
  ],

  registration: [
    {
      id: 'pre-registration',
      variant: 'info-river',
      size: 'sm',
      hideIcon: true,
      text: 'Pre-Registration',
      condition: (data) => !!data.registrationUrl
    },
    {
      id: 'walk-ins-welcome',
      variant: 'sagebrush-green',
      size: 'sm',
      hideIcon: true,
      text: 'Walk-ins Welcome',
      condition: (data) => !data.registrationUrl
    }
  ],

  skill: [
    {
      id: 'beginner-friendly',
      variant: 'sagebrush-green',
      size: 'sm',
      hideIcon: true,
      text: 'Beginner Friendly',
      condition: (data) => {
        const descLower = data.description.toLowerCase();
        return descLower.includes('beginner') || descLower.includes('new shooter') || 
               descLower.includes('introductory') || descLower.includes('intro to') ||
               descLower.includes('first time') || descLower.includes('no experience');
      }
    }
  ],

  location: [
    {
      id: 'indoor-range',
      variant: 'slate-blue',
      size: 'sm',
      hideIcon: true,
      text: 'Indoor Range',
      condition: (data) => {
        const venueLower = data.venue?.toLowerCase() || '';
        const titleLower = data.title.toLowerCase();
        const descLower = data.description.toLowerCase();
        return venueLower.includes('indoor') || titleLower.includes('indoor') || 
               descLower.includes('indoor range');
      }
    }
  ],

  timing: [
    {
      id: 'weekend-event',
      variant: 'warm-stone',
      size: 'sm',
      hideIcon: true,
      text: 'Weekend Event',
      condition: (data) => {
        const dateObj = new Date(data.date);
        const dayOfWeek = dateObj.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
      }
    }
  ],

  cost: [
    {
      id: 'free',
      variant: 'sagebrush-green',
      size: 'sm',
      hideIcon: true,
      text: 'Free',
      condition: (data) => 
        !data.price || data.price.toLowerCase().includes('free') || data.price === '$0'
    }
  ],

  special: [
    {
      id: 'youth-program',
      variant: 'lodgepole-green',
      size: 'sm',
      hideIcon: true,
      text: 'Youth Program',
      condition: (data) => {
        const titleLower = data.title.toLowerCase();
        const descLower = data.description.toLowerCase();
        return titleLower.includes('youth') || titleLower.includes('junior') || 
               descLower.includes('youth') || descLower.includes('under 18');
      }
    },
    {
      id: 'training',
      variant: 'nav-armory',
      size: 'sm',
      hideIcon: true,
      text: 'Training',
      condition: (data) => {
        const titleLower = data.title.toLowerCase();
        const descLower = data.description.toLowerCase();
        return data.eventType === 'Training' || titleLower.includes('training') || 
               titleLower.includes('class') || titleLower.includes('course') ||
               descLower.includes('instruction') || descLower.includes('learn');
      }
    }
  ]
};

/**
 * Calculate which badges should be displayed for an event
 */
export function calculateEventBadges(data: EventBadgeData): BadgeConfig[] {
  const applicableBadges: BadgeConfig[] = [];

  // Process each category
  for (const category of Object.keys(BadgeConfigs) as BadgeCategory[]) {
    for (const badgeConfig of BadgeConfigs[category]) {
      if (badgeConfig.condition(data)) {
        applicableBadges.push(badgeConfig);
      }
    }
  }

  return applicableBadges;
}

/**
 * Format badge content for display
 */
export function formatBadgeContent(badgeConfig: BadgeConfig): {
  text: string;
  icon?: ReactNode;
  className: string;
  variant: string;
} {
  return {
    text: badgeConfig.text,
    icon: badgeConfig.hideIcon ? undefined : badgeConfig.icon,
    className: badgeConfig.size === 'sm' ? 'text-xs' : 'text-sm',
    variant: badgeConfig.variant,
  };
}

/**
 * Validate badge data before processing
 */
export function validateBadgeData(data: Partial<EventBadgeData>): data is EventBadgeData {
  return !!(data.title && data.date && data.description);
}

/**
 * Get badges by category for organized display
 */
export function getBadgesByCategory(data: EventBadgeData): Record<BadgeCategory, BadgeConfig[]> {
  const result: Record<BadgeCategory, BadgeConfig[]> = {
    format: [],
    equipment: [],
    registration: [],
    skill: [],
    location: [],
    timing: [],
    cost: [],
    special: []
  };

  for (const category of Object.keys(BadgeConfigs) as BadgeCategory[]) {
    result[category] = BadgeConfigs[category].filter(badge => badge.condition(data));
  }

  return result;
}
