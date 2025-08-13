import React from 'react'
import { Badge } from '@/components/ui/badge'
import StatCard from '@/components/ui/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { EventTicker } from '@/components/ui/event-ticker'
import { BlogList } from '@/components/ui/blog-article'
import { contentService } from '@/lib/content-service'
import { 
  BookOpen, Shield, Target, Star, ChevronRight, Plus, Eye, User
} from 'lucide-react'

// Server component - fetches data on the server
export default async function GuidesPage() {
  // Fetch content using our abstraction layer
  const articles = await contentService.getArticles()
  const stats = await contentService.getContentStats()
  
  // Convert our Article type to BlogCard compatible format
  const blogArticles = articles.map(article => ({
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    image: article.image,
    author: article.author,
    publishDate: article.publishDate,
    readTime: article.readTime,
    views: article.views,
    likes: article.likes,
    comments: article.comments,
    tags: article.tags,
    category: article.category,
    featured: article.featured
  }))

  // Sample upcoming events for ticker
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
    }
  ]

  return (
    <div className="theme-guides min-h-screen">
      <SiteNavigation />
      
      {/* Guides Hero - Content Left, Card Right (Layout 3) */}
      <section className="relative overflow-hidden bg-gradient-guides-hero px-md py-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-gruvbox-bg-dark/20 via-transparent to-gruvbox-bg-dark/10 pointer-events-none"></div>
        <div className="container mx-auto max-w-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl items-stretch py-md min-h-[400px]">
            {/* Content - Left side */}
            <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
              {/* Top Header - Icon, Breadcrumbs & Badges Chunk */}
              <div className="flex items-center gap-base">
                <div className="bg-nav-guides/20 p-base rounded-sm border border-nav-guides/30">
                  <BookOpen className="h-8 w-8 text-nav-guides" />
                </div>
                <div className="space-y-base">
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-xs text-sm text-destructive-foreground/60">
                    <span>Home</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-nav-guides font-medium">Guides</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-xs">
                    <Badge className="bg-nav-guides/20 text-nav-guides border-nav-guides/30">
                      <BookOpen className="h-4 w-4 mr-xs" />
                      Legal Knowledge
                    </Badge>
                    <Badge className="bg-nav-guides/20 text-nav-guides border-nav-guides/30">
                      <Shield className="h-4 w-4 mr-xs" />
                      Safety Training
                    </Badge>
                    <Badge className="bg-nav-guides/20 text-nav-guides border-nav-guides/30">
                      <Target className="h-4 w-4 mr-xs" />
                      Buying Guides
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Titles - H1 & H2 Butt Buddies */}
              <div className="space-y-xs">
                <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-destructive-foreground leading-tight">
                  Idaho Firearms <span className="text-nav-guides">Knowledge Base</span>
                </h1>
                <h2 className="font-rajdhani text-lg md:text-xl font-medium text-destructive-foreground/80 leading-snug">
                  Expert Guides, Legal Resources & Safety Training
                </h2>
              </div>
              
              {/* Chunky Description */}
              <p className="text-body-lg text-destructive-foreground/70 max-w-2xl leading-relaxed">
                Comprehensive guides covering Idaho gun laws, safety practices, buying advice, and training resources. Everything you need to know about firearms ownership in the Treasure Valley, from constitutional carry regulations to first-time buyer guidance. Our expert-authored content helps you stay informed, safe, and compliant.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-base">
                <Badge 
                  className="bg-nav-guides text-gruvbox-bg-dark font-rajdhani font-bold px-base py-sm"
                >
                  <Plus className="h-4 w-4 mr-xs" />
                  Suggest Article
                </Badge>
                <Badge 
                  variant="outline" 
                  className="border-destructive-foreground/30 text-destructive-foreground hover:bg-nav-guides hover:text-gruvbox-bg-dark px-base py-sm"
                >
                  Subscribe to Updates
                </Badge>
              </div>
            </div>
            
            {/* Featured Guide Card - Right side */}
            <div className="lg:col-span-1 py-md min-h-[400px]">
              <div className="relative h-full">
                <Card className="mica border-nav-guides/30 hover:shadow-elevated transition-all duration-300 overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nav-guides/20 to-nav-guides/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-nav-guides to-nav-guides"></div>
                  
                  <CardHeader className="pb-xs relative z-10">
                    <div className="flex items-center justify-between mb-xs">
                      <Badge className="bg-nav-guides/20 text-nav-guides border-nav-guides/30 font-rajdhani font-bold text-[10px]">
                        <Shield className="h-3 w-3 mr-xs" />
                        FEATURED GUIDE
                      </Badge>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Eye className="h-3 w-3" />
                        <span>3.2k views</span>
                      </div>
                    </div>
                    
                    <div className="space-y-xs">
                      <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">Idaho Gun Laws 2025</h3>
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <User className="h-3 w-3 text-nav-guides" />
                        <span>Legal Expert • 12 min read</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-base relative z-10">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      Complete guide to Idaho's firearms laws including constitutional carry, concealed carry permits, and recent legislative updates for 2025.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-xs text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-nav-guides text-nav-guides" />
                        <span>Expert Verified</span>
                      </div>
                      <Badge 
                        className="bg-gradient-to-r from-nav-guides to-nav-guides text-gruvbox-bg-dark font-rajdhani font-bold text-xs px-sm py-xs"
                      >
                        READ NOW
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
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
              title="Total Guides"
              value={stats.totalArticles.toString()}
              label="Expert Articles"
              trend="up"
              trendValue="12%"
            />
            <StatCard
              title="Monthly Readers"
              value="24.1K"
              label="Active Users"
              variant="default"
              trend="up"
              trendValue="18%"
            />
            <StatCard
              title="Expert Authors"
              value={stats.totalAuthors.toString()}
              label="Contributors"
              variant="default"
              trend="up"
              trendValue="25%"
            />
            <StatCard
              title="Avg Rating"
              value={stats.avgRating.toString()}
              label="User Score"
              variant="default"
              trend="up"
              trendValue="95%"
            />
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <BlogList 
        articles={blogArticles}
        variant="grid"
        showFilters={true}
        title="Expert Guides & Resources"
        subtitle="Idaho Firearms Knowledge"
        className="pb-6xl"
      />

      {/* Newsletter CTA */}
      <section className="py-6xl bg-page-gradient">
        <div className="container mx-auto max-w-site px-md text-center">
          <div className="space-y-lg">
            <Badge className="bg-page-primary/20 text-page-primary border-page-primary/30">
              <BookOpen className="h-4 w-4 mr-xs" />
              Stay Informed
            </Badge>
            <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-crisp-off-white">
              Never Miss an <span className="text-page-primary">Update</span>
            </h2>
            <p className="text-body-lg text-crisp-off-white/80 max-w-2xl mx-auto">
              Get notified when we publish new guides, legal updates, and important information for Idaho firearms owners. No spam, just valuable content.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}