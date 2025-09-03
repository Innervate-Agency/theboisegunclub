import { 
  CheckBadgeIcon, 
  MagnifyingGlassIcon,
  MapPinIcon, 
  ShieldCheckIcon, 
  TruckIcon
} from '@heroicons/react/24/outline'

import { shootingLocations } from '@/lib/intel-locations-data'

// Calculate real stats from actual data
const verifiedLocations = shootingLocations.filter(loc => loc.verified).length
const totalLocations = shootingLocations.length
const publicRanges = shootingLocations.filter(loc => 
  loc.type.includes('Public') || loc.type.includes('Range')
).length
const privateFacilities = shootingLocations.filter(loc => 
  loc.type.includes('Club') || loc.type.includes('Private')
).length

export const intelContentBridge = {
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
    title: "",
    stats: []
  },
  accentColor: "nav-intel"
}