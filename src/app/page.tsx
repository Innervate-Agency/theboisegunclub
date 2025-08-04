'use client'

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import AltchaWidget, { AltchaWidgetRef } from '@/components/ui/altcha-widget';
import { Search, Calendar, ShoppingCart, Share2, Bell, Building2, ArrowRight, MapPin, Users, Trophy, Target, AlertTriangle, Users2, MessageSquare, BookOpen, Shield, Megaphone, CheckCircle, Zap, Star, TrendingUp, Mail } from 'lucide-react';

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [altchaPayload, setAltchaPayload] = useState<string | null>(null);
  const altchaRef = useRef<AltchaWidgetRef>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Check ALTCHA verification
    if (!altchaPayload) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      altchaPayload: altchaPayload,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        altchaRef.current?.reset();
        setAltchaPayload(null);
      } else {
        console.error('API Error Details:', responseData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-range-white/95 via-titanium-white/90 to-range-white/95 dark:from-night-sight/95 dark:via-tactical-gray/90 dark:to-night-sight/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/10 before:via-transparent before:to-copper-orange/8 dark:before:from-brass-yellow/14 dark:before:to-copper-orange/12 before:pointer-events-none px-md py-4xl">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid gap-xl lg:grid-cols-2 lg:gap-3xl">
            <div className="space-y-lg">
              <div className="space-y-base">
                <Badge className="bg-brass-yellow text-gunmetal-black shadow-sm">
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
                    <Shield className="h-4 w-4 text-brass-yellow flex-shrink-0" />
                    <span>Safety-first community focused on responsible firearms education</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-brass-yellow flex-shrink-0" />
                    <span>Preserving Idaho's rich firearms heritage and outdoor traditions</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-brass-yellow flex-shrink-0" />
                    <span>Connecting 250K+ gun owners across the Treasure Valley region</span>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-brass-yellow flex-shrink-0" />
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
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Search className="h-8 w-8 text-brass-yellow mb-base group-hover:text-copper-orange transition-colors" />
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
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-brass-yellow after:to-copper-orange after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Calendar className="h-8 w-8 text-brass-yellow mb-base group-hover:text-copper-orange transition-colors" />
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
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-brass-yellow after:to-copper-orange after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Share2 className="h-8 w-8 text-brass-yellow mb-base group-hover:text-copper-orange transition-colors" />
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
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <ShoppingCart className="h-8 w-8 text-brass-yellow mb-base group-hover:text-copper-orange transition-colors" />
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
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-red after:to-ayu-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
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
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-teal after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-blue/20 text-ayu-blue">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Isolation
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <Building2 className="h-5 w-5 text-ayu-blue" />
                  Clubs Operating in Silos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Each range, club, and training organization operates independently. No unified calendar, competing for the same dates, missing collaboration opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-green after:to-ayu-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
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
                  Local gun shops, trainers, and gunsmiths rely on Facebook posts and word-of-mouth. No central hub to showcase services to the entire regional community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-cobalt after:to-ayu-purple after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-cobalt/20 text-ayu-cobalt">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Education
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <Shield className="h-5 w-5 text-ayu-cobalt" />
                  Safety Education Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  New gun owners and families struggle to find quality safety training. No centralized resource for Idaho-specific laws, regulations, and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-red after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-purple/20 text-ayu-purple">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Heritage
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <BookOpen className="h-5 w-5 text-ayu-purple" />
                  Heritage Being Lost
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground">
                  Idaho's rich firearms heritage and traditions aren't being preserved or shared. Stories, knowledge, and community wisdom risk being lost.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-yellow after:to-ayu-blue after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader>
                <Badge className="w-fit mb-xs bg-ayu-yellow/20 text-ayu-yellow">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Advocacy
                </Badge>
                <CardTitle className="flex items-center gap-xs">
                  <Megaphone className="h-5 w-5 text-ayu-yellow" />
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
            <div className="bg-card rounded-lg p-xl shadow-sm max-w-4xl mx-auto relative overflow-hidden group after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-clubhouse-lawn-green after:to-brass-yellow after:transition-all after:duration-500 after:ease-out hover:after:w-full after:rounded-b-lg">
              <div>
                <Badge className="mb-base bg-clubhouse-lawn-green/20 text-clubhouse-lawn-green">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Our Solution
                </Badge>
                <h3 className="font-rajdhani text-heading-lg font-bold text-card-foreground mb-base flex items-center gap-xs">
                  <Star className="h-6 w-6 text-brass-yellow" />
                  One Platform to Unite Treasure Valley's Firearms Community
                </h3>
                <div className="grid gap-base md:grid-cols-2 text-left">
                  <div className="flex items-start gap-xs">
                    <Search className="h-5 w-5 text-clubhouse-lawn-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Verified Business Network</h4>
                      <p className="text-body-sm text-muted-foreground">
                        Authenticated professionals with background checks, insurance verification, and customer protection guarantees.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-xs">
                    <Calendar className="h-5 w-5 text-clubhouse-lawn-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Smart Event Coordination</h4>
                      <p className="text-body-sm text-muted-foreground">
                        AI-powered scheduling prevents conflicts, optimizes attendance, and suggests complementary events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-xs">
                    <MessageSquare className="h-5 w-5 text-clubhouse-lawn-green mt-xs flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-xs">Heritage & Education Center</h4>
                      <p className="text-body-sm text-muted-foreground">
                        Preserving Idaho firearms history, sharing knowledge, and providing certified safety education.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-xs">
                    <BookOpen className="h-5 w-5 text-clubhouse-lawn-green mt-xs flex-shrink-0" />
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gunmetal-black/95 to-tactical-gray/90 px-md py-4xl">
        <div className="absolute inset-0 bg-gradient-to-br from-brass-yellow/5 via-transparent to-copper-orange/8 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid gap-xl lg:grid-cols-2 lg:gap-3xl items-center">
            
            {/* Left Side - Compelling Content */}
            <div className="text-center lg:text-left space-y-lg">
              <div className="space-y-base">
                <Badge className="bg-brass-yellow/20 text-brass-yellow border-brass-yellow/30">
                  <MessageSquare className="h-4 w-4 mr-xs" />
                  Get In Touch
                </Badge>
                <h2 className="font-rajdhani text-5xl md:text-6xl font-bold text-range-white leading-tight">
                  Questions? Want to <span className="text-brass-yellow">Partner?</span>
                </h2>
                <p className="text-body-lg text-range-white/80 max-w-2xl">
                  We're building Idaho's premier firearms community platform and would love to hear from you. Whether you're interested in business partnerships, have questions about the platform, or want to get involved - let's connect.
                </p>
              </div>
              
              <div className="grid gap-sm sm:grid-cols-2 max-w-lg lg:max-w-none">
                <div className="flex items-start gap-base">
                  <Building2 className="h-5 w-5 text-brass-yellow mt-xs flex-shrink-0" />
                  <div>
                    <h4 className="font-rajdhani font-bold text-range-white">Business Partnerships</h4>
                    <p className="text-body-sm text-range-white/70">Join our growing network of vendors</p>
                  </div>
                </div>
                <div className="flex items-start gap-base">
                  <Users className="h-5 w-5 text-brass-yellow mt-xs flex-shrink-0" />
                  <div>
                    <h4 className="font-rajdhani font-bold text-range-white">General Inquiries</h4>
                    <p className="text-body-sm text-range-white/70">Questions about the platform</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Enhanced Signup */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-xl shadow-lg border border-brass-yellow/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brass-yellow/5 to-copper-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-brass-yellow to-copper-orange transition-all duration-500 ease-out group-hover:w-full rounded-b-xl"></div>
                
                <div className="relative space-y-lg">
                  <div className="text-left">
                    <h3 className="font-rajdhani text-2xl font-bold text-card-foreground mb-xs flex items-center gap-xs">
                      <Mail className="h-6 w-6 text-brass-yellow" />
                      Contact Us
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Drop us a line and we'll get back to you within 24 hours. All inquiries welcome.
                    </p>
                  </div>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-base">
                    {submitStatus === 'success' && (
                      <div className="p-base rounded-lg bg-clubhouse-lawn-green/10 border border-clubhouse-lawn-green/20 text-clubhouse-lawn-green">
                        <CheckCircle className="h-4 w-4 inline mr-xs" />
                        Message sent successfully! We'll get back to you within 24 hours.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-base rounded-lg bg-ayu-red/10 border border-ayu-red/20 text-ayu-red">
                        <AlertTriangle className="h-4 w-4 inline mr-xs" />
                        Failed to send message. Please try again or email us directly at business@boisegunclub.com
                      </div>
                    )}
                    
                    <div className="grid gap-base sm:grid-cols-2">
                      <Input 
                        type="text"
                        name="name"
                        placeholder="Your name"
                        variant="default"
                        size="lg"
                        required
                        disabled={isSubmitting}
                      />
                      <Input 
                        type="email"
                        name="email"
                        placeholder="Email address"
                        variant="default"
                        size="lg"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Input 
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      variant="default"
                      size="lg"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="relative">
                      <textarea 
                        name="message"
                        placeholder="Your message..."
                        rows={4}
                        className="w-full p-base rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-brass-yellow focus:outline-none focus:ring-2 focus:ring-brass-yellow/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    {/* ALTCHA Anti-Spam Widget */}
                    <div className="w-full">
                      <AltchaWidget 
                        challengeurl="/api/altcha/challenge"
                        onVerify={(payload) => {
                          setAltchaPayload(payload);
                        }}
                        ref={altchaRef}
                        hidefooter={false}
                        hidelogo={false}
                        debug={false}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="xl" 
                      className="w-full bg-gradient-to-r from-brass-yellow to-copper-orange text-gunmetal-black hover:from-copper-orange hover:to-brass-yellow font-rajdhani font-bold text-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      <Mail className="h-5 w-5 mr-xs" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}