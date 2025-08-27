'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { ArmoryPageStandardized } from '@/components/pages/armory-page-standardized'

export default function ArmoryPage() {
  return (
    <div className="theme-armory min-h-screen">
      <SiteNavigation />
      <ArmoryPageStandardized />
      <SiteFooter currentPage="armory" />
    </div>
  )
}