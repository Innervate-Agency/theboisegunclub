import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  QuestionMarkCircleIcon, 
  BookOpenIcon, 
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  CommandLineIcon,
  UserGroupIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Help & Support - The Boise Gun Club',
  description: 'Get help with The Boise Gun Club platform. Find answers, tutorials, and connect with our community support.',
}

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'New to the platform? Learn the basics of navigating events, directories, and community features.',
    href: '/help/getting-started',
    icon: AcademicCapIcon,
    category: 'Tutorial',
    items: ['Platform Overview', 'Creating Your Profile', 'Finding Events', 'Directory Search']
  },
  {
    title: 'Events & Registration',
    description: 'Everything about finding, joining, and managing firearms events across Idaho.',
    href: '/help/events',
    icon: BookOpenIcon,
    category: 'Guide',
    items: ['Event Registration', 'Competition Types', 'Skill Levels', 'Equipment Requirements']
  },
  {
    title: 'Business Directory',
    description: 'How to search, filter, and connect with Idaho firearms businesses and services.',
    href: '/help/directory',
    icon: UserGroupIcon,
    category: 'Guide',
    items: ['Advanced Search', 'Business Reviews', 'Contact Information', 'Service Categories']
  },
  {
    title: 'Community Guidelines',
    description: 'Learn about our community standards, safety protocols, and best practices.',
    href: '/help/guidelines',
    icon: ShieldCheckIcon,
    category: 'Policy',
    items: ['Safety First', 'Community Standards', 'Reporting Issues', 'Privacy Policy']
  },
  {
    title: 'Technical Support',
    description: 'Troubleshooting, account issues, and platform technical assistance.',
    href: '/help/technical',
    icon: CommandLineIcon,
    category: 'Support',
    items: ['Account Problems', 'Browser Issues', 'Mobile Access', 'Feature Requests']
  },
  {
    title: 'Forums & Community',
    description: 'Getting the most out of our community discussions and knowledge sharing.',
    href: '/help/forums',
    icon: ChatBubbleBottomCenterTextIcon,
    category: 'Community',
    items: ['Forum Rules', 'Creating Topics', 'Best Practices', 'Moderation']
  }
]

const quickActions = [
  {
    title: 'Search Help Articles',
    description: 'Find specific answers quickly',
    icon: QuestionMarkCircleIcon,
    href: '/help/search',
    color: 'rusty-orange'
  },
  {
    title: 'Contact Support',
    description: 'Get personal assistance',
    icon: LifebuoyIcon,
    href: '/contact',
    color: 'slate-blue'
  },
  {
    title: 'Community Forums',
    description: 'Ask the community',
    icon: ChatBubbleBottomCenterTextIcon,
    href: '/forums',
    color: 'ayu-green'
  }
]

const contactMethods = [
  {
    method: 'Email Support',
    contact: 'support@theboisegunclub.com',
    description: 'Best for detailed questions and account issues',
    icon: EnvelopeIcon,
    response: 'Within 24 hours'
  },
  {
    method: 'Community Forums',
    contact: 'Community Discussion',
    description: 'Get help from experienced community members',
    icon: ChatBubbleBottomCenterTextIcon,
    response: 'Usually within hours'
  },
  {
    method: 'Documentation',
    contact: 'Help Articles',
    description: 'Comprehensive guides and tutorials',
    icon: DocumentTextIcon,
    response: 'Available 24/7'
  }
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <QuestionMarkCircleIcon className="h-8 w-8 text-rusty-orange" />
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              Help Center
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Help & Support
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Welcome to the Boise Gun Club help center. Find answers, learn about platform features, 
            and connect with our community for support.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-3xl">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.href} href={action.href}>
                <Card className="mica-card h-full hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                  <CardHeader className="text-center pb-base">
                    <div className={`mx-auto mb-sm w-12 h-12 bg-${action.color}/20 rounded-sm flex items-center justify-center group-hover:bg-${action.color}/30 transition-colors`}>
                      <Icon className={`h-6 w-6 text-${action.color}`} />
                    </div>
                    <CardTitle className="h4-component text-card-foreground">
                      {action.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="body-small text-muted-foreground">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Help Categories */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            Browse Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {helpCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link key={category.href} href={category.href}>
                  <Card className="mica-card h-full hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                    <CardHeader className="pb-base">
                      <div className="flex items-center justify-between mb-sm">
                        <Icon className="h-6 w-6 text-rusty-orange group-hover:text-rusty-orange/80 transition-colors" />
                        <Badge variant="outline" className="text-xs">
                          {category.category}
                        </Badge>
                      </div>
                      <CardTitle className="h4-component text-card-foreground group-hover:text-rusty-orange transition-colors">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="body-small text-muted-foreground mb-base">
                        {category.description}
                      </p>
                      <div className="space-y-xs">
                        {category.items.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex items-center gap-xs">
                            <div className="w-1 h-1 bg-rusty-orange/60 rounded-full"></div>
                            <span className="body-micro text-muted-foreground">{item}</span>
                          </div>
                        ))}
                        {category.items.length > 3 && (
                          <div className="flex items-center gap-xs">
                            <div className="w-1 h-1 bg-rusty-orange/60 rounded-full"></div>
                            <span className="body-micro text-rusty-orange">
                              +{category.items.length - 3} more topics
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-muted/30 rounded-sm p-xl mb-3xl">
          <h2 className="h3-subsection text-card-foreground mb-lg text-center">
            Need More Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.method} className="text-center space-y-base">
                  <div className="mx-auto w-12 h-12 bg-slate-blue/20 rounded-sm flex items-center justify-center">
                    <Icon className="h-6 w-6 text-slate-blue" />
                  </div>
                  <div>
                    <h3 className="h5-small text-card-foreground mb-xs">
                      {method.method}
                    </h3>
                    <p className="body-small text-muted-foreground mb-xs">
                      {method.description}
                    </p>
                    <p className="body-micro text-rusty-orange font-medium">
                      Response: {method.response}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Popular Resources */}
        <div className="text-center">
          <h2 className="h3-subsection text-card-foreground mb-base">
            Popular Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-base">
            <Link href="/help/getting-started">
              <Button variant="outline" className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white">
                Platform Tutorial
              </Button>
            </Link>
            <Link href="/help/events">
              <Button variant="outline" className="border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-white">
                Event Guide
              </Button>
            </Link>
            <Link href="/help/safety">
              <Button variant="outline" className="border-ayu-green/30 text-ayu-green hover:bg-ayu-green hover:text-white">
                Safety Guidelines
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-rusty-orange text-white hover:bg-rusty-orange/90">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}