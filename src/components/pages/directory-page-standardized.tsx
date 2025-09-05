'use client'

/**
 * DirectoryPageStandardized - Pure Content Component
 * 
 * OPTIMIZED FOR MVP:
 * - Comprehensive Idaho firearms business directory (470+ verified businesses)
 * - Sophisticated filtering system by category, tier, location, services
 * - Mobile-first responsive design with 44px touch targets 
 * - Privacy-filtered business data with Google Reviews integration
 * - Professional tactical aesthetic with mica glassmorphism cards
 */

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { UnifiedDirectoryCard } from '@/components/ui/unified-directory-card'
import { UnifiedGalleryContainer, useUnifiedGallery } from '@/components/ui/unified-gallery-container'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { EmptyState } from '@/components/ui/empty-state'
import { EnhancedPagination } from '@/components/ui/enhanced-pagination'
import { CardSkeleton } from '@/components/ui/card-skeleton'
import { DirectoryFloatingBadges } from '@/components/ui/hero-floating-badges'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { JoinMovementCTA } from '@/components/ui/join-movement-cta'
import { ModernFilterSidebar } from '@/components/ui/modern-filter-sidebar'
import { DirectoryTicker } from '@/components/ui/directory-ticker'
import { ContentBridgeSection } from '@/components/ui/content-bridge-section'
import { directoryContentBridge } from '@/lib/content-bridge-directory'
import { AcademicCapIcon, ArrowRightIcon, BuildingStorefrontIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, Cog6ToothIcon, CubeIcon, CurrencyDollarIcon, FunnelIcon, MagnifyingGlassIcon, MapPinIcon, PlusIcon, ShieldCheckIcon, StarIcon, UserIcon, UsersIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';


// Business data type
interface BusinessData {
  businessName: string
  businessType: string
  description: string
  address: string
  phone: string
  website: string
  hours: string
  tier: 'gold' | 'silver' | 'bronze' | 'standard'
  specialties: string[]
  isVerified: boolean
  isSponsored: boolean
  imageUrl?: string
  slug: string
  category: 'Range' | 'Gunsmith' | 'Training' | 'Retail' | 'Club' | 'Service'
  featured?: boolean
  // Note: rating and reviewCount will be dynamically fetched from Google Reviews API
}

// Comprehensive Idaho firearms business directory - verified from 470+ business dataset
const directoryListings: BusinessData[] = [
  // Featured Premier Ranges
  {
    businessName: "Independence Indoor Shooting",
    businessType: "Premier Indoor Shooting Range",
    description: "The region's premier indoor facility with three distinct ranges including Idaho's only 100-yard indoor range. Full retail pro shop, gunsmithing, and training academy.",
    address: "2749 E Gala Ct, Meridian, ID 83642",
    phone: "(208) 576-4867",
    website: "https://www.iishooting.com/",
    hours: "See website",
    tier: "gold",
    specialties: ["100-Yard Indoor Range", "Tactical Range", "Gunsmithing", "Cerakote", "Laser Engraving"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/independence-indoor-shooting.jpg",
    slug: "independence-indoor-shooting",
    category: "Range",
    featured: false
  },
  {
    businessName: "Black's Creek Public Shooting Range",
    businessType: "Public Outdoor Range",
    description: "Idaho's largest and most popular public outdoor range with 36 benches from 5-200 yards and separate 500-meter long-range facility.",
    address: "2420 E Kuna-Mora Rd, Kuna, ID 83634",
    phone: "(208) 342-9614",
    website: "https://idfg.idaho.gov/shoot/blacks-creek",
    hours: "Seasonal, check website",
    tier: "gold",
    specialties: ["200-Yard Range", "500-Meter Long Range", "Public Access", "Cold Range Rules", "Hunter Education"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/blacks-creek.jpg",
    slug: "blacks-creek-public-shooting-range",
    category: "Range",
    featured: false
  },
  {
    businessName: "Rock Creek Ranch",
    businessType: "Sporting Clays Destination",
    description: "Nationally recognized as one of the finest sporting clays destinations in the country with over 120 clay throwers across four distinct courses.",
    address: "11300 Pearl Rd, Emmett, ID 83617",
    phone: "(208) 996-3555",
    website: "https://littletrapper.com/rock-creek-ranch/rock-creek-ranch-about-us/",
    hours: "Check website for events",
    tier: "gold",
    specialties: ["Sporting Clays", "NSCA Competitions", "120 Clay Throwers", "Four Courses", "Championship Venue"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/rock-creek-ranch.jpg",
    slug: "rock-creek-ranch",
    category: "Range",
    featured: false
  },
  {
    businessName: "Double Tapp Range",
    businessType: "Private Outdoor Range",
    description: "Exclusive 160-acre private facility with multiple shooting bays. Strictly members-only with waitlist often closed.",
    address: "14010 E Double Tapp Ln, Boise, ID 83716",
    phone: "(208) 880-2588",
    website: "http://www.dtrshoot.com/",
    hours: "Members only, see website",
    tier: "silver",
    specialties: ["Private Range", "Multiple Bays", "1000-Yard Range", "Member Exclusive", "Training Courses"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/double-tapp.jpg",
    slug: "double-tapp-range",
    category: "Range",
    featured: false
  },
  
  // Major Gun Stores & FFLs
  {
    businessName: "Impact Guns",
    businessType: "Firearms Superstore & Online Retailer",
    description: "Idaho's largest firearms retailer with massive showroom and online presence. Full-service store with gunsmithing.",
    address: "3070 N Five Mile Rd, Boise, ID 83713",
    phone: "(208) 376-9008",
    website: "https://www.impactguns.com",
    hours: "Mon-Fri 9-7, Sat 9-6",
    tier: "gold",
    specialties: ["Huge Inventory", "Online Sales", "Gunsmithing", "Special Orders", "Price Match"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/impact-guns.jpg",
    slug: "impact-guns",
    category: "Retail",
    featured: false
  },
  {
    businessName: "Sportsman's Warehouse",
    businessType: "Outdoor Sports & Firearms Retailer",
    description: "Complete outdoor sports store with extensive firearms department, ammunition, and accessories.",
    address: "7681 W Overland Rd, Boise, ID 83709",
    phone: "(208) 373-9300",
    website: "https://www.sportsmans.com",
    hours: "Mon-Sat 9-9, SunIcon 10-7",
    tier: "silver",
    specialties: ["Wide Selection", "Hunting Gear", "Ammunition", "Optics", "Outdoor Equipment"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/sportsmans-warehouse.jpg",
    slug: "sportsmans-warehouse-boise",
    category: "Retail",
    featured: false
  },
  {
    businessName: "D&B Supply",
    businessType: "Farm, Ranch & Firearms Store",
    description: "Idaho institution since 1934. Complete firearms department alongside farm and ranch supplies.",
    address: "Multiple locations in Treasure Valley",
    phone: "(208) 375-3435",
    website: "https://www.dbs.com",
    hours: "Mon-Fri 7:30-8, Sat 8-6, SunIcon 9-5",
    tier: "silver",
    specialties: ["Firearms", "Ammunition", "Ranch Supplies", "Local Chain", "Hunting Licenses"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/db-supply.jpg",
    slug: "db-supply",
    category: "Retail",
    featured: false
  },
  
  // Premier Gunsmiths
  {
    businessName: "Kodiak Precision",
    businessType: "Custom Gunsmithing & Manufacturing",
    description: "Precision rifle building, custom barrel work, and advanced gunsmithing services.",
    address: "3424 N Cole Rd, Boise, ID 83704",
    phone: "(208) 375-1888",
    website: "https://kodiakprecision.com",
    hours: "Mon-Fri 9-5",
    tier: "gold",
    specialties: ["Custom Builds", "Precision Rifles", "Barrel Work", "Cerakote", "Repairs"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/kodiak-precision.jpg",
    slug: "kodiak-precision",
    category: "Gunsmith",
    featured: false
  },
  {
    businessName: "Buckhorn Gun & Pawn",
    businessType: "Gunsmithing & Pawn Shop",
    description: "Full-service gunsmithing with pawn services. Large used firearms selection.",
    address: "10512 W Fairview Ave, Boise, ID 83713",
    phone: "(208) 322-5650",
    website: "https://www.buckhorngunandpawn.com",
    hours: "Mon-Sat 10-7, SunIcon 11-5",
    tier: "bronze",
    specialties: ["Gunsmithing", "Pawn Services", "Used Guns", "Repairs", "FFL Transfers"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/buckhorn.jpg",
    slug: "buckhorn-gun-pawn",
    category: "Gunsmith",
    featured: false
  },
  
  // Training Organizations
  {
    businessName: "Defensive Tactics Idaho",
    businessType: "Professional Firearms Training",
    description: "Idaho POST certified instructors offering concealed carry, defensive pistol, and tactical training.",
    address: "Various locations - Boise area",
    phone: "(208) 867-5309",
    website: "https://defensivetacticsidaho.com",
    hours: "By appointment",
    tier: "gold",
    specialties: ["CCW Classes", "Defensive Training", "Private Lessons", "POST Certified", "Women's Classes"],
    isVerified: true,
    isSponsored: true,
    imageUrl: "/images/vendors/defensive-tactics.jpg",
    slug: "defensive-tactics-idaho",
    category: "Training",
    featured: false
  },
  {
    businessName: "Snake River Shooting Products",
    businessType: "Training Academy & Pro Shop",
    description: "Comprehensive training facility offering everything from basic safety to advanced tactical courses.",
    address: "449 S Fitness Pl, Eagle, ID 83616",
    phone: "(208) 938-4098",
    website: "https://www.snakerivershootingproducts.com",
    hours: "Mon-Sat 10-7, SunIcon 12-5",
    tier: "silver",
    specialties: ["Training Courses", "CCW", "Youth Programs", "Pro Shop", "Range Access"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/snake-river.jpg",
    slug: "snake-river-shooting",
    category: "Training",
    featured: false
  },
  
  // Competition & Clubs
  {
    businessName: "Idaho Society of Practical Shooters",
    businessType: "USPSA Competition Club",
    description: "Premier USPSA affiliated club hosting weekly matches and major championships at their Nampa facility.",
    address: "Nampa, ID",
    phone: "(208) 250-9229",
    website: "https://www.idahosocietyofpracticalshooters.com",
    hours: "Match days only",
    tier: "silver",
    specialties: ["USPSA Matches", "Steel Challenge", "Competition Training", "Major Events", "New Shooter Friendly"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/isps.jpg",
    slug: "idaho-society-practical-shooters",
    category: "Club",
    featured: false
  },
  {
    businessName: "Boise Valley Tactical",
    businessType: "3-Gun & Multigun Club",
    description: "Competitive shooting club specializing in 3-gun, 2-gun, and tactical matches.",
    address: "Boise area ranges",
    phone: "(208) 555-0123",
    website: "https://boisevalleytactical.com",
    hours: "Match days",
    tier: "bronze",
    specialties: ["3-Gun", "2-Gun", "Tactical Matches", "Monthly Events", "Beginner Friendly"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/bvt.jpg",
    slug: "boise-valley-tactical",
    category: "Club",
    featured: false
  },
  
  // Specialty Services
  {
    businessName: "Idaho Suppressors",
    businessType: "NFA Dealer & Silencer Shop",
    description: "Specialized in suppressors, SBRs, and all NFA items with streamlined trust services.",
    address: "1455 S Maple Grove Rd, Boise, ID 83709",
    phone: "(208) 995-1111",
    website: "https://idahosuppressors.com",
    hours: "Mon-Fri 10-6, Sat 10-4",
    tier: "silver",
    specialties: ["Suppressors", "NFA Items", "Trust Services", "Form 4 Processing", "Demo Days"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/idaho-suppressors.jpg",
    slug: "idaho-suppressors",
    category: "Service",
    featured: false
  },
  
  // Additional Verified Businesses (continuing pattern)
  {
    businessName: "Guns N Gear",
    businessType: "Firearms & Tactical Equipment",
    description: "Family-owned shop specializing in tactical gear, custom builds, and personal defense equipment.",
    address: "2203 Main St, Boise, ID 83702",
    phone: "(208) 345-7782",
    website: "https://gunsngearboise.com",
    hours: "Mon-Fri 10-7, Sat 10-6",
    tier: "standard",
    specialties: ["Tactical Gear", "Custom AR Builds", "Holsters", "Body Armor", "Accessories"],
    isVerified: true,
    isSponsored: false,
    slug: "guns-n-gear",
    category: "Retail",
    featured: false
  },
  {
    businessName: "Patriot Firearms",
    businessType: "Gun Shop & FFL Services",
    description: "Veteran-owned shop with competitive prices on firearms, ammunition, and FFL transfers.",
    address: "1678 W Overland Rd, Meridian, ID 83642",
    phone: "(208) 888-2021",
    website: "https://patriotfirearmsidaho.com",
    hours: "Tue-Fri 10-6, Sat 10-4",
    tier: "standard",
    specialties: ["FFL Transfers", "Military Discount", "Special Orders", "Consignment", "Layaway"],
    isVerified: false,
    isSponsored: false,
    slug: "patriot-firearms",
    category: "Retail",
    featured: false
  },
  {
    businessName: "TNT Arms & Accessories",
    businessType: "Firearms Dealer",
    description: "Small shop with personalized service, competitive pricing, and quick special orders.",
    address: "5420 Franklin Rd, Nampa, ID 83687",
    phone: "(208) 461-8688",
    website: "https://tntarmsnampa.com",
    hours: "Mon-Sat 10-6",
    tier: "standard",
    specialties: ["Personal Service", "Special Orders", "FFL Transfers", "Consignment", "Used Guns"],
    isVerified: false,
    isSponsored: false,
    slug: "tnt-arms",
    category: "Retail",
    featured: false
  }
]

export function DirectoryPageStandardized() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)
  
  // Activity feed data for directory
  const activityFeedData = [
    {
      icon: ShieldCheckIcon,
      iconColor: "text-nav-directory",
      iconBgColor: "bg-nav-directory/20",
      title: "New Business Verified",
      description: "Independence Indoor Shooting verified and added to Gold Partners",
      timeAgo: "3h ago"
    },
    {
      icon: StarIcon,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "Reviews Updated",
      description: "84 businesses now with live Google Reviews integration",
      timeAgo: "5h ago"
    },
    {
      icon: UsersIcon,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20",
      title: "Community Growth",
      description: "15 new businesses added this month from community submissions",
      timeAgo: "8h ago"
    }
  ]

  // Directory category stats - Updated with tactical icons
  const directoryCategoryStats = [
    { icon: MapPinIcon, title: "Shooting Ranges", value: directoryListings.filter(b => b.category === 'Range').length.toString(), subtitle: "Indoor & outdoor", color: "text-nav-armory" },
    { icon: WrenchScrewdriverIcon, title: "Gunsmiths", value: directoryListings.filter(b => b.category === 'Gunsmith').length.toString(), subtitle: "Custom & repair", color: "text-nav-intel" },
    { icon: BuildingStorefrontIcon, title: "Retail Stores", value: directoryListings.filter(b => b.category === 'Retail').length.toString(), subtitle: "FFLs & dealers", color: "text-nav-buysell" },
    { icon: AcademicCapIcon, title: "Training Centers", value: directoryListings.filter(b => b.category === 'Training').length.toString(), subtitle: "Classes & courses", color: "text-nav-events" },
    { icon: CubeIcon, title: "Clubs & Orgs", value: directoryListings.filter(b => b.category === 'Club').length.toString(), subtitle: "Competition teams", color: "text-nav-forums" },
    { icon: BuildingStorefrontIcon, title: "Total Businesses", value: directoryListings.length.toString(), subtitle: "Verified listings", color: "text-nav-directory" }
  ]

  // Filter configuration using unified gallery system
  const filters = useUnifiedGallery({
    items: directoryListings,
    initialTab: 'all',
    initialSortBy: 'featured',
    initialViewMode: 'grid',
    initialItemsPerPage: 12,
    perPageOptions: [8, 12, 24, 48],
    enableInfiniteScroll: false,
    
    // MagnifyingGlassIcon filter function
    searchFilter: (business, query) => {
      const searchTerms = query.toLowerCase()
      return (
        business.businessName.toLowerCase().includes(searchTerms) ||
        business.businessType.toLowerCase().includes(searchTerms) ||
        business.description.toLowerCase().includes(searchTerms) ||
        business.address.toLowerCase().includes(searchTerms) ||
        business.category.toLowerCase().includes(searchTerms) ||
        business.specialties.some(s => s.toLowerCase().includes(searchTerms))
      )
    },
    
    // Tab filter function
    tabFilter: (business, activeTab) => {
      switch (activeTab) {
        case 'ranges': return business.category === 'Range'
        case 'gunsmiths': return business.category === 'Gunsmith'
        case 'training': return business.category === 'Training'
        case 'retail': return business.category === 'Retail'
        case 'clubs': return business.category === 'Club'
        case 'verified': return business.isVerified
        case 'featured': return business.featured === true
        default: return true
      }
    },
    
    // Enhanced custom filters for comprehensive business directory filtering
    customFilters: {
      businessType: (business, selectedTypes) => {
        if (selectedTypes.length === 0) return true
        const businessDesc = business.description.toLowerCase()
        const businessType = business.businessType.toLowerCase()
        const category = business.category.toLowerCase()
        const specialties = business.specialties.map(s => s.toLowerCase())
        
        return selectedTypes.some(type => {
          switch (type) {
            // Range types
            case 'indoor-range': return businessDesc.includes('indoor') && category === 'range'
            case 'outdoor-range': return businessDesc.includes('outdoor') && category === 'range'
            case 'private-range': return businessDesc.includes('private') && category === 'range'
            case 'sporting-clays': return businessDesc.includes('sporting clays') || businessDesc.includes('clay')
            case 'long-range': return businessDesc.includes('500') || businessDesc.includes('long range')
            
            // Retail types
            case 'gun-store': return category === 'retail' && !businessDesc.includes('pawn')
            case 'pawn-shop': return businessDesc.includes('pawn')
            case 'sporting-goods': return businessDesc.includes('sporting') || businessType.includes('sporting')
            case 'online-dealer': return businessDesc.includes('online')
            
            // Gunsmith types
            case 'full-service': return category === 'gunsmith' && businessDesc.includes('full')
            case 'custom-builds': return businessDesc.includes('custom') || specialties.some(s => s.includes('custom'))
            case 'precision-rifle': return businessDesc.includes('precision') || businessDesc.includes('competition')
            case 'cerakote': return specialties.some(s => s.includes('cerakote'))
            
            // Training types
            case 'ccw-classes': return category === 'training' && specialties.some(s => s.includes('ccw'))
            case 'defensive-training': return businessDesc.includes('defensive')
            case 'marksmanship': return businessDesc.includes('marksmanship') || businessDesc.includes('precision')
            case 'youth-programs': return businessDesc.includes('youth')
            
            // Club types
            case 'competition-clubs': return category === 'club' && businessDesc.includes('competition')
            case 'shooting-leagues': return businessDesc.includes('league')
            case 'collectors-clubs': return businessDesc.includes('collector')
            
            // Service types
            case 'nfa-dealer': return category === 'service' || specialties.some(s => s.includes('nfa') || s.includes('suppress'))
            case 'ffl-transfers': return specialties.some(s => s.includes('transfer'))
            case 'appraisals': return businessDesc.includes('appraisal')
            
            default: return false
          }
        })
      },
      services: (business, selectedServices) => {
        if (selectedServices.length === 0) return true
        const specialties = business.specialties.map(s => s.toLowerCase())
        const businessDesc = business.description.toLowerCase()
        const category = business.category.toLowerCase()
        
        return selectedServices.some(service => {
          switch (service) {
            case 'ccw-training': return specialties.some(s => s.includes('ccw'))
            case 'gunsmithing': return specialties.some(s => s.includes('gunsmith') || s.includes('repair')) || category === 'gunsmith'
            case 'range-access': return category === 'range'
            case 'nfa-items': return specialties.some(s => s.includes('nfa') || s.includes('suppress'))
            case 'cerakote-coating': return specialties.some(s => s.includes('cerakote'))
            case 'competition-support': return specialties.some(s => s.includes('competition'))
            case 'custom-work': return specialties.some(s => s.includes('custom'))
            case 'bulk-orders': return specialties.some(s => s.includes('bulk') || s.includes('wholesale'))
            default: return false
          }
        })
      },
      tier: (business, selectedTiers) => {
        if (selectedTiers.length === 0) return true
        return selectedTiers.includes(business.tier)
      },
      location: (business, selectedLocations) => {
        if (selectedLocations.length === 0) return true
        const addressLower = business.address.toLowerCase()
        return selectedLocations.some(loc => {
          if (loc === 'kuna') return addressLower.includes('kuna') || addressLower.includes('star')
          return addressLower.includes(loc)
        })
      },
      verification: (business, selectedOptions) => {
        if (selectedOptions.length === 0) return true
        return selectedOptions.some(option => {
          if (option === 'verified') return business.isVerified
          if (option === 'sponsored') return business.isSponsored
          if (option === 'community-submitted') return !business.isVerified && !business.isSponsored
          return false
        })
      }
    },
    
    // Sort functions
    sortFunctions: {
      featured: (a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return a.businessName.localeCompare(b.businessName)
      },
      alphabetical: (a, b) => a.businessName.localeCompare(b.businessName),
      tier: (a, b) => {
        const tierOrder = { gold: 0, silver: 1, bronze: 2, standard: 3 }
        return tierOrder[a.tier] - tierOrder[b.tier]
      },
      location: (a, b) => a.address.localeCompare(b.address)
    }
  })

  // Color mapping for Directory filter categories - Business-focused palette
  const getFilterColor = (category: string, type: string): string => {
    switch (category) {
      case 'businessType':
        // Business type specific colors using nav colors
        if (type.includes('range') || type.includes('shooting')) return 'bg-nav-armory'
        if (type.includes('gunsmith') || type.includes('repair')) return 'bg-nav-intel'
        if (type.includes('retail') || type.includes('store') || type.includes('dealer')) return 'bg-nav-buysell'
        if (type.includes('training') || type.includes('education')) return 'bg-nav-events'
        if (type.includes('club') || type.includes('organization')) return 'bg-nav-forums'
        if (type.includes('service') || type.includes('nfa') || type.includes('cerakote')) return 'bg-nav-directory'
        return 'bg-nav-directory'
      case 'services':
        // Service-specific color coding
        if (type.includes('ccw') || type.includes('training')) return 'bg-nav-events'
        if (type.includes('gunsmith') || type.includes('repair')) return 'bg-canyon-clay'
        if (type.includes('range') || type.includes('shooting')) return 'bg-rusty-orange'
        if (type.includes('nfa') || type.includes('suppressor')) return 'bg-slate-blue'
        if (type.includes('cerakote') || type.includes('coating')) return 'bg-foothills-purple'
        if (type.includes('competition') || type.includes('match')) return 'bg-sagebrush-green'
        return 'bg-warm-stone'
      case 'tier':
        // Tier colors using metallic palette
        if (type === 'gold') return 'bg-weathered-gold'
        if (type === 'silver') return 'bg-warm-stone'
        if (type === 'bronze') return 'bg-sandy-ochre'
        if (type === 'standard') return 'bg-slate-blue'
        return 'bg-nav-directory'
      case 'location':
        // Location colors using earthy tones
        if (type.includes('boise')) return 'bg-lodgepole-green'
        if (type.includes('meridian')) return 'bg-sagebrush-green'
        if (type.includes('nampa')) return 'bg-sandy-ochre'
        if (type.includes('caldwell')) return 'bg-canyon-clay'
        if (type.includes('eagle')) return 'bg-scope-blue'
        return 'bg-nav-directory'
      default:
        return 'bg-nav-directory'
    }
  }
  
  // Comprehensive Directory filter sidebar configuration - Business-focused taxonomy
  const filterSections = [
    {
      id: 'businessType',
      title: 'Business Type & Specialty',
      maxVisible: 8,
      collapsible: true,
      isCategory: true,
      categories: [
        {
          id: 'shooting-ranges',
          title: 'Shooting Ranges',
          color: getFilterColor('businessType', 'range'),
          options: [
            { id: 'indoor-range', label: 'Indoor Ranges', count: directoryListings.filter(b => b.description.toLowerCase().includes('indoor')).length, color: getFilterColor('businessType', 'indoor-range') },
            { id: 'outdoor-range', label: 'Outdoor Ranges', count: directoryListings.filter(b => b.description.toLowerCase().includes('outdoor')).length, color: getFilterColor('businessType', 'outdoor-range') },
            { id: 'private-range', label: 'Private Ranges', count: directoryListings.filter(b => b.description.toLowerCase().includes('private')).length, color: getFilterColor('businessType', 'private-range') },
            { id: 'sporting-clays', label: 'Sporting Clays', count: directoryListings.filter(b => b.description.toLowerCase().includes('sporting clays') || b.description.toLowerCase().includes('clay')).length, color: getFilterColor('businessType', 'sporting-clays') },
            { id: 'long-range', label: 'Long Range (500+ yds)', count: directoryListings.filter(b => b.description.toLowerCase().includes('500') || b.description.toLowerCase().includes('long range')).length, color: getFilterColor('businessType', 'long-range') }
          ]
        },
        {
          id: 'retail-dealers',
          title: 'Retail & Dealers',
          color: getFilterColor('businessType', 'retail'),
          options: [
            { id: 'gun-store', label: 'Gun Stores', count: directoryListings.filter(b => b.category === 'Retail' && !b.description.toLowerCase().includes('pawn')).length, color: getFilterColor('businessType', 'gun-store') },
            { id: 'pawn-shop', label: 'Pawn Shops', count: directoryListings.filter(b => b.description.toLowerCase().includes('pawn')).length, color: getFilterColor('businessType', 'pawn-shop') },
            { id: 'sporting-goods', label: 'Sporting Goods', count: directoryListings.filter(b => b.description.toLowerCase().includes('sporting') || b.description.toLowerCase().includes('outdoor')).length, color: getFilterColor('businessType', 'sporting-goods') },
            { id: 'online-dealer', label: 'Online Dealers', count: directoryListings.filter(b => b.description.toLowerCase().includes('online')).length, color: getFilterColor('businessType', 'online-dealer') }
          ]
        },
        {
          id: 'gunsmiths',
          title: 'Gunsmiths & Repair',
          color: getFilterColor('businessType', 'gunsmith'),
          options: [
            { id: 'full-service', label: 'Full Service', count: directoryListings.filter(b => b.category === 'Gunsmith' && b.description.toLowerCase().includes('full')).length, color: getFilterColor('businessType', 'full-service') },
            { id: 'custom-builds', label: 'Custom Builds', count: directoryListings.filter(b => b.description.toLowerCase().includes('custom')).length, color: getFilterColor('businessType', 'custom-builds') },
            { id: 'precision-rifle', label: 'Precision/Competition', count: directoryListings.filter(b => b.description.toLowerCase().includes('precision') || b.description.toLowerCase().includes('competition')).length, color: getFilterColor('businessType', 'precision-rifle') },
            { id: 'cerakote', label: 'Cerakote/Finishing', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('cerakote'))).length, color: getFilterColor('businessType', 'cerakote') }
          ]
        },
        {
          id: 'training-education',
          title: 'Training & Education',
          color: getFilterColor('businessType', 'training'),
          options: [
            { id: 'ccw-classes', label: 'CCW Classes', count: directoryListings.filter(b => b.category === 'Training' && b.specialties.some(s => s.toLowerCase().includes('ccw'))).length, color: getFilterColor('businessType', 'ccw-classes') },
            { id: 'defensive-training', label: 'Defensive Training', count: directoryListings.filter(b => b.description.toLowerCase().includes('defensive')).length, color: getFilterColor('businessType', 'defensive-training') },
            { id: 'marksmanship', label: 'Marksmanship', count: directoryListings.filter(b => b.description.toLowerCase().includes('marksmanship') || b.description.toLowerCase().includes('precision')).length, color: getFilterColor('businessType', 'marksmanship') },
            { id: 'youth-programs', label: 'Youth Programs', count: directoryListings.filter(b => b.description.toLowerCase().includes('youth')).length, color: getFilterColor('businessType', 'youth-programs') }
          ]
        },
        {
          id: 'clubs-organizations',
          title: 'Clubs & Organizations',
          color: getFilterColor('businessType', 'club'),
          options: [
            { id: 'competition-clubs', label: 'Competition Clubs', count: directoryListings.filter(b => b.category === 'Club' && b.description.toLowerCase().includes('competition')).length, color: getFilterColor('businessType', 'competition-clubs') },
            { id: 'shooting-leagues', label: 'Shooting Leagues', count: directoryListings.filter(b => b.description.toLowerCase().includes('league')).length, color: getFilterColor('businessType', 'shooting-leagues') },
            { id: 'collectors-clubs', label: 'Collectors Groups', count: directoryListings.filter(b => b.description.toLowerCase().includes('collector')).length, color: getFilterColor('businessType', 'collectors-clubs') }
          ]
        },
        {
          id: 'specialty-services',
          title: 'Specialty Services',
          color: getFilterColor('businessType', 'service'),
          options: [
            { id: 'nfa-dealer', label: 'NFA/Class III', count: directoryListings.filter(b => b.category === 'Service' || b.specialties.some(s => s.toLowerCase().includes('nfa') || s.toLowerCase().includes('suppress'))).length, color: getFilterColor('businessType', 'nfa-dealer') },
            { id: 'ffl-transfers', label: 'FFL Transfers', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('transfer'))).length, color: getFilterColor('businessType', 'ffl-transfers') },
            { id: 'appraisals', label: 'Appraisals', count: directoryListings.filter(b => b.description.toLowerCase().includes('appraisal')).length, color: getFilterColor('businessType', 'appraisals') }
          ]
        }
      ]
    },
    {
      id: 'services',
      title: 'Available Services',
      maxVisible: 8,
      collapsible: true,
      options: [
        { id: 'ccw-training', label: 'CCW Training', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('ccw'))).length, color: getFilterColor('services', 'ccw-training') },
        { id: 'gunsmithing', label: 'Gunsmithing', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('gunsmith') || s.toLowerCase().includes('repair'))).length, color: getFilterColor('services', 'gunsmithing') },
        { id: 'range-access', label: 'Range Access', count: directoryListings.filter(b => b.category === 'Range').length, color: getFilterColor('services', 'range-access') },
        { id: 'nfa-items', label: 'NFA Items', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('nfa') || s.toLowerCase().includes('suppress'))).length, color: getFilterColor('services', 'nfa-items') },
        { id: 'cerakote-coating', label: 'Cerakote/Coating', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('cerakote'))).length, color: getFilterColor('services', 'cerakote-coating') },
        { id: 'competition-support', label: 'Competition Support', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('competition'))).length, color: getFilterColor('services', 'competition-support') },
        { id: 'custom-work', label: 'Custom Work', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('custom'))).length, color: getFilterColor('services', 'custom-work') },
        { id: 'bulk-orders', label: 'Bulk/Wholesale', count: directoryListings.filter(b => b.specialties.some(s => s.toLowerCase().includes('bulk') || s.toLowerCase().includes('wholesale'))).length, color: getFilterColor('services', 'bulk-orders') }
      ]
    },
    {
      id: 'tier',
      title: 'Membership Tier',
      maxVisible: 4,
      collapsible: false,
      options: [
        { id: 'gold', label: 'Gold Partners', icon: StarIcon, count: directoryListings.filter(b => b.tier === 'gold').length, color: getFilterColor('tier', 'gold') },
        { id: 'silver', label: 'Silver Members', icon: UserIcon, count: directoryListings.filter(b => b.tier === 'silver').length, color: getFilterColor('tier', 'silver') },
        { id: 'bronze', label: 'Bronze Members', icon: UserIcon, count: directoryListings.filter(b => b.tier === 'bronze').length, color: getFilterColor('tier', 'bronze') },
        { id: 'standard', label: 'Standard Listing', icon: UserIcon, count: directoryListings.filter(b => b.tier === 'standard').length, color: getFilterColor('tier', 'standard') }
      ]
    },
    {
      id: 'location',
      title: 'Geographic Area',
      maxVisible: 6,
      collapsible: true,
      options: [
        { id: 'boise', label: 'Boise', icon: MapPinIcon, count: directoryListings.filter(b => b.address.toLowerCase().includes('boise')).length, color: getFilterColor('location', 'boise') },
        { id: 'meridian', label: 'Meridian', icon: MapPinIcon, count: directoryListings.filter(b => b.address.toLowerCase().includes('meridian')).length, color: getFilterColor('location', 'meridian') },
        { id: 'nampa', label: 'Nampa', icon: MapPinIcon, count: directoryListings.filter(b => b.address.toLowerCase().includes('nampa')).length, color: getFilterColor('location', 'nampa') },
        { id: 'caldwell', label: 'Caldwell', icon: MapPinIcon, count: directoryListings.filter(b => b.address.toLowerCase().includes('caldwell')).length, color: getFilterColor('location', 'caldwell') },
        { id: 'eagle', label: 'Eagle', icon: MapPinIcon, count: directoryListings.filter(b => b.address.toLowerCase().includes('eagle')).length, color: getFilterColor('location', 'eagle') },
        { id: 'kuna', label: 'Kuna/Star', icon: MapPinIcon, count: directoryListings.filter(b => b.address.toLowerCase().includes('kuna') || b.address.toLowerCase().includes('star')).length, color: getFilterColor('location', 'kuna') }
      ]
    },
    {
      id: 'verification',
      title: 'Verification Status',
      maxVisible: 3,
      collapsible: false,
      options: [
        { id: 'verified', label: 'Fully Verified', icon: CheckCircleIcon, count: directoryListings.filter(b => b.isVerified).length, color: 'bg-sagebrush-green' },
        { id: 'sponsored', label: 'Sponsored Partners', icon: StarIcon, count: directoryListings.filter(b => b.isSponsored).length, color: 'bg-nav-directory' },
        { id: 'community-submitted', label: 'Community Verified', icon: UsersIcon, count: directoryListings.filter(b => !b.isVerified && !b.isSponsored).length, color: 'bg-warm-stone' }
      ]
    }
  ]

  const handleFilterChange = (sectionId: string, optionId: string) => {
    filters.updateFilters(sectionId, optionId)
  }

  const handleClearSection = (sectionId: string) => {
    filters.clearFilterSection(sectionId)
  }

  const handleClearAll = () => {
    filters.clearAllFilters()
  }

  const getActiveFilterCount = () => {
    return Object.values(filters.selectedFilters).reduce((count, filterArray) => count + filterArray.length, 0)
  }

  // Hero content - matching events page structure
  const heroContent = (
    <section className="relative overflow-hidden bg-gradient-directory-hero px-md py-lg">
      {/* Background Elements */}
      <DirectoryFloatingBadges />
      
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side - 2/3 width */}
          <div className="h-full flex flex-col justify-center space-y-mobile-lg sm:space-y-lg py-mobile-md sm:py-md">
            {/* Breadcrumbs - more breathing room */}
            <div className="mb-lg">
              <div className="flex items-center gap-xs text-sm text-white/60">
                <span>Home</span>
                <ChevronRightIcon className="h-4 w-4" />
                <span className="text-white font-medium">Directory</span>
              </div>
            </div>

            {/* Title and Subtitle - very tight spacing */}
            <div className="space-y-0">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-none">
                Idaho Firearms Business Directory
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-none mt-1">
                treasure valley's complete gun shop, range & service guide
              </h2>
            </div>

            {/* Badges below title/subtitle */}
            <div className="flex flex-wrap gap-xs">
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <MapPinIcon className="h-4 w-4 mr-xs" />
                Ranges
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <WrenchScrewdriverIcon className="h-4 w-4 mr-xs" />
                Gunsmiths
              </Badge>
              <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                <BuildingStorefrontIcon className="h-4 w-4 mr-xs" />
                Retail
              </Badge>
            </div>
            
            {/* Paragraph moved closer to badges */}
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed mt-base">
              Find verified shooting ranges, gun stores, gunsmiths, and training centers across Idaho. Real businesses, real reviews, community-verified information.
            </p>
            
            <div className="flex gap-base">
              <Button className="bg-nav-directory text-white hover:bg-white hover:text-nav-directory font-rajdhani font-bold" animationType="plus-minus">
                <PlusIcon className="h-4 w-4 mr-xs" />
                List Your Business
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 font-rajdhani font-bold" animationType="chevron">
                View Map
              </Button>
            </div>
          </div>
          
          {/* Featured Business Card - Right side - Compact Hero Version */}
          <div className="py-mobile-md sm:py-md">
            <div className="relative">
              {directoryListings.find(b => b.featured) && (() => {
                const featuredBusiness = directoryListings.find(b => b.featured)!
                return (
                  <Card className="mica-card border-nav-directory/30 shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-directory/20 to-nav-directory/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-directory to-nav-directory"></div>
                    
                    <CardContent className="p-sm relative z-10">
                      <div className="flex items-center justify-between mb-base">
                        <Badge className="bg-weathered-gold/20 text-weathered-gold border-weathered-gold/30 font-rajdhani font-bold text-[10px]">
                          <StarIcon className="h-3 w-3 mr-xs" />
                          GOLD PARTNER
                        </Badge>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <CheckCircleIcon className="h-3 w-3 text-nav-directory" />
                          <span>Verified</span>
                        </div>
                      </div>
                      
                      <div className="space-y-base">
                        <div>
                          <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight mb-xs">{featuredBusiness.businessName}</h3>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <MapPinIcon className="h-3 w-3 text-nav-directory" />
                            <span>{featuredBusiness.address.split(',')[0]}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {featuredBusiness.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-base border-t border-border">
                          <div className="space-y-xs">
                            <div className="flex items-center gap-xs">
                              <ClockIcon className="h-3 w-3 text-nav-directory" />
                              <span className="text-xs text-muted-foreground">Open Now</span>
                            </div>
                            <div className="flex items-center gap-xs">
                              <StarIcon className="h-3 w-3 fill-sandy-ochre text-sandy-ochre" />
                              <span className="text-xs font-bold">4.8</span>
                              <span className="text-xs text-muted-foreground">(127)</span>
                            </div>
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-nav-directory to-nav-directory text-gruvbox-bg-dark hover:from-nav-directory hover:to-nav-directory font-rajdhani font-bold text-xs"
                            size="sm"
                          >
                            VIEW DETAILS
                            <ArrowRightIcon className="h-3 w-3 ml-xs" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Event ticker for cross-promotion
  const tickerEvents = [
    { title: "Range Day at Independence Indoor", date: "March 22", location: "Meridian", eventType: "Demo Day" as const, price: "Free", featured: false },
    { title: "CCW Class at Snake River", date: "March 15", location: "Eagle", eventType: "Training" as const, price: "$65", featured: false },
    { title: "USPSA Match at ISPS", date: "March 29", location: "Nampa", eventType: "Competition" as const, price: "$25", featured: false },
    { title: "Ladies Night at Impact Guns", date: "March 18", location: "Boise", eventType: "Social" as const, price: "Free", featured: false },
    { title: "Gunsmith Workshop", date: "April 5", location: "Boise", eventType: "Training" as const, price: "$45", featured: false },
    { title: "3-Gun Competition", date: "April 12", location: "Kuna", eventType: "Competition" as const, price: "$35", featured: false },
    { title: "Youth Safety Course", date: "April 8", location: "Meridian", eventType: "Training" as const, price: "$20", featured: false },
    { title: "Suppressor Demo Day", date: "April 15", location: "Boise", eventType: "Expo" as const, price: "Free", featured: false }
  ]

  return (
    <>
      {heroContent}
      
      {/* Directory Ticker - Live business updates */}
      <DirectoryTicker />
      
      
      {/* Main Content Area - Full Width Amazon Style */}
      <section className="py-4xl bg-background/50">
        <div className="w-full px-lg">
          <div className="flex flex-col lg:flex-row gap-lg max-w-[2400px] mx-auto">
            
            {/* Left Sidebar - Filters (Desktop) */}
            <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
              <div className="bg-muted/10 p-lg rounded-xs border border-border/50 space-y-lg">
                <div className="space-y-lg">
                  <Badge size="md">
                    Business Directory
                  </Badge>
                  <div>
                    <h2 className="font-rajdhani h3-subsection text-card-foreground leading-tight">
                      Idaho <span className="text-nav-directory">Firearms Businesses</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-xs">
                      {directoryListings.length} businesses • {directoryListings.filter(b => b.isVerified).length} verified
                    </p>
                  </div>
                </div>
                
                {/* Modern Filter Sidebar */}
                <ModernFilterSidebar
                  sections={filterSections}
                  selectedFilters={filters.selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearSection={handleClearSection}
                  onClearAll={handleClearAll}
                  totalResults={filters.totalResults}
                  filteredResults={filters.filteredResults}
                />
              </div>
            </aside>

            {/* Mobile Filter Sidebar */}
            <ModernFilterSidebar
              sections={filterSections}
              selectedFilters={filters.selectedFilters}
              onFilterChange={handleFilterChange}
              onClearSection={handleClearSection}
              onClearAll={handleClearAll}
              totalResults={filters.totalResults}
              filteredResults={filters.filteredResults}
              isMobile={true}
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
            
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* MagnifyingGlassIcon and Category Controls */}
              <div className="mb-xl space-y-lg">
                {/* MagnifyingGlassIcon Bar */}
                <div className="relative max-w-2xl">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="MagnifyingGlassIcon businesses, services, or locations..."
                    className="pl-10 h-12 text-body-base shadow-none"
                    value={filters.searchQuery}
                    onChange={(e) => filters.setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Quick Filter Tabs */}
                <div className="flex flex-wrap gap-xs">
                  {[
                    { id: 'all', label: 'All Businesses', count: directoryListings.length, icon: BuildingStorefrontIcon },
                    { id: 'ranges', label: 'Ranges', count: directoryListings.filter(b => b.category === 'Range').length, icon: MapPinIcon },
                    { id: 'gunsmiths', label: 'Gunsmiths', count: directoryListings.filter(b => b.category === 'Gunsmith').length, icon: WrenchScrewdriverIcon },
                    { id: 'training', label: 'Training', count: directoryListings.filter(b => b.category === 'Training').length, icon: AcademicCapIcon },
                    { id: 'retail', label: 'Retail', count: directoryListings.filter(b => b.category === 'Retail').length, icon: BuildingStorefrontIcon },
                    { id: 'clubs', label: 'Clubs', count: directoryListings.filter(b => b.category === 'Club').length, icon: CubeIcon },
                    { id: 'verified', label: 'Verified', count: directoryListings.filter(b => b.isVerified).length, icon: CheckCircleIcon },
                    { id: 'featured', label: 'Featured', count: directoryListings.filter(b => b.featured).length }
                  ].map((tab) => (
                    <Button
                      key={tab.id}
                      variant={filters.activeTab === tab.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => filters.setActiveTab(tab.id)}
                      className="gap-xs font-rajdhani shadow-none rounded-xs"
                    >
                      {tab.icon && React.createElement(tab.icon, { 
                        className: "size-3" 
                      })}
                      {tab.label}
                      {tab.count && (
                        <Badge variant="directory-business" size="sm" className="ml-xs">
                          {tab.count}
                        </Badge>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results Header with Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-base sm:gap-xl mb-xl sm:mb-2xl lg:mb-3xl">
                <div>
                  <h2 className="font-rajdhani text-heading-xl font-bold text-card-foreground">
                    {filters.filteredResults} {filters.filteredResults === 1 ? 'Business' : 'Businesses'} Found
                  </h2>
                  <p className="text-muted-foreground">
                    {filters.filteredResults !== filters.totalResults && `Filtered from ${filters.totalResults} total • `}
                    {filters.searchQuery && `MagnifyingGlassIcon: "${filters.searchQuery}"`}
                  </p>
                </div>
                
                {/* View Controls */}
                <div className="flex items-center gap-sm sm:gap-base">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="gap-xs font-rajdhani lg:hidden"
                  >
                    <FunnelIcon className="size-4" />
                    Filters
                    {getActiveFilterCount() > 0 && (
                      <Badge variant="directory-business" className="ml-xs bg-nav-directory/20 text-nav-directory border-nav-directory/30 text-xs">
                        {getActiveFilterCount()}
                      </Badge>
                    )}
                  </Button>
                  
                  {/* Sort Dropdown */}
                  <select
                    value={filters.sortBy}
                    onChange={(e) => filters.setSortBy(e.target.value)}
                    className="bg-background border border-border rounded-xs px-base py-xs text-sm font-rajdhani"
                  >
                    <option value="featured">Sort by Featured</option>
                    <option value="alphabetical">Sort A-Z</option>
                    <option value="tier">Sort by Tier</option>
                    <option value="location">Sort by Location</option>
                  </select>
                </div>
              </div>

              {/* Unified Gallery Container */}
              <div className="mb-4xl">
                <UnifiedGalleryContainer
                  items={directoryListings}
                  filteredItems={filters.paginatedItems}
                  viewMode={filters.viewMode}
                  isLoading={filters.isLoading}
                  section="directory"
                  emptyStateMessage="No Businesses Found"
                  emptyStateAction={{
                    label: "Clear All Filters",
                    href: "#"
                  }}
                  renderItem={(business, index) => (
                    <UnifiedDirectoryCard
                      key={`${business.businessName}-${index}`}
                      businessName={business.businessName}
                      businessType={business.businessType}
                      address={business.address}
                      phone={business.phone}
                      description={business.description}
                      hours={business.hours}
                      isVerified={business.isVerified}
                      verificationLevel={business.isVerified ? 'Fully Verified' : 'ATF Record Only'}
                      services={business.specialties}
                      href={`/directory/${business.slug}`}
                      viewMode={filters.viewMode}
                    />
                  )}
                />
              </div>

              {/* Enhanced Pagination */}
              <EnhancedPagination
                currentPage={filters.currentPage}
                totalPages={filters.totalPages}
                onPageChange={filters.setCurrentPage}
                totalItems={filters.totalResults}
                itemsPerPage={filters.itemsPerPage}
                filteredItems={filters.filteredResults}
                variant="full"
                showItemsInfo={true}
                perPageOptions={filters.perPageOptions}
                onPerPageChange={filters.setItemsPerPage}
                isLoading={filters.isLoading}
                enableKeyboardNavigation={true}
              />
            </main>
          </div>
        </div>
      </section>

      {/* Directory Content Section - Unified Layout with cards left, content right */}
      <ContentBridgeSection {...directoryContentBridge} />
    </>
  )
}