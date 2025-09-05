import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/24/outline'

// Note: Using DocumentTextIcon for cookies since CookieIcon doesn't exist in Heroicons
// Will replace with proper icon once available

const legalDocuments = [
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information when you use our platform.',
    href: '/legal/privacy',
    icon: ShieldCheckIcon,
    lastUpdated: 'January 15, 2025',
    category: 'Privacy'
  },
  {
    title: 'Terms of Service',
    description: 'Our terms and conditions for using The Boise Gun Club platform and services.',
    href: '/legal/terms',
    icon: DocumentTextIcon,
    lastUpdated: 'January 15, 2025',
    category: 'Terms'
  },
  {
    title: 'Cookie Policy',
    description: 'Information about how we use cookies and similar tracking technologies.',
    href: '/legal/cookies',
    icon: DocumentTextIcon,
    lastUpdated: 'Coming Soon',
    category: 'Privacy'
  }
]

/**
 * LegalIndexContent - Pure Content Component
 * 
 * OPTIMIZED FOR MVP:
 * - Stripped all layout concerns (navigation, backgrounds, containers)
 * - ArticlePageLayout will handle structural decisions
 * - Clean presentation of legal documents index
 * - Professional and trustworthy legal document navigation
 * - Clear categorization and update tracking
 */
export function LegalIndexContent() {
  return (
    <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
      {/* Header Section */}
      <div className="text-center mb-3xl">
        <div className="flex items-center justify-center gap-sm mb-lg">
          <ScaleIcon className="h-8 w-8 text-slate-blue" />
          <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
            Legal Center
          </Badge>
        </div>
        <h1 className="h1-primary text-card-foreground mb-base">
          Legal Information
        </h1>
        <p className="body-large text-muted-foreground max-w-3xl mx-auto">
          Access our legal documents and policies. We're committed to transparency and 
          protecting your rights while using The Boise Gun Club platform.
        </p>
      </div>

      {/* Legal Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl mb-3xl">
        {legalDocuments.map((doc) => {
          const Icon = doc.icon
          return (
            <Link key={doc.href} href={doc.href}>
              <Card className="mica-card h-full hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-base">
                  <div className="flex items-center justify-between mb-sm">
                    <Icon className="h-6 w-6 text-slate-blue group-hover:text-slate-blue/80 transition-colors" />
                    <Badge variant="status-info" className="text-xs">
                      {doc.category}
                    </Badge>
                  </div>
                  <CardTitle className="h4-component text-card-foreground group-hover:text-slate-blue transition-colors">
                    {doc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body-small text-muted-foreground mb-base line-clamp-3">
                    {doc.description}
                  </p>
                  <div className="flex items-center justify-between pt-base border-t border-border">
                    <span className="body-micro text-muted-foreground">
                      Updated: {doc.lastUpdated}
                    </span>
                    <span className="body-micro text-slate-blue font-medium group-hover:text-slate-blue/80 transition-colors">
                      Read More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Footer Information */}
      <div className="bg-muted/30 rounded-sm p-xl text-center">
        <h2 className="h3-subsection text-card-foreground mb-base">
          Need Help?
        </h2>
        <p className="body-regular text-muted-foreground mb-base">
          If you have questions about our legal policies or need assistance understanding 
          your rights, please don't hesitate to contact us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-base">
          <div className="flex items-center gap-xs body-small text-muted-foreground">
            <DocumentTextIcon className="h-4 w-4" />
            All documents are current as of January 2025
          </div>
          <div className="flex items-center gap-xs body-small text-muted-foreground">
            <ShieldCheckIcon className="h-4 w-4" />
            Compliant with Idaho state laws
          </div>
        </div>
      </div>
    </main>
  )
}