#!/usr/bin/env python3
"""
Generate AI Descriptions for LOCAL INDEPENDENT Businesses - WSL
===============================================================
Uses the Idaho Community Steward voice to generate descriptions
ONLY for local independent businesses. NO corporate chains!
"""

import requests
import json
import time
import random
from datetime import datetime

class LocalBusinessGenerator:
    def __init__(self):
        self.model = "idaho-business-writer"
        self.base_url = "http://localhost:11434/api/generate"
        
    def generate_description(self, business):
        """Generate description for a single local business"""
        
        prompt_variations = [
            "Start with local community emphasis and neighborly focus",
            "Lead with customer needs and practical Idaho solutions", 
            "Begin with local expertise and regional knowledge",
            "Open with seasonal relevance and Idaho outdoor lifestyle",
            "Focus on problem-solving and personal service quality"
        ]
        
        variation = random.choice(prompt_variations)
        
        prompt = f"""Write a business description for:

Business Name: {business.get('name', '')}
Location: {business.get('city', '')}, Idaho  
Category: {business.get('category', '')}
Services: {business.get('services', '')}

VARIATION INSTRUCTION: {variation}
- Use authentic Idaho Community Steward voice
- Reference Treasure Valley/local landmarks naturally
- Use "folks" instead of "customers"
- Include seasonal or outdoor lifestyle connections
- Focus on LOCAL, INDEPENDENT business values
- Avoid corporate buzzwords or chain-store language
- Emphasize personal service and community connections
- Write exactly 150-200 words

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
                        "seed": random.randint(1, 10000)
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
                        'variation_used': variation,
                        'confidence': 0.95 if 150 <= word_count <= 200 else 0.8,
                        'model': self.model
                    }
            
            return None
            
        except Exception as e:
            print(f"Generation error: {e}")
            return None

def main():
    """Generate descriptions for local businesses"""
    
    # LOCAL INDEPENDENT BUSINESSES ONLY - These would pass our commercial filters
    local_businesses = [
        {
            'id': 'local_001',
            'name': 'Boise Gun Exchange',
            'city': 'Boise',
            'category': 'Local Gun Store', 
            'services': 'New and used firearms, gunsmithing, FFL transfers, accessories'
        },
        {
            'id': 'local_002',
            'name': 'Snake River Sporting Goods',
            'city': 'Nampa',
            'category': 'Local Gun Shop',
            'services': 'Custom firearms, reloading supplies, gunsmithing, hunting licenses'
        },
        {
            'id': 'local_003', 
            'name': 'Mountain West Outfitters',
            'city': 'Kuna',
            'category': 'Hunting Outfitter',
            'services': 'Guided hunting, archery equipment, trophy processing, outdoor gear'
        },
        {
            'id': 'local_004',
            'name': 'Treasure Valley Tactical', 
            'city': 'Eagle',
            'category': 'Tactical Training',
            'services': 'Tactical training, law enforcement courses, defensive shooting instruction'
        },
        {
            'id': 'local_005',
            'name': 'Meridian Gun Range',
            'city': 'Meridian', 
            'category': 'Indoor Shooting Range',
            'services': 'Indoor shooting range, firearm rentals, safety training, concealed carry classes'
        }
    ]
    
    print("🎯 LOCAL BUSINESS DESCRIPTION GENERATION")
    print("=" * 60)
    print(f"📍 Environment: WSL2 Ubuntu")
    print(f"🤖 Model: idaho-business-writer")
    print(f"📋 Generating descriptions for {len(local_businesses)} LOCAL businesses")
    print(f"🚫 NO corporate chains included!")
    print()
    
    generator = LocalBusinessGenerator()
    results = {}
    
    for i, business in enumerate(local_businesses, 1):
        print(f"[{i}/{len(local_businesses)}] 🏪 {business['name']} - {business['city']}")
        print(f"      📂 {business['category']}")
        
        start_time = time.time()
        result = generator.generate_description(business)
        generation_time = time.time() - start_time
        
        if result:
            results[business['id']] = {
                'business_name': business['name'],
                'city': business['city'], 
                'category': business['category'],
                'services': business['services'],
                **result,
                'generation_time': generation_time,
                'generated_at': datetime.now().isoformat(),
                'business_type': 'local_independent'
            }
            
            print(f"      ✅ Generated {result['word_count']} words in {generation_time:.1f}s")
            print(f"      🎲 Variation: {result['variation_used'][:50]}...")
            
            # Check for Idaho voice markers
            desc_lower = result['description'].lower()
            markers = ['folks', 'treasure valley', 'idaho', 'community', 'local']
            found = [m for m in markers if m in desc_lower]
            print(f"      🎯 Idaho markers: {len(found)} found ({', '.join(found[:3])})")
            
        else:
            print(f"      ❌ Generation failed")
        
        print()
        
        # Delay between generations
        if i < len(local_businesses):
            time.sleep(2)
    
    # Save results
    output_file = f"scripts/pipeline/local_generated_{int(time.time())}.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print("🎉 GENERATION COMPLETE!")
    print("=" * 40)
    print(f"📊 Generated: {len(results)}/{len(local_businesses)} descriptions")
    
    if results:
        avg_words = sum(r['word_count'] for r in results.values()) / len(results)
        avg_time = sum(r['generation_time'] for r in results.values()) / len(results)
        
        print(f"📈 Average words: {avg_words:.1f}")
        print(f"⏱️  Average time: {avg_time:.1f}s per business")
        print(f"💾 Results saved: {output_file}")
        
        # Show sample
        sample = list(results.values())[0]
        print(f"\n📄 SAMPLE DESCRIPTION ({sample['business_name']}):")
        print("-" * 60)
        print(sample['description'])
        print("-" * 60)
        
        # Voice analysis
        all_text = ' '.join(r['description'].lower() for r in results.values())
        voice_stats = {
            'folks_usage': all_text.count('folks'),
            'treasure_valley': all_text.count('treasure valley'),
            'idaho_mentions': all_text.count('idaho'),
            'community_focus': all_text.count('community'),
            'local_emphasis': all_text.count('local')
        }
        
        print(f"\n🎯 VOICE ANALYSIS:")
        for key, count in voice_stats.items():
            print(f"   {key.replace('_', ' ').title()}: {count}")
            
        local_score = sum(voice_stats.values())
        print(f"\n📈 LOCAL VOICE SCORE: {local_score}")
        print("✅ Authentic Idaho Community Steward voice achieved!" if local_score >= 8 else "⚠️  Could enhance local language")

if __name__ == "__main__":
    main()
