'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { EventTicker } from '@/components/ui/event-ticker'
import { BlogList } from '@/components/ui/blog-article'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { 
  Shield, BookOpen, Target, Star, ChevronRight, Plus, ArrowRight, User, Eye,
  Scale, FileText, MapPin, Globe, Users, Wrench
} from 'lucide-react'

// Blog articles for The Armory - Idaho firearms content
const armoryArticles = [
  // Legal & Compliance
  {
    id: 'idaho-gun-laws-complete-2025-guide',
    title: "Idaho Gun Laws: Complete 2025 Guide",
    excerpt: "Comprehensive overview of Idaho's firearms laws, including constitutional carry, concealed carry permits, prohibited locations, and recent legislative updates for Idaho residents.",
    category: "Legal",
    author: {
      name: "Legal Team",
      title: "Legal Experts",
      bio: "Idaho firearms law specialists"
    },
    publishDate: "2025-01-15",
    readTime: 12,
    views: 2840,
    likes: 127,
    comments: 23,
    featured: true,
    tags: ["Constitutional Carry", "CCW", "State Laws", "Permits"],
    image: "/images/Fractal/25.webp"
  },
  {
    id: 'federal-vs-state-gun-laws-in-idaho',
    title: "Federal vs. State Gun Laws in Idaho",
    excerpt: "Understanding the interaction between federal firearms regulations and Idaho state law, including areas where federal law takes precedence.",
    category: "Legal",
    author: {
      name: "Legal Team",
      title: "Legal Experts",
      bio: "Federal and state law specialists"
    },
    publishDate: "2025-01-10",
    readTime: 8,
    views: 1560,
    likes: 89,
    comments: 15,
    featured: false,
    tags: ["Federal Law", "State Law", "Compliance", "ATF"],
    image: "/images/Smoke/Background_08.webp"
  },
  {
    id: 'nfa-items-in-idaho-suppressors-sbrs-and-more',
    title: "NFA Items in Idaho: Suppressors, SBRs, and More",
    excerpt: "Complete guide to owning NFA regulated items in Idaho, including the application process, wait times, and legal considerations for Idaho gun owners.",
    category: "Legal",
    author: {
      name: "Legal Team",
      title: "NFA Specialists",
      bio: "National Firearms Act experts"
    },
    publishDate: "2024-12-20",
    readTime: 15,
    views: 980,
    likes: 67,
    comments: 31,
    featured: true,
    tags: ["NFA", "Suppressors", "SBR", "ATF Forms"],
    image: "/images/Dust/VintageDust (5).webp"
  },

  // Buying Guides
  {
    id: 'first-time-gun-buyers-guide-idaho-edition',
    title: "First-Time Gun Buyer's Guide: Idaho Edition",
    excerpt: "Step-by-step guide for purchasing your first firearm in Idaho, covering background checks, FFL dealers, and what to expect at the gun store.",
    category: "Buying Guide",
    author: {
      name: "Education Team",
      title: "Firearms Educators",
      bio: "Idaho firearms education specialists"
    },
    publishDate: "2025-01-08",
    readTime: 10,
    views: 3200,
    likes: 245,
    comments: 18,
    featured: true,
    tags: ["First Time Buyer", "Background Check", "FFL", "Gun Store"],
    image: "/images/Grid/Grid (1).webp"
  },
  {
    id: 'first-ccw-pistol',
    title: "Choosing Your First Concealed Carry Pistol",
    excerpt: "Factors to consider when selecting a concealed carry handgun, including size, caliber, reliability, and Idaho-specific considerations for new CCW holders.",
    category: "Buying Guide",
    author: {
      name: "Training Team",
      title: "Firearms Instructors",
      bio: "Idaho concealed carry specialists"
    },
    publishDate: "2024-12-15",
    readTime: 14,
    views: 2100,
    likes: 178,
    comments: 42,
    featured: false,
    tags: ["Concealed Carry", "Pistol Selection", "CCW", "Self Defense"],
    image: "/images/Fractal/12.webp"
  },

  // Safety & Training
  {
    id: 'firearm-safety-the-four-fundamental-rules',
    title: "Firearm Safety: The Four Fundamental Rules",
    excerpt: "Essential firearm safety rules that every gun owner must know and practice, with practical examples and real-world applications for safe firearms handling.",
    category: "Safety",
    author: {
      name: "Safety Team",
      title: "Certified Safety Instructors",
      bio: "NRA certified firearms safety experts"
    },
    publishDate: "2025-01-12",
    readTime: 6,
    views: 4100,
    likes: 312,
    comments: 8,
    featured: true,
    tags: ["Safety Rules", "Gun Safety", "Fundamentals", "Training"],
    image: "/images/Smoke/Background_08.webp"
  },
  {
    id: 'safe-storage-protecting-your-family-and-firearms',
    title: "Safe Storage: Protecting Your Family and Firearms",
    excerpt: "Best practices for firearm storage in the home, including safes, locks, and balancing security with accessibility for Idaho gun owners.",
    category: "Safety",
    author: {
      name: "Safety Team",
      title: "Home Security Experts",
      bio: "Firearms storage and child safety specialists"
    },
    publishDate: "2024-12-30",
    readTime: 9,
    views: 1670,
    likes: 98,
    comments: 19,
    featured: false,
    tags: ["Gun Safe", "Storage", "Child Safety", "Security"],
    image: "/images/Dust/VintageDust (5).webp"
  },
  {
    id: 'range-etiquette-safety',
    title: "Range Etiquette and Safety Protocols",
    excerpt: "Proper behavior and safety procedures at shooting ranges, including commands, lane safety, and working with range officers at Idaho facilities.",
    category: "Safety",
    author: {
      name: "Training Team",
      title: "Range Safety Officers",
      bio: "Certified range safety and training professionals"
    },
    publishDate: "2024-12-22",
    readTime: 7,
    views: 1340,
    likes: 76,
    comments: 12,
    featured: false,
    tags: ["Range Safety", "Etiquette", "Shooting Range", "Protocols"],
    image: "/images/Grid/Grid (1).webp"
  },

  // Maintenance
  {
    id: 'basic-firearm-maintenance',
    title: "Basic Firearm Cleaning and Maintenance",
    excerpt: "Essential cleaning procedures and maintenance schedules to keep your firearms in optimal condition and ensure reliable operation year-round.",
    category: "Maintenance",
    author: {
      name: "Technical Team",
      title: "Gunsmith Professionals",
      bio: "Licensed gunsmiths and maintenance experts"
    },
    publishDate: "2024-12-18",
    readTime: 13,
    views: 2200,
    likes: 156,
    comments: 34,
    featured: false,
    tags: ["Cleaning", "Maintenance", "Gun Care", "Reliability"],
    image: "/images/Fractal/25.webp"
  },
  {
    id: 'marksmanship-fundamentals',
    title: "Fundamentals of Marksmanship",
    excerpt: "Core shooting principles including stance, grip, sight alignment, and trigger control for improved accuracy and precision shooting.",
    category: "Training",
    author: {
      name: "Training Team",
      title: "Marksmanship Instructors",
      bio: "Competition shooters and certified instructors"
    },
    publishDate: "2024-12-05",
    readTime: 16,
    views: 1780,
    likes: 123,
    comments: 26,
    featured: false,
    tags: ["Marksmanship", "Shooting Skills", "Accuracy", "Fundamentals"],
    image: "/images/Fractal/12.webp"
  }
]

// Real Idaho firearms content structure for The Armory blog functionality

const upcomingEvents = [
  {
    title: "USPSA Monthly Match",
    date: "August 9, 2025",
    location: "Nampa Rod & Gun Club",
    eventType: "Competition",
    price: "$15",
    featured: true
  },
  {
    title: "Idaho State Camo Shoot",
    date: "July 26, 2025",
    location: "Caldwell Gun Club",
    eventType: "Charity",
    price: "$600 (Team of 4)",
    featured: true
  },
  {
    title: "Great Idaho Gun Show",
    date: "September 20-21, 2025",
    location: "Ford Idaho Center",
    eventType: "Expo",
    price: "$10",
    featured: true
  },
];

// Categories and filters now handled by BlogList component

// Removed ArticleCard - now using BlogCard from blog-article component

export default function ArmoryPage() {

  return (
    <div className="theme-armory min-h-screen">
      <SiteNavigation />
      <div className="w-full">{/* Main content wrapper */}
      {/* Armory Hero - Content Left, Card Right (Layout 3) */}
      <section className="relative overflow-hidden bg-gradient-armory-hero px-md py-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-gruvbox-bg-dark/20 via-transparent to-gruvbox-bg-dark/10 pointer-events-none"></div>
        <div className="container mx-auto max-w-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
            {/* Content - Left side */}
            <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
              {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
              <div className="flex items-center gap-base">
                <div className="bg-card/10 p-base rounded-xs border border-border">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-base">
                  {/* Breadcrumbs */}
                  <Breadcrumb>
                    <BreadcrumbList className="text-white/60">
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="text-white/60 hover:text-white">
                          Home
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-white font-medium">
                          Armory
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-xs">
                    <Badge className="bg-card/10 text-white border-border rounded-xs">
                      <BookOpen className="h-4 w-4 mr-xs" />
                      Expert Knowledge
                    </Badge>
                    <Badge className="bg-card/10 text-white border-border rounded-xs">
                      <Star className="h-4 w-4 mr-xs" />
                      Equipment Reviews
                    </Badge>
                    <Badge className="bg-card/10 text-white border-border rounded-xs">
                      <Target className="h-4 w-4 mr-xs" />
                      Tactical Guides
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Titles - H1 & H2 Butt Buddies */}
              <div className="space-y-xs">
                <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                  Idaho Gun Reviews & <span className="text-white">Firearms Guides</span>
                </h1>
                <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                  Expert Equipment Reviews & Tactical Knowledge Base
                </h2>
              </div>
              
              {/* Chunky Description */}
              <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
                Expert equipment reviews and tactical insights from Idaho's firearms professionals. From precision rifles to duty gear, get real-world performance data for informed decisions.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-base">
                <Link href="mailto:content@boiseguncollective.com?subject=Armory Article Suggestion&body=I'd like to suggest an article topic for The Boise Gun Club Armory section:%0A%0ATopic:%0ADescription:%0AWhy this would be valuable:">
                  <Button 
                    size="lg" 
                    className="bg-white text-nav-armory hover:bg-crisp-off-white font-rajdhani font-bold"
                  >
                    <Plus className="h-4 w-4 mr-xs" />
                    Suggest Article
                  </Button>
                </Link>
                <Link href="#latest-articles">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border text-white hover:bg-white hover:text-nav-armory"
                  >
                    View Categories
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Featured Article Card - Right side */}
            <div className="lg:col-span-1 py-md min-h-[400px]">
              <div className="relative h-full">
                <Card className="mica border-nav-armory/30 hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-armory/20 to-nav-armory/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-armory to-nav-armory"></div>
                  
                  <CardHeader className="pb-xs relative z-10">
                    <div className="flex items-center justify-between mb-xs">
                      <Badge className="bg-nav-armory/20 text-nav-armory border-nav-armory/30 font-rajdhani font-bold text-[10px]">
                        <Shield className="h-3 w-3 mr-xs" />
                        FEATURED GUIDE
                      </Badge>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        <span>2.1k views</span>
                      </div>
                    </div>
                    
                    <div className="space-y-xs">
                      <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">Idaho Gun Laws 2025</h3>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <User className="h-3 w-3 text-nav-armory" />
                        <span>Legal Expert • 8 min read</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-base relative z-10">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      Complete guide to Idaho's firearms laws including constitutional carry, concealed carry permits, and recent legislative updates for 2025.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-nav-armory text-nav-armory" />
                        <span>Expert Verified</span>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-nav-armory to-nav-armory text-gruvbox-bg-dark hover:from-nav-armory hover:to-nav-armory font-rajdhani font-bold text-xs"
                        size="sm"
                      >
                        READ NOW
                        <ArrowRight className="h-3 w-3 ml-xs" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation/Filter Controls - Now as page background section */}
      <section className="py-lg section-bg-armory-neutral border-b border-border/50">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
            
            {/* Idaho Content Filters */}
            <div className="lg:col-span-2">
              <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-sm">
                Idaho Content
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-xs">
                <Button variant="outline" size="sm" className="justify-start gap-xs text-body-xs font-rajdhani shadow-none rounded-xs">
                  <Scale weight="bold" className="size-3" />
                  <span>Idaho Laws</span>
                  <Badge variant="secondary" size="sm" className="ml-auto">12</Badge>
                </Button>
                <Button variant="outline" size="sm" className="justify-start gap-xs text-body-xs font-rajdhani shadow-none rounded-xs">
                  <FileText weight="bold" className="size-3" />
                  <span>Buying Guides</span>
                  <Badge variant="secondary" size="sm" className="ml-auto">8</Badge>
                </Button>
                <Button variant="outline" size="sm" className="justify-start gap-xs text-body-xs font-rajdhani shadow-none rounded-xs">
                  <Shield weight="bold" className="size-3" />
                  <span>Safety Training</span>
                  <Badge variant="secondary" size="sm" className="ml-auto">15</Badge>
                </Button>
              </div>
            </div>

            {/* Local Resources */}
            <div>
              <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground mb-sm">
                Local Resources
              </h3>
              <div className="space-y-xs">
                <Button variant="outline" size="sm" className="w-full justify-between text-body-xs font-rajdhani shadow-none rounded-xs">
                  <div className="flex items-center gap-xs">
                    <MapPin weight="bold" className="size-3" />
                    <span>Shooting Ranges</span>
                  </div>
                  <Badge variant="secondary" size="sm">18</Badge>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-between text-body-xs font-rajdhani shadow-none rounded-xs">
                  <div className="flex items-center gap-xs">
                    <Target weight="bold" className="size-3" />
                    <span>Training Facilities</span>
                  </div>
                  <Badge variant="secondary" size="sm">12</Badge>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-between text-body-xs font-rajdhani shadow-none rounded-xs">
                  <div className="flex items-center gap-xs">
                    <Users weight="bold" className="size-3" />
                    <span>Local FFLs</span>
                  </div>
                  <Badge variant="secondary" size="sm">34</Badge>
                </Button>
              </div>
            </div>

            {/* Coming Soon Preview */}
            <div className="space-y-sm">
              <h3 className="font-rajdhani font-bold text-body-lg text-card-foreground">
                Coming Soon
              </h3>
              <div className="p-sm bg-nav-armory/5 rounded-xs border border-nav-armory/20">
                <div className="space-y-xs text-center">
                  <Globe weight="bold" className="size-5 text-nav-armory mx-auto" />
                  <h4 className="font-rajdhani font-bold text-body-sm text-card-foreground">
                    Firearm Database
                  </h4>
                  <p className="text-body-xs text-muted-foreground leading-relaxed">
                    12K+ firearms with specs & reviews.
                  </p>
                  <Button size="sm" disabled className="w-full shadow-none opacity-50">
                    <Wrench weight="bold" className="size-3 mr-xs" />
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Ticker */}
      <EventTicker 
        events={upcomingEvents.map(event => ({
          title: event.title,
          date: event.date,
          location: event.location,
          eventType: event.eventType,
          price: event.price,
          featured: event.featured
        }))}
      />

      {/* Stats Section - Enhanced with More Breathing Room */}
      <section className="py-6xl bg-muted/50">
        <div className="container mx-auto max-w-7xl px-md">
          <div className="text-center mb-4xl">
            <h2 className="font-rajdhani text-heading-2xl font-bold text-card-foreground mb-base">
              The Armory by the Numbers
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Real engagement metrics from Idaho's firearms knowledge community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
            <StatCard
              title="Total Articles"
              value={armoryArticles.length.toString()}
              label="Expert Guides"
              trend="up"
              trendValue={`${8}%`}
            />
            <StatCard
              title="Monthly Readers"
              value="28.4K"
              label="Active Users"
              variant="default"
              trend="up"
              trendValue={`${23}%`}
            />
            <StatCard
              title="Expert Authors"
              value="6"
              label="Contributors"
              variant="default"
              trend="up"
              trendValue={`${100}%`}
            />
            <StatCard
              title="Avg Rating"
              value="4.8"
              label="User Score"
              variant="default"
              trend="up"
              trendValue={`${92}%`}
            />
          </div>
        </div>
      </section>

      {/* Search section removed - now handled by BlogList component */}

      {/* Blog Content Section - Full Width with Enhanced Spacing */}
      <section id="latest-articles" className="py-6xl">
        <div className="container mx-auto max-w-7xl px-md">
          <div className="text-center mb-4xl">
            <h2 className="font-rajdhani text-heading-2xl font-bold text-card-foreground mb-base">
              Latest Expert Articles
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth guides and reviews from Idaho's firearms community experts
            </p>
          </div>
          <BlogList 
            articles={armoryArticles}
            variant="grid"
            showFilters={false}
            title=""
            subtitle=""
            className="pb-0"
          />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-6xl bg-page-gradient">
        <div className="container mx-auto max-w-site px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-page-primary/20 text-page-primary border-page-primary/30">
              <BookOpen className="h-4 w-4 mr-xs" />
              Stay Updated
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-crisp-off-white">
              Never Miss an <span className="text-page-primary">Update</span>
            </h2>
            <p className="text-body-lg text-crisp-off-white/80 max-w-2xl mx-auto">
              Get notified when we publish new articles, legal updates, and important information for Idaho firearms owners. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-base justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-card/10 border-page-primary/30 text-crisp-off-white placeholder:text-crisp-off-white/60"
              />
              <Button 
                size="lg" 
                className="bg-page-gradient text-page-primary-foreground hover:opacity-90 font-rajdhani font-bold"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-crisp-off-white/60">
              Join 2,800+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter currentPage="armory" />
      </div>{/* End main content wrapper */}
    </div>
  )
}