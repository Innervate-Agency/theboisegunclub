'use client'

import * as React from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { MotionDiv } from '@/components/ui/optimized-motion'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { Input } from '@/components/ui/input'
import { 
  ArrowRightIcon, 
  BookOpenIcon, 
  BuildingStorefrontIcon, 
  CalendarDaysIcon, 
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  ShieldCheckIcon, 
  UsersIcon,
  TicketIcon,
  BanknotesIcon,
  StarIcon,
  EyeIcon,
  ClockIcon,
  HeartIcon,
  BellIcon,
  UserIcon,
  CogIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

// =================== ENHANCED TYPES ===================

interface PersonalizationContext {
  userId?: string
  userType: 'visitor' | 'member' | 'dealer' | 'instructor' | 'admin'
  location?: {
    city: string
    state: string
    coordinates?: [number, number]
  }
  recentViews: RecentView[]
  preferences: UserPreferences
  bookmarks: string[]
}

interface RecentView {
  href: string
  title: string
  type: 'event' | 'business' | 'article' | 'product' | 'guide'
  timestamp: Date
  category: string
}

interface UserPreferences {
  favoriteCategories: string[]
  notifications: boolean
  darkMode: boolean
  compactMode: boolean
}

interface SearchResult {
  id: string
  title: string
  description: string
  href: string
  type: 'event' | 'business' | 'article' | 'product' | 'guide' | 'location'
  category: string
  badge?: string
  metadata?: {
    date?: string
    location?: string
    price?: string
    rating?: number
  }
}

interface QuickAction {
  id: string
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  colorClass: string
  requiresAuth?: boolean
  badge?: string
}

interface FeaturedContent {
  id: string
  title: string
  description: string
  href: string
  image?: string
  badge?: string
  stats?: { label: string; value: string; trend?: 'up' | 'down' | 'neutral' }[]
  priority: number
}

interface NotificationItem {
  id: string
  title: string
  message: string
  href?: string
  timestamp: Date
  read: boolean
  type: 'info' | 'success' | 'warning' | 'error'
}

interface MenuSection {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  colorClass: string
  description: string
  categories: MenuCategory[]
  featured: FeaturedContent[]
  quickActions: QuickAction[]
  recentContent?: RecentView[]
  notifications?: NotificationItem[]
}

interface MenuCategory {
  id: string
  title: string
  description: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  items: MenuItem[]
  badge?: string
  isNew?: boolean
}

interface MenuItem {
  id: string
  title: string
  description: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  isNew?: boolean
  requiresAuth?: boolean
  metadata?: {
    count?: number
    lastUpdated?: string
    popularity?: number
  }
}

// =================== COMPREHENSIVE MENU DATA ===================

const createMenuSections = (context?: PersonalizationContext): MenuSection[] => {
  const isAuthenticated = !!context?.userId
  const userType = context?.userType || 'visitor'
  
  return [
    {
      id: 'home',
      title: 'Dashboard',
      subtitle: 'Your personalized hub',
      icon: UserIcon,
      colorClass: 'nav-home',
      description: 'Personalized overview and quick access',
      categories: [
        {
          id: 'dashboard',
          title: 'My Dashboard',
          description: 'Your activity and recommendations',
          href: '/dashboard',
          items: [
            { id: 'overview', title: 'Overview', description: 'Your personalized summary', href: '/dashboard' },
            { id: 'activity', title: 'Recent Activity', description: 'Your latest interactions', href: '/dashboard/activity' },
            { id: 'bookmarks', title: 'Saved Items', description: 'Your bookmarked content', href: '/dashboard/bookmarks', badge: context?.bookmarks?.length?.toString() || '0' },
            { id: 'recommendations', title: 'For You', description: 'Personalized suggestions', href: '/dashboard/recommendations', isNew: true }
          ]
        },
        {
          id: 'account',
          title: 'Account',
          description: 'Profile and settings',
          href: '/account',
          items: [
            { id: 'profile', title: 'My Profile', description: 'Update your information', href: '/account/profile' },
            { id: 'settings', title: 'Settings', description: 'Preferences and privacy', href: '/account/settings' },
            { id: 'notifications', title: 'Notifications', description: 'Manage your alerts', href: '/account/notifications' },
            { id: 'security', title: 'Security', description: 'Password and 2FA', href: '/account/security' }
          ]
        }
      ],
      featured: [
        {
          id: 'welcome',
          title: isAuthenticated ? `Welcome back, ${context?.userType}!` : 'Join The Boise Gun Club',
          description: isAuthenticated ? 'Your personalized firearms community awaits' : 'Connect with Idaho\'s firearms community',
          href: isAuthenticated ? '/dashboard' : '/join',
          badge: isAuthenticated ? 'Personalized' : 'Free to Join',
          stats: [
            { label: 'Active Members', value: '3.2K', trend: 'up' },
            { label: 'This Week', value: '47 Events', trend: 'neutral' },
            { label: 'New Businesses', value: '12', trend: 'up' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'search', label: 'Search All', href: '/search', icon: MagnifyingGlassIcon, colorClass: 'nav-home' },
        { id: 'nearby', label: 'Near Me', href: '/nearby', icon: MapPinIcon, colorClass: 'nav-home' },
        ...(isAuthenticated ? [
          { id: 'profile', label: 'My Profile', href: '/profile', icon: UserIcon, colorClass: 'nav-home' }
        ] : [
          { id: 'join', label: 'Join Now', href: '/join', icon: UserIcon, colorClass: 'nav-home' }
        ])
      ],
      recentContent: context?.recentViews?.slice(0, 5) || [],
      notifications: []
    },
    {
      id: 'events',
      title: 'Events & Training',
      subtitle: 'Live events, competitions, and skill development',
      icon: TicketIcon,
      colorClass: 'nav-events',
      description: 'Discover and participate in Idaho\'s shooting sports scene',
      categories: [
        {
          id: 'competitions',
          title: 'Competitions',
          description: 'Shooting competitions and matches',
          href: '/events/competitions',
          badge: '12 This Month',
          items: [
            { id: 'precision', title: 'Precision Rifle', description: 'Long-range competitions', href: '/events/competitions/precision', metadata: { count: 5 } },
            { id: 'pistol', title: 'Pistol Matches', description: 'Handgun competitions', href: '/events/competitions/pistol', metadata: { count: 8 } },
            { id: 'tactical', title: 'Tactical Competitions', description: '3-gun, 2-gun matches', href: '/events/competitions/tactical', metadata: { count: 3 } },
            { id: 'youth', title: 'Youth Competitions', description: 'Junior shooter events', href: '/events/competitions/youth', isNew: true }
          ]
        },
        {
          id: 'training',
          title: 'Training Classes',
          description: 'Skill development and education',
          href: '/events/training',
          badge: 'All Levels',
          items: [
            { id: 'basic', title: 'Basic Firearms Safety', description: 'Foundation courses', href: '/events/training/basic' },
            { id: 'ccw', title: 'Concealed Carry', description: 'CCW permit training', href: '/events/training/ccw', badge: 'Popular' },
            { id: 'advanced', title: 'Advanced Marksmanship', description: 'Precision shooting', href: '/events/training/advanced' },
            { id: 'tactical', title: 'Tactical Training', description: 'Dynamic shooting', href: '/events/training/tactical' }
          ]
        },
        {
          id: 'social',
          title: 'Social Events',
          description: 'Community gatherings and meetups',
          href: '/events/social',
          items: [
            { id: 'meetups', title: 'Local Meetups', description: 'Casual gatherings', href: '/events/social/meetups' },
            { id: 'club-events', title: 'Club Events', description: 'Organized activities', href: '/events/social/clubs' },
            { id: 'family', title: 'Family Events', description: 'All-ages activities', href: '/events/social/family' },
            { id: 'fundraisers', title: 'Fundraisers', description: 'Charity events', href: '/events/social/fundraisers' }
          ]
        }
      ],
      featured: [
        {
          id: 'featured-event',
          title: 'Treasure Valley Precision Championship',
          description: 'Long-range precision shooting competition - All skill levels welcome',
          href: '/events/treasure-valley-precision',
          badge: 'Featured Event',
          stats: [
            { label: 'Registered', value: '47/75', trend: 'up' },
            { label: 'Date', value: 'Mar 15', trend: 'neutral' },
            { label: 'Prize Pool', value: '$2.5K', trend: 'up' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'calendar', label: 'Event Calendar', href: '/events/calendar', icon: CalendarDaysIcon, colorClass: 'nav-events' },
        { id: 'submit', label: 'Submit Event', href: '/events/submit', icon: CalendarDaysIcon, colorClass: 'nav-events' },
        { id: 'my-events', label: 'My Events', href: '/events/my-events', icon: StarIcon, colorClass: 'nav-events', requiresAuth: true }
      ]
    },
    {
      id: 'directory',
      title: 'Business Directory',
      subtitle: 'Local firearms businesses and services',
      icon: BuildingStorefrontIcon,
      colorClass: 'nav-directory',
      description: 'Find trusted local firearms businesses and services',
      categories: [
        {
          id: 'gun-stores',
          title: 'Gun Stores',
          description: 'Licensed firearms dealers',
          href: '/directory/gun-stores',
          badge: '45+ Verified',
          items: [
            { id: 'ffl', title: 'FFL Dealers', description: 'Licensed firearms dealers', href: '/directory/gun-stores/ffl' },
            { id: 'sporting-goods', title: 'Sporting Goods', description: 'General sporting goods stores', href: '/directory/gun-stores/sporting-goods' },
            { id: 'specialty', title: 'Specialty Shops', description: 'Specialized firearms stores', href: '/directory/gun-stores/specialty' },
            { id: 'online', title: 'Online Dealers', description: 'Internet-based dealers', href: '/directory/gun-stores/online' }
          ]
        },
        {
          id: 'ranges',
          title: 'Shooting Ranges',
          description: 'Practice and training facilities',
          href: '/directory/ranges',
          badge: '25+ Locations',
          items: [
            { id: 'indoor', title: 'Indoor Ranges', description: 'Climate-controlled facilities', href: '/directory/ranges/indoor' },
            { id: 'outdoor', title: 'Outdoor Ranges', description: 'Open-air facilities', href: '/directory/ranges/outdoor' },
            { id: 'private', title: 'Private Clubs', description: 'Member-only facilities', href: '/directory/ranges/private' },
            { id: 'public', title: 'Public Ranges', description: 'Open to all shooters', href: '/directory/ranges/public' }
          ]
        },
        {
          id: 'services',
          title: 'Services',
          description: 'Professional firearms services',
          href: '/directory/services',
          items: [
            { id: 'gunsmiths', title: 'Gunsmiths', description: 'Repair and customization', href: '/directory/services/gunsmiths' },
            { id: 'instructors', title: 'Instructors', description: 'Certified training professionals', href: '/directory/services/instructors', isNew: true },
            { id: 'appraisers', title: 'Appraisers', description: 'Firearms valuation', href: '/directory/services/appraisers' },
            { id: 'legal', title: 'Legal Services', description: 'Firearms law attorneys', href: '/directory/services/legal' }
          ]
        }
      ],
      featured: [
        {
          id: 'featured-business',
          title: 'Boise Tactical Supply',
          description: 'Full-service firearms dealer with extensive inventory and expert staff',
          href: '/directory/boise-tactical-supply',
          badge: 'Top Rated',
          stats: [
            { label: 'Rating', value: '4.9/5', trend: 'up' },
            { label: 'Reviews', value: '127', trend: 'up' },
            { label: 'Response', value: '<1 hour', trend: 'neutral' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'search', label: 'Search Directory', href: '/directory/search', icon: MagnifyingGlassIcon, colorClass: 'nav-directory' },
        { id: 'add', label: 'Add Business', href: '/directory/add-business', icon: BuildingStorefrontIcon, colorClass: 'nav-directory' },
        { id: 'nearby', label: 'Near Me', href: '/directory/near-me', icon: MapPinIcon, colorClass: 'nav-directory' }
      ]
    },
    {
      id: 'armory',
      title: 'The Armory',
      subtitle: 'Gear reviews, builds, and tactical insights',
      icon: ShieldCheckIcon,
      colorClass: 'nav-armory',
      description: 'In-depth reviews and technical knowledge',
      categories: [
        {
          id: 'firearms',
          title: 'Firearms Reviews',
          description: 'Comprehensive firearm testing',
          href: '/armory/firearms',
          badge: 'Expert Tested',
          items: [
            { id: 'rifles', title: 'Rifles', description: 'Bolt-action, semi-auto reviews', href: '/armory/firearms/rifles' },
            { id: 'pistols', title: 'Pistols', description: 'Handgun reviews and comparisons', href: '/armory/firearms/pistols' },
            { id: 'shotguns', title: 'Shotguns', description: 'Shotgun reviews and tests', href: '/armory/firearms/shotguns' },
            { id: 'builds', title: 'Custom Builds', description: 'Build guides and showcases', href: '/armory/firearms/builds', isNew: true }
          ]
        },
        {
          id: 'optics',
          title: 'Optics & Sights',
          description: 'Scopes, red dots, and accessories',
          href: '/armory/optics',
          items: [
            { id: 'scopes', title: 'Riflescopes', description: 'Variable and fixed power', href: '/armory/optics/scopes' },
            { id: 'red-dots', title: 'Red Dot Sights', description: 'Reflex and holographic', href: '/armory/optics/red-dots' },
            { id: 'iron-sights', title: 'Iron Sights', description: 'Traditional backup sights', href: '/armory/optics/iron-sights' },
            { id: 'accessories', title: 'Accessories', description: 'Mounts, rings, and more', href: '/armory/optics/accessories' }
          ]
        },
        {
          id: 'gear',
          title: 'Tactical Gear',
          description: 'Equipment and accessories',
          href: '/armory/gear',
          items: [
            { id: 'holsters', title: 'Holsters', description: 'Concealed and open carry', href: '/armory/gear/holsters' },
            { id: 'bags', title: 'Cases & Bags', description: 'Transport and storage', href: '/armory/gear/bags' },
            { id: 'apparel', title: 'Tactical Apparel', description: 'Clothing and protective gear', href: '/armory/gear/apparel' },
            { id: 'tools', title: 'Tools & Maintenance', description: 'Cleaning and repair tools', href: '/armory/gear/tools' }
          ]
        }
      ],
      featured: [
        {
          id: 'featured-review',
          title: 'Vortex Viper PST Gen II Review',
          description: 'In-depth review of this popular precision scope with field testing results',
          href: '/armory/vortex-viper-pst-gen-ii',
          badge: 'Editor\'s Choice',
          stats: [
            { label: 'Views', value: '2.1K', trend: 'up' },
            { label: 'Rating', value: '4.8/5', trend: 'neutral' },
            { label: 'Comments', value: '23', trend: 'up' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'reviews', label: 'Latest Reviews', href: '/armory/latest', icon: ShieldCheckIcon, colorClass: 'nav-armory' },
        { id: 'submit', label: 'Submit Review', href: '/armory/submit-review', icon: ShieldCheckIcon, colorClass: 'nav-armory' },
        { id: 'wishlist', label: 'My Wishlist', href: '/armory/wishlist', icon: HeartIcon, colorClass: 'nav-armory', requiresAuth: true }
      ]
    },
    {
      id: 'intel',
      title: 'Intel',
      subtitle: 'Real-time conditions and field intelligence',
      icon: MapIcon,
      colorClass: 'nav-intel',
      description: 'Live conditions, weather, and range status',
      categories: [
        {
          id: 'conditions',
          title: 'Range Conditions',
          description: 'Live updates from shooting locations',
          href: '/intel/conditions',
          badge: 'Live Updates',
          items: [
            { id: 'weather', title: 'Weather Reports', description: 'Current conditions', href: '/intel/conditions/weather' },
            { id: 'range-status', title: 'Range Status', description: 'Open/closed updates', href: '/intel/conditions/range-status', isNew: true },
            { id: 'road-conditions', title: 'Access Roads', description: 'Road and trail conditions', href: '/intel/conditions/roads' },
            { id: 'alerts', title: 'Alerts & Closures', description: 'Important notices', href: '/intel/conditions/alerts' }
          ]
        },
        {
          id: 'locations',
          title: 'Shooting Locations',
          description: 'BLM land and public areas',
          href: '/intel/locations',
          badge: '20+ Verified',
          items: [
            { id: 'blm', title: 'BLM Shooting Areas', description: 'Bureau of Land Management', href: '/intel/locations/blm' },
            { id: 'state-land', title: 'State Land', description: 'Idaho state shooting areas', href: '/intel/locations/state-land' },
            { id: 'national-forest', title: 'National Forest', description: 'USFS shooting areas', href: '/intel/locations/national-forest' },
            { id: 'private', title: 'Private Land Access', description: 'Permission-based locations', href: '/intel/locations/private' }
          ]
        },
        {
          id: 'resources',
          title: 'Resources',
          description: 'Maps, guides, and references',
          href: '/intel/resources',
          items: [
            { id: 'maps', title: 'Interactive Maps', description: 'GPS coordinates and routes', href: '/intel/resources/maps' },
            { id: 'regulations', title: 'Regulations', description: 'Local laws and restrictions', href: '/intel/resources/regulations' },
            { id: 'permits', title: 'Permits & Licenses', description: 'Required documentation', href: '/intel/resources/permits' },
            { id: 'safety', title: 'Safety Guidelines', description: 'Best practices and protocols', href: '/intel/resources/safety' }
          ]
        }
      ],
      featured: [
        {
          id: 'featured-location',
          title: 'Black\'s Creek Range Conditions',
          description: 'Current weather, access road status, and shooting condition updates',
          href: '/intel/locations/blacks-creek',
          badge: 'Live Intel',
          stats: [
            { label: 'Temp', value: '32°F', trend: 'down' },
            { label: 'Wind', value: '5mph NW', trend: 'neutral' },
            { label: 'Road', value: 'Good', trend: 'up' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'conditions', label: 'Live Conditions', href: '/intel/live', icon: MapIcon, colorClass: 'nav-intel' },
        { id: 'submit', label: 'Submit Report', href: '/intel/submit-report', icon: MapIcon, colorClass: 'nav-intel' },
        { id: 'alerts', label: 'My Alerts', href: '/intel/my-alerts', icon: BellIcon, colorClass: 'nav-intel', requiresAuth: true }
      ]
    },
    {
      id: 'buysell',
      title: 'Buy & Sell',
      subtitle: 'Local deals and marketplace',
      icon: BanknotesIcon,
      colorClass: 'nav-buysell',
      description: 'Buy, sell, and trade firearms & gear locally',
      categories: [
        {
          id: 'firearms',
          title: 'Firearms',
          description: 'Licensed sales and transfers',
          href: '/buysell/firearms',
          badge: 'FFL Required',
          items: [
            { id: 'handguns', title: 'Handguns', description: 'Pistols and revolvers', href: '/buysell/firearms/handguns' },
            { id: 'rifles', title: 'Rifles', description: 'All rifle types', href: '/buysell/firearms/rifles' },
            { id: 'shotguns', title: 'Shotguns', description: 'All shotgun types', href: '/buysell/firearms/shotguns' },
            { id: 'vintage', title: 'Vintage & Collectible', description: 'Historical firearms', href: '/buysell/firearms/vintage', badge: 'Collector' }
          ]
        },
        {
          id: 'gear',
          title: 'Gear & Accessories',
          description: 'Equipment and accessories',
          href: '/buysell/gear',
          badge: 'No FFL Needed',
          items: [
            { id: 'optics', title: 'Optics', description: 'Scopes, red dots, binoculars', href: '/buysell/gear/optics' },
            { id: 'holsters', title: 'Holsters & Cases', description: 'Carry and storage solutions', href: '/buysell/gear/holsters' },
            { id: 'ammo', title: 'Ammunition', description: 'Various calibers and types', href: '/buysell/gear/ammo' },
            { id: 'reloading', title: 'Reloading Supplies', description: 'Components and equipment', href: '/buysell/gear/reloading' }
          ]
        },
        {
          id: 'deals',
          title: 'Deals & Specials',
          description: 'Limited time offers and sales',
          href: '/buysell/deals',
          badge: 'Hot Deals',
          isNew: true,
          items: [
            { id: 'daily-deals', title: 'Daily Deals', description: 'Today\'s best offers', href: '/buysell/deals/daily' },
            { id: 'clearance', title: 'Clearance', description: 'Discounted items', href: '/buysell/deals/clearance' },
            { id: 'bulk', title: 'Bulk Sales', description: 'Volume discounts', href: '/buysell/deals/bulk' },
            { id: 'auctions', title: 'Auctions', description: 'Bidding opportunities', href: '/buysell/deals/auctions', isNew: true }
          ]
        }
      ],
      featured: [
        {
          id: 'featured-deal',
          title: 'Glock 19 Gen 5 - Like New',
          description: '9mm, 15+1 capacity, night sights, three magazines included',
          href: '/buysell/glock-19-gen-5',
          badge: 'Hot Deal',
          stats: [
            { label: 'Price', value: '$549', trend: 'down' },
            { label: 'Condition', value: 'Like New', trend: 'up' },
            { label: 'Views', value: '340', trend: 'up' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'browse', label: 'Browse All', href: '/buysell/all', icon: BanknotesIcon, colorClass: 'nav-buysell' },
        { id: 'sell', label: 'List Item', href: '/buysell/sell', icon: BanknotesIcon, colorClass: 'nav-buysell', requiresAuth: true },
        { id: 'watchlist', label: 'My Watchlist', href: '/buysell/watchlist', icon: EyeIcon, colorClass: 'nav-buysell', requiresAuth: true }
      ]
    },
    {
      id: 'forums',
      title: 'Community Forums',
      subtitle: 'Connect and discuss with fellow enthusiasts',
      icon: ChatBubbleLeftRightIcon,
      colorClass: 'nav-forums',
      description: 'Idaho-focused discussions and community',
      categories: [
        {
          id: 'general',
          title: 'General Discussion',
          description: 'Open conversations about firearms',
          href: '/forums/general',
          badge: 'Most Active',
          items: [
            { id: 'new-members', title: 'New Member Introductions', description: 'Welcome to the community', href: '/forums/general/introductions' },
            { id: 'general-talk', title: 'General Talk', description: 'Open discussions', href: '/forums/general/talk' },
            { id: 'news', title: 'News & Current Events', description: 'Industry and political news', href: '/forums/general/news' },
            { id: 'off-topic', title: 'Off Topic', description: 'Non-firearms discussions', href: '/forums/general/off-topic' }
          ]
        },
        {
          id: 'technical',
          title: 'Technical Discussions',
          description: 'In-depth technical conversations',
          href: '/forums/technical',
          items: [
            { id: 'gunsmithing', title: 'Gunsmithing', description: 'Repair and modification', href: '/forums/technical/gunsmithing' },
            { id: 'reloading', title: 'Reloading', description: 'Handloading discussions', href: '/forums/technical/reloading' },
            { id: 'ballistics', title: 'Ballistics', description: 'Trajectory and performance', href: '/forums/technical/ballistics' },
            { id: 'optics', title: 'Optics Tech', description: 'Scope and sight discussions', href: '/forums/technical/optics' }
          ]
        },
        {
          id: 'regional',
          title: 'Idaho Regional',
          description: 'Location-specific discussions',
          href: '/forums/regional',
          badge: 'Local Focus',
          items: [
            { id: 'boise-area', title: 'Boise Area', description: 'Treasure Valley discussions', href: '/forums/regional/boise' },
            { id: 'northern-idaho', title: 'Northern Idaho', description: 'Panhandle region', href: '/forums/regional/northern' },
            { id: 'eastern-idaho', title: 'Eastern Idaho', description: 'Eastern region discussions', href: '/forums/regional/eastern' },
            { id: 'southern-idaho', title: 'Southern Idaho', description: 'Southern region topics', href: '/forums/regional/southern' }
          ]
        }
      ],
      featured: [
        {
          id: 'trending-discussion',
          title: 'Best Long Range Spots in Idaho',
          description: 'Community sharing their favorite precision shooting locations',
          href: '/forums/trending/long-range-spots',
          badge: 'Trending',
          stats: [
            { label: 'Replies', value: '127', trend: 'up' },
            { label: 'Views', value: '3.2K', trend: 'up' },
            { label: 'Active', value: '2 hrs ago', trend: 'neutral' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'recent', label: 'Recent Posts', href: '/forums/recent', icon: ClockIcon, colorClass: 'nav-forums' },
        { id: 'new-post', label: 'New Post', href: '/forums/new-post', icon: ChatBubbleLeftRightIcon, colorClass: 'nav-forums', requiresAuth: true },
        { id: 'my-posts', label: 'My Posts', href: '/forums/my-posts', icon: UserIcon, colorClass: 'nav-forums', requiresAuth: true }
      ]
    },
    {
      id: 'guides',
      title: 'Guides & Training',
      subtitle: 'Educational content and learning paths',
      icon: BookOpenIcon,
      colorClass: 'nav-armory',
      description: 'Comprehensive guides and educational resources',
      categories: [
        {
          id: 'beginner',
          title: 'Beginner Guides',
          description: 'Getting started with firearms',
          href: '/guides/beginner',
          badge: 'Start Here',
          items: [
            { id: 'safety', title: 'Firearms Safety', description: 'Essential safety rules', href: '/guides/beginner/safety' },
            { id: 'first-gun', title: 'Choosing Your First Gun', description: 'Buyer\'s guide for new owners', href: '/guides/beginner/first-gun' },
            { id: 'basic-shooting', title: 'Basic Shooting Techniques', description: 'Fundamental skills', href: '/guides/beginner/shooting' },
            { id: 'legal', title: 'Idaho Gun Laws', description: 'Legal requirements and regulations', href: '/guides/beginner/legal' }
          ]
        },
        {
          id: 'intermediate',
          title: 'Intermediate Training',
          description: 'Advancing your skills',
          href: '/guides/intermediate',
          items: [
            { id: 'marksmanship', title: 'Precision Marksmanship', description: 'Accuracy improvement', href: '/guides/intermediate/marksmanship' },
            { id: 'tactical', title: 'Tactical Shooting', description: 'Dynamic shooting skills', href: '/guides/intermediate/tactical' },
            { id: 'competitions', title: 'Competition Prep', description: 'Getting ready to compete', href: '/guides/intermediate/competitions' },
            { id: 'maintenance', title: 'Advanced Maintenance', description: 'Detailed care and cleaning', href: '/guides/intermediate/maintenance' }
          ]
        },
        {
          id: 'specialized',
          title: 'Specialized Training',
          description: 'Expert-level content',
          href: '/guides/specialized',
          items: [
            { id: 'long-range', title: 'Long Range Shooting', description: 'Extended distance techniques', href: '/guides/specialized/long-range' },
            { id: 'hunting', title: 'Hunting Applications', description: 'Field shooting skills', href: '/guides/specialized/hunting' },
            { id: 'defensive', title: 'Defensive Shooting', description: 'Personal protection skills', href: '/guides/specialized/defensive' },
            { id: 'instructor', title: 'Instructor Development', description: 'Teaching others', href: '/guides/specialized/instructor', isNew: true }
          ]
        }
      ],
      featured: [
        {
          id: 'featured-guide',
          title: 'Idaho CCW Complete Guide',
          description: 'Everything you need to know about concealed carry in Idaho',
          href: '/guides/idaho-ccw-complete',
          badge: 'Comprehensive',
          stats: [
            { label: 'Chapters', value: '12', trend: 'neutral' },
            { label: 'Read Time', value: '45 min', trend: 'neutral' },
            { label: 'Updated', value: 'Feb 2025', trend: 'up' }
          ],
          priority: 1
        }
      ],
      quickActions: [
        { id: 'all-guides', label: 'All Guides', href: '/guides', icon: BookOpenIcon, colorClass: 'nav-armory' },
        { id: 'learning-path', label: 'Learning Paths', href: '/guides/paths', icon: BookOpenIcon, colorClass: 'nav-armory' },
        { id: 'progress', label: 'My Progress', href: '/guides/progress', icon: StarIcon, colorClass: 'nav-armory', requiresAuth: true }
      ]
    }
  ]
}

// =================== COMPONENT INTERFACES ===================

interface IndustryMegamenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection?: string
  className?: string
  personalizationContext?: PersonalizationContext
}

// =================== SEARCH FUNCTIONALITY ===================

const useSearch = () => {
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = React.useState(false)
  
  const searchContent = React.useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }
    
    setIsSearching(true)
    
    // Simulate API call - replace with actual search implementation
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'Boise Tactical Supply',
          description: 'Full-service firearms dealer',
          href: '/directory/boise-tactical-supply',
          type: 'business',
          category: 'Gun Store',
          metadata: { rating: 4.9, location: 'Boise, ID' }
        },
        {
          id: '2', 
          title: 'Treasure Valley Precision Championship',
          description: 'Long-range shooting competition',
          href: '/events/treasure-valley-precision',
          type: 'event',
          category: 'Competition',
          metadata: { date: 'Mar 15, 2025', location: 'Meridian, ID' }
        },
        {
          id: '3',
          title: 'Vortex Viper PST Gen II Review',
          description: 'In-depth scope review',
          href: '/armory/vortex-viper-pst-gen-ii',
          type: 'article',
          category: 'Optics Review',
          badge: "Editor's Choice"
        }
      ].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      
      setResults(mockResults)
      setIsSearching(false)
    }, 300)
  }, [])
  
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchContent(query)
    }, 150)
    
    return () => clearTimeout(timeoutId)
  }, [query, searchContent])
  
  return {
    query,
    setQuery,
    results,
    isSearching
  }
}

// =================== MAIN COMPONENT ===================

export const IndustryMegamenu = React.memo(function IndustryMegamenu({
  isOpen,
  onClose,
  activeSection,
  className,
  personalizationContext
}: IndustryMegamenuProps) {
  const [hoveredSection, setHoveredSection] = React.useState<string | null>(activeSection || 'home')
  const { query, setQuery, results, isSearching } = useSearch()
  const [isSearchFocused, setIsSearchFocused] = React.useState(false)
  
  const menuSections = React.useMemo(() => createMenuSections(personalizationContext), [personalizationContext])
  
  const currentSection = React.useMemo(() => {
    return menuSections.find(section => section.id === (hoveredSection || activeSection))
  }, [hoveredSection, activeSection, menuSections])

  // Keyboard navigation support
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          onClose()
          break
        case 'ArrowLeft':
        case 'ArrowRight':
          if (document.activeElement?.getAttribute('role') === 'tab') {
            event.preventDefault()
            const currentIndex = menuSections.findIndex(section => section.id === hoveredSection)
            const nextIndex = event.key === 'ArrowRight' 
              ? (currentIndex + 1) % menuSections.length
              : (currentIndex - 1 + menuSections.length) % menuSections.length
            setHoveredSection(menuSections[nextIndex].id)
          }
          break
        case 'Tab':
          // Allow normal tab navigation but ensure focus stays within menu
          if (!event.shiftKey && document.activeElement === document.querySelector('[role="tab"]:last-of-type')) {
            // Focus would move outside menu, close it
            setTimeout(() => onClose(), 0)
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, hoveredSection, menuSections])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionDiv
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Megamenu Content */}
          <MotionDiv
            className={cn(
              "absolute top-full left-0 right-0 z-50",
              "mica-bg border-b border-border shadow-commanding",
              "overflow-hidden",
              className
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            role="region"
            aria-label="Main navigation menu"
            aria-expanded={isOpen}
          >
            <div className="max-w-7xl mx-auto">
              {/* Search Header */}
              <div className="border-b border-border/50 p-base">
                <div className="relative max-w-md mx-auto md:mx-0">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search events, businesses, gear, guides..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="pl-10 pr-4 bg-muted/50 border-muted-foreground/20 focus:bg-background w-full"
                    aria-label="Search site content"
                    aria-describedby={results.length > 0 ? "search-results" : undefined}
                    autoComplete="off"
                    role="searchbox"
                  />
                  {isSearching && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>
                
                {/* Search Results Dropdown */}
                {query && results.length > 0 && (
                  <MotionDiv
                    id="search-results"
                    className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-md shadow-elevated max-h-96 overflow-y-auto z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    role="listbox"
                    aria-label={`${results.length} search results`}
                  >
                    <div className="p-2">
                      {results.map((result) => (
                        <Link
                          key={result.id}
                          href={result.href}
                          onClick={onClose}
                          className="flex items-start gap-3 p-3 rounded-xs hover:bg-muted/30 transition-colors group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-rajdhani font-medium text-sm group-hover:text-primary transition-colors">
                                {result.title}
                              </span>
                              {result.badge && (
                                <Badge variant="status-info" className="text-xs">
                                  {result.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">{result.description}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="bg-muted/50 px-2 py-0.5 rounded-full">{result.category}</span>
                              {result.metadata?.location && (
                                <span>{result.metadata.location}</span>
                              )}
                              {result.metadata?.date && (
                                <span>{result.metadata.date}</span>
                              )}
                            </div>
                          </div>
                          <ChevronRightIcon className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5" />
                        </Link>
                      ))}
                    </div>
                  </MotionDiv>
                )}
              </div>
              
              {/* Horizontal Navigation Tabs - Extension of Main Navbar */}
              <div className="border-b border-border/50">
                <div className="flex items-stretch overflow-x-auto scrollbar-hide">
                  {menuSections.map((section, index) => (
                    <button
                      key={section.id}
                      className={cn(
                        "relative flex items-center gap-xs px-sm py-sm text-left transition-all duration-200 group whitespace-nowrap border-b-2 min-w-fit flex-shrink-0",
                        "hover:bg-muted/30 touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset",
                        hoveredSection === section.id 
                          ? `text-${section.colorClass} border-${section.colorClass} bg-${section.colorClass}/5` 
                          : "text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground/30"
                      )}
                      onMouseEnter={() => setHoveredSection(section.id)}
                      onClick={() => setHoveredSection(section.id)}
                      aria-pressed={hoveredSection === section.id}
                      aria-describedby={`section-${section.id}-desc`}
                      role="tab"
                    >
                      {/* Compact Icon */}
                      <section.icon className={cn(
                        "h-4 w-4 transition-colors flex-shrink-0",
                        hoveredSection === section.id ? `text-${section.colorClass}` : "text-muted-foreground group-hover:text-foreground"
                      )} />
                      
                      {/* Compact Tab Content */}
                      <div className="flex flex-col min-w-0">
                        <div className={cn(
                          "font-rajdhani font-medium text-xs transition-colors leading-tight truncate",
                          hoveredSection === section.id ? `text-${section.colorClass}` : "text-foreground group-hover:text-foreground"
                        )}>
                          {section.title}
                        </div>
                      </div>
                      
                      {/* Active indicator line */}
                      {hoveredSection === section.id && (
                        <MotionDiv
                          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${section.colorClass}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                        ></MotionDiv>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full-Width Content Area */}
              <div className="p-lg min-h-[500px]">
                  <AnimatePresence mode="wait">
                    {currentSection && (
                      <MotionDiv
                        key={currentSection.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                      >
                        {/* Section Header */}
                        <div className="mb-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-xs bg-${currentSection.colorClass}/20 flex items-center justify-center`}>
                              <currentSection.icon className={`h-5 w-5 text-${currentSection.colorClass}`} />
                            </div>
                            <div>
                              <h2 className="font-rajdhani font-bold text-xl text-foreground">
                                {currentSection.title}
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                {currentSection.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="flex gap-2 mt-3">
                            {currentSection.quickActions.map((action) => (
                              <Button
                                key={action.id}
                                asChild
                                size="sm"
                                variant="outline"
                                className="gap-2 text-xs"
                                onClick={onClose}
                              >
                                <Link href={action.href}>
                                  <action.icon className="h-3 w-3" />
                                  {action.label}
                                  {action.badge && (
                                    <Badge variant="secondary" className="ml-1 text-xs h-4 px-1">
                                      {action.badge}
                                    </Badge>
                                  )}
                                </Link>
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg h-full">
                          {/* Categories - Mobile stacked, Desktop 3 columns */}
                          <div className="lg:col-span-3 space-y-base lg:space-y-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-base lg:gap-lg">
                              {currentSection.categories.map((category) => (
                                <div key={category.id} className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <Link
                                      href={category.href}
                                      onClick={onClose}
                                      className="group flex items-center gap-2 hover:text-primary transition-colors"
                                    >
                                      <h3 className="font-rajdhani font-bold text-base">
                                        {category.title}
                                      </h3>
                                      <ArrowRightIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5" />
                                    </Link>
                                    {category.badge && (
                                      <Badge variant="status-info" className="text-xs">
                                        {category.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mb-3">
                                    {category.description}
                                  </p>
                                  
                                  <div className="space-y-1">
                                    {category.items.slice(0, 4).map((item) => (
                                      <Link
                                        key={item.id}
                                        href={item.href}
                                        onClick={onClose}
                                        className="group flex items-start gap-2 p-2 -mx-2 rounded-xs hover:bg-muted/30 transition-colors"
                                      >
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2">
                                            <span className="font-rajdhani font-medium text-sm group-hover:text-primary transition-colors">
                                              {item.title}
                                            </span>
                                            {item.isNew && (
                                              <Badge variant="status-info" className={`text-xs bg-${currentSection.colorClass}/20 text-${currentSection.colorClass} border-${currentSection.colorClass}/30`}>
                                                New
                                              </Badge>
                                            )}
                                            {item.badge && !item.isNew && (
                                              <Badge variant="status-info" className="text-xs">
                                                {item.badge}
                                              </Badge>
                                            )}
                                          </div>
                                          <p className="text-xs text-muted-foreground">
                                            {item.description}
                                          </p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* Recent Content for authenticated users */}
                            {currentSection.recentContent && currentSection.recentContent.length > 0 && (
                              <div className="pt-lg border-t border-border/30">
                                <h4 className="font-rajdhani font-medium text-sm text-muted-foreground mb-3">
                                  Recently Viewed
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  {currentSection.recentContent.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={onClose}
                                      className="group flex items-center gap-2 p-2 rounded-xs hover:bg-muted/30 transition-colors"
                                    >
                                      <ClockIcon className="h-3 w-3 text-muted-foreground" />
                                      <div className="flex-1 min-w-0">
                                        <span className="font-rajdhani font-medium text-xs group-hover:text-primary transition-colors truncate block">
                                          {item.title}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                          {item.category}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Featured Content Sidebar - 1 column */}
                          <div className="lg:col-span-1 space-y-lg">
                            {currentSection.featured.map((featured) => (
                              <Card 
                                key={featured.id}
                                className={`border-${currentSection.colorClass}/20 hover:shadow-elevated transition-all duration-300 group`}
                              >
                                <CardHeader className="pb-3">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge className={`bg-${currentSection.colorClass}/20 text-${currentSection.colorClass} border-${currentSection.colorClass}/30 text-xs`}>
                                      {featured.badge}
                                    </Badge>
                                  </div>
                                  <h4 className="font-rajdhani font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                                    {featured.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    {featured.description}
                                  </p>
                                </CardHeader>
                                <CardContent className="pt-0">
                                  {featured.stats && (
                                    <div className="grid grid-cols-1 gap-2 mb-3">
                                      {featured.stats.map((stat, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                          <span className="text-xs text-muted-foreground">
                                            {stat.label}
                                          </span>
                                          <span className="font-rajdhani font-bold text-xs text-foreground">
                                            {stat.value}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  <Button
                                    asChild
                                    className="w-full gap-2"
                                    size="sm"
                                    onClick={onClose}
                                  >
                                    <Link href={featured.href}>
                                      View Details
                                      <ArrowRightIcon className="h-3 w-3" />
                                    </Link>
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              </div>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  )
})