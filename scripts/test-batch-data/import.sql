-- Test Batch Enhanced Business Data Import
-- Generated: 2025-08-21T01:11:01.028Z
-- Enhanced businesses: 6
-- Total processed: 7

BEGIN;

-- Test: Create temporary table for enhanced data
CREATE TEMP TABLE enhanced_business_data (
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
  processed_at TIMESTAMP DEFAULT NOW()
);

-- Insert enhanced business data

INSERT INTO enhanced_business_data (
  slug, business_name, city, business_type, discovered_website, 
  discovered_phone, discovered_email, enhanced_description, 
  discovered_services, discovery_status
) VALUES (
  'al-s-sporting-goods',
  'Al''s Sporting Goods',
  'Boise',
  'Sporting Goods',
  'https://impactguns.com',
  '800-917-7137',
  'support@impactguns8091.zendesk.com',
  'We’re the original online gun dealer. Find thousands of guns for sale at low prices. Buy your guns, ammo, and gun accessories with confidence at Impact Guns.',
  '["Concealed carry","Training","Classes","Cerakote","Mounting","Sales"]',
  'enhanced'
);
INSERT INTO enhanced_business_data (
  slug, business_name, city, business_type, discovered_website, 
  discovered_phone, discovered_email, enhanced_description, 
  discovered_services, discovery_status
) VALUES (
  '20-20-sporting-services',
  '20/20 Sporting Services',
  'Boise',
  'Sporting Goods',
  'https://impactguns.com',
  '800-917-7137',
  'support@impactguns8091.zendesk.com',
  'We’re the original online gun dealer. Find thousands of guns for sale at low prices. Buy your guns, ammo, and gun accessories with confidence at Impact Guns.',
  '["Concealed carry","Training","Classes","Cerakote","Mounting","Sales"]',
  'enhanced'
);
INSERT INTO enhanced_business_data (
  slug, business_name, city, business_type, discovered_website, 
  discovered_phone, discovered_email, enhanced_description, 
  discovered_services, discovery_status
) VALUES (
  'rifle-guru',
  'Rifle Guru',
  'Boise',
  'Gunsmith',
  'https://www.sportsmanswarehouse.com',
  '',
  '',
  'Rifle Guru is a Gunsmith serving Boise, Idaho and the surrounding area.',
  '[]',
  'enhanced'
);
INSERT INTO enhanced_business_data (
  slug, business_name, city, business_type, discovered_website, 
  discovered_phone, discovered_email, enhanced_description, 
  discovered_services, discovery_status
) VALUES (
  'ada-armaments',
  'Ada Armaments',
  'Boise',
  'Gun Manufacturer',
  'https://www.sportsmanswarehouse.com',
  '',
  '',
  'Ada Armaments is a Gun Manufacturer serving Boise, Idaho and the surrounding area.',
  '[]',
  'enhanced'
);
INSERT INTO enhanced_business_data (
  slug, business_name, city, business_type, discovered_website, 
  discovered_phone, discovered_email, enhanced_description, 
  discovered_services, discovery_status
) VALUES (
  'american-reserve-munitions-llc',
  'American Reserve Munitions LLC',
  'Boise',
  'Gun Manufacturer',
  'https://www.sportsmanswarehouse.com',
  '',
  '',
  'American Reserve Munitions LLC is a Gun Manufacturer serving Boise, Idaho and the surrounding area.',
  '["Ccw"]',
  'enhanced'
);
INSERT INTO enhanced_business_data (
  slug, business_name, city, business_type, discovered_website, 
  discovered_phone, discovered_email, enhanced_description, 
  discovered_services, discovery_status
) VALUES (
  'automatic-weapons-company',
  'Automatic Weapons Company',
  'Boise',
  'Gun Manufacturer',
  'https://www.sportsmanswarehouse.com',
  '',
  '',
  'Automatic Weapons Company is a Gun Manufacturer serving Boise, Idaho and the surrounding area.',
  '[]',
  'enhanced'
);

-- Show results
SELECT 
  business_name,
  city,
  CASE 
    WHEN discovered_website IS NOT NULL THEN 'Has Website'
    ELSE 'No Website'
  END as website_status,
  CASE 
    WHEN discovered_phone IS NOT NULL THEN 'Has Phone'
    ELSE 'No Phone'
  END as phone_status,
  CASE 
    WHEN discovered_email IS NOT NULL THEN 'Has Email'
    ELSE 'No Email'
  END as email_status,
  discovery_status
FROM enhanced_business_data
ORDER BY business_name;

-- Summary statistics
SELECT 
  COUNT(*) as total_businesses,
  SUM(CASE WHEN discovered_website IS NOT NULL THEN 1 ELSE 0 END) as with_website,
  SUM(CASE WHEN discovered_phone IS NOT NULL THEN 1 ELSE 0 END) as with_phone,
  SUM(CASE WHEN discovered_email IS NOT NULL THEN 1 ELSE 0 END) as with_email,
  AVG(CASE WHEN discovered_services IS NOT NULL THEN json_array_length(discovered_services::json) ELSE 0 END) as avg_services
FROM enhanced_business_data;

COMMIT;

-- Note: This is a test table. In production, you would UPDATE the main businesses table
-- UPDATE businesses SET 
--   website = enhanced_business_data.discovered_website,
--   phone = enhanced_business_data.discovered_phone,
--   email = enhanced_business_data.discovered_email,
--   description = enhanced_business_data.enhanced_description
-- FROM enhanced_business_data 
-- WHERE businesses.slug = enhanced_business_data.slug;
