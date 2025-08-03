import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Trophy, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';

const meta: Meta = {
  title: 'Patterns/Component Combinations',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Reusable patterns showing how TBGC components combine effectively. These patterns can be used across pages for consistent experiences.',
      },
    },
  },
  tags: ['patterns', 'combinations', 'reusable'],
};

export default meta;
type Story = StoryObj;

export const StatsGrid: Story = {
  render: () => (
    <div className="max-w-4xl space-y-md">
      <div className="text-center space-y-xs">
        <h2 className="font-rajdhani text-3xl font-bold">Statistics Grid Pattern</h2>
        <p className="text-muted-foreground">Four-column stats showcase with fire gradient variants</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
        <StatCard
          value="1,247"
          label="Active Members"
          variant="premium"
          trend="up"
          trendValue="+12%"
          icon={<Users className="h-6 w-6" />}
        />
        <StatCard
          value="98.5%"
          label="Safety Rating"
          variant="elite"
          trend="up"
          trendValue="+2.3%"
          icon={<Target className="h-6 w-6" />}
        />
        <StatCard
          value="127"
          label="Competitions Won"
          variant="premium"
          trend="up"
          trendValue="+15"
          icon={<Trophy className="h-6 w-6" />}
        />
        <StatCard
          value="89%"
          label="Member Satisfaction"
          variant="glass"
          trend="up"
          trendValue="+7%"
          icon={<TrendingUp className="h-6 w-6" />}
        />
      </div>
    </div>
  ),
};

export const FireGradientCardGrid: Story = {
  render: () => (
    <div className="max-w-5xl space-y-md">
      <div className="text-center space-y-xs">
        <h2 className="font-rajdhani text-3xl font-bold">Fire Gradient Card Pattern</h2>
        <p className="text-muted-foreground">Interactive cards with different fire gradient effects</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {/* Unfurl Effect Card */}
        <Card className="relative overflow-hidden cursor-pointer animate-fire-unfurl group">
          <CardHeader>
            <Badge className="w-fit mb-xs">Unfurl Effect</Badge>
            <CardTitle className="relative z-10">Hover to Ignite</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="relative z-10 text-body-sm text-muted-foreground mb-base">
              The gradient unfurls from the left like a proper flame effect when you hover.
            </p>
            <Button variant="ghost" size="sm" className="relative z-10">
              Experience Effect <ChevronRight className="ml-xs h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Pulsing Fire Card */}
        <Card className="animate-fire-pulse text-white">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-xs bg-black/20">Continuous</Badge>
            <CardTitle>Pulsing Fire</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm opacity-90 mb-base">
              Continuously animated fire gradient that pulses across the background.
            </p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
              Learn More <ChevronRight className="ml-xs h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Glowing Fire Card */}
        <Card className="bg-fire-orange animate-fire-glow text-white">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-xs bg-black/20">Glow Effect</Badge>
            <CardTitle>Fire Glow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm opacity-90 mb-base">
              Fire gradient with a pulsing glow shadow effect for extra emphasis.
            </p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
              View Details <ChevronRight className="ml-xs h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Blue Fire Variant */}
        <Card className="bg-fire-blue text-white">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-xs bg-black/20">Cool Fire</Badge>
            <CardTitle>Blue Flames</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm opacity-90 mb-base">
              Cool blue fire gradient using ayu-blue to ayu-green transition.
            </p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
              Explore <ChevronRight className="ml-xs h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Purple Fire Variant */}
        <Card className="bg-fire-purple text-white">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-xs bg-black/20">Royal Fire</Badge>
            <CardTitle>Purple Flames</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm opacity-90 mb-base">
              Elegant purple fire gradient from ayu-purple to ayu-cobalt.
            </p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
              Discover <ChevronRight className="ml-xs h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Green Fire Variant */}
        <Card className="bg-fire-green text-white">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-xs bg-black/20">Natural Fire</Badge>
            <CardTitle>Green Flames</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-body-sm opacity-90 mb-base">
              Natural green fire gradient perfect for success states and growth.
            </p>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/20">
              Get Started <ChevronRight className="ml-xs h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const CallToActionSection: Story = {
  render: () => (
    <div className="max-w-4xl space-y-lg">
      <div className="text-center space-y-xs">
        <h2 className="font-rajdhani text-3xl font-bold">Call to Action Pattern</h2>
        <p className="text-muted-foreground">Standard CTA layout with fire gradient buttons</p>
      </div>
      
      <Card className="text-center p-lg bg-gradient-mesh-premium">
        <CardContent className="space-y-md">
          <div className="space-y-base">
            <Badge className="bg-fire-orange text-white">Limited Time</Badge>
            <h3 className="font-rajdhani text-4xl font-bold">
              Join The Boise Gun Club Today
            </h3>
            <p className="text-display-sm text-muted-foreground max-w-2xl mx-auto">
              Experience premier shooting sports with our enhanced design system and community of enthusiasts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-base justify-center">
            <Button size="lg" variant="premium" className="animate-fire-unfurl">
              Become a Member <ArrowRight className="ml-xs h-5 w-5" />
            </Button>
            <Button size="lg" variant="elite">
              Schedule a Visit
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-lg pt-md border-t">
            <div className="text-center">
              <div className="text-display-md font-rajdhani font-bold text-brass-yellow">1,247</div>
              <div className="text-body-sm text-muted-foreground">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-display-md font-rajdhani font-bold text-copper-orange">98.5%</div>
              <div className="text-body-sm text-muted-foreground">Safety Rating</div>
            </div>
            <div className="text-center">
              <div className="text-display-md font-rajdhani font-bold text-ayu-blue">24/7</div>
              <div className="text-body-sm text-muted-foreground">Range Access</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const FeatureHighlight: Story = {
  render: () => (
    <div className="max-w-6xl space-y-lg">
      <div className="text-center space-y-xs">
        <h2 className="font-rajdhani text-3xl font-bold">Feature Highlight Pattern</h2>
        <p className="text-muted-foreground">Alternating content and visual layout</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-xl items-center">
        <div className="space-y-md">
          <div className="space-y-base">
            <Badge className="bg-fire-blue text-white">Enhanced</Badge>
            <h3 className="font-rajdhani text-3xl font-bold">
              Fire Gradient Animation System
            </h3>
            <p className="text-body-lg text-muted-foreground">
              Our enhanced gradient system fixes the positioning issue - gradients now "unfurl" from the left like proper fire effects, creating beautiful animated interactions.
            </p>
          </div>
          
          <ul className="space-y-sm">
            <li className="flex items-start gap-sm">
              <div className="w-2 h-2 rounded-full bg-brass-yellow mt-xs.5"></div>
              <div>
                <strong>Left-Origin Animation:</strong> Gradients unfurl from the left using transform-origin
              </div>
            </li>
            <li className="flex items-start gap-sm">
              <div className="w-2 h-2 rounded-full bg-copper-orange mt-xs.5"></div>
              <div>
                <strong>Color Coordination:</strong> Orange→Yellow, Blue→Green, Purple→Cobalt variations
              </div>
            </li>
            <li className="flex items-start gap-sm">
              <div className="w-2 h-2 rounded-full bg-ayu-blue mt-xs.5"></div>
              <div>
                <strong>Multiple Effects:</strong> Unfurl, pulse, glow animations for different use cases
              </div>
            </li>
          </ul>
          
          <Button variant="premium" className="animate-fire-unfurl">
            Experience the Effect <ArrowRight className="ml-xs h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 gap-base">
          <Card className="animate-fire-unfurl cursor-pointer">
            <CardContent className="p-md">
              <div className="relative z-10 text-center">
                <Target className="h-8 w-8 mx-auto mb-xs text-brass-yellow" />
                <h4 className="font-bold">Hover Effect</h4>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fire-pulse text-white">
            <CardContent className="p-md text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-xs" />
              <h4 className="font-bold">Pulse Effect</h4>
            </CardContent>
          </Card>
          
          <Card className="bg-fire-blue text-white">
            <CardContent className="p-md text-center">
              <Users className="h-8 w-8 mx-auto mb-xs" />
              <h4 className="font-bold">Blue Fire</h4>
            </CardContent>
          </Card>
          
          <Card className="bg-fire-purple text-white">
            <CardContent className="p-md text-center">
              <Trophy className="h-8 w-8 mx-auto mb-xs" />
              <h4 className="font-bold">Purple Fire</h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
};
