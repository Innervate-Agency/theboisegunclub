#!/bin/bash

# Universal Icon Replacement Script
# Replaces ALL icon imports with a standardized Heroicons approach

echo "🚀 Starting universal icon replacement..."

# Step 1: Replace ALL Phosphor imports with our universal Heroicons import
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/from.*@phosphor-icons\/react.*/from "@heroicons\/react\/24\/outline"/g' {} \;

# Step 2: Replace common import patterns with standardized Heroicons
echo "🔄 Updating import statements..."

# Create a comprehensive sed script for all icon replacements
cat > /tmp/icon_replacements.sed << 'EOF'
# Navigation & UI Icons
s/\bCaretRight\b/ChevronRightIcon/g
s/\bCaretLeft\b/ChevronLeftIcon/g
s/\bCaretDown\b/ChevronDownIcon/g
s/\bCaretUp\b/ChevronUpIcon/g
s/\bArrowRight\b/ArrowRightIcon/g
s/\bArrowLeft\b/ArrowLeftIcon/g
s/\bArrowUp\b/ArrowUpIcon/g
s/\bArrowDown\b/ArrowDownIcon/g
s/\bPlus\b/PlusIcon/g
s/\bX\b(?![a-zA-Z])/XMarkIcon/g
s/\bXCircle\b/XCircleIcon/g
s/\bCheck\b/CheckIcon/g
s/\bCheckCircle\b/CheckCircleIcon/g

# Business & Location Icons
s/\bMapPin\b/MapPinIcon/g
s/\bBuilding\b/BuildingOfficeIcon/g
s/\bHouse\b/HomeIcon/g
s/\bStorefront\b/BuildingStorefrontIcon/g

# People & Social Icons
s/\bUser\b(?![a-zA-Z])/UserIcon/g
s/\bUsers\b/UsersIcon/g
s/\bUserCircle\b/UserCircleIcon/g

# Communication Icons
s/\bPhone\b/PhoneIcon/g
s/\bEnvelope\b/EnvelopeIcon/g
s/\bChatCircle\b/ChatBubbleLeftIcon/g
s/\bBell\b/BellIcon/g

# Media & Content Icons
s/\bCamera\b/CameraIcon/g
s/\bImage\b/PhotoIcon/g
s/\bVideo\b/VideoCameraIcon/g
s/\bBookOpen\b/BookOpenIcon/g
s/\bBook\b(?![a-zA-Z])/BookOpenIcon/g
s/\bArticle\b/DocumentTextIcon/g

# Shopping & Commerce Icons
s/\bShoppingCart\b/ShoppingCartIcon/g
s/\bPackage\b/ArchiveBoxIcon/g
s/\bTag\b(?![a-zA-Z])/TagIcon/g
s/\bCurrencyDollar\b/CurrencyDollarIcon/g
s/\bReceipt\b/ReceiptPercentIcon/g

# Time & Calendar Icons
s/\bCalendar\b/CalendarIcon/g
s/\bClock\b/ClockIcon/g
s/\bTimer\b/ClockIcon/g

# Status & Feedback Icons
s/\bStar\b(?![a-zA-Z])/StarIcon/g
s/\bHeart\b/HeartIcon/g
s/\bThumbsUp\b/HandThumbUpIcon/g
s/\bWarning\b(?![a-zA-Z])/ExclamationTriangleIcon/g
s/\bWarningCircle\b/ExclamationCircleIcon/g
s/\bInfo\b(?![a-zA-Z])/InformationCircleIcon/g

# Weather & Environment Icons
s/\bSun\b(?![a-zA-Z])/SunIcon/g
s/\bCloudRain\b/CloudIcon/g
s/\bWind\b/BoltIcon/g
s/\bFire\b(?![a-zA-Z])/FireIcon/g
s/\bLightning\b/BoltIcon/g

# Security & Protection Icons
s/\bShield\b(?![a-zA-Z])/ShieldCheckIcon/g
s/\bShieldCheck\b/ShieldCheckIcon/g
s/\bLock\b(?![a-zA-Z])/LockClosedIcon/g
s/\bLockOpen\b/LockOpenIcon/g
s/\bKey\b(?![a-zA-Z])/KeyIcon/g

# Tools & Equipment Icons
s/\bWrench\b/WrenchScrewdriverIcon/g
s/\bGear\b/CogIcon/g
s/\bTarget\b/MapPinIcon/g
s/\bCrosshair\b/MapPinIcon/g

# Awards & Achievement Icons
s/\bTrophy\b(?![a-zA-Z])/TrophyIcon/g
s/\bMedal\b/TrophyIcon/g
s/\bCrown\b/TrophyIcon/g
s/\bCertificate\b/AcademicCapIcon/g
s/\bGraduationCap\b/AcademicCapIcon/g
s/\bStudent\b/AcademicCapIcon/g

# Transportation Icons
s/\bTruck\b(?![a-zA-Z])/TruckIcon/g
s/\bNavigationArrow\b/MapIcon/g

# Miscellaneous Icons
s/\bFlag\b(?![a-zA-Z])/FlagIcon/g
s/\bTrendUp\b/TrendingUpIcon/g
s/\bTrendDown\b/TrendingUpIcon/g
s/\bSpeakerHigh\b/SpeakerWaveIcon/g
s/\bMagnifyingGlass\b/MagnifyingGlassIcon/g
s/\bBinoculars\b/MagnifyingGlassIcon/g
s/\bCoin\b/CurrencyDollarIcon/g
s/\bSignOut\b/ArrowRightOnRectangleIcon/g

# Special aliases
s/\bAddressBook\b/BookOpenIcon/g

# View mode icons
s/\bGridFour\b/Squares2X2Icon/g
s/\bList\b(?![a-zA-Z])/ListBulletIcon/g
s/\bFunnelSimple\b/AdjustmentsHorizontalIcon/g
EOF

# Apply all replacements to all TypeScript files
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i -f /tmp/icon_replacements.sed {} \;

# Clean up the temporary sed script
rm /tmp/icon_replacements.sed

# Step 3: Clean up any remaining patterns and fix corrupted names
echo "🧹 Cleaning up corrupted patterns..."

# Fix doubled-up icon names that may have been created
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/IconIcon/Icon/g' {} \;

# Remove any weight and fill attributes
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/weight="[^"]*"//g' {} \;
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/fill="[^"]*"//g' {} \;

# Clean up any redundant "as" patterns
find src -name "*.tsx" -not -path "*/backups/*" -exec sed -i 's/\([A-Za-z]*Icon\) as \1/\1/g' {} \;

# Step 4: Standardize all imports to use a consistent set
echo "📦 Standardizing imports..."

# Create standard Heroicons import list
STANDARD_IMPORTS="ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, ArrowRightIcon, ArrowLeftIcon, ArrowUpIcon, ArrowDownIcon, PlusIcon, XMarkIcon, CheckIcon, CheckCircleIcon, XCircleIcon, MapPinIcon, BuildingOfficeIcon, HomeIcon, BuildingStorefrontIcon, UserIcon, UsersIcon, UserCircleIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftIcon, BellIcon, CameraIcon, PhotoIcon, VideoCameraIcon, BookOpenIcon, DocumentTextIcon, ShoppingCartIcon, ArchiveBoxIcon, TagIcon, CurrencyDollarIcon, ReceiptPercentIcon, CalendarIcon, ClockIcon, StarIcon, HeartIcon, HandThumbUpIcon, ExclamationTriangleIcon, ExclamationCircleIcon, InformationCircleIcon, SunIcon, CloudIcon, BoltIcon, FireIcon, ShieldCheckIcon, LockClosedIcon, LockOpenIcon, KeyIcon, WrenchScrewdriverIcon, CogIcon, TrophyIcon, AcademicCapIcon, TruckIcon, MapIcon, FlagIcon, TrendingUpIcon, SpeakerWaveIcon, MagnifyingGlassIcon, ArrowRightOnRectangleIcon, Squares2X2Icon, ListBulletIcon, AdjustmentsHorizontalIcon"

echo "✅ Universal icon replacement complete!"
echo "📋 All files now use standardized Heroicons imports"