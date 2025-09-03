import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  EnvelopeIcon, 
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  BugAntIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact Us - The Boise Gun Club',
  description: 'Get in touch with The Boise Gun Club team. Support, partnerships, feedback, and community inquiries welcome.',
}

const contactMethods = [
  {
    title: 'General Support',
    email: 'support@theboisegunclub.com',
    description: 'Platform questions, account issues, and general assistance.',
    icon: EnvelopeIcon,
    response: 'Within 24 hours',
    color: 'rusty-orange',
    priority: 'Primary'
  },
  {
    title: 'Business Partnerships',
    email: 'partnerships@theboisegunclub.com',
    description: 'Directory listings, event partnerships, and business collaboration.',
    icon: UserGroupIcon,
    response: 'Within 48 hours',
    color: 'slate-blue',
    priority: 'Business'
  },
  {
    title: 'Event Submissions',
    email: 'events@theboisegunclub.com',
    description: 'Submit competitions, training events, and community gatherings.',
    icon: DocumentTextIcon,
    response: 'Within 72 hours',
    color: 'ayu-green',
    priority: 'Events'
  },
  {
    title: 'Technical Issues',
    email: 'tech@theboisegunclub.com',
    description: 'Bug reports, feature requests, and platform technical support.',
    icon: BugAntIcon,
    response: 'Within 12 hours',
    color: 'ayu-purple',
    priority: 'Urgent'
  }
]

const inquiryTypes = [
  {
    title: 'Platform Support',
    description: 'Help with using the platform, account issues, or navigation problems.',
    icon: QuestionMarkCircleIcon,
    recommended: 'support@theboisegunclub.com'
  },
  {
    title: 'Business Inquiries',
    description: 'Directory listings, advertising opportunities, or business partnerships.',
    icon: UserGroupIcon,
    recommended: 'partnerships@theboisegunclub.com'
  },
  {
    title: 'Event Coordination',
    description: 'Adding events to calendar, partnership opportunities, or venue coordination.',
    icon: DocumentTextIcon,
    recommended: 'events@theboisegunclub.com'
  },
  {
    title: 'Bug Reports',
    description: 'Technical issues, broken features, or suggestions for improvements.',
    icon: BugAntIcon,
    recommended: 'tech@theboisegunclub.com'
  },
  {
    title: 'Content Updates',
    description: 'Corrections to business information, outdated listings, or location updates.',
    icon: InformationCircleIcon,
    recommended: 'support@theboisegunclub.com'
  },
  {
    title: 'Feature Ideas',
    description: 'Suggestions for new platform features or improvements to existing functionality.',
    icon: LightBulbIcon,
    recommended: 'tech@theboisegunclub.com'
  }
]

const responseExpectations = [
  {
    type: 'Support Requests',
    timeframe: '24 hours',
    description: 'Account issues, platform questions, general assistance',
    icon: ClockIcon
  },
  {
    type: 'Business Inquiries',
    timeframe: '48 hours',
    description: 'Partnerships, directory listings, collaboration opportunities',
    icon: UserGroupIcon
  },
  {
    type: 'Technical Issues',
    timeframe: '12 hours',
    description: 'Bug reports, platform errors, critical functionality issues',
    icon: ExclamationTriangleIcon
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <EnvelopeIcon className="h-8 w-8 text-rusty-orange" />
            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
              Get In Touch
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Contact Us
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            We're here to help build Idaho's firearms community. Reach out for support, 
            partnerships, or to share feedback about the platform.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            How to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card key={method.email} className="mica-card">
                  <CardHeader className="pb-base">
                    <div className="flex items-center justify-between mb-sm">
                      <Icon className={`h-6 w-6 text-${method.color}`} />
                      <Badge className={`bg-${method.color}/20 text-${method.color} border-${method.color}/30`}>
                        {method.priority}
                      </Badge>
                    </div>
                    <CardTitle className="h4-component text-card-foreground">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-base">
                      <p className="body-small text-muted-foreground">
                        {method.description}
                      </p>
                      <div className="flex items-center gap-xs">
                        <EnvelopeIcon className="h-4 w-4 text-slate-blue" />
                        <a 
                          href={`mailto:${method.email}`}
                          className="body-small text-slate-blue hover:text-slate-blue/80 transition-colors"
                        >
                          {method.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-xs">
                        <ClockIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="body-micro text-muted-foreground">
                          Response: {method.response}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Inquiry Types Guide */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            What Can We Help With?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {inquiryTypes.map((inquiry) => {
              const Icon = inquiry.icon
              return (
                <Card key={inquiry.title} className="mica-card">
                  <CardHeader className="pb-base">
                    <Icon className="h-6 w-6 text-rusty-orange mb-sm" />
                    <CardTitle className="h5-small text-card-foreground">
                      {inquiry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="body-small text-muted-foreground mb-base">
                      {inquiry.description}
                    </p>
                    <div className="pt-base border-t border-border">
                      <p className="body-micro text-slate-blue font-medium">
                        Best Contact: {inquiry.recommended}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Response Expectations */}
        <div className="bg-muted/30 rounded-sm p-xl mb-3xl">
          <h2 className="h3-subsection text-card-foreground mb-lg text-center">
            Response Times
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {responseExpectations.map((expectation) => {
              const Icon = expectation.icon
              return (
                <div key={expectation.type} className="text-center space-y-base">
                  <div className="mx-auto w-12 h-12 bg-slate-blue/20 rounded-sm flex items-center justify-center">
                    <Icon className="h-6 w-6 text-slate-blue" />
                  </div>
                  <div>
                    <h3 className="h5-small text-card-foreground mb-xs">
                      {expectation.type}
                    </h3>
                    <p className="body-large text-rusty-orange font-medium mb-xs">
                      {expectation.timeframe}
                    </p>
                    <p className="body-small text-muted-foreground">
                      {expectation.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Alternative Support */}
        <div className="text-center">
          <h2 className="h3-subsection text-card-foreground mb-base">
            Other Ways to Get Help
          </h2>
          <p className="body-regular text-muted-foreground mb-lg">
            Looking for immediate assistance or community input?
          </p>
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/help">
              <Button variant="outline" className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-white">
                <QuestionMarkCircleIcon className="h-4 w-4 mr-xs" />
                Browse Help Center
              </Button>
            </Link>
            <Link href="/forums">
              <Button variant="outline" className="border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-white">
                <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-xs" />
                Community Forums
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}