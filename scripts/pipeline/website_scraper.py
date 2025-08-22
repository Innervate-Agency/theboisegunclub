#!/usr/bin/env python3
"""
Website Content Scraper - Get REAL Business Data
===============================================
Scrapes actual business websites to extract:
- Contact information (phone, email, address)
- Services offered
- About text and business descriptions
- Hours of operation
"""

import requests
import json
import time
from bs4 import BeautifulSoup
import re
from datetime import datetime

class BusinessWebsiteScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    
    def scrape_business_website(self, business: dict) -> dict:
        """Scrape comprehensive content from a business website"""
        website = business.get('website', '')
        if not website:
            return business
        
        print(f"🌐 Scraping: {business['name']}")
        print(f"    URL: {website}")
        
        try:
            response = requests.get(website, headers=self.headers, timeout=15)
            if response.status_code == 200:
                soup = BeautifulSoup(response.text, 'html.parser')
                
                # Remove scripts and styles for cleaner text
                for script in soup(["script", "style", "nav", "footer", "header"]):
                    script.decompose()
                
                # Extract all text content
                text_content = soup.get_text()
                clean_text = ' '.join(text_content.split())
                
                # Initialize scraped content structure
                scraped_content = {
                    'page_title': soup.title.string if soup.title else '',
                    'meta_description': self.extract_meta_description(soup),
                    'full_text': clean_text[:8000],  # First 8k chars
                    'contact_info': self.extract_contact_info(text_content),
                    'services': self.extract_services(text_content),
                    'business_description': self.extract_business_description(soup, text_content),
                    'hours': self.extract_hours(text_content),
                    'scraped_at': datetime.now().isoformat(),
                    'content_length': len(clean_text)
                }
                
                business['scraped_content'] = scraped_content
                business['scraping_success'] = True
                
                print(f"    ✅ Success - {len(clean_text)} chars, {len(scraped_content['services'])} services")
                print(f"    📞 Phones: {scraped_content['contact_info'].get('phones', [])}")
                
            else:
                print(f"    ❌ HTTP {response.status_code}")
                business['scraping_success'] = False
                
        except Exception as e:
            print(f"    💥 Error: {e}")
            business['scraping_success'] = False
        
        return business
    
    def extract_meta_description(self, soup):
        """Extract meta description"""
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            return meta_desc.get('content', '')
        return ''
    
    def extract_contact_info(self, text_content):
        """Extract contact information from text"""
        contact_info = {}
        
        # Phone numbers - various formats
        phone_patterns = [
            r'\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b',
            r'\(\d{3}\)\s?\d{3}[-.\s]?\d{4}',
            r'\b208[-.\s]?\d{3}[-.\s]?\d{4}\b'  # Idaho area code
        ]
        
        phones = []
        for pattern in phone_patterns:
            matches = re.findall(pattern, text_content)
            phones.extend(matches)
        
        if phones:
            # Clean and deduplicate phones
            cleaned_phones = list(set([re.sub(r'[^\d]', '', phone) for phone in phones]))
            contact_info['phones'] = [phone for phone in cleaned_phones if len(phone) == 10]
        
        # Email addresses
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, text_content)
        if emails:
            contact_info['emails'] = list(set(emails))
        
        return contact_info
    
    def extract_services(self, text_content):
        """Extract services/products from website text"""
        service_keywords = {
            'firearms': ['firearm', 'gun', 'rifle', 'pistol', 'shotgun', 'handgun'],
            'shooting': ['shooting', 'range', 'target', 'practice'],
            'training': ['training', 'class', 'course', 'instruction', 'safety', 'ccw', 'concealed'],
            'gunsmith': ['gunsmith', 'repair', 'custom', 'modification', 'service'],
            'ammunition': ['ammunition', 'ammo', 'cartridge', 'bullet', 'shell'],
            'hunting': ['hunting', 'hunt', 'deer', 'elk', 'bird', 'game'],
            'archery': ['archery', 'bow', 'arrow', 'compound', 'recurve'],
            'tactical': ['tactical', 'defense', 'security', 'law enforcement'],
            'accessories': ['accessory', 'scope', 'sight', 'holster', 'case'],
            'pawn': ['pawn', 'buy', 'sell', 'trade', 'consignment']
        }
        
        text_lower = text_content.lower()
        found_services = []
        
        for service, keywords in service_keywords.items():
            if any(keyword in text_lower for keyword in keywords):
                found_services.append(service)
        
        return found_services
    
    def extract_business_description(self, soup, text_content):
        """Try to find the main business description"""
        # Look for about sections
        about_selectors = [
            'div:contains("about")', 'section:contains("about")',
            'div:contains("our story")', 'div:contains("welcome")',
            '.about', '#about', '.description'
        ]
        
        description_text = ""
        
        # Try CSS selectors first
        for selector in about_selectors:
            try:
                elements = soup.select(selector)
                if elements:
                    description_text = ' '.join([elem.get_text() for elem in elements[:2]])
                    break
            except:
                continue
        
        # If no specific about section, take first few paragraphs
        if not description_text:
            paragraphs = soup.find_all('p')
            if paragraphs:
                description_text = ' '.join([p.get_text() for p in paragraphs[:3]])
        
        # Clean and limit length
        if description_text:
            clean_desc = ' '.join(description_text.split())
            return clean_desc[:1500]
        
        return ""
    
    def extract_hours(self, text_content):
        """Extract business hours if present"""
        hours_patterns = [
            r'hours?:?\s*([^\n]+(?:am|pm)[^\n]*)',
            r'open:?\s*([^\n]+(?:am|pm)[^\n]*)',
            r'monday.+?(?:sunday|closed)',
        ]
        
        text_lower = text_content.lower()
        for pattern in hours_patterns:
            match = re.search(pattern, text_lower, re.IGNORECASE | re.DOTALL)
            if match:
                return match.group(1)[:200]  # Limit length
        
        return ""

def main():
    """Load discovered businesses and scrape their websites"""
    
    print("🌐 WEBSITE CONTENT SCRAPER")
    print("=" * 50)
    print("📄 Loading discovered businesses...")
    
    # Load the most recent discovered businesses file
    import glob
    discovered_files = glob.glob("scripts/pipeline/discovered_businesses_*.json")
    if not discovered_files:
        print("❌ No discovered businesses file found")
        print("   Run real_data_pipeline.py first")
        return
    
    latest_file = max(discovered_files)
    print(f"📂 Loading: {latest_file}")
    
    with open(latest_file, 'r') as f:
        businesses = json.load(f)
    
    print(f"🏪 Found {len(businesses)} businesses to scrape")
    
    # Filter out corporate chains
    corporate_chains = [
        'cabela', 'sportsman', 'scheels', 'walmart', 'dicks sporting',
        'bass pro', 'gander', 'fleet farm'
    ]
    
    local_businesses = []
    for business in businesses:
        name_lower = business['name'].lower()
        is_corporate = any(chain in name_lower for chain in corporate_chains)
        
        if not is_corporate:
            local_businesses.append(business)
        else:
            print(f"🚫 Filtered out corporate: {business['name']}")
    
    print(f"✅ {len(local_businesses)} LOCAL businesses to scrape")
    print()
    
    # Scrape websites
    scraper = BusinessWebsiteScraper()
    enriched_businesses = []
    
    for i, business in enumerate(local_businesses[:8], 1):  # Limit to 8 for testing
        print(f"[{i}/8] Processing...")
        enriched_business = scraper.scrape_business_website(business)
        enriched_businesses.append(enriched_business)
        
        # Be respectful with delays
        if i < len(local_businesses):
            time.sleep(3)
        print()
    
    # Save enriched data
    output_file = f"scripts/pipeline/scraped_businesses_{int(time.time())}.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(enriched_businesses, f, indent=2, ensure_ascii=False)
    
    # Summary
    successful = sum(1 for b in enriched_businesses if b.get('scraping_success', False))
    
    print("🎉 SCRAPING COMPLETE!")
    print("=" * 40)
    print(f"📊 Successfully scraped: {successful}/{len(enriched_businesses)} websites")
    print(f"💾 Data saved: {output_file}")
    
    if successful > 0:
        # Show sample of scraped data
        sample = next((b for b in enriched_businesses if b.get('scraping_success')), None)
        scraped = sample['scraped_content']
        
        print(f"\n📄 SAMPLE SCRAPED DATA:")
        print(f"Business: {sample['name']}")
        print(f"Services: {scraped['services']}")
        print(f"Phones: {scraped['contact_info'].get('phones', [])}")
        print(f"Content length: {scraped['content_length']} chars")
        print(f"Description preview: {scraped['business_description'][:200]}...")
        
        print(f"\n✅ Ready for AI generation with REAL scraped content!")

if __name__ == "__main__":
    main()
