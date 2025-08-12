'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { 
  Search, BookOpen, Filter, Clock, User, ArrowRight, 
  Shield, Scale, GraduationCap, Wrench, Target, FileText,
  Star, Eye, MessageSquare, Calendar, ChevronRight, Plus
} from 'lucide-react'

type Guide = {
  slug: string
  frontmatter: {
    [key: string]: any
    title: string
    date: string
    author: string
  }
  content: string
}

type GuideArticle = {
  title: string
  description: string
  category: string
  difficulty: string
  readTime: string
  author: string
  lastUpdated: string
  views: number
  likes: number
  comments: number
  featured: boolean
  tags: string[]
}

interface GuidesClientProps {
  articles: GuideArticle[]
  categories: Array<{
    label: string
    value: string
    icon: React.ReactNode
    count: number
  }>
  difficultyLevels: Array<{
    label: string
    value: string
    count: number
  }>
}

export function GuidesClient({ articles, categories, difficultyLevels }: GuidesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all") 
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredArticles = articles.filter(article => {
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
    <>
      {/* Search and Filter Section */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="space-y-xl">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-base">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-micro/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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

      {/* Results Summary */}
      <section className="pb-6xl">
        <div className="container mx-auto max-w-site px-md">
          <div className="flex items-center justify-between mb-xl">
            <h2 className="font-rajdhani text-3xl font-bold text-card-foreground">
              {selectedCategory === "all" ? "All Articles" : categories.find(c => c.value === selectedCategory)?.label}
            </h2>
            <div className="text-muted-foreground">
              {sortedArticles.length} {sortedArticles.length === 1 ? 'article' : 'articles'} found
            </div>
          </div>

          {/* Results count and reset */}
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
      </section>
    </>
  )
}