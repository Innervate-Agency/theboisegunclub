'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { DirectoryPageStandardized } from '@/components/pages/directory-page-standardized'

export default function DirectoryPage() {
  return (
    <div className="theme-directory min-h-screen">
      <SiteNavigation />
      <DirectoryPageStandardized />
      <SiteFooter currentPage="directory" />
    </div>
  )
}