#!/usr/bin/env python3
"""
PRODUCTION WEBSITE SCRAPER
==========================
Bulletproof website scraping for discovered businesses:
✅ Deduplication to prevent re-scraping
✅ Robust error handling and retries
✅ Comprehensive content extraction
✅ Corporate chain filtering
✅ Progress tracking and backups
"""

import requests
import json
import time
import os
import sys
import shutil
from datetime import datetime
from pathlib import Path
from bs4 import BeautifulSoup
import re
import glob

class ProductionWebsiteScraper:
    def __init__(self):
        self.base_dir = Path("scripts/pipeline")
        self.cache_file = self.base_dir / "production_cache.json"
        self.backup_dir = self.base_dir / "backups"
        
        # Load cache
        self.cache = self.load_cache()
        
        # Scraping settings
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        self.timeout = 15
        self.delay_between_requests = 3
        self.max_retries = 2
        
        print("🌐 PRODUCTION WEBSITE SCRAPER INITIALIZED")
        print("✅ Deduplication: ENABLED")
        print("✅ Content extraction: ADVANCED")
        print("✅ Error recovery: ENABLED")
        print()
    
    def load_cache(self) -> dict:
        """Load existing cache"""
        if self.cache_file.exists():
            with open(self.cache_file, 'r') as f:
                return json.load(f)
        
        # Return empty cache if not found
        return {
            "searches_completed": {},
            "websites_scraped": {},
            "businesses_generated": {},
            "api_usage": {"serper_requests_today": 0},
            "stats": {"duplicates_prevented": 0}
        }
    
    def save_cache(self):
        """Save cache with backup"""
        self.cache["last_updated"] = datetime.now().isoformat()
        
        # Create backup
        if self.cache_file.exists():
            backup_file = self.backup_dir / f"cache_scraper_{int(time.time())}.json"
            shutil.copy2(self.cache_file, backup_file)
        
        # Save current cache
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f, indent=2)
    
    def is_website_scraped(self, url: str) -> bool:
        """Check if website already scraped"""
        return url in self.cache["websites_scraped"]
    
    def mark_website_scraped(self, url: str, success: bool, content_length: int = 0):
        """Mark website as scraped"""
        self.cache["websites_scraped"][url] = {
            "scraped_at": datetime.now().isoformat(),
            "success": success,
            "content_length": content_length
        }
    
    def filter_corporate_chains(self, businesses: list) -> list:
        """Remove corporate chains from business list"""
        corporate_chains = [
            'cabela', 'sportsman', 'scheels', 'walmart', 'bass pro', 
            'dicks sporting', 'gander', 'fleet farm'
        ]
        
        local_businesses = []
        corporate_filtered = []
        
        for business in businesses:
            name_lower = business['name'].lower()
            is_corporate = any(chain in name_lower for chain in corporate_chains)
            
            if not is_corporate:
                local_businesses.append(business)
            else:
                corporate_filtered.append(business['name'])
        
        if corporate_filtered:
            print(f"🚫 Filtered out {len(corporate_filtered)} corporate chains:")
            for corp in corporate_filtered[:5]:
                print(f"   - {corp}")
            if len(corporate_filtered) > 5:
                print(f"   ... and {len(corporate_filtered) - 5} more")
        
        return local_businesses
    
    def extract_content(self, soup, text_content: str) -> dict:
        """Extract comprehensive content from website"""
        content = {
            'page_title': soup.title.string if soup.title else '',
            'meta_description': '',
            'main_text': '',
            'contact_info': {},
            'services': [],
            'business_description': '',
            'hours': '',
            'content_length': len(text_content)
        }
        
        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            content['meta_description'] = meta_desc.get('content', '')[:500]
        
        # Clean main text (limit to 8000 chars)
        clean_text = ' '.join(text_content.split())
        content['main_text'] = clean_text[:8000]
        
        # Extract contact info
        content['contact_info'] = self.extract_contact_info(text_content)
        
        # Extract services
        content['services'] = self.extract_services(text_content)
        
        # Extract business description (from paragraphs)
        paragraphs = soup.find_all('p')
        if paragraphs:
            desc_text = ' '.join([p.get_text() for p in paragraphs[:3]])
            content['business_description'] = ' '.join(desc_text.split())[:1500]
        
        # Extract hours
        content['hours'] = self.extract_hours(text_content)
        
        return content
    
    def extract_contact_info(self, text_content: str) -> dict:
        """Extract phone numbers and emails"""
        contact_info = {}
        
        # Phone numbers (Idaho area codes: 208, 986)
        phone_patterns = [
            r'\b(?:208|986)[-.\s]?\d{3}[-.\s]?\d{4}\b',
            r'\(\d{3}\)\s?\d{3}[-.\s]?\d{4}',
            r'\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b'
        ]
        
        all_phones = []
        for pattern in phone_patterns:
            phones = re.findall(pattern, text_content)
            all_phones.extend(phones)
        
        if all_phones:
            # Clean and deduplicate
            cleaned = list(set([re.sub(r'[^\d]', '', phone) for phone in all_phones]))
            # Keep only 10-digit numbers
            valid_phones = [phone for phone in cleaned if len(phone) == 10]
            if valid_phones:
                contact_info['phones'] = valid_phones
        
        # Email addresses
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, text_content)
        if emails:
            contact_info['emails'] = list(set(emails))[:5]  # Limit to 5
        
        return contact_info
    
    def extract_services(self, text_content: str) -> list:
        """Extract services from website text"""
        service_keywords = {
            'firearms': ['firearm', 'gun', 'rifle', 'pistol', 'shotgun', 'handgun'],
            'shooting': ['shooting', 'range', 'target', 'practice'],
            'training': ['training', 'class', 'course', 'instruction', 'safety', 'ccw'],
            'gunsmith': ['gunsmith', 'repair', 'custom', 'modification'],
            'ammunition': ['ammunition', 'ammo', 'cartridge', 'bullet', 'shell'],
            'hunting': ['hunting', 'hunt', 'deer', 'elk', 'game'],
            'archery': ['archery', 'bow', 'arrow', 'compound'],
            'tactical': ['tactical', 'defense', 'security'],
            'accessories': ['scope', 'sight', 'holster', 'case'],
            'pawn': ['pawn', 'buy', 'sell', 'trade']
        }
        
        text_lower = text_content.lower()
        found_services = []
        
        for service, keywords in service_keywords.items():
            if any(keyword in text_lower for keyword in keywords):
                found_services.append(service)
        
        return found_services
    
    def extract_hours(self, text_content: str) -> str:
        """Extract business hours"""
        hours_patterns = [
            r'hours?:?\s*([^\n]+(?:am|pm)[^\n]*)',
            r'open:?\s*([^\n]+(?:am|pm)[^\n]*)',
            r'mon[a-z]*[:\s-]+.*?(?:sun|closed)',
        ]
        
        text_lower = text_content.lower()
        for pattern in hours_patterns:
            match = re.search(pattern, text_lower, re.IGNORECASE | re.DOTALL)
            if match:
                return match.group(1)[:200]
        
        return ""
    
    def scrape_website_safely(self, business: dict) -> dict:
        """Scrape website with error handling and retries"""
        website = business.get('website', '')
        if not website:
            business['scraping_success'] = False
            business['scraping_error'] = 'No website URL'
            return business
        
        # Check if already scraped
        if self.is_website_scraped(website):
            self.cache["stats"]["duplicates_prevented"] += 1
            business['scraping_success'] = True
            business['scraping_cached'] = True
            return business
        
        print(f"🌐 Scraping: {business['name']}")
        print(f"    URL: {website}")
        
        last_error = None
        
        for attempt in range(self.max_retries):
            try:
                response = requests.get(
                    website, 
                    headers=self.headers, 
                    timeout=self.timeout
                )
                
                if response.status_code == 200:
                    soup = BeautifulSoup(response.text, 'html.parser')
                    
                    # Remove scripts/styles for cleaner text
                    for script in soup(["script", "style", "nav", "footer"]):
                        script.decompose()
                    
                    text_content = soup.get_text()
                    
                    # Extract all content
                    scraped_content = self.extract_content(soup, text_content)
                    
                    # Add to business data
                    business['scraped_content'] = scraped_content
                    business['scraping_success'] = True
                    business['scraped_at'] = datetime.now().isoformat()
                    
                    # Mark as scraped in cache
                    self.mark_website_scraped(
                        website, 
                        success=True, 
                        content_length=len(text_content)
                    )
                    
                    print(f"    ✅ Success - {len(text_content)} chars, {len(scraped_content['services'])} services")
                    if scraped_content['contact_info'].get('phones'):
                        print(f"    📞 Phones: {scraped_content['contact_info']['phones']}")
                    
                    return business
                
                else:
                    last_error = f"HTTP {response.status_code}"
                    print(f"    ⚠️  Attempt {attempt + 1}: {last_error}")
                    
            except Exception as e:
                last_error = str(e)
                print(f"    ⚠️  Attempt {attempt + 1}: {last_error}")
                
            # Wait before retry
            if attempt < self.max_retries - 1:
                time.sleep(2)
        
        # All attempts failed
        business['scraping_success'] = False
        business['scraping_error'] = last_error
        
        # Still mark as attempted in cache
        self.mark_website_scraped(website, success=False)
        
        print(f"    ❌ Failed after {self.max_retries} attempts: {last_error}")
        return business
    
    def scrape_businesses(self, businesses: list, batch_size: int = 20) -> list:
        """Scrape websites from business list"""
        print("🌐 PRODUCTION WEBSITE SCRAPING")
        print("-" * 50)
        
        # Filter corporate chains
        local_businesses = self.filter_corporate_chains(businesses)
        
        # Filter already scraped
        new_businesses = []
        already_scraped = 0
        
        for business in local_businesses:
            website = business.get('website', '')
            if website and not self.is_website_scraped(website):
                new_businesses.append(business)
            elif website:
                already_scraped += 1
        
        if already_scraped > 0:
            print(f"🔄 Skipped {already_scraped} already scraped websites")
        
        if not new_businesses:
            print("✅ All websites already scraped")
            return []
        
        print(f"🌐 Will scrape {min(len(new_businesses), batch_size)} websites")
        print()
        
        # Process in batches
        scraped_businesses = []
        successful_scrapes = 0
        failed_scrapes = 0
        
        for i, business in enumerate(new_businesses[:batch_size], 1):
            print(f"[{i}/{min(len(new_businesses), batch_size)}] Processing...")
            
            scraped_business = self.scrape_website_safely(business)
            scraped_businesses.append(scraped_business)
            
            if scraped_business.get('scraping_success'):
                successful_scrapes += 1
            else:
                failed_scrapes += 1
            
            # Save progress every 5 businesses
            if i % 5 == 0:
                self.save_cache()
            
            # Respectful delay
            if i < min(len(new_businesses), batch_size):
                print(f"    ⏳ Waiting {self.delay_between_requests}s...")
                time.sleep(self.delay_between_requests)
            
            print()
        
        # Final save
        self.save_cache()
        
        print("🎉 SCRAPING COMPLETE!")
        print("=" * 40)
        print(f"📊 Successfully scraped: {successful_scrapes}")
        print(f"📊 Failed to scrape: {failed_scrapes}")
        print(f"📊 Success rate: {successful_scrapes/(successful_scrapes+failed_scrapes)*100:.1f}%")
        
        return scraped_businesses
    
    def load_and_scrape_discovered_businesses(self, batch_size: int = 20):
        """Load discovered businesses and scrape them"""
        # Find latest discovered businesses file
        discovered_files = glob.glob("scripts/pipeline/discovered_production_*.json")
        if not discovered_files:
            print("❌ No discovered businesses file found")
            print("   Run: python3 scripts/pipeline/production_pipeline.py --run")
            return
        
        latest_file = max(discovered_files)
        print(f"📂 Loading: {latest_file}")
        
        with open(latest_file, 'r') as f:
            businesses = json.load(f)
        
        print(f"🏪 Found {len(businesses)} discovered businesses")
        
        # Scrape websites
        scraped_businesses = self.scrape_businesses(businesses, batch_size)
        
        if scraped_businesses:
            # Save scraped results
            output_file = f"scripts/pipeline/scraped_production_{int(time.time())}.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(scraped_businesses, f, indent=2, ensure_ascii=False)
            
            print(f"💾 Scraped businesses saved: {output_file}")
            
            # Show sample
            successful = [b for b in scraped_businesses if b.get('scraping_success')]
            if successful:
                sample = successful[0]
                scraped = sample['scraped_content']
                
                print(f"\n📄 SAMPLE SCRAPED BUSINESS:")
                print(f"Name: {sample['name']}")
                print(f"Website: {sample.get('website', 'N/A')}")
                print(f"Services: {scraped['services']}")
                print(f"Real Phones: {scraped['contact_info'].get('phones', [])}")
                print(f"Content Length: {scraped['content_length']} chars")
                print(f"Hours: {scraped.get('hours', 'Not found')}")

def main():
    """Command line interface"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Production Website Scraper')
    parser.add_argument('--scrape', type=int, default=20, metavar='N', help='Scrape N websites (default: 20)')
    parser.add_argument('--status', action='store_true', help='Show scraping status')
    
    args = parser.parse_args()
    
    try:
        scraper = ProductionWebsiteScraper()
        
        if args.status:
            cache = scraper.cache
            print("📊 WEBSITE SCRAPING STATUS")
            print("=" * 40)
            print(f"Websites scraped: {len(cache.get('websites_scraped', {}))}")
            print(f"Duplicates prevented: {cache.get('stats', {}).get('duplicates_prevented', 0)}")
            print(f"Last updated: {cache.get('last_updated', 'Never')}")
            
        else:
            scraper.load_and_scrape_discovered_businesses(args.scrape)
            
    except Exception as e:
        print(f"❌ Scraper error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
