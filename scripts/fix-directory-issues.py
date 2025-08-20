#!/usr/bin/env python3
"""
Directory Issues Fix Script
============================
Fixes the issues found in the audit:
1. Removes duplicate entries
2. Filters out remaining residential addresses
3. Creates clean final directory
"""

import csv
import json
import re
import hashlib
from typing import Dict, List, Set
from collections import defaultdict

def normalize_for_comparison(text: str) -> str:
    """Normalize text for comparison."""
    return re.sub(r'[^a-zA-Z0-9]', '', text.upper())

def is_clearly_residential(address: str, name: str) -> bool:
    """Determine if an address is clearly residential."""
    address_lower = address.lower()
    name_lower = name.lower()
    
    # Strong residential patterns
    residential_patterns = [
        r'\b\d+\s+(n|s|e|w)?\s*\w+\s+(drive|dr|lane|ln|place|pl|court|ct|circle|cir)\b',
        r'\b\d+\s+\w+\s+(drive|dr|lane|ln|place|pl|court|ct|circle|cir)\b',
    ]
    
    # If it matches residential pattern AND doesn't have business indicators
    has_residential_pattern = any(re.search(pattern, address_lower) for pattern in residential_patterns)
    
    # Business name indicators that override address patterns
    has_business_indicators = any(term in name_lower for term in [
        'gun', 'tactical', 'armory', 'firearms', 'precision', 'engraving', 
        'gunsmith', 'manufacturing', 'llc', 'inc', 'corp'
    ])
    
    # Commercial address indicators
    has_commercial_indicators = any(term in address_lower for term in [
        'suite', 'ste', 'unit', '#', 'building', 'bldg', 'industrial', 
        'commercial', 'business', 'center'
    ])
    
    # Only flag as residential if it has residential pattern AND no business indicators
    return has_residential_pattern and not has_business_indicators and not has_commercial_indicators

def deduplicate_businesses(businesses: List[Dict]) -> List[Dict]:
    """Remove duplicate businesses, keeping the most complete record."""
    
    # Group by normalized name and address
    groups = defaultdict(list)
    
    for business in businesses:
        name = normalize_for_comparison(business.get('name', ''))
        address = normalize_for_comparison(business.get('address', ''))
        key = f"{name}_{address}"
        groups[key].append(business)
    
    deduped = []
    duplicates_removed = 0
    
    for key, group in groups.items():
        if len(group) == 1:
            deduped.append(group[0])
        else:
            # Keep the record with the most complete information
            best_record = max(group, key=lambda x: (
                len(x.get('website', '')),
                len(x.get('phone', '')),
                len(x.get('type', '')),
                x.get('tier', 0) if isinstance(x.get('tier'), (int, float)) else 0
            ))
            deduped.append(best_record)
            duplicates_removed += len(group) - 1
    
    print(f"   Removed {duplicates_removed} duplicate entries")
    return deduped

def main():
    """Fix directory issues found in audit."""
    
    print("🔧 Fixing Directory Issues")
    print("=" * 30)
    
    # Load current directory
    print("\n📂 Loading current directory...")
    with open('/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/final-commercial-directory-2025-08-20.csv', 'r') as f:
        reader = csv.DictReader(f)
        businesses = list(reader)
    
    print(f"   Current businesses: {len(businesses)}")
    
    # Step 1: Remove duplicates
    print("\n🔄 Step 1: Deduplicating businesses...")
    deduped_businesses = deduplicate_businesses(businesses)
    print(f"   After deduplication: {len(deduped_businesses)}")
    
    # Step 2: Filter out clearly residential addresses
    print("\n🔄 Step 2: Filtering residential addresses...")
    filtered_businesses = []
    residential_filtered = []
    
    for business in deduped_businesses:
        name = business.get('name', '')
        address = business.get('address', '')
        
        if is_clearly_residential(address, name):
            residential_filtered.append({
                'name': name,
                'address': address,
                'reason': 'Residential address pattern without strong business indicators'
            })
        else:
            filtered_businesses.append(business)
    
    print(f"   Filtered out {len(residential_filtered)} residential addresses")
    print(f"   Final businesses: {len(filtered_businesses)}")
    
    # Show examples of what was filtered
    if residential_filtered:
        print("\n   Examples of filtered addresses:")
        for example in residential_filtered[:5]:
            print(f"   - {example['name']}: {example['address']}")
    
    # Step 3: Generate statistics
    print("\n📊 Generating statistics...")
    
    categories = defaultdict(int)
    counties = defaultdict(int)
    business_types = defaultdict(int)
    
    for business in filtered_businesses:
        categories[business.get('category', 'Unknown')] += 1
        counties[business.get('county', 'Unknown')] += 1
        business_types[business.get('type', 'Unknown')] += 1
    
    # Step 4: Write clean directory
    output_file = '/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/clean-commercial-directory-2025-08-20.csv'
    print(f"\n💾 Writing clean directory to {output_file}...")
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        if filtered_businesses:
            fieldnames = filtered_businesses[0].keys()
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(filtered_businesses)
    
    # Step 5: Create fix report
    fix_report = {
        'fix_timestamp': '2025-08-20T00:00:00.000Z',
        'original_count': len(businesses),
        'after_deduplication': len(deduped_businesses),
        'final_count': len(filtered_businesses),
        'duplicates_removed': len(businesses) - len(deduped_businesses),
        'residential_filtered': len(residential_filtered),
        'statistics': {
            'categories': dict(categories),
            'counties': dict(counties),
            'business_types': dict(business_types)
        },
        'filtered_examples': residential_filtered
    }
    
    report_file = output_file.replace('.csv', '_fix_report.json')
    with open(report_file, 'w') as f:
        json.dump(fix_report, f, indent=2)
    
    print(f"\n📋 CLEANUP SUMMARY")
    print("=" * 20)
    print(f"Original businesses: {len(businesses)}")
    print(f"Duplicates removed: {len(businesses) - len(deduped_businesses)}")
    print(f"Residential filtered: {len(residential_filtered)}")
    print(f"Final clean businesses: {len(filtered_businesses)}")
    
    reduction_percent = (len(businesses) - len(filtered_businesses)) * 100 // len(businesses)
    print(f"Total reduction: {reduction_percent}%")
    
    print(f"\n📊 Final Statistics:")
    print(f"By County:")
    for county, count in sorted(counties.items(), key=lambda x: x[1], reverse=True)[:5]:
        print(f"   {county}: {count}")
    
    print(f"By Category:")
    for category, count in sorted(categories.items(), key=lambda x: x[1], reverse=True):
        print(f"   {category}: {count}")
    
    print(f"\n✅ Clean directory created:")
    print(f"   📄 {output_file}")
    print(f"   📊 {report_file}")

if __name__ == "__main__":
    main()