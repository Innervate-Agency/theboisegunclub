"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  Calendar, Clock, Eye, Heart, MessageCircle, User, Tag,
  Filter, Grid3X3, List, Share2, Bookmark} from 'lucide-react'

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
  
  return (
    <article className={cn(blogCardVariants({ variant }), className)} {...props}>
      {/* Featured Badge */}
      {article.featured && variant === "featured" && (
        <div className="absolute top-sm left-4 z-10">
          <Badge variant="elite" className="font-rajdhani font-bold">
            Featured
          </Badge>
        </div>
      )}
      
      {/* Image */}
      {showImage && article.image && (
        <div className={cn(
          "relative overflow-hidden bg-muted",
          imageSize,
          variant === "compact" && "flex-shrink-0"
        )}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={variant === "compact" ? "128px" : "(max-width: 768px) 100vw, 50vw"}
          />
          
          {/* Category Badge */}
          <div className="absolute top-xs right-3">
            <Badge variant="default" className="bg-card/90 text-card-foreground text-caption">
              {article.category}
            </Badge>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="flex-1 p-md">
        <div className="space-y-sm">
          {/* Title */}
          <h3 className={cn(
            "font-rajdhani font-bold text-card-foreground group-hover:text-rusty-orange transition-colors duration-200 line-clamp-tiny",
            variant === "featured" ? "text-heading-sm" : "text-body-lg"
          )}>
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-body-sm text-muted-foreground font-noto-sans line-clamp-xs leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-xs">
              {article.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-caption">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          {/* Meta Info */}
          <div className="flex items-center justify-between pt-xs">
            {/* Author & Date */}
            <div className="flex items-center gap-sm">
              {showAuthor && (
                <div className="flex items-center gap-xs">
                  {article.author.avatar ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-pill bg-rusty-orange/20 flex items-center justify-center">
                      <User className="icon-xs text-rusty-orange" />
                    </div>
                  )}
                  <div className="text-caption text-muted-foreground">
                    <div className="font-semibold">{article.author.name}</div>
                    {article.author.title && (
                      <div className="text-caption text-muted-foreground/75">{article.author.title}</div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="text-caption text-muted-foreground flex items-center gap-sm">
                <div className="flex items-center gap-xs">
                  <Calendar className="icon-xs" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Clock className="icon-xs" />
                  <span>{article.readTime} min</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-xs">
              <Button
                variant="micro"
                size="sm"
                onClick={handleLike}
                className={cn(
                  "h-8 px-xs text-caption",
                  isLiked && "text-safety-red bg-safety-red/10"
                )}
              >
                <Heart className={cn("icon-xs mr-xs", isLiked && "fill-current")} />
                {showStats && article.likes && <span>{article.likes}</span>}
              </Button>
              
              <Button
                variant="micro"
                size="sm"
                onClick={handleBookmark}
                className={cn(
                  "h-8 px-xs text-caption",
                  isBookmarked && "text-rusty-orange bg-rusty-orange/10"
                )}
              >
                <Bookmark className={cn("icon-xs", isBookmarked && "fill-current")} />
              </Button>
              
              <Button
                variant="micro"
                size="sm"
                onClick={handleShare}
                className="h-8 px-xs text-caption"
              >
                <Share2 className="icon-xs" />
              </Button>
            </div>
          </div>
          
          {/* Stats Row */}
          {showStats && (article.views || article.comments) && (
            <div className="flex items-center gap-base pt-xs text-caption text-muted-foreground border-t border-border">
              {article.views && (
                <div className="flex items-center gap-xs">
                  <Eye className="icon-xs" />
                  <span>{article.views.toLocaleString()} views</span>
                </div>
              )}
              {article.comments && (
                <div className="flex items-center gap-xs">
                  <MessageCircle className="icon-xs" />
                  <span>{article.comments} comments</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

// Blog List Component
export interface BlogListProps extends React.ComponentProps<"section"> {
  articles: BlogArticle[]
  variant?: "grid" | "list"
  showFilters?: boolean
  title?: string
  subtitle?: string
}

export function BlogList({
  className,
  articles,
  variant = "grid",
  showFilters = true,
  title,
  subtitle,
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
                <List className="icon-sm" />
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
            <Filter className="icon-2xl text-muted-foreground mx-auto mb-base" />
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
                <Badge variant="premium" className="font-rajdhani font-bold">
                  {article.category}
                </Badge>
                <div className="flex items-center gap-base text-body-sm text-muted-foreground">
                  <div className="flex items-center gap-xs">
                    <Calendar className="icon-xs" />
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-xs">
                    <Clock className="icon-xs" />
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
                      <User className="icon-lg text-rusty-orange" />
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
                <Tag className="icon-sm text-muted-foreground mr-xs" />
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
