-- Real Business Discovery Test Results
-- Generated: 2025-08-21T01:55:48.434Z
-- Enhanced businesses: 0
-- No website found: 6
-- Total processed: 7

BEGIN;

-- Create test table with realistic structure
CREATE TEMP TABLE discovered_business_data (
  slug VARCHAR(255) PRIMARY KEY,
  business_name VARCHAR(255),
  city VARCHAR(100),
  business_type VARCHAR(100),
  discovered_website TEXT,
  discovered_phone VARCHAR(50),
  discovered_email VARCHAR(255),
  enhanced_description TEXT,
  discovered_services TEXT,
  discovery_status VARCHAR(50),
  discovery_method VARCHAR(100),
  processed_at TIMESTAMP DEFAULT NOW()
);

-- Insert discovered businesses

INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  'al-s-sporting-goods',
  'Al''s Sporting Goods',
  'Boise',
  'Sporting Goods',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'no_website_found',
  'no_website_discovered'
);
INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  '20-20-sporting-services',
  '20/20 Sporting Services',
  'Boise',
  'Sporting Goods',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'no_website_found',
  'no_website_discovered'
);
INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  'rifle-guru',
  'Rifle Guru',
  'Boise',
  'Gunsmith',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'no_website_found',
  'no_website_discovered'
);
INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  'ada-armaments',
  'Ada Armaments',
  'Boise',
  'Gun Manufacturer',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'no_website_found',
  'no_website_discovered'
);
INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  'american-reserve-munitions-llc',
  'American Reserve Munitions LLC',
  'Boise',
  'Gun Manufacturer',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'no_website_found',
  'no_website_discovered'
);
INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  'high-born-tactical',
  'High Born Tactical',
  'Boise',
  'Tactical/Training',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'error',
  'no_website_discovered'
);
INSERT INTO discovered_business_data (
  slug, business_name, city, business_type, discovered_website,
  discovered_phone, discovered_email, enhanced_description,
  discovered_services, discovery_status, discovery_method
) VALUES (
  'automatic-weapons-company',
  'Automatic Weapons Company',
  'Boise',
  'Gun Manufacturer',
  NULL,
  NULL,
  NULL,
  NULL,
  '[]',
  'no_website_found',
  'no_website_discovered'
);

-- Real-world discovery results
SELECT 
  business_name,
  city,
  discovery_status,
  CASE WHEN discovered_website IS NOT NULL THEN 'YES' ELSE 'NO' END as has_website,
  CASE WHEN discovered_phone IS NOT NULL THEN 'YES' ELSE 'NO' END as has_phone,
  CASE WHEN discovered_email IS NOT NULL THEN 'YES' ELSE 'NO' END as has_email
FROM discovered_business_data
ORDER BY discovery_status DESC, business_name;

-- Summary of real discovery results
SELECT 
  COUNT(*) as total_businesses,
  SUM(CASE WHEN discovery_status = 'enhanced' THEN 1 ELSE 0 END) as successfully_enhanced,
  SUM(CASE WHEN discovery_status = 'no_website_found' THEN 1 ELSE 0 END) as no_website,
  SUM(CASE WHEN discovery_status = 'error' THEN 1 ELSE 0 END) as errors,
  ROUND(100.0 * SUM(CASE WHEN discovery_status = 'enhanced' THEN 1 ELSE 0 END) / COUNT(*), 1) as success_rate_percent
FROM discovered_business_data;

COMMIT;
