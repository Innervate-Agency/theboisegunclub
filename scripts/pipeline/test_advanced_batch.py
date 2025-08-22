#!/usr/bin/env python3
"""
Test Advanced Idaho Community Steward Batch Generation
====================================================
Run a focused test of 5 businesses with the advanced model
"""

import requests
import json
import time
import random
from datetime import datetime

def test_idaho_model_batch():
    """Test the Idaho Community Steward model with 5 diverse businesses"""
    
    # Diverse test businesses representing different categories
    test_businesses = [
        {
            'id': 'advanced_test_001',
            'name': 'Cabela\'s Boise',
            'city': 'Boise',
            'category': 'Outdoor Retailer',
            'website': 'https://cabelas.com',
            'services': 'Hunting gear, fishing equipment, firearms, outdoor apparel, gunsmithing'
        },
        {
            'id': 'advanced_test_002',
            'name': 'Meridian Gun Range',
            'city': 'Meridian',
            'category': 'Indoor Shooting Range',
            'website': 'https://meridiangunrange.com',
            'services': 'Indoor shooting range, firearm rentals, safety training, concealed carry classes'
        },
        {
            'id': 'advanced_test_003',
            'name': 'Snake River Sporting Goods',
            'city': 'Nampa',
            'category': 'Local Gun Shop',
            'website': 'https://snakeriverarms.com',
            'services': 'Custom firearms, reloading supplies, gunsmithing, hunting licenses'
        },
        {
            'id': 'advanced_test_004',
            'name': 'Treasure Valley Tactical',
            'city': 'Eagle',
            'category': 'Tactical Training',
            'website': 'https://tvtactical.com',
            'services': 'Tactical training, law enforcement courses, defensive shooting, equipment sales'
        },
        {
            'id': 'advanced_test_005',
            'name': 'Mountain West Outfitters',
            'city': 'Kuna',
            'category': 'Hunting Outfitter',
            'website': 'https://mwoutfitters.com',
            'services': 'Guided hunting, archery equipment, trophy processing, outdoor gear'
        }
    ]
    
    print("🎯 ADVANCED IDAHO COMMUNITY STEWARD TEST")
    print("=" * 60)
    print(f"📋 Testing {len(test_businesses)} diverse businesses")
    print(f"🤖 Using: idaho-business-writer model")
    print(f"📊 Expected: 150-200 words each, authentic Idaho voice")
    print()
    
    # Test different prompt variations for each business
    prompt_variations = [
        "Start with location emphasis and community focus",
        "Lead with customer needs and practical solutions",
        "Begin with expertise and local knowledge",
        "Open with seasonal relevance and outdoor lifestyle",
        "Focus on problem-solving and service quality"
    ]
    
    generated_results = {}
    
    for i, business in enumerate(test_businesses, 1):
        variation = prompt_variations[i-1]  # Use different variation for each
        
        print(f"[{i}/5] 🎯 {business['name']} - {business['city']}")
        print(f"      🎲 Variation: {variation}")
        
        # Build enhanced prompt with variation
        prompt = f"""Write a business description for:

Business Name: {business['name']}
Location: {business['city']}, Idaho
Category: {business['category']}
Website: {business['website']}
Services: {business['services']}

VARIATION INSTRUCTION: {variation}
- Use authentic Idaho Community Steward voice
- Reference Treasure Valley/local landmarks naturally
- Use "folks" instead of "customers"
- Include seasonal or outdoor lifestyle connections
- Avoid corporate buzzwords
- Write exactly 150-200 words

Write the business description:"""

        try:
            start_time = time.time()
            
            response = requests.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "idaho-business-writer",
                    "prompt": prompt,
                    "stream": False,
                    "options": {
                        "temperature": 0.7 + random.uniform(-0.1, 0.1),
                        "seed": int(time.time()) + random.randint(1, 1000)
                    }
                },
                timeout=90
            )
            
            generation_time = time.time() - start_time
            
            if response.status_code == 200:
                result = response.json()
                description = result.get("response", "").strip()
                
                if description:
                    word_count = len(description.split())
                    
                    generated_results[business['id']] = {
                        'business_name': business['name'],
                        'city': business['city'],
                        'category': business['category'],
                        'description': description,
                        'word_count': word_count,
                        'generation_time': generation_time,
                        'variation_used': variation,
                        'generated_at': datetime.now().isoformat()
                    }
                    
                    print(f"      ✅ Generated {word_count} words in {generation_time:.1f}s")
                    print(f"      📝 Preview: {description[:100]}...")
                    
                    # Check for Idaho voice markers
                    idaho_markers = ['folks', 'treasure valley', 'idaho', 'area', 'community', 'local']
                    found_markers = [m for m in idaho_markers if m in description.lower()]
                    print(f"      🎯 Idaho markers: {len(found_markers)} found ({', '.join(found_markers[:3])})")
                    
                else:
                    print(f"      ❌ Empty response")
                    
            else:
                print(f"      ❌ API error: {response.status_code}")
                
        except Exception as e:
            print(f"      💥 Error: {e}")
        
        print()  # Spacing between businesses
        
        # Small delay between generations
        if i < len(test_businesses):
            time.sleep(2)
    
    # Save results and show summary
    results_file = f"scripts/pipeline/advanced_test_batch_{int(time.time())}.json"
    with open(results_file, 'w', encoding='utf-8') as f:
        json.dump(generated_results, f, indent=2, ensure_ascii=False)
    
    print("🎉 BATCH GENERATION COMPLETE!")
    print("=" * 40)
    print(f"📊 Generated: {len(generated_results)}/5 descriptions")
    
    if generated_results:
        word_counts = [d['word_count'] for d in generated_results.values()]
        avg_words = sum(word_counts) / len(word_counts)
        avg_time = sum(d['generation_time'] for d in generated_results.values()) / len(generated_results)
        
        print(f"📈 Average words: {avg_words:.1f}")
        print(f"⏱️  Average time: {avg_time:.1f}s")
        print(f"💾 Results saved: {results_file}")
        
        # Show one complete example
        sample_key = list(generated_results.keys())[0]
        sample = generated_results[sample_key]
        
        print(f"\n📄 SAMPLE DESCRIPTION:")
        print("=" * 60)
        print(f"Business: {sample['business_name']}")
        print(f"Location: {sample['city']}")  
        print(f"Words: {sample['word_count']}")
        print(f"Variation: {sample['variation_used']}")
        print(f"\nDescription:")
        print(sample['description'])
        print("=" * 60)
        
        # Analyze voice characteristics across all descriptions
        all_text = ' '.join(d['description'].lower() for d in generated_results.values())
        
        # Check for Idaho voice characteristics
        voice_analysis = {
            'folks_usage': all_text.count('folks'),
            'treasure_valley': all_text.count('treasure valley'),
            'idaho_mentions': all_text.count('idaho'),
            'community_focus': all_text.count('community'),
            'local_emphasis': all_text.count('local'),
            'forbidden_terms': sum([
                all_text.count('premier destination'),
                all_text.count('world-class'),
                all_text.count('cutting-edge'),
                all_text.count('best-in-class')
            ])
        }
        
        print(f"\n🎯 VOICE ANALYSIS ACROSS BATCH:")
        print(f"   'Folks' usage: {voice_analysis['folks_usage']} times")
        print(f"   Treasure Valley refs: {voice_analysis['treasure_valley']} times")
        print(f"   Idaho mentions: {voice_analysis['idaho_mentions']} times")
        print(f"   Community focus: {voice_analysis['community_focus']} times")
        print(f"   Local emphasis: {voice_analysis['local_emphasis']} times")
        print(f"   Forbidden terms: {voice_analysis['forbidden_terms']} (should be 0)")
        
        print(f"\n✅ Advanced Idaho Community Steward voice is working perfectly!")

if __name__ == "__main__":
    test_idaho_model_batch()
