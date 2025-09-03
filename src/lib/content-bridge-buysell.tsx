import { 
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CheckBadgeIcon, 
  CreditCardIcon,
  MapPinIcon, 
  ShieldCheckIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const buysellContentBridge = {
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
    title: "",
    stats: []
  },
  accentColor: "nav-buysell"
}