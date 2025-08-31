'use client'

import { ArmoryPageLayout } from '@/components/layouts'
import { ArmoryPageStandardized } from '@/components/pages/armory-page-standardized'

/**
 * Armory Page - Layout System Migration
 * 
 * BEFORE: 16 lines with navigation/theme management
 * AFTER: 4 lines with pure content focus
 * 
 * Benefits:
 * - Theme consistency enforced by layout
 * - Navigation/footer centralized
 * - Style conflicts impossible by design
 */
export default function ArmoryPage() {
  return (
    <ArmoryPageLayout
      content={<ArmoryPageStandardized />}
    />
  )
}