import { useMemo } from 'react';
import { 
  calculateEventBadges, 
  getBadgesByCategory, 
  validateBadgeData, 
  formatBadgeContent,
  type EventBadgeData, 
  type BadgeConfig,
  type BadgeCategory
} from '@/lib/badges/utils';

/**
 * Hook for managing badge logic and state
 */
export function useBadge(data: Partial<EventBadgeData>) {
  // Validate the data
  const isValidData = useMemo(() => validateBadgeData(data), [data]);
  
  // Calculate all applicable badges
  const badges = useMemo(() => {
    if (!isValidData) return [];
    return calculateEventBadges(data as EventBadgeData);
  }, [data, isValidData]);

  // Get badges organized by category
  const badgesByCategory = useMemo(() => {
    if (!isValidData) return {} as Record<BadgeCategory, BadgeConfig[]>;
    return getBadgesByCategory(data as EventBadgeData);
  }, [data, isValidData]);

  // Format badges for display
  const formattedBadges = useMemo(() => {
    return badges.map(badge => ({
      id: badge.id,
      ...formatBadgeContent(badge)
    }));
  }, [badges]);

  // Count badges by category
  const badgeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.entries(badgesByCategory).forEach(([category, categoryBadges]) => {
      counts[category] = categoryBadges.length;
    });
    return counts;
  }, [badgesByCategory]);

  // Get high-priority badges (format, special, registration)
  const priorityBadges = useMemo(() => {
    const priorityCategories: BadgeCategory[] = ['format', 'special', 'registration'];
    return badges.filter(badge => 
      priorityCategories.some(category => 
        badgesByCategory[category]?.some(catBadge => catBadge.id === badge.id)
      )
    );
  }, [badges, badgesByCategory]);

  // Check if event has specific badge types
  const hasBadgeType = (category: BadgeCategory): boolean => {
    return badgesByCategory[category]?.length > 0;
  };

  // Get badges for a specific category
  const getBadgesForCategory = (category: BadgeCategory): BadgeConfig[] => {
    return badgesByCategory[category] || [];
  };

  return {
    // Data validation
    isValid: isValidData,
    
    // All badges
    badges,
    formattedBadges,
    
    // Organized badges
    badgesByCategory,
    badgeCounts,
    priorityBadges,
    
    // Utility functions
    hasBadgeType,
    getBadgesForCategory,
    
    // Counts
    totalBadges: badges.length,
    hasAnyBadges: badges.length > 0
  };
}
