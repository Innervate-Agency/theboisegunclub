import { IntelPageLayout } from '@/components/layouts'
import { IntelPageContent } from '@/components/pages/intel-page-content'

/**
 * Intel Page - Layout System Migration
 * 
 * BEFORE: 20 lines with theme/navigation management
 * AFTER: 4 lines with pure content focus
 * 
 * Benefits:
 * - No theme class management ("theme-intel")
 * - No navigation/footer imports
 * - Weather data fetching handled in content component
 * - Layout system prevents style conflicts
 */
export default function IntelPage() {
  return (
    <IntelPageLayout
      content={
        <IntelPageContent 
          liveWeatherConditions={[]}
          allWeatherData={[]}
        />
      }
    />
  )
}