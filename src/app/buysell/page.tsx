'use client'

import { BuySellPageLayout } from '@/components/layouts'
import { BuySellPageStandardized } from '@/components/pages/buysell-page-standardized'

/**
 * Buy & Sell Page - Layout System Migration
 * 
 * BEFORE: 16 lines with navigation/theme management
 * AFTER: 4 lines with pure content focus
 * 
 * Benefits:
 * - Theme consistency enforced by layout
 * - Navigation/footer managed centrally  
 * - Style conflicts impossible by design
 */
export default function BuySellPage() {
  return (
    <BuySellPageLayout
      content={<BuySellPageStandardized />}
    />
  )
}