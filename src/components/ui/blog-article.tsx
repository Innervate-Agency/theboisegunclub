"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CalendarDaysIcon, CategoryIcon, ClockIcon, EyeIcon, FunnelIcon, ListBulletIcon, ShareIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';

interface BlogAuthor {
  name: string
  avatar?: string
  bio?: string
  title?: string
}

interface BlogArticle {
  id: string
  title: string
  excerpt: string
  content?: string
  image?: string
  author: BlogAuthor
  publishDate: string
  readTime: number
  views?: number
  likes?: number
  comments?: number
  tags?: string[]
  category: string
  featured?: boolean
  slug?: string
  href?: string
  sectionPath?: string
}

const blogCardVariants = cva(
  "group bg-card rounded-none border border-border overflow-hidden shadow-present hover:shadow-elevated transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "flex flex-col",
        compact: "flex flex-row gap-base",
        featured: "flex flex-col ring-2 ring-rusty-orange/30 bg-rusty-orange/5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface BlogCardProps 
  extends React.ComponentProps<"article">,
    VariantProps<typeof blogCardVariants> {
  article: BlogArticle
  showStats?: boolean
  showAuthor?: boolean
  showImage?: boolean
  onLike?: (articleId: string) => void
  onShare?: (article: BlogArticle) => void
  onBookmark?: (articleId: string) => void
}

export function BlogCard({
  className,
  article,
  variant,
  showStats = true,
  showAuthor = true,
  showImage = true,
  onLike,
  onShare,
  onBookmark,
  ...props
}: BlogCardProps) {
  const [isLiked, setIsLiked] = React.useState(false)
  const [isBookmarked, setIsBookmarked] = React.useState(false)
  
  // Generate href for article linking
  const sectionPath = article.sectionPath || "/armory"
  const slug = article.slug || article.id
  const articleHref = article.href || `${sectionPath}/${slug}`
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
    onLike?.(article.id)
  }
  
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
    onBookmark?.(article.id)
  }
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onShare?.(article)
  }
  
  const imageSize = variant === "compact" ? "w-32 h-24" : "aspect-video"
  
  // Get category-specific gradient for hero section
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'Legal': return 'card-gradient-legal'
      case 'Reviews': return 'card-gradient-reviews'
      case 'Gear': return 'card-gradient-gear'
      case 'Training': return 'card-gradient-training'
      case 'Safety': return 'card-gradient-safety'
      default: return 'card-gradient-armory'
    }
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    const iconClass = "size-8 text-white/80 relative z-10"
    switch (category) {
      case 'Legal': return <TagIcon className={iconClass} />
      case 'Reviews': return <EyeIcon className={iconClass} />
      case 'Gear': return <Grid3X3 className={iconClass} />
      case 'Training': return <UserIcon className={iconClass} />
      case 'Safety': return <FunnelIcon className={iconClass} />
      default: return <MessageCircle className={iconClass} />
    }
  }

  return (
    <Link href={articleHref} className="block">
      <article 
        className={cn(
          "transition-all duration-300 group relative overflow-hidden cursor-pointer rounded-xs",
          "bg-card text-card-foreground border border-border",
          "shadow-ghost hover:shadow-present",
          "tactical-underline-base tactical-underline-armory",
          className
        )} 
        {...props}
      >
      
      {/* Tactical Hero Section - Matching EventCard */}
      <div className={cn(
        "relative mb-lg -m-lg mt-[-24px] mx-[-24px] h-32 overflow-hidden border-b border-white/10",
        getCategoryGradient(article.category)
      )}>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Tactical Action Buttons - top right */}
        <div className="absolute top-sm right-sm flex gap-xs">
          <button
            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-armory hover:border-nav-armory transition-all duration-200"
            onClick={handleShare}
            title="Share article"
          >
            <ShareIcon className="h-4 w-4 text-white" />
          </button>
          
          <button
            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-none flex items-center justify-center hover:bg-nav-armory hover:border-nav-armory transition-all duration-200"
            onClick={handleBookmark}
            title="Bookmark article"
          >
            <Bookmark className={cn("h-4 w-4 text-white", isBookmarked && "fill-current")} />
          </button>
        </div>
        
        {/* Author/Date badge overlay */}
        <div className="absolute top-sm left-sm">
          <div className="bg-black/40 backdrop-blur-sm rounded-xs p-sm border border-white/20">
            <div className="text-center">
              <div className="font-rajdhani font-bold text-xs text-white uppercase tracking-wide">
                {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short' })}
              </div>
              <div className="font-rajdhani font-black text-lg text-white leading-none">
                {new Date(article.publishDate).getDate()}
              </div>
              <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
                {article.readTime}min
              </div>
            </div>
          </div>
        </div>
        
        {/* Category icon */}
        <div className="absolute bottom-xs right-xs">
          {getCategoryIcon(article.category)}
        </div>
        
        {/* Subtle texture particles */}
        <div className="absolute top-2 right-6 w-0.5 h-0.5 bg-card/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-8 w-0.5 h-0.5 bg-card/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 right-12 w-0.5 h-0.5 bg-card/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="space-y-md">
        {/* Header - Matching EventCard Typography */}
        <div className="space-y-sm">
          <div className="space-y-0">
            <h2 className="font-rajdhani font-bold text-xl text-card-foreground leading-tight line-clamp-2 group-hover:text-nav-armory transition-colors duration-200">
              {article.title}
            </h2>
            <h3 className="font-noto-serif text-base text-muted-foreground leading-tight">
              {article.category} • {article.author.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Smart Badges - Tags and Featured */}
        <div className="flex flex-wrap gap-xs">
          {article.featured && (
            <Badge variant="default" size="sm">
              <TagIcon className="w-3 h-3 mr-xs" />
              Featured
            </Badge>
          )}
          {article.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Info Grid - Matching EventCard */}
        <div className="space-y-sm bg-muted/30 p-sm rounded-xs">
          <div className="flex items-center gap-sm text-sm">
            <CalendarDaysIcon className="size-4 flex-shrink-0 text-nav-armory" />
            <span className="font-medium text-card-foreground">{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-sm text-sm">
            <ClockIcon className="size-4 flex-shrink-0 text-nav-armory" />
            <span className="text-muted-foreground">{article.readTime} min read</span>
          </div>
          <div className="flex items-center gap-sm text-sm">
            <UserIcon className="size-4 flex-shrink-0 text-nav-armory" />
            <span className="text-muted-foreground">{article.author.name}</span>
          </div>
          {showStats && (article.views || article.likes) && (
            <div className="flex items-center gap-sm text-sm">
              <EyeIcon className="size-4 flex-shrink-0 text-nav-armory" />
              <span className="text-muted-foreground">
                {article.views || 0} views {article.likes && `• ${article.likes} likes`}
              </span>
            </div>
          )}
        </div>

        {/* CTA Button - Matching EventCard */}
        <div className="pt-sm">
          <Button 
            size="sm"
            variant="outline"
            className="w-full border-nav-armory/30 text-nav-armory group-hover:bg-nav-armory group-hover:text-white group-hover:border-nav-armory transition-all duration-300 font-rajdhani font-bold" 
            animationType="arrow"
          >
            Read Article
          </Button>
        </div>
      </div>
      </article>
    </Link>
  )
}

// Blog List Component
export interface BlogListProps extends React.ComponentProps<"section"> {
  articles: BlogArticle[]
  variant?: "grid" | "list"
  showFilters?: boolean
  title?: string
  subtitle?: string
  viewMode?: string // Accept but don't pass to DOM (deprecated - use variant instead)
}

export function BlogList({
  className,
  articles,
  variant = "grid",
  showFilters = true,
  title,
  subtitle,
  viewMode: externalViewMode, // Destructure to prevent passing to DOM
  ...props
}: BlogListProps) {
  const [activeFilter, setActiveFilter] = React.useState<string>('all')
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>(variant)
  
  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = articles.map(article => article.category)
    return ['all', ...Array.from(new Set(cats))]
  }, [articles])
  
  // Filter articles
  const filteredArticles = React.useMemo(() => {
    if (activeFilter === 'all') return articles
    return articles.filter(article => article.category === activeFilter)
  }, [articles, activeFilter])
  
  return (
    <section className={cn("w-full py-xl", className)} {...props}>
      <div className="max-w-site mx-auto px-md">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-lg">
            {subtitle && (
              <p className="text-body-sm font-rajdhani font-semibold text-rusty-orange mb-xs tracking-wide uppercase">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-heading-lg md:text-heading-xl font-rajdhani font-bold text-card-foreground mb-base">
                {title}
              </h2>
            )}
          </div>
        )}
        
        {/* Filters & Controls */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-base mb-lg">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-xs">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "font-rajdhani font-semibold capitalize",
                    activeFilter === category 
                      ? "bg-rusty-orange text-primary-foreground" 
                      : "border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-primary-foreground"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-xs">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'secondary'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="icon-sm" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'secondary'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <ListBulletIcon className="icon-sm" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Articles Grid/List */}
        <div className={cn(
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md"
            : "flex flex-col gap-base"
        )}>
          {filteredArticles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              variant={viewMode === 'list' ? 'compact' : article.featured ? 'featured' : 'default'}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-xl">
            <FunnelIcon className="icon-2xl text-muted-foreground mx-auto mb-base" />
            <h3 className="text-body-lg font-rajdhani font-bold text-card-foreground mb-xs">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more content.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

// Blog Detail Component
export interface BlogDetailProps extends React.ComponentProps<"article"> {
  article: BlogArticle
  relatedArticles?: BlogArticle[]
  showSidebar?: boolean
}

export function BlogDetail({
  className,
  article,
  relatedArticles = [],
  showSidebar = true,
  ...props
}: BlogDetailProps) {
  return (
    <article className={cn("w-full py-xl", className)} {...props}>
      <div className="max-w-site mx-auto px-md">
        <div className={cn(
          "grid gap-lg",
          showSidebar ? "lg:grid-cols-3" : "lg:grid-cols-1 max-w-site mx-auto"
        )}>
          {/* Main Content */}
          <div className={cn(showSidebar ? "lg:col-span-2" : "")}>
            {/* Header */}
            <div className="space-y-md mb-lg">
              {/* Category & Meta */}
              <div className="flex items-center gap-base">
                <Badge variant="outline" className="font-rajdhani font-bold">
                  {article.category}
                </Badge>
                <div className="flex items-center gap-base text-body-sm text-muted-foreground">
                  <div className="flex items-center gap-xs">
                    <CalendarDaysIcon className="icon-xs" />
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-xs">
                    <ClockIcon className="icon-xs" />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-heading-xl md:text-display-sm font-rajdhani font-bold text-card-foreground leading-tight">
                {article.title}
              </h1>
              
              {/* Author */}
              <div className="flex items-center gap-base py-base border-y border-border">
                <div className="flex items-center gap-sm">
                  {article.author.avatar ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-pill bg-rusty-orange/20 flex items-center justify-center">
                      <UserIcon className="icon-lg text-rusty-orange" />
                    </div>
                  )}
                  <div>
                    <div className="font-rajdhani font-bold text-body-lg text-card-foreground">
                      {article.author.name}
                    </div>
                    {article.author.title && (
                      <div className="text-body-sm text-muted-foreground">{article.author.title}</div>
                    )}
                    {article.author.bio && (
                      <div className="text-caption text-muted-foreground mt-xs">{article.author.bio}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            {article.image && (
              <div className="relative aspect-video rounded-sm overflow-hidden mb-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            )}
            
            {/* Content */}
            <div className="prose prose-lg max-w-none font-noto-sans">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p>{article.excerpt}</p>
              )}
            </div>
            
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-xs pt-lg border-t border-border mt-lg">
                <TagIcon className="icon-sm text-muted-foreground mr-xs" />
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          {showSidebar && (
            <div className="space-y-lg">
              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="text-heading-sm font-rajdhani font-bold text-card-foreground mb-base">
                    Related Articles
                  </h3>
                  <div className="space-y-base">
                    {relatedArticles.slice(0, 3).map((relatedArticle) => (
                      <div key={relatedArticle.id} className="group cursor-pointer">
                        <div className="flex gap-sm">
                          {relatedArticle.image && (
                            <div className="w-16 h-16 rounded-sm overflow-hidden bg-muted flex-shrink-0">
                              <Image
                                src={relatedArticle.image}
                                alt={relatedArticle.title}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-rajdhani font-semibold text-body-sm text-card-foreground group-hover:text-rusty-orange transition-colors duration-200 line-clamp-tiny">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-caption text-muted-foreground mt-xs">
                              {new Date(relatedArticle.publishDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
