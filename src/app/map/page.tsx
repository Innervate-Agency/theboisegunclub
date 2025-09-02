import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  MapIcon, 
  MapPinIcon, 
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  BuildingStorefrontIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Idaho Shooting Locations Map - The Boise Gun Club',
  description: 'Interactive map of shooting ranges, public lands, and firearms businesses across Idaho. Find locations near you.',
}

const locationTypes = [
  {
    title: 'Public Shooting Areas',
    description: 'BLM and Forest Service designated shooting areas across Idaho with verified access.',
    count: 25,
    icon: MapPinIcon,
    color: 'ayu-green',
    features: ['Free Access', 'Open Year-Round', 'Various Distances', 'Natural Backstops']
  },
  {
    title: 'Private Ranges',
    description: 'Indoor and outdoor shooting facilities with memberships and day passes available.',
    count: 18,
    icon: BuildingStorefrontIcon,
    color: 'slate-blue',
    features: ['Climate Controlled', 'Safety Officers', 'Equipment Rental', 'Training Available']
  },
  {
    title: 'Competition Venues',
    description: 'Facilities that host USPSA, IDPA, PRS, and other competitive shooting events.',
    count: 12,
    icon: ShieldCheckIcon,
    color: 'rusty-orange',
    features: ['Competition Setup', 'Timer Systems', 'Score Tracking', 'Regular Matches']
  },
  {
    title: 'Training Centers',
    description: 'Professional firearms training facilities offering courses and certifications.',
    count: 8,
    icon: AcademicCapIcon,
    color: 'ayu-purple',
    features: ['Certified Instructors', 'Safety Courses', 'Skills Development', 'Group Classes']
  }
]

const mapFeatures = [
  {
    title: 'Real-Time Conditions',
    description: 'Live weather, fire danger levels, and access restrictions for public shooting areas.',
    icon: ClockIcon
  },
  {
    title: 'Verified Locations',
    description: 'All locations verified by community members with GPS coordinates and access notes.',
    icon: CheckCircleIcon
  },
  {
    title: 'Interactive Filters',
    description: 'Filter by shooting discipline, facility type, distance, and current conditions.',
    icon: InformationCircleIcon
  },
  {
    title: 'Community Updates',
    description: 'Recent updates from shooters about conditions, closures, and new opportunities.',
    icon: UserGroupIcon
  }
]

const regions = [
  {
    name: 'Treasure Valley',
    locations: '145 locations',
    description: 'Boise metro area with highest concentration of ranges and shooting areas',
    status: 'Fully Mapped',
    statusColor: 'ayu-green'
  },
  {
    name: 'North Idaho',
    locations: '67 locations',
    description: 'Mountain regions including Coeur d\'Alene and Sandpoint areas',
    status: 'In Progress',
    statusColor: 'sandy-ochre'
  },
  {
    name: 'East Idaho',
    locations: '89 locations',
    description: 'Snake River plains and Yellowstone region shooting opportunities',
    status: 'Verified',
    statusColor: 'ayu-green'
  },
  {
    name: 'South Idaho',
    locations: '43 locations',
    description: 'Desert and mountain shooting areas in southern counties',
    status: 'Updating',
    statusColor: 'sandy-ochre'
  }
]

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation />
      
      <main className="container mx-auto max-w-site px-mobile-sm sm:px-md py-mobile-2xl sm:py-4xl">
        {/* Header Section */}
        <div className="text-center mb-3xl">
          <div className="flex items-center justify-center gap-sm mb-lg">
            <MapIcon className="h-8 w-8 text-slate-blue" />
            <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
              Interactive Map
            </Badge>
          </div>
          <h1 className="h1-primary text-card-foreground mb-base">
            Idaho Shooting Locations
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Discover shooting ranges, public areas, and firearms businesses across Idaho. 
            All locations verified by our community with real-time conditions and access information.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-muted/30 rounded-sm mb-3xl overflow-hidden">
          <div className="aspect-[16/10] relative bg-gradient-to-br from-slate-blue/10 to-ayu-green/10 flex items-center justify-center">
            <div className="text-center space-y-base">
              <MapIcon className="h-16 w-16 text-slate-blue mx-auto" />
              <div>
                <h3 className="h4-component text-card-foreground mb-xs">
                  Interactive Map Coming Soon
                </h3>
                <p className="body-small text-muted-foreground mb-base">
                  We're building an interactive map with real-time conditions and community updates.
                </p>
                <Button className="bg-slate-blue text-white hover:bg-slate-blue/90">
                  Get Notified When Ready
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Location Types */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            Location Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {locationTypes.map((type) => {
              const Icon = type.icon
              return (
                <Card key={type.title} className="mica-card text-center">
                  <CardHeader className="pb-base">
                    <div className={`mx-auto mb-sm w-12 h-12 bg-${type.color}/20 rounded-sm flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 text-${type.color}`} />
                    </div>
                    <CardTitle className="h5-small text-card-foreground">
                      {type.title}
                    </CardTitle>
                    <Badge className={`bg-${type.color}/20 text-${type.color} border-${type.color}/30`}>
                      {type.count} Locations
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="body-small text-muted-foreground mb-base">
                      {type.description}
                    </p>
                    <div className="space-y-xs">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-xs">
                          <CheckCircleIcon className="h-3 w-3 text-ayu-green flex-shrink-0" />
                          <span className="body-micro text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            Regional Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {regions.map((region) => (
              <Card key={region.name} className="mica-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="h4-component text-card-foreground">
                      {region.name}
                    </CardTitle>
                    <Badge className={`bg-${region.statusColor}/20 text-${region.statusColor} border-${region.statusColor}/30`}>
                      {region.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-xs mb-sm">
                    <MapPinIcon className="h-4 w-4 text-slate-blue" />
                    <span className="body-small font-medium text-card-foreground">
                      {region.locations}
                    </span>
                  </div>
                  <p className="body-small text-muted-foreground">
                    {region.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Features */}
        <div className="mb-3xl">
          <h2 className="h2-section text-card-foreground mb-lg text-center">
            Map Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {mapFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center space-y-base">
                  <div className="mx-auto w-12 h-12 bg-rusty-orange/20 rounded-sm flex items-center justify-center">
                    <Icon className="h-6 w-6 text-rusty-orange" />
                  </div>
                  <div>
                    <h3 className="h5-small text-card-foreground mb-xs">
                      {feature.title}
                    </h3>
                    <p className="body-small text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rusty-orange/10 to-slate-blue/10 rounded-sm p-xl text-center">
          <h2 className="h3-subsection text-card-foreground mb-base">
            Help Us Map Idaho
          </h2>
          <p className="body-regular text-muted-foreground mb-lg max-w-2xl mx-auto">
            Know of a great shooting location or notice outdated information? 
            Help us keep the map accurate and up-to-date for the entire Idaho firearms community.
          </p>
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Link href="/contact">
              <Button className="bg-rusty-orange text-white hover:bg-rusty-orange/90">
                Submit Location Update
              </Button>
            </Link>
            <Link href="/directory">
              <Button variant="outline" className="border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-white">
                Browse Directory
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}