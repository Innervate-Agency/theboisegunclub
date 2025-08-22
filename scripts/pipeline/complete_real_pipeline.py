#!/usr/bin/env python3
"""
COMPLETE REAL DATA PIPELINE
============================
End-to-end pipeline: Discovery → Scraping → AI Generation
All using REAL business data - NO hallucination!
"""

import subprocess
import sys
import time

def run_pipeline_step(script_name, step_name):
    """Run a pipeline step and report results"""
    print(f"\n🔄 RUNNING {step_name}")
    print("=" * 60)
    
    try:
        result = subprocess.run([
            sys.executable, f"scripts/pipeline/{script_name}"
        ], capture_output=False, text=True)
        
        if result.returncode == 0:
            print(f"✅ {step_name} completed successfully")
        else:
            print(f"❌ {step_name} failed with exit code {result.returncode}")
            return False
            
    except Exception as e:
        print(f"💥 Error running {step_name}: {e}")
        return False
    
    return True

def main():
    """Run the complete real data pipeline"""
    
    print("🎯 COMPLETE REAL DATA PIPELINE")
    print("=" * 80)
    print("📍 Discovery: Find local Idaho businesses via Serper API")
    print("🌐 Scraping: Get REAL website content")
    print("🤖 AI Generation: Create descriptions with Idaho Community Steward voice")
    print("🚫 NO fake data - all contact info and details are REAL")
    print()
    
    pipeline_steps = [
        ("real_data_pipeline.py", "BUSINESS DISCOVERY"),
        ("website_scraper.py", "WEBSITE SCRAPING"), 
        ("real_content_generator.py", "AI CONTENT GENERATION")
    ]
    
    for i, (script, step_name) in enumerate(pipeline_steps, 1):
        print(f"\nSTEP {i}/3: {step_name}")
        success = run_pipeline_step(script, step_name)
        
        if not success:
            print(f"\n❌ Pipeline failed at step {i}")
            return
        
        # Brief pause between steps
        if i < len(pipeline_steps):
            print(f"\n⏳ Waiting 5 seconds before next step...")
            time.sleep(5)
    
    print(f"\n🎉 COMPLETE PIPELINE SUCCESS!")
    print("=" * 50)
    print("✅ Discovered real local businesses")
    print("✅ Scraped actual website content") 
    print("✅ Generated descriptions with real data")
    print("✅ NO fake phone numbers or addresses!")
    print("\n📂 Check scripts/pipeline/ for all generated files")

if __name__ == "__main__":
    main()
