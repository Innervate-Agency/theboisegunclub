-- =====================================================
-- The Boise Gun Club - Reviews Integration Schema
-- SerpApi + Local Reviews Hybrid System
-- =====================================================

-- Create reviews table for both Google and local reviews
CREATE TABLE IF NOT EXISTS business_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    
    -- Review source and identification
    source VARCHAR(20) NOT NULL CHECK (source IN ('google', 'local', 'serpapi')),
    external_id VARCHAR(255), -- Google Place ID or other external identifier
    
    -- Review content
    username VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    review_date TIMESTAMP WITH TIME ZONE,
    
    -- Review metadata
    verified BOOLEAN DEFAULT false,
    helpful_count INTEGER DEFAULT 0,
    reported_count INTEGER DEFAULT 0,
    
    -- Owner response
    owner_response TEXT,
    owner_response_date TIMESTAMP WITH TIME ZONE,
    
    -- Images and attachments
    images TEXT[], -- URLs to review images
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Caching information for external reviews
    cache_expires_at TIMESTAMP WITH TIME ZONE,
    last_fetched_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_business_reviews_business_id ON business_reviews(business_id);
CREATE INDEX IF NOT EXISTS idx_business_reviews_source ON business_reviews(source);
CREATE INDEX IF NOT EXISTS idx_business_reviews_rating ON business_reviews(rating);
CREATE INDEX IF NOT EXISTS idx_business_reviews_date ON business_reviews(review_date DESC);
CREATE INDEX IF NOT EXISTS idx_business_reviews_external_id ON business_reviews(external_id) WHERE external_id IS NOT NULL;

-- Update business_stats table to include review aggregation data
ALTER TABLE business_stats 
ADD COLUMN IF NOT EXISTS total_reviews INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS avg_rating DECIMAL(3,2) DEFAULT 0.00,
ADD COLUMN IF NOT EXISTS google_place_id VARCHAR(255),
ADD COLUMN IF NOT EXISTS google_rating DECIMAL(3,2) DEFAULT 0.00,
ADD COLUMN IF NOT EXISTS google_reviews_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS local_rating DECIMAL(3,2) DEFAULT 0.00,
ADD COLUMN IF NOT EXISTS local_reviews_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_review_sync TIMESTAMP WITH TIME ZONE;

-- Create review cache table for SerpApi results
CREATE TABLE IF NOT EXISTS review_cache (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    cache_key VARCHAR(255) NOT NULL UNIQUE,
    
    -- Cached SerpApi response
    serpapi_data JSONB,
    google_place_id VARCHAR(255),
    
    -- Cache metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '7 days'),
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Request tracking
    request_count INTEGER DEFAULT 1,
    last_request_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_review_cache_business_id ON review_cache(business_id);
CREATE INDEX IF NOT EXISTS idx_review_cache_key ON review_cache(cache_key);
CREATE INDEX IF NOT EXISTS idx_review_cache_expires ON review_cache(expires_at);

-- Add sample review for testing
INSERT INTO business_reviews (business_id, source, username, rating, review_text, review_date, external_id)
SELECT 
    b.id,
    'serpapi',
    'John D.',
    5,
    'Excellent service and great selection of firearms. Highly recommended!',
    NOW() - INTERVAL '2 weeks',
    'sample_google_review_1'
FROM businesses b 
WHERE b.slug = '1199-tactical-llc'
LIMIT 1
ON CONFLICT DO NOTHING;

COMMENT ON TABLE business_reviews IS 'Reviews integration v1.0 - Supports Google/SerpApi and local reviews';
