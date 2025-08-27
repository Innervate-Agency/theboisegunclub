#!/bin/bash

# Icon Migration Script: Phosphor → Heroicons
# Comprehensive replacement strategy for The Boise Gun Club

set -e

echo "🎯 Starting Heroicons Migration for The Boise Gun Club..."
echo "   This will replace Phosphor Icons with Heroicons across the codebase"
echo ""

# Color output for better visibility
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Backup function
create_backup() {
    echo -e "${BLUE}📦 Creating backup...${NC}"
    mkdir -p backups
    cp -r src backups/src-pre-icon-migration-$(date +%Y%m%d-%H%M%S)
    echo -e "${GREEN}✅ Backup created${NC}"
}

# Phase 1: Update import statements
update_imports() {
    echo -e "${BLUE}🔄 Phase 1: Updating import statements...${NC}"
    
    # Core Heroicons imports replacements
    find src -name "*.tsx" -type f -exec sed -i.bak \
        -e "s/from '@phosphor-icons\/react'/from '@heroicons\/react\/24\/outline'/g" \
        {} \;
    
    # Handle specific Diamond → TacticalReticleLogo replacement
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/import { Diamond } from '@phosphor-icons\/react'/import { TacticalReticleLogo } from '@\/components\/ui\/tactical-reticle-logo'/g" \
        {} \;
    
    # Handle mixed imports (preserve other icons, replace Diamond)
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/Diamond,/TacticalReticleLogo,/g" \
        -e "s/, Diamond/ TacticalReticleLogo/g" \
        -e "s/{ Diamond }/{ TacticalReticleLogo }/g" \
        {} \;
    
    echo -e "${GREEN}✅ Import statements updated${NC}"
}

# Phase 2: Replace icon component names
replace_icon_names() {
    echo -e "${BLUE}🔄 Phase 2: Replacing icon component names...${NC}"
    
    # Navigation & Core UI icons
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/<AddressBook/<UserGroupIcon/g" \
        -e "s/<\/AddressBook>/<\/UserGroupIcon>/g" \
        -e "s/<Shield/<ShieldCheckIcon/g" \
        -e "s/<\/Shield>/<\/ShieldCheckIcon>/g" \
        -e "s/<Target/<MapPinIcon/g" \
        -e "s/<\/Target>/<\/MapPinIcon>/g" \
        -e "s/<Storefront/<BuildingStorefrontIcon/g" \
        -e "s/<\/Storefront>/<\/BuildingStorefrontIcon>/g" \
        -e "s/<BookOpen/<BookOpenIcon/g" \
        -e "s/<\/BookOpen>/<\/BookOpenIcon>/g" \
        -e "s/<Calendar/<CalendarIcon/g" \
        -e "s/<\/Calendar>/<\/CalendarIcon>/g" \
        -e "s/<MapPin/<MapPinIcon/g" \
        -e "s/<\/MapPin>/<\/MapPinIcon>/g" \
        -e "s/<Phone/<PhoneIcon/g" \
        -e "s/<\/Phone>/<\/PhoneIcon>/g" \
        -e "s/<Globe/<GlobeAltIcon/g" \
        -e "s/<\/Globe>/<\/GlobeAltIcon>/g" \
        -e "s/<Buildings/<BuildingOffice2Icon/g" \
        -e "s/<\/Buildings>/<\/BuildingOffice2Icon>/g" \
        -e "s/<Users/<UserGroupIcon/g" \
        -e "s/<\/Users>/<\/UserGroupIcon>/g" \
        {} \;
    
    # Interactive Elements  
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/<ArrowRight/<ArrowRightIcon/g" \
        -e "s/<\/ArrowRight>/<\/ArrowRightIcon>/g" \
        -e "s/<CaretRight/<ChevronRightIcon/g" \
        -e "s/<\/CaretRight>/<\/ChevronRightIcon>/g" \
        -e "s/<ChevronRight/<ChevronRightIcon/g" \
        -e "s/<\/ChevronRight>/<\/ChevronRightIcon>/g" \
        -e "s/<Plus/<PlusIcon/g" \
        -e "s/<\/Plus>/<\/PlusIcon>/g" \
        -e "s/<X /<XMarkIcon /g" \
        -e "s/<\/X>/<\/XMarkIcon>/g" \
        -e "s/<Check/<CheckIcon/g" \
        -e "s/<\/Check>/<\/CheckIcon>/g" \
        {} \;
    
    # Actions & Interface
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/<Eye/<EyeIcon/g" \
        -e "s/<\/Eye>/<\/EyeIcon>/g" \
        -e "s/<EyeSlash/<EyeSlashIcon/g" \
        -e "s/<\/EyeSlash>/<\/EyeSlashIcon>/g" \
        -e "s/<Heart/<HeartIcon/g" \
        -e "s/<\/Heart>/<\/HeartIcon>/g" \
        -e "s/<Star/<StarIcon/g" \
        -e "s/<\/Star>/<\/StarIcon>/g" \
        -e "s/<Clock/<ClockIcon/g" \
        -e "s/<\/Clock>/<\/ClockIcon>/g" \
        -e "s/<Lock/<LockClosedIcon/g" \
        -e "s/<\/Lock>/<\/LockClosedIcon>/g" \
        -e "s/<EnvelopeSimple/<EnvelopeIcon/g" \
        -e "s/<\/EnvelopeSimple>/<\/EnvelopeIcon>/g" \
        -e "s/<User /<UserIcon /g" \
        -e "s/<\/User>/<\/UserIcon>/g" \
        -e "s/<UserCircle/<UserCircleIcon/g" \
        -e "s/<\/UserCircle>/<\/UserCircleIcon>/g" \
        -e "s/<SignIn/<ArrowRightOnRectangleIcon/g" \
        -e "s/<\/SignIn>/<\/ArrowRightOnRectangleIcon>/g" \
        -e "s/<Monitor/<ComputerDesktopIcon/g" \
        -e "s/<\/Monitor>/<\/ComputerDesktopIcon>/g" \
        {} \;
    
    # Business & Tools
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/<Wrench/<WrenchScrewdriverIcon/g" \
        -e "s/<\/Wrench>/<\/WrenchScrewdriverIcon>/g" \
        -e "s/<Trophy/<TrophyIcon/g" \
        -e "s/<\/Trophy>/<\/TrophyIcon>/g" \
        -e "s/<Scales/<ScaleIcon/g" \
        -e "s/<\/Scales>/<\/ScaleIcon>/g" \
        -e "s/<TrendUp/<ArrowTrendingUpIcon/g" \
        -e "s/<\/TrendUp>/<\/ArrowTrendingUpIcon>/g" \
        -e "s/<ShoppingBag/<ShoppingBagIcon/g" \
        -e "s/<\/ShoppingBag>/<\/ShoppingBagIcon>/g" \
        -e "s/<FileText/<DocumentTextIcon/g" \
        -e "s/<\/FileText>/<\/DocumentTextIcon>/g" \
        -e "s/<Info/<InformationCircleIcon/g" \
        -e "s/<\/Info>/<\/InformationCircleIcon>/g" \
        -e "s/<CheckCircle/<CheckCircleIcon/g" \
        -e "s/<\/CheckCircle>/<\/CheckCircleIcon>/g" \
        {} \;
    
    # Special case: Diamond → TacticalReticleLogo
    find src -name "*.tsx" -type f -exec sed -i \
        -e "s/<Diamond/<TacticalReticleLogo/g" \
        -e "s/<\/Diamond>/<\/TacticalReticleLogo>/g" \
        {} \;
    
    echo -e "${GREEN}✅ Icon component names updated${NC}"
}

# Phase 3: Remove Phosphor-specific props
remove_phosphor_props() {
    echo -e "${BLUE}🔄 Phase 3: Removing Phosphor-specific props...${NC}"
    
    # Remove weight props (Heroicons don't use weight)
    find src -name "*.tsx" -type f -exec sed -i \
        -e 's/weight="bold"//g' \
        -e 's/weight="fill"//g' \
        -e 's/weight="regular"//g' \
        -e 's/weight="light"//g' \
        -e 's/weight="thin"//g' \
        -e 's/weight={[^}]*}//g' \
        {} \;
    
    echo -e "${GREEN}✅ Phosphor-specific props removed${NC}"
}

# Phase 4: Standardize sizing
standardize_sizing() {
    echo -e "${BLUE}🔄 Phase 4: Standardizing icon sizing...${NC}"
    
    # Ensure h-N w-N order consistency
    find src -name "*.tsx" -type f -exec sed -i \
        -e 's/className="w-8 h-8/className="h-8 w-8/g' \
        -e 's/className="w-6 h-6/className="h-6 w-6/g' \
        -e 's/className="w-4 h-4/className="h-4 w-4/g' \
        -e 's/className="w-5 h-5/className="h-5 w-5/g' \
        -e 's/className="w-3 h-3/className="h-3 w-3/g' \
        {} \;
    
    echo -e "${GREEN}✅ Icon sizing standardized${NC}"
}

# Phase 5: Update imports in key files
update_key_imports() {
    echo -e "${BLUE}🔄 Phase 5: Updating critical import statements...${NC}"
    
    # Priority files that need comprehensive import updates
    PRIORITY_FILES=(
        "src/components/ui/site-navigation.tsx"
        "src/components/pages/directory-page-standardized.tsx"
        "src/components/pages/events-page-standardized.tsx" 
        "src/components/pages/marketplace-page-standardized.tsx"
        "src/components/pages/guides-page-standardized.tsx"
        "src/components/pages/armory-page-standardized.tsx"
        "src/components/ui/VendorCard.tsx"
    )
    
    for file in "${PRIORITY_FILES[@]}"; do
        if [ -f "$file" ]; then
            echo "   📝 Updating imports in $file"
            
            # Handle complex multi-line imports
            sed -i \
                -e 's/AddressBook/UserGroupIcon/g' \
                -e 's/Shield/ShieldCheckIcon/g' \
                -e 's/Target/MapPinIcon/g' \
                -e 's/Storefront/BuildingStorefrontIcon/g' \
                -e 's/BookOpen/BookOpenIcon/g' \
                -e 's/Calendar/CalendarIcon/g' \
                -e 's/MapPin/MapPinIcon/g' \
                -e 's/Phone/PhoneIcon/g' \
                -e 's/Globe/GlobeAltIcon/g' \
                -e 's/Buildings/BuildingOffice2Icon/g' \
                -e 's/Users/UserGroupIcon/g' \
                -e 's/ArrowRight/ArrowRightIcon/g' \
                -e 's/CaretRight/ChevronRightIcon/g' \
                -e 's/Plus/PlusIcon/g' \
                -e 's/Eye/EyeIcon/g' \
                -e 's/Heart/HeartIcon/g' \
                -e 's/Star/StarIcon/g' \
                -e 's/Clock/ClockIcon/g' \
                -e 's/TrendUp/ArrowTrendingUpIcon/g' \
                -e 's/Trophy/TrophyIcon/g' \
                -e 's/Scales/ScaleIcon/g' \
                -e 's/Wrench/WrenchScrewdriverIcon/g' \
                -e 's/FileText/DocumentTextIcon/g' \
                -e 's/Info/InformationCircleIcon/g' \
                -e 's/CheckCircle/CheckCircleIcon/g' \
                "$file"
        fi
    done
    
    echo -e "${GREEN}✅ Critical imports updated${NC}"
}

# Phase 6: Clean up backup files
cleanup_backups() {
    echo -e "${BLUE}🧹 Cleaning up temporary backup files...${NC}"
    find src -name "*.bak" -delete
    echo -e "${GREEN}✅ Cleanup complete${NC}"
}

# Phase 7: Verification
verify_migration() {
    echo -e "${BLUE}🔍 Phase 7: Verifying migration...${NC}"
    
    echo "   📊 Checking for remaining Phosphor imports..."
    PHOSPHOR_COUNT=$(find src -name "*.tsx" -exec grep -l "@phosphor-icons/react" {} \; | wc -l)
    echo "   Remaining Phosphor imports: $PHOSPHOR_COUNT"
    
    echo "   📊 Checking for Heroicons imports..."
    HEROICONS_COUNT=$(find src -name "*.tsx" -exec grep -l "@heroicons/react" {} \; | wc -l)
    echo "   New Heroicons imports: $HEROICONS_COUNT"
    
    echo "   📊 Checking for TacticalReticleLogo usage..."
    RETICLE_COUNT=$(find src -name "*.tsx" -exec grep -l "TacticalReticleLogo" {} \; | wc -l)
    echo "   TacticalReticleLogo implementations: $RETICLE_COUNT"
    
    if [ $PHOSPHOR_COUNT -eq 0 ]; then
        echo -e "${GREEN}✅ Migration successful - no Phosphor imports remaining${NC}"
    else
        echo -e "${YELLOW}⚠️  Migration incomplete - manual review needed${NC}"
        echo "   Files still using Phosphor:"
        find src -name "*.tsx" -exec grep -l "@phosphor-icons/react" {} \;
    fi
}

# Main execution
main() {
    echo -e "${BLUE}🚀 The Boise Gun Club - Heroicons Migration${NC}"
    echo ""
    
    # Confirmation prompt
    read -p "This will modify all TypeScript files in src/. Continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Migration cancelled."
        exit 1
    fi
    
    create_backup
    update_imports  
    replace_icon_names
    remove_phosphor_props
    standardize_sizing
    update_key_imports
    cleanup_backups
    verify_migration
    
    echo ""
    echo -e "${GREEN}🎯 Migration complete!${NC}"
    echo -e "${BLUE}📝 Next steps:${NC}"
    echo "   1. Test the application: npm run dev"
    echo "   2. Check for any TypeScript errors: npm run build"
    echo "   3. Run visual tests to ensure icons display correctly"
    echo "   4. Prepare for /compact optimization"
    echo ""
    echo -e "${YELLOW}💡 Benefits achieved:${NC}"
    echo "   • Smaller bundle size (Heroicons are more tree-shakeable)"
    echo "   • Better Tailwind ecosystem integration"
    echo "   • Tactical reticle logo for brand consistency"
    echo "   • Preparation for /compact optimization"
}

# Run if executed directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi