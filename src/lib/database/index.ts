/**
 * Database Service Layer for The Boise Gun Club
 * Hybrid Static/Dynamic Data Access (90% Static, 10% Dynamic)
 */

import { Pool, PoolClient } from 'pg'

// Database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

// Type definitions matching our PostgreSQL schema
export interface Business {
  id: string
  slug: string
  license_name?: string
  business_name: string
  display_name: string
  business_type: string
  description: string
  
  // Address
  premise_street?: string
  premise_city?: string
  premise_state: string
  premise_zip_code?: string
  full_address: string
  
  // Contact
  voice_phone?: string
  website?: string
  email?: string
  
  // Business details
  hours: Record<string, string>
  services: string[]
  specialties: string[]
  certifications: string[]
  year_established?: number
  employee_count?: string
  service_area: string[]
  payment_methods: string[]
  
  // FFL InformationCircleIcon
  lic_regn?: string
  lic_dist?: string
  lic_cnty?: string
  lic_type?: string
  lic_xprdte?: string
  lic_seqn?: string
  
  // Status
  tier: 'free' | 'copper' | 'silver' | 'gold'
  is_verified: boolean
  verification_status?: string
  is_sponsored: boolean
  is_featured: boolean
  data_source: string
  
  // Media
  logo_url?: string
  images: string[]
  
  // Timestamps
  created_at: string
  updated_at: string
  last_static_build: string
  
  // From joined stats
  current_rating?: number
  review_count?: number
  page_views?: number
}

export interface Event {
  id: string
  slug: string
  title: string
  description: string
  event_type?: string
  category?: string
  
  // Scheduling
  event_date: string
  event_time?: string
  end_date?: string
  recurring_pattern?: string
  
  // Location
  venue_name?: string
  address?: string
  city?: string
  state: string
  zip_code?: string
  venue_type?: string
  
  // Registration
  capacity?: number
  price_cents?: number
  registration_url?: string
  registration_required: boolean
  
  // Organizer
  organizer?: string
  organizer_contact_email?: string
  organizer_contact_phone?: string
  business_id?: string
  
  // Status
  status: 'scheduled' | 'cancelled' | 'completed' | 'postponed'
  is_featured: boolean
  is_public: boolean
  
  // Content
  full_description?: string
  rules_and_requirements?: string
  equipment_needed: string[]
  skill_level?: string
  
  // Media
  featured_image?: string
  images: string[]
  
  // Timestamps
  created_at: string
  updated_at: string
}

export interface Article {
  id: string
  slug: string
  title: string
  subtitle?: string
  description: string
  content: string
  excerpt?: string
  
  // Categorization
  category: string
  subcategory?: string
  tags: string[]
  
  // Publishing
  status: 'draft' | 'published' | 'archived'
  published_at?: string
  is_featured: boolean
  
  // Author
  author_name?: string
  author_bio?: string
  
  // SEO
  meta_title?: string
  meta_description?: string
  
  // Media
  featured_image?: string
  images: string[]
  
  // Content metadata
  reading_time_minutes?: number
  word_count?: number
  difficulty_level?: string
  
  // Timestamps
  created_at: string
  updated_at: string
}

export interface BusinessReview {
  id: string
  business_id: string
  google_review_id?: string
  author_name?: string
  author_profile_photo?: string
  rating: number
  review_text?: string
  review_date: string
  is_verified: boolean
  helpful_count: number
  source: 'google' | 'manual' | 'imported'
  google_place_id?: string
  last_fetched_at: string
  is_approved: boolean
  is_flagged: boolean
  moderation_notes?: string
  created_at: string
  updated_at: string
}

/**
 * Database service class with static and dynamic data methods
 */
export class DatabaseService {
  private pool: Pool
  
  constructor() {
    this.pool = pool
  }
  
  async query(text: string, params?: any[]): Promise<any> {
    const start = Date.now()
    const res = await this.pool.query(text, params)
    const duration = Date.now() - start
    
    if (process.env.NODE_ENV === 'development') {
    }
    
    return res
  }
  
  async getClient(): Promise<PoolClient> {
    return this.pool.connect()
  }
  
  async close(): Promise<void> {
    await this.pool.end()
  }
  
  // =====================================================
  // STATIC DATA METHODS (for generateStaticParams and build-time)
  // =====================================================
  
  /**
   * Get all business slugs for generateStaticParams
   * This is called at build time to generate all directory pages
   */
  async getAllBusinessSlugs(): Promise<string[]> {
    const result = await this.query(
      'SELECT slug FROM businesses WHERE is_verified = true ORDER BY slug'
    )
    return result.rows.map((row: any) => row.slug)
  }
  
  /**
   * Get all event slugs for generateStaticParams
   */
  async getAllEventSlugs(): Promise<string[]> {
    const result = await this.query(
      'SELECT slug FROM events WHERE status = $1 AND is_public = true ORDER BY event_date',
      ['scheduled']
    )
    return result.rows.map((row: any) => row.slug)
  }
  
  /**
   * Get all article slugs for generateStaticParams
   */
  async getAllArticleSlugs(): Promise<string[]> {
    const result = await this.query(
      'SELECT slug FROM articles WHERE status = $1 ORDER BY published_at DESC',
      ['published']
    )
    return result.rows.map((row: any) => row.slug)
  }
  
  /**
   * Get static business data by slug (for pre-generation)
   * Does NOT include dynamic review data
   */
  async getBusinessBySlug(slug: string): Promise<Business | null> {
    const result = await this.query(`
      SELECT 
        b.*,
        bs.avg_rating as current_rating,
        COALESCE(bs.total_reviews, 0) as review_count,
        COALESCE(bs.total_views, 0) as page_views
      FROM businesses b
      LEFT JOIN business_stats bs ON b.id = bs.business_id
      WHERE b.slug = $1 AND b.is_verified = true
    `, [slug])
    
    return result.rows.length > 0 ? result.rows[0] : null
  }
  
  /**
   * Get all businesses for directory listing (static generation)
   */
  async getAllBusinesses(limit = 1000): Promise<Business[]> {
    const result = await this.query(`
      SELECT 
        b.*,
        bs.avg_rating as current_rating,
        COALESCE(bs.total_reviews, 0) as review_count
      FROM businesses b
      LEFT JOIN business_stats bs ON b.id = bs.business_id
      WHERE b.is_verified = true
      ORDER BY b.is_featured DESC, b.tier DESC, b.business_name
      LIMIT $1
    `, [limit])
    
    return result.rows
  }
  
  /**
   * Get event by slug (static data)
   */
  async getEventBySlug(slug: string): Promise<Event | null> {
    const result = await this.query(`
      SELECT e.*, b.display_name as venue_business_name
      FROM events e
      LEFT JOIN businesses b ON e.business_id = b.id
      WHERE e.slug = $1
    `, [slug])
    
    return result.rows.length > 0 ? result.rows[0] : null
  }
  
  /**
   * Get all upcoming events (static generation)
   */
  async getUpcomingEvents(limit = 100): Promise<Event[]> {
    const result = await this.query(`
      SELECT e.*, b.display_name as venue_business_name
      FROM events e
      LEFT JOIN businesses b ON e.business_id = b.id
      WHERE e.event_date >= CURRENT_DATE 
        AND e.is_public = true 
        AND e.status = 'scheduled'
      ORDER BY e.is_featured DESC, e.event_date
      LIMIT $1
    `, [limit])
    
    return result.rows
  }
  
  /**
   * Get article by slug (static data)
   */
  async getArticleBySlug(slug: string): Promise<Article | null> {
    const result = await this.query(`
      SELECT * FROM articles 
      WHERE slug = $1 AND status = 'published'
    `, [slug])
    
    return result.rows.length > 0 ? result.rows[0] : null
  }
  
  /**
   * Get all published articles (static generation)
   */
  async getPublishedArticles(category?: string, limit = 100): Promise<Article[]> {
    let query = `
      SELECT * FROM articles 
      WHERE status = 'published' AND published_at <= NOW()
    `
    const params: any[] = []
    
    if (category) {
      query += ` AND category = $1`
      params.push(category)
      query += ` ORDER BY published_at DESC LIMIT $2`
      params.push(limit)
    } else {
      query += ` ORDER BY is_featured DESC, published_at DESC LIMIT $1`
      params.push(limit)
    }
    
    const result = await this.query(query, params)
    return result.rows
  }
  
  // =====================================================
  // DYNAMIC DATA METHODS (for API routes and ISR)
  // =====================================================
  
  /**
   * Get business reviews (dynamic data - changes frequently)
   * This should be called via API route with ISR
   */
  async getBusinessReviews(businessId: string, limit = 10): Promise<BusinessReview[]> {
    const result = await this.query(`
      SELECT * FROM business_reviews 
      WHERE business_id = $1 AND is_approved = true
      ORDER BY review_date DESC
      LIMIT $2
    `, [businessId, limit])
    
    return result.rows
  }
  
  /**
   * Update business statistics (called by background jobs)
   */
  async updateBusinessStats(businessId: string, stats: {
    avg_rating?: number
    total_reviews?: number
    google_reviews_count?: number
    page_views?: number
    phone_clicks?: number
    website_clicks?: number
    direction_requests?: number
  }): Promise<void> {
    const setClause = Object.keys(stats)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ')
    
    const values = [businessId, ...Object.values(stats)]
    
    await this.query(`
      INSERT INTO business_stats (business_id, ${Object.keys(stats).join(', ')}, last_calculated_at)
      VALUES ($1, ${Object.keys(stats).map((_, i) => `$${i + 2}`).join(', ')}, NOW())
      ON CONFLICT (business_id) 
      DO UPDATE SET 
        ${setClause},
        last_calculated_at = NOW(),
        next_update_at = NOW() + INTERVAL '6 hours'
    `, values)
  }
  
  /**
   * MagnifyingGlassIcon businesses (dynamic with caching)
   */
  async searchBusinesses(query: string, filters: {
    city?: string
    business_type?: string
    tier?: string
    limit?: number
    offset?: number
  } = {}): Promise<{ businesses: Business[], total: number }> {
    const { city, business_type, tier, limit = 20, offset = 0 } = filters
    
    let whereClause = `b.is_verified = true`
    const params: any[] = []
    let paramCount = 0
    
    if (query) {
      paramCount++
      whereClause += ` AND b.search_vector @@ plainto_tsquery('english', $${paramCount})`
      params.push(query)
    }
    
    if (city) {
      paramCount++
      whereClause += ` AND LOWER(b.premise_city) = LOWER($${paramCount})`
      params.push(city)
    }
    
    if (business_type) {
      paramCount++
      whereClause += ` AND b.business_type = $${paramCount}`
      params.push(business_type)
    }
    
    if (tier) {
      paramCount++
      whereClause += ` AND b.tier = $${paramCount}`
      params.push(tier)
    }
    
    // Get total count
    const countResult = await this.query(`
      SELECT COUNT(*) as total 
      FROM businesses b 
      WHERE ${whereClause}
    `, params)
    
    // Get businesses
    const businessResult = await this.query(`
      SELECT 
        b.*,
        bs.avg_rating as current_rating,
        COALESCE(bs.total_reviews, 0) as review_count,
        ${query ? `ts_rank(b.search_vector, plainto_tsquery('english', $1)) as rank` : '0 as rank'}
      FROM businesses b
      LEFT JOIN business_stats bs ON b.id = bs.business_id
      WHERE ${whereClause}
      ORDER BY 
        b.is_featured DESC,
        ${query ? 'rank DESC,' : ''}
        b.tier DESC,
        b.business_name
      LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}
    `, [...params, limit, offset])
    
    return {
      businesses: businessResult.rows,
      total: parseInt(countResult.rows[0].total)
    }
  }
}

// Singleton instance
export const db = new DatabaseService()

// Helper function for connecting to database in serverless functions
export async function withDatabase<T>(
  callback: (db: DatabaseService) => Promise<T>
): Promise<T> {
  try {
    return await callback(db)
  } catch (error) {
    throw error
  }
}

// Health check function
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    await db.query('SELECT 1')
    return true
  } catch (error) {
    return false
  }
}

export default db