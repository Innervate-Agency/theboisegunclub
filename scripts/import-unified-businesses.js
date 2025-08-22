#!/usr/bin/env node

/**
 * Import Unified Business Directory to PostgreSQL
 * Handles deduplication and tier assignment
 */

const { Pool } = require('pg');
const fs = require('fs');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://bgc_dev:dev123@localhost/boise_gun_club_dev'
});

// Helper functions
function extractZipCode(address) {
  const zipMatch = address.match(/\b\d{5}(-\d{4})?\b/);
  return zipMatch ? zipMatch[0] : null;
}

function mapTierToSchema(numericTier) {
  switch (numericTier) {
    case 1: return 'gold';
    case 2: return 'silver'; 
    case 3: return 'copper';
    default: return 'free';
  }
}

/**
 * Parse CSV line handling quoted fields properly
 */
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
  
  return values.map(v => v.replace(/^"|"$/g, '').trim());
}

/**
 * Import businesses from unified CSV
 */
async function importBusinesses() {
  const csvFile = 'docs/unified-business-directory-2025-08-18.csv';
  
  if (!fs.existsSync(csvFile)) {
    console.error(`❌ CSV file not found: ${csvFile}`);
    console.log('💡 Run "node scripts/unified-csv-processor.js" first');
    process.exit(1);
  }

  console.log('🚀 Importing Unified Business Directory...\n');

  try {
    // Read and parse CSV
    const content = fs.readFileSync(csvFile, 'utf8');
    const lines = content.split('\n').filter(line => line.trim());
    const headers = parseCSVLine(lines[0]);
    
    console.log(`📊 Found ${lines.length - 1} businesses to import`);
    console.log(`📝 Headers: ${headers.join(', ')}\n`);

    // Clear existing data
    console.log('🗑️  Clearing existing business data...');
    await pool.query('DELETE FROM businesses');
    console.log('✅ Existing data cleared\n');

    // Prepare insert statement - mapping to existing schema
    const insertQuery = `
      INSERT INTO businesses (
        business_name, display_name, business_type, premise_street, 
        premise_city, premise_zip_code, voice_phone, website,
        is_verified, description, tier, refresh_frequency,
        data_source
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      ON CONFLICT (slug) DO UPDATE SET
        business_name = EXCLUDED.business_name,
        display_name = EXCLUDED.display_name,
        business_type = EXCLUDED.business_type,
        premise_street = EXCLUDED.premise_street,
        premise_city = EXCLUDED.premise_city,
        voice_phone = EXCLUDED.voice_phone,
        website = EXCLUDED.website,
        is_verified = EXCLUDED.is_verified,
        description = EXCLUDED.description,
        tier = EXCLUDED.tier,
        refresh_frequency = EXCLUDED.refresh_frequency,
        data_source = EXCLUDED.data_source,
        updated_at = NOW()
    `;

    let imported = 0;
    let errors = 0;
    const stats = { gold: 0, silver: 0, copper: 0, free: 0, byCategory: {} };

    // Process each business record
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      
      if (values.length < headers.length) {
        console.log(`⚠️  Skipping malformed line ${i}: ${lines[i]}`);
        continue;
      }

      try {
        // Generate slug from business name and city
        const generateSlug = (name, city) => {
          return `${name}-${city}`.toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
        };

        // Map CSV values to database schema
        const business = {
          business_name: values[1] || '',
          display_name: values[1] || '',
          business_type: values[2] || '',
          premise_street: values[5] || '',
          premise_city: values[6] || '',
          premise_zip_code: extractZipCode(values[5] || ''),
          voice_phone: values[4] || null,
          website: (values[8] && values[8] !== 'N/A') ? values[8] : null,
          is_verified: values[9] === 'true',
          description: values[10] || `${values[2]} in ${values[6]}`,
          tier: mapTierToSchema(parseInt(values[11]) || 3),
          refresh_frequency: values[12] || 'monthly',
          data_source: 'unified-csv-import',
          slug: generateSlug(values[1] || '', values[6] || '')
        };

        // Skip if missing essential data
        if (!business.business_name || !business.premise_city) {
          console.log(`⚠️  Skipping business with missing name/city: ${business.business_name}`);
          continue;
        }

        // Add slug to the insert query
        const insertQueryWithSlug = `
          INSERT INTO businesses (
            slug, business_name, display_name, business_type, premise_street, 
            premise_city, premise_zip_code, voice_phone, website,
            is_verified, description, tier, refresh_frequency,
            data_source
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
          ON CONFLICT (slug) DO UPDATE SET
            business_name = EXCLUDED.business_name,
            display_name = EXCLUDED.display_name,
            business_type = EXCLUDED.business_type,
            premise_street = EXCLUDED.premise_street,
            premise_city = EXCLUDED.premise_city,
            voice_phone = EXCLUDED.voice_phone,
            website = EXCLUDED.website,
            is_verified = EXCLUDED.is_verified,
            description = EXCLUDED.description,
            tier = EXCLUDED.tier,
            refresh_frequency = EXCLUDED.refresh_frequency,
            data_source = EXCLUDED.data_source,
            updated_at = NOW()
        `;

        // Insert business
        await pool.query(insertQueryWithSlug, [
          business.slug,
          business.business_name,
          business.display_name,
          business.business_type,
          business.premise_street,
          business.premise_city,
          business.premise_zip_code,
          business.voice_phone,
          business.website,
          business.is_verified,
          business.description,
          business.tier,
          business.refresh_frequency,
          business.data_source
        ]);

        imported++;
        stats[business.tier] = (stats[business.tier] || 0) + 1;
        stats.byCategory[values[3]] = (stats.byCategory[values[3]] || 0) + 1;

        if (imported % 50 === 0) {
          console.log(`📈 Imported ${imported} businesses...`);
        }

      } catch (error) {
        errors++;
        console.error(`❌ Error importing business ${values[1]}: ${error.message}`);
      }
    }

    // Print final stats
    console.log('\n🎉 IMPORT COMPLETE');
    console.log('=' .repeat(50));
    console.log(`✅ Successfully imported: ${imported}`);
    console.log(`❌ Errors: ${errors}`);
    console.log(`🥇 Gold Tier: ${stats.gold}`);
    console.log(`🥈 Silver Tier: ${stats.silver}`);
    console.log(`🥉 Copper Tier: ${stats.copper}`);
    console.log(`🆓 Free Tier: ${stats.free}`);
    console.log('\n📂 Category Distribution:');
    Object.entries(stats.byCategory).forEach(([category, count]) => {
      console.log(`   ${category}: ${count}`);
    });

    // Verify total count
    const countResult = await pool.query('SELECT COUNT(*) FROM businesses');
    console.log(`\n📊 Database now contains ${countResult.rows[0].count} businesses`);

    // Show tier distribution from database
    const tierResult = await pool.query(`
      SELECT tier, COUNT(*) as count 
      FROM businesses 
      GROUP BY tier 
      ORDER BY tier
    `);
    console.log('\n🎯 Serper API Usage Estimate:');
    tierResult.rows.forEach(row => {
      const frequency = row.tier === 1 ? 'daily' : row.tier === 2 ? 'weekly' : 'monthly';
      const monthlyUsage = row.tier === 1 ? row.count * 30 : row.tier === 2 ? row.count * 4 : row.count;
      console.log(`   Tier ${row.tier} (${frequency}): ${row.count} businesses = ${monthlyUsage} API calls/month`);
    });

    const totalUsage = tierResult.rows.reduce((total, row) => {
      const usage = row.tier === 1 ? row.count * 30 : row.tier === 2 ? row.count * 4 : row.count;
      return total + usage;
    }, 0);
    console.log(`   📊 Total estimated usage: ${totalUsage}/2500 API calls per month`);
    console.log(`   🎯 Usage efficiency: ${((totalUsage / 2500) * 100).toFixed(1)}%`);

  } catch (error) {
    console.error('💥 Import failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run import
if (require.main === module) {
  importBusinesses();
}

module.exports = { importBusinesses };