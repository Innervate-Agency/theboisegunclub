#!/usr/bin/env python3
"""
Commercial Filtering Audit Script
==================================
Audits the filtering results to verify:
1. No legitimate businesses were incorrectly filtered
2. No residential addresses slipped through
3. Duplicates are handled correctly
4. Business categorization is accurate
"""

import csv
import json
import re
from typing import Dict, List, Set, Tuple
from collections import Counter

def analyze_address_pattern(address: str) -> Dict:
    """Analyze an address for residential vs commercial patterns."""
    address_lower = address.lower()
    
    # Strong residential indicators
    residential_patterns = [
        r'\b\d+\s+(n|s|e|w|north|south|east|west)?\s*\w+\s+(drive|dr|lane|ln|place|pl|court|ct|circle|cir|way)\b',
        r'\b\d+\s+\w+\s+(drive|dr|lane|ln|place|pl|court|ct|circle|cir|way)\b',
    ]
    
    # Strong commercial indicators
    commercial_patterns = [
        r'\bsuite\s+[a-z0-9#]+\b',
        r'\bste\s+[a-z0-9#]+\b',
        r'\bunit\s+[a-z0-9#]+\b',
        r'\bbuilding\s+[a-z0-9]+\b',
        r'\b#[a-z0-9]+\b',
        r'\bhwy\b',
        r'\bhighway\b',
        r'\bindustrial\b',
        r'\bcommercial\b',
        r'\bbusiness\b',
    ]
    
    is_residential = any(re.search(pattern, address_lower) for pattern in residential_patterns)
    is_commercial = any(re.search(pattern, address_lower) for pattern in commercial_patterns)
    
    # Check for specific road types
    has_drive = 'drive' in address_lower or ' dr' in address_lower
    has_lane = 'lane' in address_lower or ' ln' in address_lower
    has_place = 'place' in address_lower or ' pl' in address_lower
    has_way = 'way' in address_lower
    has_court = 'court' in address_lower or ' ct' in address_lower
    has_circle = 'circle' in address_lower or ' cir' in address_lower
    
    has_avenue = 'avenue' in address_lower or ' ave' in address_lower
    has_street = 'street' in address_lower or ' st' in address_lower
    has_road = 'road' in address_lower or ' rd' in address_lower
    has_boulevard = 'boulevard' in address_lower or ' blvd' in address_lower
    
    return {
        'address': address,
        'is_residential': is_residential,
        'is_commercial': is_commercial,
        'residential_indicators': {
            'drive': has_drive,
            'lane': has_lane,
            'place': has_place,
            'way': has_way,
            'court': has_court,
            'circle': has_circle,
        },
        'commercial_indicators': {
            'avenue': has_avenue,
            'street': has_street,
            'road': has_road,
            'boulevard': has_boulevard,
            'has_suite': bool(re.search(r'\b(suite|ste|unit|#)\b', address_lower)),
        },
        'confidence': 'high' if (is_commercial and not is_residential) or (is_residential and not is_commercial) else 'medium'
    }

def check_for_duplicates(businesses: List[Dict]) -> Dict:
    """Check for duplicate businesses in the directory."""
    seen_names = Counter()
    seen_addresses = Counter()
    seen_phones = Counter()
    duplicates = []
    
    for business in businesses:
        name = business.get('name', '').upper()
        address = business.get('address', '').upper()
        phone = ''.join(filter(str.isdigit, business.get('phone', '')))
        
        if name:
            seen_names[name] += 1
        if address:
            seen_addresses[address] += 1
        if phone:
            seen_phones[phone] += 1
    
    # Find actual duplicates
    for business in businesses:
        name = business.get('name', '').upper()
        address = business.get('address', '').upper()
        
        if seen_names.get(name, 0) > 1 or seen_addresses.get(address, 0) > 1:
            duplicates.append({
                'name': business.get('name'),
                'address': business.get('address'),
                'name_count': seen_names.get(name, 0),
                'address_count': seen_addresses.get(address, 0)
            })
    
    return {
        'total_businesses': len(businesses),
        'duplicate_names': {k: v for k, v in seen_names.items() if v > 1},
        'duplicate_addresses': {k: v for k, v in seen_addresses.items() if v > 1},
        'duplicate_phones': {k: v for k, v in seen_phones.items() if v > 1},
        'duplicate_records': duplicates[:10]  # First 10 examples
    }

def audit_business_names(businesses: List[Dict]) -> Dict:
    """Audit business names for individual vs commercial patterns."""
    individual_pattern = re.compile(r'^[A-Z][a-z]+,?\s+[A-Z][a-z]+(\s+[A-Z]\.?)?(\s+(SR|JR|III|IV))?$')
    
    potentially_individual = []
    clearly_commercial = []
    ambiguous = []
    
    for business in businesses:
        name = business.get('name', '')
        name_lower = name.lower()
        
        # Check for individual name pattern
        if individual_pattern.match(name):
            potentially_individual.append(name)
        # Check for commercial indicators in name
        elif any(term in name_lower for term in [
            'gun', 'tactical', 'armory', 'firearms', 'shooting', 'sporting',
            'llc', 'inc', 'corp', 'company', 'enterprises', 'services'
        ]):
            clearly_commercial.append(name)
        else:
            ambiguous.append(name)
    
    return {
        'total_names': len(businesses),
        'potentially_individual': len(potentially_individual),
        'clearly_commercial': len(clearly_commercial),
        'ambiguous': len(ambiguous),
        'individual_examples': potentially_individual[:10],
        'commercial_examples': clearly_commercial[:10],
        'ambiguous_examples': ambiguous[:10]
    }

def main():
    """Run comprehensive audit on filtering results."""
    
    print("🔍 Commercial Filtering Audit")
    print("=" * 40)
    
    # Load the filtered report
    print("\n📂 Loading filtering report...")
    with open('/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/commercial_ffls_treasure_valley_filtering_report.json', 'r') as f:
        filtering_report = json.load(f)
    
    print(f"   Filtered out: {filtering_report['statistics']['residential_filtered']} businesses")
    
    # Load the final directory
    print("\n📂 Loading final commercial directory...")
    commercial_businesses = []
    with open('/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/final-commercial-directory-2025-08-20.csv', 'r') as f:
        reader = csv.DictReader(f)
        commercial_businesses = list(reader)
    
    print(f"   Commercial businesses: {len(commercial_businesses)}")
    
    # AUDIT 1: Check filtered-out businesses
    print("\n🔍 AUDIT 1: Reviewing Filtered-Out Businesses")
    print("-" * 40)
    
    filtered_examples = filtering_report.get('filtered_examples', [])
    false_positives = []
    
    for example in filtered_examples:
        record = example['record']
        name = record.get('LICENSE_NAME', '')
        business_name = record.get('BUSINESS_NAME', '')
        address = record.get('PREMISE_STREET', '')
        
        # Check if this might be a false positive
        if business_name and business_name != name:
            false_positives.append({
                'name': name,
                'business_name': business_name,
                'address': address,
                'reason': 'Has distinct business name'
            })
        elif any(term in name.lower() for term in ['gun', 'tactical', 'firearms', 'armory']):
            false_positives.append({
                'name': name,
                'address': address,
                'reason': 'Business-related name'
            })
    
    if false_positives:
        print(f"⚠️  Potential false positives found: {len(false_positives)}")
        for fp in false_positives[:3]:
            print(f"   - {fp['name']}: {fp['reason']}")
    else:
        print("✅ No obvious false positives in filtered records")
    
    # AUDIT 2: Check commercial businesses for residential addresses
    print("\n🔍 AUDIT 2: Checking Commercial Businesses for Residential Addresses")
    print("-" * 40)
    
    suspicious_commercial = []
    address_analysis = []
    
    for business in commercial_businesses[:100]:  # Sample first 100
        address = business.get('address', '')
        analysis = analyze_address_pattern(address)
        address_analysis.append(analysis)
        
        if analysis['is_residential'] and not analysis['is_commercial']:
            suspicious_commercial.append({
                'name': business.get('name'),
                'address': address,
                'indicators': analysis['residential_indicators']
            })
    
    if suspicious_commercial:
        print(f"⚠️  Potentially residential addresses in commercial list: {len(suspicious_commercial)}")
        for susp in suspicious_commercial[:5]:
            print(f"   - {susp['name']}")
            print(f"     Address: {susp['address']}")
            indicators = [k for k, v in susp['indicators'].items() if v]
            print(f"     Residential indicators: {', '.join(indicators)}")
    else:
        print("✅ No obvious residential addresses in commercial list")
    
    # AUDIT 3: Check for duplicates
    print("\n🔍 AUDIT 3: Checking for Duplicate Entries")
    print("-" * 40)
    
    duplicate_analysis = check_for_duplicates(commercial_businesses)
    
    if duplicate_analysis['duplicate_names']:
        print(f"⚠️  Found {len(duplicate_analysis['duplicate_names'])} duplicate business names")
        for name, count in list(duplicate_analysis['duplicate_names'].items())[:5]:
            print(f"   - {name}: appears {count} times")
    else:
        print("✅ No duplicate business names found")
    
    if duplicate_analysis['duplicate_addresses']:
        print(f"⚠️  Found {len(duplicate_analysis['duplicate_addresses'])} duplicate addresses")
        for addr, count in list(duplicate_analysis['duplicate_addresses'].items())[:3]:
            print(f"   - {addr[:50]}...: appears {count} times")
    
    # AUDIT 4: Business name patterns
    print("\n🔍 AUDIT 4: Business Name Pattern Analysis")
    print("-" * 40)
    
    name_analysis = audit_business_names(commercial_businesses)
    
    print(f"📊 Name Classification:")
    print(f"   Clearly Commercial: {name_analysis['clearly_commercial']} ({name_analysis['clearly_commercial']*100//name_analysis['total_names']}%)")
    print(f"   Potentially Individual: {name_analysis['potentially_individual']} ({name_analysis['potentially_individual']*100//name_analysis['total_names']}%)")
    print(f"   Ambiguous: {name_analysis['ambiguous']} ({name_analysis['ambiguous']*100//name_analysis['total_names']}%)")
    
    if name_analysis['potentially_individual'] > 0:
        print(f"\n⚠️  Individual-looking names in commercial directory:")
        for name in name_analysis['individual_examples'][:5]:
            print(f"   - {name}")
    
    # AUDIT 5: Statistical validation
    print("\n🔍 AUDIT 5: Statistical Validation")
    print("-" * 40)
    
    original_count = filtering_report['statistics']['total_processed']
    filtered_count = filtering_report['statistics']['residential_filtered']
    kept_count = filtering_report['statistics']['commercial_kept']
    
    print(f"📊 Filtering Statistics:")
    print(f"   Original FFLs: {original_count}")
    print(f"   Filtered out: {filtered_count} ({filtered_count*100//original_count}%)")
    print(f"   Kept as commercial: {kept_count} ({kept_count*100//original_count}%)")
    
    if filtered_count + kept_count != original_count:
        print(f"⚠️  MATH ERROR: {filtered_count} + {kept_count} ≠ {original_count}")
    else:
        print(f"✅ Math checks out: {filtered_count} + {kept_count} = {original_count}")
    
    # Generate comprehensive audit report
    audit_report = {
        'audit_timestamp': '2025-08-20T00:00:00.000Z',
        'statistics': {
            'total_commercial': len(commercial_businesses),
            'filtered_out': filtered_count,
            'false_positives_found': len(false_positives),
            'suspicious_commercial': len(suspicious_commercial),
            'duplicate_names': len(duplicate_analysis['duplicate_names']),
            'duplicate_addresses': len(duplicate_analysis['duplicate_addresses']),
        },
        'findings': {
            'false_positives': false_positives,
            'suspicious_commercial': suspicious_commercial[:10],
            'duplicates': duplicate_analysis['duplicate_records'],
            'name_analysis': name_analysis
        },
        'recommendations': []
    }
    
    # Add recommendations based on findings
    if false_positives:
        audit_report['recommendations'].append("Review false positives for potential inclusion")
    if suspicious_commercial:
        audit_report['recommendations'].append("Verify residential-looking addresses are actually commercial")
    if duplicate_analysis['duplicate_names']:
        audit_report['recommendations'].append("Deduplicate business entries")
    if name_analysis['potentially_individual'] > 50:
        audit_report['recommendations'].append("Review individual names for privacy concerns")
    
    # Save audit report
    with open('/home/sdusk/dev/repositories/client-projects/theboisegunclub/docs/filtering_audit_report.json', 'w') as f:
        json.dump(audit_report, f, indent=2)
    
    print("\n" + "=" * 40)
    print("📋 AUDIT SUMMARY")
    print("=" * 40)
    
    if not false_positives and not suspicious_commercial and not duplicate_analysis['duplicate_names']:
        print("✅ AUDIT PASSED: Filtering appears to be working correctly")
    else:
        print("⚠️  AUDIT FOUND ISSUES:")
        if false_positives:
            print(f"   - {len(false_positives)} potential false positives")
        if suspicious_commercial:
            print(f"   - {len(suspicious_commercial)} suspicious commercial entries")
        if duplicate_analysis['duplicate_names']:
            print(f"   - {len(duplicate_analysis['duplicate_names'])} duplicate entries")
    
    print(f"\n📄 Full audit report saved to: filtering_audit_report.json")

if __name__ == "__main__":
    main()