'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EventCard } from '@/components/ui/EventCard'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { EventTicker } from '@/components/ui/event-ticker'
import { EmptyState } from '@/components/ui/empty-state'
import { PageSection } from '@/components/ui/page-section'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { cn } from '@/lib/utils'
// Import Phosphor icons for activity feed
import { 
  CheckCircle as PhosphorCheckCircle,
  Plus as PhosphorPlus, 
  Warning as PhosphorWarning 
} from '@phosphor-icons/react'
// Temporary: Using Lucide React until Phosphor icons are fixed
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Target,
  Search,
  DollarSign,
  Plus,
  ArrowRight,
  ChevronRight,
  CalendarDays,
  TrendingUp,
  Award,
  MessageSquare,
  CheckCircle,
  Crown,
  Sparkles,
  AlertTriangle,
} from 'lucide-react'

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

const eventCategories = [
    { label: "All Events", value: "all", count: upcomingEvents.length },
    { label: "Competitions", value: "Competition", count: upcomingEvents.filter(e => e.eventType === "Competition").length },
    { label: "Training", value: "Training", count: upcomingEvents.filter(e => e.eventType === "Training").length },
    { label: "Expos", value: "Expo", count: upcomingEvents.filter(e => e.eventType === "Expo").length },
    { label: "Charity", value: "Charity", count: upcomingEvents.filter(e => e.eventType === "Charity").length },
    { label: "Social", value: "Social", count: upcomingEvents.filter(e => e.eventType === "Social").length },
    { label: "Demos", value: "Demo", count: upcomingEvents.filter(e => e.eventType === "Demo").length }
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 12

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
      <div className="min-h-screen bg-background theme-events">
        {/* Events Hero */}
        <section className="relative overflow-hidden bg-gradient-events-hero px-md py-lg">
          <div className="container mx-auto max-w-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
              {/* Content - Left side */}
              <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
                <div className="flex items-center gap-base">
                  <div className="bg-card/10 p-base rounded-xs border border-border">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-base">
                    <div className="flex items-center gap-xs text-sm text-white/60">
                      <span>Home</span>
                      <ChevronRight className="h-4 w-4" />
                      <span className="text-white font-medium">Events</span>
                    </div>
                    <div className="flex flex-wrap gap-xs">
                      <Badge className="bg-card/10 text-white border-border rounded-xs">
                        <Trophy className="h-4 w-4 mr-xs" />
                        Competitions
                      </Badge>
                      <Badge className="bg-card/10 text-white border-border rounded-xs">
                        <Target className="h-4 w-4 mr-xs" />
                        Training
                      </Badge>
                      <Badge className="bg-card/10 text-white border-border rounded-xs">
                        <Users className="h-4 w-4 mr-xs" />
                        Community
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-xs">
                  <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                    Idaho Gun Shows & Firearms Events
                  </h1>
                  <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                    Your hub for Treasure Valley shooting competitions, training, and expos.
                  </h2>
                </div>
                <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                  Discover USPSA matches, gun shows, training courses, and charity shoots. Connect with Idaho's firearms community through verified events and professional instruction.
                </p>
                <div className="flex gap-base">
                  <Button size="lg" className="bg-white text-nav-events hover:bg-crisp-off-white font-rajdhani font-bold" animationType="plus-minus">
                    <Plus className="h-4 w-4 mr-xs" />
                    Submit Event
                  </Button>
                  <Button variant="outline" size="lg" className="border-border text-white hover:bg-white hover:text-nav-events" animationType="arrow">
                    View Calendar
                  </Button>
                </div>
              </div>
              {/* Featured Event Card - Right side */}
              <div className="lg:col-span-1 py-md min-h-[400px]">
                  <div className="relative h-full">
                      <Card variant="interactive" className="mica border-nav-events/30 overflow-hidden h-full flex flex-col justify-between shadow-elevated hover:shadow-hero">
                          <div className="absolute inset-0 bg-gradient-to-br from-nav-events/10 to-nav-events/30 opacity-50"></div>
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-events/20 to-nav-events/10 rounded-bl-full"></div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-events to-nav-events"></div>
                          <CardHeader className="pb-xs relative z-10">
                              <div className="flex items-center justify-between mb-xs">
                                  <Badge size="xs" variant="events-featured" className="font-rajdhani font-bold">
                                      <Crown className="h-3 w-3 mr-xs" />
                                      FEATURED EVENT
                                  </Badge>
                                  <div className="flex items-center gap-xs text-xs text-muted-foreground">
                                      <Clock className="h-3 w-3" />
                                      <span>3 days</span>
                                  </div>
                              </div>
                              <div className="space-y-xs">
                                  <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">USPSA Monthly Match</h3>
                                  <div className="flex items-center gap-xs text-xs text-muted-foreground">
                                      <MapPin className="h-3 w-3 text-nav-events" />
                                      <span>Nampa Rod & Gun Club</span>
                                  </div>
                              </div>
                          </CardHeader>
                          <CardContent className="space-y-base relative z-10">
                              <div className="flex items-center justify-between">
                                  <div className="space-y-xs">
                                      <div className="flex items-center gap-xs text-xs text-card-foreground/80">
                                          <Calendar className="h-3 w-3 text-nav-events" />
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
                                      <div className="w-12 h-12 rounded-pill bg-nav-events/20 flex items-center justify-center mb-xs">
                                          <Trophy className="h-5 w-5 text-nav-events" />
                                      </div>
                                  </div>
                              </div>
                              <Button className="w-full bg-gradient-to-r from-nav-events to-nav-events text-dark-chocolate hover:from-nav-events hover:to-nav-events font-rajdhani font-bold text-xs" size="sm">
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
        <EventTicker events={upcomingEvents.filter(e => e.featured).map(event => ({
            title: event.title,
            date: event.date.split(',')[1]?.trim() || event.date,
            location: event.location,
            eventType: event.eventType,
            price: event.price,
            featured: event.featured
          }))}
        />

        {/* Quick Access Toolbar */}
        <section className="py-lg bg-muted/30 border-b border-nav-events/10">
            <div className="container mx-auto max-w-site px-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-base">
                    <div className="flex flex-wrap items-center gap-xs">
                        <span className="text-sm font-medium text-nav-events mr-base">Quick Filters:</span>
                        <Button variant="outline" size="sm" className="gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated">
                            <Trophy className="h-3 w-3" />
                            Competitions
                        </Button>
                        <Button variant="outline" size="sm" className="gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated">
                            <Target className="h-3 w-3" />
                            Training
                        </Button>
                        <Button variant="outline" size="sm" className="gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated">
                            <Sparkles className="h-3 w-3" />
                            Expos
                        </Button>
                        <Button variant="outline" size="sm" className="gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated">
                            <Users className="h-3 w-3" />
                            Social
                        </Button>
                    </div>
                    <div className="flex items-center gap-xs">
                        <Button variant="ghost" size="sm" className="gap-xs text-nav-events hover:bg-nav-events/10 transition-all duration-200 shadow-none hover:shadow-whisper" animationType="arrow">
                            <CalendarDays className="h-3 w-3" />
                            Calendar View
                        </Button>
                        <div className="h-4 w-px bg-nav-events/30 mx-xs" />
                        <Button variant="ghost" size="sm" className="gap-xs text-nav-events hover:bg-nav-events/10 transition-all duration-200 shadow-none hover:shadow-whisper" animationType="chevron">
                            <TrendingUp className="h-3 w-3" />
                            Sort: Date
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-4xl bg-gradient-brand-cool">
            <div className="container mx-auto max-w-site px-md">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
                    <StatCard title="Total Events" value={`${upcomingEvents.length}+`} label="This Quarter" variant="default" trend="up" trendValue="12%" />
                    <StatCard title="Competitions" value={`${upcomingEvents.filter(e => e.eventType === "Competition").length}`} label="Matches & Leagues" variant="default" trend="up" trendValue="5" />
                    <StatCard title="Training Courses" value={`${upcomingEvents.filter(e => e.eventType === "Training").length}`} label="Classes & Clinics" variant="default" trend="down" trendValue="2" />
                    <StatCard title="Community Members" value="12,500+" label="Active Participants" variant="default" trend="up" trendValue="250" />
                </div>
            </div>
        </section>

        {/* Main Content Area */}
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
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search events by name, location, or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex flex-wrap gap-sm">
                            {eventCategories.map((category) => (
                                <Button
                                    key={category.value}
                                    variant={selectedCategory === category.value ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category.value)}
                                    className={cn(
                                        "shadow-none hover:shadow-elevated transition-all duration-300",
                                        selectedCategory === category.value
                                            ? 'bg-nav-events text-white shadow-present'
                                            : 'border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate'
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

                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-base mt-2xl">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="border-border/30 text-muted-foreground hover:text-card-foreground hover:bg-muted/50 shadow-none hover:shadow-elevated"
                                animationType="arrow"
                            >
                                <ArrowRight className="h-4 w-4 rotate-180 mr-xs" />
                                Previous
                            </Button>
                            <div className="flex items-center gap-xs">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <Button
                                        key={page}
                                        variant={currentPage === page ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setCurrentPage(page)}
                                        className={cn(
                                            "w-10 h-10 shadow-none transition-all duration-200",
                                            currentPage === page
                                                ? "bg-nav-events text-white shadow-present"
                                                : "text-muted-foreground hover:bg-muted/50 hover:shadow-elevated"
                                        )}
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
                                className="border-border/30 text-muted-foreground hover:text-card-foreground hover:bg-muted/50 shadow-none hover:shadow-elevated"
                                animationType="arrow"
                            >
                                Next
                                <ArrowRight className="h-4 w-4 ml-xs" />
                            </Button>
                        </div>
                    )}

                    {filteredEvents.length === 0 && (
                        <EmptyState
                            icon={Target}
                            title="No Events Found"
                            description="Your search and filter combination yielded no results. Try a different search or broaden your category selection."
                            actionText="Clear Filters & Show All"
                            onAction={() => {
                                setSelectedCategory("all")
                                setSearchQuery("")
                            }}
                            iconColor="text-nav-events"
                            actionColor="bg-nav-events text-white hover:bg-nav-events/90"
                        />
                    )}
                </div>
            </div>
        </section>

        {/* Recent Activity & Community Updates */}
        <section className="py-6xl bg-gradient-to-br from-nav-events/5 to-nav-events/10">
            <div className="container mx-auto max-w-site px-md">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                    <div className="lg:col-span-2 space-y-xl">
                        <div className="flex items-center justify-between">
                            <h2 className="font-rajdhani text-3xl font-bold text-nav-events">
                                Recent Activity
                            </h2>
                            <Button variant="ghost" size="sm" className="text-nav-events hover:bg-nav-events/10 shadow-none hover:shadow-whisper" animationType="arrow">
                                View All Activity
                                <ArrowRight className="h-3 w-3 ml-xs" />
                            </Button>
                        </div>
                        <div className="space-y-base">
                            <ActivityFeedCard
                                icon={PhosphorCheckCircle}
                                iconColor="text-sagebrush-green"
                                iconBgColor="bg-sagebrush-green/20"
                                title="USPSA Match registration is now open."
                                description="Slots are filling up fast for the upcoming competition. Secure your spot today!"
                                timeAgo="1h ago"
                            />
                            <ActivityFeedCard
                                icon={PhosphorPlus}
                                iconColor="text-nav-events"
                                iconBgColor="bg-nav-events/20"
                                title="New Event: Defensive Pistol Advanced"
                                description="A new advanced training course has been added for September."
                                timeAgo="3h ago"
                            />
                            <ActivityFeedCard
                                icon={PhosphorWarning}
                                iconColor="text-warning-clay"
                                iconBgColor="bg-warning-clay/20"
                                title="Location Change: Hunter Safety Course"
                                description="The August 23-24 course has been moved to the Boise location."
                                timeAgo="1d ago"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-1 space-y-xl">
                        <div>
                            <h3 className="font-rajdhani text-xl font-bold text-nav-events mb-base">
                                Community Stats
                            </h3>
                            <div className="space-y-base">
                                <Card variant="interactive" className="shadow-whisper hover:shadow-present transition-all duration-200">
                                    <div className="flex items-center justify-between p-base">
                                        <div>
                                            <p className="text-2xl font-bold text-nav-events font-rajdhani">1,200+</p>
                                            <p className="text-sm text-muted-foreground">Registrations</p>
                                        </div>
                                        <Users className="h-6 w-6 text-nav-events" />
                                    </div>
                                </Card>
                                <Card variant="interactive" className="shadow-whisper hover:shadow-present transition-all duration-200">
                                    <div className="flex items-center justify-between p-base">
                                        <div>
                                            <p className="text-2xl font-bold text-nav-events font-rajdhani">45+</p>
                                            <p className="text-sm text-muted-foreground">Event Hosts</p>
                                        </div>
                                        <Award className="h-6 w-6 text-nav-events" />
                                    </div>
                                </Card>
                                <Card variant="interactive" className="shadow-whisper hover:shadow-present transition-all duration-200">
                                    <div className="flex items-center justify-between p-base">
                                        <div>
                                            <p className="text-2xl font-bold text-nav-events font-rajdhani">350+</p>
                                            <p className="text-sm text-muted-foreground">Reviews</p>
                                        </div>
                                        <MessageSquare className="h-6 w-6 text-nav-events" />
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-rajdhani text-xl font-bold text-nav-events mb-base">
                                Contribute
                            </h3>
                            <div className="space-y-xs">
                                <Button variant="outline" size="sm" className="w-full justify-start gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated" animationType="plus-minus">
                                    <Plus className="h-4 w-4" />
                                    Submit an Event
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated" animationType="arrow">
                                    <MessageSquare className="h-4 w-4" />
                                    Review an Event
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start gap-xs border-nav-events/30 text-nav-events hover:bg-nav-events hover:text-dark-chocolate transition-all duration-200 shadow-none hover:shadow-elevated">
                                    <AlertTriangle className="h-4 w-4" />
                                    Report an Issue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
      <SiteFooter currentPage="events" />
    </>
  )
}
