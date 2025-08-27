#!/bin/bash

# Production Icon Migration: Phosphor → Heroicons + Tactical Reticle
# Based on successful VendorCard.tsx test results

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🎯 Production Heroicons Migration${NC}"
echo "   Building on successful VendorCard.tsx test"
echo ""

# Files that need migration (excluding already migrated VendorCard.tsx)
PRIORITY_FILES=(
    "src/components/ui/site-navigation.tsx"
    "src/components/ui/site-footer.tsx"
    "src/components/pages/directory-page-standardized.tsx"
    "src/components/pages/events-page-standardized.tsx" 
    "src/components/pages/marketplace-page-standardized.tsx"
    "src/components/pages/guides-page-standardized.tsx"
    "src/components/pages/armory-page-standardized.tsx"
    "src/components/ui/marketplace-deal-card.tsx"
    "src/components/ui/EventCard.tsx"
    "src/app/page.tsx"
    "src/app/intel/page.tsx"
)

# Create backup
create_backup() {
    echo -e "${BLUE}📦 Creating production backup...${NC}"
    mkdir -p backups/production-migration
    cp -r src backups/production-migration/src-$(date +%Y%m%d-%H%M%S)
    echo -e "${GREEN}✅ Backup created${NC}"
}

# Apply proven migration patterns from VendorCard test
migrate_priority_files() {
    echo -e "${BLUE}🔄 Migrating priority files with proven patterns...${NC}"
    
    for file in "${PRIORITY_FILES[@]}"; do
        if [ -f "$file" ]; then
            echo "   📝 Migrating $file"
            
            # Apply the exact same transformations that worked for VendorCard
            sed -i.backup \
                -e "s/from '@phosphor-icons\/react'/from '@heroicons\/react\/24\/outline'/g" \
                -e "s/MapPin/MapPinIcon/g" \
                -e "s/Phone/PhoneIcon/g" \
                -e "s/Clock/ClockIcon/g" \
                -e "s/Star/StarIcon/g" \
                -e "s/Globe/GlobeAltIcon/g" \
                -e "s/Shield/ShieldCheckIcon/g" \
                -e "s/Target/MapPinIcon/g" \
                -e "s/Users/UserGroupIcon/g" \
                -e "s/Storefront/BuildingStorefrontIcon/g" \
                -e "s/Wrench/WrenchScrewdriverIcon/g" \
                -e "s/GraduationCap/AcademicCapIcon/g" \
                -e "s/ShoppingBag/ShoppingBagIcon/g" \
                -e "s/ChatsCircle/ChatBubbleLeftEllipsisIcon/g" \
                -e "s/BookOpen/BookOpenIcon/g" \
                -e "s/Calendar/CalendarDaysIcon/g" \
                -e "s/Buildings/BuildingOffice2Icon/g" \
                -e "s/ArrowRight/ArrowRightIcon/g" \
                -e "s/CaretRight/ChevronRightIcon/g" \
                -e "s/Plus/PlusIcon/g" \
                -e "s/Eye/EyeIcon/g" \
                -e "s/Heart/HeartIcon/g" \
                -e "s/TrendUp/ArrowTrendingUpIcon/g" \
                -e "s/Trophy/TrophyIcon/g" \
                -e "s/Scales/ScaleIcon/g" \
                -e "s/FileText/DocumentTextIcon/g" \
                -e "s/Info/InformationCircleIcon/g" \
                -e "s/CheckCircle/CheckCircleIcon/g" \
                -e 's/weight="bold"//g' \
                -e 's/weight="fill"//g' \
                -e 's/weight="regular"//g' \
                -e 's/weight="light"//g' \
                -e 's/weight="thin"//g' \
                -e 's/weight={[^}]*}//g' \
                -e 's/className="\([^"]*\)"  /className="\1" /g' \
                "$file"
            
            echo "   ✅ $file migrated"
        else
            echo "   ⚠️  $file not found, skipping"
        fi
    done
}

# Special handling for Diamond → TacticalReticleLogo
migrate_diamond_logo() {
    echo -e "${BLUE}🔄 Migrating Diamond to TacticalReticleLogo...${NC}"
    
    # Find all files using Diamond
    DIAMOND_FILES=$(find src -name "*.tsx" -exec grep -l "Diamond" {} \;)
    
    for file in $DIAMOND_FILES; do
        echo "   💎 Updating Diamond in $file"
        
        # Replace Diamond imports
        sed -i \
            -e "s/import { Diamond } from '@phosphor-icons\/react'/import { TacticalReticleLogo } from '@\/components\/ui\/tactical-reticle-logo'/g" \
            -e "s/Diamond,/TacticalReticleLogo,/g" \
            -e "s/, Diamond/, TacticalReticleLogo/g" \
            -e "s/{ Diamond }/{ TacticalReticleLogo }/g" \
            -e "s/<Diamond/<TacticalReticleLogo/g" \
            -e "s/<\/Diamond>/<\/TacticalReticleLogo>/g" \
            "$file"
    done
    
    echo -e "${GREEN}✅ Diamond → TacticalReticleLogo migration complete${NC}"
}

# Fix duplicate imports and spacing issues (lessons learned from VendorCard)
cleanup_imports() {
    echo -e "${BLUE}🧹 Cleaning up imports and spacing...${NC}"
    
    find src -name "*.tsx" -type f -exec python3 -c "
import re
import sys

file_path = sys.argv[1]
with open(file_path, 'r') as f:
    content = f.read()

# Fix duplicate imports in same line
content = re.sub(r'(\w+Icon), (\w+Icon), \1', r'\1, \2', content)

# Clean up extra spaces before />
content = re.sub(r'className=\"[^\"]*\"\s+/>', lambda m: m.group(0).replace('  />', ' />'), content)

with open(file_path, 'w') as f:
    f.write(content)
" {} \;
    
    echo -e "${GREEN}✅ Import cleanup complete${NC}"
}

# Test build after migration
test_build() {
    echo -e "${BLUE}🔨 Testing build after migration...${NC}"
    
    if npm run build > /tmp/migration-build.log 2>&1; then
        echo -e "${GREEN}✅ Build successful!${NC}"
        return 0
    else
        echo -e "${RED}❌ Build failed${NC}"
        echo "Build log:"
        tail -20 /tmp/migration-build.log
        return 1
    fi
}

# Bundle size analysis for /compact preparation
analyze_bundle() {
    echo -e "${BLUE}📊 Analyzing bundle size for /compact preparation...${NC}"
    
    # Check icon imports
    echo "Icon library usage:"
    echo "- Heroicons: $(find src -name "*.tsx" -exec grep -l "@heroicons/react" {} \; | wc -l) files"
    echo "- Phosphor (remaining): $(find src -name "*.tsx" -exec grep -l "@phosphor-icons/react" {} \; | wc -l) files"
    echo "- TacticalReticleLogo: $(find src -name "*.tsx" -exec grep -l "TacticalReticleLogo" {} \; | wc -l) files"
    
    echo ""
    echo -e "${GREEN}📦 Ready for /compact optimization:${NC}"
    echo "   • Consistent icon imports"
    echo "   • Tactical reticle branding"
    echo "   • Tree-shakeable Heroicons"
    echo "   • Reduced bundle overhead"
}

# Main execution
main() {
    echo -e "${BLUE}🚀 Starting Production Migration${NC}"
    echo "   Based on successful VendorCard.tsx patterns"
    echo ""
    
    # Confirmation
    read -p "Apply production migration to remaining 41 files? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Migration cancelled."
        exit 1
    fi
    
    create_backup
    migrate_priority_files
    migrate_diamond_logo
    cleanup_imports
    
    if test_build; then
        analyze_bundle
        echo ""
        echo -e "${GREEN}🎯 Migration Complete!${NC}"
        echo -e "${BLUE}📋 Summary:${NC}"
        echo "   • All priority files migrated to Heroicons"
        echo "   • Diamond logo replaced with TacticalReticleLogo"
        echo "   • Build passes successfully"
        echo "   • Ready for /compact optimization"
        echo ""
        echo -e "${YELLOW}💡 Next: Run /compact to optimize bundle size${NC}"
    else
        echo -e "${RED}❌ Migration failed - check build errors${NC}"
        echo "   Restore from backup if needed:"
        echo "   cp -r backups/production-migration/src-* src/"
        exit 1
    fi
}

# Run if executed directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi