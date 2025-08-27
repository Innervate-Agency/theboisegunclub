#!/bin/bash

# Script to replace ALL Phosphor icons with Heroicons
echo "🔄 Starting comprehensive icon replacement with Heroicons..."

# First, let's update all imports to use Heroicons instead of Phosphor
find src -name "*.tsx" -exec sed -i 's/from.*@phosphor-icons\/react.*/from "@heroicons\/react\/24\/outline"/g' {} \;

# Replace common Phosphor icon names with Heroicons equivalents
# Navigation & UI Icons
find src -name "*.tsx" -exec sed -i 's/CaretRight/ChevronRightIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CaretLeft/ChevronLeftIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CaretDown/ChevronDownIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CaretUp/ChevronUpIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArrowRight/ArrowRightIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArrowLeft/ArrowLeftIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArrowUp/ArrowUpIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArrowDown/ArrowDownIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Plus/PlusIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/\bX\b/XMarkIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/XCircle/XCircleIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Check/CheckIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CheckCircle/CheckCircleIcon/g' {} \;

# Business & Location Icons
find src -name "*.tsx" -exec sed -i 's/MapPin/MapPinIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Building/BuildingOfficeIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/House/HomeIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Storefront/BuildingStorefrontIcon/g' {} \;

# People & Social Icons
find src -name "*.tsx" -exec sed -i 's/\bUser\b/UserIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Users/UsersIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/UserCircle/UserCircleIcon/g' {} \;

# Communication Icons
find src -name "*.tsx" -exec sed -i 's/\bPhone\b/PhoneIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Envelope/EnvelopeIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ChatCircle/ChatBubbleLeftIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Bell/BellIcon/g' {} \;

# Media & Content Icons
find src -name "*.tsx" -exec sed -i 's/\bCamera\b/CameraIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Image/PhotoIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Video/VideoCameraIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/BookOpen/BookOpenIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/\bBook\b/BookOpenIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Article/DocumentTextIcon/g' {} \;

# Shopping & Commerce Icons
find src -name "*.tsx" -exec sed -i 's/ShoppingCart/ShoppingCartIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Package/ArchiveBoxIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/\bTag\b/TagIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CurrencyDollar/CurrencyDollarIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Receipt/ReceiptPercentIcon/g' {} \;

# Time & Calendar Icons
find src -name "*.tsx" -exec sed -i 's/Calendar/CalendarIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Clock/ClockIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Timer/ClockIcon/g' {} \;

# Status & Feedback Icons
find src -name "*.tsx" -exec sed -i 's/\bStar\b/StarIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Heart/HeartIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ThumbsUp/HandThumbUpIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Warning/ExclamationTriangleIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/WarningCircle/ExclamationCircleIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Info/InformationCircleIcon/g' {} \;

# Weather & Environment Icons
find src -name "*.tsx" -exec sed -i 's/\bSun\b/SunIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CloudRain/CloudIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Wind/BoltIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/\bFire\b/FireIcon/g' {} \;

# Security & Protection Icons
find src -name "*.tsx" -exec sed -i 's/Shield/ShieldCheckIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ShieldCheck/ShieldCheckIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/\bLock\b/LockClosedIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/LockOpen/LockOpenIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Key/KeyIcon/g' {} \;

# Tools & Equipment Icons
find src -name "*.tsx" -exec sed -i 's/Wrench/WrenchScrewdriverIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Gear/CogIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Target/BullseyeIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Crosshair/BullseyeIcon/g' {} \;

# Awards & Achievement Icons
find src -name "*.tsx" -exec sed -i 's/Trophy/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/TrophyIcon/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Medal/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Crown/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Certificate/AcademicCapIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/GraduationCap/AcademicCapIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Student/AcademicCapIcon/g' {} \;

# Transportation Icons
find src -name "*.tsx" -exec sed -i 's/\bTruck\b/TruckIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/NavigationArrow/MapIcon/g' {} \;

# Miscellaneous Icons
find src -name "*.tsx" -exec sed -i 's/Flag/FlagIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Lightning/BoltIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/TrendUp/TrendingUpIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/TrendDown/TrendingDownIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/SpeakerHigh/SpeakerWaveIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/MagnifyingGlass/MagnifyingGlassIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Binoculars/MagnifyingGlassIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/Coin/CurrencyDollarIcon/g' {} \;

# Remove weight and fill attributes that don't exist in Heroicons
find src -name "*.tsx" -exec sed -i 's/weight="[^"]*"//g' {} \;
find src -name "*.tsx" -exec sed -i 's/fill="[^"]*"//g' {} \;

# Fix any "as" patterns that might cause issues
find src -name "*.tsx" -exec sed -i 's/TrophyIcon as Crown/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/TrophyIcon as Medal/TrophyIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/CurrencyDollarIcon as CurrencyDollar/CurrencyDollarIcon/g' {} \;
find src -name "*.tsx" -exec sed -i 's/ArchiveBoxIcon as Package/ArchiveBoxIcon/g' {} \;

echo "✅ Icon replacement complete! All Phosphor icons have been replaced with Heroicons."