-- Enhanced Business Discovery v2 Results
-- Generated: 2025-08-21T14:29:59.904Z
-- Total discoveries: 5

BEGIN;

-- Update Al's Sporting Goods (Caldwell)
UPDATE businesses SET
  website = 'https://www.als.com/?srsltid=AfmBOorVZ5mGc83Jr0-sE8LBFW1NMFMv2G1Mk662SlK8QL5FNrJyowk0',
  voice_phone = '3517137281',
  services = ARRAY['range','retail'],
  community_score = 3,
  is_ffl = false,
  has_training = false,
  has_range = true,
  updated_at = NOW(),
  business_category = 'Retail Store',
  has_events = true
WHERE business_name = 'Al''s Sporting Goods'
  AND premise_city = 'Caldwell';

-- Update Rifle Guru (Nampa)
UPDATE businesses SET
  website = 'https://www.rifleguru.net/about/',
  voice_phone = '2084841791',
  email = 'jeff@rifleguru.net',
  services = ARRAY['training','range','retail','transfers'],
  community_score = 6,
  is_ffl = false,
  has_training = true,
  has_range = true,
  updated_at = NOW(),
  business_category = 'Multi-Service',
  has_events = true
WHERE business_name = 'Rifle Guru'
  AND premise_city = 'Nampa';

-- Update Homestead Firearms (Meridian)
UPDATE businesses SET
  website = 'https://homesteadparts.com/shop/meriden-model-10-rifle-c-256_257.html',
  services = ARRAY['ffl','gunsmith','retail'],
  community_score = 3,
  is_ffl = true,
  has_training = false,
  has_range = false,
  updated_at = NOW(),
  business_category = 'Retail Store',
  has_events = true
WHERE business_name = 'Homestead Firearms'
  AND premise_city = 'Meridian';

-- Update Impact Guns (Boise)
UPDATE businesses SET
  website = 'https://www.impactguns.com/',
  voice_phone = '586464457',
  email = 'support@impactguns8091.zendesk.com',
  services = ARRAY['ffl','gunsmith','training','range','retail','transfers'],
  community_score = 6,
  is_ffl = true,
  has_training = true,
  has_range = true,
  updated_at = NOW(),
  business_category = 'Retail Store',
  has_events = true
WHERE business_name = 'Impact Guns'
  AND premise_city = 'Boise';

-- Update Tactical Solutions (Boise)
UPDATE businesses SET
  website = 'https://tac-skills.com/training/',
  voice_phone = '755735953',
  email = 'cropped-Best-Tac-Skills-White@3x.png',
  services = ARRAY['training','range','retail'],
  community_score = 4,
  is_ffl = false,
  has_training = true,
  has_range = true,
  updated_at = NOW(),
  business_category = 'Multi-Service',
  has_events = true
WHERE business_name = 'Tactical Solutions'
  AND premise_city = 'Boise';

COMMIT;
