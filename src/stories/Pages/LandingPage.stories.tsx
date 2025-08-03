import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Trophy, Calendar, ArrowRight } from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Pages/LandingPage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete landing page composition showing how TBGC components work together with the enhanced fire gradient system.',
      },
    },
  },
  tags: ['page', 'composition', 'demo'],
};

export default meta;
type Story = StoryObj;

export const Complete: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh-premium px-md py-3xl md:py-4xl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-xl lg:grid-cols-2 lg:gap-3xl">
            <div className="space-y-lg">
              <div className="space-y-base">
                <Badge variant="secondary" className="bg-fire-orange text-white animate-fire-glow">
                  🔥 Enhanced Fire Gradients
                </Badge>
                <h1 className="font-rajdhani text-6xl font-bold leading-none text-foreground md:text-7xl">
                  The Boise Gun Club
                </h1>
                <p className="text-display-sm text-muted-foreground">
                  Experience premier shooting sports with our enhanced design system featuring fire gradients that unfurl from the left like proper flame effects.
                </p>
              </div>
              
              <div className="flex flex-col gap-base sm:flex-row">
                <Button size="lg" variant="premium" className="animate-fire-unfurl">
                  Join Today <ArrowRight className="ml-xs h-5 w-5" />
                </Button>
                <Button size="lg" variant="elite">
                  View Range Schedule
                </Button>
              </div>
            </div>
            
            <div className="grid gap-md sm:grid-cols-2">
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
                value="24/7"
                label="Range Access"
                variant="glass"
                icon={<Calendar className="h-6 w-6" />}
              />
              <StatCard
                value="127"
                label="Competitions Won"
                variant="premium"
                trend="up"
                trendValue="+15"
                icon={<Trophy className="h-6 w-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fire Gradient Showcase Section */}
      <section className="px-md py-3xl">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-base mb-xl">
            <h2 className="font-rajdhani text-4xl font-bold">Enhanced Fire Effects</h2>
            <p className="text-display-sm text-muted-foreground">
              Watch the gradients unfurl from the left on hover - like proper fire effects
            </p>
          </div>
          
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            <Card className="relative overflow-hidden cursor-pointer animate-fire-unfurl">
              <CardHeader>
                <CardTitle className="relative z-10">Fire Orange</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="relative z-10 text-body-sm text-muted-foreground">
                  Hover to see the orange fire gradient unfurl from the left
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-fire-blue text-white">
              <CardHeader>
                <CardTitle>Fire Blue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm opacity-90">
                  Static blue fire gradient showing the color transition
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-fire-purple text-white">
              <CardHeader>
                <CardTitle>Fire Purple</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm opacity-90">
                  Purple fire gradient with ayu color enhancement
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fire-pulse text-white">
              <CardHeader>
                <CardTitle>Animated Fire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm opacity-90">
                  Continuously pulsing fire animation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-muted/50 px-md py-3xl">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-base mb-xl">
            <h2 className="font-rajdhani text-4xl font-bold">Design System Features</h2>
            <p className="text-display-sm text-muted-foreground">
              Comprehensive 77-story Storybook with systematic organization
            </p>
          </div>
          
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-xs">Foundation</Badge>
                <CardTitle>Design Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground mb-base">
                  26 carefully crafted colors from Idaho firearms heritage, fire gradients, typography, and spacing system.
                </p>
                <Button variant="ghost" size="sm">
                  View Tokens <ArrowRight className="ml-xs h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-xs">Components</Badge>
                <CardTitle>Atomic Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground mb-base">
                  Organized hierarchy: Atoms → Molecules → Organisms with proper CVA variants and theme integration.
                </p>
                <Button variant="ghost" size="sm">
                  View Components <ArrowRight className="ml-xs h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-xs">Patterns</Badge>
                <CardTitle>Page Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground mb-base">
                  Reusable patterns and complete page compositions for rapid development and consistent experiences.
                </p>
                <Button variant="ghost" size="sm">
                  View Patterns <ArrowRight className="ml-xs h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-md py-3xl">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-lg">
            <div className="space-y-base">
              <h2 className="font-rajdhani text-4xl font-bold">Ready to Experience Premier Shooting?</h2>
              <p className="text-display-sm text-muted-foreground">
                Join our community of shooting enthusiasts and experience our enhanced design system in action.
              </p>
            </div>
            
            <div className="flex flex-col gap-base sm:flex-row sm:justify-center">
              <Button size="xl" variant="elite" className="animate-fire-glow">
                Become a Member
              </Button>
              <Button size="xl" variant="outline">
                Schedule a Visit
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md pt-lg">
              <div className="text-center">
                <div className="text-3xl font-rajdhani font-bold text-brass-yellow">1,247</div>
                <div className="text-body-sm text-muted-foreground">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-rajdhani font-bold text-copper-orange">98.5%</div>
                <div className="text-body-sm text-muted-foreground">Safety Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-rajdhani font-bold text-ayu-blue">24/7</div>
                <div className="text-body-sm text-muted-foreground">Access</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-rajdhani font-bold text-ayu-green">127</div>
                <div className="text-body-sm text-muted-foreground">Competitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};
