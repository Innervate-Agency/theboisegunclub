-- Schema extensions for Enhanced Discovery v2
ALTER TABLE businesses 
ADD COLUMN IF NOT EXISTS community_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS is_ffl BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS has_training BOOLEAN DEFAULT FALSE, 
ADD COLUMN IF NOT EXISTS has_range BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS has_events BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS business_category VARCHAR(100);

CREATE INDEX IF NOT EXISTS idx_businesses_community_score ON businesses(community_score);
CREATE INDEX IF NOT EXISTS idx_businesses_category ON businesses(business_category);
