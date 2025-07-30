import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Users, 
  MapPin, 
  Calendar, 
  ShoppingCart, 
  MessageSquare,
  Star,
  Shield,
  Zap
} from 'lucide-react'

const meta: Meta = {
  title: 'TBGC Business Context/Treasure Valley Firearms Hub',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# The Boise Gun Club: Treasure Valley Firearms Collective

## 🎯 THE TRANSFORMATION

**FROM**: Single gun club website  
**TO**: Comprehensive firearms ecosystem for entire Treasure Valley

This is **NOT** a gun club website - this is a regional firearms marketplace, directory, and community platform serving gun shops, ranges, instructors, and enthusiasts across the Treasure Valley.

## 🏢 THE FOUR PILLARS

### 1. Directory & Marketplace
- Gun shops, ranges, gunsmiths, instructors
- Service booking system  
- Aggregated accessory store (gear/ammo only)

### 2. Content Engine & SEO Domination
- Gun Wiki (user-editable, moderated)
- High-quality blog and reviews
- Unified events calendar for all local clubs
- Idaho gun law guides

### 3. Community Forum
- General discussion, competition shooting
- Gear classifieds (accessories only)
- Tips, tricks, and advice
- Event coordination

### 4. Apparel & Merchandise
- Print-on-demand branded gear
- Zero inventory risk
- Brand building and revenue stream

## 🎨 DESIGN SYSTEM IMPLICATIONS

Components must serve multiple user types and business scenarios:
- **Vendors**: Business listings, service booking, subscription management
- **Enthusiasts**: Forum participation, event discovery, gear shopping  
- **Visitors**: Directory browsing, content consumption, community exploration

Design authority must convey **regional expertise** and **professional trust**.

## 🔥 FIRE GRADIENT SIGNATURE

The copper-to-brass gradient system represents the "fire" of firearms enthusiasm:
- \`from-copper-orange to-brass-yellow\` - The signature accent
- Applied to: card accents, hover states, success indicators, call-to-action elements
- Represents the passion and precision of the firearms community
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const BusinessShowcase = () => (
  <div className="min-h-screen bg-background">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-range-white via-shooting-bench to-range-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm">
            <Target className="w-5 h-5 text-copper-orange" />
            <span className="text-sm font-medium text-muted-foreground">
              Treasure Valley's Premier Firearms Hub
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-foreground">
            The Boise Gun Club
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive firearms collective serving gun shops, ranges, instructors, 
            and enthusiasts across the entire Treasure Valley region.
          </p>
          
          {/* Fire gradient accent bar */}
          <div className="w-24 h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mx-auto rounded-full"></div>
          
          <div className="flex gap-4 justify-center pt-4">
            <Button className="bg-gradient-to-r from-copper-orange to-brass-yellow text-white hover:shadow-copper transition-all">
              <Users className="w-4 h-4 mr-2" />
              Join Community
            </Button>
            <Button variant="outline" className="border-copper-orange text-copper-orange hover:bg-copper-orange hover:text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Browse Directory
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Showcase */}
    <div className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Regional Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-copper-orange">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Vendor Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-copper-orange">50+</div>
              <p className="text-xs text-muted-foreground">Gun shops, ranges, instructors</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-brass-yellow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Community Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brass-yellow">5,000+</div>
              <p className="text-xs text-muted-foreground">Active enthusiasts</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-ayu-blue">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-ayu-blue">25+</div>
              <p className="text-xs text-muted-foreground">Competitions & training</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-clubhouse-lawn-green">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Service Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-clubhouse-lawn-green">200+</div>
              <p className="text-xs text-muted-foreground">Monthly reservations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    {/* Business Pillars */}
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          The Four Pillars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300 group">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-copper-orange to-brass-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-copper-orange">Directory & Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Gun shops, ranges, gunsmiths, and instructors with integrated booking systems
              </CardDescription>
              <div className="w-full h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 group">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-ayu-blue to-ayu-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-ayu-blue">Content Engine</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Gun Wiki, reviews, unified events calendar, and Idaho gun law guides
              </CardDescription>
              <div className="w-full h-1 bg-gradient-to-r from-ayu-blue to-ayu-teal mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 group">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-ayu-green to-clubhouse-lawn-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-ayu-green">Community Forum</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Discussion, competition shooting, gear classifieds, and event coordination
              </CardDescription>
              <div className="w-full h-1 bg-gradient-to-r from-ayu-green to-clubhouse-lawn-green mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 group">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-ayu-purple to-ayu-yellow rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-ayu-purple">Merchandise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Print-on-demand branded gear with zero inventory risk
              </CardDescription>
              <div className="w-full h-1 bg-gradient-to-r from-ayu-purple to-ayu-yellow mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    {/* User Types Showcase */}
    <div className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Built for Multiple User Types
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vendors */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-copper-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-copper-orange mb-2">Vendor Partners</h3>
              <p className="text-muted-foreground">Gun shops, ranges, instructors, gunsmiths</p>
            </div>
            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-copper-orange rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Capital City Guns</CardTitle>
                    <CardDescription>Gun Store • Boise, ID</CardDescription>
                  </div>
                  <Badge className="ml-auto bg-clubhouse-lawn-green text-white">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-brass-yellow text-brass-yellow" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.8 (124 reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">FFL Transfers</Badge>
                  <Badge variant="secondary">Gunsmithing</Badge>
                  <Badge variant="secondary">Training Classes</Badge>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mt-4 rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Enthusiasts */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gunmetal-black" />
              </div>
              <h3 className="text-xl font-bold text-brass-yellow mb-2">Community Members</h3>
              <p className="text-muted-foreground">Active enthusiasts and competitors</p>
            </div>
            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-copper-orange to-brass-yellow rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">John Doe</CardTitle>
                    <CardDescription>Competition Shooter</CardDescription>
                  </div>
                  <Badge className="ml-auto bg-clubhouse-lawn-green text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Expert
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "TBGC has revolutionized how our shooting community connects. The event calendar 
                  and vendor directory are game-changers!"
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mt-4 rounded-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Visitors */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-ayu-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ayu-blue mb-2">Visitors</h3>
              <p className="text-muted-foreground">Directory browsers and newcomers</p>
            </div>
            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ayu-blue rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Treasure Valley Ranges</CardTitle>
                    <CardDescription>Directory • 15 locations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover shooting ranges, training facilities, and competition venues across the region
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-ayu-blue to-ayu-teal mt-4 rounded-full"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="py-16 bg-gradient-to-r from-copper-orange to-brass-yellow">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join the Treasure Valley Firearms Community
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're a vendor, enthusiast, or newcomer, TBGC provides the tools and 
          community to enhance your firearms experience.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" size="lg" className="bg-white text-copper-orange hover:bg-gray-100">
            <Users className="w-5 h-5 mr-2" />
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-copper-orange">
            <Calendar className="w-5 h-5 mr-2" />
            View Events
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export const TreasureValleyHub: Story = {
  render: () => <BusinessShowcase />,
  parameters: {
    docs: {
      description: {
        story: `
## Treasure Valley Firearms Collective

This story demonstrates the complete business context and vision for The Boise Gun Club as a regional firearms marketplace and community platform.

### Key Features Showcased:
- **Multi-user design**: Vendors, enthusiasts, and visitors
- **Fire gradient system**: Signature copper-to-brass accents throughout
- **Business pillars**: Directory, content, community, merchandise
- **Regional authority**: Professional design conveying trust and expertise
- **Component integration**: Real business components working together

### Design System Elements:
- Fire gradient accents on interactive elements
- Theme-aware color usage throughout
- Professional typography hierarchy
- Responsive grid systems
- Hover animations and micro-interactions

This is not a gun club website - this is a flagship digital platform for the entire Treasure Valley firearms ecosystem.
        `,
      },
    },
  },
}

export const VendorFocused: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-copper-orange">Vendor Partner Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive business management for Treasure Valley firearms professionals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-copper-orange">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-copper-orange">47</div>
              <p className="text-xs text-muted-foreground">+23% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-brass-yellow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Profile Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brass-yellow">2,340</div>
              <p className="text-xs text-muted-foreground">Directory visibility</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-clubhouse-lawn-green">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-clubhouse-lawn-green">4.9</div>
              <p className="text-xs text-muted-foreground">Average rating</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-copper-orange/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-copper-orange rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-base">Your Business Listing</CardTitle>
                <CardDescription>Premium Vendor • Boise, ID</CardDescription>
              </div>
              <Badge className="ml-auto bg-clubhouse-lawn-green text-white">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-brass-yellow text-brass-yellow" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 (87 reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Priority Listing</Badge>
              <Badge variant="secondary">Advanced Analytics</Badge>
              <Badge variant="secondary">Direct Booking</Badge>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mt-4 rounded-full"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vendor-focused view showing business management tools and premium features.',
      },
    },
  },
}

export const CommunityFocused: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-brass-yellow">Community Hub</h1>
          <p className="text-muted-foreground">
            Connect with fellow enthusiasts across the Treasure Valley
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-ayu-blue" />
                <CardTitle>Latest Discussions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 bg-copper-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MK</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Best .308 for long range?</p>
                    <p className="text-xs text-muted-foreground">Mike K. • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 bg-brass-yellow rounded-full flex items-center justify-center">
                    <span className="text-gunmetal-black text-xs font-bold">JS</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Steel Challenge tips?</p>
                    <p className="text-xs text-muted-foreground">Jane S. • 4 hours ago</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-copper-orange to-brass-yellow mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-ayu-green" />
                <CardTitle>Upcoming Events</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 bg-ayu-green rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">IDPA Match</p>
                    <p className="text-xs text-muted-foreground">Saturday • Capital City Range</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 bg-ayu-blue rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">CCW Class</p>
                    <p className="text-xs text-muted-foreground">Sunday • Meridian Gun Club</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-ayu-green to-ayu-blue mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Community-focused view highlighting forums, events, and member interactions.',
      },
    },
  },
}