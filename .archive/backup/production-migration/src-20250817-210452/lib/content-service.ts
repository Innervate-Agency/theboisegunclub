// Content Service Abstraction Layer
// This interface allows seamless migration from file-based to database content

export interface Author {
  name: string
  title?: string
  bio?: string
  avatar?: string
}

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  category: string
  author: Author
  publishDate: string
  readTime: number
  views?: number
  likes?: number
  comments?: number
  featured?: boolean
  tags: string[]
  image?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  count: number
}

// Abstract content service interface
export interface ContentService {
  // Article operations
  getArticles(): Promise<Article[]>
  getArticle(slug: string): Promise<Article | null>
  getArticlesByCategory(category: string): Promise<Article[]>
  getFeaturedArticles(): Promise<Article[]>
  searchArticles(query: string): Promise<Article[]>
  
  // Category operations
  getCategories(): Promise<Category[]>
  getCategory(slug: string): Promise<Category | null>
  
  // Statistics
  getContentStats(): Promise<{
    totalArticles: number
    totalViews: number
    totalAuthors: number
    avgRating: number
  }>
}

// File-based implementation (Phase 1)
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'

export class FileContentService implements ContentService {
  private contentDirectory: string

  constructor(contentDir: string = 'content') {
    this.contentDirectory = path.join(process.cwd(), contentDir)
  }

  // Cache the file reading operations
  private getContentFiles = cache(async (subDir: string = 'articles'): Promise<Article[]> => {
    const articlesDirectory = path.join(this.contentDirectory, subDir)
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(articlesDirectory)) {
      fs.mkdirSync(articlesDirectory, { recursive: true })
      return []
    }

    const filenames = fs.readdirSync(articlesDirectory, { recursive: true })
    const mdxFiles = filenames
      .filter((filename) => typeof filename === 'string' && filename.endsWith('.mdx'))
      .map(filename => String(filename))

    const articles = await Promise.all(
      mdxFiles.map(async (filename) => {
        const filePath = path.join(articlesDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        // Generate slug from filename
        const slug = filename.replace(/\.mdx$/, '').replace(/\//g, '-')
        
        return {
          id: slug,
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || data.description || '',
          content,
          category: data.category || 'Uncategorized',
          author: {
            name: data.author?.name || data.author || 'Anonymous',
            title: data.author?.title || '',
            bio: data.author?.bio || '',
            avatar: data.author?.avatar || ''
          },
          publishDate: data.date || data.publishDate || new Date().toISOString(),
          readTime: data.readTime || this.calculateReadTime(content),
          views: data.views || 0,
          likes: data.likes || 0,
          comments: data.comments || 0,
          featured: data.featured || false,
          tags: data.tags || [],
          image: data.image || ''
        } as Article
      })
    )

    // Sort by featured first, then by date
    return articles.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    })
  })

  async getArticles(): Promise<Article[]> {
    return this.getContentFiles('articles')
  }

  async getArticle(slug: string): Promise<Article | null> {
    const articles = await this.getArticles()
    return articles.find(article => article.slug === slug) || null
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    const articles = await this.getArticles()
    return articles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    )
  }

  async getFeaturedArticles(): Promise<Article[]> {
    const articles = await this.getArticles()
    return articles.filter(article => article.featured)
  }

  async searchArticles(query: string): Promise<Article[]> {
    const articles = await this.getArticles()
    const searchTerm = query.toLowerCase()
    
    return articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      article.author.name.toLowerCase().includes(searchTerm)
    )
  }

  async getCategories(): Promise<Category[]> {
    const articles = await this.getArticles()
    const categoryMap = new Map<string, number>()

    articles.forEach(article => {
      const count = categoryMap.get(article.category) || 0
      categoryMap.set(article.category, count + 1)
    })

    return Array.from(categoryMap.entries()).map(([name, count]) => ({
      id: this.slugify(name),
      name,
      slug: this.slugify(name),
      count
    }))
  }

  async getCategory(slug: string): Promise<Category | null> {
    const categories = await this.getCategories()
    return categories.find(category => category.slug === slug) || null
  }

  async getContentStats(): Promise<{
    totalArticles: number
    totalViews: number
    totalAuthors: number
    avgRating: number
  }> {
    const articles = await this.getArticles()
    const totalViews = articles.reduce((sum, article) => sum + (article.views || 0), 0)
    const totalLikes = articles.reduce((sum, article) => sum + (article.likes || 0), 0)
    const totalComments = articles.reduce((sum, article) => sum + (article.comments || 0), 0)
    const authors = new Set(articles.map(article => article.author.name))

    // Calculate average rating based on likes vs total engagement
    const totalEngagement = totalLikes + totalComments
    const avgRating = totalEngagement > 0 ? Math.min(5, (totalLikes / totalEngagement) * 5) : 4.5

    return {
      totalArticles: articles.length,
      totalViews,
      totalAuthors: authors.size,
      avgRating: Math.round(avgRating * 10) / 10 // Round to 1 decimal
    }
  }

  private calculateReadTime(content: string): number {
    const wordsPerMinute = 200
    const words = content.split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }
}

// Export singleton instance for use throughout the app
export const contentService = new FileContentService()

// Future: Database implementation will implement the same interface
// export class DatabaseContentService implements ContentService { ... }