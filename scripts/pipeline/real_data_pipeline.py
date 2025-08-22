#!/usr/bin/env python3
"""
Real Data Pipeline - Discovery to AI Generation
===============================================
1. Use Serper API to find local Idaho businesses
2. Scrape their websites for real content
3. Store enriched data for AI generation
"""

import requests
import json
import time
import os
from datetime import datetime
from bs4 import BeautifulSoup
import re
from dotenv import load_dotenv

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
    """Run the real data discovery pipeline"""
    
    print("🎯 REAL DATA PIPELINE - DISCOVERY")
    print("=" * 50)
    print("📍 Searching for LOCAL businesses in Idaho")
    print("🌐 Using Serper API for discovery")
    print()
    
    # Define search parameters for LOCAL businesses
    search_terms = [
        "gun store",
        "shooting range"
    ]
    
    locations = [
        "Boise", "Meridian"
    ]
    
    # Step 1: Discover businesses
    print("STEP 1: BUSINESS DISCOVERY")
    print("-" * 40)
    
    discoverer = SerperBusinessDiscovery()
    businesses = discoverer.search_local_businesses(search_terms, locations)
    
    print(f"\n📊 DISCOVERY RESULTS:")
    print(f"   Found {len(businesses)} businesses with websites")
    
    if businesses:
        # Save discovered data
        output_file = f"scripts/pipeline/discovered_businesses_{int(time.time())}.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(businesses, f, indent=2, ensure_ascii=False)
        
        print(f"💾 Data saved: {output_file}")
        
        # Show samples
        for i, business in enumerate(businesses[:3], 1):
            print(f"\n[{i}] {business['name']}")
            print(f"    Website: {business['website']}")
            print(f"    Phone: {business.get('phone', 'N/A')}")
            print(f"    Address: {business.get('address', 'N/A')}")
    else:
        print("❌ No businesses found")

if __name__ == "__main__":
    main()
