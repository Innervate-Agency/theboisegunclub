import * as React from 'react'
import { 
  AcademicCapIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  CheckBadgeIcon,
  ClockIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TicketIcon
} from '@heroicons/react/24/outline'

/**
 * Unified Content Bridge System for TBGC
 * 
 * Eliminates 783+ lines of duplicated bridge configurations across 6 files
 */

export type ContentType = 'armory' | 'events' | 'directory' | 'intel' | 'buysell' | 'training'

export interface ContentBridgeConfig {
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
  }>
  trustIndicators: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
  }>
  primaryCard: {
    title: string
    description: string
    ctaText: string
    ctaHref: string
  }
}

export class ContentBridgeFactory {
  static createBridge(contentType: ContentType): ContentBridgeConfig {
    const configs = {
      armory: {
        sectionTitle: "Why Use Idaho Armory",
        sectionIcon: ShieldCheckIcon,
        sectionDescription: "Access comprehensive firearms reviews and technical guides.",
        benefits: [
          { icon: ShieldCheckIcon, title: "Expert Reviews", description: "In-depth firearm reviews" },
          { icon: AcademicCapIcon, title: "Technical Guides", description: "Detailed technical information" },
          { icon: CheckBadgeIcon, title: "Verified Information", description: "All content verified" },
          { icon: UserGroupIcon, title: "Community Driven", description: "Created by Idaho's community" }
        ],
        categoriesTitle: "Armory Categories",
        categoriesIcon: ShieldCheckIcon,
        categories: [
          { name: "Pistols", count: "45+", trend: "Popular" },
          { name: "Rifles", count: "38+", trend: "Active" },
          { name: "Shotguns", count: "22+", trend: "Growing" },
          { name: "Accessories", count: "89+", trend: "Expanding" }
        ],
        trustIndicators: [
          { icon: CheckBadgeIcon, label: "Expert Reviews", value: "194+" },
          { icon: UserGroupIcon, label: "Active Members", value: "2,847" },
          { icon: ShieldCheckIcon, label: "Verified Content", value: "100%" }
        ],
        primaryCard: {
          title: "Browse Idaho Armory",
          description: "Explore comprehensive firearm reviews and technical guides.",
          ctaText: "View Armory",
          ctaHref: "/armory"
        }
      },

      events: {
        sectionTitle: "Why Attend Idaho Events",
        sectionIcon: UserGroupIcon,
        sectionDescription: "Join Idaho's vibrant shooting sports community.",
        benefits: [
          { icon: ShieldCheckIcon, title: "Verified Events", description: "All events verified with real organizers" },
          { icon: TicketIcon, title: "Real Competitions", description: "Genuine shooting competitions" },
          { icon: ClockIcon, title: "Updated Schedule", description: "Live event calendar updates" },
          { icon: UserGroupIcon, title: "Community Focus", description: "Events by Idaho's community" }
        ],
        categoriesTitle: "Event Categories",
        categoriesIcon: TicketIcon,
        categories: [
          { name: "Competitions", count: "45+", trend: "Active" },
          { name: "Training", count: "23+", trend: "Growing" },
          { name: "Social Events", count: "18+", trend: "Popular" },
          { name: "Expos", count: "12+", trend: "Seasonal" }
        ],
        trustIndicators: [
          { icon: TicketIcon, label: "Upcoming Events", value: "98+" },
          { icon: UserGroupIcon, label: "Event Organizers", value: "34" },
          { icon: CheckBadgeIcon, label: "Verified Events", value: "100%" }
        ],
        primaryCard: {
          title: "Find Idaho Events",
          description: "Discover shooting competitions and community events.",
          ctaText: "Browse Events",
          ctaHref: "/events"
        }
      },

      directory: {
        sectionTitle: "Why Use the Idaho Directory", 
        sectionIcon: BuildingOfficeIcon,
        sectionDescription: "Connect with Idaho's trusted firearms community.",
        benefits: [
          { icon: ShieldCheckIcon, title: "ATF Licensed", description: "All firearms dealers are verified FFLs" },
          { icon: MapPinIcon, title: "Local Businesses", description: "Support Idaho-based businesses" },
          { icon: CheckBadgeIcon, title: "Verified Reviews", description: "Real customer reviews" },
          { icon: BuildingStorefrontIcon, title: "Services Listed", description: "Complete service information" }
        ],
        categoriesTitle: "Business Categories",
        categoriesIcon: BuildingStorefrontIcon,
        categories: [
          { name: "FFL Dealers", count: "287", trend: "Verified" },
          { name: "Gunsmiths", count: "156", trend: "Active" },
          { name: "Shooting Ranges", count: "89", trend: "Growing" },
          { name: "Training", count: "62", trend: "Popular" }
        ],
        trustIndicators: [
          { icon: ShieldCheckIcon, label: "Licensed FFLs", value: "287" },
          { icon: CheckBadgeIcon, label: "Verified Businesses", value: "594" },
          { icon: MapPinIcon, label: "Idaho Cities", value: "73" }
        ],
        primaryCard: {
          title: "Explore Idaho Directory",
          description: "Find trusted FFLs, gunsmiths, and shooting services.",
          ctaText: "Browse Directory",
          ctaHref: "/directory"
        }
      },

      intel: {
        sectionTitle: "Why Use Idaho Intel",
        sectionIcon: MapPinIcon,
        sectionDescription: "Access comprehensive shooting location information.",
        benefits: [
          { icon: MapPinIcon, title: "Detailed Locations", description: "Comprehensive location information" },
          { icon: CheckBadgeIcon, title: "Verified Information", description: "All data verified by community" },
          { icon: ClockIcon, title: "Real-time Updates", description: "Live updates on conditions" },
          { icon: UserGroupIcon, title: "Community Reports", description: "First-hand reports" }
        ],
        categoriesTitle: "Location Types",
        categoriesIcon: MapPinIcon,
        categories: [
          { name: "Public Ranges", count: "34", trend: "Verified" },
          { name: "Hunting Areas", count: "127", trend: "Active" },
          { name: "Training Facilities", count: "23", trend: "Growing" },
          { name: "Competition Venues", count: "18", trend: "Popular" }
        ],
        trustIndicators: [
          { icon: MapPinIcon, label: "Locations Mapped", value: "202+" },
          { icon: UserGroupIcon, label: "Community Reports", value: "1,847" },
          { icon: CheckBadgeIcon, label: "Verified Data", value: "100%" }
        ],
        primaryCard: {
          title: "Browse Idaho Intel",
          description: "Discover shooting locations and hunting areas.",
          ctaText: "View Intel",
          ctaHref: "/intel"
        }
      },

      buysell: {
        sectionTitle: "Why Use Idaho Buy/Sell",
        sectionIcon: BuildingStorefrontIcon,
        sectionDescription: "Connect with Idaho's firearms marketplace.",
        benefits: [
          { icon: ShieldCheckIcon, title: "Legal Compliance", description: "All transactions follow laws" },
          { icon: CheckBadgeIcon, title: "Verified Sellers", description: "Licensed dealers and verified sellers" },
          { icon: MapPinIcon, title: "Local Inventory", description: "Real inventory from Idaho businesses" },
          { icon: BuildingStorefrontIcon, title: "Secure Transactions", description: "Safe payment processes" }
        ],
        categoriesTitle: "Marketplace Categories",
        categoriesIcon: BuildingStorefrontIcon,
        categories: [
          { name: "Handguns", count: "234+", trend: "Active" },
          { name: "Long Guns", count: "189+", trend: "Popular" },
          { name: "Accessories", count: "456+", trend: "Growing" },
          { name: "Collectibles", count: "78+", trend: "Premium" }
        ],
        trustIndicators: [
          { icon: ShieldCheckIcon, label: "Licensed Dealers", value: "67" },
          { icon: CheckBadgeIcon, label: "Active Listings", value: "957+" },
          { icon: UserGroupIcon, label: "Verified Users", value: "3,204" }
        ],
        primaryCard: {
          title: "Browse Idaho Marketplace",
          description: "Find firearms and accessories from verified sellers.",
          ctaText: "View Marketplace",
          ctaHref: "/buysell"
        }
      },

      training: {
        sectionTitle: "Why Train in Idaho",
        sectionIcon: AcademicCapIcon,
        sectionDescription: "Advance your shooting skills with Idaho's programs.",
        benefits: [
          { icon: ShieldCheckIcon, title: "Certified Instructors", description: "NRA and state-certified professionals" },
          { icon: AcademicCapIcon, title: "Comprehensive Courses", description: "Basic safety through tactical training" },
          { icon: CheckBadgeIcon, title: "Proven Methods", description: "Time-tested curricula" },
          { icon: UserGroupIcon, title: "Small Classes", description: "Personalized instruction" }
        ],
        categoriesTitle: "Training Categories",
        categoriesIcon: AcademicCapIcon,
        categories: [
          { name: "Basic Safety", count: "28+", trend: "Essential" },
          { name: "Concealed Carry", count: "34+", trend: "Popular" },
          { name: "Competition", count: "19+", trend: "Growing" },
          { name: "Tactical", count: "15+", trend: "Advanced" }
        ],
        trustIndicators: [
          { icon: AcademicCapIcon, label: "Certified Instructors", value: "47" },
          { icon: UserGroupIcon, label: "Students Trained", value: "12,847+" },
          { icon: CheckBadgeIcon, label: "Course Completion", value: "97%" }
        ],
        primaryCard: {
          title: "Find Training Programs",
          description: "Discover certified firearms training courses.",
          ctaText: "Browse Training",
          ctaHref: "/training"
        }
      }
    }

    return configs[contentType]
  }
}

// Legacy compatibility exports
export const armoryContentBridge = ContentBridgeFactory.createBridge('armory')
export const eventsContentBridge = ContentBridgeFactory.createBridge('events')
export const directoryContentBridge = ContentBridgeFactory.createBridge('directory')
export const intelContentBridge = ContentBridgeFactory.createBridge('intel')
export const buysellContentBridge = ContentBridgeFactory.createBridge('buysell')
export const trainingContentBridge = ContentBridgeFactory.createBridge('training')

export default ContentBridgeFactory
