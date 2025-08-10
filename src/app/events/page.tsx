'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EventCard } from '@/components/ui/EventCard'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import AccessibilityFAB from '@/components/ui/AccessibilityFAB'
import { EventTicker } from '@/components/ui/event-ticker'
import { cn } from '@/lib/utils'
import { 
  Calendar, Clock, MapPin, Users, Trophy, Target, 
  Filter, Search, Star, DollarSign, Info, Plus, ArrowRight,
  ChevronRight, CalendarDays, Zap, Eye, TrendingUp,
  Building2, Award, MessageSquare, CheckCircle, Shield,
  Crosshair, Flame, Bolt, Crown, Sparkles, Gem
} from 'lucide-react'
import { 
  IconCalendarEvent, IconMapPin, IconTrophy, IconTarget,
  IconBullseye, IconShield, IconStar, IconBolt, IconCrown,
  IconDiamond, IconFlame, IconSparkles, IconShootingStar
} from '@tabler/icons-react'
import { FaAward, FaMedal, FaBullseye, FaCrosshairs, FaFire } from 'react-icons/fa'
import { GiCrossedPistols, GiRifle, GiPistolGun, GiTarget, GiBullseye } from 'react-icons/gi'
import { RiMedalFill, RiTrophyFill, RiStarFill, RiFireFill } from 'react-icons/ri'

// Comprehensive events data for Treasure Valley firearms community
const upcomingEvents = [
  // Featured Events
  {
    title: "USPSA Monthly Match",
    description: "Monthly USPSA practical shooting match at Nampa Rod & Gun Club. Open to all skill levels with multiple divisions including Production, Limited, and Open.",
    date: "Saturday, August 9, 2025",
    time: "8:00 AM - 3:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Competition",
    capacity: 80,
    registeredCount: 54,
    registrationUrl: "https://practiscore.com/idaho-uspsa",
    price: "$15",
    featured: true
  },
  {
    title: "Idaho State Camo Shoot",
    description: "Premier sporting clays event benefiting Ducks Unlimited. Team-based competition with lunch, prizes, and great camaraderie in the firearms community.",
    date: "Saturday, July 26, 2025",
    time: "8:30 AM - 6:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Charity",
    capacity: 96,
    registeredCount: 78,
    registrationUrl: "https://www.ducksunlimited.org/events",
    price: "$600 (Team of 4)",
    featured: true
  },
  {
    title: "Great Idaho Gun Show",
    description: "Treasure Valley's largest firearms expo featuring 200+ vendors, dealers, and collectors from across the region. Family-friendly event with something for everyone.",
    date: "Saturday-Sunday, September 20-21, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Ford Idaho Center, 16200 N Idaho Ctr Blvd, Nampa, ID",
    eventType: "Expo",
    capacity: 5000,
    registeredCount: 3200,
    registrationUrl: "https://lewisclarktrader.com/gun-shows",
    price: "$10",
    featured: true
  },

  // Competition Events
  {
    title: "Steel Challenge Weekly",
    description: "Weekly Steel Challenge matches featuring speed and accuracy on reactive steel targets. Fast-paced, fun format perfect for new and experienced shooters.",
    date: "Thursday, August 7, 2025",
    time: "4:00 PM - 8:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Competition",
    capacity: 50,
    registeredCount: 32,
    registrationUrl: "https://nampagunclub.org/steel-challenge",
    price: "$7",
    featured: false
  },
  {
    title: "Precision Rifle Match",
    description: "Long-range precision rifle competition testing marksmanship skills from 100-1000 yards. Ideal for hunters and precision enthusiasts.",
    date: "Sunday, August 10, 2025",
    time: "7:00 AM - 2:00 PM",
    location: "Boise Rifle & Pistol Club, 6205 Hill Road, Boise, ID",
    eventType: "Competition",
    capacity: 40,
    registeredCount: 28,
    registrationUrl: "https://brpc.org/precision-match",
    price: "$25",
    featured: false
  },
  {
    title: "3-Gun Championship",
    description: "Multi-gun competition combining rifle, pistol, and shotgun stages. Test your skills across all three platforms in dynamic scenarios.",
    date: "Saturday, August 23, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Competition",
    capacity: 60,
    registeredCount: 45,
    registrationUrl: "https://caldwellgunclub.org/3gun",
    price: "$35",
    featured: false
  },
  {
    title: "IDPA Monthly Match",
    description: "International Defensive Pistol Association match focusing on real-world self-defense scenarios with practical gear and techniques.",
    date: "Saturday, August 16, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Double Tapp Range, 14010 E Double Tapp Lane, Boise, ID",
    eventType: "Competition",
    capacity: 45,
    registeredCount: 29,
    registrationUrl: "https://doubletapp.com/idpa",
    price: "$20",
    featured: false
  },
  {
    title: "Rimfire Challenge",
    description: "Multi-stage rimfire competition perfect for beginners and youth. Low-cost shooting fun with .22 caliber firearms only.",
    date: "Sunday, August 24, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Competition",
    capacity: 35,
    registeredCount: 18,
    registrationUrl: "https://nampagunclub.org/rimfire",
    price: "$10",
    featured: false
  },
  {
    title: "Cowboy Action Shooting",
    description: "Old West themed competition using period-correct firearms and costumes. Fun family-friendly event celebrating western heritage.",
    date: "Saturday, September 6, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Southwest Idaho Practical Shooters, Star, ID",
    eventType: "Competition",
    capacity: 50,
    registeredCount: 31,
    registrationUrl: "https://swips.org/cowboy",
    price: "$25",
    featured: false
  },
  {
    title: "Tactical Rifle Match",
    description: "Precision and speed rifle competition simulating real-world tactical scenarios. Multiple positions and distances up to 600 yards.",
    date: "Sunday, September 7, 2025",
    time: "8:00 AM - 3:00 PM",
    location: "Boise Rifle & Pistol Club, 6205 Hill Road, Boise, ID",
    eventType: "Competition",
    capacity: 30,
    registeredCount: 22,
    registrationUrl: "https://brpc.org/tactical",
    price: "$30",
    featured: false
  },

  // Training Events
  {
    title: "Defensive Pistol Advanced",
    description: "Advanced defensive pistol techniques covering movement, use of cover, low-light scenarios, and real-world defensive applications.",
    date: "Saturday, August 16, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Double Tapp Range, 14010 E Double Tapp Lane, Boise, ID",
    eventType: "Training",
    capacity: 12,
    registeredCount: 8,
    registrationUrl: "https://simshot.com/training",
    price: "$285",
    featured: false
  },
  {
    title: "Beginner Pistol Course",
    description: "Professional firearms training covering safety fundamentals, basic marksmanship, and pistol operation for new shooters. LEO instructor led.",
    date: "Saturday, September 13, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Double Tapp Range, 14010 E Double Tapp Lane, Boise, ID",
    eventType: "Training",
    capacity: 16,
    registeredCount: 11,
    registrationUrl: "https://combatabsolute.com/classes",
    price: "$168",
    featured: false
  },
  {
    title: "CCW Permit Course",
    description: "Idaho concealed carry permit class covering legal requirements, safe handling, and practical application. NRA certified instruction.",
    date: "Sunday, August 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Idaho Firearms Academy, 567 Academy Dr, Nampa, ID",
    eventType: "Training",
    capacity: 20,
    registeredCount: 16,
    registrationUrl: "https://idahofirearms.edu/ccw",
    price: "$75",
    featured: false
  },
  {
    title: "Hunter Safety Course",
    description: "Idaho Fish & Game hunter education course required for all new hunters. Covers firearms safety, hunting ethics, and wildlife conservation.",
    date: "Saturday-Sunday, August 23-24, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Training",
    capacity: 25,
    registeredCount: 19,
    registrationUrl: "https://idfg.idaho.gov/hunter-education",
    price: "$10",
    featured: false
  },
  {
    title: "Rifle Marksmanship Clinic",
    description: "Precision rifle fundamentals clinic covering proper shooting positions, breathing, trigger control, and ballistics basics.",
    date: "Saturday, September 20, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Boise Rifle & Pistol Club, 6205 Hill Road, Boise, ID",
    eventType: "Training",
    capacity: 15,
    registeredCount: 9,
    registrationUrl: "https://brpc.org/marksmanship",
    price: "$125",
    featured: false
  },
  {
    title: "Women's Shooting Clinic",
    description: "Women-only firearms introduction covering safety, basic marksmanship, and equipment selection. Comfortable learning environment.",
    date: "Sunday, September 14, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Northwest Tactical Academy, 321 Training Blvd, Star, ID",
    eventType: "Training",
    capacity: 12,
    registeredCount: 8,
    registrationUrl: "https://nwtactical.edu/women",
    price: "$95",
    featured: false
  },
  {
    title: "Youth Introduction to Shooting",
    description: "Supervised youth shooting program for ages 10-17. Safety-focused introduction to rimfire rifles and pistols with parent participation.",
    date: "Saturday, August 30, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Training",
    capacity: 16,
    registeredCount: 12,
    registrationUrl: "https://nampagunclub.org/youth",
    price: "$25",
    featured: false
  },
  {
    title: "Shotgun Fundamentals",
    description: "Comprehensive shotgun training covering clay sports, hunting applications, and defensive use. All skill levels welcome.",
    date: "Sunday, September 21, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Training",
    capacity: 20,
    registeredCount: 14,
    registrationUrl: "https://caldwellgunclub.org/shotgun",
    price: "$150",
    featured: false
  },

  // Charity Events
  {
    title: "Shoot for Heroes",
    description: "Charity sporting clays tournament benefiting disabled veterans. Team format with prizes, lunch, and silent auction.",
    date: "Saturday, August 30, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Charity",
    capacity: 80,
    registeredCount: 52,
    registrationUrl: "https://shootforheroes.org",
    price: "$500 (Team of 4)",
    featured: false
  },
  {
    title: "Cops vs Cancer Clay Shoot",
    description: "Annual law enforcement charity event supporting cancer research. Open to public with prizes and community support.",
    date: "Sunday, September 7, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Boise Skeet & Trap Club, Boise, ID",
    eventType: "Charity",
    capacity: 100,
    registeredCount: 67,
    registrationUrl: "https://copsvscancer.org/boise",
    price: "$400 (Team of 4)",
    featured: false
  },
  {
    title: "Pink Clay Classic",
    description: "Ladies charity sporting clays event supporting breast cancer awareness. Fun, supportive atmosphere with prizes and lunch.",
    date: "Saturday, September 27, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Charity",
    capacity: 60,
    registeredCount: 41,
    registrationUrl: "https://pinkclassic.org",
    price: "$350 (Team of 4)",
    featured: false
  },

  // Expo Events
  {
    title: "Boise Knife & Gun Expo",
    description: "Regional firearms and blade show featuring collectors, custom makers, and dealers. Military surplus and historical displays included.",
    date: "Saturday-Sunday, August 16-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Expo Idaho, 5610 N Glenwood St, Boise, ID",
    eventType: "Expo",
    capacity: 3000,
    registeredCount: 1850,
    registrationUrl: "https://boiseknifeshows.com",
    price: "$8",
    featured: false
  },
  {
    title: "Treasure Valley Outdoor Expo",
    description: "Complete outdoor recreation expo featuring hunting, fishing, camping, and shooting sports vendors and demonstrations.",
    date: "Friday-Sunday, September 5-7, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Ford Idaho Center, 16200 N Idaho Ctr Blvd, Nampa, ID",
    eventType: "Expo",
    capacity: 4000,
    registeredCount: 2100,
    registrationUrl: "https://tvoutdoorexpo.com",
    price: "$12",
    featured: false
  },
  {
    title: "Military Collector Show",
    description: "Specialized military collectibles show featuring WWII through modern military firearms, gear, and memorabilia.",
    date: "Saturday, September 13, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Boise Centre, 850 W Front St, Boise, ID",
    eventType: "Expo",
    capacity: 1500,
    registeredCount: 890,
    registrationUrl: "https://militarycollectors.org/boise",
    price: "$15",
    featured: false
  },

  // Social Events
  {
    title: "Monthly Club Social",
    description: "Monthly social gathering for TBGC members and community. Guest speakers, equipment swap meet, and networking opportunity.",
    date: "Thursday, August 14, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Boise Gun Club, 123 Range Road, Boise, ID",
    eventType: "Social",
    capacity: 75,
    registeredCount: 43,
    registrationUrl: "https://tbgc.com/social",
    price: "Free",
    featured: false
  },
  {
    title: "Range Day BBQ",
    description: "Community BBQ and informal shooting session. Bring your firearms and join fellow enthusiasts for food, fun, and range time.",
    date: "Saturday, August 23, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Social",
    capacity: 100,
    registeredCount: 67,
    registrationUrl: "https://nampagunclub.org/bbq",
    price: "$20",
    featured: false
  },
  {
    title: "New Shooter Welcome",
    description: "Monthly welcome event for new shooters and TBGC members. Introductions, Q&A session, and guided range experience.",
    date: "Sunday, August 31, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Double Tapp Range, 14010 E Double Tapp Lane, Boise, ID",
    eventType: "Social",
    capacity: 30,
    registeredCount: 18,
    registrationUrl: "https://tbgc.com/new-shooter",
    price: "Free",
    featured: false
  },
  {
    title: "Reloading Workshop",
    description: "Hands-on reloading workshop covering equipment, safety, and techniques for rifle and pistol ammunition. Materials provided.",
    date: "Saturday, September 6, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Precision Rifle Works, 456 Precision Ave, Eagle, ID",
    eventType: "Social",
    capacity: 12,
    registeredCount: 9,
    registrationUrl: "https://precisionrifle.com/workshop",
    price: "$85",
    featured: false
  },
  {
    title: "Vintage Military Rifles Day",
    description: "Celebration of military surplus rifles with historical displays, shooting activities, and expert presentations.",
    date: "Sunday, September 14, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Boise Rifle & Pistol Club, 6205 Hill Road, Boise, ID",
    eventType: "Social",
    capacity: 60,
    registeredCount: 34,
    registrationUrl: "https://brpc.org/vintage",
    price: "$15",
    featured: false
  },

  // Additional Events
  {
    title: "Suppressor Demo Day",
    description: "Try before you buy suppressor demonstration featuring leading manufacturers. Expert guidance on selection and legal requirements.",
    date: "Saturday, September 27, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Double Tapp Range, 14010 E Double Tapp Lane, Boise, ID",
    eventType: "Demo",
    capacity: 40,
    registeredCount: 25,
    registrationUrl: "https://doubletapp.com/suppressor-demo",
    price: "$25",
    featured: false
  },
  {
    title: "Archery & Crossbow Clinic",
    description: "Combination archery and crossbow fundamentals clinic. Equipment provided for beginners, advanced techniques for experienced archers.",
    date: "Sunday, August 17, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Caldwell Gun Club, 21840 Pond Ln, Caldwell, ID",
    eventType: "Training",
    capacity: 20,
    registeredCount: 13,
    registrationUrl: "https://caldwellgunclub.org/archery",
    price: "$65",
    featured: false
  },
  {
    title: "Black Powder Rendezvous",
    description: "Traditional black powder shooting event with period dress encouraged. Muzzleloading rifles, pistols, and trade goods.",
    date: "Saturday-Sunday, August 30-31, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Southwest Idaho Practical Shooters, Star, ID",
    eventType: "Competition",
    capacity: 50,
    registeredCount: 28,
    registrationUrl: "https://swips.org/blackpowder",
    price: "$30",
    featured: false
  },
  {
    title: "Night Vision & Thermal Demo",
    description: "After-dark demonstration of night vision and thermal optics from leading manufacturers. Educational and hands-on experience.",
    date: "Friday, September 19, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID",
    eventType: "Demo",
    capacity: 25,
    registeredCount: 17,
    registrationUrl: "https://nampagunclub.org/nightvision",
    price: "$35",
    featured: false
  },
  {
    title: "First Aid for Shooters",
    description: "Medical training specifically for shooting sports and range environments. Trauma care, range safety officer certification available.",
    date: "Saturday, September 28, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Northwest Tactical Academy, 321 Training Blvd, Star, ID",
    eventType: "Training",
    capacity: 16,
    registeredCount: 11,
    registrationUrl: "https://nwtactical.edu/firstaid",
    price: "$195",
    featured: false
  }
]

// Strategic 10-Color Distribution using explicit CSS variables
const eventCategories = [
  { 
    label: "All Events", 
    value: "all", 
    count: upcomingEvents.length, 
    activeClasses: "bg-(--color-slate-blue) text-white hover:bg-[color-mix(in_srgb,var(--color-slate-blue)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)] text-(--color-slate-blue) hover:bg-[color-mix(in_srgb,var(--color-slate-blue)_10%,transparent)]" 
  },
  { 
    label: "Competitions", 
    value: "Competition", 
    count: upcomingEvents.filter(e => e.eventType === "Competition").length, 
    activeClasses: "bg-(--color-slate-blue) text-white hover:bg-[color-mix(in_srgb,var(--color-slate-blue)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)] text-(--color-slate-blue) hover:bg-[color-mix(in_srgb,var(--color-slate-blue)_10%,transparent)]" 
  },
  { 
    label: "Training", 
    value: "Training", 
    count: upcomingEvents.filter(e => e.eventType === "Training").length, 
    activeClasses: "bg-(--color-sandy-ochre) text-white hover:bg-[color-mix(in_srgb,var(--color-sandy-ochre)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-sandy-ochre)_30%,transparent)] text-(--color-sandy-ochre) hover:bg-[color-mix(in_srgb,var(--color-sandy-ochre)_10%,transparent)]" 
  },
  { 
    label: "Expos", 
    value: "Expo", 
    count: upcomingEvents.filter(e => e.eventType === "Expo").length, 
    activeClasses: "bg-(--color-info-river) text-white hover:bg-[color-mix(in_srgb,var(--color-info-river)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-info-river)_30%,transparent)] text-(--color-info-river) hover:bg-[color-mix(in_srgb,var(--color-info-river)_10%,transparent)]" 
  },
  { 
    label: "Charity", 
    value: "Charity", 
    count: upcomingEvents.filter(e => e.eventType === "Charity").length, 
    activeClasses: "bg-(--color-sagebrush-green) text-white hover:bg-[color-mix(in_srgb,var(--color-sagebrush-green)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-sagebrush-green)_30%,transparent)] text-(--color-sagebrush-green) hover:bg-[color-mix(in_srgb,var(--color-sagebrush-green)_10%,transparent)]" 
  },
  { 
    label: "Social", 
    value: "Social", 
    count: upcomingEvents.filter(e => e.eventType === "Social").length, 
    activeClasses: "bg-(--color-rusty-orange) text-white hover:bg-[color-mix(in_srgb,var(--color-rusty-orange)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-rusty-orange)_30%,transparent)] text-(--color-rusty-orange) hover:bg-[color-mix(in_srgb,var(--color-rusty-orange)_10%,transparent)]" 
  },
  { 
    label: "Demos", 
    value: "Demo", 
    count: upcomingEvents.filter(e => e.eventType === "Demo").length, 
    activeClasses: "bg-(--color-warning-clay) text-white hover:bg-[color-mix(in_srgb,var(--color-warning-clay)_90%,black)]", 
    inactiveClasses: "border-[color-mix(in_srgb,var(--color-warning-clay)_30%,transparent)] text-(--color-warning-clay) hover:bg-[color-mix(in_srgb,var(--color-warning-clay)_10%,transparent)]" 
  }
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 12

  // Color mapping function for featured events using explicit CSS variables
  const getEventColors = (eventType: string) => {
    switch (eventType) {
      case 'Competition': return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)] to-[color-mix(in_srgb,var(--color-slate-blue)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)]',
        text: 'text-(--color-slate-blue)',
        iconText: 'text-(--color-slate-blue)',
        badge: 'bg-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)] text-(--color-slate-blue) border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)]',
        buttonText: 'text-(--color-slate-blue)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-slate-blue)_80%,black)]'
      }
      case 'Training': return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-sandy-ochre)_20%,transparent)] to-[color-mix(in_srgb,var(--color-sandy-ochre)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-sandy-ochre)_20%,transparent)]',
        text: 'text-(--color-sandy-ochre)',
        iconText: 'text-(--color-sandy-ochre)',
        badge: 'bg-[color-mix(in_srgb,var(--color-sandy-ochre)_20%,transparent)] text-(--color-sandy-ochre) border-[color-mix(in_srgb,var(--color-sandy-ochre)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-sandy-ochre)_30%,transparent)]',
        buttonText: 'text-(--color-sandy-ochre)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-sandy-ochre)_80%,black)]'
      }
      case 'Expo': return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-info-river)_20%,transparent)] to-[color-mix(in_srgb,var(--color-info-river)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-info-river)_20%,transparent)]',
        text: 'text-(--color-info-river)',
        iconText: 'text-(--color-info-river)',
        badge: 'bg-[color-mix(in_srgb,var(--color-info-river)_20%,transparent)] text-(--color-info-river) border-[color-mix(in_srgb,var(--color-info-river)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-info-river)_30%,transparent)]',
        buttonText: 'text-(--color-info-river)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-info-river)_80%,black)]'
      }
      case 'Charity': return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-sagebrush-green)_20%,transparent)] to-[color-mix(in_srgb,var(--color-sagebrush-green)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-sagebrush-green)_20%,transparent)]',
        text: 'text-(--color-sagebrush-green)',
        iconText: 'text-(--color-sagebrush-green)',
        badge: 'bg-[color-mix(in_srgb,var(--color-sagebrush-green)_20%,transparent)] text-(--color-sagebrush-green) border-[color-mix(in_srgb,var(--color-sagebrush-green)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-sagebrush-green)_30%,transparent)]',
        buttonText: 'text-(--color-sagebrush-green)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-sagebrush-green)_80%,black)]'
      }
      case 'Social': return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-rusty-orange)_20%,transparent)] to-[color-mix(in_srgb,var(--color-rusty-orange)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-rusty-orange)_20%,transparent)]',
        text: 'text-(--color-rusty-orange)',
        iconText: 'text-(--color-rusty-orange)',
        badge: 'bg-[color-mix(in_srgb,var(--color-rusty-orange)_20%,transparent)] text-(--color-rusty-orange) border-[color-mix(in_srgb,var(--color-rusty-orange)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-rusty-orange)_30%,transparent)]',
        buttonText: 'text-(--color-rusty-orange)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-rusty-orange)_80%,black)]'
      }
      case 'Demo': return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-warning-clay)_20%,transparent)] to-[color-mix(in_srgb,var(--color-warning-clay)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-warning-clay)_20%,transparent)]',
        text: 'text-(--color-warning-clay)',
        iconText: 'text-(--color-warning-clay)',
        badge: 'bg-[color-mix(in_srgb,var(--color-warning-clay)_20%,transparent)] text-(--color-warning-clay) border-[color-mix(in_srgb,var(--color-warning-clay)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-warning-clay)_30%,transparent)]',
        buttonText: 'text-(--color-warning-clay)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-warning-clay)_80%,black)]'
      }
      default: return {
        background: 'bg-gradient-to-b from-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)] to-[color-mix(in_srgb,var(--color-slate-blue)_15%,transparent)]',
        border: 'border-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)]',
        text: 'text-(--color-slate-blue)',
        iconText: 'text-(--color-slate-blue)',
        badge: 'bg-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)] text-(--color-slate-blue) border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)]',
        buttonBorder: 'border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)]',
        buttonText: 'text-(--color-slate-blue)',
        hoverText: 'hover:text-[color-mix(in_srgb,var(--color-slate-blue)_80%,black)]'
      }
    }
  }
  
  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.eventType === selectedCategory
    const matchesSearch = searchQuery === "" || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage)

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb Hero - Left Aligned */}
        <section className="bg-gradient-to-br from-(--color-slate-blue) to-[color-mix(in_srgb,var(--color-slate-blue)_80%,black)] border-b border-border/20 pt-[calc(var(--space-3xl)+var(--space-lg))] pb-3xl">
          <div className="container mx-auto max-w-site px-md">
            <div className="flex items-center gap-xs text-sm text-(--color-crisp-off-white)/80 mb-sm">
              <span>Home</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-(--color-rusty-orange) font-medium">Events</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch">
              <div className="lg:col-span-2 h-full flex flex-col justify-between">
                <div className="space-y-xs">
                  <Badge className="bg-[color-mix(in_srgb,var(--color-slate-blue)_20%,transparent)] text-(--color-slate-blue) border-[color-mix(in_srgb,var(--color-slate-blue)_30%,transparent)] w-fit">
                    <IconCalendarEvent className="h-4 w-4 mr-xs" />
                    Events Hub
                  </Badge>
                  <h1 className="font-rajdhani text-4xl md:text-5xl font-bold text-(--color-crisp-off-white) leading-tight">
                    Treasure Valley Events
                  </h1>
                  <p className="text-body-lg text-(--color-crisp-off-white)/80 max-w-2xl">
                    Discover competitions, training, shows, and community events across Idaho's premier firearms region.
                  </p>
                </div>
                <div className="flex gap-base">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-(--color-rusty-orange) to-(--color-rusty-orange) text-(--color-shared-dark) hover:from-(--color-rusty-orange) hover:to-(--color-rusty-orange) font-rajdhani font-bold"
                  >
                    <RiFireFill className="h-4 w-4 mr-xs" />
                    Submit Event
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[color-mix(in_srgb,var(--color-rusty-orange)_30%,transparent)] text-(--color-rusty-orange) hover:bg-(--color-rusty-orange) hover:text-(--color-shared-dark)"
                  >
                    View Calendar
                  </Button>
                </div>
              </div>
              
              {/* Featured Event Spotlight */}
              <div className="lg:col-span-1">
                <div className="relative h-full">
                  <Card className="mica border-rusty-orange/30 hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rusty-orange/20 to-rusty-orange/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rusty-orange to-rusty-orange"></div>
                    
                    <CardHeader className="pb-xs relative z-10">
                      <div className="flex items-center justify-between mb-xs">
                        <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30 font-rajdhani font-bold text-[10px]">
                          <IconBolt className="h-3 w-3 mr-xs" />
                          NEXT EVENT
                        </Badge>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>3 days</span>
                        </div>
                      </div>
                      
                      <div className="space-y-xs">
                        <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">USPSA Monthly Match</h3>
                        <div className="flex items-center gap-xs text-xs text-muted-foreground">
                          <IconMapPin className="h-3 w-3 text-rusty-orange" />
                          <span>Nampa Rod & Gun Club</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-base relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="space-y-xs">
                          <div className="flex items-center gap-xs text-xs text-card-foreground/80">
                            <IconCalendarEvent className="h-3 w-3 text-rusty-orange" />
                            <span className="font-medium">Sat, Aug 9 • 8:00 AM</span>
                          </div>
                          <div className="flex items-center gap-xs text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>54/80 registered</span>
                            <DollarSign className="h-3 w-3 ml-xs" />
                            <span>$15</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rusty-orange/30 to-rusty-orange/20 flex items-center justify-center mb-xs">
                            <GiCrossedPistols className="h-5 w-5 text-rusty-orange" />
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold text-xs"
                        size="sm"
                      >
                        REGISTER NOW
                        <ArrowRight className="h-3 w-3 ml-xs" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Ticker */}
        <EventTicker 
          events={upcomingEvents.filter(e => e.featured).map(event => ({
            title: event.title,
            date: event.date.split(',')[1]?.trim() || event.date,
            location: event.location,
            eventType: event.eventType,
            price: event.price,
            featured: event.featured
          }))}
        />


        {/* Featured Events & Calendar Integration */}
        <section className="py-2xl bg-muted/30">
          <div className="container mx-auto max-w-site px-md">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
              
              {/* Featured Events */}
              <div className="lg:col-span-2 space-y-base">
                <div className="flex items-center justify-between">
                  <h2 className="font-rajdhani text-2xl font-bold text-card-foreground">Featured Events</h2>
                  <Button variant="ghost" className="text-rusty-orange hover:text-dark-chocolate">
                    View All <ArrowRight className="h-4 w-4 ml-xs" />
                  </Button>
                </div>
                
                <div className="grid gap-lg">
                  {filteredEvents.filter(event => event.featured).slice(0, 3).map((event, index) => {
                    const formatTicketDate = (dateString: string) => {
                      const date = new Date(dateString)
                      const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
                      return {
                        month: monthNames[date.getMonth()],
                        day: date.getDate().toString().padStart(2, '0'),
                        dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
                      }
                    }
                    
                    const ticketDate = formatTicketDate(event.date)
                    const eventId = `TBG${event.title.replace(/\s+/g, '').slice(0, 6).toUpperCase()}`
                    const colors = getEventColors(event.eventType)
                    
                    return (
                      <Card key={index} className="p-0 overflow-hidden hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                        <div className="flex">
                          {/* Fixed Width Date Stub */}
                          <div className={cn("w-24 flex-shrink-0 p-base text-center relative border-r", colors.background, colors.border)}>
                            {/* Perforated Edge */}
                            <div className="absolute -right-1.5 top-2 bottom-2 flex flex-col justify-evenly">
                              {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="w-3 h-3 bg-background rounded-full border border-border/50" />
                              ))}
                            </div>
                            
                            <div className="space-y-1">
                              <div className={cn("text-[10px] font-medium tracking-wide", colors.text)}>
                                {ticketDate.dayOfWeek}
                              </div>
                              <div className={cn("text-2xl font-rajdhani font-bold leading-none", colors.text)}>
                                {ticketDate.day}
                              </div>
                              <div className={cn("text-[10px] font-medium tracking-wide", colors.text)}>
                                {ticketDate.month}
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Area */}
                          <div className="flex-1 p-lg">
                            <div className="space-y-xs">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-xs">
                                  <Badge className={cn("text-[10px]", colors.badge)}>
                                    {event.eventType.toUpperCase()}
                                  </Badge>
                                  <Badge className="bg-safety-red text-white text-[10px]">FEATURED</Badge>
                                </div>
                                <div className="text-[10px] text-muted-foreground font-mono">#{eventId}</div>
                              </div>
                              
                              <h3 className={cn("font-rajdhani text-xl font-bold text-card-foreground transition-colors", colors.hoverText.replace('hover:', 'group-hover:'))}>
                                {event.title}
                              </h3>
                              
                              <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                              
                              <div className="flex items-center justify-between pt-xs">
                                <div className="flex items-center gap-base text-xs text-muted-foreground">
                                  <div className="flex items-center gap-xs">
                                    <MapPin className={cn("h-3 w-3", colors.iconText)} />
                                    <span>{event.location.split(',')[0]}</span>
                                  </div>
                                  <div className="flex items-center gap-xs">
                                    <Users className={cn("h-3 w-3", colors.iconText)} />
                                    <span>{event.registeredCount}/{event.capacity}</span>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className={cn("shadow-none border px-base py-xs", colors.buttonText, colors.buttonBorder, colors.hoverText)}>
                                  REGISTER
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Calendar & Quick Actions */}
              <div className="space-y-base">
                <h3 className="font-rajdhani text-xl font-bold text-card-foreground">This Month</h3>
                
                <div className="space-y-base">
                  <div className="grid grid-cols-7 gap-xs text-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-xs font-medium text-muted-foreground p-xs">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const date = i - 2; // Start from -2 to show previous month
                      // Extract actual event dates from our events data
                      const eventDates = filteredEvents
                        .map(event => {
                          const eventDate = new Date(event.date);
                          return eventDate.getDate();
                        })
                        .filter(d => d >= 1 && d <= 31);
                      const hasEvent = eventDates.includes(date);
                      const eventCount = eventDates.filter(d => d === date).length;
                      
                      return (
                        <div key={i} className={`
                          text-xs p-xs rounded cursor-pointer transition-colors relative
                          ${date < 1 || date > 31 ? 'text-muted-foreground/50' : 'text-card-foreground hover:bg-accent'}
                          ${hasEvent ? 'bg-(--color-rusty-orange)/20 text-(--color-rusty-orange) font-bold' : ''}
                        `}>
                          {date < 1 ? 30 + date : date > 31 ? date - 31 : date}
                          {eventCount > 1 && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-(--color-rusty-orange) rounded-full text-[8px] flex items-center justify-center text-(--color-crisp-off-white)">
                              {eventCount}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="pt-base border-t space-y-xs">
                    <h4 className="font-medium text-sm">Quick Actions</h4>
                    <div className="space-y-xs">
                      <Button variant="ghost" className="justify-start w-full text-xs h-8">
                        <Plus className="h-3 w-3 mr-xs" />
                        Add to Calendar
                      </Button>
                      <Button variant="ghost" className="justify-start w-full text-xs h-8">
                        <Eye className="h-3 w-3 mr-xs" />
                        View Full Calendar
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="space-y-base text-center">
                  <div>
                    <div className="font-rajdhani text-3xl font-bold text-(--color-rusty-orange)">132+</div>
                    <div className="text-xs text-muted-foreground">Events This Month</div>
                  </div>
                  <div className="grid grid-cols-2 gap-base text-center">
                    <div>
                      <div className="font-rajdhani text-lg font-bold text-(--color-rusty-orange)">45+</div>
                      <div className="text-xs text-muted-foreground">Venues</div>
                    </div>
                    <div>
                      <div className="font-rajdhani text-lg font-bold text-(--color-sagebrush-green)">6</div>
                      <div className="text-xs text-muted-foreground">Categories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      {/* Events Grid */}
      <section className="py-2xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="space-y-2xl">
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                {selectedCategory === "all" ? "All Events" : `${selectedCategory} Events`}
              </h2>
              <div className="text-muted-foreground">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
              </div>
            </div>

            {/* Search and Category Filters */}
            <div className="space-y-base">
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-sm">
                {eventCategories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={cn(
                      "shadow-none border",
                      selectedCategory === category.value
                        ? category.activeClasses
                        : category.inactiveClasses
                    )}
                  >
                    {category.label}
                    <Badge className="ml-xs bg-current/20 text-current text-[10px] border-0">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
              {paginatedEvents.map((event, index) => (
                <EventCard
                  key={startIndex + index}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  eventType={event.eventType}
                  capacity={event.capacity}
                  registeredCount={event.registeredCount}
                  registrationUrl={event.registrationUrl}
                  price={event.price}
                  featured={event.featured}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-base mt-2xl">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="border-border/30 text-muted-foreground hover:text-card-foreground hover:bg-muted/50"
                >
                  <ArrowRight className="h-4 w-4 rotate-180 mr-xs" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-xs">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "solid-accent" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page 
                        ? "bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange w-10 h-10"
                        : "text-muted-foreground hover:text-card-foreground hover:bg-muted/50 w-10 h-10"
                      }
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="border-border/30 text-muted-foreground hover:text-card-foreground hover:bg-muted/50"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-xs" />
                </Button>
              </div>
            )}

            {filteredEvents.length === 0 && (
              <div className="text-center py-6xl">
                <div className="space-y-base">
                  <div className="text-6xl">🎯</div>
                  <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                    No events found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Try adjusting your search criteria or browse all events to discover what's happening in the Treasure Valley.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedCategory("all")
                      setSearchQuery("")
                    }}
                    className="bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange"
                  >
                    Show All Events
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Submission CTA */}
      <section className="py-2xl bg-gradient-to-br from-slate-blue to-ayu-green">
        <div className="container mx-auto max-w-site px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-range-white/20 text-range-white border-range-white/30">
              <Plus className="h-4 w-4 mr-xs" />
              Event Organizers
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-range-white">
              List Your Event <span className="text-range-white font-bold">Free</span>
            </h2>
            <p className="text-body-lg text-range-white/80 max-w-2xl mx-auto">
              Help build Idaho's most comprehensive firearms events calendar. Submit your upcoming events and reach thousands of enthusiasts across the Treasure Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-base justify-center">
              <Button 
                size="xl" 
                className="bg-range-white text-slate-blue hover:bg-range-white/90 font-rajdhani font-bold"
              >
                Submit Your Event
                <ArrowRight className="h-5 w-5 ml-xs" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-range-white/30 text-range-white hover:bg-range-white hover:text-slate-blue"
              >
                Event Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TBGC - Moved above footer */}
      <section className="py-2xl bg-muted/30">
        <div className="container mx-auto max-w-site px-md">
          <div className="text-center space-y-xl">
            <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">Why Choose TBGC Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <Card className="p-lg bg-gradient-to-br from-slate-blue/5 to-ayu-cobalt/5">
                <div className="text-center space-y-base">
                  <div className="bg-slate-blue/20 p-base rounded-full w-fit mx-auto">
                    <CheckCircle className="h-6 w-6 text-slate-blue" />
                  </div>
                  <div>
                    <div className="font-rajdhani text-2xl font-bold text-card-foreground">Vetted</div>
                    <div className="text-sm text-muted-foreground">Events & Organizers</div>
                  </div>
                </div>
              </Card>

              <Card className="p-lg">
                <div className="text-center space-y-base">
                  <div className="bg-rifling-green/20 p-base rounded-full w-fit mx-auto">
                    <MapPin className="h-6 w-6 text-rifling-green" />
                  </div>
                  <div>
                    <div className="font-rajdhani text-2xl font-bold text-card-foreground">Local</div>
                    <div className="text-sm text-muted-foreground">Treasure Valley Focus</div>
                  </div>
                </div>
              </Card>

              <Card className="p-lg">
                <div className="text-center space-y-base">
                  <div className="bg-rusty-orange/20 p-base rounded-full w-fit mx-auto">
                    <Calendar className="h-6 w-6 text-rusty-orange" />
                  </div>
                  <div>
                    <div className="font-rajdhani text-2xl font-bold text-card-foreground">Free</div>
                    <div className="text-sm text-muted-foreground">Event Listings</div>
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find legitimate events from established ranges, clubs, and training organizations across the Treasure Valley. All events are verified before listing.
            </p>
          </div>
        </div>
      </section>
    </div>
    <SiteFooter />
    <AccessibilityFAB />
  </>
)
}