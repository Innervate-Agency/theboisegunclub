#!/usr/bin/env python3
"""Test Smart Hybrid Discovery"""

import asyncio
import aiohttp
import re
from bs4 import BeautifulSoup

async def test_api_and_scraping():
    """Test single API call + website scraping"""
    API_KEY = "bc341f5691b1e804cde34a277937ec69c46261c7"
    
    session = aiohttp.ClientSession(
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    )
    
    print("🧠 SMART HYBRID DISCOVERY TEST")
    print("=" * 40)
    
    # Test 1: Single API Search
    print("\n🔍 TEST 1: Single Strategic API Search")
    query = '"Impact Guns" Boise Idaho firearms gun store website'
    print(f"Query: {query}")
    
    url = "https://google.serper.dev/search"
    payload = {'q': query, 'gl': 'us', 'hl': 'en', 'num': 5}
    headers = {'X-API-KEY': API_KEY, 'Content-Type': 'application/json'}
    
    try:
        async with session.post(url, json=payload, headers=headers) as response:
            if response.status == 200:
                data = await response.json()
                results = data.get("organic", [])
                print(f"✅ Got {len(results)} results")
                
                if results:
                    best_result = results[0]
                    website = best_result.get('link', '')
                    title = best_result.get('title', '')
                    print(f"🎯 Best match: {title}")
                    print(f"🔗 URL: {website}")
                    
                    # Test 2: Website Scraping
                    print(f"\n🕷️  TEST 2: Website Scraping")
                    if website:
                        try:
                            async with session.get(website, timeout=aiohttp.ClientTimeout(total=15)) as web_response:
                                if web_response.status == 200:
                                    content = await web_response.text()
                                    soup = BeautifulSoup(content, 'html.parser')
                                    
                                    # Remove scripts/styles
                                    for script in soup(["script", "style"]):
                                        script.decompose()
                                    
                                    text = soup.get_text()
                                    
                                    # Extract data
                                    emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)
                                    phones = re.findall(r'\b(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})\b', text)
                                    
                                    # Filter emails
                                    spam_keywords = ['noreply', 'no-reply', 'admin', 'webmaster']
                                    good_emails = [e for e in emails if not any(spam in e.lower() for spam in spam_keywords)]
                                    
                                    # Format phones
                                    formatted_phones = [f"({p[0]}) {p[1]}-{p[2]}" for p in phones if len(''.join(p)) == 10]
                                    
                                    # Services
                                    services = ['ffl', 'transfer', 'gunsmith', 'training', 'ammo', 'firearms']
                                    found_services = [s for s in services if s in text.lower()]
                                    
                                    print(f"✅ Scraping successful")
                                    print(f"   📧 Emails: {len(good_emails)} found - {good_emails[:2]}")
                                    print(f"   📞 Phones: {len(formatted_phones)} found - {formatted_phones[:2]}")
                                    print(f"   🔧 Services: {found_services[:5]}")
                                    
                                else:
                                    print(f"❌ Website HTTP {web_response.status}")
                        except Exception as e:
                            print(f"💥 Scraping error: {e}")
                else:
                    print("❌ No website found")
            else:
                print(f"❌ API Error: {response.status}")
    except Exception as e:
        print(f"💥 API Error: {e}")
    
    await session.close()
    
    print(f"\n🎉 TEST COMPLETE!")
    print("Smart Hybrid Benefits:")
    print("  • Single API call per business (saves credits)")
    print("  • Rich data extraction via scraping")
    print("  • No wasteful auto-fallbacks")
    print("  • Clear failure reporting")

if __name__ == "__main__":
    asyncio.run(test_api_and_scraping())
