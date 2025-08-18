-- Quick fix for the schema issues
-- Replace generated columns with regular TEXT columns

-- Fix the businesses table
ALTER TABLE IF EXISTS businesses DROP COLUMN IF EXISTS full_address;
ALTER TABLE IF EXISTS businesses DROP COLUMN IF EXISTS search_vector;
ALTER TABLE IF EXISTS businesses ADD COLUMN IF NOT EXISTS full_address TEXT;
ALTER TABLE IF EXISTS businesses ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- Fix the events table if it exists
ALTER TABLE IF EXISTS events DROP COLUMN IF EXISTS search_vector;
ALTER TABLE IF EXISTS events ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- Fix the articles table if it exists  
ALTER TABLE IF EXISTS articles DROP COLUMN IF EXISTS search_vector;
ALTER TABLE IF EXISTS articles ADD COLUMN IF NOT EXISTS search_vector tsvector;

-- Create a simple version of the businesses table
DROP TABLE IF EXISTS businesses CASCADE;
CREATE TABLE businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Basic Information (from CSV)
    license_name VARCHAR(255),
    business_name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    business_type VARCHAR(100) NOT NULL,
    description TEXT,
    
    -- Address Information
    premise_street TEXT,
    premise_city VARCHAR(100),
    premise_state VARCHAR(2) DEFAULT 'ID',
    premise_zip_code VARCHAR(10),
    full_address TEXT,
    
    -- Contact Information
    voice_phone VARCHAR(20),
    website VARCHAR(500),
    email VARCHAR(255),
    
    -- Business Details
    hours JSONB,
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
    data_source VARCHAR(50) NOT NULL,
    
    -- Media
    logo_url VARCHAR(500),
    images TEXT[],
    
    -- Search & SEO
    search_vector tsvector,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_static_build TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the other required tables
CREATE TABLE IF NOT EXISTS business_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    monthly_views INTEGER DEFAULT 0,
    total_views INTEGER DEFAULT 0,
    last_viewed TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_businesses_slug ON businesses(slug);
CREATE INDEX IF NOT EXISTS idx_businesses_city ON businesses(premise_city);
CREATE INDEX IF NOT EXISTS idx_businesses_type ON businesses(business_type);
CREATE INDEX IF NOT EXISTS idx_businesses_tier ON businesses(tier);
CREATE INDEX IF NOT EXISTS idx_businesses_featured ON businesses(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_business_stats_business_id ON business_stats(business_id);
