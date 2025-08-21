import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { IntelPageContent } from '@/components/pages/intel-page-content'

export default function IntelPage() {
  // Remove server-side data fetching to prevent navigation crashes
  // Data will be fetched client-side in IntelPageContent
  
  return (
    <div className="theme-intel min-h-screen">
      <SiteNavigation />
      <IntelPageContent 
        liveWeatherConditions={[]}
        allWeatherData={[]}
      />
      <SiteFooter currentPage="intel" />
    </div>
  )
}