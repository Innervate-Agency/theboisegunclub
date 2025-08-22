#!/usr/bin/env node

/**
 * Debug Website Data Extraction - Fixed Version
 * 
 * Now properly handling redirects
 */

const https = require('https');
const http = require('http');

async function makeRequestWithRedirects(url, maxRedirects = 5) {
  let redirectCount = 0;
  let currentUrl = url;
  
  while (redirectCount < maxRedirects) {
    const result = await new Promise((resolve, reject) => {
      const isHttps = currentUrl.startsWith('https://');
      const module = isHttps ? https : http;
      
      const request = module.get(currentUrl, {
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Connection': 'keep-alive'
        }
      }, (response) => {
        console.log(`📊 ${currentUrl} -> Status: ${response.statusCode}`);
        
        // Handle redirects
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          const location = response.headers.location;
          console.log(`🔄 Redirect to: ${location}`);
          resolve({ redirect: location });
          return;
        }
        
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          resolve({ data, statusCode: response.statusCode });
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
    
    if (result.redirect) {
      currentUrl = result.redirect;
      redirectCount++;
      continue;
    }
    
    return result;
  }
  
  throw new Error(`Too many redirects (${maxRedirects})`);
}

async function debugWebsite() {
  console.log('🔍 Debugging impactguns.com data extraction (with redirect handling)...\n');
  
  try {
    const result = await makeRequestWithRedirects('https://impactguns.com');
    
    console.log(`\n📄 Final Content Length: ${result.data.length} bytes`);
    console.log(`📄 Content Preview (first 1000 chars):`);
    console.log('-'.repeat(50));
    console.log(result.data.substring(0, 1000));
    console.log('-'.repeat(50));
    
    // Test phone extraction on actual content
    console.log(`\n🔍 Testing phone number extraction...`);
    
    const phonePatterns = [
      { name: '(xxx) xxx-xxxx', pattern: /\(\d{3}\)\s*\d{3}-\d{4}/g },
      { name: 'xxx-xxx-xxxx', pattern: /\d{3}-\d{3}-\d{4}/g },
      { name: 'xxx.xxx.xxxx', pattern: /\d{3}\.\d{3}\.\d{4}/g },
      { name: 'xxx xxx xxxx', pattern: /\d{3}\s+\d{3}\s+\d{4}/g },
      { name: '800-xxx-xxxx', pattern: /800[-\s]\d{3}[-\s]\d{4}/g }
    ];
    
    let phoneFound = false;
    phonePatterns.forEach((patternObj) => {
      const matches = result.data.match(patternObj.pattern);
      if (matches) {
        console.log(`✅ ${patternObj.name} found: ${matches.join(', ')}`);
        phoneFound = true;
      } else {
        console.log(`❌ ${patternObj.name}: No matches`);
      }
    });
    
    // Look for the specific number we expect
    if (result.data.includes('800-917-7137')) {
      console.log(`✅ Found expected phone number (800-917-7137) in content!`);
    } else if (result.data.includes('917-7137')) {
      console.log(`✅ Found partial phone number (917-7137) in content!`);
    } else {
      console.log(`❌ Expected phone number not found in content`);
    }
    
    // Test email extraction
    console.log(`\n📧 Testing email extraction...`);
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emailMatches = result.data.match(emailPattern);
    
    if (emailMatches) {
      console.log(`✅ Found emails:`, emailMatches.slice(0, 5));
    } else {
      console.log(`❌ No emails found`);
    }
    
    // Look for any contact information
    console.log(`\n🔍 Searching for contact-related content...`);
    const contactKeywords = ['contact', 'phone', 'call', 'help', 'support'];
    contactKeywords.forEach(keyword => {
      const regex = new RegExp(`${keyword}[^<]*\\d{3}[^<]*\\d{3}[^<]*\\d{4}`, 'gi');
      const matches = result.data.match(regex);
      if (matches) {
        console.log(`✅ Found "${keyword}" with numbers:`, matches.slice(0, 3));
      }
    });
    
    return result.data;
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message);
  }
}

debugWebsite().then(() => {
  console.log('\n🎯 Debug complete!');
});
