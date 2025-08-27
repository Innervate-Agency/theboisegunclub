#!/usr/bin/env python3
"""
Universal Icon Fixer - Replaces all Phosphor icons with Heroicons systematically
"""

import os
import re
import glob

# Standard Heroicons that we'll use as replacements
STANDARD_HEROICONS = {
    # Navigation & UI
    'CaretRight': 'ChevronRightIcon',
    'CaretLeft': 'ChevronLeftIcon', 
    'CaretDown': 'ChevronDownIcon',
    'CaretUp': 'ChevronUpIcon',
    'ArrowRight': 'ArrowRightIcon',
    'ArrowLeft': 'ArrowLeftIcon',
    'ArrowUp': 'ArrowUpIcon',
    'ArrowDown': 'ArrowDownIcon',
    'Plus': 'PlusIcon',
    'X': 'XMarkIcon',
    'XCircle': 'XCircleIcon',
    'Check': 'CheckIcon',
    'CheckCircle': 'CheckCircleIcon',
    
    # Business & Location
    'MapPin': 'MapPinIcon',
    'Building': 'BuildingOfficeIcon',
    'House': 'HomeIcon',
    'Storefront': 'BuildingStorefrontIcon',
    
    # People & Social
    'User': 'UserIcon',
    'Users': 'UsersIcon',
    'UserCircle': 'UserCircleIcon',
    
    # Communication
    'Phone': 'PhoneIcon',
    'Envelope': 'EnvelopeIcon',
    'ChatCircle': 'ChatBubbleLeftIcon',
    'Bell': 'BellIcon',
    
    # Media & Content
    'Camera': 'CameraIcon',
    'Image': 'PhotoIcon',
    'Video': 'VideoCameraIcon',
    'BookOpen': 'BookOpenIcon',
    'Book': 'BookOpenIcon',
    'Article': 'DocumentTextIcon',
    
    # Shopping & Commerce
    'ShoppingCart': 'ShoppingCartIcon',
    'Package': 'ArchiveBoxIcon',
    'Tag': 'TagIcon',
    'CurrencyDollar': 'CurrencyDollarIcon',
    'Receipt': 'ReceiptPercentIcon',
    
    # Time & Calendar
    'Calendar': 'CalendarIcon',
    'Clock': 'ClockIcon',
    'Timer': 'ClockIcon',
    
    # Status & Feedback
    'Star': 'StarIcon',
    'Heart': 'HeartIcon',
    'ThumbsUp': 'HandThumbUpIcon',
    'Warning': 'ExclamationTriangleIcon',
    'WarningCircle': 'ExclamationCircleIcon',
    'Info': 'InformationCircleIcon',
    
    # Weather & Environment
    'Sun': 'SunIcon',
    'CloudRain': 'CloudIcon',
    'Wind': 'BoltIcon',
    'Fire': 'FireIcon',
    'Lightning': 'BoltIcon',
    
    # Security & Protection
    'Shield': 'ShieldCheckIcon',
    'ShieldCheck': 'ShieldCheckIcon',
    'Lock': 'LockClosedIcon',
    'LockOpen': 'LockOpenIcon',
    'Key': 'KeyIcon',
    
    # Tools & Equipment
    'Wrench': 'WrenchScrewdriverIcon',
    'Gear': 'CogIcon',
    'Target': 'MapPinIcon',  # No direct equivalent
    'Crosshair': 'MapPinIcon',  # No direct equivalent
    
    # Awards & Achievement
    'Trophy': 'TrophyIcon',
    'Medal': 'TrophyIcon',
    'Crown': 'TrophyIcon',
    'Certificate': 'AcademicCapIcon',
    'GraduationCap': 'AcademicCapIcon',
    'Student': 'AcademicCapIcon',
    
    # Transportation
    'Truck': 'TruckIcon',
    'NavigationArrow': 'MapIcon',
    
    # Miscellaneous
    'Flag': 'FlagIcon',
    'TrendUp': 'TrendingUpIcon',
    'TrendDown': 'TrendingUpIcon',  # No direct equivalent
    'SpeakerHigh': 'SpeakerWaveIcon',
    'MagnifyingGlass': 'MagnifyingGlassIcon',
    'Binoculars': 'MagnifyingGlassIcon',
    'Coin': 'CurrencyDollarIcon',
    'SignOut': 'ArrowRightOnRectangleIcon',
    
    # Special aliases
    'AddressBook': 'BookOpenIcon',
}

# All the Heroicons we're using
ALL_HEROICONS = set(STANDARD_HEROICONS.values())

def fix_file(filepath):
    """Fix a single TypeScript file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Replace Phosphor imports with Heroicons
        content = re.sub(
            r'from\s+["\']@phosphor-icons/react["\']',
            'from "@heroicons/react/24/outline"',
            content
        )
        
        # 2. Replace icon names in imports and usage
        for phosphor_name, heroicon_name in STANDARD_HEROICONS.items():
            # Replace in imports (with word boundaries)
            content = re.sub(rf'\b{phosphor_name}\b', heroicon_name, content)
        
        # 3. Clean up corrupted patterns
        # Fix doubled icon names
        content = re.sub(r'IconIcon\b', 'Icon', content)
        
        # Remove weight and fill attributes
        content = re.sub(r'\s+weight="[^"]*"', '', content)
        content = re.sub(r'\s+fill="[^"]*"', '', content)
        
        # Fix redundant "as" patterns
        content = re.sub(r'(\w+Icon)\s+as\s+\1', r'\1', content)
        
        # Fix extra spaces in className
        content = re.sub(r'className="([^"]*)\s\s+', r'className="\1 ', content)
        
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
    print("🚀 Starting universal icon replacement...")
    
    # Find all .tsx files in src/ (excluding backups)
    pattern = "src/**/*.tsx"
    files = [f for f in glob.glob(pattern, recursive=True) if 'backups/' not in f]
    
    processed = 0
    changed = 0
    
    for filepath in files:
        if fix_file(filepath):
            changed += 1
        processed += 1
        if processed % 10 == 0:
            print(f"📁 Processed {processed}/{len(files)} files...")
    
    print(f"✅ Complete! Processed {processed} files, modified {changed} files")
    print(f"🎯 All icons now use standardized Heroicons")

if __name__ == "__main__":
    main()