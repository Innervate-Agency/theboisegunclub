#!/usr/bin/env python3
"""
Final Commercial Directory Creator
=================================
Combines filtered commercial FFLs with verified unified directory
to create the definitive Idaho firearms business directory.

Only includes businesses that:
1. Have commercial operations (not residential)
2. Show public advertising/business presence
3. Are already verified or pass commercial filters
"""

import csv
import json
import hashlib
from typing import Dict, List, Set, Optional

def normalize_address(address: str) -> str:
    """Normalize address for comparison."""
    return address.upper().replace(',', '').replace('.', '').strip()

def normalize_phone(phone: str) -> str:
    """Normalize phone for comparison."""
    return ''.join(filter(str.isdigit, phone))

def create_business_id(name: str, address: str) -> str:
    """Create consistent business ID from name and address."""
    combined = f"{name.upper()}{normalize_address(address)}"
    return hashlib.md5(combined.encode()).hexdigest()[:8]

def parse_ffl_record(ffl_record: Dict) -> Optional[Dict]:
    """Convert FFL record to unified business format."""
    license_name = ffl_record.get('LICENSE_NAME', '').strip()
    business_name = ffl_record.get('BUSINESS_NAME', '').strip()
    
    # Use business name if available, otherwise license name
    name = business_name if business_name else license_name
    
    if not name:
        return None
    
    address = ffl_record.get('PREMISE_STREET', '').strip()
    city = ffl_record.get('PREMISE_CITY', '').strip()
    phone = ffl_record.get('VOICE_PHONE', '').strip()
    
    if not address or not city:
        return None
    
    # Determine business type based on license type and name
    lic_type = ffl_record.get('LIC_TYPE', '')
    business_type = "FFL Dealer"
    category = "retail"
    
    # Enhanced business type detection
    name_lower = name.lower()
    if any(term in name_lower for term in ['gun', 'firearms', 'tactical', 'armory']):
        if 'gunsmith' in name_lower:
            business_type = "Gun Store, Gunsmith, FFL Dealer"
        elif 'range' in name_lower or 'shooting' in name_lower:
            business_type = "Gun Store, Indoor Range, FFL Dealer" 
            category = "ranges"
        else:
            business_type = "Gun Store, FFL Dealer"
    elif 'gunsmith' in name_lower:
        business_type = "Gunsmith, FFL Dealer"
    elif lic_type == '7':  # Manufacturing license
        business_type = "Gun Manufacturer"
    elif lic_type == '10':  # Ammunition manufacturing
        business_type = "Ammunition Manufacturer"
    
    return {
        'id': create_business_id(name, address),
        'name': name,
        'type': business_type,
        'category': category,
        'phone': phone,
        'address': f"{address}, {city}, ID",
        'city': city,
        'county': '',  # Will be filled based on city
        'website': '',
        'verified': True,  # Commercial filter verified
        'events': '',
        'tier': 2,  # Default tier for new businesses
        'refresh_frequency': 'weekly',
        'source_file': 'commercial_ffls_treasure_valley.csv',
        'last_updated': '2025-08-20T00:00:00.000Z'
    }

def get_city_county_mapping() -> Dict[str, str]:
    """Map cities to counties based on existing data."""
    return {
        'BOISE': 'Ada',
        'MERIDIAN': 'Ada', 
        'EAGLE': 'Ada',
        'KUNA': 'Ada',
        'STAR': 'Ada',
        'NAMPA': 'Canyon',
        'CALDWELL': 'Canyon',
        'MIDDLETON': 'Canyon',
        'EMMETT': 'Gem',
        'GREENLEAF': 'Canyon',
        'PAYETTE': 'Payette',
        'WEISER': 'Washington',
        'MARSING': 'Owyhee',
        # Add more mappings as needed
    }

def main():
    """Create final commercial directory."""
    
    print("🏢 Creating Final Commercial Directory")
    print("=" * 42)
    
    # Load existing unified directory
    print("\n📂 Loading existing unified directory...")
    existing_businesses = {}
    unified_file = '/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/unified-business-directory-2025-08-18.csv'
    
    with open(unified_file, 'r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Create key for deduplication
            key = f"{row['name'].upper()}{normalize_address(row['address'])}"
            existing_businesses[key] = row
    
    print(f"   Loaded {len(existing_businesses)} existing businesses")
    
    # Load commercial FFLs
    print("\n📂 Loading filtered commercial FFLs...")
    commercial_ffls = []
    commercial_file = '/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/commercial_ffls_treasure_valley.csv'
    
    with open(commercial_file, 'r', newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            commercial_ffls.append(row)
    
    print(f"   Loaded {len(commercial_ffls)} commercial FFLs")
    
    # Process and merge
    print("\n🔄 Processing and deduplicating...")
    city_county_map = get_city_county_mapping()
    final_directory = []
    
    # Add all existing businesses first
    for business in existing_businesses.values():
        final_directory.append(business)
    
    # Add new commercial FFLs that aren't already in the directory
    new_businesses = 0
    for ffl_record in commercial_ffls:
        parsed_business = parse_ffl_record(ffl_record)
        if not parsed_business:
            continue
            
        # Check if already exists
        key = f"{parsed_business['name'].upper()}{normalize_address(parsed_business['address'])}"
        if key in existing_businesses:
            continue
            
        # Add county based on city
        city = parsed_business['city'].upper()
        parsed_business['county'] = city_county_map.get(city, 'Unknown')
        
        final_directory.append(parsed_business)
        new_businesses += 1
    
    print(f"   Added {new_businesses} new commercial businesses")
    print(f"   Total businesses: {len(final_directory)}")
    
    # Sort by name for consistency
    final_directory.sort(key=lambda x: x['name'])
    
    # Write final directory
    output_file = '/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/final-commercial-directory-2025-08-20.csv'
    print(f"\n💾 Writing final directory to {output_file}...")
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        if final_directory:
            fieldnames = final_directory[0].keys()
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(final_directory)
    
    # Create summary report
    summary = {
        'total_businesses': len(final_directory),
        'existing_kept': len(existing_businesses),
        'new_commercial_added': new_businesses,
        'counties': {},
        'categories': {},
        'business_types': {}
    }
    
    # Generate statistics
    for business in final_directory:
        county = business.get('county', 'Unknown')
        category = business.get('category', 'Unknown')
        biz_type = business.get('type', 'Unknown')
        
        summary['counties'][county] = summary['counties'].get(county, 0) + 1
        summary['categories'][category] = summary['categories'].get(category, 0) + 1
        summary['business_types'][biz_type] = summary['business_types'].get(biz_type, 0) + 1
    
    # Write summary report
    summary_file = output_file.replace('.csv', '_summary.json')
    with open(summary_file, 'w') as f:
        json.dump(summary, f, indent=2)
    
    print(f"\n📊 Final Directory Statistics:")
    print(f"   Total Businesses: {summary['total_businesses']}")
    print(f"   Existing Verified: {len(existing_businesses)}")
    print(f"   New Commercial: {new_businesses}")
    
    print(f"\n🗺️  By County:")
    for county, count in sorted(summary['counties'].items()):
        print(f"   {county}: {count}")
    
    print(f"\n📁 By Category:")
    for category, count in sorted(summary['categories'].items()):
        print(f"   {category}: {count}")
    
    print(f"\n✅ Complete! Files created:")
    print(f"   📄 {output_file}")
    print(f"   📊 {summary_file}")
    
    print(f"\n🎯 This directory contains ONLY businesses that:")
    print(f"   • Have commercial operations (not residential)")
    print(f"   • Show public business presence or are pre-verified")
    print(f"   • Respect privacy of home-based FFLs")

if __name__ == "__main__":
    main()