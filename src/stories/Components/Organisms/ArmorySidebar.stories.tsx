import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarRail
} from '@/components/ui/sidebar'
import { ArmorySidebar } from '@/components/ui/armory-sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowTrendingUpIcon, BookOpenIcon, CursorArrowRaysIcon, MapPinIcon, ShieldCheckIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof ArmorySidebar> = {
  title: 'Design System/Organisms/ArmorySidebar',
  component: ArmorySidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The Armory - Dual-tier information hub combining local Treasure Valley resources with a comprehensive firearms encyclopedia. Features community-driven content, local statistics, and Wikiwand-inspired information architecture.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Mock content for the main area
const ArmoryContent = () => (
  <div className="flex flex-1 flex-col gap-base p-base">
    {/* Hero Stats Section */}
    <div className="grid gap-base md:grid-cols-4">
      <Card className="bg-gradient-to-br from-slate-blue/5 to-slate-blue/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-slate-blue">
            <ArrowTrendingUpIcon className="size-5" />
            Gun Ownership Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h2-section font-rajdhani text-slate-blue">60.1%</div>
          <p className="text-sm text-muted-foreground">4th highest nationally</p>
          <Badge variant="secondary" size="sm" className="mt-2">
            Treasure Valley
          </Badge>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-sagebrush-green/5 to-sagebrush-green/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sagebrush-green">
            <UsersIcon className="size-5" />
            Firearm Owners
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h2-section font-rajdhani text-sagebrush-green">540K+</div>
          <p className="text-sm text-muted-foreground">~900K total population</p>
          <Badge variant="secondary" size="sm" className="mt-2">
            Local Estimate
          </Badge>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-rusty-orange/5 to-rusty-orange/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-rusty-orange">
            <CursorArrowRaysIcon className="size-5" />
            Licensed Dealers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h2-section font-rajdhani text-rusty-orange">127</div>
          <p className="text-sm text-muted-foreground">FFLs & retailers</p>
          <Badge variant="secondary" size="sm" className="mt-2">
            Verified
          </Badge>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-foothills-purple/5 to-foothills-purple/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-foothills-purple">
            <ShieldCheckIcon className="size-5" />
            Database Entries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h2-section font-rajdhani text-foothills-purple">12K+</div>
          <p className="text-sm text-muted-foreground">Community verified</p>
          <Badge variant="default" size="sm" className="mt-2">
            Growing Daily
          </Badge>
        </CardContent>
      </Card>
    </div>

    {/* Featured Content Grid */}
    <div className="grid gap-base md:grid-cols-2 lg:grid-cols-3">
      {/* Treasure Valley Featured */}
      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPinIcon className="size-5 text-slate-blue" />
              Treasure Valley Spotlight
            </CardTitle>
            <Badge variant="secondary">Local</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Constitutional Carry</h4>
              <p className="text-sm text-muted-foreground">
                Idaho allows constitutional carry for residents 18+ with no permit required for concealed carry.
              </p>
              <Button variant="micro" size="sm" animationType="arrow">
                Learn More
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">First-Time Buyer Guide</h4>
              <p className="text-sm text-muted-foreground">
                Complete guide to purchasing your first firearm in Idaho, including local dealer recommendations.
              </p>
              <Button variant="micro" size="sm" animationType="arrow">
                Get Started
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Encyclopedia Featured */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BuildingOffice2Icon className="size-5 text-foothills-purple" />
            Featured Manufacturer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h3-subsection font-rajdhani">Glock</div>
            <div className="flex items-center gap-1">
              <StarIcon className="size-4 fill-rusty-orange text-rusty-orange" />
              <span className="text-sm font-medium">4.7</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Austrian manufacturer known for striker-fired pistols. Founded 1963.
          </p>
          <div className="flex flex-wrap gap-1">
            <Badge variant="flat" size="sm">340 Models</Badge>
            <Badge variant="flat" size="sm">2.1K Reviews</Badge>
          </div>
          <Button variant="micro" size="sm" animationType="arrow" className="w-full">
            View Profile
          </Button>
        </CardContent>
      </Card>

      {/* Quick Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="size-5 text-sandy-ochre" />
            Comparison Tool
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Compare specifications, prices, and reviews across multiple firearms.
          </p>
          <div className="space-y-2">
            <div className="text-sm font-medium">Popular Comparisons:</div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>• Glock 19 vs Sig P320</div>
              <div>• AR-15 vs AK-47</div>
              <div>• 1911 vs 2011 Platforms</div>
            </div>
          </div>
          <Button variant="micro" size="sm" animationType="arrow" className="w-full">
            Start Comparing
          </Button>
        </CardContent>
      </Card>

      {/* Community Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpenIcon className="size-5 text-sagebrush-green" />
            Latest Guides
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="text-sm font-medium">AR-15 Build Guide 2025</div>
              <div className="text-xs text-muted-foreground">Complete beginner tutorial</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Cleaning & Maintenance</div>
              <div className="text-xs text-muted-foreground">Essential care techniques</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">Ballistics Fundamentals</div>
              <div className="text-xs text-muted-foreground">Physics of projectiles</div>
            </div>
          </div>
          <Button variant="micro" size="sm" animationType="arrow" className="w-full">
            Browse All Guides
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
)

const ArmoryDemo = ({ defaultOpen = true }) => (
  <SidebarProvider defaultOpen={defaultOpen}>
    <div className="flex h-screen w-full">
      <ArmorySidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-xs border-b px-base">
          <SidebarTrigger className="-ml-xs" />
          <div className="mx-2 h-4 w-px bg-border" />
          <div className="flex items-center gap-xs text-body-sm">
            <ShieldCheckIcon className="size-4 text-foothills-purple" />
            <span className="font-semibold">The Armory</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Firearms Information Hub</span>
          </div>
        </header>
        <ArmoryContent />
      </SidebarInset>
      <SidebarRail />
    </div>
  </SidebarProvider>
)

export const Default: Story = {
  render: () => <ArmoryDemo />,
}

export const Collapsed: Story = {
  render: () => <ArmoryDemo defaultOpen={false} />,
}

export const TreasureValleyFocus: Story = {
  render: () => (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        <ArmorySidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-xs border-b px-base bg-gradient-to-r from-slate-blue/5 to-transparent">
            <SidebarTrigger className="-ml-xs" />
            <div className="mx-2 h-4 w-px bg-border" />
            <div className="flex items-center gap-xs text-body-sm">
              <MapPinIcon className="size-4 text-slate-blue" />
              <span className="font-semibold">Treasure Valley Hub</span>
              <Badge variant="secondary" size="sm">60.1% Ownership</Badge>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-base p-base">
            <Card className="bg-gradient-to-br from-slate-blue/5 via-transparent to-sagebrush-green/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowTrendingUpIcon className="size-5 text-slate-blue" />
                  Treasure Valley Firearms Demographics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="h3-subsection font-rajdhani text-slate-blue">60.1%</div>
                    <div className="text-sm text-muted-foreground">Household gun ownership rate</div>
                    <Badge variant="secondary" size="sm">4th highest nationally</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="h3-subsection font-rajdhani text-sagebrush-green">540,000+</div>
                    <div className="text-sm text-muted-foreground">Estimated firearm owners</div>
                    <Badge variant="secondary" size="sm">40% of Idaho population</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="min-h-[60vh] rounded-xs bg-muted/20 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <ShieldCheckIcon className="size-12 mx-auto mb-4 text-foothills-purple" />
                <h3 className="font-semibold mb-2">Local Content Coming Soon</h3>
                <p className="text-sm">Interactive maps, dealer listings, and community resources</p>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  ),
}