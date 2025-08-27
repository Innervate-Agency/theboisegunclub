#!/usr/bin/env python3
"""
Fix remaining corrupted icon patterns after bulk replacement
"""

import os
import re
import glob

def fix_corrupted_patterns(content):
    """Fix common corrupted patterns"""
    # Fix tripled/doubled up patterns
    content = re.sub(r'ShieldCheckIconIconCheckIcon', 'ShieldCheckIcon', content)
    content = re.sub(r'ShieldCheckIconCheckIcon', 'ShieldCheckIcon', content)
    content = re.sub(r'BookOpenIconIcon', 'BookOpenIcon', content)
    content = re.sub(r'CheckIconCircle', 'CheckCircleIcon', content)
    content = re.sub(r'TrophyIconIcon', 'TrophyIcon', content)
    content = re.sub(r'CurrencyDollarIconIcon', 'CurrencyDollarIcon', content)
    content = re.sub(r'ExclamationTriangleIconCircle', 'ExclamationCircleIcon', content)
    content = re.sub(r'ArchiveBoxIconIcon', 'ArchiveBoxIcon', content)
    content = re.sub(r'WrenchScrewdriverIconScrewdriverIcon', 'WrenchScrewdriverIcon', content)
    content = re.sub(r'BuildingOfficeIconBuildingStorefrontIcon', 'BuildingStorefrontIcon', content)
    content = re.sub(r'BuildingOfficeIconOffice2Icon', 'BuildingOfficeIcon', content)
    content = re.sub(r'CalendarIconDaysIcon', 'CalendarIcon', content)
    content = re.sub(r'ArrowRightIconIcon', 'ArrowRightIcon', content)
    content = re.sub(r'UserGroupIcon', 'UsersIcon', content)  # UserGroup should be Users in Heroicons
    
    # Fix content that accidentally got icon names
    content = re.sub(r'Live FireIcon Training', 'Live Fire Training', content)
    content = re.sub(r'MapPinIcon Engagement', 'Target Engagement', content)
    content = re.sub(r'BookOpenIcon range time', 'Book range time', content)
    content = re.sub(r'AcademicCapIcon Provided', 'Certificate Provided', content)
    content = re.sub(r'50\+ AcademicCapIcons Completed', '50+ Students Completed', content)
    content = re.sub(r'View CalendarIcon', 'View Calendar', content)
    content = re.sub(r'InformationCircleIconrmationCircleInfo', 'Information', content)
    content = re.sub(r'Wed-SunIcon:', 'Wed-Sun:', content)
    content = re.sub(r'Mon-Sat.*SunIcon:', 'Mon-Sat: 10AM-9PM, Sun:', content)
    content = re.sub(r'EyeIcon and ear', 'Eye and ear', content)
    content = re.sub(r'MapPinIcon systems', 'Target systems', content)
    content = re.sub(r'bestBoltIconConditions', 'bestWeatherConditions', content)
    
    # Fix import statements that got corrupted
    content = re.sub(r'from\s+["\']react-icons/hi["\']', 'from "@heroicons/react/24/outline"', content)
    
    return content

def fix_file(filepath):
    """Fix a single TypeScript file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_corrupted_patterns(content)
        
        # Only write if content changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Main function to process all TypeScript files"""
    print("🧹 Fixing remaining corrupted icon patterns...")
    
    # Find all .tsx files in src/ (excluding backups)
    pattern = "src/**/*.tsx"
    files = [f for f in glob.glob(pattern, recursive=True) if 'backups/' not in f]
    
    processed = 0
    changed = 0
    
    for filepath in files:
        if fix_file(filepath):
            changed += 1
        processed += 1
    
    print(f"✅ Complete! Processed {processed} files, fixed {changed} files")
    print(f"🎯 All corrupted icon patterns have been cleaned up")

if __name__ == "__main__":
    main()