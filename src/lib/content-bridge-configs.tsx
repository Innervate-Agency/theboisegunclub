import { 
  ArrowPathIcon, 
  BuildingOfficeIcon, 
  BuildingStorefrontIcon, 
  CheckBadgeIcon, 
  ClockIcon, 
  CreditCardIcon, 
  CursorArrowRaysIcon, 
  GlobeAltIcon, 
  MapPinIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  TruckIcon, 
  UserGroupIcon,
  TicketIcon,
  AcademicCapIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

// Import your real data
import { shootingLocations } from '@/lib/intel-locations-data'

interface ContentBridgeConfig {
  sectionTitle: string
  sectionIcon: React.ComponentType<{ className?: string }>
  sectionDescription: string
  benefits: Array<{
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
  }>
  categoriesTitle: string
  categoriesIcon: React.ComponentType<{ className?: string }>
  categories: Array<{
    name: string
    count: string
    trend?: string
    href?: string
  }>
  trustIndicators: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
  }>
  primaryCard: {
    title: string
    description: string
    features: string[]
    buttonText: string
    buttonHref?: string
  }
  statsCard: {
    title: string
    stats: Array<{
      label: string
      value: string
      color: string
    }>
  }
  accentColor: string
}

// Calculate real stats from actual data
const verifiedLocations = shootingLocations.filter(loc => loc.verified).length
const totalLocations = shootingLocations.length
const publicRanges = shootingLocations.filter(loc => 
  loc.type.includes('Public') || loc.type.includes('Range')
).length
const privateFacilities = shootingLocations.filter(loc => 
  loc.type.includes('Club') || loc.type.includes('Private')
).length

export const contentBridgeConfigs: Record<string, ContentBridgeConfig> = {
  events: {
    sectionTitle: "Why Attend Idaho Events",
    sectionIcon: UserGroupIcon,
    sectionDescription: "Join Idaho's vibrant shooting sports community with events ranging from competitive matches to educational clinics. Our event calendar features authentic competitions, training courses, and social gatherings hosted by verified Idaho organizations.",
    benefits: [
      {
        icon: ShieldCheckIcon,
        title: "Verified Events",
        description: "All events are verified with real organizers and authentic competition details"
      },
      {
        icon: MapPinIcon,
        title: "Local Access",
        description: "Events throughout Idaho from Treasure Valley to wilderness locations"
      },
      {
        icon: TicketIcon,
        title: "Easy Registration",
        description: "Direct links to official event registration and contact information"
      },
      {
        icon: AcademicCapIcon,
        title: "Skill Building",
        description: "Training events and clinics for all skill levels from beginner to expert"
      }
    ],
    categoriesTitle: "Event Categories",
    categoriesIcon: CheckBadgeIcon,
    categories: [
      { name: "Matches", count: "85+", trend: "Active" },
      { name: "Training", count: "32+", trend: "Growing" },
      { name: "Social", count: "18+", trend: "Popular" },
      { name: "Clinics", count: "12+", trend: "New" }
    ],
    trustIndicators: [
      { icon: CheckBadgeIcon, label: "Verified Organizers", value: "100%" },
      { icon: ClockIcon, label: "Average Notice", value: "30 Days" },
      { icon: MapPinIcon, label: "Statewide Coverage", value: "Idaho" }
    ],
    primaryCard: {
      title: "Host an Event",
      description: "Share your shooting sports event with Idaho's firearms community.",
      features: [
        "Free event listings",
        "Direct participant contact",
        "Calendar integration",
        "Social media promotion"
      ],
      buttonText: "Submit Event"
    },
    statsCard: {
      title: "This Month's Activity",
      stats: [
        { label: "Upcoming Events", value: "47", color: "nav-events" },
        { label: "New Listings", value: "12", color: "rusty-orange" },
        { label: "Popular Venues", value: "8", color: "sagebrush-green" },
        { label: "Registration Opens", value: "23", color: "weathered-gold" }
      ]
    },
    accentColor: "nav-events"
  },

  directory: {
    sectionTitle: "Why Use the Idaho Directory",
    sectionIcon: BuildingOfficeIcon,
    sectionDescription: "Connect with Idaho's trusted firearms community through our comprehensive directory of 594 verified businesses. From licensed FFLs to custom builders, find the local expertise you need across the Treasure Valley and beyond.",
    benefits: [
      {
        icon: ShieldCheckIcon,
        title: "ATF Licensed",
        description: "All firearms dealers are verified FFLs with current licensing"
      },
      {
        icon: MapPinIcon,
        title: "Local Businesses",
        description: "Support Idaho-based businesses in your community"
      },
      {
        icon: CheckBadgeIcon,
        title: "Verified Reviews",
        description: "Real customer reviews from Google Reviews API integration"
      },
      {
        icon: TruckIcon,
        title: "Convenient Locations",
        description: "Find businesses near you across Idaho's major population centers"
      }
    ],
    categoriesTitle: "Business Types",
    categoriesIcon: BuildingStorefrontIcon,
    categories: [
      { name: "Gun Stores", count: "568", trend: "Verified" },
      { name: "Ranges", count: "13", trend: "Active" },
      { name: "Training", count: "10", trend: "Professional" },
      { name: "Services", count: "3", trend: "Specialists" }
    ],
    trustIndicators: [
      { icon: CheckBadgeIcon, label: "Licensed FFLs", value: "594" },
      { icon: BuildingOfficeIcon, label: "Counties Covered", value: "44" },
      { icon: GlobeAltIcon, label: "Google Reviews", value: "Live Data" }
    ],
    primaryCard: {
      title: "Add Your Business",
      description: "Get your Idaho firearms business listed in our directory.",
      features: [
        "Free basic listings",
        "Google Reviews integration",
        "Business profile pages",
        "Contact information display"
      ],
      buttonText: "List Business"
    },
    statsCard: {
      title: "Directory Stats",
      stats: [
        { label: "Total Businesses", value: "594", color: "nav-directory" },
        { label: "Ada County", value: "281", color: "rusty-orange" },
        { label: "Canyon County", value: "194", color: "sagebrush-green" },
        { label: "Rural Counties", value: "119", color: "weathered-gold" }
      ]
    },
    accentColor: "nav-directory"
  },

  intel: {
    sectionTitle: "Why Use Idaho Intel",
    sectionIcon: MagnifyingGlassIcon,
    sectionDescription: "Discover Idaho's shooting locations with our comprehensive guide to public ranges, BLM areas, and private facilities. All locations feature real GPS coordinates, access requirements, and honest verification status.",
    benefits: [
      {
        icon: MapPinIcon,
        title: "Precise Locations",
        description: "Real GPS coordinates and detailed access information for every location"
      },
      {
        icon: CheckBadgeIcon,
        title: "Honest Verification",
        description: "Transparent verification status - no false claims about unvisited locations"
      },
      {
        icon: TruckIcon,
        title: "Access Details",
        description: "Clear information about 4WD requirements, permits, and seasonal access"
      },
      {
        icon: ShieldCheckIcon,
        title: "Safety Information",
        description: "Current regulations, fire restrictions, and safety considerations"
      }
    ],
    categoriesTitle: "Location Types",
    categoriesIcon: MapPinIcon,
    categories: [
      { name: "Public Ranges", count: publicRanges.toString(), trend: "Verified" },
      { name: "BLM Areas", count: (totalLocations - publicRanges - privateFacilities).toString(), trend: "Mapped" },
      { name: "Private Clubs", count: privateFacilities.toString(), trend: "Listed" }
    ],
    trustIndicators: [
      { icon: CheckBadgeIcon, label: "Verified Locations", value: verifiedLocations.toString() },
      { icon: MapPinIcon, label: "Need Verification", value: (totalLocations - verifiedLocations).toString() },
      { icon: TruckIcon, label: "Statewide Coverage", value: "Idaho" }
    ],
    primaryCard: {
      title: "Share a Location",
      description: "Help build Idaho's shooting location database with your local knowledge.",
      features: [
        "GPS coordinates verification",
        "Photo contributions welcome",
        "Access condition updates",
        "Community-driven accuracy"
      ],
      buttonText: "Contribute Info"
    },
    statsCard: {
      title: "Database Status",
      stats: [
        { label: "Total Locations", value: totalLocations.toString(), color: "nav-intel" },
        { label: "Fully Verified", value: verifiedLocations.toString(), color: "sagebrush-green" },
        { label: "Need Photos", value: (totalLocations - verifiedLocations).toString(), color: "rusty-orange" },
        { label: "GPS Mapped", value: totalLocations.toString(), color: "weathered-gold" }
      ]
    },
    accentColor: "nav-intel"
  },

  forums: {
    sectionTitle: "Why Join Idaho Gun Forums",
    sectionIcon: ChatBubbleBottomCenterTextIcon,
    sectionDescription: "Connect with fellow Idaho gun enthusiasts, share knowledge, and build community through our focused discussion forums. From technical questions to event coordination, find your community here.",
    benefits: [
      {
        icon: UserGroupIcon,
        title: "Local Community",
        description: "Connect with gun owners specifically in Idaho with shared local interests"
      },
      {
        icon: CheckBadgeIcon,
        title: "Verified Members",
        description: "Authentic community members focused on responsible gun ownership"
      },
      {
        icon: AcademicCapIcon,
        title: "Knowledge Sharing",
        description: "Learn from experienced members and share your own expertise"
      },
      {
        icon: BoltIcon,
        title: "Real-Time Updates",
        description: "Stay current on Idaho laws, events, and community discussions"
      }
    ],
    categoriesTitle: "Discussion Topics",
    categoriesIcon: CheckBadgeIcon,
    categories: [
      { name: "General", count: "Coming", trend: "Soon" },
      { name: "Technical", count: "Soon", trend: "Q&A" },
      { name: "Events", count: "Soon", trend: "Coordination" },
      { name: "For Sale", count: "Soon", trend: "Local" }
    ],
    trustIndicators: [
      { icon: CheckBadgeIcon, label: "Community Focus", value: "Idaho" },
      { icon: ShieldCheckIcon, label: "Moderated", value: "Yes" },
      { icon: UserGroupIcon, label: "Launch Status", value: "Planning" }
    ],
    primaryCard: {
      title: "Early Access",
      description: "Be among the first to join Idaho's premier gun community forum.",
      features: [
        "Early member benefits",
        "Community input on features",
        "Direct developer access",
        "Founder member recognition"
      ],
      buttonText: "Join Waitlist"
    },
    statsCard: {
      title: "Community Status",
      stats: [
        { label: "Development", value: "Active", color: "nav-forums" },
        { label: "Beta Testing", value: "Soon", color: "rusty-orange" },
        { label: "Public Launch", value: "Q4", color: "sagebrush-green" },
        { label: "Interest List", value: "Open", color: "weathered-gold" }
      ]
    },
    accentColor: "nav-forums"
  },

  buysell: {
    sectionTitle: "Why Shop Idaho Buy & Sell",
    sectionIcon: UserGroupIcon,
    sectionDescription: "Connect directly with Idaho's verified firearms dealers, custom builders, and service providers. Our marketplace features authentic deals from licensed FFLs across the Treasure Valley with transparent business information.",
    benefits: [
      {
        icon: ShieldCheckIcon,
        title: "Licensed Dealers Only",
        description: "All sellers are verified Idaho FFLs with current ATF licensing"
      },
      {
        icon: MapPinIcon,
        title: "Local Pickup Available",
        description: "Support local businesses with in-person transactions and pickup"
      },
      {
        icon: CheckBadgeIcon,
        title: "Verified Information",
        description: "Real business details, phone numbers, and authentic service descriptions"
      },
      {
        icon: CreditCardIcon,
        title: "Direct Contact",
        description: "Contact dealers directly - no middleman fees or hidden charges"
      }
    ],
    categoriesTitle: "Available Categories",
    categoriesIcon: BuildingStorefrontIcon,
    categories: [
      { name: "Custom Work", count: "8", trend: "Artisan" },
      { name: "Services", count: "10", trend: "Professional" },
      { name: "Equipment", count: "2", trend: "Quality" },
      { name: "Experiences", count: "6", trend: "Unique" }
    ],
    trustIndicators: [
      { icon: CheckBadgeIcon, label: "Licensed Dealers", value: "15" },
      { icon: BuildingOfficeIcon, label: "Service Providers", value: "All Verified" },
      { icon: MapPinIcon, label: "Local Focus", value: "Idaho Only" }
    ],
    primaryCard: {
      title: "List Your Services",
      description: "Showcase your firearms business, services, or custom work to Idaho gun owners.",
      features: [
        "FFL verification required",
        "Direct customer contact",
        "Service showcase pages",
        "Local community focus"
      ],
      buttonText: "Apply to Sell"
    },
    statsCard: {
      title: "Current Offerings",
      stats: [
        { label: "Active Listings", value: "18", color: "nav-buysell" },
        { label: "Service Providers", value: "15", color: "rusty-orange" },
        { label: "Custom Builders", value: "3", color: "sagebrush-green" },
        { label: "Avg. Response", value: "2hrs", color: "weathered-gold" }
      ]
    },
    accentColor: "nav-buysell"
  },

  armory: {
    sectionTitle: "Why Use Idaho Armory",
    sectionIcon: ShieldCheckIcon,
    sectionDescription: "Access comprehensive firearms reviews, technical guides, and expert insights from Idaho's shooting community. Our armory features verified information on firearms, accessories, and modifications with local dealer connections.",
    benefits: [
      {
        icon: ShieldCheckIcon,
        title: "Expert Reviews",
        description: "In-depth firearm reviews from experienced Idaho shooters and professionals"
      },
      {
        icon: AcademicCapIcon,
        title: "Technical Guides",
        description: "Detailed technical information and modification guides for various platforms"
      },
      {
        icon: CheckBadgeIcon,
        title: "Verified Information",
        description: "All content verified by knowledgeable community members and experts"
      },
      {
        icon: BuildingStorefrontIcon,
        title: "Local Availability",
        description: "Connect with Idaho dealers who stock reviewed firearms and accessories"
      }
    ],
    categoriesTitle: "Armory Categories",
    categoriesIcon: CursorArrowRaysIcon,
    categories: [
      { name: "Pistols", count: "45+", trend: "Popular" },
      { name: "Rifles", count: "38+", trend: "Active" },
      { name: "Shotguns", count: "22+", trend: "Growing" },
      { name: "Accessories", count: "89+", trend: "Expanding" }
    ],
    trustIndicators: [
      { icon: CheckBadgeIcon, label: "Reviews Published", value: "194+" },
      { icon: UserGroupIcon, label: "Contributing Members", value: "28" },
      { icon: BuildingOfficeIcon, label: "Dealer Partners", value: "Idaho" }
    ],
    primaryCard: {
      title: "Submit a Review",
      description: "Share your expertise with Idaho's firearms community through detailed reviews.",
      features: [
        "Expert review templates",
        "Photo submission support",
        "Technical specification forms",
        "Community feedback system"
      ],
      buttonText: "Write Review"
    },
    statsCard: {
      title: "Armory Stats",
      stats: [
        { label: "Total Reviews", value: "194", color: "nav-armory" },
        { label: "Popular Platform", value: "AR-15", color: "rusty-orange" },
        { label: "Most Reviewed", value: "Pistols", color: "sagebrush-green" },
        { label: "Expert Contributors", value: "28", color: "weathered-gold" }
      ]
    },
    accentColor: "nav-armory"
  }
}