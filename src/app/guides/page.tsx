import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { GuidesPageStandardized } from '@/components/pages/guides-page-standardized'

export default function GuidesPage() {
  return (
    <div className="theme-guides min-h-screen">
      <SiteNavigation />
      <GuidesPageStandardized />
      <SiteFooter currentPage="guides" />
    </div>
  )
}