'use client'

import { DirectoryPageLayout } from '@/components/layouts'
import { DirectoryPageStandardized } from '@/components/pages/directory-page-standardized'

/**
 * Directory Page - Layout System Migration
 * 
 * BEFORE: 16 lines with mixed navigation/theme/content concerns
 * AFTER: 4 lines with pure content focus
 * 
 * Benefits:
 * - Theme consistency enforced by layout
 * - Navigation/footer managed centrally
 * - Impossible to break styling architecture
 */
export default function DirectoryPage() {
  return (
    <DirectoryPageLayout
      content={<DirectoryPageStandardized />}
    />
  )
}