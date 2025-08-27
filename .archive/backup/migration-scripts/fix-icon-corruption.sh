#!/bin/bash

# Script to fix corrupted icon names and ensure proper Heroicons usage
echo "🔧 Fixing corrupted icon patterns from bulk replacement..."

# Fix doubled up icon names that got corrupted
find src -name "*.tsx" -exec sed -i 's/ShieldCheckIconIcon/ShieldCheckIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CheckIconCircle/CheckCircleIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/TrophyIconIcon/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CurrencyDollarIconIcon/CurrencyDollarIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ExclamationTriangleIconCircle/ExclamationCircleIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArchiveBoxIconIcon/ArchiveBoxIcon/g' {} \;

# Fix any remaining "as" patterns that are redundant or corrupted  
find src -name "*.tsx" -exec sed -i 's/TrophyIcon as TrophyIcon/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CurrencyDollarIcon as CurrencyDollarIcon/CurrencyDollarIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArchiveBoxIcon as ArchiveBoxIcon/ArchiveBoxIcon/g' {} \;

# Fix any weight/fill attributes that slipped through
find src -name "*.tsx" -exec sed -i 's/ weight="[^"]*"//g' {} \;

# Fix any extra spaces in className
find src -name "*.tsx" -exec sed -i 's/className="[^"]*  /className="/g' {} \;

# Ensure we're using proper Heroicon imports (avoiding backups)
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/from.*@phosphor-icons\/react.*/from "@heroicons\/react\/24\/outline"/g' {} \;

echo "✅ Icon corruption fixes complete!"