#!/usr/bin/env python3
"""
ENHANCED BUSINESS DISCOVERY 
===========================
Expanded search terms and locations for comprehensive Idaho business discovery
"""

import requests
import json
import time
import os
import sys
import shutil
from datetime import datetime, timedelta
from pathlib import Path
from dotenv import load_dotenv

load_dotenv('.env.local')

class EnhancedDiscovery:
    def __init__(self):
        self.base_dir = Path("scripts/pipeline")
        self.cache_file = self.base_dir / "production_cache.json" 
        self.backup_dir = self.base_dir / "backups"
        self.backup_dir.mkdir(exist_ok=True)
        
        # Load cache
        self.cache = self.load_cache()
        
        # API configuration
        self.serper_key = os.getenv('SERPER_API_KEY')
        if not self.serper_key:
            raise ValueError("❌ SERPER_API_KEY not found in environment")
        
        self.max_retries = 3
        self.api_delay = 2
        
        print("🔍 ENHANCED BUSINESS DISCOVERY")
        print("✅ Expanded search terms")
        print("✅ Comprehensive Idaho coverage")
        print("✅ Deduplication enabled")
        print()
    
    def load_cache(self) -> dict:
        """Load existing cache"""
        if self.cache_file.exists():
            with open(self.cache_file, 'r') as f:
                return json.load(f)
        
        return {
            "searches_completed": {},
            "websites_scraped": {},
            "businesses_generated": {},
            "api_usage": {"serper_requests_today": 0, "total_requests": 0},
            "stats": {"duplicates_prevented": 0, "validation_failures": 0}
        }
    
    def save_cache(self):
        """Save cache with backup"""
        self.cache["last_updated"] = datetime.now().isoformat()
        
        if self.cache_file.exists():
            backup_file = self.backup_dir / f"cache_{int(time.time())}.json"
            shutil.copy2(self.cache_file, backup_file)
        
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f, indent=2)
    
    def is_search_completed(self, term: str, location: str) -> bool:
        """Check if search combination already completed"""
        search_key = f"{term.lower()}|{location.lower()}"
        return search_key in self.cache["searches_completed"]
    
    def mark_search_completed(self, term: str, location: str, count: int):
        """Mark search as completed"""
        search_key = f"{term.lower()}|{location.lower()}"
        self.cache["searches_completed"][search_key] = {
            "completed_at": datetime.now().isoformat(),
            "results_count": count
        }
    
    def search_businesses(self, query: str) -> list:
        """Search for businesses using Serper API"""
        url = "https://google.serper.dev/search"
        
        payload = {
            'q': query,
            'gl': 'us',
            'hl': 'en'
        }
        
        headers = {
            'X-API-KEY': self.serper_key,
            'Content-Type': 'application/json'
        }
        
        for attempt in range(self.max_retries):
            try:
                response = requests.post(url, json=payload, headers=headers)
                
                if response.status_code == 200:
                    # Track API usage
                    self.cache["api_usage"]["serper_requests_today"] += 1
                    self.cache["api_usage"]["total_requests"] += 1
                    
                    data = response.json()
                    businesses = []
                    
                    # Extract organic results
                    for result in data.get('organic', [])[:20]:  # Top 20 results
                        business = {
                            'name': result.get('title', ''),
                            'website': result.get('link', ''),
                            'description': result.get('snippet', ''),
                            'search_query': query,
                            'discovered_at': datetime.now().isoformat()
                        }
                        businesses.append(business)
                    
                    return businesses
                
                else:
                    print(f"   ⚠️  API returned status {response.status_code}")
                    
            except Exception as e:
                print(f"   ⚠️  Attempt {attempt + 1} failed: {e}")
                
            if attempt < self.max_retries - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
        
        return []
    
    def get_comprehensive_search_terms(self, mode: str = "standard") -> list:
        """Get search terms based on mode"""
        
        if mode == "standard":
            return [
                "gun store", "shooting range", "gunsmith", 
                "firearms dealer", "hunting outfitter"
            ]
        
        elif mode == "expanded":
            return [
                # Core firearms
                "gun store", "gun shop", "firearms dealer", "firearms store",
                "gunsmith", "gun repair", "custom guns",
                
                # Shooting
                "shooting range", "indoor range", "outdoor range", 
                "gun range", "firing range", "shooting club",
                
                # Hunting & Outdoor
                "hunting outfitter", "hunting guide", "hunting supplies",
                "outdoor gear", "sporting goods", "archery shop",
                
                # Training & Safety
                "firearm training", "gun safety", "concealed carry",
                "shooting instructor", "NRA instructor",
                
                # Specialized
                "tactical gear", "military surplus", "pawn shop guns",
                "gun shows", "ammunition store", "reloading supplies"
            ]
        
        elif mode == "exhaustive":
            return [
                # All expanded terms plus more specific ones
                "gun store", "gun shop", "firearms dealer", "firearms store",
                "gunsmith", "gun repair", "custom guns", "gun manufacturing",
                
                "shooting range", "indoor range", "outdoor range", 
                "gun range", "firing range", "shooting club", "pistol range",
                "rifle range", "trap shooting", "skeet shooting",
                
                "hunting outfitter", "hunting guide", "hunting supplies",
                "outdoor gear", "sporting goods", "archery shop", "bow shop",
                "hunting lodge", "hunting guides Idaho",
                
                "firearm training", "gun safety", "concealed carry",
                "shooting instructor", "NRA instructor", "CCW classes",
                "hunter safety", "firearms education",
                
                "tactical gear", "military surplus", "pawn shop guns",
                "gun shows", "ammunition store", "reloading supplies",
                "gun accessories", "holsters", "gun cases", "optics",
                
                # Idaho specific
                "Idaho gun store", "Idaho firearms", "Idaho hunting",
                "Idaho shooting", "Idaho gunsmith", "Boise guns"
            ]
    
    def get_comprehensive_locations(self, mode: str = "standard") -> list:
        """Get locations based on mode"""
        
        if mode == "standard":
            return ["Boise", "Meridian", "Nampa", "Eagle", "Kuna"]
        
        elif mode == "expanded":
            return [
                # Major cities
                "Boise", "Meridian", "Nampa", "Eagle", "Kuna", "Caldwell",
                "Idaho Falls", "Pocatello", "Coeur d'Alene", "Twin Falls",
                "Lewiston", "Post Falls",
                
                # Smaller cities
                "McCall", "Sun Valley", "Sandpoint", "Rexburg", 
                "Moscow", "Blackfoot", "Burley"
            ]
        
        elif mode == "exhaustive":
            return [
                # All expanded plus more
                "Boise", "Meridian", "Nampa", "Eagle", "Kuna", "Caldwell",
                "Idaho Falls", "Pocatello", "Coeur d'Alene", "Twin Falls",
                "Lewiston", "Post Falls", "Hayden", "Rathdrum",
                
                "McCall", "Sun Valley", "Sandpoint", "Rexburg", 
                "Moscow", "Blackfoot", "Burley", "Jerome", "Rupert",
                
                "Mountain Home", "Emmett", "Payette", "Fruitland",
                "Weiser", "Ontario Oregon", "Baker City Oregon",
                
                # Regional terms
                "Treasure Valley", "Magic Valley", "North Idaho", 
                "East Idaho", "Southeast Idaho", "Idaho"
            ]
    
    def run_discovery(self, mode: str = "standard"):
        """Run comprehensive business discovery"""
        search_terms = self.get_comprehensive_search_terms(mode)
        locations = self.get_comprehensive_locations(mode)
        
        total_combinations = len(search_terms) * len(locations)
        
        print(f"🎯 DISCOVERY MODE: {mode.upper()}")
        print(f"📋 Search terms: {len(search_terms)}")
        print(f"🌍 Locations: {len(locations)}")
        print(f"🔢 Total combinations: {total_combinations}")
        print()
        
        all_businesses = []
        completed_searches = 0
        skipped_searches = 0
        
        for term in search_terms:
            for location in locations:
                query = f"{term} {location}"
                
                # Check if already completed
                if self.is_search_completed(term, location):
                    skipped_searches += 1
                    print(f"⏭️  Skipping: {query} (already completed)")
                    continue
                
                completed_searches += 1
                print(f"🔍 [{completed_searches}/{total_combinations - skipped_searches}] Searching: {query}")
                
                # Search businesses
                businesses = self.search_businesses(query)
                
                if businesses:
                    print(f"   ✅ Found {len(businesses)} results")
                    all_businesses.extend(businesses)
                else:
                    print(f"   ❌ No results")
                
                # Mark as completed
                self.mark_search_completed(term, location, len(businesses))
                
                # Save progress frequently
                if completed_searches % 5 == 0:
                    self.save_cache()
                
                # API rate limiting
                time.sleep(self.api_delay)
                print()
        
        print(f"🎉 DISCOVERY COMPLETE!")
        print(f"📊 Total searches: {completed_searches}")
        print(f"⏭️  Skipped (already done): {skipped_searches}")
        print(f"🏪 Raw results found: {len(all_businesses)}")
        
        # Remove duplicates by website URL
        unique_businesses = {}
        for business in all_businesses:
            url = business.get('website', '').lower().strip()
            if url and url not in unique_businesses:
                unique_businesses[url] = business
        
        final_businesses = list(unique_businesses.values())
        print(f"🔄 After deduplication: {len(final_businesses)} unique businesses")
        
        if final_businesses:
            # Save results
            output_file = f"scripts/pipeline/discovered_production_{int(time.time())}.json"
            with open(output_file, 'w') as f:
                json.dump(final_businesses, f, indent=2)
            
            print(f"💾 Results saved: {output_file}")
        
        # Save final cache
        self.save_cache()
        
        return final_businesses

def main():
    """Command line interface"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Enhanced Business Discovery')
    parser.add_argument('--mode', choices=['standard', 'expanded', 'exhaustive'], 
                       default='standard', help='Discovery mode (default: standard)')
    parser.add_argument('--status', action='store_true', help='Show discovery status')
    
    args = parser.parse_args()
    
    try:
        discovery = EnhancedDiscovery()
        
        if args.status:
            cache = discovery.cache
            print("📊 DISCOVERY STATUS")
            print("=" * 30)
            print(f"Searches completed: {len(cache.get('searches_completed', {}))}")
            print(f"API requests today: {cache.get('api_usage', {}).get('serper_requests_today', 0)}")
            print(f"Total API requests: {cache.get('api_usage', {}).get('total_requests', 0)}")
            print(f"Last updated: {cache.get('last_updated', 'Never')}")
        else:
            discovery.run_discovery(args.mode)
            
    except Exception as e:
        print(f"❌ Discovery failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
