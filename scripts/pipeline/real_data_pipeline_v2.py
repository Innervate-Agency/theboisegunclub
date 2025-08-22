#!/usr/bin/env python3
"""
Real Data Pipeline v2 - Discovery with Deduplication
====================================================
1. Use Serper API to find local Idaho businesses
2. Skip searches already completed
3. Track processed businesses to prevent duplicates
"""

import requests
import json
import time
import os
from datetime import datetime
from dotenv import load_dotenv
from deduplication_manager import DeduplicationManager

# Load environment variables
load_dotenv('.env.local')

class SerperBusinessDiscovery:
    def __init__(self):
        self.api_key = os.getenv('SERPER_API_KEY')
        self.base_url = 'https://google.serper.dev'
        self.rate_limit_delay = 1.0
        
        if not self.api_key:
            raise ValueError("SERPER_API_KEY not found in environment")
    
    def search_local_businesses(self, search_terms: list, locations: list) -> list:
        """Search for local businesses using Serper API"""
        discovered_businesses = []
        
        for location in locations:
            for term in search_terms:
                query = f"{term} {location} Idaho hours contact website"
                print(f"🔍 Searching: {query}")
                
                try:
                    time.sleep(self.rate_limit_delay)
                    
                    response = requests.post(
                        f"{self.base_url}/places",
                        headers={
                            'X-API-KEY': self.api_key,
                            'Content-Type': 'application/json',
                        },
                        json={
                            'q': query,
                            'location': f"{location}, Idaho",
                            'hl': 'en',
                            'gl': 'us',
                            'num': 10
                        },
                        timeout=30
                    )
                    
                    if response.status_code == 200:
                        data = response.json()
                        places = data.get('places', [])
                        
                        for place in places:
                            business = {
                                'id': f"serper_{len(discovered_businesses) + 1}",
                                'name': place.get('title', ''),
                                'address': place.get('address', ''),
                                'city': location,
                                'phone': place.get('phoneNumber', ''),
                                'website': place.get('website', ''),
                                'rating': place.get('rating', 0),
                                'reviews_count': place.get('reviewsCount', 0),
                                'category': place.get('category', ''),
                                'search_term': term,
                                'discovery_source': 'serper_places',
                                'discovered_at': datetime.now().isoformat()
                            }
                            
                            # Only include if we have a website to scrape
                            if business['website'] and business['website'] != '':
                                discovered_businesses.append(business)
                                print(f"   ✅ Found: {business['name']} - {business['website']}")
                            else:
                                print(f"   ⚠️  No website: {business['name']}")
                        
                        print(f"   📊 Found {len(places)} results")
                    else:
                        print(f"   ❌ API Error: {response.status_code}")
                        
                except Exception as e:
                    print(f"   💥 Error: {e}")
                
                print()
        
        return discovered_businesses

def main():
    """Run the real data discovery pipeline with deduplication"""
    
    print("🎯 REAL DATA PIPELINE - DISCOVERY v2 (with deduplication)")
    print("=" * 70)
    print("📍 Searching for LOCAL businesses in Idaho")
    print("🌐 Using Serper API for discovery")
    print("🔄 Skipping already processed searches")
    print()
    
    # Initialize deduplication manager
    dedup_manager = DeduplicationManager()
    
    # Show cache status
    cache_stats = dedup_manager.get_cache_stats()
    if cache_stats['searches_completed'] > 0:
        print(f"📊 CACHE STATUS:")
        print(f"   Previous searches: {cache_stats['searches_completed']}")
        print(f"   Websites scraped: {cache_stats['websites_scraped']}")
        print(f"   Businesses generated: {cache_stats['businesses_generated']}")
        print()
    
    # Define search parameters for LOCAL businesses
    search_terms = [
        "gun store",
        "shooting range",
        "gunsmith",
        "firearms dealer",
        "hunting outfitter",
        "tactical training"
    ]
    
    locations = [
        "Boise", "Meridian", "Nampa", "Eagle", "Kuna",
        "Garden City", "Star", "Caldwell"
    ]
    
    # Filter out already completed searches
    new_searches = dedup_manager.filter_new_searches(search_terms, locations)
    
    if not new_searches:
        print("✅ All search combinations already completed!")
        print("   Use existing discovered business files or reset cache to research")
        print("   To reset: python3 scripts/pipeline/deduplication_manager.py --reset")
        return
    
    print(f"🔍 Will perform {len(new_searches)} new searches")
    print()
    
    # Step 1: Discover businesses
    print("STEP 1: BUSINESS DISCOVERY")
    print("-" * 40)
    
    discoverer = SerperBusinessDiscovery()
    all_businesses = []
    
    for i, (term, location) in enumerate(new_searches, 1):
        print(f"[{i}/{len(new_searches)}] Searching '{term}' in {location}")
        businesses = discoverer.search_local_businesses([term], [location])
        all_businesses.extend(businesses)
        
        # Mark search as completed
        dedup_manager.mark_search_completed(term, location, len(businesses))
        print(f"   ✅ Marked '{term}' in {location} as completed ({len(businesses)} found)")
        print()
    
    # Save caches after all searches
    dedup_manager.save_caches()
    
    # Save discovered businesses
    if all_businesses:
        output_file = f"scripts/pipeline/discovered_businesses_{int(time.time())}.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(all_businesses, f, indent=2, ensure_ascii=False)
        
        print("🎉 DISCOVERY COMPLETE!")
        print("=" * 40)
        print(f"📊 Total businesses found: {len(all_businesses)}")
        print(f"💾 Data saved: {output_file}")
        print(f"🔄 Cache updated with {len(new_searches)} completed searches")
        
        # Show samples
        print(f"\n📄 SAMPLE DISCOVERED BUSINESSES:")
        for i, business in enumerate(all_businesses[:3], 1):
            print(f"[{i}] {business['name']}")
            print(f"    Website: {business['website']}")
            print(f"    Phone: {business.get('phone', 'N/A')}")
            print(f"    Address: {business.get('address', 'N/A')}")
            print()
    else:
        print("❌ No new businesses found")

if __name__ == "__main__":
    main()
