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

// Page Layouts (Legacy)
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

// Enhanced Page Templates (v2) - Eliminates 86+ SiteNavigation/SiteFooter imports
export {
  PageTemplate,
  StandardPage,
  HeroPage,
  SidebarPage,
  ArticlePage,
  DashboardPage,
  MinimalPage,
  type PageTheme,
  type PageLayout,
  type PageTemplateProps
} from './templates/PageTemplates'

/**
 * Usage Examples:
 * 
 * // V2 Enhanced Templates (RECOMMENDED - eliminates nav/footer boilerplate)
 * import { StandardPage, ArticlePage } from '@/components/layouts'
 * 
 * export default function MyPage() {
 *   return (
 *     <StandardPage theme="content" currentPage="my-page">
 *       <MyContentComponent />
 *     </StandardPage>
 *   )
 * }
 * 
 * export default function MyArticle() {
 *   return (
 *     <ArticlePage 
 *       theme="content" 
 *       currentPage="articles"
 *       title="My Article"
 *       author="John Doe"
 *       publishDate="2024-01-01"
 *     >
 *       <ArticleContent />
 *     </ArticlePage>
 *   )
 * }
 * 
 * // Legacy Layout System (still supported)
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
 * Benefits:
 * - V2 Templates: Eliminates 86+ duplicate nav/footer imports
 * - Prevents component style conflicts
 * - Enforces consistent theming
 * - Separates content from layout concerns
 * - Makes components truly reusable
 * - Prevents "russian nesting doll" problems
 */
