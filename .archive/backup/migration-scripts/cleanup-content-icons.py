#!/usr/bin/env python3
"""
Clean up content strings where icon names accidentally got mixed into text
"""

import os
import re
import glob

def cleanup_content(content):
    """Fix content strings that got icon names mixed in"""
    
    # Fix common content issues
    fixes = [
        ('Live FireIcon Training', 'Live Fire Training'),
        ('MapPinIcon Engagement', 'Target Engagement'),
        ('BookOpenIcon range time', 'Book range time'),
        ('AcademicCapIcon Provided', 'Certificate Provided'),
        ('View CalendarIcon', 'View Calendar'),
        ('Wed-SunIcon:', 'Wed-Sun:'),
        ('SunIcon:', 'Sun:'),
        ('MapPinIcon stands provided', 'Target stands provided'),
        ('MapPinIcon systems', 'Target systems'),
        ('bestBoltIconConditions', 'bestWeatherConditions'),
        ('BoltIcon and ear', 'Eye and ear'),
        ('EyeIcon and ear', 'Eye and ear'),
    ]
    
    for old, new in fixes:
        content = content.replace(old, new)
    
    return content

def fix_file(filepath):
    """Fix a single TypeScript file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = cleanup_content(content)
        
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
    print("🧹 Cleaning up content strings with accidentally embedded icon names...")
    
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
    print(f"🎯 All content strings have been cleaned up")

if __name__ == "__main__":
    main()