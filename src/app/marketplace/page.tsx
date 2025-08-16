'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { MarketplacePageStandardized } from '@/components/pages/marketplace-page-standardized'

export default function MarketplacePage() {
  return (
    <div className="theme-marketplace min-h-screen">
      <SiteNavigation />
      <MarketplacePageStandardized />
      <SiteFooter currentPage="marketplace" />
    </div>
  )
}