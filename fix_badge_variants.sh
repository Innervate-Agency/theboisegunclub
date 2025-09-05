#!/bin/bash

# Fix Badge variants by page context
sed -i 's/<Badge variant="outline"/<Badge variant="status-info"/g' src/app/help/page.tsx

# Page-specific replacements
sed -i 's/<Badge variant="outline"/<Badge variant="buysell-featured"/g' src/components/pages/buysell-page-standardized.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="events-featured"/g' src/components/pages/events-page-standardized.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="events-featured"/g' src/components/pages/events-archive-content.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="directory-business"/g' src/components/pages/directory-page-standardized.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="intel-verified"/g' src/components/pages/intel-page-content.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="status-info"/g' src/components/pages/training-page-standardized.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="status-info"/g' src/components/pages/guides-page-standardized.tsx
sed -i 's/<Badge variant="outline"/<Badge variant="status-info"/g' src/components/pages/legal-index-content.tsx

# Generic UI components - use status-info as default
for file in src/components/ui/*.tsx; do
  sed -i 's/<Badge variant="outline"/<Badge variant="status-info"/g' "$file"
done

echo "Fixed Badge variant outline errors"
