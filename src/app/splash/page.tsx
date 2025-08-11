import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SiteNavigation } from '@/components/ui/site-navigation';
import { SiteFooter } from '@/components/ui/site-footer';
import { 
  Search, Calendar, ShoppingCart, Share2, Bell, Building2, 
  ArrowRight, MapPin, Users, Trophy, Target, AlertTriangle, 
  Users2, MessageSquare, BookOpen, Shield, Megaphone, 
  CheckCircle, Zap, Star, TrendingUp, Mail 
} from 'lucide-react';

export default function SplashPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavigation variant="premium" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-range-white/95 via-titanium-white/90 to-range-white/95 dark:from-night-sight/95 dark:via-warm-stone/90 dark:to-night-sight/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/10 before:via-transparent before:to-rusty-orange/8 dark:before:from-sandy-ochre/14 dark:before:to-rusty-orange/12 before:pointer-events-none px-md py-4xl">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid gap-xl lg:grid-cols-2 lg:gap-3xl">
            <div className="space-y-lg">
              <div className="space-y-base">
                <Badge className="bg-sandy-ochre text-dark-chocolate shadow-sm">
                  <Target className="h-4 w-4 mr-xs" />
                  Regional Platform
                </Badge>
                <h1 className="font-rajdhani text-6xl md:text-8xl leading-none text-foreground tracking-tight">
                  <span className="font-extrabold">THE BOISE </span><span className="font-light">GUN CLUB</span>
                </h1>
                <p className="text-body-lg text-muted-foreground max-w-2xl">
                  Building Treasure Valley's first comprehensive firearms community platform. Connecting local businesses, clubs, ranges, and enthusiasts across Idaho's premier firearms region.
                </p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Safety-first community focused on responsible firearms education</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Preserving Idaho's rich firearms heritage and outdoor traditions</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Connecting 250K+ gun owners across the Treasure Valley region</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>4-tier subscription model supporting local businesses</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-md sm:grid-cols-2">
              <StatCard
                value="Directory"
                label="Local Gun Shops, Ranges & Trainers"
                variant="default"
                icon={<Building2 className="h-6 w-6" />}
              />
              <StatCard
                value="Events"
                label="Unified Calendar from All Clubs"
                variant="default"
                icon={<Calendar className="h-6 w-6" />}
              />
              <StatCard
                value="Forum"
                label="Community Discussion & Trading"
                variant="default"
                icon={<Share2 className="h-6 w-6" />}
              />
              <StatCard
                value="Resources"
                label="Idaho Laws, Safety & Training Info"
                variant="default"
                icon={<Bell className="h-6 w-6" />}
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
                <Search className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <Building2 className="h-5 w-5" />
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
                <Calendar className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <Users2 className="h-5 w-5" />
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
                <Share2 className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <MessageSquare className="h-5 w-5" />
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
                <ShoppingCart className="h-8 w-8 text-sandy-ochre mb-base group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-xs">
                  <Zap className="h-5 w-5" />
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
              Despite having 250K+ gun owners and 117+ businesses, Treasure Valley lacks a unified digital ecosystem. These critical gaps are holding back our entire firearms community.
            </p>
          </div>
          
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-flat hover:shadow-elevated transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-red after:to-ayu-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-red/20 text-ayu-red">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Fragmentation
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <Search className="h-5 w-5 text-ayu-red" />
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
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Isolation
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <Building2 className="h-5 w-5 text-slate-blue" />
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
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Discovery
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <TrendingUp className="h-5 w-5 text-ayu-green" />
                  Businesses Struggle for Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Local businesses can't effectively reach their target market. No centralized marketing channel, relying on expensive advertising or ineffective social media.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-md py-4xl bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-base mb-xl">
            <Badge className="bg-sandy-ochre text-dark-chocolate">
              <Mail className="h-4 w-4 mr-xs" />
              Get Early Access
            </Badge>
            <h2 className="font-rajdhani text-4xl font-bold">Join the Revolution</h2>
            <p className="text-body-lg text-muted-foreground">
              Be among the first businesses and community members to join Idaho's premier firearms platform.
            </p>
          </div>
          
          <div className="grid gap-lg md:grid-cols-2">
            <Card className="shadow-flat">
              <CardHeader>
                <CardTitle>Business Owners</CardTitle>
                <p className="text-body-sm text-muted-foreground">
                  Join our verified business directory and connect with thousands of potential customers.
                </p>
              </CardHeader>
              <CardContent className="space-y-base">
                <div className="space-y-xs">
                  <Input placeholder="Business Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                </div>
                <Button className="w-full bg-sandy-ochre text-dark-chocolate hover:bg-sandy-ochre/90">
                  Register Your Business
                  <ArrowRight className="h-4 w-4 ml-xs" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-flat">
              <CardHeader>
                <CardTitle>Community Members</CardTitle>
                <p className="text-body-sm text-muted-foreground">
                  Stay updated on platform development and be first to access new features.
                </p>
              </CardHeader>
              <CardContent className="space-y-base">
                <div className="space-y-xs">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="ZIP Code" />
                </div>
                <Button className="w-full" variant="outline">
                  Join Mailing List
                  <Mail className="h-4 w-4 ml-xs" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}