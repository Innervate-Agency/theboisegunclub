'use client'

import { DirectoryPageLayout } from '@/components/layouts'
import { DirectoryVerificationContent } from '@/components/pages/directory-verification-content'

/**
 * Directory Verification Page - Layout System Migration
 * 
 * BEFORE: 92 lines with mixed navigation/theme/content concerns
 * AFTER: Clean page using StandardPageLayout architecture
 * 
 * Benefits:
 * - Layout consistency enforced architecturally
 * - Content extracted to reusable component
 * - Theme management centralized
 */
export default function VerificationPage() {
  return (
    <DirectoryPageLayout
      content={<DirectoryVerificationContent />}
    />
  )
}
