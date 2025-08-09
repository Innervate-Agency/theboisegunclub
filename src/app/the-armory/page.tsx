'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import AccessibilityFAB from '@/components/ui/AccessibilityFAB'
import { EventTicker } from '@/components/ui/event-ticker'
import { 
  Search, BookOpen, Filter, Clock, User, ArrowRight, 
  Shield, Scale, GraduationCap, Wrench, Target, FileText,
  Star, Eye, MessageSquare, Calendar, ChevronRight, Plus
} from 'lucide-react'

// Knowledge Base articles for Idaho firearms community
const knowledgeBaseArticles = [
  // Legal & Compliance
  {
    title: "Idaho Gun Laws: Complete 2025 Guide",
    description: "Comprehensive overview of Idaho's firearms laws, including constitutional carry, concealed carry permits, prohibited locations, and recent legislative updates.",
    category: "Legal",
    difficulty: "Beginner",
    readTime: "12 min",
    author: "Legal Team",
    lastUpdated: "2025-01-15",
    views: 2840,
    likes: 127,
    comments: 23,
    featured: true,
    tags: ["Constitutional Carry", "CCW", "State Laws", "Permits"]
  },
  {
    title: "Federal vs. State Gun Laws in Idaho",
    description: "Understanding the interaction between federal firearms regulations and Idaho state law, including areas where federal law takes precedence.",
    category: "Legal",
    difficulty: "Intermediate",
    readTime: "8 min",
    author: "Legal Team",
    lastUpdated: "2025-01-10",
    views: 1560,
    likes: 89,
    comments: 15,
    featured: false,
    tags: ["Federal Law", "State Law", "Compliance", "ATF"]
  },
  {
    title: "NFA Items in Idaho: Suppressors, SBRs, and More",
    description: "Complete guide to owning NFA regulated items in Idaho, including the application process, wait times, and legal considerations.",
    category: "Legal",
    difficulty: "Advanced",
    readTime: "15 min",
    author: "Legal Team",
    lastUpdated: "2024-12-20",
    views: 980,
    likes: 67,
    comments: 31,
    featured: true,
    tags: ["NFA", "Suppressors", "SBR", "ATF Forms"]
  },

  // Buying Guides
  {
    title: "First-Time Gun Buyer's Guide: Idaho Edition",
    description: "Step-by-step guide for purchasing your first firearm in Idaho, covering background checks, FFL dealers, and what to expect at the gun store.",
    category: "Buying Guide",
    difficulty: "Beginner",
    readTime: "10 min",
    author: "Education Team",
    lastUpdated: "2025-01-08",
    views: 3200,
    likes: 245,
    comments: 18,
    featured: true,
    tags: ["First Time Buyer", "Background Check", "FFL", "Gun Store"]
  },
  {
    title: "Choosing Your First Concealed Carry Pistol",
    description: "Factors to consider when selecting a concealed carry handgun, including size, caliber, reliability, and Idaho-specific considerations.",
    category: "Buying Guide",  
    difficulty: "Beginner",
    readTime: "14 min",
    author: "Training Team",
    lastUpdated: "2024-12-15",
    views: 2100,
    likes: 178,
    comments: 42,
    featured: false,
    tags: ["Concealed Carry", "Pistol Selection", "CCW", "Self Defense"]
  },
  {
    title: "Home Defense Firearms: Shotgun vs. Rifle vs. Handgun",
    description: "Comparing different firearm types for home defense, with pros and cons of each option for Idaho homeowners.",
    category: "Buying Guide",
    difficulty: "Intermediate",
    readTime: "11 min",
    author: "Training Team",
    lastUpdated: "2024-11-28",
    views: 1890,
    likes: 134,
    comments: 28,
    featured: false,
    tags: ["Home Defense", "Shotgun", "Rifle", "Handgun"]
  },

  // Safety & Training
  {
    title: "Firearm Safety: The Four Fundamental Rules",
    description: "Essential firearm safety rules that every gun owner must know and practice, with practical examples and real-world applications.",
    category: "Safety",
    difficulty: "Beginner",
    readTime: "6 min",
    author: "Safety Team",
    lastUpdated: "2025-01-12",
    views: 4100,
    likes: 312,
    comments: 8,
    featured: true,
    tags: ["Safety Rules", "Gun Safety", "Fundamentals", "Training"]
  },
  {
    title: "Safe Storage: Protecting Your Family and Firearms",
    description: "Best practices for firearm storage in the home, including safes, locks, and balancing security with accessibility.",
    category: "Safety",
    difficulty: "Beginner",
    readTime: "9 min",
    author: "Safety Team",
    lastUpdated: "2024-12-30",
    views: 1670,
    likes: 98,
    comments: 19,
    featured: false,
    tags: ["Gun Safe", "Storage", "Child Safety", "Security"]
  },
  {
    title: "Range Etiquette and Safety Protocols",
    description: "Proper behavior and safety procedures at shooting ranges, including commands, lane safety, and working with range officers.",
    category: "Safety",
    difficulty: "Beginner",
    readTime: "7 min",
    author: "Training Team",
    lastUpdated: "2024-12-22",
    views: 1340,
    likes: 76,
    comments: 12,
    featured: false,
    tags: ["Range Safety", "Etiquette", "Shooting Range", "Protocols"]
  },

  // Maintenance & Gunsmithing
  {
    title: "Basic Firearm Cleaning and Maintenance",
    description: "Essential cleaning procedures and maintenance schedules to keep your firearms in optimal condition and ensure reliable operation.",
    category: "Maintenance",
    difficulty: "Beginner",
    readTime: "13 min",
    author: "Technical Team",
    lastUpdated: "2024-12-18",
    views: 2200,
    likes: 156,
    comments: 34,
    featured: false,
    tags: ["Cleaning", "Maintenance", "Gun Care", "Reliability"]
  },
  {
    title: "When to See a Gunsmith: DIY vs. Professional",
    description: "Understanding which firearm issues you can handle yourself and when professional gunsmith services are necessary.",
    category: "Maintenance",
    difficulty: "Intermediate",
    readTime: "10 min",
    author: "Technical Team",
    lastUpdated: "2024-11-15",
    views: 980,
    likes: 67,
    comments: 21,
    featured: false,
    tags: ["Gunsmith", "DIY", "Repairs", "Maintenance"]
  },

  // Training & Skills
  {
    title: "Fundamentals of Marksmanship",
    description: "Core shooting principles including stance, grip, sight alignment, and trigger control for improved accuracy.",
    category: "Training",
    difficulty: "Beginner",
    readTime: "16 min",
    author: "Training Team",
    lastUpdated: "2024-12-05",
    views: 1780,
    likes: 123,
    comments: 26,
    featured: false,
    tags: ["Marksmanship", "Shooting Skills", "Accuracy", "Fundamentals"]
  },
  {
    title: "Dry Fire Practice: Training at Home Safely",
    description: "How to practice shooting skills at home using dry fire techniques, including safety protocols and training drills.",
    category: "Training",
    difficulty: "Intermediate",
    readTime: "12 min", 
    author: "Training Team",
    lastUpdated: "2024-11-08",
    views: 1450,
    likes: 98,
    comments: 17,
    featured: false,
    tags: ["Dry Fire", "Home Training", "Practice", "Skills"]
  }
]

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

const categories = [
  { label: "All Articles", value: "all", icon: <BookOpen className="h-4 w-4" />, count: knowledgeBaseArticles.length },
  { label: "Legal", value: "Legal", icon: <Scale className="h-4 w-4" />, count: knowledgeBaseArticles.filter(a => a.category === "Legal").length },
  { label: "Buying Guides", value: "Buying Guide", icon: <Target className="h-4 w-4" />, count: knowledgeBaseArticles.filter(a => a.category === "Buying Guide").length },
  { label: "Safety", value: "Safety", icon: <Shield className="h-4 w-4" />, count: knowledgeBaseArticles.filter(a => a.category === "Safety").length },
  { label: "Training", value: "Training", icon: <GraduationCap className="h-4 w-4" />, count: knowledgeBaseArticles.filter(a => a.category === "Training").length },
  { label: "Maintenance", value: "Maintenance", icon: <Wrench className="h-4 w-4" />, count: knowledgeBaseArticles.filter(a => a.category === "Maintenance").length }
]

const difficultyLevels = [
  { label: "All Levels", value: "all", count: knowledgeBaseArticles.length },
  { label: "Beginner", value: "Beginner", count: knowledgeBaseArticles.filter(a => a.difficulty === "Beginner").length },
  { label: "Intermediate", value: "Intermediate", count: knowledgeBaseArticles.filter(a => a.difficulty === "Intermediate").length },
  { label: "Advanced", value: "Advanced", count: knowledgeBaseArticles.filter(a => a.difficulty === "Advanced").length }
]

function ArticleCard({ article }: { article: typeof knowledgeBaseArticles[0] }) {
  const categoryColors = {
    "Legal": "bg-scale-blue/20 text-scale-blue border-scale-blue/30",
    "Buying Guide": "bg-slate-blue/20 text-slate-blue border-slate-blue/30",
    "Safety": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30",
    "Training": "bg-sage-green/20 text-sage-green border-sage-green/30",
    "Maintenance": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30"
  }

  const difficultyColors = {
    "Beginner": "bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30",
    "Intermediate": "bg-slate-blue/20 text-slate-blue border-slate-blue/30", 
    "Advanced": "bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30"
  }

  return (
    <Card className={`group hover:shadow-elevated transition-all duration-300 ${
      article.featured ? 'ring-2 ring-page-primary/30 bg-page-primary/5' : ''
    }`}>
      <CardHeader className="pb-base">
        <div className="flex items-start justify-between gap-base mb-xs">
          <div className="flex gap-xs">
            <Badge className={categoryColors[article.category as keyof typeof categoryColors]}>
              {article.category}
            </Badge>
            <Badge className={difficultyColors[article.difficulty as keyof typeof difficultyColors]}>
              {article.difficulty}
            </Badge>
          </div>
          {article.featured && (
            <Badge className="bg-page-primary text-page-primary-foreground font-rajdhani font-bold">
              Featured
            </Badge>
          )}
        </div>
        
        <CardTitle className="font-rajdhani text-xl font-bold text-card-foreground group-hover:text-page-primary transition-colors duration-200 leading-tight">
          {article.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-base">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex flex-wrap gap-xs">
          {article.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {article.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{article.tags.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-base">
            <div className="flex items-center gap-xs">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-xs">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Calendar className="h-3 w-3" />
              <span>{new Date(article.lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-xs border-t border-border">
          <div className="flex items-center gap-base text-xs text-muted-foreground">
            <div className="flex items-center gap-xs">
              <Eye className="h-3 w-3" />
              <span>{article.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-xs">
              <Star className="h-3 w-3" />
              <span>{article.likes}</span>
            </div>
            <div className="flex items-center gap-xs">
              <MessageSquare className="h-3 w-3" />
              <span>{article.comments}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="text-page-primary hover:text-page-accent">
            Read Article
            <ArrowRight className="h-3 w-3 ml-xs" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ArmoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all") 
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredArticles = knowledgeBaseArticles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || article.difficulty === selectedDifficulty
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesDifficulty && matchesSearch
  })

  // Sort by featured first, then by views
  const sortedArticles = filteredArticles.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.views - a.views
  })

  return (
    <div className="theme-armory min-h-screen bg-background">
      <SiteNavigation variant="premium" sticky={true} />
      {/* Breadcrumb Hero - Left Aligned */}
      <section className="bg-page-gradient border-b border-border/20">
        <div className="container mx-auto max-w-site px-md py-3xl">
          <div className="flex items-center gap-xs text-sm text-peachy-white/80 mb-base">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-page-primary font-medium">Armory</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-center">
            <div className="lg:col-span-2 space-y-base">
              <Badge className="bg-page-primary/20 text-page-primary border-page-primary/30 w-fit">
                <BookOpen className="h-4 w-4 mr-xs" />
                Knowledge Base
              </Badge>
              <h1 className="font-rajdhani text-4xl md:text-5xl font-bold text-peachy-white leading-tight">
                The Armory
              </h1>
              <p className="text-body-lg text-peachy-white/80 max-w-2xl">
                Comprehensive firearms knowledge base covering Idaho gun laws, safety practices, buying advice, and training resources for the Treasure Valley community.
              </p>
              <div className="flex gap-base">
                <Button 
                  variant="solid-accent"
                  size="lg" 
                  animationType="arrow"
                  className="font-rajdhani font-bold"
                >
                  <Plus className="h-4 w-4 mr-xs" />
                  Suggest Article
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  animationType="chevron"
                  animationState="right"
                  className="border-page-primary/30 text-page-primary hover:bg-page-primary hover:text-page-primary-foreground"
                >
                  View Categories
                </Button>
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

      {/* Stats Section */}
      <section className="py-4xl bg-muted/50">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            <StatCard
              title="Total Articles"
              value={knowledgeBaseArticles.length.toString()}
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

      {/* Search and Filter Section */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="space-y-xl">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-base">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, or keywords..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-xs">
                <Button variant="outline" className="gap-xs">
                  <Filter className="h-4 w-4" />
                  Advanced Search
                </Button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-lg font-bold text-card-foreground">
                Browse by Category
              </h3>
              <div className="flex flex-wrap gap-xs">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className={selectedCategory === category.value ? 
                      "bg-page-primary text-page-primary-foreground hover:bg-page-accent" : 
                      "border-page-primary/30 text-page-primary hover:bg-page-primary hover:text-page-primary-foreground"
                    }
                  >
                    {category.icon}
                    <span className="ml-xs">{category.label}</span>
                    <Badge variant="secondary" className="ml-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div className="space-y-base">
              <h3 className="font-rajdhani text-lg font-bold text-card-foreground">
                Filter by Difficulty Level
              </h3>
              <div className="flex flex-wrap gap-xs">
                {difficultyLevels.map((level) => (
                  <Button
                    key={level.value}
                    variant={selectedDifficulty === level.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(level.value)}
                    className={selectedDifficulty === level.value ? 
                      "bg-page-primary text-page-primary-foreground hover:bg-page-accent" : 
                      "border-page-primary/30 text-page-primary hover:bg-page-primary hover:text-page-primary-foreground"
                    }
                  >
                    {level.label}
                    <Badge variant="secondary" className="ml-xs">
                      {level.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-6xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="space-y-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
                {selectedCategory === "all" ? "All Articles" : categories.find(c => c.value === selectedCategory)?.label}
              </h2>
              <div className="text-muted-foreground">
                {sortedArticles.length} {sortedArticles.length === 1 ? 'article' : 'articles'} found
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
              {sortedArticles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>

            {sortedArticles.length === 0 && (
              <div className="text-center py-6xl">
                <div className="space-y-base">
                  <div className="text-6xl">📚</div>
                  <h3 className="font-rajdhani text-2xl font-bold text-card-foreground">
                    No articles found
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Try adjusting your search criteria or browse all articles to discover helpful guides and resources.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedDifficulty("all")
                      setSearchQuery("")
                    }}
                    className="bg-page-primary text-page-primary-foreground hover:bg-page-accent"
                  >
                    Show All Articles
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-6xl bg-page-gradient">
        <div className="container mx-auto max-w-4xl px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-page-primary/20 text-page-primary border-page-primary/30">
              <BookOpen className="h-4 w-4 mr-xs" />
              Stay Updated
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-peachy-white">
              Never Miss an <span className="text-page-primary">Update</span>
            </h2>
            <p className="text-body-lg text-peachy-white/80 max-w-2xl mx-auto">
              Get notified when we publish new articles, legal updates, and important information for Idaho firearms owners. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-base justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-page-primary/30 text-peachy-white placeholder:text-peachy-white/60"
              />
              <Button 
                size="lg" 
                className="bg-page-gradient text-page-primary-foreground hover:opacity-90 font-rajdhani font-bold"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-peachy-white/60">
              Join 2,800+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <AccessibilityFAB />
    </div>
  )
}