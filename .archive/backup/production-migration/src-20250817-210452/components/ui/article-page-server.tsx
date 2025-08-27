import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import MdxContent from '@/components/molecules/MdxContent'
import { ArticleHeroClient } from './article-hero-client'
import { ArticleSidebarClient } from './article-sidebar-client'
import { 
  ChevronRight, Calendar, Clock, Eye, Heart, MessageCircle, 
  User, Share2, Bookmark, ArrowLeft, Tag, BookOpen, MoreHorizontal
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
  sectionPath: string // "/armory", "/guides", etc.
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

  // Sidebar content as props to pass to client component
  const sidebarData = {
    readTime,
    views,
    publishDate,
    author,
    likes,
    relatedArticles: relatedArticles.slice(0, 3)
  }

  return (
    <div className={`theme-${sectionName.toLowerCase()} min-h-screen`}>
      <SiteNavigation />
      
      {/* Server-side rendered hero with client interactivity */}
      <ArticleHeroClient
        title={title}
        excerpt={excerpt}
        category={category}
        featured={featured}
        image={image}
        sectionName={sectionName}
        sectionPath={sectionPath}
        sectionColor={sectionColor}
        author={author}
        publishDate={publishDate}
        readTime={readTime}
        views={views}
        tags={tags}
      />

      {/* Main Content Container - 1440px max width */}
      <div className="container mx-auto max-w-site px-md py-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
          
          {/* Main Content Area - Server Component */}
          <main className="lg:col-span-3">
            <article className="prose prose-lg dark:prose-invert max-w-none
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
              <MdxContent content={content} />
            </article>

            {/* Tags Section - Server Component */}
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
          </main>

          {/* Sidebar - Client Component for Interactivity */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-lg">
              <ArticleSidebarClient {...sidebarData} />
            </div>
          </aside>
        </div>
      </div>

      {/* Comments Section - Server Component */}
      {comments > 0 && (
        <section className="py-4xl bg-muted/30">
          <div className="container mx-auto max-w-site px-md">
            <h2 className="font-rajdhani text-2xl font-bold text-foreground mb-lg">
              Comments ({comments})
            </h2>
            <div className="text-muted-foreground">
              Comments integration coming soon...
            </div>
          </div>
        </section>
      )}

      {/* Related Articles - Server Component */}
      {relatedArticles.length > 0 && (
        <section className="py-4xl">
          <div className="container mx-auto max-w-site px-md">
            <h2 className="font-rajdhani text-3xl font-bold text-foreground mb-xl text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {relatedArticles.map((article) => (
                <Card key={article.id} className="h-full hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-lg">
                    <h3 className="font-rajdhani font-bold text-lg mb-sm leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.category}</span>
                      <span>{article.readTime} min read</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter currentPage={sectionName.toLowerCase()} />
    </div>
  )
}