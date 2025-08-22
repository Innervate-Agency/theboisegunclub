#!/usr/bin/env python3
"""
Smart Website Discovery System
=============================
Finds missing websites for your existing 643 businesses using Serper API efficiently.
"""

import asyncio
import aiohttp
import json
import pandas as pd
import logging
from datetime import datetime
from typing import List, Dict, Optional
import re
from urllib.parse import urlparse

class SmartWebsiteDiscovery:
    def __init__(self, serper_api_key: str):
        self.serper_api_key = serper_api_key
        self.session = None
        self.searches_performed = 0
        
        # Setup logging
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        self.logger = logging.getLogger("WebsiteDiscovery")
    
    async def initialize(self):
        self.session = aiohttp.ClientSession()
        self.logger.info("✅ Website Discovery initialized")
    
    async def close(self):
        if self.session:
            await self.session.close()
    
    def load_businesses(self, csv_path: str) -> List[Dict]:
        """Load businesses missing websites from CSV"""
        df = pd.read_csv(csv_path)
        
        # Find businesses without websites
        missing_websites = []
        for _, row in df.iterrows():
            website = row.get('website', '')
            if pd.isna(website) or website == '' or website == 'nan' or website == 'N/A':
                business = {
                    'id': str(row.get('id', '')),
                    'name': str(row.get('name', '')),
                    'city': str(row.get('city', '')),
                    'category': str(row.get('category', '')),
                    'phone': str(row.get('phone', ''))
                }
                missing_websites.append(business)
        
        self.logger.info(f"📊 Found {len(missing_websites)} businesses without websites")
        return missing_websites
    
    def create_search_query(self, business: Dict) -> str:
        """Create optimal search query"""
        name = re.sub(r'\s+(LLC|Inc|Corp)\b', '', business['name'], flags=re.IGNORECASE).strip()
        query = f'"{name}" {business["city"]} Idaho'
        
        if 'gun' in business['category'].lower():
            query += ' firearms gun store'
        elif 'range' in business['category'].lower():
            query += ' shooting range'
        
        return query
    
    async def search_serper(self, query: str) -> List[Dict]:
        """Search using Serper API"""
        await asyncio.sleep(2.0)  # Rate limiting
        
        url = "https://google.serper.dev/search"
        payload = {
            "q": query,
            "gl": "us", 
            "hl": "en",
            "num": 5
        }
        headers = {
            "X-API-KEY": self.serper_api_key,
            "Content-Type": "application/json"
        }
        
        try:
            self.searches_performed += 1
            async with self.session.post(url, json=payload, headers=headers) as response:
                if response.status == 200:
                    data = await response.json()
                    return data.get("organic", [])
                else:
                    self.logger.error(f"API Error: {response.status}")
                    return []
        except Exception as e:
            self.logger.error(f"Search failed: {e}")
            return []
    
    def is_valid_website(self, url: str) -> bool:
        """Check if URL is a valid business website"""
        try:
            domain = urlparse(url).netloc.lower()
            excluded = ['facebook.com', 'yelp.com', 'google.com', 'reddit.com', 'youtube.com']
            return domain and not any(ex in domain for ex in excluded)
        except:
            return False
    
    def find_website(self, business: Dict, results: List[Dict]) -> Optional[Dict]:
        """Find best website match from search results"""
        business_name = business['name'].lower()
        business_city = business['city'].lower()
        
        for result in results:
            link = result.get('link', '')
            title = result.get('title', '').lower()
            snippet = result.get('snippet', '').lower()
            
            if not self.is_valid_website(link):
                continue
            
            # Calculate confidence score
            confidence = 0.0
            
            # Name matching
            name_words = [w for w in business_name.split() if len(w) > 2]
            matches = sum(1 for word in name_words if word in title)
            if name_words:
                confidence += (matches / len(name_words)) * 0.6
            
            # Location matching
            if business_city in title or business_city in snippet:
                confidence += 0.3
            
            # Category matching
            if 'gun' in business['category'].lower() and any(kw in title or kw in snippet for kw in ['gun', 'firearm', 'arms']):
                confidence += 0.1
            
            if confidence > 0.5:  # Minimum threshold
                return {
                    'business_id': business['id'],
                    'business_name': business['name'],
                    'website': link,
                    'confidence': confidence,
                    'source': title[:50]
                }
        
        return None

async def main():
    # Configuration
    API_KEY = "bc341f5691b1e804cde34a277937ec69c46261c7"
    CSV_FILE = "docs/final-commercial-directory-2025-08-20.csv"
    MAX_SEARCHES = 100  # Full batch run
    
    print("🎯 TREASURE VALLEY WEBSITE DISCOVERY")
    print("=" * 40)
    
    discovery = SmartWebsiteDiscovery(API_KEY)
    
    try:
        await discovery.initialize()
        
        # Load businesses without websites
        businesses = discovery.load_businesses(CSV_FILE)
        if not businesses:
            print("❌ No businesses loaded")
            return 1
        
        print(f"🔍 Processing first {MAX_SEARCHES} businesses...")
        
        discoveries = []
        for i, business in enumerate(businesses[:MAX_SEARCHES], 1):
            print(f"[{i}/{MAX_SEARCHES}] Searching: {business['name']} ({business['city']})")
            
            query = discovery.create_search_query(business)
            results = await discovery.search_serper(query)
            
            if results:
                website_info = discovery.find_website(business, results)
                if website_info:
                    discoveries.append(website_info)
                    print(f"  ✅ Found: {website_info['website']} (confidence: {website_info['confidence']:.2f})")
                else:
                    print(f"  ❌ No website found")
            else:
                print(f"  ⚠️  No search results")
        
        # Save results
        if discoveries:
            with open('scripts/crawler/discovered_websites.json', 'w') as f:
                json.dump(discoveries, f, indent=2)
            
            print(f"\n🎉 DISCOVERY COMPLETE!")
            print(f"📊 Businesses processed: {MAX_SEARCHES}")
            print(f"✅ Websites found: {len(discoveries)}")
            print(f"📈 Success rate: {len(discoveries)/MAX_SEARCHES*100:.1f}%")
            print(f"🔍 API searches used: {discovery.searches_performed}")
            
            print(f"\n🔗 Sample discoveries:")
            for i, disc in enumerate(discoveries[:5], 1):
                print(f"  {i}. {disc['business_name'][:30]:<30} -> {disc['website']}")
        
        return 0
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return 1
    finally:
        await discovery.close()

if __name__ == "__main__":
    import sys
    sys.exit(asyncio.run(main()))
