import { Metadata } from 'next'
import { EventsPageLayout } from '@/components/layouts'
import { EventsArchiveContent } from '@/components/pages/events-archive-content'

export const metadata: Metadata = {
  title: 'Event Archive - Idaho Firearms Events',
  description: 'Browse completed Idaho firearms events, competitions, and training sessions. View results, statistics, and historical data.',
  openGraph: {
    title: 'Idaho Firearms Event Archive',
    description: 'Historical record of Idaho shooting sports events with results and statistics.',
    type: 'website'
  }
}

/**
 * Events Archive Page - Layout System Migration
 * 
 * BEFORE: 226 lines with mixed layout/content concerns
 * AFTER: Clean page using StandardPageLayout architecture
 * 
 * Benefits:
 * - Layout consistency enforced architecturally 
 * - Content extracted to reusable component
 * - Impossible to break styling system
 */
export default function EventArchivePage() {
  return (
    <EventsPageLayout
      content={<EventsArchiveContent />}
    />
  )
}