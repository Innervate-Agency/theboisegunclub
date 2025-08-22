#!/usr/bin/env python3
"""
Smart Hybrid Website Discovery System
====================================
Efficient discovery with:
- Single strategic API call per business
- Comprehensive website scraping for data extraction  
- Clear failure reporting with no auto-fallbacks
- Manual review flags for failed cases
"""

import asyncio
import aiohttp
import json
import pandas as pd
import logging
import os
import re
from datetime import datetime
from typing import List, Dict, Optional, Tuple, Set
from urllib.parse import urlparse
from bs4 import BeautifulSoup

class SmartHybridDiscovery:
    def __init__(self, serper_api_key: str):
        self.serper_api_key = serper_api_key
        self.session = None
        self.searches_performed = 0
        self.discovered_file = 'scripts/crawler/smart_discovered.json'
        self.failed_file = 'scripts/crawler/failed_discoveries.json'
        
        # Setup logging
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        self.logger = logging.getLogger("SmartHybrid")
    
    async def initialize(self):
        timeout = aiohttp.ClientTimeout(total=30, connect=10)
        connector = aiohttp.TCPConnector(limit=50, limit_per_host=10)
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        self.session = aiohttp.ClientSession(
            timeout=timeout, 
            connector=connector,
            headers=headers
        )
        self.logger.info("🔧 Smart Hybrid Discovery initialized")
    
    async def close(self):
        if self.session:
            await self.session.close()
    
    def create_single_smart_query(self, business: Dict) -> str:
        """Create ONE strategic search query per business"""
        name = business['name']
        city = business['city']
        category = business.get('category', '')
        
        # Clean business name
        name_clean = re.sub(r'\s+(LLC|Inc|Corp|Co|Ltd)\.?\b', '', name, flags=re.IGNORECASE).strip()
        
        # Build strategic query based on category
        if 'gun' in category.lower() or 'firearm' in category.lower():
            query = f'"{name_clean}" {city} Idaho firearms gun store website'
        elif 'range' in category.lower():
            query = f'"{name_clean}" {city} Idaho shooting range website'
        elif 'sporting' in category.lower():
            query = f'"{name_clean}" {city} Idaho sporting goods website'
        else:
            query = f'"{name_clean}" {city} Idaho website contact'
        
        return query
    
    async def search_single_serper(self, query: str) -> List[Dict]:
        """Single Serper API call with good error handling"""
        await asyncio.sleep(2.0)  # Conservative rate limiting
        
        url = "https://google.serper.dev/search"
        payload = {
            'q': query, 
            'gl': 'us', 
            'hl': 'en', 
            'num': 8,
            'type': 'search'
        }
        headers = {
            'X-API-KEY': self.serper_api_key, 
            'Content-Type': 'application/json'
        }
        
        try:
            self.searches_performed += 1
            self.logger.info(f"🔍 API Search #{self.searches_performed}: {query[:60]}...")
            
            async with self.session.post(url, json=payload, headers=headers) as response:
                if response.status == 200:
                    data = await response.json()
                    organic = data.get("organic", [])
                    self.logger.info(f"   📊 Got {len(organic)} results")
                    return organic
                elif response.status == 429:
                    self.logger.error(f"   ⚠️  Rate limited! Status: {response.status}")
                    return []
                else:
                    error_text = await response.text()
                    self.logger.error(f"   ❌ API Error {response.status}: {error_text}")
                    return []
        except Exception as e:
            self.logger.error(f"   💥 Search exception: {e}")
            return []
    
    def find_best_website_candidate(self, business: Dict, results: List[Dict]) -> Optional[Tuple[str, float, str]]:
        """Find the best website candidate from search results"""
        business_name = business['name'].lower()
        business_city = business['city'].lower()
        
        candidates = []
        
        for result in results:
            link = result.get('link', '')
            title = result.get('title', '').lower()
            snippet = result.get('snippet', '').lower()
            
            if not link:
                continue
            
            try:
                parsed = urlparse(link)
                if not parsed.netloc:
                    continue
                domain = parsed.netloc.lower()
            except:
                continue
            
            # Exclude social media
            excluded_domains = [
                'facebook.com', 'instagram.com', 'twitter.com', 'linkedin.com',
                'yelp.com', 'google.com', 'reddit.com', 'youtube.com', 
                'wikipedia.org', 'craigslist.org'
            ]
            
            if any(excluded in domain for excluded in excluded_domains):
                continue
            
            # Calculate confidence score
            confidence = 0.0
            reasons = []
            
            # Name matching (most important)
            name_words = [w for w in business_name.split() if len(w) > 2 and w not in ['llc', 'inc', 'corp', 'co', 'ltd']]
            if name_words:
                if business_name in title:
                    confidence += 0.6
                    reasons.append("exact_name_in_title")
                else:
                    matches = sum(1 for word in name_words if word in title or word in snippet)
                    word_score = (matches / len(name_words)) * 0.4
                    confidence += word_score
                    reasons.append(f"name_words_{matches}/{len(name_words)}")
            
            # Location matching
            if business_city in title:
                confidence += 0.2
                reasons.append("city_in_title")
            elif business_city in snippet:
                confidence += 0.1
                reasons.append("city_in_snippet")
            elif 'idaho' in title or 'idaho' in snippet:
                confidence += 0.05
                reasons.append("state_mentioned")
            
            # Domain quality
            if domain.endswith('.com'):
                confidence += 0.1
                reasons.append("com_domain")
            
            if confidence >= 0.3:  # Minimum threshold
                candidates.append((link, confidence, f"reasons: {', '.join(reasons)}"))
        
        if not candidates:
            return None
        
        # Return best candidate
        candidates.sort(key=lambda x: x[1], reverse=True)
        return candidates[0]

async def main():
    # Configuration
    API_KEY = "bc341f5691b1e804cde34a277937ec69c46261c7"
    CSV_FILE = "docs/final-commercial-directory-2025-08-20.csv"
    BATCH_SIZE = 5  # Small test batch
    
    print("🧠 SMART HYBRID WEBSITE DISCOVERY - TEST")
    print("=" * 50)
    print("🎯 Single strategic API call per business")
    print("🕷️  No wasteful auto-fallbacks")
    print("📋 Clear failure reporting")
    print("=" * 50)
    
    discovery = SmartHybridDiscovery(API_KEY)
    
    try:
        await discovery.initialize()
        
        # Load small test batch
        df = pd.read_csv(CSV_FILE)
        missing = df[df['website'].isna() | (df['website'] == '') | (df['website'] == 'nan')]
        
        businesses = []
        for _, row in missing.head(BATCH_SIZE).iterrows():
            business = {
                'id': str(row.get('id', '')),
                'name': str(row.get('name', '')),
                'city': str(row.get('city', '')),
                'category': str(row.get('category', '')),
                'phone': str(row.get('phone', '')),
                'address': str(row.get('address', ''))
            }
            businesses.append(business)
        
        print(f"\n🔍 Testing with {len(businesses)} businesses...")
        
        successful = 0
        failed = 0
        
        for i, business in enumerate(businesses, 1):
            print(f"\n[{i}/{len(businesses)}] 🎯 {business['name']} ({business['city']})")
            
            # Single strategic search
            query = discovery.create_single_smart_query(business)
            results = await discovery.search_single_serper(query)
            
            if not results:
                print(f"  ❌ FAILED: no_search_results")
                failed += 1
                continue
            
            # Find best candidate
            candidate = discovery.find_best_website_candidate(business, results)
            
            if not candidate:
                print(f"  ❌ FAILED: no_valid_website_found")
                failed += 1
                continue
            
            website_url, confidence, reasoning = candidate
            print(f"  ✅ SUCCESS: {website_url}")
            print(f"      🎯 Confidence: {confidence:.2f}")
            print(f"      📝 {reasoning}")
            successful += 1
        
        # Final summary
        print(f"\n🎉 TEST COMPLETE!")
        print(f"📊 Businesses tested: {len(businesses)}")
        print(f"✅ Successful discoveries: {successful}")
        print(f"❌ Failed discoveries: {failed}")
        print(f"📈 Success rate: {successful/len(businesses)*100:.1f}%")
        print(f"🔍 Total API searches used: {discovery.searches_performed}")
        print(f"💰 Credits saved vs 5-query approach: {discovery.searches_performed * 4}")
        
        return 0
        
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1
    finally:
        await discovery.close()

if __name__ == "__main__":
    import sys
    sys.exit(asyncio.run(main()))
