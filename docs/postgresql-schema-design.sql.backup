-- =====================================================
-- The Boise Gun Club - PostgreSQL Schema Design
-- Hybrid Static/Dynamic Architecture (90% Static, 10% Dynamic)
-- =====================================================

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy search
CREATE EXTENSION IF NOT EXISTS "unaccent"; -- For accent-insensitive search

-- =====================================================
-- CORE STATIC ENTITIES (90% - Pre-generated at build time)
-- =====================================================

-- Main businesses table (combines all CSV data sources)
CREATE TABLE businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Basic Information (from CSV)
    license_name VARCHAR(255),
    business_name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL, -- For public display
    business_type VARCHAR(100) NOT NULL,
    description TEXT,
    
    -- Address Information
    premise_street TEXT,
    premise_city VARCHAR(100),
    premise_state VARCHAR(2) DEFAULT 'ID',
    premise_zip_code VARCHAR(10),
    full_address TEXT GENERATED ALWAYS AS (
        COALESCE(premise_street || ', ', '') || 
        COALESCE(premise_city || ', ', '') || 
        COALESCE(premise_state || ' ', '') || 
        COALESCE(premise_zip_code, '')
    ) STORED,
    
    -- Contact Information
    voice_phone VARCHAR(20),
    website VARCHAR(500),
    email VARCHAR(255),
    
    -- Business Details
    hours JSONB, -- Store flexible hours data
    services TEXT[],
    specialties TEXT[],
    certifications TEXT[],
    year_established INTEGER,
    employee_count VARCHAR(20),
    service_area TEXT[],
    payment_methods TEXT[],
    
    -- FFL/License Information
    lic_regn VARCHAR(10),
    lic_dist VARCHAR(10),
    lic_cnty VARCHAR(10),
    lic_type VARCHAR(10),
    lic_xprdte VARCHAR(10),
    lic_seqn VARCHAR(20),
    
    -- Categorization & Status
    tier VARCHAR(20) DEFAULT 'free' CHECK (tier IN ('free', 'copper', 'silver', 'gold')),
    is_verified BOOLEAN DEFAULT false,
    verification_status VARCHAR(255),
    is_sponsored BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    data_source VARCHAR(50) NOT NULL, -- 'ffl_retail', 'ffl_candidates', 'county_directory', etc.
    
    -- Media
    logo_url VARCHAR(500),
    images TEXT[],
    
    -- Search & SEO
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(business_name, '') || ' ' ||
            COALESCE(display_name, '') || ' ' ||
            COALESCE(business_type, '') || ' ' ||
            COALESCE(premise_city, '') || ' ' ||
            COALESCE(description, '') || ' ' ||
            array_to_string(COALESCE(services, ARRAY[]::TEXT[]), ' ') || ' ' ||
            array_to_string(COALESCE(specialties, ARRAY[]::TEXT[]), ' ')
        )
    ) STORED,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_static_build TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast searches
CREATE INDEX idx_businesses_search ON businesses USING GIN(search_vector);
CREATE INDEX idx_businesses_slug ON businesses(slug);
CREATE INDEX idx_businesses_city ON businesses(premise_city);
CREATE INDEX idx_businesses_type ON businesses(business_type);
CREATE INDEX idx_businesses_tier ON businesses(tier);
CREATE INDEX idx_businesses_featured ON businesses(is_featured) WHERE is_featured = true;

-- Events table (mostly static with some dynamic registration data)
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Basic Event Information
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_type VARCHAR(50),
    category VARCHAR(50),
    
    -- Scheduling
    event_date DATE NOT NULL,
    event_time VARCHAR(100),
    end_date DATE,
    recurring_pattern VARCHAR(50), -- 'weekly', 'monthly', 'yearly', etc.
    
    -- Location
    venue_name VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(2) DEFAULT 'ID',
    zip_code VARCHAR(10),
    venue_type VARCHAR(50), -- 'indoor_range', 'outdoor_range', 'club', etc.
    
    -- Registration & Capacity
    capacity INTEGER,
    price_cents INTEGER, -- Store in cents for precision
    registration_url VARCHAR(500),
    registration_required BOOLEAN DEFAULT false,
    
    -- Organizer Information
    organizer VARCHAR(255),
    organizer_contact_email VARCHAR(255),
    organizer_contact_phone VARCHAR(20),
    business_id UUID REFERENCES businesses(id),
    
    -- Status
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'cancelled', 'completed', 'postponed')),
    is_featured BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true,
    
    -- Content
    full_description TEXT,
    rules_and_requirements TEXT,
    equipment_needed TEXT[],
    skill_level VARCHAR(20), -- 'beginner', 'intermediate', 'advanced', 'all'
    
    -- Media
    featured_image VARCHAR(500),
    images TEXT[],
    
    -- Search
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(title, '') || ' ' ||
            COALESCE(description, '') || ' ' ||
            COALESCE(event_type, '') || ' ' ||
            COALESCE(venue_name, '') || ' ' ||
            COALESCE(city, '')
        )
    ) STORED,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_events_slug ON events(slug);
CREATE INDEX idx_events_search ON events USING GIN(search_vector);
CREATE INDEX idx_events_city ON events(city);
CREATE INDEX idx_events_featured ON events(is_featured) WHERE is_featured = true;

-- Guides/Articles table (static content)
CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Content
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    description TEXT,
    content TEXT, -- MDX content
    excerpt TEXT,
    
    -- Categorization
    category VARCHAR(50) NOT NULL, -- 'legal', 'safety', 'training', 'reviews', etc.
    subcategory VARCHAR(50),
    tags TEXT[],
    
    -- Status & Publishing
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    published_at TIMESTAMP WITH TIME ZONE,
    is_featured BOOLEAN DEFAULT false,
    
    -- Authoring
    author_name VARCHAR(100),
    author_bio TEXT,
    
    -- SEO
    meta_title VARCHAR(255),
    meta_description TEXT,
    
    -- Media
    featured_image VARCHAR(500),
    images TEXT[],
    
    -- Content Metadata
    reading_time_minutes INTEGER,
    word_count INTEGER,
    difficulty_level VARCHAR(20), -- 'beginner', 'intermediate', 'advanced'
    
    -- Search
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(title, '') || ' ' ||
            COALESCE(description, '') || ' ' ||
            COALESCE(excerpt, '') || ' ' ||
            array_to_string(COALESCE(tags, ARRAY[]::TEXT[]), ' ')
        )
    ) STORED,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published ON articles(published_at) WHERE status = 'published';
CREATE INDEX idx_articles_search ON articles USING GIN(search_vector);
CREATE INDEX idx_articles_featured ON articles(is_featured) WHERE is_featured = true;

-- =====================================================
-- DYNAMIC ENTITIES (10% - Real-time/User-generated)
-- =====================================================

-- Google Reviews (cached from SerpAPI)
CREATE TABLE business_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    
    -- Review Data from Google
    google_review_id VARCHAR(100),
    author_name VARCHAR(100),
    author_profile_photo VARCHAR(500),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    review_date DATE,
    
    -- Review Metadata
    is_verified BOOLEAN DEFAULT false,
    helpful_count INTEGER DEFAULT 0,
    
    -- Source & Caching
    source VARCHAR(20) DEFAULT 'google' CHECK (source IN ('google', 'manual', 'imported')),
    google_place_id VARCHAR(255),
    last_fetched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Moderation
    is_approved BOOLEAN DEFAULT true,
    is_flagged BOOLEAN DEFAULT false,
    moderation_notes TEXT,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(business_id, google_review_id)
);

CREATE INDEX idx_reviews_business ON business_reviews(business_id);
CREATE INDEX idx_reviews_rating ON business_reviews(rating);
CREATE INDEX idx_reviews_date ON business_reviews(review_date);
CREATE INDEX idx_reviews_approved ON business_reviews(is_approved) WHERE is_approved = true;

-- Business Statistics (cached calculations updated regularly)
CREATE TABLE business_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    
    -- Review Statistics
    avg_rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    google_reviews_count INTEGER DEFAULT 0,
    
    -- Engagement Statistics
    page_views INTEGER DEFAULT 0,
    phone_clicks INTEGER DEFAULT 0,
    website_clicks INTEGER DEFAULT 0,
    direction_requests INTEGER DEFAULT 0,
    
    -- Cache Control
    last_calculated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    next_update_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '1 hour'),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(business_id)
);

CREATE INDEX idx_business_stats_rating ON business_stats(avg_rating);
CREATE INDEX idx_business_stats_reviews ON business_stats(total_reviews);
CREATE INDEX idx_business_stats_next_update ON business_stats(next_update_at);

-- User-generated content and interactions
CREATE TABLE user_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Content
    submission_type VARCHAR(50) NOT NULL, -- 'business_suggestion', 'event_submission', 'review', 'correction'
    title VARCHAR(255),
    description TEXT,
    contact_email VARCHAR(255),
    contact_name VARCHAR(100),
    
    -- Related Entity
    business_id UUID REFERENCES businesses(id),
    event_id UUID REFERENCES events(id),
    
    -- Status
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'processed')),
    admin_notes TEXT,
    
    -- Additional Data
    metadata JSONB,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    processed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_submissions_type ON user_submissions(submission_type);
CREATE INDEX idx_submissions_status ON user_submissions(status);
CREATE INDEX idx_submissions_business ON user_submissions(business_id);

-- =====================================================
-- UTILITY TABLES
-- =====================================================

-- Site configuration and dynamic content
CREATE TABLE site_config (
    key VARCHAR(100) PRIMARY KEY,
    value JSONB NOT NULL,
    description TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cache invalidation tracking
CREATE TABLE cache_invalidation (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cache_key VARCHAR(255) NOT NULL,
    invalidated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    reason VARCHAR(255)
);

CREATE INDEX idx_cache_invalidation_key ON cache_invalidation(cache_key);
CREATE INDEX idx_cache_invalidation_time ON cache_invalidation(invalidated_at);

-- =====================================================
-- FUNCTIONS AND TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to all main tables
CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON businesses 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_business_reviews_updated_at BEFORE UPDATE ON business_reviews 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_business_stats_updated_at BEFORE UPDATE ON business_stats 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update business statistics when reviews change
CREATE OR REPLACE FUNCTION update_business_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        UPDATE business_stats 
        SET 
            avg_rating = (
                SELECT ROUND(AVG(rating)::numeric, 2) 
                FROM business_reviews 
                WHERE business_id = OLD.business_id AND is_approved = true
            ),
            total_reviews = (
                SELECT COUNT(*) 
                FROM business_reviews 
                WHERE business_id = OLD.business_id AND is_approved = true
            ),
            last_calculated_at = NOW()
        WHERE business_id = OLD.business_id;
        RETURN OLD;
    ELSE
        UPDATE business_stats 
        SET 
            avg_rating = (
                SELECT ROUND(AVG(rating)::numeric, 2) 
                FROM business_reviews 
                WHERE business_id = NEW.business_id AND is_approved = true
            ),
            total_reviews = (
                SELECT COUNT(*) 
                FROM business_reviews 
                WHERE business_id = NEW.business_id AND is_approved = true
            ),
            last_calculated_at = NOW()
        WHERE business_id = NEW.business_id;
        RETURN NEW;
    END IF;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_business_stats_on_review_change
    AFTER INSERT OR UPDATE OR DELETE ON business_reviews
    FOR EACH ROW EXECUTE FUNCTION update_business_stats();

-- =====================================================
-- INITIAL DATA SEEDING SETUP
-- =====================================================

-- Insert initial site configuration
INSERT INTO site_config (key, value, description) VALUES
('maintenance_mode', 'false', 'Enable/disable maintenance mode'),
('featured_businesses_count', '12', 'Number of featured businesses to show'),
('cache_duration_hours', '24', 'Default cache duration for dynamic content'),
('google_reviews_refresh_hours', '6', 'How often to refresh Google reviews'),
('search_results_per_page', '20', 'Default pagination size for search results');

-- =====================================================
-- PERFORMANCE OPTIMIZATIONS
-- =====================================================

-- Partial indexes for better performance on filtered queries
CREATE INDEX idx_businesses_active_verified ON businesses(is_verified, tier) 
    WHERE is_verified = true AND tier != 'free';

CREATE INDEX idx_events_upcoming ON events(event_date, is_public) 
    WHERE event_date >= CURRENT_DATE AND is_public = true;

CREATE INDEX idx_articles_published_featured ON articles(published_at, is_featured) 
    WHERE status = 'published';

-- =====================================================
-- VIEWS FOR COMMON QUERIES
-- =====================================================

-- View for businesses with current statistics
CREATE VIEW businesses_with_stats AS
SELECT 
    b.*,
    COALESCE(bs.avg_rating, 0) as current_rating,
    COALESCE(bs.total_reviews, 0) as review_count,
    COALESCE(bs.page_views, 0) as page_views
FROM businesses b
LEFT JOIN business_stats bs ON b.id = bs.business_id;

-- View for upcoming events
CREATE VIEW upcoming_events AS
SELECT 
    e.*,
    b.display_name as venue_business_name,
    b.tier as venue_tier
FROM events e
LEFT JOIN businesses b ON e.business_id = b.id
WHERE e.event_date >= CURRENT_DATE 
    AND e.is_public = true 
    AND e.status = 'scheduled'
ORDER BY e.event_date;

-- View for published articles
CREATE VIEW published_articles AS
SELECT *
FROM articles
WHERE status = 'published' AND published_at <= NOW()
ORDER BY published_at DESC;

-- =====================================================
-- COMMENTS
-- =====================================================

COMMENT ON TABLE businesses IS 'Core business directory - 90% static data from CSV imports';
COMMENT ON TABLE events IS 'Events calendar - mostly static with some dynamic registration data';
COMMENT ON TABLE articles IS 'Guides, articles, and blog content - fully static';
COMMENT ON TABLE business_reviews IS 'Dynamic reviews from Google API and user submissions';
COMMENT ON TABLE business_stats IS 'Cached statistics updated every few hours';
COMMENT ON TABLE user_submissions IS 'User-generated content and suggestions for moderation';

COMMENT ON COLUMN businesses.search_vector IS 'Full-text search vector auto-generated from business content';
COMMENT ON COLUMN businesses.full_address IS 'Auto-generated full address for display';
COMMENT ON COLUMN business_stats.next_update_at IS 'When to next refresh statistics from external APIs';