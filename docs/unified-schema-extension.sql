-- =====================================================
-- The Boise Gun Club - Unified Schema Extension
-- Extends existing schema for 500+ page static generation
-- =====================================================

-- =====================================================
-- MARKETPLACE SCHEMA EXTENSION
-- =====================================================

-- Products table for marketplace listings
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Basic Product Information
    title VARCHAR(255) NOT NULL,
    description TEXT,
    excerpt TEXT,
    
    -- Product Details
    category VARCHAR(100) NOT NULL, -- 'firearms', 'ammunition', 'accessories', etc.
    subcategory VARCHAR(100),
    condition VARCHAR(50) NOT NULL, -- 'new', 'used', 'refurbished'
    brand VARCHAR(100),
    model VARCHAR(100),
    caliber VARCHAR(50),
    
    -- Pricing
    price_cents INTEGER NOT NULL, -- Store in cents for precision
    original_price_cents INTEGER,
    is_sale BOOLEAN DEFAULT false,
    
    -- Inventory
    in_stock BOOLEAN DEFAULT true,
    quantity INTEGER DEFAULT 1,
    sku VARCHAR(100),
    
    -- Vendor/Business Reference
    business_id UUID REFERENCES businesses(id),
    vendor_name VARCHAR(255), -- Fallback if no business_id
    vendor_contact_email VARCHAR(255),
    vendor_contact_phone VARCHAR(20),
    
    -- Product Specifications
    specifications JSONB, -- Flexible JSON for various product specs
    features TEXT[],
    included_accessories TEXT[],
    
    -- Status
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'sold', 'pending', 'inactive')),
    is_featured BOOLEAN DEFAULT false,
    is_verified BOOLEAN DEFAULT false,
    
    -- Content
    full_description TEXT,
    shipping_info TEXT,
    return_policy TEXT,
    
    -- Media
    featured_image VARCHAR(500),
    images TEXT[],
    
    -- Engagement
    view_count INTEGER DEFAULT 0,
    inquiry_count INTEGER DEFAULT 0,
    
    -- Search
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(title, '') || ' ' ||
            COALESCE(description, '') || ' ' ||
            COALESCE(brand, '') || ' ' ||
            COALESCE(model, '') || ' ' ||
            COALESCE(category, '') || ' ' ||
            COALESCE(caliber, '') || ' ' ||
            array_to_string(COALESCE(features, ARRAY[]::TEXT[]), ' ')
        )
    ) STORED,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_business ON products(business_id);
CREATE INDEX idx_products_status ON products(status) WHERE status = 'active';
CREATE INDEX idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_products_search ON products USING GIN(search_vector);
CREATE INDEX idx_products_price ON products(price_cents);

-- =====================================================
-- ARMORY SCHEMA EXTENSION (Reviews/Articles)
-- =====================================================

-- Enhanced articles table to handle armory reviews
-- (Extending existing articles table with armory-specific fields)
ALTER TABLE articles ADD COLUMN IF NOT EXISTS product_brand VARCHAR(100);
ALTER TABLE articles ADD COLUMN IF NOT EXISTS product_model VARCHAR(100);
ALTER TABLE articles ADD COLUMN IF NOT EXISTS product_category VARCHAR(100);
ALTER TABLE articles ADD COLUMN IF NOT EXISTS review_score INTEGER CHECK (review_score >= 1 AND review_score <= 10);
ALTER TABLE articles ADD COLUMN IF NOT EXISTS pros TEXT[];
ALTER TABLE articles ADD COLUMN IF NOT EXISTS cons TEXT[];
ALTER TABLE articles ADD COLUMN IF NOT EXISTS verdict TEXT;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS recommended_for TEXT[];
ALTER TABLE articles ADD COLUMN IF NOT EXISTS tested_specs JSONB;

-- Create index for armory content
CREATE INDEX IF NOT EXISTS idx_articles_armory ON articles(category, product_category) 
    WHERE category = 'armory';

-- =====================================================
-- LOCATION/INTEL SCHEMA EXTENSION
-- =====================================================

-- Shooting locations for intel section
CREATE TABLE IF NOT EXISTS shooting_locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Basic Information
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location_type VARCHAR(50) NOT NULL, -- 'public_land', 'private_range', 'club', 'indoor_range'
    
    -- Geographic Information
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(2) DEFAULT 'ID',
    zip_code VARCHAR(10),
    county VARCHAR(100),
    coordinates POINT, -- PostGIS point for mapping
    elevation INTEGER,
    
    -- Access Information
    access_type VARCHAR(50), -- 'public', 'members_only', 'private', 'permit_required'
    entry_fee_cents INTEGER DEFAULT 0,
    permits_required TEXT[],
    restrictions TEXT[],
    allowed_activities TEXT[], -- 'rifle', 'pistol', 'shotgun', 'archery', etc.
    
    -- Facility Details
    amenities TEXT[],
    max_distance_yards INTEGER,
    target_types TEXT[],
    safety_equipment_required TEXT[],
    hours_of_operation JSONB,
    
    -- Status & Safety
    is_verified BOOLEAN DEFAULT false,
    is_currently_open BOOLEAN DEFAULT true,
    safety_rating INTEGER CHECK (safety_rating >= 1 AND safety_rating <= 5),
    last_safety_check DATE,
    
    -- Weather & Conditions
    weather_dependent BOOLEAN DEFAULT true,
    seasonal_restrictions TEXT,
    road_conditions VARCHAR(100),
    
    -- Media & Documentation
    featured_image VARCHAR(500),
    images TEXT[],
    maps TEXT[], -- Links to maps or map files
    
    -- Contact
    contact_name VARCHAR(100),
    contact_phone VARCHAR(20),
    contact_email VARCHAR(255),
    website VARCHAR(500),
    
    -- Business Reference (if managed by a business)
    business_id UUID REFERENCES businesses(id),
    
    -- Search
    search_vector tsvector GENERATED ALWAYS AS (
        to_tsvector('english', 
            COALESCE(name, '') || ' ' ||
            COALESCE(description, '') || ' ' ||
            COALESCE(city, '') || ' ' ||
            COALESCE(county, '') || ' ' ||
            array_to_string(COALESCE(allowed_activities, ARRAY[]::TEXT[]), ' ') || ' ' ||
            array_to_string(COALESCE(amenities, ARRAY[]::TEXT[]), ' ')
        )
    ) STORED,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_verified_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_locations_slug ON shooting_locations(slug);
CREATE INDEX idx_locations_type ON shooting_locations(location_type);
CREATE INDEX idx_locations_city ON shooting_locations(city);
CREATE INDEX idx_locations_access ON shooting_locations(access_type);
CREATE INDEX idx_locations_verified ON shooting_locations(is_verified) WHERE is_verified = true;
CREATE INDEX idx_locations_search ON shooting_locations USING GIN(search_vector);

-- =====================================================
-- CROSS-REFERENCE TABLES
-- =====================================================

-- Event-Business relationships (many-to-many for sponsors, vendors, etc.)
CREATE TABLE IF NOT EXISTS event_businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    relationship_type VARCHAR(50) NOT NULL, -- 'venue', 'sponsor', 'vendor', 'organizer'
    display_order INTEGER DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(event_id, business_id, relationship_type)
);

CREATE INDEX idx_event_businesses_event ON event_businesses(event_id);
CREATE INDEX idx_event_businesses_business ON event_businesses(business_id);
CREATE INDEX idx_event_businesses_type ON event_businesses(relationship_type);

-- Product-Business relationships (for marketplace cross-referencing)
CREATE TABLE IF NOT EXISTS product_related_businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    relationship_type VARCHAR(50) NOT NULL, -- 'seller', 'service_provider', 'manufacturer_dealer'
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(product_id, business_id, relationship_type)
);

-- Location-Business relationships (ranges, training facilities, etc.)
CREATE TABLE IF NOT EXISTS location_businesses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    location_id UUID NOT NULL REFERENCES shooting_locations(id) ON DELETE CASCADE,
    business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
    relationship_type VARCHAR(50) NOT NULL, -- 'owner', 'manager', 'service_provider'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    UNIQUE(location_id, business_id, relationship_type)
);

-- =====================================================
-- UPDATE EXISTING TRIGGERS AND FUNCTIONS
-- =====================================================

-- Add updated_at triggers for new tables
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_shooting_locations_updated_at BEFORE UPDATE ON shooting_locations 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- UNIFIED VIEWS FOR STATIC GENERATION
-- =====================================================

-- Unified search view across all content types
CREATE VIEW unified_search_results AS
SELECT 
    'business' as content_type,
    id,
    slug,
    business_name as title,
    description,
    premise_city as location,
    business_type as category,
    NULL as event_date,
    is_featured,
    created_at,
    search_vector
FROM businesses
WHERE is_verified = true

UNION ALL

SELECT 
    'event' as content_type,
    id,
    slug,
    title,
    description,
    city as location,
    event_type as category,
    event_date,
    is_featured,
    created_at,
    search_vector
FROM events
WHERE is_public = true AND status = 'scheduled'

UNION ALL

SELECT 
    'article' as content_type,
    id,
    slug,
    title,
    description,
    NULL as location,
    category,
    NULL as event_date,
    is_featured,
    created_at,
    search_vector
FROM articles
WHERE status = 'published'

UNION ALL

SELECT 
    'product' as content_type,
    id,
    slug,
    title,
    description,
    NULL as location,
    category,
    NULL as event_date,
    is_featured,
    created_at,
    search_vector
FROM products
WHERE status = 'active'

UNION ALL

SELECT 
    'location' as content_type,
    id,
    slug,
    name as title,
    description,
    city as location,
    location_type as category,
    NULL as event_date,
    false as is_featured,
    created_at,
    search_vector
FROM shooting_locations
WHERE is_verified = true;

-- =====================================================
-- HELPER FUNCTIONS FOR STATIC GENERATION
-- =====================================================

-- Function to get all slugs for static generation
CREATE OR REPLACE FUNCTION get_all_content_slugs(content_type_filter TEXT DEFAULT NULL)
RETURNS TABLE(content_type TEXT, slug TEXT, priority INTEGER) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        'business'::TEXT,
        b.slug,
        CASE 
            WHEN b.is_featured THEN 1 
            WHEN b.tier = 'gold' THEN 2
            WHEN b.tier = 'silver' THEN 3
            ELSE 4
        END as priority
    FROM businesses b
    WHERE b.is_verified = true
        AND (content_type_filter IS NULL OR content_type_filter = 'business')
    
    UNION ALL
    
    SELECT 
        'event'::TEXT,
        e.slug,
        CASE WHEN e.is_featured THEN 1 ELSE 2 END as priority
    FROM events e
    WHERE e.is_public = true 
        AND e.status = 'scheduled'
        AND (content_type_filter IS NULL OR content_type_filter = 'event')
    
    UNION ALL
    
    SELECT 
        'article'::TEXT,
        a.slug,
        CASE WHEN a.is_featured THEN 1 ELSE 2 END as priority
    FROM articles a
    WHERE a.status = 'published'
        AND (content_type_filter IS NULL OR content_type_filter = 'article')
    
    UNION ALL
    
    SELECT 
        'product'::TEXT,
        p.slug,
        CASE WHEN p.is_featured THEN 1 ELSE 2 END as priority
    FROM products p
    WHERE p.status = 'active'
        AND (content_type_filter IS NULL OR content_type_filter = 'product')
    
    UNION ALL
    
    SELECT 
        'location'::TEXT,
        l.slug,
        2 as priority
    FROM shooting_locations l
    WHERE l.is_verified = true
        AND (content_type_filter IS NULL OR content_type_filter = 'location')
    
    ORDER BY priority, slug;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- COMMENTS
-- =====================================================

COMMENT ON TABLE products IS 'Marketplace product listings with business cross-references';
COMMENT ON TABLE shooting_locations IS 'Shooting locations and ranges for intel section';
COMMENT ON TABLE event_businesses IS 'Many-to-many relationships between events and businesses';
COMMENT ON VIEW unified_search_results IS 'Unified search across all content types for static generation';
COMMENT ON FUNCTION get_all_content_slugs IS 'Returns all slugs for static page generation with priority ordering';