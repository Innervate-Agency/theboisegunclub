import type { Meta, StoryObj } from '@storybook/react'
import { Home, Trophy, Calendar, Target, Users, Shield, Settings, FileText, Mail, Phone } from 'lucide-react'

import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  SiteNavigation,
  MainNavigation,
  AdminNavigation,
  TournamentNavigation,
  HomeNavigationItem,
  TournamentNavigationItem,
  ScheduleNavigationItem,
  MembershipNavigationItem,
  SafetyNavigationItem,
  RangeNavigationItem
} from '@/components/ui/navigation-menu'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Navigation menu component with premium variants, glassmorphism effects, and gun club presets.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-3">
                <NavigationMenuLink
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Home className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Gun Club Portal
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Access all club features and services from our comprehensive portal.
                  </p>
                </NavigationMenuLink>
              </div>
              <NavigationMenuLink href="/intro" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Introduction</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Learn about our shooting club and facilities.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/installation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Membership</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Join our club and access premium features.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/docs/primitives/typography" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Safety Rules</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Essential safety guidelines for all members.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Events</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <Trophy className="h-4 w-4 mb-2" />
                <div className="text-sm font-medium leading-none">Tournaments</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Competitive shooting tournaments and championships.
                </p>
              </div>
              <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <Calendar className="h-4 w-4 mb-2" />
                <div className="text-sm font-medium leading-none">Schedule</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  View upcoming events and practice sessions.
                </p>
              </div>
              <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <Users className="h-4 w-4 mb-2" />
                <div className="text-sm font-medium leading-none">Leagues</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Join competitive leagues and team events.
                </p>
              </div>
              <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <Target className="h-4 w-4 mb-2" />
                <div className="text-sm font-medium leading-none">Practice</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Open practice sessions and training opportunities.
                </p>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const Premium: Story = {
  render: () => (
    <NavigationMenu variant="premium">
      <NavigationMenuList variant="premium">
        <NavigationMenuItem>
          <NavigationMenuTrigger variant="premium">
            <Trophy className="size-4 mr-2" />
            Tournaments
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-3">
                <NavigationMenuLink
                  variant="premium"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brass-yellow/20 to-copper-orange/20 p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Trophy className="h-6 w-6 text-brass-yellow" />
                  <div className="mb-2 mt-4 text-lg font-medium text-brass-yellow">
                    Elite Championships
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Premium tournament system with advanced scoring and live leaderboards.
                  </p>
                </NavigationMenuLink>
              </div>
              <NavigationMenuLink variant="premium" href="/tournaments/elite" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <div className="text-sm font-medium leading-none">Elite Series</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  High-level competitive tournaments with prizes.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="premium" href="/tournaments/championship" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <div className="text-sm font-medium leading-none">Championships</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Annual championship events and qualifiers.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="premium" href="/tournaments/results" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <div className="text-sm font-medium leading-none">Live Results</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Real-time scoring and tournament standings.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger variant="premium">
            <Calendar className="size-4 mr-2" />
            Events & Schedule
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationMenuLink variant="premium" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <Calendar className="h-4 w-4 mb-2 text-brass-yellow" />
                <div className="text-sm font-medium leading-none">Event Calendar</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Complete calendar of tournaments and events.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="premium" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <Users className="h-4 w-4 mb-2 text-brass-yellow" />
                <div className="text-sm font-medium leading-none">Registration</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Event registration and payment processing.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="premium" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <Target className="h-4 w-4 mb-2 text-brass-yellow" />
                <div className="text-sm font-medium leading-none">Range Schedule</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Range availability and booking system.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="premium" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <Settings className="h-4 w-4 mb-2 text-brass-yellow" />
                <div className="text-sm font-medium leading-none">My Schedule</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Personal event schedule and reminders.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink variant="premium" href="/membership" className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold">
            <Users className="size-4 mr-2" />
            Membership
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const Glass: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <NavigationMenu variant="glass">
        <NavigationMenuList variant="glass">
          <NavigationMenuItem>
            <NavigationMenuTrigger variant="glass">
              <Target className="size-4 mr-2" />
              Live Range
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink
                    variant="glass"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-white/10 backdrop-blur-sm p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Target className="h-6 w-6 text-white" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Range Control Center
                    </div>
                    <p className="text-sm leading-tight text-white/80">
                      Real-time range monitoring and control system.
                    </p>
                  </NavigationMenuLink>
                </div>
                <NavigationMenuLink variant="glass" href="/range/status" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <div className="text-sm font-medium leading-none">Range Status</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Live status of all shooting ranges.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="glass" href="/range/safety" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <div className="text-sm font-medium leading-none">Safety Monitor</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Real-time safety monitoring system.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="glass" href="/range/equipment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <div className="text-sm font-medium leading-none">Equipment</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Equipment status and availability.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger variant="glass">
              <Settings className="size-4 mr-2" />
              Control Panel
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <NavigationMenuLink variant="glass" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <Settings className="h-4 w-4 mb-2 text-white" />
                  <div className="text-sm font-medium leading-none">System Settings</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Configure range operation parameters.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="glass" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <Shield className="h-4 w-4 mb-2 text-white" />
                  <div className="text-sm font-medium leading-none">Safety Controls</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Emergency controls and safety systems.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="glass" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <Users className="h-4 w-4 mb-2 text-white" />
                  <div className="text-sm font-medium leading-none">User Management</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Manage user access and permissions.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="glass" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <FileText className="h-4 w-4 mb-2 text-white" />
                  <div className="text-sm font-medium leading-none">Reports</div>
                  <p className="line-clamp-2 text-sm leading-snug text-white/70">
                    Generate system and usage reports.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink variant="glass" href="/emergency" className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white">
              <Shield className="size-4 mr-2" />
              Emergency
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}

export const Tournament: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 rounded-xl">
      <NavigationMenu variant="tournament">
        <NavigationMenuList variant="tournament">
          <NavigationMenuItem>
            <NavigationMenuTrigger variant="tournament">
              <Trophy className="size-5 mr-2" />
              Championship Control
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink
                    variant="tournament"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800/90 to-slate-700/90 p-6 no-underline outline-none focus:shadow-md border border-brass-yellow/30"
                    href="/"
                  >
                    <Trophy className="h-6 w-6 text-brass-yellow" />
                    <div className="mb-2 mt-4 text-lg font-medium text-brass-yellow">
                      Elite Tournament System
                    </div>
                    <p className="text-sm leading-tight text-slate-200">
                      Professional tournament management with live scoring and broadcast capabilities.
                    </p>
                  </NavigationMenuLink>
                </div>
                <NavigationMenuLink variant="tournament" href="/tournament/leaderboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <div className="text-sm font-medium leading-none">Live Leaderboard</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Real-time tournament standings and scores.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="tournament" href="/tournament/officials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <div className="text-sm font-medium leading-none">Officials Panel</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Tournament official controls and communications.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="tournament" href="/tournament/broadcast" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <div className="text-sm font-medium leading-none">Broadcast Control</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Live streaming and broadcast management.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger variant="tournament">
              <Users className="size-5 mr-2" />
              Competitor Hub
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <NavigationMenuLink variant="tournament" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <Users className="h-4 w-4 mb-2 text-brass-yellow" />
                  <div className="text-sm font-medium leading-none">Registration</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Elite competitor registration system.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="tournament" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <Target className="h-4 w-4 mb-2 text-brass-yellow" />
                  <div className="text-sm font-medium leading-none">Squad Assignments</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Professional squad management system.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="tournament" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <FileText className="h-4 w-4 mb-2 text-brass-yellow" />
                  <div className="text-sm font-medium leading-none">Score Cards</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Digital scorecards and results tracking.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink variant="tournament" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none text-white">
                  <Trophy className="h-4 w-4 mb-2 text-brass-yellow" />
                  <div className="text-sm font-medium leading-none">Awards</div>
                  <p className="line-clamp-2 text-sm leading-snug text-slate-300">
                    Championship awards and recognition.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink variant="tournament" href="/tournament/master-control" className="group inline-flex h-12 w-max items-center justify-center rounded-lg px-6 py-3 text-sm font-bold text-white">
              <Settings className="size-5 mr-2" />
              Master Control
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <NavigationMenu variant="minimal">
      <NavigationMenuList variant="minimal">
        <NavigationMenuItem>
          <NavigationMenuTrigger variant="minimal">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
              <NavigationMenuLink variant="minimal" href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <div className="text-sm font-medium leading-none">Club History</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Learn about our club's rich history and traditions.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="minimal" href="/mission" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <div className="text-sm font-medium leading-none">Our Mission</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Understanding our goals and community values.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink variant="minimal" href="/facilities" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none">
                <div className="text-sm font-medium leading-none">Facilities</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Tour our world-class shooting facilities.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink variant="minimal" href="/events" className="group inline-flex h-9 w-max items-center justify-center rounded-none px-4 py-2 text-sm font-medium">
            Events
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink variant="minimal" href="/contact" className="group inline-flex h-9 w-max items-center justify-center rounded-none px-4 py-2 text-sm font-medium">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Gun Club Preset Components
export const SiteNavigationPreset: Story = {
  name: 'Site Navigation Presets',
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4">Main Site Navigation</h3>
        <SiteNavigation section="main">
          <NavigationMenuList>
            <HomeNavigationItem>
              <NavigationMenuLink href="/">
                Home
              </NavigationMenuLink>
            </HomeNavigationItem>
            <TournamentNavigationItem>
              <NavigationMenuTrigger>
                Tournaments
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <NavigationMenuLink href="/tournaments/upcoming">
                    <div className="text-sm font-medium">Upcoming Events</div>
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/tournaments/results">
                    <div className="text-sm font-medium">Results</div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </TournamentNavigationItem>
            <MembershipNavigationItem>
              <NavigationMenuLink href="/membership">
                Membership
              </NavigationMenuLink>
            </MembershipNavigationItem>
          </NavigationMenuList>
        </SiteNavigation>
      </div>
      
      <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-6 rounded-xl">
        <h3 className="font-semibold mb-4 text-white">Admin Navigation</h3>
        <SiteNavigation section="admin">
          <NavigationMenuList variant="tournament">
            <NavigationMenuItem>
              <NavigationMenuTrigger variant="tournament">
                <Settings className="size-4 mr-2" />
                Admin Panel
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <TournamentNavigationItem>
              <NavigationMenuLink variant="tournament" href="/admin/tournaments">
                Tournament Management
              </NavigationMenuLink>
            </TournamentNavigationItem>
            <RangeNavigationItem>
              <NavigationMenuLink variant="tournament" href="/admin/range">
                Range Control
              </NavigationMenuLink>
            </RangeNavigationItem>
          </NavigationMenuList>
        </SiteNavigation>
      </div>
    </div>
  ),
}

export const MainNavigationPreset: Story = {
  name: 'Main Navigation',
  render: () => (
    <MainNavigation>
      <NavigationMenuList>
        <HomeNavigationItem>
          <NavigationMenuLink href="/">
            Gun Club Home
          </NavigationMenuLink>
        </HomeNavigationItem>
        <TournamentNavigationItem>
          <NavigationMenuTrigger>
            Competitions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <NavigationMenuLink href="/tournaments">
                <div className="text-sm font-medium">Tournament Schedule</div>
                <p className="text-xs text-muted-foreground">View upcoming competitions</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/results">
                <div className="text-sm font-medium">Results Archive</div>
                <p className="text-xs text-muted-foreground">Past tournament results</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/leaderboards">
                <div className="text-sm font-medium">Leaderboards</div>
                <p className="text-xs text-muted-foreground">Current standings</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/registration">
                <div className="text-sm font-medium">Register</div>
                <p className="text-xs text-muted-foreground">Sign up for events</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </TournamentNavigationItem>
        <ScheduleNavigationItem>
          <NavigationMenuLink href="/schedule">
            Schedule
          </NavigationMenuLink>
        </ScheduleNavigationItem>
        <MembershipNavigationItem>
          <NavigationMenuLink href="/membership">
            Join Us
          </NavigationMenuLink>
        </MembershipNavigationItem>
        <SafetyNavigationItem>
          <NavigationMenuLink href="/safety">
            Safety
          </NavigationMenuLink>
        </SafetyNavigationItem>
      </NavigationMenuList>
    </MainNavigation>
  ),
}