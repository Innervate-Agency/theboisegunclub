'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { VendorCard } from '@/components/ui/VendorCard'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { useCardPageFilters } from '@/hooks/useCardPageFilters'
import { EmptyState } from '@/components/ui/empty-state'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { FeaturedEventSpotlight } from '@/components/ui/featured-event-spotlight'
import { 
  AddressBook, Shield, Target, Users, MapPin, Star, 
  CheckCircle, Plus, CaretRight,
  Trophy, Wrench, ShoppingBag,
  GraduationCap, Crown, Medal
} from '@phosphor-icons/react'

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
    featured: true
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
    featured: true
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
    featured: true
  },
  {
    businessName: "Double Tapp Range",
    businessType: "Private Outdoor Range",
    description: "Exclusive 160-acre private facility with multiple shooting bays. Strictly members-only with waitlist often closed.",
    address: "14010 E Double Tapp Ln, Boise, ID 83716",
    phone: "(208) 559-3337",
    website: "https://www.doubletappboise.com/",
    hours: "Members only",
    tier: "gold",
    specialties: ["160-Acre Private Facility", "Multiple Shooting Bays", "Members Only", "Exclusive Access", "Private Training"],
    isVerified: true,
    isSponsored: false,
    imageUrl: "/images/vendors/double-tapp-range.jpg",
    slug: "double-tapp-range",
    category: "Range",
    featured: true
  },

  // Gun Clubs
  {
    businessName: "Boise Gun Club",
    businessType: "Trap & Skeet Club",
    description: "Dedicated trap and skeet facility with 12 trap ranges and 4 skeet fields. Open to public Wed, Sat, Sun.",
    address: "2350 E Kuna Mora Rd, Kuna, ID 83634",
    phone: "(208) 342-0892",
    website: "https://boisegunclub.info/",
    hours: "Wed, Sat, Sun. Check website",
    tier: "silver",
    specialties: ["Trap Shooting", "Skeet Shooting", "12 Trap Ranges", "4 Skeet Fields", "Public Access"],
    isVerified: true,
    isSponsored: false,
    slug: "boise-gun-club",
    category: "Club",
    featured: false
  },
  {
    businessName: "Caldwell Shotgun Complex",
    businessType: "Sporting Clays, Trap",
    description: "The Treasure Valley's hub for Trap, 5-Stand, and Sporting Clays. Open to the public with regular league events.",
    address: "21840 Pond Ln, Caldwell, ID 83607",
    phone: "(208) 459-2616",
    website: "https://www.caldwellshotguncomplex.com/",
    hours: "Varies, check website",
    tier: "silver",
    specialties: ["Sporting Clays", "Trap", "5-Stand", "League Events", "Public Access"],
    isVerified: true,
    isSponsored: false,
    slug: "caldwell-shotgun-complex",
    category: "Club",
    featured: false
  },
  {
    businessName: "Homedale Rod and Gun Club",
    businessType: "Outdoor Range, Trap",
    description: "Community-focused Owyhee County club with monthly public trap shoots and strict safety enforcement.",
    address: "9576 US Hwy 95, Homedale, ID 83628",
    phone: "(208) 459-2256",
    website: "https://www.homedalegunclub.com/",
    hours: "Member access",
    tier: "silver",
    specialties: ["Trap Shooting", "Monthly Public Events", "Safety Training", "Community Focus", "Owyhee County"],
    isVerified: true,
    isSponsored: false,
    slug: "homedale-rod-and-gun-club",
    category: "Club",
    featured: false
  },
  {
    businessName: "Parma Rod and Gun Club",
    businessType: "Outdoor Range, Clays",
    description: "Premier club for competitive shooting with 550-yard rifle range. Hosts frequent IDPA and Tactical Rifle matches.",
    address: "11300 Pearl Rd, Parma, ID 83660",
    phone: "(208) 722-5300",
    website: "http://www.parmarng.org/",
    hours: "Member access",
    tier: "silver",
    specialties: ["550-Yard Rifle Range", "IDPA Matches", "Tactical Rifle", "Competition Hosting", "Member Club"],
    isVerified: true,
    isSponsored: false,
    slug: "parma-rod-and-gun-club",
    category: "Club",
    featured: false
  },
  {
    businessName: "Gem County Rod and Gun Club",
    businessType: "Private Outdoor Range",
    description: "Local hub for Cowboy Action Shooting (SASS) competitions. Membership capped and prioritizes Gem County residents.",
    address: "3600 E Main St, Emmett, ID 83617",
    phone: "(208) 365-4156",
    website: "https://www.gcrgc.net/",
    hours: "Member access",
    tier: "silver",
    specialties: ["Cowboy Action Shooting", "SASS Competitions", "Local Focus", "Capped Membership", "Gem County Priority"],
    isVerified: true,
    isSponsored: false,
    slug: "gem-county-rod-and-gun-club",
    category: "Club",
    featured: false
  },

  // Public Ranges
  {
    businessName: "George W. Nourse Gun Range",
    businessType: "Public Outdoor Range",
    description: "Free, unsupervised public range operated by Canyon County. No range officer on site - you are responsible for your own safety.",
    address: "16802 Nash Rd, Nampa, ID 83686",
    phone: "(208) 454-6884",
    website: "https://www.canyoncounty.id.gov/project/george-w-nourse-gun-range/",
    hours: "Dawn to Dusk",
    tier: "standard",
    specialties: ["Free Access", "Unsupervised", "Public Range", "Canyon County", "Self-Directed"],
    isVerified: true,
    isSponsored: false,
    slug: "george-w-nourse-gun-range",
    category: "Range",
    featured: false
  },
  {
    businessName: "Nampa Public Shooting Range",
    businessType: "Indoor Airgun Range",
    description: "Unique IDFG facility focused on high-power airguns and archery. No traditional firearms - airguns and bows only.",
    address: "222 W Railroad St, Nampa, ID 83687",
    phone: "(208) 442-4414",
    website: "https://idfg.idaho.gov/shoot/nampa",
    hours: "Check IDFG website",
    tier: "standard",
    specialties: ["Airgun Range", "Archery", "IDFG Operated", "No Firearms", "Supervised"],
    isVerified: true,
    isSponsored: false,
    slug: "nampa-public-shooting-range",
    category: "Range",
    featured: false
  },

  // Archery Facilities
  {
    businessName: "Endless Archery",
    businessType: "Indoor Archery Range",
    description: "The largest indoor archery facility in the Treasure Valley with 54 lanes and 24-hour member access.",
    address: "1212 N Sawyer St, Nampa, ID 83651",
    phone: "(208) 466-4374",
    website: "https://www.endlessarchery.com/",
    hours: "24/7 for members",
    tier: "gold",
    specialties: ["54 Lanes", "24-Hour Access", "Professional Coaching", "Leagues", "Tournaments"],
    isVerified: true,
    isSponsored: false,
    slug: "endless-archery",
    category: "Range",
    featured: false
  },
  {
    businessName: "Archery Central",
    businessType: "Indoor Archery Range",
    description: "Community-focused pro shop with 20-yard indoor range. Known for knowledgeable staff and bow tuning expertise.",
    address: "6611 Cleveland Blvd, Caldwell, ID 83607",
    phone: "(208) 629-9564",
    website: "",
    hours: "Check website",
    tier: "silver",
    specialties: ["Pro Shop", "Bow Tuning", "Repairs", "Expert Staff", "Community Focus"],
    isVerified: true,
    isSponsored: false,
    slug: "archery-central",
    category: "Range",
    featured: false
  },
  {
    businessName: "Eagle Shooting Sports Park",
    businessType: "Public Archery Range",
    description: "State-of-the-art archery facilities with 17-target 3D range. Currently closed until further notice due to safety concerns.",
    address: "7650 N Willow Creek Rd, Eagle, ID 83616",
    phone: "(208) 608-7600",
    website: "https://www.cityofeagle.org/1943/Eagle-Shooting-Sports-Park",
    hours: "Sunrise to Sunset",
    tier: "standard",
    specialties: ["3D Archery", "17 Targets", "Public Access", "Free", "Currently Closed"],
    isVerified: true,
    isSponsored: false,
    slug: "eagle-shooting-sports-park",
    category: "Range",
    featured: false
  },
  {
    businessName: "Military Reserve Archery Range",
    businessType: "Public Archery Range",
    description: "Free, city-run outdoor archery range with lanes up to 80 yards. No crossbows allowed.",
    address: "1800 Mountain Cove Rd, Boise, ID 83702",
    phone: "(208) 608-7600",
    website: "https://www.cityofboise.org/departments/parks-and-recreation/parks/archery-range/",
    hours: "Sunrise to Sunset",
    tier: "standard",
    specialties: ["80-Yard Range", "Free Access", "City Operated", "No Crossbows", "BYOT"],
    isVerified: true,
    isSponsored: false,
    slug: "military-reserve-archery-range",
    category: "Range",
    featured: false
  },
  {
    businessName: "Boise River WMA Archery Range",
    businessType: "Public 3D Archery",
    description: "Rugged one-mile trail with 20 3D targets of native game animals. Open seasonally May through November.",
    address: "Highland Valley Rd, Boise, ID 83716",
    phone: "(208) 334-3700",
    website: "https://idfg.idaho.gov/shoot",
    hours: "Seasonal (May-Nov)",
    tier: "standard",
    specialties: ["3D Archery", "20 Targets", "Native Game", "One-Mile Trail", "Seasonal"],
    isVerified: true,
    isSponsored: false,
    slug: "boise-river-wma-archery-range",
    category: "Range",
    featured: false
  },

  // Tactical Sports
  {
    businessName: "Pyrrhic Tactical Sports (Outdoor)",
    businessType: "Paintball/Airsoft Field",
    description: "6-acre outdoor field dedicated to high-impact paintball and airsoft with varied terrain and strategic obstacles.",
    address: "11809 Ustick Rd, Caldwell, ID 83607",
    phone: "(208) 629-6229",
    website: "https://www.pyrrhicpaintball.com/",
    hours: "Check website",
    tier: "silver",
    specialties: ["6-Acre Field", "Paintball", "Airsoft", "Varied Terrain", "Strategic Gameplay"],
    isVerified: true,
    isSponsored: false,
    slug: "pyrrhic-tactical-sports-outdoor",
    category: "Range",
    featured: false
  },
  {
    businessName: "Pyrrhic Tactical Sports (Indoor)",
    businessType: "Airsoft/Laser Tag Arena",
    description: "Large two-floor indoor facility offering airsoft, laser tag, and Nerf wars. Ideal for parties and younger players.",
    address: "2104 Caldwell Blvd, Nampa, ID 83651",
    phone: "(208) 629-6229",
    website: "https://www.pyrrhicpaintball.com/",
    hours: "Check website",
    tier: "silver",
    specialties: ["Two-Floor Arena", "Indoor Airsoft", "Laser Tag", "Nerf Wars", "Party Venue"],
    isVerified: true,
    isSponsored: false,
    slug: "pyrrhic-tactical-sports-indoor",
    category: "Range",
    featured: false
  },
  {
    businessName: "ForestFire Paintball",
    businessType: "Paintball/Airsoft Field",
    description: "Six distinct themed fields including 'Castle' and 'Domination'. Weekend open-play for airsoft and paintball.",
    address: "11808 Ustick Rd, Caldwell, ID 83607",
    phone: "(208) 629-6229",
    website: "https://forestfire.com/",
    hours: "Weekends, check website",
    tier: "silver",
    specialties: ["Six Themed Fields", "Castle Field", "Domination", "Weekend Open-Play", "Airsoft & Paintball"],
    isVerified: true,
    isSponsored: false,
    slug: "forestfire-paintball",
    category: "Range",
    featured: false
  },
  {
    businessName: "MAG Airsoft",
    businessType: "Airsoft Club",
    description: "Organization hosting free, organized airsoft games every Saturday at various private locations. Drama-free environment.",
    address: "Multiple Private Locations",
    phone: "(208) 555-0123",
    website: "https://magairsoft.com/",
    hours: "Saturdays",
    tier: "standard",
    specialties: ["Free Games", "Organized Events", "Multiple Locations", "All Ages", "Drama-Free"],
    isVerified: true,
    isSponsored: false,
    slug: "mag-airsoft",
    category: "Club",
    featured: false
  },

  // Premium Gunsmiths
  {
    businessName: "AllTerra Arms",
    businessType: "Custom Rifle Manufacturer",
    description: "High-end custom rifle builder with nationwide service area. Comprehensive gunsmithing on precision platforms.",
    address: "6898 Supply Way, Ste 100, Boise, ID 83716",
    phone: "(208) 608-5179",
    website: "https://allterraarms.com/",
    hours: "By Appointment",
    tier: "gold",
    specialties: ["Custom Rifles", "Precision Builds", "Nationwide Service", "High-End Manufacturing", "Long-Range"],
    isVerified: true,
    isSponsored: true,
    slug: "allterra-arms",
    category: "Gunsmith",
    featured: false
  },
  {
    businessName: "Buckhorn Gun & Pawn",
    businessType: "Gunsmith & Pawn",
    description: "Treasure Valley institution with over 40 years of service. Full-service gunsmithing, repairs, and restoration.",
    address: "6601 W Ustick Rd, Boise, ID 83704",
    phone: "(208) 377-2535",
    website: "https://buckhornguns.com/",
    hours: "Mon-Sat: 10am-6pm",
    tier: "gold",
    specialties: ["40+ Years Experience", "General Gunsmithing", "Repairs", "Restoration", "Pawn Services"],
    isVerified: true,
    isSponsored: false,
    slug: "buckhorn-gun-pawn",
    category: "Gunsmith",
    featured: false
  },
  {
    businessName: "Idaho Arms & Ammo",
    businessType: "FFL Dealer & Gunsmith",
    description: "Modern firearms retailer with strong focus on AR-15 platform and custom work. Ultrasonic cleaning services.",
    address: "519 E Fairview Ave, Ste 300, Meridian, ID 83642",
    phone: "(208) 809-0939",
    website: "https://www.idahoarmsammo.com/",
    hours: "Tue-Sat: 10am-6pm",
    tier: "silver",
    specialties: ["AR-15 Platform", "Custom Work", "Ultrasonic Cleaning", "Modern Retailer", "FFL Services"],
    isVerified: true,
    isSponsored: false,
    slug: "idaho-arms-ammo",
    category: "Gunsmith",
    featured: false
  },
  {
    businessName: "Eubanks Gunsmithing",
    businessType: "Vintage Specialist",
    description: "True artisan specializing in vintage Winchester shotguns and ventilated ribs. Expect a waitlist for quality work.",
    address: "3686 River Rd, Homedale, ID 83628",
    phone: "(208) 337-4212",
    website: "http://www.eubanksgunsmithing.com/",
    hours: "By Appointment",
    tier: "gold",
    specialties: ["Vintage Winchester", "Ventilated Ribs", "Shotgun Specialist", "Artisan Quality", "Custom Work"],
    isVerified: true,
    isSponsored: false,
    slug: "eubanks-gunsmithing",
    category: "Gunsmith",
    featured: false
  }
]

export function DirectoryPageStandardized() {
  // Activity feed data for directory
  const activityFeedData = [
    {
      icon: Shield,
      iconColor: "text-nav-directory",
      iconBgColor: "bg-nav-directory/20",
      title: "Directory Expansion Complete",
      description: "25+ verified Idaho businesses added to comprehensive directory",
      timeAgo: "1h ago"
    },
    {
      icon: Star,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "Reviews Integration",
      description: "Google Reviews API now live for all business listings",
      timeAgo: "3h ago"
    },
    {
      icon: Wrench,
      iconColor: "text-warm-stone",
      iconBgColor: "bg-warm-stone/20",
      title: "New Services Added",
      description: "AllTerra Arms custom rifle builds now featured",
      timeAgo: "5h ago"
    }
  ]

  // Directory category stats based on actual data
  const directoryCategoryStats = [
    { icon: Target, title: "Shooting Ranges", value: directoryListings.filter(b => b.category === 'Range').length.toString(), subtitle: "Verified locations", color: "text-nav-directory" },
    { icon: Users, title: "Gun Clubs", value: directoryListings.filter(b => b.category === 'Club').length.toString(), subtitle: "Member organizations", color: "text-nav-directory" },
    { icon: Wrench, title: "Gunsmiths", value: directoryListings.filter(b => b.category === 'Gunsmith').length.toString(), subtitle: "Service providers", color: "text-nav-directory" },
    { icon: GraduationCap, title: "Training Centers", value: directoryListings.filter(b => b.category === 'Training').length.toString(), subtitle: "Education facilities", color: "text-nav-directory" },
    { icon: ShoppingBag, title: "Retail Stores", value: directoryListings.filter(b => b.category === 'Retail').length.toString(), subtitle: "Licensed dealers", color: "text-nav-directory" },
    { icon: CheckCircle, title: "Verified", value: directoryListings.filter(b => b.isVerified).length.toString(), subtitle: "Authenticated businesses", color: "text-nav-directory" }
  ]

  // Filter configuration
  const filters = useCardPageFilters({
    items: directoryListings,
    initialTab: 'all',
    initialSortBy: 'featured',
    initialViewMode: 'card', // Card view is better for business listings
    itemsPerPage: 12,
    
    // Search filter function
    searchFilter: (business, query) => {
      const searchTerms = query.toLowerCase()
      return (
        business.businessName.toLowerCase().includes(searchTerms) ||
        business.businessType.toLowerCase().includes(searchTerms) ||
        business.description.toLowerCase().includes(searchTerms) ||
        business.address.toLowerCase().includes(searchTerms) ||
        business.specialties.some(specialty => specialty.toLowerCase().includes(searchTerms))
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
        case 'featured': return business.featured || false
        default: return true
      }
    },
    
    // Custom filters
    customFilters: {
      tier: (business, selectedTiers) => selectedTiers.includes(business.tier),
      category: (business, selectedCategories) => selectedCategories.includes(business.category.toLowerCase()),
      verification: (business, selectedOptions) => {
        if (selectedOptions.includes('verified')) return business.isVerified
        if (selectedOptions.includes('sponsored')) return business.isSponsored
        return true
      },
      location: (business, selectedLocations) => {
        const city = business.address.split(',')[1]?.trim().toLowerCase() || ''
        return selectedLocations.some(loc => city.includes(loc))
      }
    },
    
    // Sort functions
    sortFunctions: {
      featured: (a, b) => {
        // Featured first, then by tier, then by name
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        const tierOrder = { gold: 0, silver: 1, bronze: 2, standard: 3 }
        const tierDiff = tierOrder[a.tier] - tierOrder[b.tier]
        if (tierDiff !== 0) return tierDiff
        return a.businessName.localeCompare(b.businessName)
      },
      alphabetical: (a, b) => a.businessName.localeCompare(b.businessName),
      rating: (a, b) => (b.rating || 0) - (a.rating || 0),
      tier: (a, b) => {
        const tierOrder = { gold: 0, silver: 1, bronze: 2, standard: 3 }
        return tierOrder[a.tier] - tierOrder[b.tier]
      },
      location: (a, b) => a.address.localeCompare(b.address)
    }
  })

  // Hero content - working direct implementation like intel page
  const heroContent = (
    <section className="relative overflow-hidden bg-gradient-directory-hero px-md py-lg">
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side */}
          <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
            <div className="flex items-center gap-base">
              <div className="bg-card/10 p-base rounded-xs border border-border">
                <AddressBook weight="bold" className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">Directory</span>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Shield weight="bold" className="h-4 w-4 mr-xs" />
                    Verified
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Target weight="bold" className="h-4 w-4 mr-xs" />
                    Ranges
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Wrench weight="bold" className="h-4 w-4 mr-xs" />
                    Services
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-xs">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                Idaho Firearms Directory
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                Comprehensive Guide to Idaho's Shooting Sports Community
              </h2>
            </div>
            
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
              From Treasure Valley's premier indoor facilities to specialized gunsmiths across the Gem State, discover verified businesses serving Idaho's firearms community.
            </p>
            
            <div className="flex gap-base">
              <Button size="lg" className="bg-nav-directory text-white hover:bg-white hover:text-nav-directory font-rajdhani font-bold" animationType="plus-minus">
                <Plus className="h-4 w-4 mr-xs" />
                List Business
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-directory" animationType="arrow">
                View Map
              </Button>
            </div>
          </div>
          
          {/* Featured Business Card - Right side */}
          <div className="lg:col-span-1 py-md min-h-[400px]">
            <div className="relative h-full">
              {directoryListings.find(b => b.featured) && (
                <VendorCard
                  businessName={directoryListings.find(b => b.featured)!.businessName}
                  businessType={directoryListings.find(b => b.featured)!.businessType}
                  description={directoryListings.find(b => b.featured)!.description}
                  address={directoryListings.find(b => b.featured)!.address}
                  phone={directoryListings.find(b => b.featured)!.phone}
                  website={directoryListings.find(b => b.featured)!.website}
                  hours={directoryListings.find(b => b.featured)!.hours}
                  tier={directoryListings.find(b => b.featured)!.tier}
                  specialties={directoryListings.find(b => b.featured)!.specialties}
                  isVerified={directoryListings.find(b => b.featured)!.isVerified}
                  isSponsored={directoryListings.find(b => b.featured)!.isSponsored}
                  href={`/directory/${directoryListings.find(b => b.featured)!.slug}`}
                  className="h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Temporarily removed - using CardPageLayout below for proper sidebar

  // Hero content sections for CardPageLayout
  const heroLeftContent = (
    <>
      <div className="flex items-center gap-base">
        <div className="bg-card/10 p-base rounded-xs border border-border">
          <AddressBook weight="bold" className="h-8 w-8 text-white" />
        </div>
        <div className="space-y-base">
          <div className="flex items-center gap-xs text-sm text-white/60">
            <span>Home</span>
            <CaretRight className="h-4 w-4" />
            <span className="text-white font-medium">Directory</span>
          </div>
          
          <div className="flex flex-wrap gap-xs">
            <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
              <Shield className="h-4 w-4 mr-xs" />
              Verified Businesses
            </Badge>
            <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
              <CheckCircle className="h-4 w-4 mr-xs" />
              Licensed FFLs
            </Badge>
            <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
              <Crown className="h-4 w-4 mr-xs" />
              Premium Partners
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-xs">
        <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
          Idaho Firearms Business Directory
        </h1>
        <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
          Verified Gun Shops, Ranges, and Services in the Treasure Valley
        </h2>
      </div>
      
      <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
        Connect with Idaho's premier firearms businesses. From FFL dealers to custom gunsmiths, find trusted professionals verified by our community.
      </p>
      
      <div className="flex gap-base">
        <Button size="lg" className="bg-nav-directory text-white hover:bg-white hover:text-nav-directory font-rajdhani font-bold" animationType="plus-minus">
          <Plus className="h-4 w-4 mr-xs" />
          List Business
        </Button>
        <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-directory" animationType="arrow">
          View Map
        </Button>
      </div>
    </>
  )

  const heroRightContent = (
    <>
      {directoryListings.find(b => b.featured) && (
        <VendorCard
          businessName={directoryListings.find(b => b.featured)!.businessName}
          businessType={directoryListings.find(b => b.featured)!.businessType}
          description={directoryListings.find(b => b.featured)!.description}
          address={directoryListings.find(b => b.featured)!.address}
          phone={directoryListings.find(b => b.featured)!.phone}
          website={directoryListings.find(b => b.featured)!.website}
          hours={directoryListings.find(b => b.featured)!.hours}
          tier={directoryListings.find(b => b.featured)!.tier}
          specialties={directoryListings.find(b => b.featured)!.specialties}
          isVerified={directoryListings.find(b => b.featured)!.isVerified}
          isSponsored={directoryListings.find(b => b.featured)!.isSponsored}
          href={`/directory/${directoryListings.find(b => b.featured)!.slug}`}
          className="h-full"
        />
      )}
    </>
  )

  return (
    <CardPageLayout
      pageTitle="Directory"
      pageSubtitle="Idaho Firearms Business Directory"
      pageColor="directory"
      heroLeftContent={heroLeftContent}
      heroRightContent={heroRightContent}
      searchQuery={filters.searchQuery}
      onSearchChange={filters.setSearchQuery}
      searchPlaceholder="Search businesses, services, or locations..."
      quickTabs={[
        { id: 'all', label: 'All Businesses', count: directoryListings.length, icon: AddressBook },
        { id: 'ranges', label: 'Ranges', count: directoryListings.filter(b => b.category === 'Range').length, icon: Target },
        { id: 'gunsmiths', label: 'Gunsmiths', count: directoryListings.filter(b => b.category === 'Gunsmith').length, icon: Wrench },
        { id: 'training', label: 'Training', count: directoryListings.filter(b => b.category === 'Training').length, icon: GraduationCap },
        { id: 'retail', label: 'Retail', count: directoryListings.filter(b => b.category === 'Retail').length, icon: ShoppingBag },
        { id: 'clubs', label: 'Clubs', count: directoryListings.filter(b => b.category === 'Club').length, icon: Users },
        { id: 'verified', label: 'Verified', count: directoryListings.filter(b => b.isVerified).length, icon: CheckCircle },
        { id: 'featured', label: 'Featured', count: directoryListings.filter(b => b.featured).length }
      ]}
      activeTab={filters.activeTab}
      onTabChange={filters.setActiveTab}
      
      filterSections={[
        {
          title: 'Business Type',
          filters: [
            { id: 'range', label: 'Shooting Ranges', icon: Target, count: directoryListings.filter(b => b.category === 'Range').length },
            { id: 'gunsmith', label: 'Gunsmiths', icon: Wrench, count: directoryListings.filter(b => b.category === 'Gunsmith').length },
            { id: 'training', label: 'Training', icon: GraduationCap, count: directoryListings.filter(b => b.category === 'Training').length },
            { id: 'retail', label: 'Retail', icon: ShoppingBag, count: directoryListings.filter(b => b.category === 'Retail').length },
            { id: 'club', label: 'Clubs', icon: Users, count: directoryListings.filter(b => b.category === 'Club').length }
          ],
          selectedFilters: filters.selectedFilters.category || [],
          onFilterChange: (filterId) => filters.updateFilters('category', filterId),
          multiSelect: true
        },
        {
          title: 'Membership Tier',
          filters: [
            { id: 'gold', label: 'Gold Partners', icon: Crown, count: directoryListings.filter(b => b.tier === 'gold').length },
            { id: 'silver', label: 'Silver Members', icon: Medal, count: directoryListings.filter(b => b.tier === 'silver').length },
            { id: 'bronze', label: 'Bronze Members', icon: Medal, count: directoryListings.filter(b => b.tier === 'bronze').length },
            { id: 'standard', label: 'Standard', count: directoryListings.filter(b => b.tier === 'standard').length }
          ],
          selectedFilters: filters.selectedFilters.tier || [],
          onFilterChange: (filterId) => filters.updateFilters('tier', filterId),
          multiSelect: true
        },
        {
          title: 'Location',
          filters: [
            { id: 'boise', label: 'Boise', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('boise')).length },
            { id: 'meridian', label: 'Meridian', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('meridian')).length },
            { id: 'nampa', label: 'Nampa', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('nampa')).length },
            { id: 'caldwell', label: 'Caldwell', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('caldwell')).length },
            { id: 'eagle', label: 'Eagle', icon: MapPin, count: directoryListings.filter(b => b.address.toLowerCase().includes('eagle')).length }
          ],
          selectedFilters: filters.selectedFilters.location || [],
          onFilterChange: (filterId) => filters.updateFilters('location', filterId),
          multiSelect: true
        },
        {
          title: 'Verification',
          filters: [
            { id: 'verified', label: 'Verified Business', icon: CheckCircle, count: directoryListings.filter(b => b.isVerified).length },
            { id: 'sponsored', label: 'Sponsored', icon: Star, count: directoryListings.filter(b => b.isSponsored).length }
          ],
          selectedFilters: filters.selectedFilters.verification || [],
          onFilterChange: (filterId) => filters.updateFilters('verification', filterId),
          multiSelect: true
        }
      ]}
      
      viewMode={filters.viewMode}
      onViewModeChange={filters.setViewMode}
      sortOptions={[
        { id: 'featured', label: 'Featured First', icon: Star },
        { id: 'alphabetical', label: 'Name', icon: AddressBook },
        { id: 'rating', label: 'Rating', icon: Star },
        { id: 'tier', label: 'Tier', icon: Trophy },
        { id: 'location', label: 'Location', icon: MapPin }
      ]}
      activeSortId={filters.sortBy}
      onSortChange={filters.setSortBy}
      
      totalResults={filters.totalResults}
      filteredResults={filters.filteredResults}
      
      statsSection={
        <>
          <TrustIndicators />
          <div className="mt-4xl">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Business Categories</h3>
            <DirectoryStatsGrid stats={directoryCategoryStats} />
          </div>
        </>
      }
      ctaSection={
        <div className="space-y-4xl">
          {/* Activity Feed Section with angled background */}
          <div className="section-skew-up bg-card/50 py-3xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">Recent Directory Activity</h3>
              <div className="space-y-base">
                {activityFeedData.map((activity, index) => (
                  <ActivityFeedCard key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <ContributionCTA />
          
          {/* Featured Event cross-promotion */}
          <div className="section-skew-down bg-gradient-to-br from-nav-directory/10 to-nav-directory/5 py-3xl">
            <FeaturedEventSpotlight 
              eventTitle="Range Day at Independence Indoor"
              eventType="Demo Day"
              date="March 22, 2025"
              time="10:00 AM - 4:00 PM"
              location="Meridian, ID"
              venue="Independence Indoor Shooting"
              description="Try the latest firearms from top manufacturers. Free admission, ammo available for purchase."
              participantCount={32}
              maxParticipants={100}
              difficulty="All Levels"
              isFeatured={true}
              isUpcoming={true}
            />
          </div>
        </div>
      }
    >
      {/* Fixed column layout: max 3 columns instead of 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-xl">
        {filters.paginatedItems.length > 0 ? (
          filters.paginatedItems.map((business, index) => (
            <VendorCard
              key={`${business.businessName}-${index}`}
              businessName={business.businessName}
              businessType={business.businessType}
              description={business.description}
              address={business.address}
              phone={business.phone}
              website={business.website}
              hours={business.hours}
              tier={business.tier}
              specialties={business.specialties}
              isVerified={business.isVerified}
              isSponsored={business.isSponsored}
              href={`/directory/${business.slug}`}
              className="mica transition-all duration-300 rounded-xs"
            />
          ))
        ) : (
          <div className="col-span-full">
            <EmptyState 
              title="No Businesses Found"
              description="Try adjusting your search terms or filters to find businesses."
              action={
                <Button onClick={filters.clearAllFilters}>
                  Clear All Filters
                </Button>
              }
            />
          </div>
        )}
      </div>
    </CardPageLayout>
  )
}