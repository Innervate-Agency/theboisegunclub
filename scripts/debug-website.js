#!/usr/bin/env node

/**
 * Debug Website Data Extraction
 * 
 * Let's see exactly what we're getting from impactguns.com
 */

const https = require('https');

async function debugWebsite() {
  console.log('🔍 Debugging impactguns.com data extraction...\n');
  
  const url = 'https://impactguns.com';
  
  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      timeout: 15000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive'
      }
    }, (response) => {
      console.log(`📊 Response Status: ${response.statusCode}`);
      console.log(`📊 Response Headers:`, response.headers);
      
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        console.log(`\n📄 Content Length: ${data.length} bytes`);
        console.log(`📄 Content Preview (first 1000 chars):`);
        console.log('-'.repeat(50));
        console.log(data.substring(0, 1000));
        console.log('-'.repeat(50));
        
        // Test phone extraction on actual content
        console.log(`\n🔍 Testing phone number extraction...`);
        
        const phonePatterns = [
          /\(\d{3}\)\s*\d{3}-\d{4}/g,
          /\d{3}-\d{3}-\d{4}/g,
          /\d{3}\.\d{3}\.\d{4}/g,
          /\d{3}\s*\d{3}\s*\d{4}/g,
          /1?\s*\d{3}[\s\-]\d{3}[\s\-]\d{4}/g
        ];
        
        let phoneFound = false;
        phonePatterns.forEach((pattern, index) => {
          const matches = data.match(pattern);
          if (matches) {
            console.log(`✅ Pattern ${index + 1} found: ${matches[0]}`);
            phoneFound = true;
          } else {
            console.log(`❌ Pattern ${index + 1}: No matches`);
          }
        });
        
        if (!phoneFound) {
          // Search for any number that looks like a phone
          const anyNumbers = data.match(/\d{3,}/g);
          console.log(`\n🔍 Found these number sequences:`, anyNumbers ? anyNumbers.slice(0, 10) : 'None');
          
          // Look for the specific number we expect
          if (data.includes('800-917-7137')) {
            console.log(`✅ Found expected phone number in content!`);
          } else if (data.includes('917-7137')) {
            console.log(`✅ Found partial phone number in content!`);
          } else {
            console.log(`❌ Expected phone number not found in content`);
          }
        }
        
        // Test email extraction
        console.log(`\n📧 Testing email extraction...`);
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const emailMatches = data.match(emailPattern);
        
        if (emailMatches) {
          console.log(`✅ Found emails:`, emailMatches.slice(0, 5));
        } else {
          console.log(`❌ No emails found`);
        }
        
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

debugWebsite().then(() => {
  console.log('\n🎯 Debug complete!');
}).catch((error) => {
  console.error('❌ Debug failed:', error.message);
});
