'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { EventsPageStandardized } from '@/components/pages/events-page-standardized'

export default function EventsPage() {
  return (
    <div className="theme-events min-h-screen">
      <SiteNavigation />
      <EventsPageStandardized />
      <SiteFooter currentPage="events" />
    </div>
  )
}