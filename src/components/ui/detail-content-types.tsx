import * as React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReviewsDisplay } from '@/components/ui/reviews-display'
import { EventEngagementWidget } from '@/components/ui/event-engagement-widget'
import { EventPreparationSection } from '@/components/ui/event-preparation-section'
import MdxContent from '@/components/molecules/MdxContent'
import { 
  Calendar, Clock, Eye, Heart, MessageCircle, User, Tag,
  MapPin, Phone, Globe, Mail, CheckCircle, Star, Shield,
  Award, Target, Users, CreditCard, DollarSign,
  Package, Truck, FileText, AlertTriangle as Warning,
  Crown, Medal, Clock4, Wrench, ShoppingCart, Zap,
  Settings, Car, BookOpen, GraduationCap, UserCheck
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Service Icon Mapping
const getServiceIcon = (service: string) => {
  const serviceLower = service.toLowerCase()
  
  if (serviceLower.includes('gunsmith') || serviceLower.includes('repair') || serviceLower.includes('custom')) {
    return Wrench
  }
  if (serviceLower.includes('sales') || serviceLower.includes('retail') || serviceLower.includes('purchase')) {
    return ShoppingCart
  }
  if (serviceLower.includes('training') || serviceLower.includes('instruction') || serviceLower.includes('class')) {
    return GraduationCap
  }
  if (serviceLower.includes('tactical') || serviceLower.includes('competition') || serviceLower.includes('shooting')) {
    return Target
  }
  if (serviceLower.includes('transfer') || serviceLower.includes('ffl') || serviceLower.includes('background')) {
    return FileText
  }
  if (serviceLower.includes('consultation') || serviceLower.includes('advice') || serviceLower.includes('expert')) {
    return UserCheck
  }
  if (serviceLower.includes('maintenance') || serviceLower.includes('cleaning') || serviceLower.includes('service')) {
    return Settings
  }
  if (serviceLower.includes('installation') || serviceLower.includes('mount') || serviceLower.includes('upgrade')) {
    return Zap
  }
  if (serviceLower.includes('delivery') || serviceLower.includes('pickup') || serviceLower.includes('mobile')) {
    return Car
  }
  if (serviceLower.includes('education') || serviceLower.includes('safety') || serviceLower.includes('course')) {
    return BookOpen
  }
  
  // Default icon
  return CheckCircle
}

// Business Hours Widget Component
function BusinessHoursWidget({ hours }: { hours: string }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentStatus, setCurrentStatus] = React.useState('')
  const [nextChange, setNextChange] = React.useState('')

  React.useEffect(() => {
    // Simple hours parsing - in a real app this would be more sophisticated
    const now = new Date()
    const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTime = currentHour * 60 + currentMinute
    
    // Basic business hours logic (assuming typical gun shop hours)
    // Monday-Friday: 9 AM - 6 PM, Saturday: 9 AM - 5 PM, Sunday: 10 AM - 4 PM
    let openTime = 540 // 9:00 AM in minutes
    let closeTime = 1080 // 6:00 PM in minutes
    
    if (currentDay === 0) { // Sunday
      openTime = 600 // 10:00 AM
      closeTime = 960 // 4:00 PM
    } else if (currentDay === 6) { // Saturday
      openTime = 540 // 9:00 AM
      closeTime = 1020 // 5:00 PM
    }
    
    const isCurrentlyOpen = currentTime >= openTime && currentTime < closeTime
    setIsOpen(isCurrentlyOpen)
    
    if (isCurrentlyOpen) {
      const minutesUntilClose = closeTime - currentTime
      const hoursUntilClose = Math.floor(minutesUntilClose / 60)
      const minsUntilClose = minutesUntilClose % 60
      if (hoursUntilClose > 0) {
        setCurrentStatus(`Open • Closes in ${hoursUntilClose}h ${minsUntilClose}m`)
      } else {
        setCurrentStatus(`Open • Closes in ${minsUntilClose}m`)
      }
      setNextChange('Today')
    } else {
      setCurrentStatus('Closed')
      // Calculate when they open next
      if (currentTime < openTime) {
        const minutesUntilOpen = openTime - currentTime
        const hoursUntilOpen = Math.floor(minutesUntilOpen / 60)
        const minsUntilOpen = minutesUntilOpen % 60
        if (hoursUntilOpen > 0) {
          setNextChange(`Opens in ${hoursUntilOpen}h ${minsUntilOpen}m`)
        } else {
          setNextChange(`Opens in ${minsUntilOpen}m`)
        }
      } else {
        setNextChange('Opens tomorrow')
      }
    }
  }, [hours])

  return (
    <div className={`flex items-center justify-between p-base bg-card border rounded-none shadow-present ${
      isOpen ? 'border-sagebrush-green/30' : 'border-border'
    }`}>
      <div className="flex items-center gap-xs">
        <Clock4 className={`h-5 w-5 ${isOpen ? 'text-sagebrush-green' : 'text-muted-foreground'}`} />
        <div>
          <div className={`text-body-sm font-medium ${isOpen ? 'text-sagebrush-green' : 'text-foreground'}`}>
            {currentStatus}
          </div>
          <div className="text-xs text-muted-foreground">{nextChange}</div>
        </div>
      </div>
      <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-sagebrush-green animate-pulse' : 'bg-muted'}`} />
    </div>
  )
}

// ===== ARTICLE CONTENT =====
interface ArticleAuthor {
  name: string
  avatar?: string
  bio?: string
  title?: string
}

interface ArticleContentProps {
  content: string
  author: ArticleAuthor
  publishDate: string
  readTime: number
  views?: number
  likes?: number
  comments?: number
  relatedArticles?: Array<{
    id: string
    title: string
    excerpt: string
    readTime: number
    category: string
  }>
  eventEngagement?: {
    eventId: string
    eventTitle: string
    eventDate: string
    eventLocation: string
    eventUrl: string
    registrationUrl?: string
    capacity: number
    registeredCount: number
    price: string
    featured?: boolean
    eventType: string
  }
  eventPreparation?: {
    agenda: string[]
    whatToBring: string[]
    requirements: string[]
    tags: string[]
  }
}

export function ArticleContent({ 
  content, 
  author, 
  publishDate, 
  readTime, 
  views = 0, 
  likes = 0, 
  comments = 0,
  relatedArticles = [],
  eventEngagement,
  eventPreparation
}: ArticleContentProps) {
  const heroContent = (
    <>
      {/* Author and Meta */}
      <div className="flex flex-wrap items-center gap-base text-sm text-muted-foreground">
        <div className="flex items-center gap-xs">
          <User className="h-4 w-4" />
          <span className="font-medium">{author.name}</span>
          {author.title && <span>• {author.title}</span>}
        </div>
        <div className="flex items-center gap-xs">
          <Calendar className="h-4 w-4" />
          <span>{new Date(publishDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="flex items-center gap-xs">
          <Clock className="h-4 w-4" />
          <span>{readTime} min read</span>
        </div>
        {views > 0 && (
          <div className="flex items-center gap-xs">
            <Eye className="h-4 w-4" />
            <span>{views.toLocaleString()} views</span>
          </div>
        )}
      </div>
      
      {/* Engagement Stats */}
      {(likes > 0 || comments > 0) && (
        <div className="flex items-center gap-base">
          {likes > 0 && (
            <div className="flex items-center gap-xs text-sm text-muted-foreground">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </div>
          )}
          {comments > 0 && (
            <div className="flex items-center gap-xs text-sm text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              <span>{comments}</span>
            </div>
          )}
        </div>
      )}
    </>
  )

  const mainContent = (
    <div className="space-y-2xl">
      <article>
        <div className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-rajdhani prose-headings:font-bold
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-body-base prose-p:leading-relaxed
          prose-a:text-rusty-orange prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-blockquote:border-l-4 prose-blockquote:border-rusty-orange/30
          prose-blockquote:bg-muted/50 prose-blockquote:px-base prose-blockquote:py-sm
          prose-code:bg-muted prose-code:px-xs prose-code:py-micro prose-code:rounded-xs
          prose-table:border-collapse prose-th:border prose-th:border-border
          prose-td:border prose-td:border-border prose-th:bg-muted/50
          prose-th:px-base prose-th:py-sm prose-td:px-base prose-td:py-sm">
          <MdxContent source={content} />
        </div>
      </article>
      
      {/* Event Registration Widget - moved from sidebar to main content */}
      {eventEngagement && (
        <div className="mt-2xl">
          <EventEngagementWidget
            eventId={eventEngagement.eventId}
            eventTitle={eventEngagement.eventTitle}
            eventDate={eventEngagement.eventDate}
            eventLocation={eventEngagement.eventLocation}
            eventUrl={eventEngagement.eventUrl}
            registrationUrl={eventEngagement.registrationUrl}
            capacity={eventEngagement.capacity}
            registeredCount={eventEngagement.registeredCount}
            price={eventEngagement.price}
            featured={eventEngagement.featured}
            eventType={eventEngagement.eventType}
          />
        </div>
      )}
    </div>
  )

  const sidebarSections = []

  // Add event preparation sections for events (moved from main content)
  if (eventPreparation) {
    // What to Bring section
    if (eventPreparation.whatToBring && eventPreparation.whatToBring.length > 0) {
      sidebarSections.push({
        id: 'what-to-bring',
        title: 'What to Bring',
        content: (
          <div className="space-y-sm">
            {eventPreparation.whatToBring.map((item, index) => (
              <div key={index} className="flex items-start gap-xs">
                <span className="w-2 h-2 bg-nav-events rounded-full flex-shrink-0 mt-xs" />
                <span className="text-body-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        )
      })
    }

    // Event Schedule section  
    if (eventPreparation.agenda && eventPreparation.agenda.length > 0) {
      sidebarSections.push({
        id: 'event-schedule',
        title: 'Event Schedule',
        content: (
          <div className="space-y-sm">
            {eventPreparation.agenda.map((item, index) => (
              <div key={index} className="flex items-start gap-xs">
                <span className="w-2 h-2 bg-nav-events rounded-full flex-shrink-0 mt-xs" />
                <span className="text-body-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        )
      })
    }

    // Requirements section
    if (eventPreparation.requirements && eventPreparation.requirements.length > 0) {
      sidebarSections.push({
        id: 'requirements',
        title: 'Requirements',
        content: (
          <div className="space-y-sm">
            {eventPreparation.requirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-xs">
                <span className="w-2 h-2 bg-warning-clay rounded-full flex-shrink-0 mt-xs" />
                <span className="text-body-sm text-muted-foreground">{requirement}</span>
              </div>
            ))}
          </div>
        )
      })
    }

  }

  // Note: Author and Event Categories sections moved to EventInfoBar header

  if (relatedArticles.length > 0) {
    sidebarSections.push({
      id: 'related',
      title: 'Related Articles',
      content: (
        <div className="space-y-base">
          {relatedArticles.slice(0, 3).map((article) => (
            <div key={article.id} className="space-y-xs">
              <h4 className="text-body-sm font-medium leading-snug hover:text-rusty-orange transition-colors cursor-pointer">
                {article.title}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-base text-xs text-muted-foreground">
                <Badge variant="outline" className="text-[10px] px-xs py-micro">
                  {article.category}
                </Badge>
                <span>{article.readTime} min</span>
              </div>
            </div>
          ))}
        </div>
      )
    })
  }

  return { heroContent, mainContent, sidebarSections }
}

// ===== BUSINESS CONTENT =====
interface BusinessContentProps {
  businessName: string
  businessType: string
  fullDescription: string
  phone: string
  email?: string
  website?: string
  address: string
  city: string
  state: string
  zip: string
  hours: string
  yearEstablished?: number
  employeeCount?: string
  isVerified: boolean
  verificationStatus: string
  rating?: number
  reviewCount?: number
  services: string[]
  specialties: string[]
  certifications: string[]
  serviceArea: string[]
  paymentMethods: string[]
  tier: 'free' | 'copper' | 'silver' | 'gold'
  logo?: string
  googlePlaceId?: string
  relatedBusinesses?: Array<{
    businessName: string
    businessType: string
    slug: string
    tier: string
  }>
}

export function BusinessContent({
  businessName,
  businessType,
  fullDescription,
  phone,
  email,
  website,
  address,
  city,
  state,
  zip,
  hours,
  yearEstablished,
  employeeCount,
  isVerified,
  verificationStatus,
  rating,
  reviewCount,
  services,
  specialties,
  certifications,
  serviceArea,
  paymentMethods,
  tier,
  logo,
  googlePlaceId,
  relatedBusinesses = []
}: BusinessContentProps) {
  // No longer fetch reviews directly in this component
  // Reviews will be handled by a separate client component

  const fullAddress = `${address}, ${city}, ${state} ${zip}`

  const heroContent = (
    <div className="space-y-2xl">
      {/* H2 Subtitle - Very close to title, standard body color */}
      <h2 className="font-rajdhani text-2xl md:text-3xl font-medium text-muted-foreground leading-tight -mt-sm">
        {city}, {state} • {businessType}
      </h2>
      
      {/* Primary Contact CTAs */}
      <div className="flex flex-wrap items-center gap-lg">
        <Button 
          size="xl" 
          className="bg-nav-directory hover:bg-nav-directory/90 text-nav-directory-foreground font-rajdhani font-bold shadow-elevated hover:shadow-commanding transition-all duration-200"
          asChild
        >
          <a href={`tel:${phone}`}>
            <Phone className="h-5 w-5 mr-xs" />
            Call {phone}
          </a>
        </Button>
        
        {website && (
          <Button 
            variant="outline" 
            size="xl"
            className="font-rajdhani font-bold border-2 hover:bg-nav-directory/10"
            asChild
          >
            <a href={website} target="_blank" rel="noopener noreferrer">
              <Globe className="h-5 w-5 mr-xs" />
              Visit Website
            </a>
          </Button>
        )}
      </div>
    </div>
  )

  const mainContent = (
    <div className="space-y-2xl">
      {/* Comprehensive SEO-Rich Business Description */}
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-xl">
        {/* Paragraph 1: Business Overview & Expertise */}
        <div className="font-body text-body-lg leading-loose space-y-base">
          <p>
            <strong className="font-rajdhani text-xl font-bold text-nav-directory">{businessName}</strong> stands as a cornerstone of the {city} firearms community, representing the kind of professional, knowledgeable {businessType.toLowerCase()} service that serious shooters and collectors depend on. Located in the heart of {city}, {state}, this {yearEstablished ? `well-established business has been serving local gun enthusiasts since ${yearEstablished}` : 'trusted establishment has built a reputation for excellence'}, developing deep expertise in {businessType.toLowerCase()} operations that reflects the unique needs of Idaho's diverse shooting community. Whether you're a competitive shooter preparing for your next match, a hunting enthusiast getting ready for elk season, or a collector seeking specialized services, {businessName} brings the kind of focused attention and technical knowledge that can only come from {yearEstablished ? `${new Date().getFullYear() - yearEstablished} years` : 'extensive experience'} of dedicated service to the Treasure Valley's firearms community.
          </p>
        </div>

        {/* Paragraph 2: Services & Community Impact */}
        <div className="font-body text-body-lg leading-loose space-y-base">
          <p>
            The comprehensive range of services offered by {businessName} reflects the evolving needs of Idaho's responsible gun owners, from basic {businessType.toLowerCase()} operations to specialized technical work that requires both precision and deep understanding of firearms regulations. With {services.length} distinct service offerings, the business has positioned itself as a true one-stop resource for {businessType === 'FFL Dealer' ? 'firearm transfers, sales, and compliance services' : businessType === 'Gunsmith' ? 'custom builds, repairs, and precision modifications' : businessType === 'Training Facility' ? 'education, safety courses, and skills development' : 'professional firearms services'}. The team's commitment to staying current with both state and federal regulations ensures that every transaction and service meets the highest standards of legal compliance, while their focus on customer education helps build a more informed and responsible shooting community throughout the Treasure Valley region.
          </p>
        </div>

        {/* Paragraph 3: Local Connection & Quality Standards */}
        <div className="font-body text-body-lg leading-loose space-y-base">
          <p>
            What truly sets {businessName} apart in the competitive {city} market is their genuine connection to the local firearms community and unwavering commitment to quality service standards. As {isVerified ? 'a verified business' : 'a trusted member'} of the Treasure Valley firearms network, they understand that reputation is built one satisfied customer at a time, whether that's ensuring a flawless FFL transfer, delivering precision work on a custom build, or providing the kind of knowledgeable advice that helps shooters make informed decisions about their equipment and training. Their location in {city} provides convenient access for customers throughout {serviceArea.length > 0 ? serviceArea.join(', ') + ' and surrounding areas' : 'the greater Boise area'}, with {hours.toLowerCase().includes('appointment') || hours.toLowerCase().includes('call') ? 'flexible scheduling options' : 'convenient business hours'} designed to accommodate the busy schedules of working professionals who are serious about their shooting sports and Second Amendment rights.
          </p>
        </div>
      </div>

      {/* Original Description (if it exists and is different) - Flat */}
      {fullDescription && fullDescription.length > 200 && (
        <div className="bg-card p-base">
          <h3 className="font-rajdhani text-xl font-bold text-nav-directory mb-base">About {businessName}</h3>
          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-rajdhani prose-headings:font-bold
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            prose-p:font-body prose-p:text-body-base prose-p:leading-loose
            prose-a:text-nav-directory prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-nav-directory/30
            prose-blockquote:bg-muted/50 prose-blockquote:px-base prose-blockquote:py-sm
            prose-ul:text-body-base prose-li:text-body-base">
            <MdxContent source={fullDescription} />
          </div>
        </div>
      )}
    </div>
  )

  const sidebarSections = [
    {
      id: 'contact',
      title: 'Contact & Location',
      content: (
        <div className="space-y-base">
          {/* Business Hours */}
          <BusinessHoursWidget hours={hours} />
          
          {/* Contact Information */}
          <div className="space-y-base">
            <div className="flex items-start gap-base">
              <MapPin className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-body-sm">Address</div>
                <div className="text-body-sm text-muted-foreground">{fullAddress}</div>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-nav-directory hover:underline mt-xs inline-block"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-base">
              <Phone className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
              <div>
                <div className="font-medium text-body-sm">Phone</div>
                <div className="text-body-sm text-muted-foreground">
                  <a href={`tel:${phone}`} className="hover:text-nav-directory transition-colors">
                    {phone}
                  </a>
                </div>
              </div>
            </div>
            
            {email && (
              <div className="flex items-start gap-base">
                <Mail className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
                <div>
                  <div className="font-medium text-body-sm">Email</div>
                  <div className="text-body-sm text-muted-foreground">
                    <a href={`mailto:${email}`} className="hover:text-nav-directory transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {website && (
              <div className="flex items-start gap-base">
                <Globe className="h-5 w-5 text-nav-directory mt-xs flex-shrink-0" />
                <div>
                  <div className="font-medium text-body-sm">Website</div>
                  <div className="text-body-sm text-muted-foreground">
                    <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-nav-directory transition-colors">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Google Maps Embed */}
          <div className="mt-base">
            <div className="w-full h-48 bg-muted rounded-none overflow-hidden border border-border/30">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing location of ${businessName}`}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Services & Specialties',
      content: (
        <div className="space-y-base">
          {/* Services */}
          <div className="space-y-xs">
            {services.map((service, index) => {
              const ServiceIcon = getServiceIcon(service)
              return (
                <div key={index} className="flex items-center gap-xs p-xs">
                  <ServiceIcon className="h-4 w-4 text-nav-directory flex-shrink-0" />
                  <span className="text-body-sm">{service}</span>
                </div>
              )
            })}
          </div>

          {/* Specialties */}
          {specialties.length > 0 && (
            <div className="space-y-xs">
              <div className="font-medium text-body-sm text-foreground">Specialties</div>
              {specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-xs py-xs">
                  <Star className="h-4 w-4 text-rusty-orange flex-shrink-0" />
                  <span className="text-body-sm text-muted-foreground">{specialty}</span>
                </div>
              ))}
            </div>
          )}

          {/* Service Area */}
          {serviceArea.length > 0 && (
            <div className="space-y-xs">
              <div className="font-medium text-body-sm text-foreground">Service Area</div>
              <div className="flex flex-wrap gap-xs">
                {serviceArea.map((area, index) => (
                  <span key={index} className="text-xs bg-muted text-muted-foreground px-xs py-micro rounded-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Payment Methods */}
          {paymentMethods.length > 0 && (
            <div className="space-y-xs">
              <div className="font-medium text-body-sm text-foreground">Payment Options</div>
              <div className="flex flex-wrap gap-xs">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <CreditCard className="h-3 w-3 text-nav-directory" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-base pt-base border-t border-border/30">
            <div className="flex items-center gap-xs text-sm text-nav-directory">
              <Target className="h-4 w-4" />
              <span className="font-medium">{services.length} total services</span>
            </div>
          </div>
        </div>
      )
    }
  ]

  // Add conditional sidebar sections
  
  // Business Information section
  const businessInfoItems = []
  if (yearEstablished) {
    businessInfoItems.push({
      icon: Clock4,
      label: 'Established',
      value: yearEstablished.toString()
    })
  }
  if (employeeCount) {
    businessInfoItems.push({
      icon: Users,
      label: 'Team Size',
      value: employeeCount
    })
  }
  if (tier !== 'free') {
    businessInfoItems.push({
      icon: Crown,
      label: 'Membership',
      value: `${tier.charAt(0).toUpperCase() + tier.slice(1)} Tier`
    })
  }

  if (businessInfoItems.length > 0) {
    sidebarSections.push({
      id: 'business-info',
      title: 'Business Information',
      content: (
        <div className="space-y-base">
          {businessInfoItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="flex items-center gap-base">
                <IconComponent className="h-4 w-4 text-nav-directory flex-shrink-0" />
                <div>
                  <div className="font-medium text-body-sm">{item.label}</div>
                  <div className="text-body-sm text-muted-foreground">{item.value}</div>
                </div>
              </div>
            )
          })}
          
          {/* Tier Benefits */}
          {tier !== 'free' && (
            <div className="mt-base pt-base border-t border-border/30">
              <div className="text-xs text-muted-foreground">
                {tier === 'gold' && '✦ Premium listing with enhanced features'}
                {tier === 'silver' && '✦ Enhanced business listing'}
                {tier === 'copper' && '✦ Standard business listing'}
              </div>
            </div>
          )}
        </div>
      )
    })
  }

  if (certifications.length > 0) {
    sidebarSections.push({
      id: 'certifications',
      title: 'Certifications',
      content: (
        <div className="space-y-xs">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-xs py-xs">
              <Award className="h-4 w-4 text-nav-directory flex-shrink-0" />
              <span className="text-body-sm">{cert}</span>
            </div>
          ))}
        </div>
      )
    })
  }

  // Import the client component dynamically to avoid SSR issues
  const BusinessReviewsSection = React.lazy(() =>
    import('@/components/ui/business-reviews-section').then(module => ({
      default: module.BusinessReviewsSection
    }))
  )

  const reviewsSection = (
    <React.Suspense fallback={
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl">
        <div className="space-y-base">
          <h3 className="font-rajdhani text-2xl font-bold text-foreground">Customer Reviews</h3>
          <div className="space-y-base">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card p-base rounded-none border border-border/30 animate-pulse">
                <div className="space-y-sm">
                  <div className="flex items-center gap-base">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div className="flex-1">
                      <div className="w-24 h-4 bg-muted rounded mb-xs"></div>
                      <div className="w-16 h-3 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <div className="w-full h-3 bg-muted rounded"></div>
                    <div className="w-3/4 h-3 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-base">
          <h3 className="font-rajdhani text-2xl font-bold text-foreground">Community Insights</h3>
          <div className="bg-card p-base rounded-none border border-border/30">
            <div className="w-full h-3 bg-muted rounded mb-xs"></div>
            <div className="w-3/4 h-3 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    }>
      <BusinessReviewsSection 
        businessName={businessName}
        city={city}
        state={state}
      />
    </React.Suspense>
  )

  return { heroContent, mainContent, sidebarSections, reviewsSection }
}

// ===== LOCATION CONTENT =====
interface LocationContentProps {
  name: string
  type: string
  description: string
  fullContent: string
  address: string
  coordinates: string
  access: string
  hours: string
  restrictions?: string
  amenities: string[]
  distanceFromBoise: number
  difficulty: string
  elevation: number
  bestWindConditions?: string
  phone?: string
  website?: string
  tips: string[]
  regulations: string[]
  reviews?: Array<{
    author: string
    rating: number
    comment: string
    date: string
  }>
}

export function LocationContent({
  name,
  type,
  description,
  fullContent,
  address,
  coordinates,
  access,
  hours,
  restrictions,
  amenities,
  distanceFromBoise,
  difficulty,
  elevation,
  bestWindConditions,
  phone,
  website,
  tips,
  regulations,
  reviews = []
}: LocationContentProps) {
  const heroContent = (
    <>
      {/* Location Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-base">
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <MapPin className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{distanceFromBoise} mi</div>
          <div className="text-xs text-muted-foreground">From Boise</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <Target className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{difficulty}</div>
          <div className="text-xs text-muted-foreground">Difficulty</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <Warning className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{elevation} ft</div>
          <div className="text-xs text-muted-foreground">Elevation</div>
        </div>
        <div className="text-center p-base bg-muted/50 rounded-xs">
          <CheckCircle className="h-5 w-5 text-nav-intel mx-auto mb-xs" />
          <div className="text-body-sm font-medium">{amenities.length}</div>
          <div className="text-xs text-muted-foreground">Amenities</div>
        </div>
      </div>
    </>
  )

  const mainContent = (
    <div className="space-y-xl">
      {/* Full Description */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Location Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-rajdhani prose-headings:font-bold
            prose-p:text-body-base prose-p:leading-relaxed">
            <MdxContent source={fullContent} />
          </div>
        </CardContent>
      </Card>
      
      {/* Amenities */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Amenities & Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xs">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-xs py-xs">
                <CheckCircle className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                <span className="text-body-sm">{amenity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const sidebarSections = [
    {
      id: 'access',
      title: 'Access Information',
      content: (
        <div className="space-y-base">
          <div>
            <div className="font-medium text-body-sm">Address</div>
            <div className="text-body-sm text-muted-foreground">{address}</div>
          </div>
          <div>
            <div className="font-medium text-body-sm">Coordinates</div>
            <div className="text-body-sm text-muted-foreground">{coordinates}</div>
          </div>
          <div>
            <div className="font-medium text-body-sm">Access</div>
            <div className="text-body-sm text-muted-foreground">{access}</div>
          </div>
          <div>
            <div className="font-medium text-body-sm">Hours</div>
            <div className="text-body-sm text-muted-foreground">{hours}</div>
          </div>
          {bestWindConditions && (
            <div>
              <div className="font-medium text-body-sm">Best Conditions</div>
              <div className="text-body-sm text-muted-foreground">{bestWindConditions}</div>
            </div>
          )}
        </div>
      )
    }
  ]

  if (tips.length > 0) {
    sidebarSections.push({
      id: 'tips',
      title: 'Tips & Recommendations',
      content: (
        <div className="space-y-xs">
          {tips.map((tip, index) => (
            <div key={index} className="text-body-sm text-muted-foreground">
              • {tip}
            </div>
          ))}
        </div>
      )
    })
  }

  return { heroContent, mainContent, sidebarSections }
}

// ===== PRODUCT CONTENT =====
interface ProductContentProps {
  title: string
  description: string
  price: number
  originalPrice?: number
  condition: string
  brand: string
  model: string
  caliber?: string
  category: string
  subcategory: string
  specifications: Record<string, string>
  features: string[]
  vendor: {
    name: string
    rating: number
    address: string
    phone: string
    verified: boolean
  }
  inStock: boolean
  quantity: number
  images: string[]
}

export function ProductContent({
  title,
  description,
  price,
  originalPrice,
  condition,
  brand,
  model,
  caliber,
  category,
  subcategory,
  specifications,
  features,
  vendor,
  inStock,
  quantity,
  images
}: ProductContentProps) {
  const heroContent = (
    <>
      {/* Product Info */}
      <div className="space-y-base">
        <div className="flex items-center gap-base">
          <Badge className="bg-nav-marketplace/20 text-nav-marketplace border-nav-marketplace/30">
            {category}
          </Badge>
          <Badge variant="outline">{condition}</Badge>
          {!inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>
        
        <div className="flex items-baseline gap-base">
          <span className="text-3xl font-rajdhani font-bold text-nav-marketplace">
            ${price.toLocaleString()}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </>
  )

  const mainContent = (
    <div className="space-y-xl">
      {/* Product Description */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-body-base leading-relaxed">{description}</p>
        </CardContent>
      </Card>
      
      {/* Specifications */}
      <Card className="shadow-present">
        <CardHeader>
          <CardTitle className="font-rajdhani">Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-sm border-b border-border last:border-0">
                <span className="font-medium text-body-sm">{key}</span>
                <span className="text-body-sm text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Features */}
      {features.length > 0 && (
        <Card className="shadow-present">
          <CardHeader>
            <CardTitle className="font-rajdhani">Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xs">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-xs py-xs">
                  <CheckCircle className="h-4 w-4 text-sagebrush-green flex-shrink-0" />
                  <span className="text-body-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const sidebarSections = [
    {
      id: 'vendor',
      title: 'Seller Information',
      content: (
        <div className="space-y-base">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-body-sm">{vendor.name}</div>
              <div className="text-body-sm text-muted-foreground">{vendor.address}</div>
            </div>
            {vendor.verified && (
              <Badge variant="outline" className="text-xs">
                <Shield className="h-3 w-3 mr-xs" />
                Verified
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-xs">
            <Star className="h-4 w-4 text-nav-marketplace" />
            <span className="text-body-sm font-medium">{vendor.rating}</span>
            <span className="text-xs text-muted-foreground">rating</span>
          </div>
          
          <div className="space-y-xs">
            <Button 
              size="sm" 
              className="w-full bg-nav-marketplace text-white hover:bg-nav-marketplace/90"
            >
              Contact Seller
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Phone className="h-4 w-4 mr-xs" />
              {vendor.phone}
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'availability',
      title: 'Availability',
      content: (
        <div className="space-y-base">
          <div className="flex items-center justify-between">
            <span className="text-body-sm">Status:</span>
            <Badge variant={inStock ? "default" : "destructive"}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>
          {inStock && (
            <div className="flex items-center justify-between">
              <span className="text-body-sm">Quantity:</span>
              <span className="text-body-sm font-medium">{quantity} available</span>
            </div>
          )}
        </div>
      )
    }
  ]

  return { heroContent, mainContent, sidebarSections }
}