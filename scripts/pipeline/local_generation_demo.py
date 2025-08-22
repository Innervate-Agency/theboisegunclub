#!/usr/bin/env python3
"""
Local Content Generation Demo
============================
Demonstrate local Ollama generation with caching system
"""

import requests
import json
import pandas as pd
import time
import os
from datetime import datetime

def generate_local_descriptions(csv_path, batch_size=5):
    """Generate descriptions locally and cache them"""
    
    ollama_url = "http://localhost:11434"
    model = "llama3.1:8b"
    cache_file = "scripts/pipeline/local_content_cache.json"
    
    print("🚀 LOCAL CONTENT GENERATION DEMO")
    print("=" * 50)
    
    # Test Ollama
    try:
        response = requests.get(f"{ollama_url}/api/version", timeout=5)
        if response.status_code != 200:
            print("❌ Ollama not accessible")
            return
        print("✅ Local Ollama connected")
    except:
        print("❌ Cannot connect to Ollama")
        return
    
    # Load existing cache
    cache = {}
    if os.path.exists(cache_file):
        with open(cache_file, 'r') as f:
            cache = json.load(f)
    
    # Load business data
    df = pd.read_csv(csv_path)
    
    # Get businesses with websites (better for descriptions)
    businesses_with_websites = df[
        (df['website'].notna()) & 
        (df['website'] != '') & 
        (df['website'] != 'nan') &
        (~df['id'].astype(str).isin(cache.keys()))  # Not already cached
    ].head(batch_size)
    
    if businesses_with_websites.empty:
        print("📋 No new businesses to process")
        return
    
    print(f"📊 Processing {len(businesses_with_websites)} businesses")
    print()
    
    new_descriptions = {}
    
    for i, (_, row) in enumerate(businesses_with_websites.iterrows(), 1):
        business = {
            'id': str(row.get('id', '')),
            'name': str(row.get('name', '')),
            'city': str(row.get('city', '')),
            'category': str(row.get('category', '')),
            'website': str(row.get('website', ''))
        }
        
        print(f"[{i}/{len(businesses_with_websites)}] 🎯 {business['name']} ({business['city']})")
        
        # Create prompt
        prompt = f"""You are a content writer for "The Boise Gun Club," Idaho's premier firearms community directory. Write a professional, SEO-optimized business description (150-200 words) for:

Business Name: {business['name']}
Location: {business['city']}, Idaho  
Category: {business['category']}
Website: {business['website']}

Requirements:
- Write in third person, professional tone
- Include Idaho/Treasure Valley location keywords naturally
- Highlight community value and local expertise
- Use appropriate firearms industry terminology
- Focus on customer service and expertise
- End with encouragement to contact directly
- Do NOT fabricate specific services, hours, or prices
- Keep within 150-200 words for optimal SEO

Write only the business description:"""

        # Generate
        payload = {
            "model": model,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": 0.7,
                "top_k": 40,
                "top_p": 0.9,
                "num_predict": 300
            }
        }
        
        try:
            start_time = time.time()
            
            response = requests.post(
                f"{ollama_url}/api/generate",
                json=payload,
                timeout=60
            )
            
            generation_time = time.time() - start_time
            
            if response.status_code == 200:
                result = response.json()
                description = result.get("response", "").strip().strip('"\'')
                
                if description and len(description) > 50:
                    word_count = len(description.split())
                    
                    # Clean up description
                    lines = [line.strip() for line in description.split('\n') if line.strip()]
                    cleaned_lines = [line for line in lines if not any(skip in line.lower() 
                                   for skip in ['here is', 'description:', 'note:'])]
                    final_description = ' '.join(cleaned_lines)
                    
                    if final_description and not final_description.endswith(('.', '!', '?')):
                        final_description += '.'
                    
                    new_descriptions[business['id']] = {
                        'business_id': business['id'],
                        'business_name': business['name'],
                        'city': business['city'],
                        'category': business['category'],
                        'website': business['website'],
                        'description': final_description,
                        'word_count': word_count,
                        'generation_time': generation_time,
                        'generated_at': datetime.now().isoformat(),
                        'status': 'local_generated'
                    }
                    
                    print(f"   ✅ Generated {word_count} words in {generation_time:.1f}s")
                    preview = final_description[:100] + "..." if len(final_description) > 100 else final_description
                    print(f"   📝 Preview: {preview}")
                else:
                    print(f"   ❌ Generated description too short")
            else:
                print(f"   ❌ API Error: {response.status_code}")
                
        except Exception as e:
            print(f"   💥 Error: {e}")
        
        print()
        time.sleep(1)  # Small delay
    
    # Update cache
    cache.update(new_descriptions)
    
    with open(cache_file, 'w') as f:
        json.dump(cache, f, indent=2)
    
    print("🎉 LOCAL GENERATION COMPLETE!")
    print(f"📊 Generated: {len(new_descriptions)} new descriptions")
    print(f"📝 Total cached: {len(cache)} descriptions")
    print(f"💾 Saved to: {cache_file}")
    
    if new_descriptions:
        print(f"\n📄 Sample Description:")
        sample = list(new_descriptions.values())[0]
        print("-" * 60)
        print(f"Business: {sample['business_name']}")
        print(f"Words: {sample['word_count']}")
        print(f"Description: {sample['description']}")
        print("-" * 60)
        
        # Show what could be synced to VPS
        print(f"\n🚀 Ready for VPS Sync:")
        print(f"   💾 {len(new_descriptions)} descriptions ready")
        print(f"   📊 Average {sum(d['word_count'] for d in new_descriptions.values()) / len(new_descriptions):.1f} words per description")
        print(f"   🔄 Next step: Sync to VPS database for dynamic page generation")

if __name__ == "__main__":
    csv_file = "docs/final-commercial-directory-2025-08-20.csv"
    
    if os.path.exists(csv_file):
        generate_local_descriptions(csv_file, batch_size=3)
    else:
        print(f"❌ CSV file not found: {csv_file}")
