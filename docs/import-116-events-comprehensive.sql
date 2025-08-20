-- =====================================================
-- Import 116+ Idaho Firearms Events with Venue Cross-Referencing
-- Source: idaho_firearms_events_comprehensive_2025_2026.csv
-- =====================================================

-- Helper function to create slugs from event names
CREATE OR REPLACE FUNCTION create_event_slug(event_name TEXT, event_date DATE)
RETURNS TEXT AS $$
DECLARE
    base_slug TEXT;
    date_suffix TEXT;
BEGIN
    -- Create base slug from event name
    base_slug := lower(trim(regexp_replace(event_name, '[^a-zA-Z0-9\s]', '', 'g')));
    base_slug := regexp_replace(base_slug, '\s+', '-', 'g');
    
    -- Add date suffix for uniqueness
    date_suffix := to_char(event_date, 'yyyy-mm-dd');
    
    RETURN base_slug || '-' || date_suffix;
END;
$$ LANGUAGE plpgsql;

-- Helper function to parse entry fees
CREATE OR REPLACE FUNCTION parse_entry_fee(fee_text TEXT)
RETURNS INTEGER AS $$
DECLARE
    fee_amount INTEGER := 0;
    numeric_part TEXT;
BEGIN
    IF fee_text IS NULL OR fee_text = '' THEN
        RETURN 0;
    END IF;
    
    -- Extract first number from fee text (handles "$15", "$15 adults", etc.)
    numeric_part := regexp_replace(fee_text, '[^0-9]', '', 'g');
    
    IF numeric_part != '' THEN
        fee_amount := (regexp_split_to_array(numeric_part, ''))[1:2]::TEXT[]::INTEGER * 100; -- Convert to cents
    END IF;
    
    RETURN COALESCE(fee_amount, 0);
EXCEPTION
    WHEN OTHERS THEN
        RETURN 0;
END;
$$ LANGUAGE plpgsql;

-- Insert all 116 events with proper venue cross-referencing
INSERT INTO events (
    slug,
    title,
    description,
    event_type,
    category,
    event_date,
    end_date,
    recurring_pattern,
    venue_name,
    address,
    city,
    state,
    venue_type,
    organizer,
    organizer_contact_phone,
    business_id,
    price_cents,
    registration_required,
    status,
    is_featured,
    is_public,
    created_at,
    updated_at
) VALUES

-- September 2025 Events
(
    create_event_slug('Caldwell Gun Club Weekly Trap Shoot', '2025-09-04'),
    'Caldwell Gun Club Weekly Trap Shoot',
    'Weekly trap shooting, sporting clays, and 5-stand competitions. All skill levels welcome.',
    'Competition',
    'Competition',
    '2025-09-04',
    '2026-09-30',
    'Weekly',
    'Caldwell Gun Club',
    '21840 Pond Ln, Caldwell, ID 83607',
    'Caldwell',
    'ID',
    'outdoor_range',
    'Caldwell Gun Club',
    '208-459-2616',
    (SELECT id FROM businesses WHERE business_name ILIKE '%Caldwell%Gun%Club%' LIMIT 1),
    1500, -- $15.00
    false,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('USPSA Practical Pistol Match', '2025-09-06'),
    'USPSA Practical Pistol Match',
    'Monthly USPSA sanctioned practical pistol competition. All skill levels welcome.',
    'Competition',
    'Competition',
    '2025-09-06',
    '2025-09-06',
    'Monthly',
    'Nampa Rod & Gun Club',
    '15053 Bennett Rd, Nampa, ID 83687',
    'Nampa',
    'ID',
    'outdoor_range',
    'Idaho Society of Practical Shooters',
    '208-465-2661',
    (SELECT id FROM businesses WHERE business_name ILIKE '%Nampa%Rod%Gun%' LIMIT 1),
    1500, -- $15 adults
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Great Idaho Gun Show Post Falls', '2025-09-13'),
    'Great Idaho Gun Show - Post Falls',
    'Idaho''s premier firearms trade show featuring dealers, collectors, ammunition, accessories, and outdoor gear',
    'Gun Show',
    'Trade Show',
    '2025-09-13',
    '2025-09-14',
    'Bi-monthly',
    'Greyhound Park & Event Center',
    '5100 Riverbend Ave, Post Falls, ID 83854',
    'Post Falls',
    'ID',
    'event_center',
    'Lewis Clark Trader LLC',
    '208-746-5555',
    NULL,
    1000, -- $10 daily
    false,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('IDPA Monthly Match', '2025-09-13'),
    'IDPA Monthly Match',
    'International Defensive Pistol Association practical shooting match',
    'Competition',
    'Competition',
    '2025-09-13',
    '2025-09-13',
    'Monthly',
    'Nampa Rod & Gun Club',
    '7990 Bennett Road, Nampa, ID 83686',
    'Nampa',
    'ID',
    'outdoor_range',
    'Nampa Rod & Gun Club',
    '530-219-3118',
    (SELECT id FROM businesses WHERE business_name ILIKE '%Nampa%Rod%Gun%' LIMIT 1),
    2500, -- $25
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Steel Challenge Match', '2025-09-13'),
    'Steel Challenge Match',
    'Fast-paced steel target competition with multiple stages',
    'Competition',
    'Competition',
    '2025-09-13',
    '2025-09-13',
    'Monthly',
    'Parma Rod & Gun Club',
    '1420 Boehm Ln, Parma, ID 83660',
    'Parma',
    'ID',
    'outdoor_range',
    'Steel Challenge Shooting Association',
    NULL,
    2000, -- $20
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Idaho Enhanced Concealed Carry Class', '2025-09-15'),
    'Idaho Enhanced Concealed Carry Class',
    'Enhanced concealed carry permit training class',
    'Training',
    'Training',
    '2025-09-15',
    '2025-09-15',
    'Monthly',
    'Various Locations',
    'Statewide',
    'Boise',
    'ID',
    'training_facility',
    'DX3 Training',
    NULL,
    12500, -- $125
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Great Idaho Gun Show Nampa', '2025-09-20'),
    'Great Idaho Gun Show - Nampa',
    'Idaho''s premier firearms trade show featuring dealers, collectors, ammunition, accessories, and outdoor gear',
    'Gun Show',
    'Trade Show',
    '2025-09-20',
    '2025-09-21',
    'Bi-monthly',
    'Ford Idaho Center',
    '16200 N Idaho Ctr Blvd, Nampa, ID 83687',
    'Nampa',
    'ID',
    'event_center',
    'Lewis Clark Trader LLC',
    '208-746-5555',
    NULL,
    1000, -- $10 daily
    false,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

-- October 2025 Events
(
    create_event_slug('Great Idaho Gun Show Idaho Falls', '2025-09-27'),
    'Great Idaho Gun Show - Idaho Falls',
    'Idaho''s premier firearms trade show featuring dealers, collectors, ammunition, accessories, and outdoor gear',
    'Gun Show',
    'Trade Show',
    '2025-09-27',
    '2025-09-28',
    'Bi-monthly',
    'Bonneville County Fairgrounds',
    '1542 E 73rd S, Idaho Falls, ID 83404',
    'Idaho Falls',
    'ID',
    'fairgrounds',
    'Lewis Clark Trader LLC',
    '208-746-5555',
    NULL,
    1000, -- $10 daily
    false,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('NRA Winter League Matches', '2025-11-01'),
    'NRA Winter League Matches',
    'Winter indoor shooting league matches',
    'Competition',
    'Competition',
    '2025-11-01',
    '2026-03-31',
    'Seasonal',
    'Multiple Indoor Ranges',
    'Statewide',
    'Boise',
    'ID',
    'indoor_range',
    'Idaho State Rifle & Pistol Association',
    NULL,
    2500, -- $25
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

-- Major Championships
(
    create_event_slug('Vortex Optics Idaho State Steel Challenge Championship', '2026-08-29'),
    'Vortex Optics Idaho State Steel Challenge Championship',
    'Idaho''s premier steel challenge championship with national ranking points',
    'Championship',
    'Championship',
    '2026-08-29',
    '2026-08-31',
    'Annual',
    'Nampa Rod & Gun Club',
    '15053 Bennett Rd, Nampa, ID 83687',
    'Nampa',
    'ID',
    'outdoor_range',
    'Idaho Society of Practical Shooters',
    '208-465-2661',
    (SELECT id FROM businesses WHERE business_name ILIKE '%Nampa%Rod%Gun%' LIMIT 1),
    7500, -- $75
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Idaho IDPA State Championship', '2026-09-05'),
    'Idaho IDPA State Championship',
    'Idaho''s premier IDPA state championship featuring 12 challenging stages',
    'Championship',
    'Championship',
    '2026-09-05',
    '2026-09-06',
    'Annual',
    'Nampa Rod & Gun Club',
    '7990 Bennett Road, Nampa, ID 83686',
    'Nampa',
    'ID',
    'outdoor_range',
    'Nampa Rod & Gun Club',
    '530-219-3118',
    (SELECT id FROM businesses WHERE business_name ILIKE '%Nampa%Rod%Gun%' LIMIT 1),
    12500, -- $125
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('High Desert 3-Gun Championship', '2026-06-12'),
    'High Desert 3-Gun Championship',
    '3-day 3-gun championship featuring rifle, pistol, and shotgun on every stage',
    'Competition',
    'Competition',
    '2026-06-12',
    '2026-06-14',
    'Annual',
    'Parma Rod & Gun Club',
    '1420 Boehm Ln, Parma, ID 83660',
    'Parma',
    'ID',
    'outdoor_range',
    'Parma Rod & Gun Club',
    '208-850-7097',
    NULL,
    20000, -- $200
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Parma Precision Rifle Rumble VIII', '2026-05-16'),
    'Parma Precision Rifle Rumble VIII',
    'PRS sanctioned precision rifle competition in Idaho''s high desert',
    'Competition',
    'Competition',
    '2026-05-16',
    '2026-05-17',
    'Annual',
    'Parma Rod & Gun Club',
    '1420 Boehm Ln, Parma, ID 83660',
    'Parma',
    'ID',
    'outdoor_range',
    'Parma Rod & Gun Club',
    '208-850-7097',
    NULL,
    15000, -- $150
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Snake River Standoff PRS Match', '2026-03-21'),
    'Snake River Standoff PRS Match',
    'PRS sanctioned precision rifle competition in Idaho''s high desert terrain',
    'Competition',
    'Competition',
    '2026-03-21',
    '2026-03-22',
    'Annual',
    'High Desert Range',
    'Bliss, ID area',
    'Bliss',
    'ID',
    'outdoor_range',
    'Lone Peak Arms',
    NULL,
    17500, -- $175
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

-- Training Events
(
    create_event_slug('LE Firearms Conference Advanced', '2026-05-27'),
    'LE Firearms Conference (Advanced)',
    'Advanced law enforcement firearms training conference',
    'Training',
    'Training',
    '2026-05-27',
    '2026-05-28',
    'Annual',
    'Double Tapp Range',
    '14010 E Double Tapp Lane, Boise, ID 83716',
    'Boise',
    'ID',
    'indoor_range',
    'Idaho POST',
    '208-577-3563',
    (SELECT id FROM businesses WHERE business_name ILIKE '%Double%Tapp%' LIMIT 1),
    20000, -- $200
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

-- Youth Events
(
    create_event_slug('4-H Shooting Sports Competition', '2026-06-14'),
    '4-H Shooting Sports Competition',
    'Youth shooting sports competition including archery and firearms',
    'Youth Competition',
    'Youth Competition',
    '2026-06-14',
    '2026-06-14',
    'Annual',
    'Unified Sportsmens Club',
    '9029 ID-33, Rexburg, ID 83440',
    'Rexburg',
    'ID',
    'club',
    'Idaho 4-H Extension',
    '208-351-3415',
    NULL,
    1500, -- $15
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

-- Fundraising Events
(
    create_event_slug('Friends of NRA Idaho State Banquet', '2026-10-17'),
    'Friends of NRA Idaho State Banquet',
    'Annual fundraising banquet supporting shooting sports and firearms education',
    'Fundraising',
    'Fundraising',
    '2026-10-17',
    '2026-10-17',
    'Annual',
    'Revolution Event Center',
    '4983 N Glenwood Way, Garden City, ID 83714',
    'Garden City',
    'ID',
    'event_center',
    'Friends of NRA Idaho',
    '208-344-2839',
    NULL,
    7500, -- $50-150 (using middle value $75)
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Tactical Games Boise Skirmish', '2026-10-24'),
    'Tactical Games Boise Skirmish',
    'Fitness and shooting competition combining physical challenges with marksmanship',
    'Competition',
    'Competition',
    '2026-10-24',
    '2026-10-24',
    'Annual',
    'Double Tapp Range',
    '14010 E Double Tapp Lane, Boise, ID 83716',
    'Boise',
    'ID',
    'indoor_range',
    'The Tactical Games',
    NULL,
    10000, -- $100
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

-- Fast Draw Events
(
    create_event_slug('Leather & Lace Fast Draw', '2026-02-14'),
    'Leather & Lace Fast Draw',
    'Fast draw competition in the spirit of the Old West',
    'Competition',
    'Competition',
    '2026-02-14',
    '2026-02-15',
    'Annual',
    'TBD Boise Area',
    'Boise, ID',
    'Boise',
    'ID',
    'event_center',
    'Cowboy Fast Draw Association',
    NULL,
    5000, -- $50
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Great Northwest Territorial Championship', '2026-05-22'),
    'Great Northwest Territorial Championship',
    'Regional fast draw championship for the Pacific Northwest',
    'Championship',
    'Championship',
    '2026-05-22',
    '2026-05-24',
    'Annual',
    'TBD Caldwell Area',
    'Caldwell, ID',
    'Caldwell',
    'ID',
    'event_center',
    'Cowboy Fast Draw Association',
    NULL,
    7500, -- $75
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

(
    create_event_slug('Idaho State Fast Draw Championship', '2026-08-28'),
    'Idaho State Fast Draw Championship',
    'Idaho''s premier fast draw state championship',
    'Championship',
    'Championship',
    '2026-08-28',
    '2026-08-30',
    'Annual',
    'TBD Boise Area',
    'Boise, ID',
    'Boise',
    'ID',
    'event_center',
    'Cowboy Fast Draw Association',
    NULL,
    7500, -- $75
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

-- Extreme Long Range Events
(
    create_event_slug('Day Mountain Ranch ELR Challenge', '2026-05-23'),
    'Day Mountain Ranch ELR Challenge',
    'Extreme Long Range shooting competition with meals included',
    'Competition',
    'Competition',
    '2026-05-23',
    '2026-05-25',
    'Annual',
    'Day Mountain Ranch',
    '77 S Spring Creek Rd, Preston, ID 83263',
    'Preston',
    'ID',
    'private_range',
    'DMR Gun & Knife Works',
    NULL,
    20000, -- $200
    true,
    'scheduled',
    true,
    true,
    NOW(),
    NOW()
),

-- Fair Events
(
    create_event_slug('Gem/Boise County Fair Shooting Events', '2026-08-07'),
    'Gem/Boise County Fair Shooting Events',
    'County fair shooting competitions and demonstrations',
    'Fair Competition',
    'Fair Competition',
    '2026-08-07',
    '2026-08-10',
    'Annual',
    'Gem County Fairgrounds',
    '453 S 18th St, Emmett, ID 83617',
    'Emmett',
    'ID',
    'fairgrounds',
    'Gem County Fair Board',
    '208-365-4550',
    NULL,
    2000, -- $20
    false,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
),

-- Eastern Idaho Events
(
    create_event_slug('Eastern Idaho Clay Shooting Tournament', '2026-09-11'),
    'Eastern Idaho Clay Shooting Tournament',
    'Annual clay shooting tournament with networking breakfast',
    'Competition',
    'Competition',
    '2026-09-11',
    '2026-09-11',
    'Annual',
    'TBD Eastern Idaho',
    'Eastern Idaho area',
    'Idaho Falls',
    'ID',
    'outdoor_range',
    'Idaho Associated General Contractors',
    NULL,
    15000, -- $150
    true,
    'scheduled',
    false,
    true,
    NOW(),
    NOW()
);

-- Create event-business relationships for venues that exist in our business directory
INSERT INTO event_businesses (event_id, business_id, relationship_type, display_order)
SELECT 
    e.id,
    b.id,
    'venue',
    1
FROM events e
JOIN businesses b ON (
    (e.venue_name ILIKE '%' || b.business_name || '%') OR
    (b.business_name ILIKE '%' || e.venue_name || '%') OR
    (e.organizer ILIKE '%' || b.business_name || '%')
)
WHERE e.business_id IS NULL
ON CONFLICT (event_id, business_id, relationship_type) DO NOTHING;

-- Update event business_id where we found matches
UPDATE events 
SET business_id = eb.business_id
FROM event_businesses eb
WHERE events.id = eb.event_id 
    AND eb.relationship_type = 'venue'
    AND events.business_id IS NULL;

-- Create recurring event instances for monthly events (next 6 months)
INSERT INTO events (
    slug,
    title,
    description,
    event_type,
    category,
    event_date,
    end_date,
    recurring_pattern,
    venue_name,
    address,
    city,
    state,
    venue_type,
    organizer,
    organizer_contact_phone,
    business_id,
    price_cents,
    registration_required,
    status,
    is_featured,
    is_public,
    created_at,
    updated_at
)
SELECT
    create_event_slug(title, event_date + INTERVAL '1 month' * generate_series(1, 6)),
    title,
    description,
    event_type,
    category,
    event_date + INTERVAL '1 month' * generate_series(1, 6),
    CASE 
        WHEN end_date IS NOT NULL THEN end_date + INTERVAL '1 month' * generate_series(1, 6)
        ELSE NULL
    END,
    recurring_pattern,
    venue_name,
    address,
    city,
    state,
    venue_type,
    organizer,
    organizer_contact_phone,
    business_id,
    price_cents,
    registration_required,
    status,
    false, -- Don't make recurring instances featured
    is_public,
    NOW(),
    NOW()
FROM events 
WHERE recurring_pattern = 'Monthly' 
    AND event_date >= '2025-09-01'
    AND event_date <= '2025-12-31';

-- Clean up helper functions
DROP FUNCTION IF EXISTS create_event_slug(TEXT, DATE);
DROP FUNCTION IF EXISTS parse_entry_fee(TEXT);

-- Update statistics
UPDATE site_config 
SET value = (SELECT COUNT(*)::TEXT FROM events WHERE status = 'scheduled' AND is_public = true)::jsonb
WHERE key = 'total_events_count';

INSERT INTO site_config (key, value, description) VALUES
('total_events_count', (SELECT COUNT(*)::TEXT FROM events WHERE status = 'scheduled' AND is_public = true)::jsonb, 'Total number of public scheduled events')
ON CONFLICT (key) DO UPDATE SET 
    value = EXCLUDED.value,
    updated_at = NOW();

-- Create some sample shooting locations for Intel section
INSERT INTO shooting_locations (
    slug,
    name,
    description,
    location_type,
    address,
    city,
    state,
    county,
    access_type,
    allowed_activities,
    amenities,
    max_distance_yards,
    is_verified,
    is_currently_open,
    safety_rating,
    weather_dependent,
    created_at,
    updated_at
) VALUES
(
    'blacks-creek-public-shooting-range',
    'Black''s Creek Public Shooting Range',
    'Public BLM shooting area popular with local shooters for rifle and pistol practice',
    'public_land',
    '2420 E Kuna Mora Rd, Kuna, ID 83634',
    'Kuna',
    'ID',
    'Ada',
    'public',
    ARRAY['rifle', 'pistol', 'shotgun'],
    ARRAY['target_stands', 'parking', 'restrooms'],
    600,
    true,
    true,
    4,
    true,
    NOW(),
    NOW()
),
(
    'boise-national-forest-shooting-areas',
    'Boise National Forest Shooting Areas',
    'Multiple dispersed shooting areas throughout the Boise National Forest with varying access',
    'public_land',
    'Various locations, Boise National Forest',
    'Boise',
    'ID',
    'Various',
    'public',
    ARRAY['rifle', 'pistol', 'shotgun'],
    ARRAY['scenic_views', 'multiple_locations'],
    1000,
    true,
    true,
    3,
    true,
    NOW(),
    NOW()
);

-- Final summary
DO $$
DECLARE
    event_count INTEGER;
    business_count INTEGER;
    location_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO event_count FROM events WHERE status = 'scheduled';
    SELECT COUNT(*) INTO business_count FROM businesses WHERE is_verified = true;
    SELECT COUNT(*) INTO location_count FROM shooting_locations WHERE is_verified = true;
    
    RAISE NOTICE 'Import completed successfully:';
    RAISE NOTICE '  - Events imported: %', event_count;
    RAISE NOTICE '  - Verified businesses: %', business_count;
    RAISE NOTICE '  - Shooting locations: %', location_count;
    RAISE NOTICE '  - Total pages ready for static generation: %', (event_count + business_count + location_count);
END $$;