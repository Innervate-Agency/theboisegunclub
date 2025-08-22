#!/usr/bin/env node

/**
 * Unified CSV Processor for Treasure Valley Firearms Directory
 * Merges multiple county CSV files into a single classified dataset
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// File paths for all CSV sources
const CSV_SOURCES = [
  'docs/ada_county_gun_stores_comprehensive.csv',
  'docs/canyon_county_gun_stores_only.csv', 
  'docs/gem_county_gun_stores_only.csv',
  'docs/owyhee_county_gun_stores_only.csv',
  'docs/payette_county_gun_stores_only.csv',
  'docs/ada_county_clubs_ranges_schools_events.csv',
  'docs/canyon_county_clubs_ranges_schools_events.csv',
  'docs/gem_county_clubs_ranges_schools_events.csv',
  'docs/payette_county_clubs_ranges_schools_events.csv',
  'docs/treasure_valley_ffls.csv',
  'docs/ffl_candidates_top150.csv'
];

// Business classification system based on Type field
const BUSINESS_CLASSIFICATIONS = {
  // Primary Categories
  'Gun Store': { category: 'retail', tier: 2, priority: 'high' },
  'FFL Dealer': { category: 'retail', tier: 2, priority: 'high' },
  'Gunsmith': { category: 'services', tier: 2, priority: 'medium' },
  'Indoor Range': { category: 'ranges', tier: 1, priority: 'high' },
  'Outdoor Range': { category: 'ranges', tier: 1, priority: 'high' },
  'Public Shooting Range': { category: 'ranges', tier: 1, priority: 'high' },
  'Private Shooting Range': { category: 'ranges', tier: 2, priority: 'medium' },
  'Training': { category: 'training', tier: 1, priority: 'high' },
  'Firearm Training School': { category: 'training', tier: 1, priority: 'high' },
  
  // Secondary Categories  
  'Sporting Goods': { category: 'retail', tier: 3, priority: 'medium' },
  'Pawn': { category: 'retail', tier: 3, priority: 'low' },
  'Shop': { category: 'retail', tier: 3, priority: 'medium' },
  'Military Surplus': { category: 'retail', tier: 3, priority: 'medium' }
};

// Tier assignment logic (1=premium daily, 2=standard weekly, 3=basic monthly)
function assignBusinessTier(types, city, hasWebsite) {
  const typeArray = types.split(',').map(t => t.trim());
  
  // Get highest priority tier from types
  let tier = 3; // Default to basic
  typeArray.forEach(type => {
    const classification = BUSINESS_CLASSIFICATIONS[type];
    if (classification && classification.tier < tier) {
      tier = classification.tier;
    }
  });
  
  // Tier 1 cities get priority boost
  const tier1Cities = ['Boise', 'Meridian', 'Nampa', 'Caldwell'];
  if (tier1Cities.includes(city) && tier > 1) {
    tier = Math.max(1, tier - 1);
  }
  
  // Businesses with websites get slight priority boost
  if (hasWebsite && tier === 3) {
    tier = 2;
  }
  
  return tier;
}

// Generate unique business ID
function generateBusinessId(name, city, address) {
  const identifier = `${name}-${city}-${address}`.toLowerCase().replace(/[^a-z0-9]/g, '');
  return crypto.createHash('md5').update(identifier).digest('hex').substring(0, 8);
}

// Parse CSV file
function parseCSV(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
    
    return lines.slice(1).map(line => {
      const values = parseCSVLine(line);
      const record = {};
      headers.forEach((header, index) => {
        record[header] = values[index] || '';
      });
      return record;
    });
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return [];
  }
}

// Parse CSV line handling quoted fields
function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  
  return values.map(v => v.replace(/"/g, '').trim());
}

// Normalize business record
function normalizeRecord(record, source) {
  const hasWebsite = record.Website && record.Website !== 'N/A' && record.Website.length > 0;
  const tier = assignBusinessTier(record.Type || '', record.City || '', hasWebsite);
  
  return {
    id: generateBusinessId(record.Name, record.City, record.Address),
    name: record.Name || '',
    type: record.Type || '',
    category: getCategoryFromType(record.Type || ''),
    phone: record.Phone || '',
    address: record.Address || '',
    city: record.City || '',
    county: record.County || '',
    website: hasWebsite ? record.Website : null,
    verified: record.Verified === 'Yes',
    events: record.Events || null,
    tier: tier,
    refresh_frequency: tier === 1 ? 'daily' : tier === 2 ? 'weekly' : 'monthly',
    source_file: source,
    last_updated: new Date().toISOString()
  };
}

// Get primary category from business type
function getCategoryFromType(types) {
  const typeArray = types.split(',').map(t => t.trim());
  
  // Priority order for category assignment
  if (typeArray.some(t => t.includes('Range'))) return 'ranges';
  if (typeArray.some(t => t.includes('Training'))) return 'training';
  if (typeArray.some(t => t.includes('Gun Store') || t.includes('FFL'))) return 'retail';
  if (typeArray.some(t => t.includes('Gunsmith'))) return 'services';
  
  return 'retail'; // Default category
}

// Main processing function
function processAllCSVs() {
  console.log('🚀 Starting Unified CSV Processing...\n');
  
  const allBusinesses = [];
  const duplicateTracker = new Set();
  let stats = {
    total: 0,
    duplicates: 0,
    tier1: 0,
    tier2: 0,
    tier3: 0,
    byCategory: {}
  };
  
  // Process each CSV file
  CSV_SOURCES.forEach(source => {
    if (!fs.existsSync(source)) {
      console.log(`⚠️  Skipping missing file: ${source}`);
      return;
    }
    
    console.log(`📊 Processing: ${source}`);
    const records = parseCSV(source);
    let added = 0;
    
    records.forEach(record => {
      if (!record.Name) return;
      
      const normalized = normalizeRecord(record, source);
      const uniqueKey = `${normalized.name}-${normalized.city}-${normalized.address}`;
      
      if (duplicateTracker.has(uniqueKey)) {
        stats.duplicates++;
        return;
      }
      
      duplicateTracker.add(uniqueKey);
      allBusinesses.push(normalized);
      added++;
      
      // Update stats
      stats.total++;
      stats[`tier${normalized.tier}`]++;
      stats.byCategory[normalized.category] = (stats.byCategory[normalized.category] || 0) + 1;
    });
    
    console.log(`   ✅ Added ${added} businesses, skipped ${stats.duplicates} duplicates`);
  });
  
  // Generate output files
  const timestamp = new Date().toISOString().slice(0, 10);
  const outputFile = `docs/unified-business-directory-${timestamp}.csv`;
  const jsonFile = `docs/unified-business-directory-${timestamp}.json`;
  
  // Write CSV
  const csvHeader = 'id,name,type,category,phone,address,city,county,website,verified,events,tier,refresh_frequency,source_file,last_updated\n';
  const csvContent = csvHeader + allBusinesses.map(business => {
    return [
      business.id,
      `"${business.name}"`,
      `"${business.type}"`,
      business.category,
      business.phone,
      `"${business.address}"`,
      business.city,
      business.county,
      business.website || '',
      business.verified,
      business.events ? `"${business.events}"` : '',
      business.tier,
      business.refresh_frequency,
      business.source_file,
      business.last_updated
    ].join(',');
  }).join('\n');
  
  fs.writeFileSync(outputFile, csvContent);
  fs.writeFileSync(jsonFile, JSON.stringify(allBusinesses, null, 2));
  
  // Print summary
  console.log('\n📈 PROCESSING COMPLETE');
  console.log('=' .repeat(50));
  console.log(`📊 Total Businesses: ${stats.total}`);
  console.log(`🔄 Duplicates Removed: ${stats.duplicates}`);
  console.log(`🥇 Tier 1 (Daily): ${stats.tier1}`);
  console.log(`🥈 Tier 2 (Weekly): ${stats.tier2}`);
  console.log(`🥉 Tier 3 (Monthly): ${stats.tier3}`);
  console.log('\n📂 Category Breakdown:');
  Object.entries(stats.byCategory).forEach(([category, count]) => {
    console.log(`   ${category}: ${count}`);
  });
  console.log(`\n💾 Files Generated:`);
  console.log(`   📄 ${outputFile}`);
  console.log(`   📄 ${jsonFile}`);
  console.log('\n🎯 Ready for PostgreSQL import!');
}

// Run the processor
if (require.main === module) {
  processAllCSVs();
}

module.exports = { processAllCSVs, BUSINESS_CLASSIFICATIONS };