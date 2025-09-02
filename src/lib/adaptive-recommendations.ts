'use client'

/**
 * Adaptive Recommendations Engine
 * 
 * Uses user behavior patterns from TacticalTracker to provide personalized
 * navigation recommendations using markov chain-style transitions
 */

export interface UserBehaviorData {
  sectionsVisited: string[]
  brassCasings: number
  rangeTime: number
  achievements: string[]
  totalSessions: number
  recentActivity?: string[]
}

export interface AdaptiveLink {
  name: string
  href: string
  description: string
  badge?: string
  priority: number
  category: 'recommended' | 'trending' | 'new' | 'related'
  basedOn: string // What triggered this recommendation
}

export interface SectionRecommendations {
  recommended: AdaptiveLink[]
  quickActions: AdaptiveLink[]
  trending: AdaptiveLink[]
}

// Markov-style transition matrix based on user behavior patterns
const sectionTransitionWeights = {
  'home': {
    'events': 0.25,
    'directory': 0.30,
    'armory': 0.20,
    'intel': 0.15,
    'buysell': 0.05,
    'forums': 0.05
  },
  'events': {
    'directory': 0.35, // People often look for venues after seeing events
    'armory': 0.25,    // Check gear for events
    'intel': 0.20,     // Range conditions
    'buysell': 0.15,   // Buy gear for events
    'forums': 0.05
  },
  'directory': {
    'buysell': 0.30,   // See business, check deals
    'events': 0.25,    // Find events at venues
    'intel': 0.20,     // Check conditions
    'armory': 0.15,    // Research gear
    'forums': 0.10
  },
  'armory': {
    'buysell': 0.40,   // Research then buy
    'directory': 0.25, // Find dealers
    'events': 0.20,    // Test gear at events
    'intel': 0.10,
    'forums': 0.05
  },
  'intel': {
    'events': 0.35,    // Check conditions then find events
    'directory': 0.30, // Find ranges
    'armory': 0.20,    // Gear for conditions
    'buysell': 0.10,
    'forums': 0.05
  },
  'buysell': {
    'armory': 0.35,    // Research before buying
    'directory': 0.25, // Find dealers
    'events': 0.20,    // Use new gear
    'intel': 0.15,
    'forums': 0.05
  },
  'forums': {
    'armory': 0.25,
    'events': 0.25,
    'directory': 0.20,
    'buysell': 0.15,
    'intel': 0.15
  }
}

// Base content for each section - using real verified businesses from database
const baseSectionContent = {
  home: {
    recommended: [
      { name: 'Your Profile', href: '/profile', description: 'View and edit your community profile', category: 'recommended' as const },
      { name: 'Your Activity', href: '/profile/activity', description: 'Track your site engagement and achievements', category: 'recommended' as const },
      { name: 'Favorite Businesses', href: '/profile/favorites', description: 'Your bookmarked Idaho firearms businesses', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Dashboard', href: '/dashboard', description: 'Your personalized community hub', category: 'recommended' as const },
      { name: 'Settings', href: '/settings', description: 'Account and preference settings', category: 'recommended' as const }
    ],
    trending: [
      { name: 'Community Stats', href: '/stats', description: 'Site-wide activity and growth metrics', category: 'trending' as const }
    ]
  },
  events: {
    recommended: [
      { name: 'Browse All Events', href: '/events', description: 'Competition & training events across Treasure Valley', category: 'recommended' as const },
      { name: 'Monthly Calendar', href: '/events#calendar', description: 'View upcoming events by month', category: 'recommended' as const },
      { name: 'Training Events', href: '/events#training', description: 'Skill development & education', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Event Search', href: '/events#search', description: 'Find events by location or type', category: 'recommended' as const },
      { name: 'This Weekend', href: '/events#weekend', description: 'Events happening Saturday & Sunday', category: 'recommended' as const }
    ],
    trending: [
      { name: 'Upcoming Training', href: '/events#training', description: 'CCW classes & safety courses', category: 'trending' as const }
    ]
  },
  directory: {
    recommended: [
      { name: 'Buckhorn Gun & Pawn', href: '/directory/buckhorn-gun-pawn', description: 'Professional gunsmith & firearms service provider - Boise', category: 'recommended' as const },
      { name: 'Impact Guns', href: '/directory/impact-guns', description: 'Shooting range facility - Boise', category: 'recommended' as const },
      { name: 'Cliff\'s Guns Safes & Reloading', href: '/directory/cliff-s-guns-safes-reloading', description: 'Gunsmith & reloading supplies - Boise', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Browse All 348 Businesses', href: '/directory', description: 'Verified Idaho firearms businesses', category: 'recommended' as const },
      { name: 'Search by Location', href: '/directory#search', description: 'Find businesses near you', category: 'recommended' as const }
    ],
    trending: [
      { name: 'Boise Gun Stores', href: '/directory#boise', description: '85+ verified Treasure Valley businesses', category: 'trending' as const }
    ]
  },
  armory: {
    recommended: [
      { name: 'Gear Reviews', href: '/armory', description: 'Expert reviews & buying guides for Idaho shooters', category: 'recommended' as const },
      { name: 'Latest Reviews', href: '/armory#latest', description: 'Newest gear evaluations & field tests', category: 'recommended' as const },
      { name: 'Buying Guides', href: '/armory#guides', description: 'What to buy for your specific needs', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Search Reviews', href: '/armory#search', description: 'Find specific gear reviews', category: 'recommended' as const },
      { name: 'Top Rated Gear', href: '/armory#top-rated', description: 'Highest scoring equipment', category: 'recommended' as const }
    ],
    trending: [
      { name: 'Handgun Reviews', href: '/armory#handguns', description: 'Pistols & revolvers tested', category: 'trending' as const }
    ]
  },
  intel: {
    recommended: [
      { name: 'Range Conditions', href: '/intel', description: 'Real-time Idaho range status & weather data', category: 'recommended' as const },
      { name: 'Weather Impact', href: '/intel#weather', description: 'How conditions affect shooting accuracy', category: 'recommended' as const },
      { name: 'Range Directory', href: '/intel#ranges', description: 'All Idaho shooting locations mapped', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Current Conditions', href: '/intel#current', description: 'Today\'s range conditions', category: 'recommended' as const },
      { name: 'Weekly Forecast', href: '/intel#forecast', description: 'Plan your range trips', category: 'recommended' as const }
    ],
    trending: [
      { name: 'Fire Danger Levels', href: '/intel#fire-danger', description: 'Current Idaho fire restrictions', category: 'trending' as const }
    ]
  },
  buysell: {
    recommended: [
      { name: 'Browse Listings', href: '/buysell', description: 'Buy & sell firearms and gear locally', category: 'recommended' as const },
      { name: 'Recent Listings', href: '/buysell#recent', description: 'Latest items for sale in Idaho', category: 'recommended' as const },
      { name: 'Local Deals', href: '/buysell#local', description: 'Treasure Valley sellers only', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Search Listings', href: '/buysell#search', description: 'Find specific items you need', category: 'recommended' as const },
      { name: 'Selling Guidelines', href: '/buysell#guidelines', description: 'How to list your items safely', category: 'recommended' as const }
    ],
    trending: [
      { name: 'Popular Items', href: '/buysell#popular', description: 'Most viewed listings this week', category: 'trending' as const }
    ]
  },
  forums: {
    recommended: [
      { name: 'Community Discussions', href: '/forums', description: 'Idaho gun community conversations', category: 'recommended' as const },
      { name: 'General Discussion', href: '/forums#general', description: 'Open community conversation', category: 'recommended' as const },
      { name: 'Local Topics', href: '/forums#idaho', description: 'Idaho-specific firearms discussions', category: 'recommended' as const }
    ],
    quickActions: [
      { name: 'Recent Posts', href: '/forums#recent', description: 'Latest community activity', category: 'recommended' as const },
      { name: 'Popular Topics', href: '/forums#popular', description: 'Most active discussions', category: 'recommended' as const }
    ],
    trending: [
      { name: 'New Member Intros', href: '/forums#introductions', description: 'Welcome new Idaho members', category: 'trending' as const }
    ]
  }
}

export class AdaptiveRecommendationEngine {
  
  /**
   * Generate personalized recommendations for a section based on user behavior
   */
  getRecommendationsForSection(
    section: string, 
    userData: UserBehaviorData,
    currentPath: string = '/'
  ): SectionRecommendations {
    const baseContent = baseSectionContent[section as keyof typeof baseSectionContent]
    if (!baseContent) {
      return { recommended: [], quickActions: [], trending: [] }
    }

    // Get user's behavior patterns
    const visitedSections = userData.sectionsVisited
    const isNewUser = userData.totalSessions <= 2
    const isRegularUser = userData.totalSessions >= 5
    const hasExplorerAchievement = userData.achievements.includes('explorer')

    // Calculate transition probabilities from user's current state
    const transitions = this.calculateTransitionProbabilities(userData, currentPath)
    
    // Personalize recommendations based on behavior patterns
    const personalizedRecommended = this.personalizeLinks(
      baseContent.recommended,
      userData,
      transitions,
      'recommended'
    )

    const personalizedQuickActions = this.personalizeLinks(
      baseContent.quickActions,
      userData,
      transitions,
      'recommended'
    )

    const personalizedTrending = this.personalizeLinks(
      baseContent.trending,
      userData,
      transitions,
      'trending'
    )

    // Add cross-section recommendations based on markov chain
    const crossSectionRecs = this.generateCrossSectionRecommendations(
      section,
      userData,
      transitions
    )

    return {
      recommended: [
        ...personalizedRecommended,
        ...crossSectionRecs.filter(rec => rec.category === 'recommended')
      ].slice(0, 4), // Limit to prevent overflow
      quickActions: personalizedQuickActions.slice(0, 3),
      trending: [
        ...personalizedTrending,
        ...crossSectionRecs.filter(rec => rec.category === 'trending')
      ].slice(0, 2)
    }
  }

  /**
   * Calculate transition probabilities based on user behavior
   */
  private calculateTransitionProbabilities(
    userData: UserBehaviorData,
    currentPath: string
  ): Record<string, number> {
    const currentSection = this.getSectionFromPath(currentPath)
    const baseTransitions = sectionTransitionWeights[currentSection as keyof typeof sectionTransitionWeights] || {}
    
    // Adjust probabilities based on user history
    const adjustedTransitions = { ...baseTransitions }
    
    // Boost probability for sections user hasn't visited much
    const totalSections = Object.keys(sectionTransitionWeights).length
    userData.sectionsVisited.forEach(section => {
      if (adjustedTransitions[section]) {
        // Slightly reduce probability for frequently visited sections
        adjustedTransitions[section] *= 0.9
      }
    })

    // Boost unvisited sections for exploration
    Object.keys(adjustedTransitions).forEach(section => {
      if (!userData.sectionsVisited.includes(section)) {
        adjustedTransitions[section] *= 1.2
      }
    })

    return adjustedTransitions
  }

  /**
   * Personalize individual links with priority and badges
   */
  private personalizeLinks(
    links: any[],
    userData: UserBehaviorData,
    transitions: Record<string, number>,
    category: string
  ): AdaptiveLink[] {
    return links.map((link, index) => {
      let priority = 1.0
      let badge = link.badge
      let basedOn = 'general recommendation'

      // Boost priority for new users on beginner content
      if (userData.totalSessions <= 2 && link.description.includes('basic') || link.description.includes('beginner')) {
        priority += 0.3
        badge = 'New User'
        basedOn = 'new user recommendations'
      }

      // Boost priority for experienced users on advanced content
      if (userData.totalSessions >= 10 && (link.description.includes('advanced') || link.description.includes('tactical'))) {
        priority += 0.2
        badge = 'Advanced'
        basedOn = 'experienced user content'
      }

      // Add trending badges based on position
      if (category === 'trending' && index === 0) {
        badge = 'Hot'
        priority += 0.1
        basedOn = 'trending content'
      }

      return {
        ...link,
        priority,
        badge,
        basedOn
      }
    }).sort((a, b) => b.priority - a.priority)
  }

  /**
   * Generate cross-section recommendations using markov chain logic
   */
  private generateCrossSectionRecommendations(
    currentSection: string,
    userData: UserBehaviorData,
    transitions: Record<string, number>
  ): AdaptiveLink[] {
    const recommendations: AdaptiveLink[] = []
    
    // Get top 2 most likely next sections
    const sortedTransitions = Object.entries(transitions)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 2)

    sortedTransitions.forEach(([nextSection, probability]) => {
      if (nextSection !== currentSection && probability > 0.15) {
        const sectionContent = baseSectionContent[nextSection as keyof typeof baseSectionContent]
        if (sectionContent && sectionContent.recommended.length > 0) {
          const topItem = sectionContent.recommended[0]
          recommendations.push({
            ...topItem,
            priority: probability,
            badge: 'Related',
            basedOn: `frequently accessed after ${currentSection}`,
            category: 'related'
          })
        }
      }
    })

    return recommendations
  }

  /**
   * Extract section from current path
   */
  private getSectionFromPath(path: string): string {
    if (path === '/') return 'home'
    const segments = path.split('/').filter(Boolean)
    const firstSegment = segments[0]
    
    // Map path segments to sections
    const sectionMap: Record<string, string> = {
      'events': 'events',
      'directory': 'directory', 
      'armory': 'armory',
      'intel': 'intel',
      'buysell': 'buysell',
      'forums': 'forums'
    }

    return sectionMap[firstSegment] || 'home'
  }
}

// Export singleton instance
export const adaptiveRecommendations = new AdaptiveRecommendationEngine()