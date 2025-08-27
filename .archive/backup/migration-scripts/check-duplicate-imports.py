#!/usr/bin/env python3
"""
Check for duplicate icon imports across the project
"""

import os
import re
import glob
from collections import defaultdict

def analyze_imports(filepath):
    """Analyze imports in a TypeScript file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all Heroicons imports
        import_pattern = r'import\s*\{([^}]+)\}\s*from\s*["\']@heroicons/react/24/outline["\']'
        imports = re.findall(import_pattern, content)
        
        all_icons = []
        for import_statement in imports:
            # Split by comma and clean up
            icons = [icon.strip() for icon in import_statement.split(',') if icon.strip()]
            for icon in icons:
                # Handle "as" aliases
                if ' as ' in icon:
                    original, alias = icon.split(' as ')
                    all_icons.append(original.strip())
                else:
                    all_icons.append(icon.strip())
        
        # Find duplicates in this file
        icon_counts = defaultdict(int)
        for icon in all_icons:
            icon_counts[icon] += 1
        
        duplicates = {icon: count for icon, count in icon_counts.items() if count > 1}
        
        return duplicates
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return {}

def main():
    """Main function to check all TypeScript files"""
    print("🔍 Checking for duplicate icon imports...")
    
    # Find all .tsx files in src/ (excluding backups)
    pattern = "src/**/*.tsx"
    files = [f for f in glob.glob(pattern, recursive=True) if 'backups/' not in f]
    
    files_with_duplicates = []
    
    for filepath in files:
        duplicates = analyze_imports(filepath)
        if duplicates:
            files_with_duplicates.append((filepath, duplicates))
    
    if files_with_duplicates:
        print(f"\n🚨 Found duplicate imports in {len(files_with_duplicates)} files:\n")
        for filepath, duplicates in files_with_duplicates:
            print(f"📄 {filepath}")
            for icon, count in duplicates.items():
                print(f"   ⚠️  {icon} imported {count} times")
            print()
    else:
        print("✅ No duplicate icon imports found!")
    
    print(f"📊 Checked {len(files)} files")

if __name__ == "__main__":
    main()