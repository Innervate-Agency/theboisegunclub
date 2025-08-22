#!/usr/bin/env python3
"""
AI CONTENT GENERATOR WITH OLLAMA
================================
Generate compelling business descriptions using Ollama AI:
✅ Deduplication to prevent re-generation
✅ Ollama local AI integration
✅ Content quality validation
✅ Backup and progress tracking
✅ Batch processing with error handling
"""

import requests
import json
import time
import os
import sys
import shutil
from datetime import datetime
from pathlib import Path
import glob

class OllamaAIContentGenerator:
    def __init__(self, model_name="llama3.1:8b"):
        self.base_dir = Path("scripts/pipeline")
        self.cache_file = self.base_dir / "production_cache.json"
        self.backup_dir = self.base_dir / "backups"
        
        # Ollama settings
        self.ollama_url = "http://localhost:11434/api/generate"
        self.model_name = model_name
        self.timeout = 60  # Longer timeout for AI generation
        
        # Load cache
        self.cache = self.load_cache()
        
        print("🤖 OLLAMA AI CONTENT GENERATOR INITIALIZED")
        print(f"✅ Model: {self.model_name}")
        print("✅ Deduplication: ENABLED")
        print("✅ Quality validation: ENABLED")
        print("✅ Progress tracking: ENABLED")
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
            backup_file = self.backup_dir / f"cache_ai_{int(time.time())}.json"
            shutil.copy2(self.cache_file, backup_file)
        
        # Save current cache
        with open(self.cache_file, 'w') as f:
            json.dump(self.cache, f, indent=2)
    
    def is_business_generated(self, business_name: str, website: str) -> bool:
        """Check if business content already generated"""
        cache_key = f"{business_name}|{website}"
        return cache_key in self.cache["businesses_generated"]
    
    def mark_business_generated(self, business_name: str, website: str, success: bool, description_length: int = 0):
        """Mark business as having content generated"""
        cache_key = f"{business_name}|{website}"
        self.cache["businesses_generated"][cache_key] = {
            "generated_at": datetime.now().isoformat(),
            "success": success,
            "description_length": description_length
        }
    
    def test_ollama_connection(self) -> bool:
        """Test if Ollama is running and accessible"""
        try:
            response = requests.get("http://localhost:11434/api/tags", timeout=5)
            if response.status_code == 200:
                models = response.json().get("models", [])
                available_models = [m["name"] for m in models]
                
                print(f"🔗 Ollama connected successfully")
                print(f"📋 Available models: {available_models}")
                
                if self.model_name in available_models:
                    print(f"✅ Model '{self.model_name}' is available")
                    return True
                else:
                    print(f"⚠️  Model '{self.model_name}' not found")
                    if available_models:
                        print(f"💡 Using first available: {available_models[0]}")
                        self.model_name = available_models[0]
                        return True
                    return False
            else:
                print(f"❌ Ollama API returned status {response.status_code}")
                return False
                
        except requests.RequestException as e:
            print(f"❌ Cannot connect to Ollama: {e}")
            print("💡 Make sure Ollama is running: ollama serve")
            return False
    
    def create_business_prompt(self, business: dict) -> str:
        """Create a detailed prompt for business description generation"""
        scraped = business.get('scraped_content', {})
        
        # Build context from scraped content
        context_parts = []
        
        # Business name and basic info
        context_parts.append(f"Business Name: {business['name']}")
        context_parts.append(f"Location: {business.get('address', 'Idaho')}")
        
        # Services offered
        if scraped.get('services'):
            context_parts.append(f"Services: {', '.join(scraped['services'])}")
        
        # Contact information
        contact = scraped.get('contact_info', {})
        if contact.get('phones'):
            context_parts.append(f"Phone: {contact['phones'][0]}")
        if contact.get('emails'):
            context_parts.append(f"Email: {contact['emails'][0]}")
        
        # Business hours
        if scraped.get('hours'):
            context_parts.append(f"Hours: {scraped['hours']}")
        
        # Website content summary
        if scraped.get('business_description'):
            context_parts.append(f"About: {scraped['business_description'][:500]}")
        elif scraped.get('main_text'):
            # Use first 500 chars of main text if no description
            clean_text = scraped['main_text'][:500]
            context_parts.append(f"Website Content: {clean_text}")
        
        context = "\n".join(context_parts)
        
        # Create the prompt
        prompt = f"""You are a professional copywriter specializing in local business directories for firearms and outdoor sports businesses in Idaho.

Write a compelling, SEO-friendly business description for this local Idaho business:

{context}

Requirements:
- Write 2-3 engaging paragraphs (150-250 words total)
- Focus on what makes this business unique and valuable to customers
- Include relevant keywords naturally (firearms, guns, hunting, shooting, etc.)
- Mention their location in Idaho
- Highlight their services and expertise
- Use a professional but approachable tone
- Make it sound authentic and locally-focused
- DO NOT make up specific details not provided in the context
- DO NOT include contact information in the description

Write only the business description, no other text or formatting."""

        return prompt
    
    def generate_content_with_ollama(self, prompt: str) -> dict:
        """Generate content using Ollama API"""
        payload = {
            "model": self.model_name,
            "prompt": prompt,
            "stream": False,
            "options": {
                "temperature": 0.7,
                "top_p": 0.9,
                "max_tokens": 400
            }
        }
        
        try:
            response = requests.post(
                self.ollama_url,
                json=payload,
                timeout=self.timeout
            )
            
            if response.status_code == 200:
                result = response.json()
                generated_text = result.get("response", "").strip()
                
                if generated_text and len(generated_text) > 50:
                    return {
                        "success": True,
                        "content": generated_text,
                        "word_count": len(generated_text.split()),
                        "char_count": len(generated_text)
                    }
                else:
                    return {
                        "success": False,
                        "error": "Generated content too short or empty"
                    }
            else:
                return {
                    "success": False,
                    "error": f"Ollama API returned status {response.status_code}"
                }
                
        except requests.RequestException as e:
            return {
                "success": False,
                "error": f"Request failed: {str(e)}"
            }
    
    def validate_generated_content(self, content: str, business: dict) -> dict:
        """Validate the quality of generated content"""
        validation = {
            "is_valid": True,
            "issues": [],
            "score": 0,
            "word_count": len(content.split())
        }
        
        # Check length
        if validation["word_count"] < 50:
            validation["issues"].append("Too short")
            validation["is_valid"] = False
        elif validation["word_count"] > 300:
            validation["issues"].append("Too long")
        else:
            validation["score"] += 20
        
        # Check for business name mention
        business_name = business["name"].lower()
        content_lower = content.lower()
        
        if any(word in content_lower for word in business_name.split()[:2]):
            validation["score"] += 15
        else:
            validation["issues"].append("Business name not mentioned")
        
        # Check for location mention (Idaho)
        if "idaho" in content_lower:
            validation["score"] += 15
        else:
            validation["issues"].append("Location not mentioned")
        
        # Check for relevant keywords
        keywords = ["firearm", "gun", "shooting", "hunting", "outdoor", "sport", "equipment"]
        found_keywords = sum(1 for kw in keywords if kw in content_lower)
        
        if found_keywords >= 2:
            validation["score"] += 20
        elif found_keywords >= 1:
            validation["score"] += 10
        else:
            validation["issues"].append("Few relevant keywords")
        
        # Check for contact info (should not be present)
        if any(pattern in content for pattern in ["208-", "(208)", "@", "www.", "http"]):
            validation["issues"].append("Contains contact info")
            validation["score"] -= 10
        else:
            validation["score"] += 10
        
        # Final validation
        if validation["score"] < 40:
            validation["is_valid"] = False
            
        return validation
    
    def generate_business_content(self, business: dict) -> dict:
        """Generate AI content for a single business"""
        name = business["name"]
        website = business.get("website", "")
        
        # Check if already generated
        if self.is_business_generated(name, website):
            self.cache["stats"]["duplicates_prevented"] += 1
            business["ai_content"] = {"cached": True}
            business["ai_generation_success"] = True
            return business
        
        print(f"🤖 Generating content: {name}")
        
        # Check if business has scraped content
        if not business.get("scraped_content"):
            business["ai_generation_success"] = False
            business["ai_generation_error"] = "No scraped content available"
            self.mark_business_generated(name, website, success=False)
            print(f"    ❌ No scraped content available")
            return business
        
        # Create prompt
        prompt = self.create_business_prompt(business)
        
        # Generate content
        result = self.generate_content_with_ollama(prompt)
        
        if result["success"]:
            # Validate content
            validation = self.validate_generated_content(result["content"], business)
            
            # Store results
            business["ai_content"] = {
                "description": result["content"],
                "word_count": result["word_count"],
                "char_count": result["char_count"],
                "validation": validation,
                "generated_at": datetime.now().isoformat()
            }
            
            business["ai_generation_success"] = True
            
            # Mark as generated in cache
            self.mark_business_generated(
                name, website, 
                success=True, 
                description_length=result["char_count"]
            )
            
            # Show results
            print(f"    ✅ Success - {result['word_count']} words (Score: {validation['score']}/80)")
            if validation["issues"]:
                print(f"    ⚠️  Issues: {', '.join(validation['issues'])}")
            
        else:
            business["ai_generation_success"] = False
            business["ai_generation_error"] = result["error"]
            self.mark_business_generated(name, website, success=False)
            print(f"    ❌ Failed: {result['error']}")
        
        return business
    
    def load_and_generate_for_scraped_businesses(self, batch_size: int = 10):
        """Load scraped businesses and generate AI content"""
        # Find latest scraped businesses file
        scraped_files = glob.glob("scripts/pipeline/scraped_production_*.json")
        if not scraped_files:
            print("❌ No scraped businesses file found")
            print("   Run: python3 scripts/pipeline/website_scraper_production.py --scrape 20")
            return
        
        latest_file = max(scraped_files)
        print(f"📂 Loading: {latest_file}")
        
        with open(latest_file, 'r') as f:
            businesses = json.load(f)
        
        print(f"🏪 Found {len(businesses)} scraped businesses")
        
        # Filter for successful scrapes
        successful_scrapes = [b for b in businesses if b.get("scraping_success")]
        print(f"✅ {len(successful_scrapes)} successfully scraped")
        
        if not successful_scrapes:
            print("❌ No successfully scraped businesses to generate content for")
            return
        
        # Filter already generated
        new_businesses = []
        already_generated = 0
        
        for business in successful_scrapes:
            name = business["name"]
            website = business.get("website", "")
            if not self.is_business_generated(name, website):
                new_businesses.append(business)
            else:
                already_generated += 1
        
        if already_generated > 0:
            print(f"🔄 Skipped {already_generated} already generated businesses")
        
        if not new_businesses:
            print("✅ All businesses already have AI content generated")
            return
        
        print(f"🤖 Will generate content for {min(len(new_businesses), batch_size)} businesses")
        print()
        
        # Process businesses
        generated_businesses = []
        successful_generations = 0
        failed_generations = 0
        
        for i, business in enumerate(new_businesses[:batch_size], 1):
            print(f"[{i}/{min(len(new_businesses), batch_size)}] Processing...")
            
            generated_business = self.generate_business_content(business)
            generated_businesses.append(generated_business)
            
            if generated_business.get("ai_generation_success"):
                successful_generations += 1
            else:
                failed_generations += 1
            
            # Save progress every 3 businesses
            if i % 3 == 0:
                self.save_cache()
            
            # Brief pause between generations
            if i < min(len(new_businesses), batch_size):
                print(f"    ⏳ Brief pause...")
                time.sleep(2)
            
            print()
        
        # Final save
        self.save_cache()
        
        print("🎉 AI CONTENT GENERATION COMPLETE!")
        print("=" * 40)
        print(f"📊 Successfully generated: {successful_generations}")
        print(f"📊 Failed to generate: {failed_generations}")
        if successful_generations + failed_generations > 0:
            print(f"📊 Success rate: {successful_generations/(successful_generations+failed_generations)*100:.1f}%")
        
        if generated_businesses:
            # Save results
            output_file = f"scripts/pipeline/ai_generated_production_{int(time.time())}.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(generated_businesses, f, indent=2, ensure_ascii=False)
            
            print(f"💾 AI generated content saved: {output_file}")
            
            # Show sample
            successful = [b for b in generated_businesses if b.get("ai_generation_success")]
            if successful:
                sample = successful[0]
                ai_content = sample["ai_content"]
                
                print(f"\n📄 SAMPLE GENERATED CONTENT:")
                print(f"Business: {sample['name']}")
                print(f"Word Count: {ai_content['word_count']}")
                print(f"Quality Score: {ai_content['validation']['score']}/80")
                print(f"\nGenerated Description:")
                print("-" * 50)
                print(ai_content["description"])
                print("-" * 50)

def main():
    """Command line interface"""
    import argparse
    
    parser = argparse.ArgumentParser(description='AI Content Generator with Ollama')
    parser.add_argument('--generate', type=int, default=10, metavar='N', help='Generate content for N businesses (default: 10)')
    parser.add_argument('--test', action='store_true', help='Test Ollama connection')
    parser.add_argument('--status', action='store_true', help='Show generation status')
    parser.add_argument('--model', default='llama3.1:8b', help='Ollama model to use')
    
    args = parser.parse_args()
    
    try:
        generator = OllamaAIContentGenerator(model_name=args.model)
        
        if args.test:
            if generator.test_ollama_connection():
                print("✅ Ollama is ready for content generation!")
            else:
                print("❌ Ollama connection failed")
                sys.exit(1)
                
        elif args.status:
            cache = generator.cache
            print("📊 AI CONTENT GENERATION STATUS")
            print("=" * 40)
            print(f"Businesses generated: {len(cache.get('businesses_generated', {}))}")
            print(f"Duplicates prevented: {cache.get('stats', {}).get('duplicates_prevented', 0)}")
            print(f"Last updated: {cache.get('last_updated', 'Never')}")
            
        else:
            # Test connection first
            if not generator.test_ollama_connection():
                print("❌ Cannot connect to Ollama. Start it with: ollama serve")
                sys.exit(1)
            
            generator.load_and_generate_for_scraped_businesses(args.generate)
            
    except Exception as e:
        print(f"❌ Generator error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
