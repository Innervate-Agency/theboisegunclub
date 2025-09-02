import { Metadata } from 'next'
import { StandardPageLayout } from '@/components/layouts/page-layouts/StandardPage.layout'
import { LegalIndexContent } from '@/components/pages/legal-index-content'

export const metadata: Metadata = {
  title: 'Legal Information - The Boise Gun Club',
  description: 'Access our legal documents including privacy policy, terms of service, and other important legal information.',
}

/**
 * Legal Index Page - Layout System Migration
 * 
 * BEFORE: 129 lines with mixed navigation/content concerns
 * AFTER: Clean page using StandardPageLayout architecture
 * 
 * Benefits:
 * - Layout consistency enforced architecturally
 * - Content extracted to reusable component
 * - StandardPageLayout provides proper page structure
 * - Theme management centralized
 */
export default function LegalIndexPage() {
  return (
    <StandardPageLayout
      content={<LegalIndexContent />}
      theme="content"
      currentPage="legal"
    />
  )
}