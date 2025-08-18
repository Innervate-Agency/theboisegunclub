#!/bin/bash

# This script replaces all lucide-react icons with heroicons in the project.

# The mapping of icons from lucide-react to heroicons.
declare -A ICON_MAP
ICON_MAP=(
  [Search]="MagnifyingGlassIcon"
  [CalendarIcon]="CalendarIcon"
  [ShoppingCartIcon]="ShoppingCartIcon"
  [Share2]="ShareIcon"
  [BellIcon]="BellIcon"
  [BuildingOfficeIcon2]="BuildingOffice2Icon"
  [ArrowRightIcon]="ArrowRightIcon"
  [MapPinIcon]="MapPinIcon"
  [UsersIcon]="UsersIcon"
  [TrophyIcon]="TrophyIcon"
  [CrosshairsIcon]="CrosshairsIcon"
  [AlertTriangle]="ExclamationTriangleIcon"
  [UsersIcon2]="UsersIcon"
  [MessageSquare]="ChatBubbleBottomCenterTextIcon"
  [Database]="CircleStackIcon"
  [ShieldCheckIcon]="ShieldCheckIcon"
  [Megaphone]="MegaphoneIcon"
  [CheckCircleIcon]="CheckCircleIcon"
  [Zap]="BoltIcon"
  [StarIcon]="StarIcon"
  [TrendingUp]="ArrowTrendingUpIcon"
  [Mail]="EnvelopeIcon"
  [Bookmark]="BookmarkIcon"
  [FileText]="DocumentTextIcon"
  [PlusIcon]="PlusIcon"
  [Download]="ArrowDownTrayIcon"
  [Settings]="Cog8ToothIcon"
  [XMarkIcon]="XMarkIcon"
  [UserIcon]="UserIcon"
  [List]="ListBulletIcon"
  [LockClosedIcon]="LockClosedIcon"
  [Store]="BuildingStorefrontIcon"
  [DollarSign]="CurrencyDollarIcon"
  [Activity]="ChartBarIcon"
  [Eye]="EyeIcon"
  [PhoneIcon]="PhoneIcon"
  [ExternalLink]="ArrowTopRightOnSquareIcon"
  [CameraIcon]="CameraIcon"
  [Award]="AwardIcon"
  [ChevronRight]="ChevronRightIcon"
  [Home]="HomeIcon"
  [Menu]="Bars3Icon"
  [ChevronDown]="ChevronDownIcon"
  [InformationCircleIcon]="InformationCircleIcon"
  [PanelLeftIcon]="ArrowLeftOnRectangleIcon"
  [XIcon]="XMarkIcon"
  [CircleIcon]="CheckCircleIcon"
  [Minus]="MinusIcon"
  [Circle]="CheckCircleIcon"
  [ChevronUp]="ChevronUpIcon"
  [ChevronLeft]="ChevronLeftIcon"
  [ChevronRightIcon]="ChevronRightIcon"
  [Globe]="GlobeAltIcon"
  [Mail]="EnvelopeIcon"
  [EyeOff]="EyeSlashIcon"
  [AlertCircle]="ExclamationCircleIcon"
  [LucideIcon]="Icon"
  [Quote]="ChatBubbleLeftRightIcon"
  [Filter]="FunnelIcon"
  [Grid3X3]="Squares2X2Icon"
  [HeartIcon]="HeartIcon"
  [HelpCircle]="QuestionMarkCircleIcon"
  [ChevronsUpDown]="ChevronUpDownIcon"
  [Bold]="BoldIcon"
  [Italic]="ItalicIcon"
  [Underline]="UnderlineIcon"
)

# Find all .tsx files, excluding the backups directory, and replace the icons.
find . -path "./backups" -prune -o -type f -name "*.tsx" -print0 | while IFS= read -r -d '' file; do
  # Replace the import statement.
  sed -i 's/import { \(.*\) } from "lucide-react"/import { \1 } from "@heroicons\/react\/24\/outline"/' "$file"

  # Replace the icons.
  for i in "${!ICON_MAP[@]}"; do
    sed -i "s/\b$i\b/${ICON_MAP[$i]}/g" "$file"
  done
done

echo "Icon replacement complete."