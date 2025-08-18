'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { 
  Clock, Eye, Calendar, BookOpen, ShareNetwork, Bookmark, Heart, 
  DotsThree, User
} from '@phosphor-icons/react'
import Image from 'next/image'

interface ArticleSidebarClientProps {
  readTime: number
  views: number
  publishDate: string
  author: {
    name: string
    avatar?: string
    bio?: string
    title?: string
  }
  likes: number
  relatedArticles: Array<{
    id: string
    title: string
    excerpt: string
    readTime: number
    category: string
  }>
}

export function ArticleSidebarClient({
  readTime,
  views,
  publishDate,
  author,
  likes,
  relatedArticles
}: ArticleSidebarClientProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false)
  const [isLiked, setIsLiked] = React.useState(false)
  const [currentLikes, setCurrentLikes] = React.useState(likes)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        })
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // Here you would typically save to local storage or API
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1)
    // Here you would typically send to API
  }

  return (
    <div className="space-y-lg">
      {/* Article Meta Card */}
      <Card className="mica border-border/50">
        <CardHeader className="pb-sm">
          <div className="flex items-center gap-xs">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Article Info</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-sm">
          <div className="flex items-center gap-xs text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{readTime} min read</span>
          </div>
          <div className="flex items-center gap-xs text-sm">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span>{views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-xs text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{publishDate}</span>
          </div>
        </CardContent>
      </Card>

      {/* Author Card */}
      <Card className="mica border-border/50">
        <CardContent className="p-base">
          <div className="flex items-center gap-sm">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
            )}
            <div>
              <div className="font-medium text-sm">{author.name}</div>
              {author.title && (
                <div className="text-xs text-muted-foreground">{author.title}</div>
              )}
            </div>
          </div>
          {author.bio && (
            <p className="text-xs text-muted-foreground mt-sm">{author.bio}</p>
          )}
        </CardContent>
      </Card>

      {/* Share & Actions */}
      <Card className="mica border-border/50">
        <CardContent className="p-base">
          <div className="flex flex-col gap-sm">
            <Button 
              variant="outline" 
              size="sm" 
              className="justify-start gap-xs"
              onClick={handleShare}
            >
              <ShareNetwork className="h-4 w-4" />
              Share Article
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="justify-start gap-xs"
              onClick={handleBookmark}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              {isBookmarked ? 'Bookmarked' : 'Save for Later'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="justify-start gap-xs"
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-destructive' : ''}`} />
              Like ({currentLikes})
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Card className="mica border-border/50">
          <CardHeader className="pb-sm">
            <div className="flex items-center gap-xs">
              <DotsThree className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Related</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-sm">
            {relatedArticles.map((article) => (
              <div key={article.id} className="space-y-xs">
                <h4 className="text-sm font-medium leading-tight hover:text-foreground transition-colors cursor-pointer">
                  {article.title}
                </h4>
                <div className="flex items-center gap-xs text-xs text-muted-foreground">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}