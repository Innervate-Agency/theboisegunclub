#!/usr/bin/env python3
"""
Batch Business Description Generator using Ollama
================================================
Generate SEO-optimized descriptions for multiple businesses efficiently
"""

import requests
import json
import pandas as pd
import time
import os

def generate_business_descriptions(csv_path, max_businesses=5):
    """Generate descriptions for businesses from CSV"""
    
    ollama_url = "http://localhost:11434"
    model = "llama3.1:8b"
    
    print("🤖 BATCH BUSINESS DESCRIPTION GENERATOR")
    print("=" * 50)
    
    # Test Ollama connection
    try:
        response = requests.get(f"{ollama_url}/api/version", timeout=5)
        if response.status_code != 200:
            print("❌ Ollama not accessible")
            return
        print("✅ Ollama connected")
    except:
        print("❌ Cannot connect to Ollama")
        return
    
    # Load business data
    if not os.path.exists(csv_path):
        print(f"❌ CSV file not found: {csv_path}")
        return
    
    df = pd.read_csv(csv_path)
    
    # Filter businesses with websites (better for descriptions)
    businesses_with_websites = df[
        (df['website'].notna()) & 
        (df['website'] != '') & 
        (df['website'] != 'nan')
    ].head(max_businesses)
    
    print(f"📊 Processing {len(businesses_with_websites)} businesses with websites")
    print()
    
    descriptions = {}
    
    for i, (_, row) in enumerate(businesses_with_websites.iterrows(), 1):
        business = {
            'name': str(row.get('name', '')),
            'city': str(row.get('city', '')),
            'category': str(row.get('category', '')),
            'website': str(row.get('website', '')),
            'phone': str(row.get('phone', ''))
        }
        
        print(f"[{i}/{len(businesses_with_websites)}] 🎯 {business['name']} ({business['city']})")
        
        # Create prompt
        prompt = f"""You are a content writer for "The Boise Gun Club," a community-focused Idaho firearms directory. Write a professional, SEO-optimized business description (150-200 words) for:

Business: {business['name']}
Location: {business['city']}, Idaho
Category: {business['category']}
Website: {business['website']}

Requirements:
- Write in third person
- Include Idaho/Treasure Valley location context
- Professional but approachable tone
- Focus on community value
- Natural SEO keywords
- End with contact encouragement
- Do NOT invent specific details not provided

Write only the business description:"""

        # Generate description
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
                    
                    descriptions[str(row.get('id', ''))] = {
                        'business_id': str(row.get('id', '')),
                        'business_name': business['name'],
                        'city': business['city'],
                        'website': business['website'],
                        'description': description,
                        'word_count': word_count,
                        'generation_time': generation_time,
                        'generated_at': time.strftime('%Y-%m-%d %H:%M:%S')
                    }
                    
                    print(f"   ✅ Generated {word_count} words in {generation_time:.1f}s")
                    preview = description[:100] + "..." if len(description) > 100 else description
                    print(f"   📝 Preview: {preview}")
                else:
                    print(f"   ❌ Generated description too short")
            else:
                print(f"   ❌ API Error: {response.status_code}")
                
        except Exception as e:
            print(f"   💥 Error: {e}")
        
        print()
        
        # Small delay between generations
        if i < len(businesses_with_websites):
            time.sleep(1)
    
    # Save results
    if descriptions:
        output_file = 'scripts/content/batch_descriptions.json'
        
        # Load existing descriptions if any
        existing_descriptions = {}
        if os.path.exists(output_file):
            with open(output_file, 'r') as f:
                existing_descriptions = json.load(f)
        
        # Merge with new descriptions
        all_descriptions = {**existing_descriptions, **descriptions}
        
        with open(output_file, 'w') as f:
            json.dump(all_descriptions, f, indent=2)
        
        print("🎉 BATCH COMPLETE!")
        print(f"📊 Generated: {len(descriptions)} new descriptions")
        print(f"📝 Total descriptions: {len(all_descriptions)}")
        print(f"💾 Saved to: {output_file}")
        
        # Show stats
        word_counts = [d['word_count'] for d in descriptions.values()]
        if word_counts:
            avg_words = sum(word_counts) / len(word_counts)
            print(f"📈 Average words per description: {avg_words:.1f}")
        
        # Show first sample
        if descriptions:
            sample = list(descriptions.values())[0]
            print(f"\n📄 Sample Description for {sample['business_name']}:")
            print("-" * 60)
            print(sample['description'])
            print("-" * 60)
    else:
        print("❌ No descriptions generated")

if __name__ == "__main__":
    csv_file = "docs/final-commercial-directory-2025-08-20.csv"
    generate_business_descriptions(csv_file, max_businesses=3)
