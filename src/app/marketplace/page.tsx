'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { BuySellPageStandardized } from '@/components/pages/buysell-page-standardized'

export default function MarketplacePage() {
  return (
    <div className="theme-buysell min-h-screen">
      <SiteNavigation />
      <BuySellPageStandardized />
      <SiteFooter currentPage="buysell" />
    </div>
  )
}