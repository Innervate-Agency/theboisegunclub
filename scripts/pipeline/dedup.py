#!/usr/bin/env python3
"""
Simple Deduplication System
===========================
Prevents duplicate work in the AI content pipeline
"""

import json
import os
import hashlib
from datetime import datetime
from typing import List, Dict

class DeduplicationManager:
    def __init__(self):
        self.cache_file = "scripts/pipeline/pipeline_cache.json"
        self.cache = self.load_cache()
    
    def load_cache(self) -> Dict:
        """Load existing cache or create new one"""
        if os.path.exists(self.cache_file):
            with open(self.cache_file, 'r') as f:
                return json.load(f)
        
        return {
            "completed_searches": [],
            "scraped_websites": [],
            "generated_businesses": [],
            "last_updated": datetime.now().isoformat()
        }
    
    def save_cache(self):
        """Save cache to disk"""
        self.cache["last_updated"] = datetime.now().isoformat()
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f, indent=2)
    
    def is_search_completed(self, term: str, location: str) -> bool:
        """Check if search was already done"""
        search_key = f"{term.lower()}-{location.lower()}"
        return search_key in self.cache["completed_searches"]
    
    def mark_search_completed(self, term: str, location: str):
        """Mark search as completed"""
        search_key = f"{term.lower()}-{location.lower()}"
        if search_key not in self.cache["completed_searches"]:
            self.cache["completed_searches"].append(search_key)
    
    def is_website_scraped(self, url: str) -> bool:
        """Check if website was already scraped"""
        return url in self.cache["scraped_websites"]
    
    def mark_website_scraped(self, url: str):
        """Mark website as scraped"""
        if url not in self.cache["scraped_websites"]:
            self.cache["scraped_websites"].append(url)
    
    def filter_new_searches(self, terms: List[str], locations: List[str]) -> List[tuple]:
        """Filter out completed searches"""
        new_searches = []
        skipped = 0
        
        for location in locations:
            for term in terms:
                if not self.is_search_completed(term, location):
                    new_searches.append((term, location))
                else:
                    skipped += 1
        
        if skipped > 0:
            print(f"🔄 Skipping {skipped} already completed searches")
        
        return new_searches
    
    def filter_new_websites(self, businesses: List[Dict]) -> List[Dict]:
        """Filter out already scraped websites"""
        new_businesses = []
        skipped = 0
        
        for business in businesses:
            website = business.get("website", "")
            if website and not self.is_website_scraped(website):
                new_businesses.append(business)
            elif website:
                skipped += 1
        
        if skipped > 0:
            print(f"🔄 Skipping {skipped} already scraped websites")
        
        return new_businesses
    
    def get_stats(self) -> Dict:
        """Get cache statistics"""
        return {
            "completed_searches": len(self.cache["completed_searches"]),
            "scraped_websites": len(self.cache["scraped_websites"]),
            "generated_businesses": len(self.cache["generated_businesses"]),
            "last_updated": self.cache.get("last_updated", "Never")
        }

def main():
    """Show cache stats"""
    manager = DeduplicationManager()
    stats = manager.get_stats()
    
    print("📊 DEDUPLICATION CACHE STATUS")
    print("=" * 40)
    for key, value in stats.items():
        print(f"{key.replace('_', ' ').title()}: {value}")

if __name__ == "__main__":
    main()
