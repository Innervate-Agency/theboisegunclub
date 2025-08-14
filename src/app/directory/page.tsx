import { DirectoryPageComponent } from '@/components/ui/directory-page'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'

export default function DirectoryPage() {
  return (
    <>
      <SiteNavigation variant="premium" sticky={true} />
      <DirectoryPageComponent />
      <SiteFooter />
    </>
  )
}