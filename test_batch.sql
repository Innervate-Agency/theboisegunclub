-- TEST BATCH SQL
-- 5 businesses for localhost:3000 testing

BEGIN;

INSERT INTO businesses (slug, business_name, display_name, business_type, website, tier, is_verified, is_active, created_at, updated_at) VALUES 
('1199-tactical-llc', '1199 TACTICAL LLC', '1199 TACTICAL LLC', 'Firearms Business', 'https://www.ffls.com/ffl/982001016f03864/1199-tactical-llc', 'premium', true, true, NOW(), NOW()),
('1791-precision-armory', '1791 PRECISION ARMORY', '1791 PRECISION ARMORY', 'Firearms Business', 'https://www.ffls.com/ffl/982027015j05421/randazzo-joseph-anthony', 'premium', true, true, NOW(), NOW()),
('20-20-sporting-services', '20 / 20 SPORTING SERVICES', '20 / 20 SPORTING SERVICES', 'Firearms Business', 'https://www.ffls.com/ffl/982001015k04927/20-20-sporting-services-llc', 'premium', true, true, NOW(), NOW()),
('208-laser-engraving', '208 LASER ENGRAVING', '208 LASER ENGRAVING', 'Firearms Business', 'https://208laserengraving.com/', 'premium', true, true, NOW(), NOW()),
('208-precision', '208 PRECISION', '208 PRECISION', 'Firearms Business', 'https://www.mapquest.com/us/idaho/208-precision-756407', 'premium', true, true, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET 
    website = EXCLUDED.website,
    updated_at = NOW();

COMMIT;

-- Test these URLs after running:
-- localhost:3000/directory/1199-tactical-llc
-- localhost:3000/directory/1791-precision-armory  
-- localhost:3000/directory/20-20-sporting-services
-- localhost:3000/directory/208-laser-engraving
-- localhost:3000/directory/208-precision
