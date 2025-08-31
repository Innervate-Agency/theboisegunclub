'use client'

import { EventsPageLayout } from '@/components/layouts'
import { EventsPageStandardized } from '@/components/pages/events-page-standardized'

/**
 * Events Page - Layout System Migration
 * 
 * BEFORE: 15 lines with mixed navigation/theme/content concerns
 * AFTER: 5 lines with pure content focus
 * 
 * Benefits:
 * - No theme class management
 * - No navigation/footer imports  
 * - Impossible to introduce style conflicts
 * - Layout changes don't require touching this page
 */
export default function EventsPage() {
  return (
    <EventsPageLayout
      content={<EventsPageStandardized />}
    />
  )
}