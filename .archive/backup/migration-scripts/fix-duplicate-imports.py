#!/usr/bin/env python3
"""
Fix duplicate icon imports across the project
"""

import os
import re
import glob
from collections import defaultdict

def fix_duplicates(filepath):
    """Fix duplicate imports in a TypeScript file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Find all Heroicons import statements
        import_pattern = r'import\s*\{([^}]+)\}\s*from\s*["\']@heroicons/react/24/outline["\']'
        
        def fix_import_statement(match):
            import_content = match.group(1)
            
            # Split by comma and clean up
            icons = [icon.strip() for icon in import_content.split(',') if icon.strip()]
            
            # Remove duplicates while preserving order
            seen = set()
            unique_icons = []
            for icon in icons:
                # Handle "as" aliases - use the original name as key
                key = icon.split(' as ')[0].strip() if ' as ' in icon else icon
                if key not in seen:
                    seen.add(key)
                    unique_icons.append(icon)
            
            # Rebuild the import statement
            formatted_icons = ',\n  '.join(unique_icons)
            return f"import {{\n  {formatted_icons}\n}} from \"@heroicons/react/24/outline\""
        
        # Replace all import statements
        content = re.sub(import_pattern, fix_import_statement, content, flags=re.MULTILINE | re.DOTALL)
        
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
    """Main function to fix all TypeScript files"""
    print("🔧 Fixing duplicate icon imports...")
    
    # Find all .tsx files in src/ (excluding backups)
    pattern = "src/**/*.tsx"
    files = [f for f in glob.glob(pattern, recursive=True) if 'backups/' not in f]
    
    processed = 0
    fixed = 0
    
    for filepath in files:
        if fix_duplicates(filepath):
            fixed += 1
            print(f"📄 Fixed: {filepath}")
        processed += 1
    
    print(f"\n✅ Complete! Processed {processed} files, fixed {fixed} files")
    print(f"🎯 All duplicate icon imports have been resolved")

if __name__ == "__main__":
    main()