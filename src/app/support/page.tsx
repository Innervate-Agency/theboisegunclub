import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  LifebuoyIcon, 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  BugAntIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Technical Support - The Boise Gun Club',
  description: 'Technical support, troubleshooting guides, and platform assistance for The Boise Gun Club community.',
}

const supportCategories = [
  {
    title: 'Account & Login Issues',
    description: 'Problems signing in, creating accounts, or managing your profile information.',
    icon: UserGroupIcon,
    color: 'rusty-orange',
    solutions: ['Password Reset', 'Account Recovery', 'Profile Updates', 'Login Troubleshooting'],
    urgency: 'High Priority'
  },
  {
    title: 'Platform Bugs',
    description: 'Report broken features, error messages, or unexpected platform behavior.',
    icon: BugAntIcon,
    color: 'ayu-red',
    solutions: ['Error Reporting', 'Bug Documentation', 'Feature Failures', 'Performance Issues'],
    urgency: 'Critical'
  },
  {
    title: 'Mobile App Issues',
    description: 'Problems with mobile access, responsive design, or touch interface issues.',
    icon: DevicePhoneMobileIcon,
    color: 'slate-blue',
    solutions: ['iOS Safari Issues', 'Android Chrome', 'Touch Problems', 'Mobile Layout'],
    urgency: 'Standard'
  },
  {
    title: 'Desktop Browser Issues',
    description: 'Computer browser compatibility, loading problems, or desktop-specific errors.',
    icon: ComputerDesktopIcon,
    color: 'ayu-green',
    solutions: ['Chrome Issues', 'Firefox Support', 'Safari Problems', 'Edge Compatibility'],
    urgency: 'Standard'
  },
  {
    title: 'Data & Content',
    description: 'Incorrect business information, outdated events, or missing content.',
    icon: DocumentTextIcon,
    color: 'ayu-purple',
    solutions: ['Business Updates', 'Event Corrections', 'Missing Info', 'Data Accuracy'],
    urgency: 'Standard'
  },
  {
    title: 'Feature Requests',
    description: 'Suggest new platform features or improvements to existing functionality.',
    icon: WrenchScrewdriverIcon,
    color: 'ayu-teal',
    solutions: ['New Features', 'UI Improvements', 'Workflow Enhancement', 'Community Tools'],
    urgency: 'Enhancement'
  }
]

const troubleshootingSteps = [
  {
    step: 'Clear Browser Cache',
    description: 'Refresh your browser cache to resolve loading issues and outdated content.',
    technical: 'Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)'
  },
  {
    step: 'Check Internet Connection',
    description: 'Ensure stable internet connection for platform features and real-time data.',
    technical: 'Test with other websites or run speed test'
  },
  {
    step: 'Disable Browser Extensions',
    description: 'Some ad blockers or privacy extensions may interfere with platform features.',
    technical: 'Try incognito/private browsing mode'
  },
  {
    step: 'Update Your Browser',
    description: 'Ensure you\'re using a modern browser version for best compatibility.',
    technical: 'Chrome 120+, Firefox 120+, Safari 17+, Edge 120+'
  }
]

const supportStats = [
  {
    label: 'Average Response Time',
    value: '18 hours',
    description: 'For all support inquiries',
    icon: ClockIcon
  },
  {
    label: 'Resolution Rate',
    value: '94%',
    description: 'Issues resolved within 48 hours',
    icon: CheckCircleIcon
  },
  {
    label: 'Community Help',
    value: '75%',
    description: 'Questions answered by community',
    icon: UserGroupIcon
  },
  {
    label: 'Platform Uptime',
    value: '99.2%',
    description: 'Monthly platform availability',
    icon: ShieldCheckIcon
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <LifebuoyIcon className="h-8 w-8 text-slate-blue" />
            <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
              Technical Support
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Technical Support
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Get technical assistance with The Boise Gun Club platform. Report bugs, 
            request features, or get help troubleshooting issues.
          </p>
        </div>

        {/* Support Categories */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            What Do You Need Help With?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {supportCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="mica-card">
                  <CardHeader className="pb-base">
                    <div className="flex items-center justify-between mb-sm">
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                      <Badge 
                        className={`${
                          category.urgency === 'Critical' ? 'bg-ayu-red/20 text-ayu-red border-ayu-red/30' :
                          category.urgency === 'High Priority' ? 'bg-sandy-ochre/20 text-sandy-ochre border-sandy-ochre/30' :
                          'bg-slate-blue/20 text-slate-blue border-slate-blue/30'
                        }`}
                      >
                        {category.urgency}
                      </Badge>
                    </div>
                    <CardTitle className="h5-small text-card-foreground">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-small text-muted-foreground mb-base">
                      {category.description}
                    </p>
                    <div className="space-y-xs">
                      {category.solutions.map((solution, index) => (
                        <div key={index} className="flex items-center gap-xs">
                          <div className="w-1 h-1 bg-rusty-orange/60 rounded-full flex-shrink-0"></div>
                          <span className="body-micro text-muted-foreground">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Quick Troubleshooting */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            Quick Troubleshooting
          </h2>
          <Card className="mica-card">
            <CardHeader>
              <CardTitle className="h4-component text-card-foreground text-center">
                Try These Steps First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                {troubleshootingSteps.map((step, index) => (
                  <div key={index} className="space-y-sm">
                    <div className="flex items-center gap-sm">
                      <div className="w-6 h-6 bg-rusty-orange/20 rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="body-micro text-rusty-orange font-bold">{index + 1}</span>
                      </div>
                      <h3 className="h6-micro text-card-foreground">
                        {step.step}
                      </h3>
                    </div>
                    <p className="body-small text-muted-foreground ml-8">
                      {step.description}
                    </p>
                    <p className="body-micro text-slate-blue ml-8 font-mono">
                      {step.technical}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Statistics */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            Support Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {supportStats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="mica-card text-center">
                  <CardHeader className="pb-base">
                    <Icon className="h-8 w-8 text-slate-blue mx-auto mb-sm" />
                    <CardTitle className="h3-subsection text-rusty-orange">
                      {stat.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="h6-micro text-card-foreground mb-xs">
                      {stat.label}
                    </h3>
                    <p className="body-small text-muted-foreground">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-ayu-red/10 to-sandy-ochre/10 rounded-sm p-xl text-center">
          <ExclamationTriangleIcon className="h-12 w-12 text-ayu-red mx-auto mb-base" />
          <h2 className="h3-subsection text-card-foreground mb-base">
            Critical Issues
          </h2>
          <p className="body-regular text-muted-foreground mb-lg max-w-2xl mx-auto">
            For critical platform issues affecting safety information, event data, or business listings that need immediate attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <a href="mailto:tech@theboisegunclub.com">
              <Button className="bg-ayu-red text-white hover:bg-ayu-red/90">
                <ExclamationTriangleIcon className="h-4 w-4 mr-xs" />
                Report Critical Issue
              </Button>
            </a>
            <Link href="/help">
              <Button variant="outline" className="border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-white">
                <QuestionMarkCircleIcon className="h-4 w-4 mr-xs" />
                Check Help Center
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}