#!/bin/bash

# Script to fix duplicate icon naming patterns
echo "🔧 Fixing duplicate icon naming patterns..."

# Fix common duplicate patterns (avoid backups)
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/BookOpenIconIcon as AddressBook/BookOpenIcon as AddressBook/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/BookOpenIconIcon/BookOpenIcon/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/ArrowRightIconIcon/ArrowRightIcon/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/PlusIconIcon/PlusIcon/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/ChevronDownIconIcon/ChevronDownIcon/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/ChevronUpIconIcon/ChevronUpIcon/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/XMarkIconIcon/XMarkIcon/g' {} \;

# Fix any remaining "Icon as Icon" patterns
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/\([A-Za-z]*Icon\) as \1/\1/g' {} \;

# Fix SignOut icon (which doesn't exist in Heroicons - should be ArrowRightOnRectangleIcon)
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/SignOut,/ArrowRightOnRectangleIcon as SignOut,/g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/SignOut}/ArrowRightOnRectangleIcon as SignOut}/g' {} \;

echo "✅ Duplicate icon name fixes complete!"