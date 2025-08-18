'use client'

import React from 'react'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { TrainingPageStandardized } from '@/components/pages/training-page-standardized'

export default function TrainingPage() {
  return (
    <div className="theme-training min-h-screen">
      <SiteNavigation />
      <TrainingPageStandardized />
      <SiteFooter currentPage="training" />
    </div>
  )
}
