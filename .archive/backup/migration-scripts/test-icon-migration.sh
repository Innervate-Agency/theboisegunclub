#!/bin/bash

# Test Icon Migration - Single Component Validation
# Tests the migration strategy on one component before full rollout

set -e

echo "🧪 Testing Icon Migration Strategy..."
echo "   This will test the migration on a single component"

# Test on VendorCard.tsx since it has many icons
TEST_FILE="src/components/ui/VendorCard.tsx"

if [ ! -f "$TEST_FILE" ]; then
    echo "❌ Test file not found: $TEST_FILE"
    exit 1
fi

echo "📋 Current icons in $TEST_FILE:"
grep -n "from '@phosphor-icons/react'" "$TEST_FILE" || echo "   No Phosphor imports found"

echo ""
echo "🔍 Icons being used:"
grep -oE '<[A-Z][a-zA-Z]*[^>]*>' "$TEST_FILE" | grep -E '(MapPin|Phone|Clock|Star|Globe|Shield|Target|Users|Storefront|Wrench|GraduationCap|ShoppingBag)' | head -10

echo ""
echo "📝 Creating test backup..."
cp "$TEST_FILE" "${TEST_FILE}.backup"

echo ""
echo "🔄 Applying migration to test file..."

# Apply key transformations
sed -i \
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
    -e 's/weight="bold"//g' \
    -e 's/weight="fill"//g' \
    "$TEST_FILE"

echo "✅ Migration applied to test file"

echo ""
echo "📋 After migration:"
grep -n "from '@heroicons/react" "$TEST_FILE" || echo "   No Heroicons imports found"

echo ""
echo "🔍 Checking for remaining Phosphor references:"
grep -n "@phosphor-icons" "$TEST_FILE" || echo "   ✅ No Phosphor references remaining"

echo ""
echo "🔧 Manual review required:"
echo "   1. Check if TypeScript compilation works"
echo "   2. Verify visual appearance of icons"
echo "   3. Ensure no broken icon references"

echo ""
echo "💾 Restoration command:"
echo "   mv ${TEST_FILE}.backup $TEST_FILE"

echo ""
echo "🚀 If test looks good, run full migration:"
echo "   ./scripts/migrate-icons.sh"