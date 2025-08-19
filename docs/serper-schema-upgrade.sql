-- PostgreSQL Schema Enhancements for Serper API Integration
-- Phase 1: Add columns to support rich Serper data

ALTER TABLE businesses
ADD COLUMN IF NOT EXISTS rating NUMERIC(2, 1),           -- Star ratings like 4.5
ADD COLUMN IF NOT EXISTS review_count INTEGER,           -- Total number of reviews  
ADD COLUMN IF NOT EXISTS hours JSONB,                    -- Flexible JSONB for daily hours
ADD COLUMN IF NOT EXISTS image_urls TEXT[],              -- Array of photo URLs
ADD COLUMN IF NOT EXISTS last_serper_check TIMESTAMPTZ, -- Last successful API check
ADD COLUMN IF NOT EXISTS data_hash VARCHAR(64),          -- SHA-256 hash for change detection
ADD COLUMN IF NOT EXISTS serper_place_id VARCHAR(255),   -- Serper's unique place identifier
ADD COLUMN IF NOT EXISTS tier INTEGER DEFAULT 3,        -- Business tier (1=premium, 2=standard, 3=basic)
ADD COLUMN IF NOT EXISTS refresh_frequency VARCHAR(20) DEFAULT 'monthly'; -- How often to refresh

-- Create index for efficient tier-based queries
CREATE INDEX IF NOT EXISTS idx_businesses_tier ON businesses(tier);
CREATE INDEX IF NOT EXISTS idx_businesses_last_check ON businesses(last_serper_check);
CREATE INDEX IF NOT EXISTS idx_businesses_data_hash ON businesses(data_hash);

-- Add comments for documentation
COMMENT ON COLUMN businesses.rating IS 'Google star rating from Serper API (1.0-5.0)';
COMMENT ON COLUMN businesses.review_count IS 'Total number of Google reviews';
COMMENT ON COLUMN businesses.hours IS 'Business hours in JSON format: {"monday": "9:00-17:00", ...}';
COMMENT ON COLUMN businesses.image_urls IS 'Array of image URLs from Google listings';
COMMENT ON COLUMN businesses.tier IS 'Business tier: 1=Tier1(daily), 2=Tier2(weekly), 3=Tier3(monthly)';
COMMENT ON COLUMN businesses.refresh_frequency IS 'API refresh schedule: daily, weekly, monthly';