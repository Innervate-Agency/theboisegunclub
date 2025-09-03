import { 
  AcademicCapIcon,
  BuildingStorefrontIcon,
  CheckBadgeIcon, 
  CursorArrowRaysIcon,
  ShieldCheckIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const armoryContentBridge = {
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
    { icon: BuildingStorefrontIcon, label: "Dealer Partners", value: "Idaho" }
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
    title: "",
    stats: []
  },
  accentColor: "nav-armory"
}