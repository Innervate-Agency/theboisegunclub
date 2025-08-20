#!/usr/bin/env python3
"""
FFL Commercial Business Filter Script
====================================
Filters FFL data to include only businesses that:
1. Have commercial addresses (not residential)
2. Show advertising/marketing presence (websites, business names)
3. Appear to welcome public business

This protects privacy of home-based FFLs who don't advertise publicly.
"""

import csv
import re
import json
from typing import Dict, List, Set

# Commercial address indicators
COMMERCIAL_INDICATORS = [
    'suite', 'ste', 'building', 'bldg', 'unit', '#', 'avenue', 'ave',
    'boulevard', 'blvd', 'business', 'center', 'plaza', 'mall', 'shop',
    'store', 'retail', 'commercial', 'industrial', 'office'
]

# Residential address indicators (red flags)
RESIDENTIAL_INDICATORS = [
    'drive', 'dr', 'lane', 'ln', 'place', 'pl', 'court', 'ct', 
    'circle', 'cir', 'way', 'road', 'rd', 'street', 'st'
]

# Business type indicators that suggest retail operations
RETAIL_BUSINESS_TYPES = [
    'gun store', 'sporting goods', 'outdoor', 'tactical', 'armory',
    'range', 'shop', 'sales', 'pawn', 'gunsmith', 'firearms'
]

def is_commercial_address(address: str) -> bool:
    """Determine if an address appears commercial vs residential."""
    address_lower = address.lower()
    
    # Strong commercial indicators
    for indicator in COMMERCIAL_INDICATORS:
        if indicator in address_lower:
            return True
    
    # Check for residential patterns - these are red flags
    residential_score = 0
    for indicator in RESIDENTIAL_INDICATORS:
        if indicator in address_lower:
            residential_score += 1
    
    # If it has multiple residential indicators and no commercial ones, likely residential
    return residential_score < 2

def has_business_presence(record: Dict) -> bool:
    """Check if business has public advertising/marketing presence."""
    
    # Has website - strong indicator of public business
    website = record.get('website', '').strip()
    if website and website not in ['', 'N/A', 'None']:
        return True
    
    # Business name distinct from license holder name
    business_name = record.get('BUSINESS_NAME', '').strip()
    license_name = record.get('LICENSE_NAME', '').strip()
    
    if business_name and business_name != license_name:
        return True
    
    # Check for retail business indicators in name or type
    name = record.get('name', record.get('LICENSE_NAME', '')).lower()
    business_type = record.get('type', '').lower()
    
    for retail_term in RETAIL_BUSINESS_TYPES:
        if retail_term in name or retail_term in business_type:
            return True
    
    return False

def is_individual_name(name: str) -> bool:
    """Check if a name appears to be an individual vs business."""
    # Simple heuristic - if it contains common name patterns
    individual_patterns = [
        r'^[A-Z][a-z]+\s+[A-Z][a-z]+$',  # First Last
        r'^[A-Z][a-z]+\s+[A-Z]\s+[A-Z][a-z]+$',  # First M Last
    ]
    
    for pattern in individual_patterns:
        if re.match(pattern, name):
            return True
    return False

def filter_commercial_businesses(input_file: str, output_file: str) -> Dict:
    """Filter FFL data to only include commercial businesses."""
    
    commercial_businesses = []
    filtered_out = []
    stats = {
        'total_processed': 0,
        'commercial_kept': 0,
        'residential_filtered': 0,
        'no_presence_filtered': 0,
        'individual_filtered': 0
    }
    
    with open(input_file, 'r', newline='', encoding='utf-8') as csvfile:
        # Detect delimiter
        sample = csvfile.read(1024)
        csvfile.seek(0)
        sniffer = csv.Sniffer()
        delimiter = sniffer.sniff(sample).delimiter
        
        reader = csv.DictReader(csvfile, delimiter=delimiter)
        
        for row in reader:
            stats['total_processed'] += 1
            
            # Get address from appropriate field
            address = row.get('PREMISE_STREET', row.get('address', ''))
            name = row.get('LICENSE_NAME', row.get('name', ''))
            
            # Filter criteria
            is_commercial_addr = is_commercial_address(address)
            has_presence = has_business_presence(row)
            is_individual = is_individual_name(name)
            
            # Decision logic
            keep_business = False
            filter_reason = ""
            
            if is_individual and not has_presence and not is_commercial_addr:
                filter_reason = "Individual name with residential address and no public presence"
                stats['individual_filtered'] += 1
            elif not is_commercial_addr and not has_presence:
                filter_reason = "Residential address with no advertising presence"
                stats['residential_filtered'] += 1
            elif not has_presence and is_individual:
                filter_reason = "Individual with no public business presence"
                stats['no_presence_filtered'] += 1
            else:
                keep_business = True
                stats['commercial_kept'] += 1
            
            if keep_business:
                commercial_businesses.append(row)
            else:
                filtered_out.append({
                    'record': row,
                    'reason': filter_reason,
                    'address': address,
                    'name': name
                })
    
    # Write commercial businesses to output file
    if commercial_businesses:
        with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = commercial_businesses[0].keys()
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(commercial_businesses)
    
    # Write filtering report
    report_file = output_file.replace('.csv', '_filtering_report.json')
    with open(report_file, 'w') as f:
        json.dump({
            'statistics': stats,
            'filtered_examples': filtered_out[:10],  # First 10 examples
            'commercial_examples': commercial_businesses[:10]
        }, f, indent=2)
    
    return stats

def main():
    """Main function to process FFL files."""
    
    print("🔍 FFL Commercial Business Filter")
    print("=" * 40)
    
    # Process treasure valley FFLs
    print("\n📂 Processing Treasure Valley FFLs...")
    stats1 = filter_commercial_businesses(
        '/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/treasure_valley_ffls.csv',
        '/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/commercial_ffls_treasure_valley.csv'
    )
    
    print(f"✅ Treasure Valley Results:")
    print(f"   Total processed: {stats1['total_processed']}")
    print(f"   Commercial kept: {stats1['commercial_kept']}")
    print(f"   Filtered out: {stats1['total_processed'] - stats1['commercial_kept']}")
    
    # Process other large FFL files if they exist
    ffl_files = [
        'ffl_boise_retail_150.csv',
        'ffl_candidates_top150.csv'
    ]
    
    for filename in ffl_files:
        filepath = f'/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/{filename}'
        try:
            print(f"\n📂 Processing {filename}...")
            stats = filter_commercial_businesses(
                filepath,
                filepath.replace('.csv', '_commercial.csv')
            )
            print(f"✅ {filename} Results:")
            print(f"   Total processed: {stats['total_processed']}")
            print(f"   Commercial kept: {stats['commercial_kept']}")
            print(f"   Filtered out: {stats['total_processed'] - stats['commercial_kept']}")
        except FileNotFoundError:
            print(f"⚠️  {filename} not found, skipping...")
    
    print("\n🎯 Filtering Complete!")
    print("Check the *_commercial.csv files for cleaned data")
    print("Check the *_filtering_report.json files for details")

if __name__ == "__main__":
    main()