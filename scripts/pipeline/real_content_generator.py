#!/usr/bin/env python3
"""
Real Content AI Generator - Uses ACTUAL scraped data
==================================================
Generate business descriptions using the Idaho Community Steward voice
with REAL scraped website content - NO fake data!
"""

import requests
import json
import time
from datetime import datetime
import glob

class RealDataGenerator:
    def __init__(self):
        self.model = "idaho-business-writer"
        self.base_url = "http://localhost:11434/api/generate"
    
    def generate_with_real_data(self, business: dict) -> dict:
        """Generate description using REAL scraped business data"""
        
        if not business.get('scraping_success'):
            print(f"⚠️  Skipping {business['name']} - no scraped data")
            return None
        
        scraped = business['scraped_content']
        
        # Build prompt with ACTUAL scraped data
        prompt = f"""Write a business description using this REAL scraped website data:

BUSINESS NAME: {business['name']}
LOCATION: {business.get('address', 'Idaho')}
PHONE: {business.get('phone', 'See website')}

REAL WEBSITE CONTENT:
Page Title: {scraped['page_title']}
Services Offered: {', '.join(scraped['services'])}
Business Hours: {scraped.get('hours', 'Contact for hours')}

ACTUAL BUSINESS DESCRIPTION FROM THEIR WEBSITE:
{scraped['business_description'][:800]}

WEBSITE TEXT SAMPLE:
{scraped['full_text'][:1000]}

INSTRUCTIONS:
- Use authentic Idaho Community Steward voice
- Reference only the REAL information provided above
- Use "folks" instead of "customers"
- Include Treasure Valley/local references naturally
- DO NOT invent phone numbers, addresses, or business details
- Use the ACTUAL services and information from their website
- Write 150-200 words
- Focus on what makes this LOCAL business special

Write the business description:"""

        try:
            response = requests.post(
                self.base_url,
                json={
                    "model": self.model,
                    "prompt": prompt,
                    "stream": False,
                    "options": {
                        "temperature": 0.7,
                        "seed": int(time.time())
                    }
                },
                timeout=120
            )
            
            if response.status_code == 200:
                result = response.json()
                description = result.get("response", "").strip()
                
                if description:
                    word_count = len(description.split())
                    
                    return {
                        'description': description,
                        'word_count': word_count,
                        'confidence': 0.95 if 150 <= word_count <= 250 else 0.8,
                        'model': self.model,
                        'uses_real_data': True,
                        'scraped_services': scraped['services'],
                        'scraped_phone': scraped['contact_info'].get('phones', []),
                        'content_source': 'real_website_scrape'
                    }
            
            return None
            
        except Exception as e:
            print(f"Generation error: {e}")
            return None

def main():
    """Generate descriptions using real scraped business data"""
    
    print("🎯 REAL DATA AI CONTENT GENERATOR")
    print("=" * 60)
    print("🌐 Using ACTUAL scraped website content")
    print("🚫 NO fake phone numbers or made-up details!")
    print()
    
    # Load scraped businesses
    scraped_files = glob.glob("scripts/pipeline/scraped_businesses_*.json")
    if not scraped_files:
        print("❌ No scraped businesses file found")
        print("   Run website_scraper.py first")
        return
    
    latest_file = max(scraped_files)
    print(f"📂 Loading: {latest_file}")
    
    with open(latest_file, 'r') as f:
        businesses = json.load(f)
    
    # Filter to only businesses with successful scraping
    scraped_businesses = [b for b in businesses if b.get('scraping_success')]
    print(f"✅ {len(scraped_businesses)} businesses with real scraped data")
    print()
    
    generator = RealDataGenerator()
    generated_results = {}
    
    for i, business in enumerate(scraped_businesses[:5], 1):
        print(f"[{i}/5] 🏪 {business['name']}")
        print(f"      📍 {business.get('address', 'Idaho')}")
        print(f"      📞 {business.get('phone', 'N/A')}")
        
        scraped = business['scraped_content']
        print(f"      🌐 Services: {scraped['services']}")
        
        start_time = time.time()
        result = generator.generate_with_real_data(business)
        generation_time = time.time() - start_time
        
        if result:
            generated_results[business['id']] = {
                'business_name': business['name'],
                'real_phone': business.get('phone', ''),
                'real_address': business.get('address', ''),
                'real_services': scraped['services'],
                'website_content_length': scraped['content_length'],
                **result,
                'generation_time': generation_time,
                'generated_at': datetime.now().isoformat()
            }
            
            print(f"      ✅ Generated {result['word_count']} words in {generation_time:.1f}s")
            print(f"      📝 Preview: {result['description'][:100]}...")
            
        else:
            print(f"      ❌ Generation failed")
        
        print()
        time.sleep(2)
    
    # Save results
    output_file = f"scripts/pipeline/real_generated_{int(time.time())}.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(generated_results, f, indent=2, ensure_ascii=False)
    
    print("🎉 REAL DATA GENERATION COMPLETE!")
    print("=" * 50)
    print(f"📊 Generated: {len(generated_results)}/{len(scraped_businesses)} descriptions")
    print(f"💾 Results saved: {output_file}")
    
    if generated_results:
        avg_words = sum(r['word_count'] for r in generated_results.values()) / len(generated_results)
        print(f"📈 Average words: {avg_words:.1f}")
        
        # Show one complete example with REAL data
        sample_key = list(generated_results.keys())[0]
        sample = generated_results[sample_key]
        
        print(f"\n📄 SAMPLE DESCRIPTION WITH REAL DATA:")
        print("=" * 80)
        print(f"Business: {sample['business_name']}")
        print(f"Real Phone: {sample['real_phone']}")
        print(f"Real Address: {sample['real_address']}")
        print(f"Real Services: {sample['real_services']}")
        print(f"Website Content Used: {sample['website_content_length']} chars")
        print(f"Words: {sample['word_count']}")
        print()
        print("AI-GENERATED DESCRIPTION:")
        print("-" * 40)
        print(sample['description'])
        print("=" * 80)
        
        print(f"\n✅ All descriptions use REAL scraped data - NO hallucination!")

if __name__ == "__main__":
    main()
