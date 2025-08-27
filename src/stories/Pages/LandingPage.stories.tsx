import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowTrendingUpIcon, BellIcon, BoltIcon, BookOpenIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, CheckCircleIcon, CursorArrowRaysIcon, EnvelopeIcon, ExclamationTriangleIcon, MagnifyingGlassIcon, MapPinIcon, ShareIcon, ShieldCheckIcon, ShoppingCartIcon, SpeakerWaveIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';

const meta: Meta = {
  title: 'Design System/Pages/LandingPage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Professional "Coming Soon" landing page for The Boise Gun Club - Treasure Valley\'s comprehensive firearms community platformotion.',
      },
    },
  },
  tags: ['page', 'business', 'platform'],
};

export default meta;
type Story = StoryObj;

export const Complete: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-range-white/95 via-titanium-white/90 to-range-white/95 dark:from-night-sight/95 dark:via-warm-stone/90 dark:to-night-sight/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/10 before:via-transparent before:to-rusty-orange/8 dark:before:from-sandy-ochre/14 dark:before:to-rusty-orange/12 before:pointer-events-none px-md py-4xl">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid gap-xl lg:grid-cols-2 lg:gap-3xl">
            <div className="space-y-lg">
              <div className="space-y-base">
                <Badge className="bg-sandy-ochre text-dark-chocolate shadow-sm">
                  <CursorArrowRaysIcon className="h-4 w-4 mr-xs" />
                  Regional Platform
                </Badge>
                <h1 className="font-rajdhani text-6xl md:text-8xl leading-none text-foreground tracking-tight">
                  <span className="font-extrabold">THE BOISE </span><span className="font-light">GUN CLUB</span>
                </h1>
                <p className="text-body-lg text-muted-foreground max-w-2xl">
                  BuildingOfficeIcon Treasure Valley's first comprehensive firearms community platformotion. Connecting local businesses, clubs, ranges, and enthusiasts across Idaho's premier firearms region.
                </p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <ShieldCheckIcon className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Safety-first community focused on responsible firearms education</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <StarIcon className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Preserving Idaho's rich firearms heritage and outdoor traditions</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <UsersIcon className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Connecting 250K+ gun owners across the Treasure Valley region</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>4-tier subscription model supporting local businesses</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="grid gap-md sm:grid-cols-2">
              <StatCard
                value="Directory"
                label="Local Gun Shops, Ranges & Trainers"
                variant="outline"
                icon={<BuildingOffice2Icon className="h-6 w-6" />}
              />
              <StatCard
                value="Events"
                label="Unified CalendarDaysIcon from All Clubs"
                variant="outline"
                icon={<CalendarDaysIcon className="h-6 w-6" />}
              />
              <StatCard
                value="Forum"
                label="Community Discussion & Trading"
                variant="outline"
                icon={<ShareIcon className="h-6 w-6" />}
              />
              <StatCard
                value="Resources"
                label="Idaho Laws, Safety & Training InformationCircleIcon"
                variant="outline"
                icon={<BellIcon className="h-6 w-6" />}
              />
            </div>
          </div>
        </div>
      </section>
            

      {/* Platform Features Section */}
      <section className="px-md py-4xl">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-base mb-xl">
            <h2 className="font-rajdhani text-4xl font-bold">What Makes TBGC Different</h2>
            <p className="text-body-lg text-muted-foreground">
              Advanced technology and business intelligence designed specifically for Idaho's firearms industry
            </p>
          </div>
          
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <MagnifyingGlassIcon className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <BuildingOffice2Icon className="h-5 w-5" />
                  Business Directory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Verified business profiles with real-time inventory, services, and customer reviews
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sandy-ochre after:to-rusty-orange after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <CalendarDaysIcon className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <UsersIcon className="h-5 w-5" />
                  Unified Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Smart calendar preventing scheduling conflicts and maximizing participation
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sandy-ochre after:to-rusty-orange after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <ShareIcon className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Community Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Secure trading platform with verified members and dispute resolution
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <ShoppingCartIcon className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <BoltIcon className="h-5 w-5" />
                  Service Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Advanced booking system with real-time availability and payment processing
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Problems Section */}
          <div className="text-center space-y-base mb-xl mt-3xl">
            <h2 className="font-rajdhani text-4xl font-bold">The Problems We're Solving</h2>
            <p className="text-body-lg text-muted-foreground max-w-4xl mx-auto">
              Despite having 250K+ gun owners and 117+ businesses, Treasure Valley lacks a unified digital ecosystemotion. These critical gaps are holding back our entire firearms community.
            </p>
          </div>
          
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-red after:to-ayu-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-red/20 text-ayu-red">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                  Fragmentation
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <MagnifyingGlassIcon className="h-5 w-5 text-ayu-red" />
                  Information Scattered Everywhere
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Events, training, and business info spread across dozens of Facebook groups, outdated websites, and word-of-mouth. New residents and visitors can't find anything.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-ayu-teal after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-slate-blue/20 text-slate-blue">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                  Isolation
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <BuildingOffice2Icon className="h-5 w-5 text-slate-blue" />
                  Clubs Operating in Silos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Each range, club, and training organization operates independently. No unified calendar, competing for the same dates, missing collaboration opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-green after:to-ayu-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-green/20 text-ayu-green">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                  Discovery
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-ayu-green" />
                  Businesses Struggle for Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Local gun shops, trainers, and gunsmiths rely on Facebook posts and word-of-mouth. No central hub to showcase services to the entire regional community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-cobalt after:to-ayu-purple after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-cobalt/20 text-ayu-cobalt">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                  Education
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <ShieldCheckIcon className="h-5 w-5 text-ayu-cobalt" />
                  Safety Education Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  New gun owners and families struggle to find quality safety training. No centralized resource for Idaho-specific laws, regulations, and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-red after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-purple/20 text-ayu-purple">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                  Heritage
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <BookOpenIcon className="h-5 w-5 text-ayu-purple" />
                  Heritage Being Lost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Idaho's rich firearms heritage and traditions aren't being preserved or shared. Stories, knowledge, and community wisdom risk being lost.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-yellow after:to-slate-blue after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-yellow/20 text-ayu-yellow">
                  <ExclamationTriangleIcon className="h-3 w-3 mr-1" />
                  Advocacy
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <SpeakerWaveIcon className="h-5 w-5 text-ayu-yellow" />
                  No Community Voice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Treasure Valley's firearms community lacks a unified platform to advocate for rights, share legislative updates, and speak with one voice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-md pt-xl pb-4xl">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="bg-card rounded-xs p-xl shadow-sm max-w-4xl mx-auto relative overflow-hidden group after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-sagebrush-green after:to-sandy-ochre after:transition-all after:duration-500 after:ease-out hover:after:w-full after:rounded-b-lg">
              <div>
                <Badge className="mb-base bg-sagebrush-green/20 text-sagebrush-green">
                  <CheckCircleIcon className="h-3 w-3 mr-1" />
                  Our Solution
                </Badge>
                <h3 className="font-rajdhani text-heading-lg font-bold text-card-foreground mb-base flex items-center gap-xs">
                  <StarIcon className="h-6 w-6 text-sandy-ochre" />
                  One Platform to Unite Treasure Valley's Firearms Community
                </h3>
                <div className="grid gap-base md:grid-cols-2 text-left">
                  <div className="flex items-start gap-xs">
                    <MagnifyingGlassIcon className="h-5 w-5 text-sagebrush-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Verified Business Network</h4>
                      <p className="text-body-sm text-muted-foreground">
                        Authenticated professionals with background checks, insurance verification, and customer protection guarantees.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-xs">
                    <CalendarDaysIcon className="h-5 w-5 text-sagebrush-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Smart Event Coordination</h4>
                      <p className="text-body-sm text-muted-foreground">
                        AI-powered scheduling prevents conflicts, optimizes attendance, and suggests complementary events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-xs">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-sagebrush-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Heritage & Education Center</h4>
                      <p className="text-body-sm text-muted-foreground">
                        Preserving Idaho firearms history, sharing knowledge, and providing certified safety education.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-xs">
                    <BookOpenIcon className="h-5 w-5 text-sagebrush-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Premium Business Tools</h4>
                      <p className="text-body-sm text-muted-foreground">
                        Advanced analytics, customer management, and marketing tools for participating businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-chocolate/95 to-warm-stone/90 px-md py-4xl">
        <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre/5 via-transparent to-rusty-orange/8 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid gap-xl lg:grid-cols-2 lg:gap-3xl items-center">
            
            {/* Left Side - Compelling Content */}
            <div className="text-center lg:text-left space-y-lg">
              <div className="space-y-base">
                <Badge className="bg-sandy-ochre/20 text-sandy-ochre border-sandy-ochre/30">
                  <ChatBubbleLeftRightIcon className="h-4 w-4 mr-xs" />
                  Get In Touch
                </Badge>
                <h2 className="font-rajdhani text-5xl md:text-6xl font-bold text-range-white leading-tight">
                  Questions? Want to <span className="text-sandy-ochre">Partner?</span>
                </h2>
                <p className="text-body-lg text-range-white/80 max-w-2xl">
                  We're building Idaho's premier firearms community platform and would love to hear from you. Whether you're interested in business partnerships, have questions about the platform, or want to get involved - let's connect.
                </p>
              </div>
              
              <div className="grid gap-sm sm:grid-cols-2 max-w-lg lg:max-w-none">
                <div className="flex items-start gap-base">
                  <BuildingOffice2Icon className="h-5 w-5 text-sandy-ochre mt-xs flex-shrink-0" />
                  <div>
                    <h4 className="font-rajdhani font-bold text-range-white">Business Partnerships</h4>
                    <p className="text-body-sm text-range-white/70">Join our growing network of vendors</p>
                  </div>
                </div>
                <div className="flex items-start gap-base">
                  <UsersIcon className="h-5 w-5 text-sandy-ochre mt-xs flex-shrink-0" />
                  <div>
                    <h4 className="font-rajdhani font-bold text-range-white">General Inquiries</h4>
                    <p className="text-body-sm text-range-white/70">Questions about the platform</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Enhanced Signup */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-card text-card-foreground rounded-none p-xl shadow-elevated border border-sandy-ochre/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre/5 to-rusty-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-sandy-ochre to-rusty-orange transition-all duration-500 ease-out group-hover:w-full rounded-b-xl"></div>
                
                <div className="relative space-y-lg">
                  <div className="text-left">
                    <h3 className="font-rajdhani text-2xl font-bold text-card-foreground mb-xs flex items-center gap-xs">
                      <EnvelopeIcon className="h-6 w-6 text-sandy-ochre" />
                      Contact Us
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Drop us a line and we'll get back to you within 24 hours. All inquiries welcome.
                    </p>
                  </div>
                  
                  <form action="mailto:business@boisegunclub.com" method="post" enctype="text/plain" className="space-y-base">
                    <div className="grid gap-base sm:grid-cols-2">
                      <Input 
                        type="text"
                        name="name"
                        placeholder="Your name"
                        variant="outline" required
                      />
                      <Input 
                        type="email"
                        name="email"
                        placeholder="Email address"
                        variant="outline" required
                      />
                    </div>
                    <Input 
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      variant="outline" required
                    />
                    <div className="relative">
                      <textarea 
                        name="message"
                        placeholder="Your message..."
                        rows={4}
                        className="w-full p-base rounded-xs border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-sandy-ochre focus:outline-none focus:ring-2 focus:ring-sandy-ochre/20 resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" size="xl" className="w-full bg-gradient-to-r from-sandy-ochre to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-sandy-ochre font-rajdhani font-bold text-lg shadow-elevated transition-all duration-300">
                      <EnvelopeIcon className="h-5 w-5 mr-xs" />
                      Send ChatBubbleBottomCenterTextIcon
                    </Button>
                  </form>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  ),
};
