#!/usr/bin/env python3
"""Test connections for the AI content pipeline"""

import requests
import json

def test_ollama():
    """Test local Ollama connection"""
    try:
        response = requests.get("http://localhost:11434/api/version", timeout=5)
        if response.status_code == 200:
            print("✅ Ollama connected successfully")
            return True
        else:
            print(f"❌ Ollama error: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Ollama connection failed: {e}")
        return False

def test_vps():
    """Test VPS API connection"""
    try:
        response = requests.get("https://boisegunclub.com/api/descriptions/bulk", timeout=10)
        if response.status_code == 200:
            print("✅ VPS API connected successfully")
            return True
        elif response.status_code == 404:
            print("⚠️  VPS reachable but API endpoints not deployed yet")
            return False
        else:
            print(f"❌ VPS API error: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ VPS connection failed: {e}")
        return False

def main():
    print("🔍 TESTING AI CONTENT PIPELINE CONNECTIONS")
    print("=" * 50)
    
    print("\n1. Testing local Ollama:")
    ollama_ok = test_ollama()
    
    print("\n2. Testing VPS API:")
    vps_ok = test_vps()
    
    print(f"\n📊 SUMMARY:")
    print(f"   Local Ollama: {'✅ Ready' if ollama_ok else '❌ Not Ready'}")
    print(f"   VPS API: {'✅ Ready' if vps_ok else '❌ Not Ready'}")
    
    if not ollama_ok:
        print(f"\n💡 To fix Ollama:")
        print(f"   1. Install from https://ollama.ai")
        print(f"   2. Run: ollama serve")
        print(f"   3. Run: ollama run llama3.1:8b")
    
    if not vps_ok:
        print(f"\n💡 To fix VPS API:")
        print(f"   1. Deploy the new API endpoints")
        print(f"   2. Apply database migration")
        print(f"   3. Restart Next.js app")
    
    if ollama_ok and vps_ok:
        print(f"\n🎉 Ready to run full AI content pipeline!")
    
    print(f"\nNext steps:")
    if not vps_ok:
        print(f"   → Deploy API endpoints and database schema")
        print(f"   → Run test generation locally first")
    if ollama_ok:
        print(f"   → Test local content generation")

if __name__ == "__main__":
    main()
