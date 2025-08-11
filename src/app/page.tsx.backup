<<<<<<< HEAD
'use client'
=======
import React from 'react';
import { Calendar, Target, Search, MessageSquare, ShieldCheck, List, Star, Users, Lock, Store } from 'lucide-react';
>>>>>>> refactor/summer-2025-standards

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/ui/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import AltchaWidget, { AltchaWidgetRef } from '@/components/ui/altcha-widget';
import { Search, Calendar, ShoppingCart, Share2, Bell, Building2, ArrowRight, MapPin, Users, Trophy, Target, AlertTriangle, Users2, MessageSquare, Database, Shield, Megaphone, CheckCircle, Zap, Star, TrendingUp, Mail, Bookmark, FileText } from 'lucide-react';

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
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-light-peachy/95 via-crisp-off-white/90 to-light-peachy/95 dark:from-dark-chocolate/95 dark:via-rich-loam/90 dark:to-dark-chocolate/95 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/10 before:via-transparent before:to-rusty-orange/8 dark:before:from-sandy-ochre/14 dark:before:to-rusty-orange/12 before:pointer-events-none px-6 py-32">
        <div className="container-wide relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sandy-ochre text-dark-chocolate shadow-sm">
                  <Target className="h-4 w-4 mr-2" />
                  Regional Platform
                </Badge>
                <h1 className="font-rajdhani text-responsive-4xl leading-none text-foreground tracking-tight">
                  <span className="font-extrabold">THE BOISE </span><span className="font-light">GUN CLUB</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Building Treasure Valley's first comprehensive firearms community platform. Connecting local businesses, clubs, ranges, and enthusiasts across Idaho's premier firearms region.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Safety-first community focused on responsible firearms education</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Preserving Idaho's rich firearms heritage and outdoor traditions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>Connecting 250K+ gun owners across the Treasure Valley region</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-sandy-ochre flex-shrink-0" />
                    <span>4-tier subscription model supporting local businesses</span>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <StatCard
                value="Directory"
                label="Local gun shops, ranges & trainers"
                variant="default"
                icon={<div className="w-12 h-12 rounded-lg bg-sandy-ochre/20 border-2 border-sandy-ochre/30 flex items-center justify-center"><Building2 className="h-6 w-6 text-sandy-ochre" /></div>}
              />
              <StatCard
                value="Events"
                label="Unified calendar from all clubs"
                variant="default"
                icon={<div className="w-12 h-12 rounded-lg bg-slate-blue/20 border-2 border-slate-blue/30 flex items-center justify-center"><Calendar className="h-6 w-6 text-slate-blue" /></div>}
              />
              <StatCard
                value="Forum"
                label="Community discussion & trading"
                variant="default"
                icon={<div className="w-12 h-12 rounded-lg bg-sagebrush-green/20 border-2 border-sagebrush-green/30 flex items-center justify-center"><Share2 className="h-6 w-6 text-sagebrush-green" /></div>}
              />
              <StatCard
                value="Resources"
                label="Idaho laws, safety & training info"
                variant="default"
                icon={<div className="w-12 h-12 rounded-lg bg-info-river/20 border-2 border-info-river/30 flex items-center justify-center"><Bell className="h-6 w-6 text-info-river" /></div>}
              />
=======
    <div className="theme-home flex flex-col min-h-screen bg-background">
      {/* 1. Site Navigation */}
      <SiteNavigation variant="premium" />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section>
          <MegaHero
            backgroundPreset="home"
            title="The Boise Gun Club"
            subtitle="A Treasure Valley Collective"
            description="Your central hub for all things firearms in the Treasure Valley. Connect with local shops, ranges, and trainers."
          />
        </section>

        {/* 3. Stat Cards Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-site px-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statCardsData.map((card, index) => (
                <StatCard
                  key={index}
                  icon={card.icon}
                  label={card.label}
                  value={card.value}
                  variant={card.variant}
                />
              ))}
>>>>>>> refactor/summer-2025-standards
            </div>
          </div>
        </div>
      </section>
            

<<<<<<< HEAD
      {/* Platform Features Section */}
      <section className="px-6 py-32">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-rajdhani text-responsive-3xl font-bold">What Makes TBGC Different</h2>
            <p className="text-lg text-muted-foreground">
              Advanced technology and business intelligence designed specifically for Idaho's firearms industry
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-3">
                <Search className="h-8 w-8 text-sandy-ochre group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Business Directory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Verified business profiles with real-time inventory, services, and customer reviews
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sandy-ochre after:to-rusty-orange after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-3">
                <Calendar className="h-8 w-8 text-sandy-ochre group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-2">
                  <Users2 className="h-5 w-5" />
                  Unified Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Smart calendar preventing scheduling conflicts and maximizing participation
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sandy-ochre after:to-rusty-orange after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-3">
                <Share2 className="h-8 w-8 text-sandy-ochre group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Community Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Secure trading platform with verified members and dispute resolution
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-3">
                <ShoppingCart className="h-8 w-8 text-sandy-ochre group-hover:text-rusty-orange transition-colors" />
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Service Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced booking system with real-time availability and payment processing
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Problems Section */}
          <div className="text-center space-y-4 mb-16 mt-24">
            <h2 className="font-rajdhani text-responsive-3xl font-bold">The Problems We're Solving</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Despite having 250K+ gun owners and 117+ businesses, Treasure Valley lacks a unified digital ecosystem. These critical gaps are holding back our entire firearms community.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-canyon-clay after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-canyon-clay/20 text-canyon-clay">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Fragmentation
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-canyon-clay" />
                  Information Scattered Everywhere
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Events, training, and business info spread across dozens of Facebook groups, outdated websites, and word-of-mouth. New residents and visitors can't find anything.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-slate-blue/20 text-slate-blue">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Isolation
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-slate-blue" />
                  Clubs Operating in Silos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each range, club, and training organization operates independently. No unified calendar, competing for the same dates, missing collaboration opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sagebrush-green after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-sagebrush-green/20 text-sagebrush-green">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Discovery
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-sagebrush-green" />
                  Businesses Struggle for Visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Local gun shops, trainers, and gunsmiths rely on Facebook posts and word-of-mouth. No central hub to showcase services to the entire regional community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-foothills-purple after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-slate-blue/20 text-slate-blue">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Education
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-slate-blue" />
                  Safety Education Gaps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  New gun owners and families struggle to find quality safety training. No centralized resource for Idaho-specific laws, regulations, and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-foothills-purple after:to-canyon-clay after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-foothills-purple/20 text-foothills-purple">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Reviews
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-foothills-purple" />
                  Community Firearm Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No comprehensive firearm rating system exists. Building the first IMDb/Rotten Tomatoes for firearms with community reviews, specs, and performance data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover shadow-sm transition-stripe-normal group relative overflow-hidden after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sandy-ochre after:to-slate-blue after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg">
              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-sandy-ochre/20 text-sandy-ochre">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Advocacy
                </Badge>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-sandy-ochre" />
                  No Community Voice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Treasure Valley's firearms community lacks a unified platform to advocate for rights, share legislative updates, and speak with one voice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 pt-12 pb-32">
        <div className="container-wide">
          <div className="text-center">
            <div className="bg-card rounded-lg p-12 shadow-sm max-w-4xl mx-auto relative overflow-hidden group after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-sagebrush-green after:to-sandy-ochre after:transition-all after:duration-500 after:ease-out hover:after:w-full after:rounded-b-lg">
              <div>
                <Badge className="mb-4 bg-sagebrush-green/20 text-sagebrush-green">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Our Solution
                </Badge>
                <h3 className="font-rajdhani text-3xl font-bold text-card-foreground mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-sandy-ochre" />
                  One Platform to Unite Treasure Valley's Firearms Community
                </h3>
                <div className="grid gap-4 md:grid-cols-2 text-left">
                  <div className="flex items-start gap-2">
                    <Search className="h-5 w-5 text-sagebrush-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-1">Verified Business Network</h4>
                      <p className="text-sm text-muted-foreground">
                        Authenticated professionals with background checks, insurance verification, and customer protection guarantees.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-sagebrush-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-1">Smart Event Coordination</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered scheduling prevents conflicts, optimizes attendance, and suggests complementary events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-sagebrush-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-1">Firearm Review Database</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive community-driven firearm ratings, reviews, and specifications database.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-sagebrush-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-rajdhani font-bold text-card-foreground mb-1">Premium Business Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced analytics, customer management, and marketing tools for participating businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
=======
        {/* 4. Platform Blueprint Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-site px-md space-y-2xl">
            <div className="text-center">
              <h2 className="font-rajdhani text-4xl font-bold">The Platform Blueprint</h2>
              <p className="text-body-lg text-muted-foreground mt-sm">The core features that power our community.</p>
>>>>>>> refactor/summer-2025-standards
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-chocolate/95 to-rich-loam/90 px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre/5 via-transparent to-rusty-orange/8 pointer-events-none"></div>
        <div className="container-wide relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            
            {/* Left Side - Compelling Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sandy-ochre/20 text-sandy-ochre border-sandy-ochre/30">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Get In Touch
                </Badge>
                <h2 className="font-rajdhani text-responsive-4xl font-bold text-crisp-off-white leading-tight">
                  Questions? Want to <span className="text-sandy-ochre">Partner?</span>
                </h2>
                <p className="text-lg text-crisp-off-white/80 max-w-2xl">
                  We're building Idaho's premier firearms community platform and would love to hear from you. Whether you're interested in business partnerships, have questions about the platform, or want to get involved - let's connect.
                </p>
              </div>
              
              <div className="grid gap-sm sm:grid-cols-2 max-w-lg lg:max-w-none">
                <div className="flex items-start gap-4">
                  <Building2 className="h-5 w-5 text-sandy-ochre mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rajdhani font-bold text-crisp-off-white">Business Partnerships</h4>
                    <p className="text-sm text-crisp-off-white/70">Join our growing network of vendors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-5 w-5 text-sandy-ochre mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rajdhani font-bold text-crisp-off-white">General Inquiries</h4>
                    <p className="text-sm text-crisp-off-white/70">Questions about the platform</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Enhanced Signup */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-12 shadow-lg border border-sandy-ochre/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre/5 to-rusty-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-fire transition-all duration-500 ease-out group-hover:w-full rounded-b-xl"></div>
                
                <div className="relative space-y-8">
                  <div className="text-left">
                    <h3 className="font-rajdhani text-responsive-2xl font-bold text-card-foreground mb-1 flex items-center gap-2">
                      <Mail className="h-6 w-6 text-sandy-ochre" />
                      Contact Us
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Drop us a line and we'll get back to you within 24 hours. All inquiries welcome.
                    </p>
                  </div>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    {submitStatus === 'success' && (
                      <div className="p-4 rounded-lg bg-sagebrush-green/10 border border-sagebrush-green/20 text-sagebrush-green">
                        <CheckCircle className="h-4 w-4 inline mr-2" />
                        Message sent successfully! We'll get back to you within 24 hours.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 rounded-lg bg-canyon-clay/10 border border-canyon-clay/20 text-canyon-clay">
                        <AlertTriangle className="h-4 w-4 inline mr-2" />
                        Failed to send message. Please try again or email us directly at business@boisegunclub.com
                      </div>
                    )}
                    
                    <div className="grid gap-4 sm:grid-cols-2">
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
                        className="w-full p-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-sandy-ochre focus:outline-none focus:ring-2 focus:ring-sandy-ochre/20 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="w-full bg-gradient-fire text-dark-chocolate hover:from-rusty-orange hover:to-sandy-ochre font-rajdhani font-bold text-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
=======
        {/* 5. Brand Carousel Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-site px-md">
            <BrandCarousel variant="launch-phase" />
          </div>
        </section>

        {/* 6. Business Context Section */}
        <section className="py-(--spacing-xl) lg:py-(--spacing-2xl) bg-page-primary/5">
          <div className="container mx-auto max-w-site px-md">
            {/* As `BusinessContext` does not exist, `DirectoryCard` is used as a substitute. */}
            <DirectoryCard
                variant="premium"
                name="The Boise Gun Club"
                type="Community Hub"
                status="Verified"
                badgeVariant="premium"
            />
          </div>
        </section>

        {/* 7. Contact Form Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-site px-md">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* 8. Site Footer */}
      <SiteFooter />
>>>>>>> refactor/summer-2025-standards
    </div>
  );
}