import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { NotFoundPage } from '@/components/pages/not-found-page'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      <NotFoundPage />
      <SiteFooter />
    </div>
  )
}