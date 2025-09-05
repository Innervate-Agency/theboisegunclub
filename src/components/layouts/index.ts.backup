/**
 * Layout System Exports
 * 
 * Systematic solution to prevent "russian nesting doll" style conflicts
 * by providing compound components that handle ALL styling concerns.
 */

// Compound Components (Foundation)
export { 
  PageContainer, 
  PageContainerWithContext, 
  usePageTheme 
} from './compound-components/PageContainer'

export { 
  SectionContainer,
  HeroSection,
  ContentSection, 
  FeatureSection,
  CTASection,
  StatsSection 
} from './compound-components/SectionContainer'

// Page Layouts
export { 
  HomePageLayout, 
  HomePageLayoutSimple 
} from './page-layouts/HomePage.layout'

export {
  StandardPageLayout,
  EventsPageLayout,
  DirectoryPageLayout,
  IntelPageLayout,
  ArmoryPageLayout,
  BuySellPageLayout
} from './page-layouts/StandardPage.layout'

/**
 * Usage Examples:
 * 
 * // Simple page with layout system
 * import { PageContainerWithContext, ContentSection } from '@/components/layouts'
 * 
 * export default function MyPage() {
 *   return (
 *     <PageContainerWithContext theme="content">
 *       <ContentSection background="background">
 *         <MyContentComponent />
 *       </ContentSection>
 *     </PageContainerWithContext>
 *   )
 * }
 * 
 * // Complex page with dedicated layout
 * import { HomePageLayout } from '@/components/layouts'
 * 
 * export default function HomePage() {
 *   return (
 *     <HomePageLayout
 *       hero={<Hero />}
 *       content={<Content />}
 *       // All styling handled by layout
 *     />
 *   )
 * }
 * 
 * Benefits:
 * - Prevents component style conflicts
 * - Enforces consistent theming
 * - Separates content from layout concerns
 * - Makes components truly reusable
 * - Prevents "russian nesting doll" problems
 */