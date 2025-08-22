#!/usr/bin/env python3
"""
Smart Website Discovery System - Continue Mode with Business Filtering
====================================================================
Continues discovery with filtering to only include legitimate commercial businesses.
"""

import asyncio
import aiohttp
import json
import pandas as pd
import logging
import os
from datetime import datetime
from typing import List, Dict, Optional, Tuple
import re
from urllib.parse import urlparse

class SmartWebsiteDiscoveryContinue:
    def __init__(self, serper_api_key: str):
        self.serper_api_key = serper_api_key
        self.session = None
        self.searches_performed = 0
        self.discovered_file = 'scripts/crawler/discovered_websites.json'
        self.filtered_file = 'scripts/crawler/filtered_businesses.json'  # Track filtered businesses
        
        # Setup logging
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        self.logger = logging.getLogger("WebsiteDiscovery")
    
    async def initialize(self):
        self.session = aiohttp.ClientSession()
        self.logger.info("✅ Website Discovery with Business Filtering initialized")
    
    async def close(self):
        if self.session:
            await self.session.close()
    
    def is_likely_home_based(self, business: Dict) -> Tuple[bool, str]:
        """Check if business appears to be home-based and should be filtered out"""
        name = business['name'].lower()
        address = business.get('address', '').lower()
        
        # Red flags for home-based operations
        home_indicators = [
            # Individual names (likely home-based FFLs)
            r'\b(mr|mrs|ms|dr|sr|jr)\b',
            r'^[a-z]+,\s+[a-z]+\s+[a-z]\.?$',  # "Smith, John A"
            r'^[a-z]+\s+[a-z]+\s+[a-z]+$',     # "John Smith Jones"
            
            # Home-based business indicators
            r'\bhome\b',
            r'\bresidence\b',
            r'\bprivate\b',
            r'\bby appointment\b',
        ]
        
        address_red_flags = [
            r'\bdrive\b', r'\bdrive way\b', r'\bdr\b',
            r'\bcourt\b', r'\bct\b',
            r'\bcircle\b', r'\bcir\b',  
            r'\bplace\b', r'\bpl\b',
            r'\blane\b', r'\bln\b',
            r'\bway\b',
            r'\bterrace\b', r'\bter\b',
        ]
        
        # Check name for home-based indicators
        for pattern in home_indicators:
            if re.search(pattern, name):
                return True, f"Home-based indicator in name: {pattern}"
        
        # Check address for residential indicators
        if address:
            for pattern in address_red_flags:
                if re.search(pattern, address):
                    return True, f"Residential address indicator: {pattern}"
        
        return False, "Appears commercial"
    
    def is_valid_commercial_website(self, url: str, business_name: str) -> Tuple[bool, str]:
        """Enhanced validation for commercial business websites"""
        try:
            parsed = urlparse(url)
            domain = parsed.netloc.lower()
            path = parsed.path.lower()
            
            # Exclude social media and directories
            excluded_domains = [
                'facebook.com', 'instagram.com', 'twitter.com', 'linkedin.com',
                'yelp.com', 'yellowpages.com', 'google.com', 'reddit.com',
                'youtube.com', 'wikipedia.org', 'craigslist.org'
            ]
            
            for excluded in excluded_domains:
                if excluded in domain:
                    return False, f"Social media/directory site: {excluded}"
            
            # FFL directory sites are OK - they show legitimate businesses
            ffl_directories = [
                'ffls.com',
                'armsdirectory.com',
                'bluebookofgunvalues.com',
                'gunbroker.com',
                'detroitammoco.com'
            ]
            
            for ffl_dir in ffl_directories:
                if ffl_dir in domain:
                    return True, f"Legitimate FFL directory: {ffl_dir}"
            
            # Business website quality indicators
            commercial_indicators = [
                '.com', '.net', '.org', '.biz', '.us',
                'shop', 'store', 'guns', 'arms', 'tactical', 'sporting',
                'firearms', 'ammo', 'range', 'training'
            ]
            
            # Check if domain or business name suggests commercial operation
            business_words = business_name.lower().split()
            commercial_score = 0
            
            for indicator in commercial_indicators:
                if indicator in domain or indicator in path:
                    commercial_score += 1
                    
            for word in business_words:
                if word in ['tactical', 'arms', 'guns', 'firearms', 'armory', 'defense', 'sporting']:
                    commercial_score += 2
                elif word in ['llc', 'inc', 'corp', 'company', 'enterprises']:
                    commercial_score += 1
            
            if commercial_score >= 2:
                return True, f"Commercial website (score: {commercial_score})"
            else:
                return False, f"Unclear commercial status (score: {commercial_score})"
                
        except Exception as e:
            return False, f"URL parsing error: {e}"
    
    def should_include_business(self, business: Dict, website_result: Optional[Dict]) -> Tuple[bool, str]:
        """Comprehensive check if business should be included in directory"""
        
        # Check if appears home-based
        is_home_based, home_reason = self.is_likely_home_based(business)
        if is_home_based:
            return False, f"Filtered: {home_reason}"
        
        # If no website found, we can't verify commercial status
        if not website_result:
            return False, "No website found - cannot verify commercial status"
        
        # Check website validity
        is_valid_website, website_reason = self.is_valid_commercial_website(
            website_result['website'], 
            business['name']
        )
        
        if not is_valid_website:
            return False, f"Website filtered: {website_reason}"
        
        # Additional business name filters
        name = business['name'].lower()
        
        # Skip if name suggests individual person
        person_patterns = [
            r'^[a-z]+\s+[a-z]+$',  # "John Smith"
            r'[a-z]+,\s*[a-z]+',   # "Smith, John"
        ]
        
        for pattern in person_patterns:
            if re.match(pattern, name) and len(name.split()) <= 2:
                return False, f"Individual person name pattern: {name}"
        
        # Require confidence threshold for inclusion
        if website_result['confidence'] < 0.6:
            return False, f"Low confidence match: {website_result['confidence']:.2f}"
        
        return True, "Approved for directory inclusion"
    
    def load_already_processed(self) -> set:
        """Load IDs of businesses already processed"""
        processed_ids = set()
        
        # Load discovered businesses
        if os.path.exists(self.discovered_file):
            with open(self.discovered_file, 'r') as f:
                discovered = json.load(f)
            processed_ids.update([d['business_id'] for d in discovered])
        
        # Load filtered businesses  
        if os.path.exists(self.filtered_file):
            with open(self.filtered_file, 'r') as f:
                filtered = json.load(f)
            processed_ids.update([d['business_id'] for d in filtered])
            
        self.logger.info(f"📋 Found {len(processed_ids)} already processed businesses")
        return processed_ids
    
    def load_remaining_businesses(self, csv_path: str, max_new: int = 50) -> List[Dict]:
        """Load businesses that haven't been processed yet"""
        processed_ids = self.load_already_processed()
        
        df = pd.read_csv(csv_path)
        missing = df[df['website'].isna() | (df['website'] == '') | (df['website'] == 'nan')]
        
        # Filter out already processed businesses
        remaining = []
        for _, row in missing.iterrows():
            if str(row['id']) not in processed_ids:
                business = {
                    'id': str(row.get('id', '')),
                    'name': str(row.get('name', '')),
                    'city': str(row.get('city', '')),
                    'category': str(row.get('category', '')),
                    'phone': str(row.get('phone', '')),
                    'address': str(row.get('address', ''))
                }
                remaining.append(business)
                
                if len(remaining) >= max_new:
                    break
        
        self.logger.info(f"🎯 Found {len(remaining)} new businesses to process")
        return remaining
    
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
        payload = {'q': query, 'gl': 'us', 'hl': 'en', 'num': 5}
        headers = {'X-API-KEY': self.serper_api_key, 'Content-Type': 'application/json'}
        
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
    
    def find_website(self, business: Dict, results: List[Dict]) -> Optional[Dict]:
        """Find best website match from search results"""
        business_name = business['name'].lower()
        business_city = business['city'].lower()
        
        for result in results:
            link = result.get('link', '')
            title = result.get('title', '').lower()
            snippet = result.get('snippet', '').lower()
            
            # Basic URL validation
            try:
                parsed = urlparse(link)
                if not parsed.netloc:
                    continue
            except:
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
            
            if confidence > 0.4:  # Lower threshold for initial detection
                return {
                    'business_id': business['id'],
                    'business_name': business['name'],
                    'website': link,
                    'confidence': confidence,
                    'source': title[:50]
                }
        
        return None
    
    def save_filtered_business(self, business: Dict, reason: str):
        """Save business that was filtered out"""
        filtered_businesses = []
        
        # Load existing filtered businesses
        if os.path.exists(self.filtered_file):
            with open(self.filtered_file, 'r') as f:
                filtered_businesses = json.load(f)
        
        # Add new filtered business
        filtered_entry = {
            'business_id': business['id'],
            'business_name': business['name'],
            'city': business['city'],
            'filter_reason': reason,
            'filtered_at': datetime.now().isoformat()
        }
        
        filtered_businesses.append(filtered_entry)
        
        # Save updated list
        with open(self.filtered_file, 'w') as f:
            json.dump(filtered_businesses, f, indent=2)
    
    def append_discoveries(self, new_discoveries: List[Dict]):
        """Append new discoveries to existing file"""
        existing_discoveries = []
        
        # Load existing discoveries
        if os.path.exists(self.discovered_file):
            with open(self.discovered_file, 'r') as f:
                existing_discoveries = json.load(f)
        
        # Combine and save
        all_discoveries = existing_discoveries + new_discoveries
        
        with open(self.discovered_file, 'w') as f:
            json.dump(all_discoveries, f, indent=2)
        
        self.logger.info(f"💾 Appended {len(new_discoveries)} new discoveries")
        self.logger.info(f"📊 Total discoveries now: {len(all_discoveries)}")

async def main():
    # Configuration
    API_KEY = "bc341f5691b1e804cde34a277937ec69c46261c7"
    CSV_FILE = "docs/final-commercial-directory-2025-08-20.csv"
    NEW_BATCH_SIZE = 25  # Smaller batch for testing filtering
    
    print("🎯 TREASURE VALLEY WEBSITE DISCOVERY - FILTERED MODE")
    print("=" * 55)
    
    discovery = SmartWebsiteDiscoveryContinue(API_KEY)
    
    try:
        await discovery.initialize()
        
        # Load businesses not yet processed
        remaining_businesses = discovery.load_remaining_businesses(CSV_FILE, NEW_BATCH_SIZE)
        
        if not remaining_businesses:
            print("✅ All businesses have been processed!")
            return 0
        
        print(f"🔍 Processing next {len(remaining_businesses)} businesses with filtering...")
        print(f"🌟 First business: {remaining_businesses[0]['name']} in {remaining_businesses[0]['city']}")
        
        discoveries = []
        filtered_count = 0
        
        for i, business in enumerate(remaining_businesses, 1):
            print(f"[{i}/{len(remaining_businesses)}] Analyzing: {business['name']} ({business['city']})")
            
            # Pre-filter check (before API call)
            is_home_based, home_reason = discovery.is_likely_home_based(business)
            if is_home_based:
                print(f"  🚫 Pre-filtered: {home_reason}")
                discovery.save_filtered_business(business, home_reason)
                filtered_count += 1
                continue
            
            # Search for website
            query = discovery.create_search_query(business)
            results = await discovery.search_serper(query)
            
            website_result = None
            if results:
                website_result = discovery.find_website(business, results)
            
            # Comprehensive filtering check
            should_include, reason = discovery.should_include_business(business, website_result)
            
            if should_include:
                discoveries.append(website_result)
                print(f"  ✅ APPROVED: {website_result['website']} (confidence: {website_result['confidence']:.2f})")
            else:
                print(f"  🚫 FILTERED: {reason}")
                discovery.save_filtered_business(business, reason)
                filtered_count += 1
        
        # Save results
        if discoveries:
            discovery.append_discoveries(discoveries)
        
        print(f"\n🎉 FILTERED BATCH COMPLETE!")
        print(f"📊 Businesses processed: {len(remaining_businesses)}")
        print(f"✅ Websites approved: {len(discoveries)}")
        print(f"🚫 Businesses filtered: {filtered_count}")
        print(f"📈 Approval rate: {len(discoveries)/len(remaining_businesses)*100:.1f}%")
        print(f"🔍 API searches used: {discovery.searches_performed}")
        
        if discoveries:
            print(f"\n🔗 Approved businesses:")
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
