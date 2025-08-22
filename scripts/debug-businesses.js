#!/usr/bin/env node

const fs = require('fs').promises;

async function debugBusinesses() {
  const content = await fs.readFile('./src/lib/generated-ffl-data.ts', 'utf8');
  const businessMatches = content.match(/{[^}]*"slug"[^}]*}/g);
  
  console.log(`Total business objects found: ${businessMatches?.length || 0}`);
  
  let withWebsites = 0;
  let withoutWebsites = 0;
  let first10WithoutWebsites = [];
  
  if (businessMatches) {
    for (let i = 0; i < Math.min(businessMatches.length, 100); i++) {
      const match = businessMatches[i];
      
      const slug = match.match(/"slug":\s*"([^"]+)"/)?.[1];
      const name = match.match(/"businessName":\s*"([^"]+)"/)?.[1];
      const city = match.match(/"city":\s*"([^"]+)"/)?.[1];
      const website = match.match(/"website":\s*"([^"]*)"/)?.[1];
      
      if (slug && name) {
        if (!website || website.trim() === '') {
          withoutWebsites++;
          if (first10WithoutWebsites.length < 10) {
            first10WithoutWebsites.push({ slug, name, city, website: website || 'EMPTY' });
          }
        } else {
          withWebsites++;
        }
      }
    }
  }
  
  console.log(`\nFirst 100 businesses analysis:`);
  console.log(`- With websites: ${withWebsites}`);
  console.log(`- Without websites: ${withoutWebsites}`);
  
  console.log(`\nFirst 10 businesses WITHOUT websites:`);
  first10WithoutWebsites.forEach((b, i) => {
    console.log(`${i+1}. ${b.name} (${b.city}) - Website: "${b.website}"`);
  });
}

debugBusinesses().catch(console.error);
