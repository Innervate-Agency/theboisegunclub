#!/usr/bin/env python3
"""
Quick Ollama Test for Business Description Generation
"""

import requests
import json
import pandas as pd
import time

def test_ollama():
    """Test Ollama connection and generate a sample business description"""
    
    ollama_url = "http://localhost:11434"
    model = "llama3.1:8b"
    
    print("🤖 OLLAMA BUSINESS DESCRIPTION GENERATOR TEST")
    print("=" * 50)
    
    # Test connection
    try:
        response = requests.get(f"{ollama_url}/api/version", timeout=5)
        if response.status_code == 200:
            print("✅ Ollama is running and accessible")
        else:
            print(f"❌ Ollama responded with status {response.status_code}")
            return
    except requests.RequestException as e:
        print(f"❌ Cannot connect to Ollama: {e}")
        print("💡 Make sure Ollama is running: ollama serve")
        return
    
    # Sample business for testing
    test_business = {
        'name': 'Impact Guns',
        'city': 'Boise',
        'category': 'Gun Store',
        'website': 'https://www.impactguns.com',
        'phone': '(800) 917-7137'
    }
    
    print(f"\n🎯 Generating description for: {test_business['name']}")
    
    # Create prompt
    prompt = f"""You are a content writer for "The Boise Gun Club," a community-focused Idaho firearms directory website. Write a professional, SEO-optimized business description (150-200 words) for the following firearms business:

Business name: {test_business['name']}
Location: {test_business['city']}, Idaho
Category: {test_business['category']}
Website: {test_business['website']}
Phone: {test_business['phone']}

Requirements:
- Write in third person
- Include Idaho/Treasure Valley location context
- Use firearms industry terminology appropriately
- Keep tone professional but approachable
- Focus on what makes this business valuable to the community
- Include keywords naturally for SEO
- Do NOT make up specific details like hours, prices, or services not provided
- End with encouragement to contact them directly for current information

Write only the business description, no additional commentary:"""

    # API payload
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
    
    # Generate description
    try:
        print(f"🤖 Generating with {model}...")
        start_time = time.time()
        
        response = requests.post(
            f"{ollama_url}/api/generate",
            json=payload,
            timeout=60
        )
        
        generation_time = time.time() - start_time
        
        if response.status_code == 200:
            result = response.json()
            description = result.get("response", "").strip()
            
            if description:
                # Clean up
                description = description.strip('"\'')
                
                print(f"✅ Generated in {generation_time:.1f} seconds")
                print(f"📝 Length: {len(description)} characters, {len(description.split())} words")
                print("\n" + "="*60)
                print("GENERATED DESCRIPTION:")
                print("="*60)
                print(description)
                print("="*60)
                
                # Save to file
                output = {
                    'business': test_business,
                    'description': description,
                    'generated_at': time.strftime('%Y-%m-%d %H:%M:%S'),
                    'generation_time': generation_time,
                    'word_count': len(description.split())
                }
                
                with open('scripts/content/test_description.json', 'w') as f:
                    json.dump(output, f, indent=2)
                
                print(f"\n💾 Saved to: scripts/content/test_description.json")
                
            else:
                print("❌ Generated description is empty")
        else:
            print(f"❌ API Error: {response.status_code}")
            print(response.text)
            
    except requests.RequestException as e:
        print(f"💥 Generation failed: {e}")

if __name__ == "__main__":
    test_ollama()
