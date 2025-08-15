'use client'

import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import MdxContent from '@/components/molecules/MdxContent'
import { 
  ChevronRight, Calendar, Clock, Eye, Heart, MessageCircle, 
  User, Share2, Bookmark, ArrowLeft, Tag
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleAuthor {
  name: string
  avatar?: string
  bio?: string
  title?: string
}

interface ArticlePageTemplateProps {
  title: string
  excerpt?: string
  content: string
  author: ArticleAuthor
  publishDate: string
  readTime: number
  views?: number
  likes?: number
  comments?: number
  tags?: string[]
  category: string
  featured?: boolean
  image?: string
  sectionName: string // "Armory", "Guides", etc.
  sectionPath: string // "/the-armory", "/guides", etc.
  sectionColor: string // "nav-armory", "nav-guides", etc.
  breadcrumbs?: Array<{ label: string; href: string }>
  relatedArticles?: Array<{
    id: string
    title: string
    excerpt: string
    readTime: number
    category: string
  }>
}

export default function ArticlePageTemplate({
  title,
  excerpt,
  content,
  author,
  publishDate,
  readTime,
  views = 0,
  likes = 0,
  comments = 0,
  tags = [],
  category,
  featured = false,
  image,
  sectionName,
  sectionPath,
  sectionColor,
  breadcrumbs,
  relatedArticles = []
}: ArticlePageTemplateProps) {
  return (
    <div className={`theme-${sectionName.toLowerCase()} min-h-screen`}>
      <SiteNavigation />
      
      {/* Article Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-card to-muted/50 px-md py-xl">
        <div className="container mx-auto max-w-site relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-xs text-sm text-muted-foreground mb-lg">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={sectionPath} className={`hover:text-${sectionColor} transition-colors`}>
              {sectionName}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className={`text-${sectionColor} font-medium`}>{title}</span>
          </div>
          
          {/* Back Button */}
          <div className="mb-lg">
            <Link href={sectionPath}>
              <Button variant="ghost" className="gap-xs">
                <ArrowLeft className="h-4 w-4" />
                Back to {sectionName}
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
            {/* Article Header - Left Side */}
            <div className="lg:col-span-2 space-y-lg">
              {/* Category and Featured Badge */}
              <div className="flex items-center gap-base">
                <Badge className={`bg-${sectionColor}/20 text-${sectionColor} border-${sectionColor}/30`}>
                  {category}
                </Badge>
                {featured && (
                  <Badge variant="outline" className="border-rusty-orange/50 text-rusty-orange">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Title */}
              <h1 className="font-rajdhani text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {title}
              </h1>
              
              {/* Excerpt */}
              {excerpt && (
                <p className="text-body-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {excerpt}
                </p>
              )}
              
              {/* Author and Meta */}
              <div className="flex flex-wrap items-center gap-base text-sm text-muted-foreground">
                <div className="flex items-center gap-xs">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{author.name}</span>
                  {author.title && <span>• {author.title}</span>}
                </div>
                <div className="flex items-center gap-xs">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Clock className="h-4 w-4" />
                  <span>{readTime} min read</span>
                </div>
                {views > 0 && (
                  <div className="flex items-center gap-xs">
                    <Eye className="h-4 w-4" />
                    <span>{views.toLocaleString()} views</span>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-base">
                <Button variant="outline" size="sm" className="gap-xs">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-xs">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
                {likes > 0 && (
                  <div className="flex items-center gap-xs text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{likes}</span>
                  </div>
                )}
                {comments > 0 && (
                  <div className="flex items-center gap-xs text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span>{comments}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Featured Image/Card - Right Side */}
            {image && (
              <div className="lg:col-span-1">
                <div className="relative overflow-hidden rounded-xs">
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${sectionColor}/20 to-transparent`}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="py-xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
            {/* Article Content */}
            <article className="lg:col-span-3">
              <div className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-rajdhani prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-body-base prose-p:leading-relaxed
                prose-a:text-rusty-orange prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-rusty-orange/30
                prose-blockquote:bg-muted/50 prose-blockquote:px-base prose-blockquote:py-sm
                prose-code:bg-muted prose-code:px-xs prose-code:py-micro prose-code:rounded-xs
                prose-table:border-collapse prose-th:border prose-th:border-border
                prose-td:border prose-td:border-border prose-th:bg-muted/50
                prose-th:px-base prose-th:py-sm prose-td:px-base prose-td:py-sm">
                <MdxContent source={content} />
              </div>
              
              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-xl pt-lg border-t border-border">
                  <div className="flex items-center gap-base flex-wrap">
                    <div className="flex items-center gap-xs text-sm font-medium text-muted-foreground">
                      <Tag className="h-4 w-4" />
                      Tags:
                    </div>
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-lg">
              {/* Author Card */}
              <Card className="shadow-present">
                <CardHeader>
                  <h3 className="font-rajdhani font-bold text-heading-sm">About the Author</h3>
                </CardHeader>
                <CardContent className="space-y-base">
                  <div className="flex items-center gap-base">
                    {author.avatar ? (
                      <Image
                        src={author.avatar}
                        alt={author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-body-sm">{author.name}</div>
                      {author.title && (
                        <div className="text-xs text-muted-foreground">{author.title}</div>
                      )}
                    </div>
                  </div>
                  {author.bio && (
                    <p className="text-body-sm text-muted-foreground">{author.bio}</p>
                  )}
                </CardContent>
              </Card>
              
              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card className="shadow-present">
                  <CardHeader>
                    <h3 className="font-rajdhani font-bold text-heading-sm">Related Articles</h3>
                  </CardHeader>
                  <CardContent className="space-y-base">
                    {relatedArticles.slice(0, 3).map((article) => (
                      <div key={article.id} className="space-y-xs">
                        <h4 className="text-body-sm font-medium leading-snug hover:text-rusty-orange transition-colors cursor-pointer">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-base text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-[10px] px-xs py-micro">
                            {article.category}
                          </Badge>
                          <span>{article.readTime} min</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </div>
      </main>
      
      <SiteFooter currentPage={sectionName.toLowerCase()} />
    </div>
  )
}