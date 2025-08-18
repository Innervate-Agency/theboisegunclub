import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CardPageLayout } from '@/components/ui/card-page-layout'
import { TrustIndicators } from '@/components/ui/trust-indicators'
import { ContributionCTA } from '@/components/ui/contribution-cta'
import { DirectoryStatsGrid } from '@/components/ui/directory-stats-grid'
import { ActivityFeedCard } from '@/components/ui/activity-feed-card'
import { BlogList } from '@/components/ui/blog-article'
import { contentService } from '@/lib/content-service'
import { 
  BookOpen, Shield, Target, Star, Plus, ArrowRight, 
  CaretRight, Eye, FileText, Scales, Heart, Trophy,
  Clock, Users, TrendUp, Info, CheckCircle
} from '@phosphor-icons/react'

// Server component for guides page
export async function GuidesPageStandardized() {
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
    featured: article.featured,
    slug: article.slug,
    sectionPath: "/guides"
  }))

  // Activity feed data for guides
  const guidesActivityFeedData = [
    {
      icon: BookOpen,
      iconColor: "text-nav-guides",
      iconBgColor: "bg-nav-guides/20",
      title: "New Guide Published",
      description: "Idaho Constitutional Carry: Complete Legal Guide",
      timeAgo: "2h ago"
    },
    {
      icon: CheckCircle,
      iconColor: "text-sagebrush-green",
      iconBgColor: "bg-sagebrush-green/20",
      title: "Guide Updated",
      description: "CCW Reciprocity Map refreshed for 2025",
      timeAgo: "4h ago"
    },
    {
      icon: Users,
      iconColor: "text-rusty-orange",
      iconBgColor: "bg-rusty-orange/20",
      title: "Community Contribution",
      description: "New safety checklist added by certified instructor",
      timeAgo: "6h ago"
    }
  ]

  // Guides category stats
  const guidesCategoryStats = [
    { icon: Scales, title: "Legal Guides", value: stats.totalArticles.toString(), subtitle: "Idaho laws", color: "text-nav-guides" },
    { icon: Shield, title: "Safety Guides", value: stats.categories.find(c => c.name === 'Safety')?.count.toString() || '0', subtitle: "Best practices", color: "text-nav-guides" },
    { icon: Target, title: "Training Guides", value: stats.categories.find(c => c.name === 'Training')?.count.toString() || '0', subtitle: "Skill development", color: "text-nav-guides" },
    { icon: Trophy, title: "Competition Guides", value: stats.categories.find(c => c.name === 'Competition')?.count.toString() || '0', subtitle: "Match prep", color: "text-nav-guides" },
    { icon: Eye, title: "Monthly Views", value: `${Math.round(stats.totalViews / 1000)}K`, subtitle: "Active readers", color: "text-nav-guides" },
    { icon: Heart, title: "Community Likes", value: stats.totalLikes.toString(), subtitle: "Engagement", color: "text-nav-guides" }
  ]

  // Hero content
  const heroContent = (
    <div className="relative">
      <div className="container mx-auto max-w-site relative z-10">
        <div className="hero-grid-layout">
          {/* Content - Left side */}
          <div className="lg:col-span-2 h-full flex flex-col justify-center space-y-lg py-md">
            <div className="flex items-center gap-base">
              <div className="bg-card/10 p-base rounded-xs border border-border">
                <BookOpen weight="bold" className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-base">
                <div className="flex items-center gap-xs text-sm text-white/60">
                  <span>Home</span>
                  <CaretRight className="h-4 w-4" />
                  <span className="text-white font-medium">Guides</span>
                </div>
                <div className="flex flex-wrap gap-xs">
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Scales weight="bold" className="h-4 w-4 mr-xs" />
                    Legal Resources
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Shield weight="bold" className="h-4 w-4 mr-xs" />
                    Safety Guides
                  </Badge>
                  <Badge className="bg-card/10 text-white border-border rounded-xs" hideIcon={true}>
                    <Target weight="bold" className="h-4 w-4 mr-xs" />
                    Training Tips
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-xs">
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-white leading-tight">
                Idaho Firearms Guides & Resources
              </h1>
              <h2 className="font-rajdhani text-lg md:text-xl font-medium text-white/80 leading-snug">
                Legal Information, Safety Protocols & Training Resources
              </h2>
            </div>
            
            <p className="text-body-lg text-white/70 max-w-2xl leading-relaxed">
              Comprehensive guides for Idaho gun owners. From legal requirements and safety protocols to training tips and competition preparation.
            </p>
            
            <div className="flex gap-base">
              <Button size="lg" className="bg-nav-guides text-white hover:bg-white hover:text-nav-guides font-rajdhani font-bold" animationType="plus-minus">
                <Plus className="h-4 w-4 mr-xs" />
                Submit Guide
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white hover:bg-card hover:text-nav-guides" animationType="arrow">
                Browse All Guides
              </Button>
            </div>
          </div>

          {/* Featured Guide Card - Right side */}
          <div className="lg:col-span-1 py-md min-h-[400px]">
            <div className="relative h-full">
              {blogArticles.find(a => a.featured) && (
                <Card className="mica shadow-present hover:shadow-elevated transition-all duration-300 h-full">
                  <CardHeader>
                    <Badge className="bg-nav-guides/20 text-nav-guides border-nav-guides/30 mb-sm">
                      <Star weight="fill" className="h-3 w-3 mr-xs" />
                      Featured Guide
                    </Badge>
                    <h3 className="font-rajdhani font-bold text-heading-sm text-card-foreground line-clamp-2">
                      {blogArticles.find(a => a.featured)?.title}
                    </h3>
                    <div className="flex items-center gap-sm text-body-xs text-muted-foreground">
                      <Clock weight="bold" className="h-3 w-3" />
                      <span>{blogArticles.find(a => a.featured)?.readTime} min read</span>
                      <Eye weight="bold" className="h-3 w-3" />
                      <span>{blogArticles.find(a => a.featured)?.views.toLocaleString()} views</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-sm text-muted-foreground line-clamp-3 mb-base">
                      {blogArticles.find(a => a.featured)?.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-xs mb-base">
                      {blogArticles.find(a => a.featured)?.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-nav-guides text-white hover:bg-nav-guides/90 font-rajdhani font-bold"
                      animationType="arrow"
                    >
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-nav-guides to-dark-chocolate text-white">
        {heroContent}
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-site px-4 sm:px-6 lg:px-8 py-xl">
        {/* Trust Indicators */}
        <TrustIndicators />
        
        {/* Stats Grid */}
        <div className="mt-4xl">
          <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">
            Guide Categories
          </h3>
          <DirectoryStatsGrid stats={guidesCategoryStats} />
        </div>

        {/* Articles Grid */}
        <div className="mt-4xl">
          <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">
            Latest Guides & Articles
          </h3>
          <BlogList 
            articles={blogArticles}
            viewMode="grid"
          />
        </div>

        {/* Activity Feed Section */}
        <div className="mt-4xl section-skew-up bg-card/50 py-3xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-rajdhani font-bold text-heading-xl text-card-foreground mb-xl text-center">
              Recent Updates
            </h3>
            <div className="space-y-base">
              {guidesActivityFeedData.map((activity, index) => (
                <ActivityFeedCard key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-4xl">
          <ContributionCTA />
        </div>

        {/* Submit Guide CTA */}
        <div className="mt-4xl section-skew-down bg-gradient-to-br from-nav-guides/10 to-nav-guides/5 py-3xl -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-base">
            <Badge className="bg-nav-guides/20 text-nav-guides border-nav-guides/30">
              <Info weight="bold" className="h-4 w-4 mr-xs" />
              Share Knowledge
            </Badge>
            <h3 className="font-rajdhani font-bold text-heading-lg text-card-foreground">
              Contribute to Our Guide Library
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have valuable insights about Idaho firearms laws, safety practices, or training techniques? 
              Share your expertise with the community.
            </p>
            <Button 
              className="bg-nav-guides text-white hover:bg-nav-guides/90 font-rajdhani font-bold"
              animationType="arrow"
            >
              <Plus className="h-4 w-4 mr-xs" />
              Submit Your Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}