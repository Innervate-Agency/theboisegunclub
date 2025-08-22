#!/usr/bin/env node

/**
 * REAL Serper API Business Discovery Test
 */

const fs = require('fs').promises;
const https = require('https');
const http = require('http');

class RealSerperTest {
  constructor() {
    this.serperApiKey = process.env.SERPER_API_KEY;
    this.results = [];
    this.progress = { processed: 0, enhanced: 0, failed: 0, apiCalls: 0 };
    
    if (!this.serperApiKey) {
      throw new Error('SERPER_API_KEY environment variable is required');
    }
    console.log('🔑 API Key found!');
  }

  // Make actual Serper API call
  async searchWithSerper(query) {
    const postData = JSON.stringify({ q: query, num: 5 });
    
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'google.serper.dev',
        port: 443,
        path: '/search',
        method: 'POST',
        headers: {
          'X-API-KEY': this.serperApiKey,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            const result = JSON.parse(data);
            resolve(result);
          } catch (error) {
            reject(new Error(`Failed to parse API response: ${error.message}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(new Error(`API request failed: ${error.message}`));
      });

      req.write(postData);
      req.end();
    });
  }

  // Find business website using real API
  async findBusinessWebsite(business) {
    console.log(`🔍 SEARCHING: ${business.businessName} ${business.city} Idaho`);
    
    try {
      const searchQuery = `"${business.businessName}" ${business.city} Idaho website`;
      console.log(`   🔎 Query: ${searchQuery}`);
      
      // REAL API CALL!
      const searchResults = await this.searchWithSerper(searchQuery);
      this.progress.apiCalls++;
      
      console.log(`   📊 Got ${searchResults.organic?.length || 0} results`);
      
      if (!searchResults.organic || searchResults.organic.length === 0) {
        console.log(`   ❌ No results`);
        return null;
      }
      
      // Show first few results
      for (let i = 0; i < Math.min(searchResults.organic.length, 3); i++) {
        const result = searchResults.organic[i];
        console.log(`   ${i+1}. ${result.title}`);
        console.log(`      🔗 ${result.link}`);
        
        // Skip directories
        const directoryPatterns = [
          'facebook.com', 'yelp.com', 'yellowpages.com', 'atf.gov',
          'gundealer.info', 'fflgundealers.net'
        ];
        
        if (directoryPatterns.some(pattern => result.link.toLowerCase().includes(pattern))) {
          console.log(`      ⏭️  Skipping directory site`);
          continue;
        }
        
        // Check if it looks like business website
        const businessWords = business.businessName.toLowerCase().split(/\s+/);
        const url = result.link.toLowerCase();
        const title = result.title.toLowerCase();
        
        const wordsInUrl = businessWords.filter(word => url.includes(word)).length;
        const wordsInTitle = businessWords.filter(word => title.includes(word)).length;
        
        if (wordsInUrl > 0 || wordsInTitle > 0) {
          console.log(`      ✅ FOUND business website!`);
          return result.link;
        }
      }
      
      console.log(`   ❌ No business website in results`);
      return null;
      
    } catch (error) {
      console.log(`   ❌ Search error: ${error.message}`);
      throw error;
    }
  }

  // Load test businesses
  async loadTestBusinesses() {
    const content = await fs.readFile('./src/lib/generated-ffl-data.ts', 'utf8');
    const businessMatches = content.match(/{[^}]*"slug"[^}]*}/g);
    const businesses = [];
    
    if (businessMatches) {
      for (let i = 0; i < businessMatches.length && businesses.length < 3; i++) {
        const match = businessMatches[i];
        
        const slug = match.match(/"slug":\s*"([^"]+)"/)?.[1];
        const name = match.match(/"businessName":\s*"([^"]+)"/)?.[1];
        const city = match.match(/"city":\s*"([^"]+)"/)?.[1];
        const type = match.match(/"businessType":\s*"([^"]+)"/)?.[1];
        const website = match.match(/"website":\s*"([^"]*)"/)?.[1];
        
        if (slug && name && (!website || website.trim() === '')) {
          businesses.push({
            slug, businessName: name, city: city || 'Unknown',
            businessType: type || 'Business', website: website || ''
          });
          
          if (businesses.length >= 3) break;
        }
      }
    }
    
    return businesses;
  }

  // Main test execution
  async run() {
    console.log('🚀 REAL SERPER API TEST');
    console.log('🔥 Making ACTUAL API calls!');
    console.log('💰 Using real API credits');
    console.log('=' .repeat(50));
    
    try {
      const businesses = await this.loadTestBusinesses();
      console.log(`📋 Testing ${businesses.length} businesses\n`);
      
      for (const business of businesses) {
        console.log(`🏪 ${business.businessName} (${business.businessType})`);
        
        const website = await this.findBusinessWebsite(business);
        
        this.results.push({
          ...business,
          discovered_website: website,
          discovery_status: website ? 'found' : 'not_found'
        });
        
        this.progress.processed++;
        if (website) this.progress.enhanced++;
        
        // Rate limit
        if (this.progress.processed < businesses.length) {
          console.log(`   ⏸️  Waiting 3 seconds...\n`);
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
      
      // Summary
      console.log('\n🎯 REAL API TEST COMPLETE!');
      console.log('=' .repeat(40));
      console.log(`📊 Results:`);
      console.log(`   - Businesses tested: ${this.progress.processed}`);
      console.log(`   - Websites found: ${this.progress.enhanced}`);
      console.log(`   - Success rate: ${((this.progress.enhanced / this.progress.processed) * 100).toFixed(1)}%`);
      console.log(`   - API calls used: ${this.progress.apiCalls}`);
      
      // Save results
      await fs.mkdir('./scripts/real-api-results', { recursive: true });
      await fs.writeFile('./scripts/real-api-results/results.json', JSON.stringify(this.results, null, 2));
      
      console.log('\n📁 Results saved to: ./scripts/real-api-results/results.json');
      console.log('🔥 THIS WAS REAL - actual API calls made!');
      
      return this.results;
      
    } catch (error) {
      console.error('❌ Test failed:', error.message);
      throw error;
    }
  }
}

// Run test
if (require.main === module) {
  const test = new RealSerperTest();
  test.run().catch(console.error);
}

module.exports = { RealSerperTest };
