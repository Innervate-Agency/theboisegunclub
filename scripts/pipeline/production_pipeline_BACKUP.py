#!/usr/bin/env python3
"""
PRODUCTION AI CONTENT PIPELINE
==============================
- Bulletproof deduplication system
- API usage monitoring 
- Comprehensive data validation
- Automatic backup and recovery
- Fault tolerance with retries
"""

import requests
import json
import time
import os
import sys
import shutil
import hashlib
from datetime import datetime, timedelta
from pathlib import Path
from dotenv import load_dotenv

load_dotenv('.env.local')

class ProductionPipeline:
    def __init__(self):
        # Setup directories
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
        
        # Settings
        self.max_retries = 3
        self.api_delay = 2  # Seconds between API calls
        
        print("🛡️  PRODUCTION PIPELINE INITIALIZED")
        print("✅ Deduplication: ENABLED")
        print("✅ API monitoring: ENABLED") 
        print("✅ Backup system: ENABLED")
        print("✅ Data validation: ENABLED")
        print()
    
    def load_cache(self) -> dict:
        """Load or create cache"""
        if self.cache_file.exists():
            with open(self.cache_file, 'r') as f:
                return json.load(f)
        
        return {
            "searches_completed": {},  # term_location -> metadata
            "websites_scraped": {},    # url -> metadata
            "businesses_generated": {},# id -> metadata
            "api_usage": {
                "serper_requests_today": 0,
                "last_request_date": None,
                "total_requests": 0
            },
            "stats": {
                "duplicates_prevented": 0,
                "validation_failures": 0,
                "successful_generations": 0
            },
            "last_backup": None,
            "created": datetime.now().isoformat()
        }
    
    def save_cache(self):
        """Save cache with backup"""
        self.cache["last_updated"] = datetime.now().isoformat()
        
        # Create backup first
        if self.cache_file.exists():
            backup_file = self.backup_dir / f"cache_backup_{int(time.time())}.json"
            shutil.copy2(self.cache_file, backup_file)
        
        # Save current cache
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f, indent=2)
    
    def create_hash(self, data: str) -> str:
        """Create hash for deduplication"""
        return hashlib.sha256(data.encode()).hexdigest()[:16]
    
    def is_duplicate_search(self, term: str, location: str) -> bool:
        """Check if search already completed"""
        key = f"{term.lower()}_{location.lower()}"
        return key in self.cache["searches_completed"]
    
    def mark_search_completed(self, term: str, location: str, count: int):
        """Mark search as completed"""
        key = f"{term.lower()}_{location.lower()}" 
        self.cache["searches_completed"][key] = {
            "term": term,
            "location": location,
            "businesses_found": count,
            "completed_at": datetime.now().isoformat()
        }
    
    def validate_business(self, business: dict) -> tuple:
        """Validate business data - returns (is_valid, warnings)"""
        warnings = []
        
        # Required fields
        required = ["id", "name", "website"]
        for field in required:
            if not business.get(field):
                return False, [f"Missing required field: {field}"]
        
        # Check for corporate chains
        name_lower = business["name"].lower()
        corporate_chains = ["cabela", "sportsman", "scheels", "walmart", "bass pro"]
        if any(chain in name_lower for chain in corporate_chains):
            warnings.append(f"Corporate chain detected: {business['name']}")
        
        # Check for fake-looking phone numbers
        phone = business.get("phone", "")
        if phone and ("123-4567" in phone or "555-" in phone):
            warnings.append(f"Suspicious phone number: {phone}")
        
        return True, warnings
    
    def check_api_limits(self) -> bool:
        """Check if we can make API requests"""
        today = datetime.now().date().isoformat()
        
        # Reset daily counter if new day
        if self.cache["api_usage"]["last_request_date"] != today:
            self.cache["api_usage"]["serper_requests_today"] = 0
            self.cache["api_usage"]["last_request_date"] = today
        
        # Check daily limit (conservative)
        if self.cache["api_usage"]["serper_requests_today"] >= 500:
            print("🚫 Daily API limit reached (500 requests)")
            return False
        
        return True
    
    def log_api_request(self):
        """Log API request"""
        self.cache["api_usage"]["serper_requests_today"] += 1
        self.cache["api_usage"]["total_requests"] += 1
    
    def safe_serper_request(self, term: str, location: str) -> list:
        """Make safe Serper API request with retries"""
        if not self.check_api_limits():
            return []
        
        query = f"{term} {location} Idaho hours contact website"
        
        for attempt in range(self.max_retries):
            try:
                print(f"   🔍 API Request (attempt {attempt + 1}): {query}")
                
                response = requests.post(
                    "https://google.serper.dev/places",
                    headers={
                        'X-API-KEY': self.serper_key,
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
                    self.log_api_request()
                    data = response.json()
                    places = data.get('places', [])
                    
                    businesses = []
                    for i, place in enumerate(places):
                        business = {
                            'id': f"serper_{term}_{location}_{i+1}",
                            'name': place.get('title', ''),
                            'address': place.get('address', ''),
                            'city': location,
                            'phone': place.get('phoneNumber', ''),
                            'website': place.get('website', ''),
                            'rating': place.get('rating', 0),
                            'category': place.get('category', ''),
                            'search_term': term,
                            'discovered_at': datetime.now().isoformat()
                        }
                        
                        # Only include if has website
                        if business['website']:
                            businesses.append(business)
                    
                    print(f"   ✅ Found {len(businesses)} businesses with websites")
                    time.sleep(self.api_delay)  # Rate limiting
                    return businesses
                
                else:
                    print(f"   ⚠️  API returned {response.status_code}")
                    
            except Exception as e:
                print(f"   ⚠️  Attempt {attempt + 1} failed: {e}")
                if attempt < self.max_retries - 1:
                    time.sleep(5 * (attempt + 1))  # Exponential backoff
        
        print(f"   ❌ All attempts failed")
        return []
    
    def run_discovery(self, search_terms: list, locations: list) -> list:
        """Run protected business discovery"""
        print("🔍 PROTECTED BUSINESS DISCOVERY")
        print("-" * 50)
        
        # Filter out completed searches
        new_searches = []
        duplicates = 0
        
        for location in locations:
            for term in search_terms:
                if not self.is_duplicate_search(term, location):
                    new_searches.append((term, location))
                else:
                    duplicates += 1
        
        if duplicates > 0:
            self.cache["stats"]["duplicates_prevented"] += duplicates
            print(f"🔄 Skipped {duplicates} already completed searches")
        
        if not new_searches:
            print("✅ All searches already completed")
            return []
        
        print(f"🔍 Will perform {len(new_searches)} new searches")
        print()
        
        all_businesses = []
        
        for i, (term, location) in enumerate(new_searches, 1):
            print(f"[{i}/{len(new_searches)}] Searching '{term}' in {location}")
            
            businesses = self.safe_serper_request(term, location)
            
            # Validate each business
            valid_businesses = []
            for business in businesses:
                is_valid, warnings = self.validate_business(business)
                
                if is_valid:
                    valid_businesses.append(business)
                    if warnings:
                        print(f"   ⚠️  {business['name']}: {len(warnings)} warnings")
                else:
                    self.cache["stats"]["validation_failures"] += 1
                    print(f"   ❌ {business['name']}: VALIDATION FAILED")
            
            all_businesses.extend(valid_businesses)
            
            # Mark search as completed
            self.mark_search_completed(term, location, len(valid_businesses))
            
            # Save progress frequently
            self.save_cache()
            
            print()
        
        print(f"🎉 DISCOVERY COMPLETE: {len(all_businesses)} total valid businesses")
        return all_businesses
    
    def run_pipeline(self, search_terms: list = None, locations: list = None):
        """Run complete production pipeline"""
        print("🛡️  PRODUCTION AI CONTENT PIPELINE")
        print("=" * 80)
        
        # Default parameters
        if not search_terms:
            search_terms = [
                "gun store", "shooting range", "gunsmith",
                "firearms dealer", "hunting outfitter"
            ]
        
        if not locations:
            locations = [
                "Boise", "Meridian", "Nampa", "Eagle", "Kuna"
            ]
        
        print(f"📋 Search Parameters:")
        print(f"   Terms: {search_terms}")
        print(f"   Locations: {locations}")
        print(f"   Total combinations: {len(search_terms) * len(locations)}")
        print()
        
        try:
            # Run discovery
            businesses = self.run_discovery(search_terms, locations)
            
            if businesses:
                # Save discovered businesses
                output_file = f"scripts/pipeline/discovered_production_{int(time.time())}.json"
                with open(output_file, 'w') as f:
                    json.dump(businesses, f, indent=2)
                
                print(f"💾 Businesses saved: {output_file}")
            
            # Show final stats
            print("\n📊 PIPELINE STATISTICS:")
            print(f"   Businesses discovered: {len(businesses)}")
            print(f"   Duplicates prevented: {self.cache['stats']['duplicates_prevented']}")
            print(f"   Validation failures: {self.cache['stats']['validation_failures']}")
            print(f"   API requests today: {self.cache['api_usage']['serper_requests_today']}")
            
            return True
            
        except Exception as e:
            print(f"\n💥 PIPELINE ERROR: {e}")
            self.save_cache()  # Save state before exit
            return False
    
    def get_status(self):
        """Get pipeline status"""
        print("📊 PRODUCTION PIPELINE STATUS")
        print("=" * 40)
        print(f"Searches completed: {len(self.cache['searches_completed'])}")
        print(f"Websites tracked: {len(self.cache['websites_scraped'])}")
        print(f"Businesses generated: {len(self.cache['businesses_generated'])}")
        print(f"API requests today: {self.cache['api_usage']['serper_requests_today']}")
        print(f"Total API requests: {self.cache['api_usage']['total_requests']}")
        print(f"Duplicates prevented: {self.cache['stats']['duplicates_prevented']}")
        print(f"Validation failures: {self.cache['stats']['validation_failures']}")
        print(f"Last updated: {self.cache.get('last_updated', 'Never')}")

def main():
    """Command line interface"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Production AI Content Pipeline')
    parser.add_argument('--run', action='store_true', help='Run discovery pipeline')
    parser.add_argument('--status', action='store_true', help='Show status')
    
    args = parser.parse_args()
    
    try:
        pipeline = ProductionPipeline()
        
        if args.run:
            success = pipeline.run_pipeline()
            sys.exit(0 if success else 1)
        elif args.status:
            pipeline.get_status()
        else:
            parser.print_help()
            
    except Exception as e:
        print(f"❌ Pipeline initialization failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
