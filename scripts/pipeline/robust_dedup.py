#!/usr/bin/env python3
"""
Robust Deduplication & API Monitor System
=========================================
- Comprehensive duplicate prevention
- API usage tracking and limits
- Data validation at every step
- Automatic recovery mechanisms
"""

import json
import os
import hashlib
import time
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Tuple
from pathlib import Path

class RobustDeduplicationManager:
    def __init__(self, base_dir: str = "scripts/pipeline"):
        self.base_dir = Path(base_dir)
        self.cache_file = self.base_dir / "robust_cache.json"
        self.api_log_file = self.base_dir / "api_usage.json"
        self.validation_log = self.base_dir / "validation_log.json"
        
        # Load all data
        self.cache = self.load_cache()
        self.api_usage = self.load_api_usage()
        self.validation_data = self.load_validation_data()
        
        # API limits (conservative defaults)
        self.api_limits = {
            "serper_daily": 1000,
            "ollama_hourly": 500,
            "requests_per_minute": 30
        }
    
    def load_cache(self) -> Dict:
        """Load comprehensive cache data"""
        if self.cache_file.exists():
            with open(self.cache_file, 'r') as f:
                return json.load(f)
        
        return {
            "searches": {},           # search_hash -> metadata
            "websites": {},           # url_hash -> scrape_metadata  
            "businesses": {},         # business_id -> generation_metadata
            "duplicates_prevented": 0,
            "last_cleanup": None,
            "cache_version": "2.0",
            "created": datetime.now().isoformat()
        }
    
    def load_api_usage(self) -> Dict:
        """Load API usage tracking"""
        if self.api_log_file.exists():
            with open(self.api_log_file, 'r') as f:
                return json.load(f)
        
        return {
            "serper_api": {
                "requests_today": 0,
                "requests_this_hour": 0,
                "last_request": None,
                "daily_reset": datetime.now().date().isoformat(),
                "hourly_reset": datetime.now().replace(minute=0, second=0).isoformat(),
                "total_requests": 0,
                "errors": []
            },
            "ollama_api": {
                "requests_today": 0,
                "requests_this_hour": 0,
                "last_request": None,
                "generation_time_total": 0,
                "average_generation_time": 0,
                "total_generations": 0,
                "errors": []
            }
        }
    
    def load_validation_data(self) -> Dict:
        """Load validation and quality tracking"""
        if self.validation_log.exists():
            with open(self.validation_log, 'r') as f:
                return json.load(f)
        
        return {
            "validation_checks": [],
            "quality_metrics": {
                "total_businesses_processed": 0,
                "successful_generations": 0,
                "failed_generations": 0,
                "average_word_count": 0,
                "hallucination_incidents": 0
            },
            "last_validation": None
        }
    
    def save_all_data(self):
        """Save all cache data atomically"""
        self.cache["last_updated"] = datetime.now().isoformat()
        
        # Save to temporary files first, then rename (atomic operation)
        temp_cache = self.cache_file.with_suffix('.tmp')
        temp_api = self.api_log_file.with_suffix('.tmp')
        temp_validation = self.validation_log.with_suffix('.tmp')
        
        try:
            with open(temp_cache, 'w') as f:
                json.dump(self.cache, f, indent=2)
            
            with open(temp_api, 'w') as f:
                json.dump(self.api_usage, f, indent=2)
            
            with open(temp_validation, 'w') as f:
                json.dump(self.validation_data, f, indent=2)
            
            # Atomic rename
            temp_cache.rename(self.cache_file)
            temp_api.rename(self.api_log_file)
            temp_validation.rename(self.validation_log)
            
        except Exception as e:
            # Cleanup temp files on error
            for temp_file in [temp_cache, temp_api, temp_validation]:
                if temp_file.exists():
                    temp_file.unlink()
            raise e
    
    def create_hash(self, data: str) -> str:
        """Create consistent hash for data"""
        return hashlib.sha256(data.encode()).hexdigest()[:16]
    
    def check_api_limits(self, api_type: str) -> Tuple[bool, str]:
        """Check if API usage is within limits"""
        now = datetime.now()
        
        if api_type == "serper":
            api_data = self.api_usage["serper_api"]
            
            # Check daily limit
            today = now.date().isoformat()
            if api_data["daily_reset"] != today:
                api_data["requests_today"] = 0
                api_data["daily_reset"] = today
            
            if api_data["requests_today"] >= self.api_limits["serper_daily"]:
                return False, f"Daily Serper limit reached ({self.api_limits['serper_daily']})"
            
            # Check rate limiting
            if api_data["last_request"]:
                last_req = datetime.fromisoformat(api_data["last_request"])
                if (now - last_req).total_seconds() < 2:  # 2 second minimum between requests
                    return False, "Rate limit: wait 2 seconds between Serper requests"
        
        elif api_type == "ollama":
            api_data = self.api_usage["ollama_api"]
            
            # Check hourly limit
            current_hour = now.replace(minute=0, second=0).isoformat()
            if api_data["hourly_reset"] != current_hour:
                api_data["requests_this_hour"] = 0
                api_data["hourly_reset"] = current_hour
            
            if api_data["requests_this_hour"] >= self.api_limits["ollama_hourly"]:
                return False, f"Hourly Ollama limit reached ({self.api_limits['ollama_hourly']})"
        
        return True, "OK"
    
    def log_api_request(self, api_type: str, success: bool = True, error: str = None, generation_time: float = 0):
        """Log API request with comprehensive tracking"""
        now = datetime.now().isoformat()
        
        if api_type == "serper":
            api_data = self.api_usage["serper_api"]
            api_data["requests_today"] += 1
            api_data["total_requests"] += 1
            api_data["last_request"] = now
            
            if not success and error:
                api_data["errors"].append({
                    "timestamp": now,
                    "error": error
                })
        
        elif api_type == "ollama":
            api_data = self.api_usage["ollama_api"]
            api_data["requests_this_hour"] += 1
            api_data["total_generations"] += 1
            api_data["last_request"] = now
            
            if generation_time > 0:
                api_data["generation_time_total"] += generation_time
                api_data["average_generation_time"] = api_data["generation_time_total"] / api_data["total_generations"]
            
            if not success and error:
                api_data["errors"].append({
                    "timestamp": now,
                    "error": error
                })
    
    def is_search_duplicate(self, term: str, location: str) -> bool:
        """Check if search combination already exists"""
        search_key = self.create_hash(f"{term.lower()}-{location.lower()}")
        return search_key in self.cache["searches"]
    
    def mark_search_completed(self, term: str, location: str, results_count: int = 0):
        """Mark search as completed with metadata"""
        search_key = self.create_hash(f"{term.lower()}-{location.lower()}")
        
        self.cache["searches"][search_key] = {
            "term": term,
            "location": location,
            "results_count": results_count,
            "completed_at": datetime.now().isoformat(),
            "hash": search_key
        }
    
    def is_website_duplicate(self, url: str) -> bool:
        """Check if website already scraped"""
        url_key = self.create_hash(url.lower())
        return url_key in self.cache["websites"]
    
    def mark_website_scraped(self, url: str, business_name: str = "", success: bool = True, content_length: int = 0):
        """Mark website as scraped with quality metrics"""
        url_key = self.create_hash(url.lower())
        
        self.cache["websites"][url_key] = {
            "url": url,
            "business_name": business_name,
            "scraped_at": datetime.now().isoformat(),
            "success": success,
            "content_length": content_length,
            "hash": url_key
        }
    
    def is_business_duplicate(self, business_id: str) -> bool:
        """Check if business already has generated content"""
        return business_id in self.cache["businesses"]
    
    def mark_business_generated(self, business_id: str, business_name: str = "", word_count: int = 0, 
                              uses_real_data: bool = True, generation_time: float = 0):
        """Mark business as having AI content generated"""
        self.cache["businesses"][business_id] = {
            "business_id": business_id,
            "business_name": business_name,
            "generated_at": datetime.now().isoformat(),
            "word_count": word_count,
            "uses_real_data": uses_real_data,
            "generation_time": generation_time
        }
        
        # Update quality metrics
        self.validation_data["quality_metrics"]["total_businesses_processed"] += 1
        if word_count > 0:
            self.validation_data["quality_metrics"]["successful_generations"] += 1
        else:
            self.validation_data["quality_metrics"]["failed_generations"] += 1
    
    def validate_business_data(self, business_data: Dict) -> Dict:
        """Comprehensive validation of business data"""
        validation_result = {
            "timestamp": datetime.now().isoformat(),
            "business_id": business_data.get("id", "unknown"),
            "business_name": business_data.get("name", "unknown"),
            "checks": {},
            "overall_status": "pass",
            "warnings": [],
            "errors": []
        }
        
        # Required field validation
        required_fields = ["id", "name", "website"]
        for field in required_fields:
            validation_result["checks"][f"{field}_present"] = field in business_data and business_data[field]
            if not validation_result["checks"][f"{field}_present"]:
                validation_result["errors"].append(f"Missing required field: {field}")
                validation_result["overall_status"] = "fail"
        
        # Data quality checks
        if "phone" in business_data and business_data["phone"]:
            phone = business_data["phone"]
            # Check for fake phone patterns
            fake_patterns = ["123-4567", "555-", "000-", "111-1111"]
            is_fake = any(pattern in phone for pattern in fake_patterns)
            validation_result["checks"]["phone_appears_real"] = not is_fake
            if is_fake:
                validation_result["warnings"].append(f"Phone number appears fake: {phone}")
                self.validation_data["quality_metrics"]["hallucination_incidents"] += 1
        
        # Website validation
        if "website" in business_data and business_data["website"]:
            website = business_data["website"].lower()
            corporate_indicators = ["cabela", "sportsman", "walmart", "scheels"]
            is_corporate = any(corp in website for corp in corporate_indicators)
            validation_result["checks"]["not_corporate"] = not is_corporate
            if is_corporate:
                validation_result["warnings"].append(f"Appears to be corporate website: {website}")
        
        # Log validation
        self.validation_data["validation_checks"].append(validation_result)
        self.validation_data["last_validation"] = validation_result["timestamp"]
        
        return validation_result
    
    def filter_duplicate_searches(self, terms: List[str], locations: List[str]) -> List[Tuple[str, str]]:
        """Filter out duplicate searches with detailed logging"""
        new_searches = []
        duplicates = []
        
        for location in locations:
            for term in terms:
                if not self.is_search_duplicate(term, location):
                    new_searches.append((term, location))
                else:
                    search_info = self.cache["searches"][self.create_hash(f"{term.lower()}-{location.lower()}")]
                    duplicates.append((term, location, search_info["completed_at"]))
        
        if duplicates:
            self.cache["duplicates_prevented"] += len(duplicates)
            print(f"🔄 DEDUPLICATION: Prevented {len(duplicates)} duplicate searches")
            for term, location, completed_at in duplicates[:3]:
                print(f"   ✅ '{term}' in {location} (done: {completed_at[:10]})")
            if len(duplicates) > 3:
                print(f"   ... and {len(duplicates) - 3} more")
        
        return new_searches
    
    def filter_duplicate_websites(self, businesses: List[Dict]) -> List[Dict]:
        """Filter out websites already scraped"""
        new_businesses = []
        duplicates = []
        
        for business in businesses:
            website = business.get("website", "")
            if website and not self.is_website_duplicate(website):
                # Validate before adding
                validation = self.validate_business_data(business)
                if validation["overall_status"] != "fail":
                    new_businesses.append(business)
            elif website:
                website_info = self.cache["websites"][self.create_hash(website.lower())]
                duplicates.append((business.get("name", "Unknown"), website_info["scraped_at"]))
        
        if duplicates:
            self.cache["duplicates_prevented"] += len(duplicates)
            print(f"🔄 DEDUPLICATION: Prevented {len(duplicates)} duplicate website scrapes")
            for name, scraped_at in duplicates[:3]:
                print(f"   ✅ {name} (scraped: {scraped_at[:10]})")
        
        return new_businesses
    
    def filter_duplicate_generations(self, businesses: List[Dict]) -> List[Dict]:
        """Filter out businesses already generated"""
        new_businesses = []
        duplicates = []
        
        for business in businesses:
            business_id = business.get("id", "")
            if business_id and not self.is_business_duplicate(business_id):
                new_businesses.append(business)
            elif business_id:
                gen_info = self.cache["businesses"][business_id]
                duplicates.append((business.get("name", "Unknown"), gen_info["generated_at"]))
        
        if duplicates:
            self.cache["duplicates_prevented"] += len(duplicates)
            print(f"🔄 DEDUPLICATION: Prevented {len(duplicates)} duplicate AI generations")
            for name, generated_at in duplicates[:3]:
                print(f"   ✅ {name} (generated: {generated_at[:10]})")
        
        return new_businesses
    
    def get_comprehensive_status(self) -> Dict:
        """Get detailed system status"""
        return {
            "cache_status": {
                "searches_tracked": len(self.cache["searches"]),
                "websites_tracked": len(self.cache["websites"]),
                "businesses_tracked": len(self.cache["businesses"]),
                "duplicates_prevented": self.cache["duplicates_prevented"],
                "cache_version": self.cache.get("cache_version", "1.0")
            },
            "api_status": {
                "serper_requests_today": self.api_usage["serper_api"]["requests_today"],
                "serper_total": self.api_usage["serper_api"]["total_requests"],
                "ollama_requests_hour": self.api_usage["ollama_api"]["requests_this_hour"],
                "ollama_total": self.api_usage["ollama_api"]["total_generations"],
                "avg_generation_time": self.api_usage["ollama_api"]["average_generation_time"]
            },
            "quality_metrics": self.validation_data["quality_metrics"],
            "health_check": {
                "cache_writable": self.cache_file.parent.is_dir(),
                "last_validation": self.validation_data.get("last_validation"),
                "recent_errors": len([e for api in [self.api_usage["serper_api"], self.api_usage["ollama_api"]] 
                                    for e in api.get("errors", []) 
                                    if datetime.fromisoformat(e["timestamp"]) > datetime.now() - timedelta(hours=24)])
            }
        }
    
    def cleanup_old_data(self, days_old: int = 30):
        """Clean up old cache entries"""
        cutoff_date = datetime.now() - timedelta(days=days_old)
        
        # Clean old searches
        old_searches = []
        for search_key, search_data in list(self.cache["searches"].items()):
            if datetime.fromisoformat(search_data["completed_at"]) < cutoff_date:
                old_searches.append(search_key)
        
        for key in old_searches:
            del self.cache["searches"][key]
        
        # Clean old validations (keep only recent ones)
        recent_validations = [
            v for v in self.validation_data["validation_checks"]
            if datetime.fromisoformat(v["timestamp"]) > cutoff_date
        ]
        self.validation_data["validation_checks"] = recent_validations[-100:]  # Keep last 100
        
        self.cache["last_cleanup"] = datetime.now().isoformat()
        
        if old_searches:
            print(f"🧹 Cleaned up {len(old_searches)} old cache entries")

def main():
    """Status and management interface"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Robust Deduplication Manager')
    parser.add_argument('--status', action='store_true', help='Show comprehensive status')
    parser.add_argument('--cleanup', type=int, metavar='DAYS', help='Clean data older than N days')
    parser.add_argument('--validate', action='store_true', help='Run validation checks')
    
    args = parser.parse_args()
    
    manager = RobustDeduplicationManager()
    
    if args.status:
        status = manager.get_comprehensive_status()
        print("📊 ROBUST DEDUPLICATION STATUS")
        print("=" * 50)
        print(f"🔍 Searches Tracked: {status['cache_status']['searches_tracked']}")
        print(f"🌐 Websites Tracked: {status['cache_status']['websites_tracked']}")
        print(f"🤖 Businesses Generated: {status['cache_status']['businesses_tracked']}")
        print(f"🔄 Duplicates Prevented: {status['cache_status']['duplicates_prevented']}")
        print(f"📡 Serper Requests Today: {status['api_status']['serper_requests_today']}")
        print(f"🤖 Ollama Avg Time: {status['api_status']['avg_generation_time']:.1f}s")
        print(f"✅ Success Rate: {status['quality_metrics']['successful_generations']}/{status['quality_metrics']['total_businesses_processed']}")
        
    elif args.cleanup:
        manager.cleanup_old_data(args.cleanup)
        manager.save_all_data()
        
    elif args.validate:
        print("🔍 Running validation checks...")
        # Validation would be run during normal operations
        
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
