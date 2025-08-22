#!/usr/bin/env python3
"""
BOISE GUN CLUB PIPELINE DASHBOARD
=================================
Complete pipeline status monitoring and management
"""

import json
import glob
import os
from datetime import datetime
from pathlib import Path
import sys

class PipelineDashboard:
    def __init__(self):
        self.base_dir = Path("scripts/pipeline")
        self.cache_file = self.base_dir / "production_cache.json"
        
        print("📊 BOISE GUN CLUB PIPELINE DASHBOARD")
        print("=" * 50)
    
    def load_cache(self) -> dict:
        """Load production cache"""
        if self.cache_file.exists():
            with open(self.cache_file, 'r') as f:
                return json.load(f)
        return {}
    
    def find_latest_files(self) -> dict:
        """Find latest files from each stage"""
        files = {
            "discovered": glob.glob("scripts/pipeline/discovered_production_*.json"),
            "scraped": glob.glob("scripts/pipeline/scraped_production_*.json"),
            "ai_generated": glob.glob("scripts/pipeline/ai_generated_production_*.json")
        }
        
        latest = {}
        for stage, file_list in files.items():
            if file_list:
                latest[stage] = max(file_list)
            else:
                latest[stage] = None
        
        return latest
    
    def analyze_discovered_businesses(self, file_path: str) -> dict:
        """Analyze discovered businesses data"""
        if not file_path or not os.path.exists(file_path):
            return {"status": "missing", "count": 0}
        
        try:
            with open(file_path, 'r') as f:
                businesses = json.load(f)
            
            categories = {}
            locations = {}
            
            for business in businesses:
                category = business.get('category', 'Unknown')
                city = business.get('city', 'Unknown')
                
                categories[category] = categories.get(category, 0) + 1
                locations[city] = locations.get(city, 0) + 1
            
            return {
                "status": "ok",
                "count": len(businesses),
                "categories": categories,
                "locations": locations,
                "file": os.path.basename(file_path)
            }
        except Exception as e:
            return {"status": "error", "error": str(e), "count": 0}
    
    def analyze_scraped_businesses(self, file_path: str) -> dict:
        """Analyze scraped businesses data"""
        if not file_path or not os.path.exists(file_path):
            return {"status": "missing", "count": 0}
        
        try:
            with open(file_path, 'r') as f:
                businesses = json.load(f)
            
            successful = [b for b in businesses if b.get("scraping_success")]
            failed = [b for b in businesses if not b.get("scraping_success")]
            
            content_stats = {
                "with_content": 0,
                "with_phones": 0,
                "with_hours": 0,
                "with_services": 0
            }
            
            for business in successful:
                scraped_content = business.get("scraped_content", {})
                if scraped_content.get("main_text"):
                    content_stats["with_content"] += 1
                if scraped_content.get("contact_info", {}).get("phones"):
                    content_stats["with_phones"] += 1
                if scraped_content.get("hours"):
                    content_stats["with_hours"] += 1
                if scraped_content.get("services"):
                    content_stats["with_services"] += 1
            
            return {
                "status": "ok",
                "total_count": len(businesses),
                "successful": len(successful),
                "failed": len(failed),
                "success_rate": len(successful) / len(businesses) * 100 if businesses else 0,
                "content_stats": content_stats,
                "file": os.path.basename(file_path)
            }
        except Exception as e:
            return {"status": "error", "error": str(e), "count": 0}
    
    def analyze_ai_generated(self, file_path: str) -> dict:
        """Analyze AI generated content"""
        if not file_path or not os.path.exists(file_path):
            return {"status": "missing", "count": 0}
        
        try:
            with open(file_path, 'r') as f:
                businesses = json.load(f)
            
            successful = [b for b in businesses if b.get("ai_generation_success")]
            failed = [b for b in businesses if not b.get("ai_generation_success")]
            
            quality_stats = {
                "high_quality": 0,
                "medium_quality": 0,
                "low_quality": 0,
                "total_words": 0,
                "avg_score": 0
            }
            
            scores = []
            for business in successful:
                ai_content = business.get("ai_content", {})
                if "validation" in ai_content:
                    score = ai_content["validation"].get("score", 0)
                    scores.append(score)
                    
                    if score >= 70:
                        quality_stats["high_quality"] += 1
                    elif score >= 50:
                        quality_stats["medium_quality"] += 1
                    else:
                        quality_stats["low_quality"] += 1
                
                if "word_count" in ai_content:
                    quality_stats["total_words"] += ai_content["word_count"]
            
            if scores:
                quality_stats["avg_score"] = sum(scores) / len(scores)
            
            return {
                "status": "ok",
                "total_count": len(businesses),
                "successful": len(successful),
                "failed": len(failed),
                "success_rate": len(successful) / len(businesses) * 100 if businesses else 0,
                "quality_stats": quality_stats,
                "file": os.path.basename(file_path)
            }
        except Exception as e:
            return {"status": "error", "error": str(e), "count": 0}
    
    def show_pipeline_status(self):
        """Show complete pipeline status"""
        cache = self.load_cache()
        latest_files = self.find_latest_files()
        
        print(f"📅 Last Updated: {cache.get('last_updated', 'Never')}")
        print()
        
        # Discovery Stage
        print("🔍 DISCOVERY STAGE")
        print("-" * 20)
        discovery_data = self.analyze_discovered_businesses(latest_files["discovered"])
        
        if discovery_data["status"] == "ok":
            print(f"✅ Status: Active")
            print(f"📊 Businesses Found: {discovery_data['count']}")
            print(f"📁 Latest File: {discovery_data['file']}")
            
            if discovery_data["categories"]:
                print("📋 Top Categories:")
                for category, count in sorted(discovery_data["categories"].items(), key=lambda x: x[1], reverse=True)[:3]:
                    print(f"   • {category}: {count}")
        else:
            print(f"❌ Status: {discovery_data['status']}")
        
        print()
        
        # Scraping Stage
        print("🌐 SCRAPING STAGE")
        print("-" * 16)
        scraping_data = self.analyze_scraped_businesses(latest_files["scraped"])
        
        if scraping_data["status"] == "ok":
            print(f"✅ Status: Active")
            print(f"📊 Total Processed: {scraping_data['total_count']}")
            print(f"✅ Successful: {scraping_data['successful']}")
            print(f"❌ Failed: {scraping_data['failed']}")
            print(f"📈 Success Rate: {scraping_data['success_rate']:.1f}%")
            print(f"📁 Latest File: {scraping_data['file']}")
            
            content = scraping_data["content_stats"]
            print("📄 Content Quality:")
            print(f"   • With Content: {content['with_content']}")
            print(f"   • With Phones: {content['with_phones']}")
            print(f"   • With Services: {content['with_services']}")
        else:
            print(f"❌ Status: {scraping_data['status']}")
        
        print()
        
        # AI Generation Stage
        print("🤖 AI GENERATION STAGE")
        print("-" * 21)
        ai_data = self.analyze_ai_generated(latest_files["ai_generated"])
        
        if ai_data["status"] == "ok":
            print(f"✅ Status: Active")
            print(f"📊 Total Processed: {ai_data['total_count']}")
            print(f"✅ Successful: {ai_data['successful']}")
            print(f"❌ Failed: {ai_data['failed']}")
            print(f"📈 Success Rate: {ai_data['success_rate']:.1f}%")
            print(f"📁 Latest File: {ai_data['file']}")
            
            quality = ai_data["quality_stats"]
            print("⭐ Quality Distribution:")
            print(f"   • High Quality (70+): {quality['high_quality']}")
            print(f"   • Medium Quality (50-69): {quality['medium_quality']}")
            print(f"   • Average Score: {quality['avg_score']:.1f}/80")
            print(f"   • Total Words: {quality['total_words']:,}")
        else:
            print(f"❌ Status: {ai_data['status']}")
        
        print()
        
        # Cache Stats
        print("💾 CACHE & DEDUPLICATION")
        print("-" * 24)
        print(f"🔄 Searches Completed: {len(cache.get('searches_completed', {}))}")
        print(f"🌐 Websites Scraped: {len(cache.get('websites_scraped', {}))}")
        print(f"🤖 Businesses Generated: {len(cache.get('businesses_generated', {}))}")
        print(f"🚫 Duplicates Prevented: {cache.get('stats', {}).get('duplicates_prevented', 0)}")
        
        print()
        
        # Recommendations
        print("💡 NEXT STEPS")
        print("-" * 11)
        
        if discovery_data["count"] == 0:
            print("1️⃣  Run business discovery first:")
            print("   python3 scripts/pipeline/production_pipeline.py --run")
        elif scraping_data.get("successful", 0) == 0:
            print("2️⃣  Run website scraping:")
            print("   python3 scripts/pipeline/website_scraper_production.py --scrape 20")
        elif ai_data.get("successful", 0) == 0:
            print("3️⃣  Run AI content generation:")
            print("   python3 scripts/pipeline/ai_content_generator.py --generate 10 --model idaho-business-writer:latest")
        else:
            discovered = discovery_data.get("count", 0)
            scraped = scraping_data.get("successful", 0)
            generated = ai_data.get("successful", 0)
            
            if discovered > 0:
                scrape_completion = (scraped / discovered) * 100
                ai_completion = (generated / scraped) * 100 if scraped > 0 else 0
                
                print(f"📊 Pipeline Progress:")
                print(f"   • Discovery: {discovered} businesses")
                print(f"   • Scraping: {scrape_completion:.1f}% complete")
                print(f"   • AI Generation: {ai_completion:.1f}% complete")
                
                if scrape_completion < 90:
                    print("\n🎯 Continue website scraping:")
                    print("   python3 scripts/pipeline/website_scraper_production.py --scrape 20")
                elif ai_completion < 90:
                    print("\n🎯 Continue AI content generation:")
                    print("   python3 scripts/pipeline/ai_content_generator.py --generate 10 --model idaho-business-writer:latest")
                else:
                    print("\n🎉 Pipeline is complete!")

def main():
    """Command line interface"""
    try:
        dashboard = PipelineDashboard()
        dashboard.show_pipeline_status()
    except Exception as e:
        print(f"❌ Dashboard error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
