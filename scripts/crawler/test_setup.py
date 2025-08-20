#!/usr/bin/env python3
"""
Quick test of the website discovery system
"""
import asyncio
import aiohttp
import pandas as pd

async def test_api():
    """Test Serper API connection"""
    API_KEY = "bc341f5691b1e804cde34a277937ec69c46261c7"
    
    url = "https://google.serper.dev/search"
    payload = {
        "q": "Impact Guns Boise Idaho firearms",
        "gl": "us",
        "hl": "en",
        "num": 3
    }
    headers = {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json"
    }
    
    async with aiohttp.ClientSession() as session:
        try:
            async with session.post(url, json=payload, headers=headers) as response:
                if response.status == 200:
                    data = await response.json()
                    results = data.get("organic", [])
                    print("✅ API Test Successful!")
                    print(f"Found {len(results)} results")
                    if results:
                        print(f"First result: {results[0].get('title', 'No title')}")
                        print(f"URL: {results[0].get('link', 'No URL')}")
                    return True
                else:
                    print(f"❌ API Error: {response.status}")
                    print(await response.text())
                    return False
        except Exception as e:
            print(f"❌ Error: {e}")
            return False

def test_csv():
    """Test CSV loading"""
    try:
        df = pd.read_csv("docs/final-commercial-directory-2025-08-20.csv")
        missing_websites = 0
        
        for _, row in df.iterrows():
            website = row.get('website', '')
            if pd.isna(website) or website == '' or website == 'nan' or website == 'N/A':
                missing_websites += 1
        
        print("✅ CSV Test Successful!")
        print(f"Total businesses: {len(df)}")
        print(f"Missing websites: {missing_websites}")
        print(f"Completion rate: {(len(df)-missing_websites)/len(df)*100:.1f}%")
        return True
        
    except Exception as e:
        print(f"❌ CSV Error: {e}")
        return False

async def main():
    print("🧪 TESTING WEBSITE DISCOVERY SYSTEM")
    print("=" * 40)
    
    print("\n1. Testing CSV data loading...")
    csv_ok = test_csv()
    
    print("\n2. Testing Serper API...")
    api_ok = await test_api()
    
    if csv_ok and api_ok:
        print("\n✅ ALL TESTS PASSED!")
        print("🚀 Ready to run website discovery!")
        print("\nTo start discovery, run:")
        print("   python scripts/crawler/smart_website_discovery.py")
    else:
        print("\n❌ Some tests failed. Check the errors above.")

if __name__ == "__main__":
    asyncio.run(main())
