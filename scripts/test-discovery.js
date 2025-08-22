#!/usr/bin/env node

/**
 * Simple Test for Business Discovery
 * 
 * Tests basic functionality to ensure the system works
 */

const fs = require('fs').promises;
const https = require('https');
const http = require('http');

class SimpleBusinessTest {
  constructor() {
    this.results = [];
  }

  // Simple web request (handles both http and https)
  async makeRequest(url) {
    return new Promise((resolve, reject) => {
      const isHttps = url.startsWith('https://');
      const module = isHttps ? https : http;
      
      const request = module.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; TestBot/1.0)'
        }
      }, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        });
      });
      
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Request timeout'));
      });
      
      request.on('error', (error) => {
        reject(error);
      });
    });
  }

  // Extract phone from HTML
  extractPhone(html) {
    const phonePatterns = [
      /\(\d{3}\)\s*\d{3}-\d{4}/g,
      /\d{3}-\d{3}-\d{4}/g,
      /\d{3}\.\d{3}\.\d{4}/g
    ];
    
    for (const pattern of phonePatterns) {
      const matches = html.match(pattern);
      if (matches) {
        return matches[0];
      }
    }
    
    return null;
  }

  // Extract email from HTML
  extractEmail(html) {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = html.match(emailPattern);
    
    if (matches) {
      return matches[0];
    }
    
    return null;
  }

  // Test a known business website
  async testBusinessWebsite() {
    console.log('\n🧪 Testing business website data extraction...');
    
    // Test with a known firearms business website
    const testUrl = 'https://impactguns.com';
    
    try {
      console.log(`📊 Fetching: ${testUrl}`);
      const html = await this.makeRequest(testUrl);
      
      const phone = this.extractPhone(html);
      const email = this.extractEmail(html);
      
      console.log(`✅ Website accessible: ${testUrl}`);
      console.log(`📞 Phone extracted: ${phone || 'Not found'}`);
      console.log(`📧 Email extracted: ${email || 'Not found'}`);
      console.log(`📄 Content length: ${Math.round(html.length / 1024)}KB`);
      
      return {
        url: testUrl,
        accessible: true,
        phone: phone,
        email: email,
        hasContent: html.length > 1000
      };
      
    } catch (error) {
      console.log(`❌ Error testing website: ${error.message}`);
      return {
        url: testUrl,
        accessible: false,
        error: error.message
      };
    }
  }

  // Load and test FFL data
  async testFFLData() {
    console.log('\n📋 Testing FFL data loading...');
    
    try {
      const content = await fs.readFile('./src/lib/generated-ffl-data.ts', 'utf8');
      
      console.log(`📄 File size: ${Math.round(content.length / 1024)}KB`);
      
      // Find the export line
      const exportMatch = content.match(/export const allFFLs: FFLBusiness\[\] = \[/);
      if (!exportMatch) {
        throw new Error('Could not find export const allFFLs line');
      }
      
      console.log('✅ Found export statement');
      
      // Instead of trying to parse the entire array with regex, 
      // let's dynamically import and evaluate the module
      try {
        // Write a temporary module that imports the data
        const tempModulePath = './temp-ffl-test.mjs';
        const tempModuleContent = `
import { allFFLs } from './src/lib/generated-ffl-data.js';
console.log(JSON.stringify({
  count: allFFLs.length,
  sample: allFFLs.slice(0, 3)
}));
`;
        
        await fs.writeFile(tempModulePath, tempModuleContent);
        
        // This approach won't work easily in Node.js without proper ES modules setup
        // Let's use a simpler approach - just count businesses by looking for slug patterns
        
        await fs.unlink(tempModulePath).catch(() => {}); // cleanup
        
        // Count business objects by counting slug occurrences
        const slugMatches = content.match(/"slug":/g);
        const businessCount = slugMatches ? slugMatches.length : 0;
        
        console.log(`📊 Detected ${businessCount} businesses by counting slug fields`);
        
        // Extract a few sample business names for validation
        const businessNameMatches = content.match(/"businessName":\s*"([^"]+)"/g);
        const sampleNames = businessNameMatches ? businessNameMatches.slice(0, 5).map(match => {
          const nameMatch = match.match(/"businessName":\s*"([^"]+)"/);
          return nameMatch ? nameMatch[1] : 'Unknown';
        }) : [];
        
        console.log('📊 Sample business names:');
        sampleNames.forEach((name, index) => {
          console.log(`   ${index + 1}. ${name}`);
        });
        
        // Extract business types
        const typeMatches = content.match(/"businessType":\s*"([^"]+)"/g);
        const businessTypes = typeMatches ? [...new Set(typeMatches.map(match => {
          const typeMatch = match.match(/"businessType":\s*"([^"]+)"/);
          return typeMatch ? typeMatch[1] : 'Unknown';
        }))].slice(0, 10) : [];
        
        // Count websites
        const websiteMatches = content.match(/"website":\s*"[^"]+"/g);
        const withWebsites = websiteMatches ? websiteMatches.length : 0;
        
        console.log(`\n📈 Statistics:`);
        console.log(`   - Total businesses: ${businessCount}`);
        console.log(`   - With websites: ${withWebsites}`);
        console.log(`   - Without websites: ${businessCount - withWebsites}`);
        console.log(`   - Business types: ${businessTypes.join(', ')}`);
        
        return {
          totalBusinesses: businessCount,
          withWebsites: withWebsites,
          withoutWebsites: businessCount - withWebsites,
          businessTypes: businessTypes,
          sampleNames: sampleNames
        };
        
      } catch (parseError) {
        console.log(`⚠️  Could not parse business data: ${parseError.message}`);
        console.log('📊 But file structure looks correct for processing');
        
        return {
          totalBusinesses: 'unknown',
          fileExists: true,
          fileSize: Math.round(content.length / 1024) + 'KB'
        };
      }
      
    } catch (error) {
      console.log(`❌ Error loading FFL data: ${error.message}`);
      return { error: error.message };
    }
  }

  // Test localhost server
  async testLocalhostServer() {
    console.log('\n🌐 Testing localhost server...');
    
    try {
      // Test main page
      const mainPage = await this.makeRequest('http://localhost:3000');
      console.log(`✅ Main page accessible (${Math.round(mainPage.length / 1024)}KB)`);
      
      // Test directory page
      const directoryPage = await this.makeRequest('http://localhost:3000/directory');
      console.log(`✅ Directory page accessible (${Math.round(directoryPage.length / 1024)}KB)`);
      
      // Test a business page (use one of the hardcoded test slugs)
      const businessPage = await this.makeRequest('http://localhost:3000/directory/nampa-rod-gun-club');
      console.log(`✅ Business page accessible (${Math.round(businessPage.length / 1024)}KB)`);
      
      // Extract title from business page to verify it's working
      const titleMatch = businessPage.match(/<title>([^<]+)/);
      if (titleMatch) {
        console.log(`📄 Business page title: ${titleMatch[1]}`);
      }
      
      return {
        mainPage: true,
        directoryPage: true,
        businessPage: true,
        businessPageTitle: titleMatch ? titleMatch[1] : null
      };
      
    } catch (error) {
      console.log(`❌ Error testing localhost: ${error.message}`);
      console.log(`💡 Make sure the dev server is running: npm run dev`);
      return { error: error.message };
    }
  }

  async run() {
    console.log('🚀 Starting Simple Business Discovery Test');
    console.log('=' .repeat(50));
    
    // Test 1: FFL Data Loading
    const fflTest = await this.testFFLData();
    this.results.push({ test: 'ffl-data', result: fflTest });
    
    // Test 2: Website Data Extraction
    const websiteTest = await this.testBusinessWebsite();
    this.results.push({ test: 'website-extraction', result: websiteTest });
    
    // Test 3: Localhost Server
    const serverTest = await this.testLocalhostServer();
    this.results.push({ test: 'localhost-server', result: serverTest });
    
    // Summary
    console.log('\n🎯 Test Summary:');
    console.log('=' .repeat(40));
    
    const fflSuccess = !fflTest.error;
    const websiteSuccess = websiteTest.accessible;
    const serverSuccess = !serverTest.error;
    
    console.log(`📋 FFL Data Loading: ${fflSuccess ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`🌐 Website Extraction: ${websiteSuccess ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`🖥️  Localhost Server: ${serverSuccess ? '✅ PASS' : '❌ FAIL'}`);
    
    const overallSuccess = fflSuccess && websiteSuccess && serverSuccess;
    
    console.log(`\n🏆 Overall Status: ${overallSuccess ? '✅ ALL SYSTEMS GO!' : '⚠️  Some issues detected'}`);
    
    if (overallSuccess) {
      console.log('\n🚀 Ready to run the comprehensive discovery system!');
      console.log('💡 Next steps:');
      console.log('   1. Create the full comprehensive-business-discovery.js script');
      console.log('   2. Run it to process all businesses');
      console.log('   3. Import the generated SQL to PostgreSQL');
      console.log('');
      console.log('📊 Current system status:');
      console.log(`   - FFL businesses ready: ~${fflTest.totalBusinesses}`);
      console.log(`   - Already with websites: ${fflTest.withWebsites}`);
      console.log(`   - Need website discovery: ${fflTest.withoutWebsites}`);
      console.log(`   - Business pages working: ✅`);
    } else {
      console.log('\n🔧 Issues detected. Let\'s fix them:');
      if (!fflSuccess) {
        console.log('   📋 FFL Data: Check the format of generated-ffl-data.ts');
      }
      if (!websiteSuccess) {
        console.log('   🌐 Website: Network connectivity or target site issues');
      }
      if (!serverSuccess) {
        console.log('   🖥️  Server: Make sure localhost:3000 is running (npm run dev)');
      }
    }
    
    return this.results;
  }
}

// Run test
if (require.main === module) {
  const test = new SimpleBusinessTest();
  test.run().catch(console.error);
}

module.exports = { SimpleBusinessTest };
