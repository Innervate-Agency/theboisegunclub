#!/usr/bin/env node

/**
 * Test Serper API Integration
 * Sample a few businesses and test the API enrichment
 */

require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');

// Import the Serper service (we'll need to make it work in Node.js)
class SerperService {
  constructor() {
    this.apiKey = process.env.SERPER_API_KEY;
    this.baseUrl = 'https://google.serper.dev';
    this.rateLimitDelay = 200; // Be gentle during testing
  }

  async searchBusiness(businessName, city, state = 'Idaho') {
    try {
      await this.delay(this.rateLimitDelay);
      
      const query = `"${businessName}" ${city} ${state} hours reviews rating`;
      console.log(`🔍 Searching: ${query}`);
      
      const response = await fetch(`${this.baseUrl}/places`, {
        method: 'POST',
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: query,
          location: `${city}, ${state}`,
          hl: 'en',
          gl: 'us',
        }),
      });

      if (!response.ok) {
        console.error(`❌ Serper API error: ${response.status} ${response.statusText}`);
        return null;
      }

      const data = await response.json();
      
      if (!data.places || data.places.length === 0) {
        console.log(`🚫 No results found`);
        return null;
      }

      const place = data.places[0];
      console.log(`✅ Found: ${place.title} | Rating: ${place.rating} | Reviews: ${place.reviews}`);
      
      return {
        rating: place.rating,
        reviewCount: place.reviews,
        hours: place.hours,
        imageUrls: place.imageUrl ? [place.imageUrl] : [],
        placeId: place.placeId,
        title: place.title,
        address: place.address
      };

    } catch (error) {
      console.error('💥 Serper API error:', error.message);
      return null;
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

async function testSerperIntegration() {
  console.log('🧪 Testing Serper API Integration\n');
  
  if (!process.env.SERPER_API_KEY) {
    console.error('❌ SERPER_API_KEY not found in environment');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://bgc_dev:dev123@localhost/boise_gun_club_dev'
  });

  const serper = new SerperService();

  try {
    // Get a sample of businesses for testing
    const sampleQuery = `
      SELECT business_name, premise_city, business_type, tier 
      FROM businesses 
      WHERE premise_city IN ('Boise', 'Nampa', 'Meridian') 
      AND tier = 'gold'
      ORDER BY RANDOM() 
      LIMIT 5
    `;
    
    const result = await pool.query(sampleQuery);
    console.log(`📊 Testing with ${result.rows.length} sample businesses\n`);

    let successful = 0;
    let failed = 0;

    for (const business of result.rows) {
      console.log(`\n🏢 Testing: ${business.business_name} in ${business.premise_city}`);
      console.log(`   Type: ${business.business_type} | Tier: ${business.tier}`);
      
      const enrichedData = await serper.searchBusiness(
        business.business_name, 
        business.premise_city
      );
      
      if (enrichedData) {
        successful++;
        console.log(`   📍 Address: ${enrichedData.address}`);
        if (enrichedData.hours) {
          console.log(`   🕐 Hours available: ${Object.keys(enrichedData.hours).length} days`);
        }
        if (enrichedData.imageUrls.length > 0) {
          console.log(`   📸 Images: ${enrichedData.imageUrls.length}`);
        }
      } else {
        failed++;
      }
    }

    console.log('\n📈 TEST RESULTS');
    console.log('=' .repeat(40));
    console.log(`✅ Successful enrichments: ${successful}/${result.rows.length}`);
    console.log(`❌ Failed enrichments: ${failed}/${result.rows.length}`);
    console.log(`📊 Success rate: ${((successful / result.rows.length) * 100).toFixed(1)}%`);
    
    if (successful > 0) {
      console.log('\n🎉 Serper API integration is working!');
      console.log('💡 Ready to implement batch enrichment job');
    } else {
      console.log('\n⚠️  No successful enrichments. Check API key and queries.');
    }

  } catch (error) {
    console.error('💥 Test failed:', error);
  } finally {
    await pool.end();
  }
}

// Run the test
if (require.main === module) {
  testSerperIntegration();
}

module.exports = { testSerperIntegration };