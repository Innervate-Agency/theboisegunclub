import { 
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CheckBadgeIcon, 
  GlobeAltIcon, 
  MapPinIcon, 
  ShieldCheckIcon, 
  TruckIcon
} from '@heroicons/react/24/outline'

export const directoryContentBridge = {
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
    title: "",
    stats: []
  },
  accentColor: "nav-directory"
}