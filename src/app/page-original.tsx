'use client'

import React from 'react';
import { Building2, Calendar, Target, Search, MessageSquare, ShieldCheck, Star, Store, MapPin, Trophy, DollarSign, Users, Activity, Eye, Phone, ExternalLink, Crosshair, Shield, CheckCircle, Camera } from 'lucide-react';
import { Diamond } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

// Adjusted paths to match project structure
import { SiteNavigation } from '@/components/ui/site-navigation';
import { EventCard } from '@/components/ui/EventCard';
import { WeatherLocationCard } from '@/components/ui/weather-location-card';
import { BrandCarousel } from '@/components/ui/brand-carousel';
import { ContactForm } from '@/components/ui/contact-form';
import { SiteFooter } from '@/components/ui/site-footer';
import { PianoKeyNavigation } from '@/components/ui/piano-key-navigation';
import { ParticleSystem, FireflyParticles } from '@/components/ui/particle-system';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';


export default function HomePage() {
  const pianoKeyItems = [
    { href: "/events", icon: <Calendar className="w-6 h-6" />, label: "Events", colorClass: "nav-events" },
    { href: "/directory", icon: <Building2 className="w-6 h-6" />, label: "Directory", colorClass: "nav-directory" },
    { href: "/armory", icon: <ShieldCheck className="w-6 h-6" />, label: "Armory", colorClass: "nav-armory" },
    { href: "/intel", icon: <Target className="w-6 h-6" />, label: "Intel", colorClass: "nav-intel" },
    { href: "/marketplace", icon: <Store className="w-6 h-6" />, label: "Marketplace", colorClass: "nav-marketplace" },
    { href: "https://boisegunclub.com/forums/", icon: <MessageSquare className="w-6 h-6" />, label: "Forums", colorClass: "nav-forums" },
  ];

  return (
    <div className="theme-home flex flex-col min-h-screen bg-background">
      {/* Sticky Navigation - Always visible on scroll */}
      <SiteNavigation variant="premium" sticky={true} />

      <main className="flex-grow relative">
        {/* Hero Section with Extended Background */}
        <section className="relative">
          {/* Hero Background that extends down creating the "n" shape - with natural overflow */}
          <div className="absolute inset-0 bg-rusty-orange" 
               style={{ 
                 minHeight: '750px',
                 height: 'auto',
                 paddingBottom: '200px'
               }}>
            {/* Subtle noise texture for depth */}
            <div className="absolute inset-0 opacity-10"
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05) 0%, transparent 50%)`
                 }} />
            
            {/* Floating Diamonds Around Text Area */}
            <motion.div
              initial={{ opacity: 0, rotate: -28, y: 20 }}
              animate={{ 
                opacity: [0.2, 0.3, 0.2], 
                rotate: [-28, -20, -28],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                delay: 0.6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-[20%] top-[20%]"
            >
              <Diamond className="w-8 h-8 text-crisp-off-white/60 drop-shadow-lg" weight="bold" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -28, x: -10 }}
              animate={{ 
                opacity: [0.15, 0.25, 0.15], 
                rotate: [-28, -35, -28],
                x: [0, 5, 0]
              }}
              transition={{ 
                duration: 3.5, 
                delay: 0.7, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-[20%] top-[18%]"
            >
              <Diamond className="w-6 h-6 text-crisp-off-white/50 drop-shadow-md" weight="bold" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -28, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1], 
                rotate: [-28, -15, -28],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 5, 
                delay: 0.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-[15%] top-[45%]"
            >
              <Diamond className="w-5 h-5 text-crisp-off-white/40 drop-shadow" weight="bold" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -28, y: -15 }}
              animate={{ 
                opacity: [0.25, 0.35, 0.25], 
                rotate: [-28, -40, -28],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 3, 
                delay: 0.9, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-[18%] top-[50%]"
            >
              <Diamond className="w-7 h-7 text-crisp-off-white/55 drop-shadow-lg" weight="bold" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -28 }}
              animate={{ 
                opacity: [0.08, 0.15, 0.08], 
                rotate: [-28, -45, -28],
                x: [0, -8, 0],
                y: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                delay: 1.2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-[35%] top-[35%]"
            >
              <Diamond className="w-4 h-4 text-crisp-off-white/45 drop-shadow-sm" weight="bold" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -28 }}
              animate={{ 
                opacity: [0.12, 0.2, 0.12], 
                rotate: [-28, -10, -28],
                x: [0, 6, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4.5, 
                delay: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-[32%] top-[32%]"
            >
              <Diamond className="w-6 h-6 text-crisp-off-white/50 drop-shadow" weight="bold" />
            </motion.div>
            
            {/* Enhanced Asymmetrical campfire glow with particle system */}
            <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
              {/* Layer 1: Deep base glow */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-80"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'radial-gradient(ellipse at 50% 100%, rgba(235, 125, 1, 0.2) 0%, transparent 60%)',
                  filter: 'blur(60px)',
                }}
              />
              
              {/* Layer 2: Main asymmetrical glow - offset to the right */}
              <motion.div 
                className="absolute bottom-0 left-[45%] -translate-x-1/2 w-[90%] h-64"
                animate={{
                  scale: [1.3, 1.35, 1.3],
                  opacity: [0.8, 0.9, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'radial-gradient(ellipse at 60% 100%, rgba(255, 188, 32, 0.8) 0%, rgba(235, 125, 1, 0.5) 25%, rgba(255, 188, 32, 0.3) 45%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'translateX(-30%) scaleX(1.3) scaleY(1.5)'
                }}
              />
              
              {/* Layer 3: Secondary glow with flicker */}
              <motion.div 
                className="absolute bottom-0 left-[30%] w-[50%] h-48"
                animate={{
                  opacity: [0.6, 0.8, 0.5, 0.7, 0.6],
                  scale: [1, 1.05, 0.95, 1.02, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'radial-gradient(ellipse at 30% 100%, rgba(235, 125, 1, 0.6) 0%, rgba(255, 188, 32, 0.3) 35%, transparent 65%)',
                  filter: 'blur(50px)'
                }}
              />
              
              {/* Layer 4: Accent flare with rotation */}
              <motion.div 
                className="absolute bottom-0 right-[15%] w-64 h-56"
                animate={{
                  rotate: [-10, -5, -10],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'radial-gradient(circle at 80% 100%, rgba(255, 188, 32, 0.7) 0%, transparent 50%)',
                  filter: 'blur(45px)',
                }}
              />
              
              {/* Layer 5: Intense core glow */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32"
                animate={{
                  opacity: [0.4, 0.6, 0.3, 0.5, 0.4],
                  scaleX: [1, 1.2, 1, 1.1, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(to top, rgba(235, 125, 1, 0.6) 0%, rgba(255, 188, 32, 0.2) 40%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Particle System - Ember effects */}
              <ParticleSystem count={30} className="z-10" />
              
              {/* Firefly Particles - Ambient floating lights */}
              <FireflyParticles count={8} className="z-5" />
            </div>
          </div>
          
          {/* Hero Content - Enhanced with animations */}
          <div className="relative z-10 px-md pt-[50px] pb-[200px] text-center">
            <div className="container mx-auto max-w-4xl space-y-lg">
              {/* Revolutionary Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-xs px-sm py-micro bg-rusty-orange/10 border border-rusty-orange/30 rounded-xs text-rusty-orange font-rajdhani font-bold text-sm uppercase tracking-wider">
                  <span className="size-2 bg-rusty-orange rounded-full animate-pulse" />
                  Revolutionary Platform
                </span>
              </motion.div>
              
              {/* Dynamic Typography - Not H1 anymore, decorative */}
              <motion.div 
                className="font-rajdhani text-dark-chocolate relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <motion.div 
                  className="tracking-tight leading-none"
                  initial={{ letterSpacing: "0.5em", opacity: 0 }}
                  animate={{ letterSpacing: "0.02em", opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="font-[800] text-6xl md:text-7xl lg:text-8xl">THE BOISE</div>
                  <div className="font-[300] text-5xl md:text-6xl lg:text-7xl -mt-4">GUN CLUB</div>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Tagline */}
              <motion.p 
                className="text-xl md:text-2xl font-rajdhani text-dark-chocolate/80 font-[400] lowercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              >
                Built by Idaho Gun Owners, For Idaho Gun Owners
              </motion.p>
              
              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap justify-center gap-md text-dark-chocolate/60 text-sm font-rajdhani"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="flex items-center gap-xs">
                  <MapPin className="w-4 h-4" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    8 Shooting Locations
                  </motion.span>
                </span>
                <span className="flex items-center gap-xs">
                  <Building2 className="w-4 h-4" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    150+ Local Businesses
                  </motion.span>
                </span>
                <span className="flex items-center gap-xs">
                  <Users className="w-4 h-4" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    5,000+ Community Members
                  </motion.span>
                </span>
              </motion.div>
              
              {/* Enhanced CTAs with Tactical Styling */}
              <motion.div 
                className="pt-lg flex flex-col sm:flex-row gap-sm justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
              >
                <motion.button 
                  className="group relative px-xl py-sm bg-dark-chocolate text-crisp-off-white font-rajdhani text-lg font-bold uppercase tracking-wider rounded-xs transition-all shadow-elevated hover:shadow-hero transform hover:-translate-y-1 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-rusty-orange/0 via-rusty-orange/20 to-rusty-orange/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-xs">
                    Join the Community
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
                
                <motion.button 
                  className="group relative px-xl py-sm bg-crisp-off-white/90 text-dark-chocolate font-rajdhani text-lg font-bold uppercase tracking-wider rounded-xs transition-all shadow-elevated hover:shadow-prominent transform hover:-translate-y-1 border border-dark-chocolate/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative flex items-center justify-center gap-xs">
                    <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Explore Resources
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content with Rounded Overlap - Creating the "n" shape */}
        <div className="relative -mt-32 z-20">
          {/* Container wrapper for centering */}
          <div className="container mx-auto max-w-site px-md lg:px-0 relative">
            {/* Rounded Content Container - max-width with responsive behavior */}
            <div className="bg-light-peachy dark:bg-dark-chocolate rounded-t-none lg:rounded-t-md relative">
              {/* Solid background fill for the overhang area */}
              <div className="absolute inset-0 bg-light-peachy dark:bg-dark-chocolate rounded-t-none lg:rounded-t-md" />
              
              {/* Piano Key Navigation - At TOP of overhang */}
              <div className="relative z-10">
                <PianoKeyNavigation 
                  items={pianoKeyItems}
                />
              </div>

              {/* Content sections below navigation */}
              <div className="relative z-10 pt-lg">
                
                {/* SEO-Optimized H1 - The real H1 for the page */}
                <section className="px-md lg:px-xl pb-lg">
                  <motion.h1 
                    className="text-center font-rajdhani text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Idaho's Premier Firearms Directory & Community Hub
                  </motion.h1>
                  <motion.p 
                    className="text-center text-lg text-muted-foreground mt-sm max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  >
                    Connect with local gun stores, shooting ranges, trainers, and 5,000+ firearm enthusiasts across the Treasure Valley
                  </motion.p>
                </section>

                {/* Community Mission Statement - Idaho Steward Voice */}
                <section className="px-md lg:px-xl pb-xl">
                  <div className="max-w-4xl mx-auto text-center space-y-lg">
                    <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
                      <Users className="h-4 w-4 mr-xs" />
                      Community Message
                    </Badge>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                      className="space-y-base"
                    >
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        After eight years of building this platform for Idaho gun owners, we're opening it up to every firearms 
                        enthusiast in the Treasure Valley. This isn't some corporate venture — it's by us, for us.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Whether you're looking for your next range day at <span className="text-slate-blue font-medium">Black's Creek</span>, 
                        need to find a trusted gunsmith, or want to connect with fellow shooters who understand Idaho values — 
                        this is your digital homestead.
                      </p>
                      <p className="text-base text-card-foreground font-medium font-rajdhani">
                        Built by gun owners who understand that knowledge shared is liberty preserved.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* By The Numbers - Honest Community Metrics */}
                <section className="px-md lg:px-xl pb-lg">
                  <div className="space-y-lg">
                    <div className="text-center">
                      <Badge className="bg-canyon-clay/20 text-canyon-clay border-canyon-clay/30">
                        <Activity className="h-4 w-4 mr-xs" />
                        By The Numbers
                      </Badge>
                      <h2 className="font-rajdhani text-3xl font-bold text-card-foreground mt-base">Real Community Metrics</h2>
                      <p className="text-muted-foreground mt-xs">Honest numbers from our Idaho firearms community</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-base">
                      <div className="text-center space-y-xs">
                        <p className="text-2xl font-bold text-canyon-clay font-rajdhani">8</p>
                        <p className="text-xs text-muted-foreground">Public Shooting Locations</p>
                      </div>
                      <div className="text-center space-y-xs">
                        <p className="text-2xl font-bold text-sagebrush-green font-rajdhani">150+</p>
                        <p className="text-xs text-muted-foreground">Local Businesses Verified</p>
                      </div>
                      <div className="text-center space-y-xs">
                        <p className="text-2xl font-bold text-slate-blue font-rajdhani">5,000+</p>
                        <p className="text-xs text-muted-foreground">Community Members</p>
                      </div>
                      <div className="text-center space-y-xs">
                        <p className="text-2xl font-bold text-rusty-orange font-rajdhani">28+</p>
                        <p className="text-xs text-muted-foreground">Ranges and Clubs</p>
                      </div>
                      <div className="text-center space-y-xs">
                        <p className="text-2xl font-bold text-warm-stone font-rajdhani">50+</p>
                        <p className="text-xs text-muted-foreground">Training Resources</p>
                      </div>
                      <div className="text-center space-y-xs">
                        <p className="text-2xl font-bold text-dark-chocolate font-rajdhani">Daily</p>
                        <p className="text-xs text-muted-foreground">Weather Updates</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Featured Event Spotlight */}
                <section className="px-md lg:px-xl py-xl bg-gradient-to-b from-transparent via-card-surface/30 to-transparent">
                  <div className="space-y-xl">
                    <div className="text-center">
                      <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30 mb-base">
                        <Trophy className="h-4 w-4 mr-xs" />
                        Featured Event Today
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">Today's Highlight</h2>
                      <p className="text-body-lg text-muted-foreground mt-sm">Don't miss this featured event happening in the Treasure Valley</p>
                    </div>
                    <div className="max-w-md mx-auto">
                      <EventCard
                        title="USPSA Monthly Match"
                        description="Monthly USPSA practical shooting match at Nampa Rod & Gun Club. Open to all skill levels with multiple divisions."
                        date="Saturday, August 9, 2025"
                        time="8:00 AM - 3:00 PM"
                        location="Nampa Rod & Gun Club, 7990 Bennet Road, Nampa, ID"
                        eventType="Competition"
                        capacity={80}
                        registeredCount={54}
                        registrationUrl="https://practiscore.com/idaho-uspsa"
                        price="$15"
                        featured={true}
                      />
                    </div>
                  </div>
                </section>

                {/* Location of the Day with Weather */}
                <section className="px-md lg:px-xl py-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                    <div className="space-y-lg">
                      <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
                        <Crosshair className="h-4 w-4 mr-xs" />
                        Intel Featured
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">
                        Location of the Day
                      </h2>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        Today's featured shooting location with live weather conditions and access information from our Intel database.
                      </p>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-card-foreground font-rajdhani font-bold"
                      >
                        <MapPin className="h-4 w-4 mr-xs" />
                        View All Locations
                      </Button>
                    </div>
                    <div>
                      <WeatherLocationCard 
                        location={{
                          name: "Black's Creek Public Shooting Range",
                          type: "Public Range",
                          description: "Idaho's premier public shooting facility managed by Idaho Fish & Game. Features multiple disciplines with excellent safety infrastructure.",
                          address: "2420 E Kuna-Mora Rd, Kuna, ID 83634",
                          distanceFromBoise: 18.5,
                          rating: 4.8,
                          reviews: 342,
                          difficulty: "Easy",
                          category: "Public Range",
                          verified: true,
                          elevation: 2654,
                          bestWindConditions: "Early morning (7-10 AM)",
                          weatherPriority: "high" as const,
                          amenities: ["100-yard rifle range", "200-yard rifle range", "25-yard pistol range", "Shotgun pattern board", "Restrooms", "Parking for 50+ vehicles"]
                        }}
                        weatherData={{
                          locationName: "Black's Creek Public Shooting Range",
                          temperature: 72,
                          windSpeed: 8,
                          windDirection: "SW",
                          fireDanger: "Low" as const,
                          accessStatus: "Open" as const,
                          weatherIcon: "sun" as const,
                          lastUpdated: "2025-08-14T05:30:00Z"
                        }}
                      />
                    </div>
                  </div>
                </section>

                {/* Marketplace Featured Deal */}
                <section className="px-md lg:px-xl py-xl bg-gradient-to-b from-transparent via-page-primary/5 to-transparent">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                    <div>
                      <Card className="mica border-rusty-orange/30 shadow-elevated hover:shadow-hero transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-rusty-orange/10 to-rusty-orange/30 opacity-50"></div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rusty-orange/20 to-rusty-orange/10 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rusty-orange to-rusty-orange"></div>
                        <CardHeader className="pb-xs relative z-10">
                          <div className="flex items-center justify-between mb-xs">
                            <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30 font-rajdhani font-bold text-[10px]">
                              <DollarSign className="h-3 w-3 mr-xs" />
                              HOT DEAL
                            </Badge>
                            <div className="flex items-center gap-xs text-xs text-muted-foreground">
                              <Eye className="h-3 w-3" />
                              <span>340 views</span>
                            </div>
                          </div>
                          <div className="space-y-xs">
                            <h3 className="font-rajdhani font-bold text-card-foreground text-xl leading-tight">Glock 19 Gen 5</h3>
                            <div className="flex items-center gap-xs text-xs text-muted-foreground">
                              <Store className="h-3 w-3 text-rusty-orange" />
                              <span>Valley Gun & Pawn</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-base relative z-10">
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            9mm, 15+1 capacity, Glock night sights, three magazines included. Excellent condition, barely used.
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="space-y-xs">
                              <div className="flex items-center gap-xs">
                                <span className="text-2xl font-bold text-rusty-orange font-rajdhani">$549</span>
                                <span className="text-sm text-muted-foreground line-through">$599</span>
                              </div>
                              <div className="flex items-center gap-xs text-xs text-muted-foreground">
                                <Phone className="h-3 w-3" />
                                <span>(208) 555-0321</span>
                              </div>
                            </div>
                            <Button className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold text-xs" size="sm">
                              VIEW DEAL
                              <ExternalLink className="h-3 w-3 ml-xs" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-lg">
                      <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
                        <Store className="h-4 w-4 mr-xs" />
                        Marketplace Featured
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">
                        Today's Best Deal
                      </h2>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        Discover exclusive deals from verified local dealers in the Treasure Valley. Updated daily with the hottest finds.
                      </p>
                      <div className="grid grid-cols-3 gap-xs">
                        <div className="bg-card/50 p-xs rounded-sm text-center border border-rusty-orange/20">
                          <p className="text-lg font-bold text-rusty-orange font-rajdhani">150+</p>
                          <p className="text-xs text-muted-foreground">Active Deals</p>
                        </div>
                        <div className="bg-card/50 p-xs rounded-sm text-center border border-rusty-orange/20">
                          <p className="text-lg font-bold text-rusty-orange font-rajdhani">25+</p>
                          <p className="text-xs text-muted-foreground">Dealers</p>
                        </div>
                        <div className="bg-card/50 p-xs rounded-sm text-center border border-rusty-orange/20">
                          <p className="text-lg font-bold text-rusty-orange font-rajdhani">$50K+</p>
                          <p className="text-xs text-muted-foreground">Savings</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-rusty-orange/30 text-rusty-orange hover:bg-rusty-orange hover:text-card-foreground font-rajdhani font-bold"
                      >
                        <DollarSign className="h-4 w-4 mr-xs" />
                        Browse All Deals
                      </Button>
                    </div>
                  </div>
                </section>

                {/* Enhanced Directory CTA */}
                <section className="px-md lg:px-xl py-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                    <div className="space-y-lg">
                      <Badge className="bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30">
                        <Building2 className="h-4 w-4 mr-xs" />
                        Directory Highlight
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">
                        Find Your Local <span className="text-sagebrush-green">Firearms Community</span>
                      </h2>
                      <p className="text-body-lg text-muted-foreground leading-relaxed">
                        The most comprehensive directory of FFLs, ranges, trainers, and service providers across the Treasure Valley. All verified, all local.
                      </p>
                      <div className="grid grid-cols-2 gap-base">
                        <div className="flex items-center gap-xs">
                          <CheckCircle className="h-5 w-5 text-sagebrush-green" />
                          <span className="text-sm text-card-foreground">117+ Verified Businesses</span>
                        </div>
                        <div className="flex items-center gap-xs">
                          <CheckCircle className="h-5 w-5 text-sagebrush-green" />
                          <span className="text-sm text-card-foreground">Real-time Inventory</span>
                        </div>
                        <div className="flex items-center gap-xs">
                          <CheckCircle className="h-5 w-5 text-sagebrush-green" />
                          <span className="text-sm text-card-foreground">Community Reviews</span>
                        </div>
                        <div className="flex items-center gap-xs">
                          <CheckCircle className="h-5 w-5 text-sagebrush-green" />
                          <span className="text-sm text-card-foreground">Service Updates</span>
                        </div>
                      </div>
                      <Button 
                        size="lg" 
                        className="bg-sagebrush-green text-dark-chocolate hover:bg-sagebrush-green/90 font-rajdhani font-bold"
                      >
                        <Search className="h-4 w-4 mr-xs" />
                        Explore Directory
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-base">
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300">
                        <CardContent className="p-base text-center">
                          <Building2 className="h-8 w-8 text-sagebrush-green mx-auto mb-xs" />
                          <h3 className="font-rajdhani font-bold text-card-foreground mb-xs">Gun Stores</h3>
                          <p className="text-2xl font-bold text-sagebrush-green font-rajdhani">45+</p>
                          <p className="text-xs text-muted-foreground">Licensed Dealers</p>
                        </CardContent>
                      </Card>
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300">
                        <CardContent className="p-base text-center">
                          <Target className="h-8 w-8 text-sagebrush-green mx-auto mb-xs" />
                          <h3 className="font-rajdhani font-bold text-card-foreground mb-xs">Ranges</h3>
                          <p className="text-2xl font-bold text-sagebrush-green font-rajdhani">28+</p>
                          <p className="text-xs text-muted-foreground">Shooting Facilities</p>
                        </CardContent>
                      </Card>
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300">
                        <CardContent className="p-base text-center">
                          <Shield className="h-8 w-8 text-sagebrush-green mx-auto mb-xs" />
                          <h3 className="font-rajdhani font-bold text-card-foreground mb-xs">Trainers</h3>
                          <p className="text-2xl font-bold text-sagebrush-green font-rajdhani">32+</p>
                          <p className="text-xs text-muted-foreground">Certified Instructors</p>
                        </CardContent>
                      </Card>
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300">
                        <CardContent className="p-base text-center">
                          <Users className="h-8 w-8 text-sagebrush-green mx-auto mb-xs" />
                          <h3 className="font-rajdhani font-bold text-card-foreground mb-xs">Services</h3>
                          <p className="text-2xl font-bold text-sagebrush-green font-rajdhani">12+</p>
                          <p className="text-xs text-muted-foreground">Specialized Services</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>

                {/* Community Activity Feed */}
                <section className="px-md lg:px-xl py-xl bg-gradient-to-b from-transparent via-slate-blue/5 to-transparent">
                  <div className="space-y-xl">
                    <div className="text-center">
                      <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30 mb-base">
                        <Activity className="h-4 w-4 mr-xs" />
                        Live Community
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">What's Happening Now</h2>
                      <p className="text-body-lg text-muted-foreground mt-sm">Real-time activity from our Idaho firearms community</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                        <div className="flex items-start gap-base p-base">
                          <div className="w-8 h-8 rounded-full bg-sagebrush-green/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4 text-sagebrush-green" />
                          </div>
                          <div className="flex-1 space-y-xs">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-card-foreground text-sm">New business verified</p>
                              <span className="text-xs text-muted-foreground">1h ago</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Double Tapp Range verified - members can now access BLM land
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                        <div className="flex items-start gap-base p-base">
                          <div className="w-8 h-8 rounded-full bg-rusty-orange/20 flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-4 w-4 text-rusty-orange" />
                          </div>
                          <div className="flex-1 space-y-xs">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-card-foreground text-sm">Event registration open</p>
                              <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Steel Challenge match at Nampa Rod & Gun - 45 spots available
                            </p>
                          </div>
                        </div>
                      </Card>
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200">
                        <div className="flex items-start gap-base p-base">
                          <div className="w-8 h-8 rounded-full bg-slate-blue/20 flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-4 w-4 text-slate-blue" />
                          </div>
                          <div className="flex-1 space-y-xs">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-card-foreground text-sm">New forum discussion</p>
                              <span className="text-xs text-muted-foreground">3h ago</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              "Best CCW holsters for Idaho weather" - 18 replies from locals
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="text-center">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-slate-blue/30 text-slate-blue hover:bg-slate-blue hover:text-card-foreground font-rajdhani font-bold"
                      >
                        <MessageSquare className="h-4 w-4 mr-xs" />
                        Join the Forums
                      </Button>
                    </div>
                  </div>
                </section>

                {/* Armory Mention */}
                <section className="px-md lg:px-xl py-xl">
                  <Card className="mica border-dark-chocolate/30 shadow-elevated hover:shadow-hero transition-all duration-300 overflow-hidden bg-gradient-to-br from-dark-chocolate/95 to-warm-stone/90">
                    <CardContent className="p-xl text-center">
                      <div className="space-y-lg">
                        <Badge className="bg-canyon-clay/20 text-canyon-clay border-canyon-clay/30">
                          <Shield className="h-4 w-4 mr-xs" />
                          The Armory
                        </Badge>
                        <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-crisp-off-white">
                          Knowledge is <span className="text-rusty-orange">Power</span>
                        </h2>
                        <p className="text-body-lg text-crisp-off-white/80 max-w-2xl mx-auto leading-relaxed">
                          Access our comprehensive library of training resources, safety guides, legal updates, and educational content. Because informed shooters are safer shooters.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-base max-w-2xl mx-auto">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-rusty-orange font-rajdhani">50+</p>
                            <p className="text-sm text-crisp-off-white/70">Training Guides</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-rusty-orange font-rajdhani">25+</p>
                            <p className="text-sm text-crisp-off-white/70">Legal Resources</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-rusty-orange font-rajdhani">100+</p>
                            <p className="text-sm text-crisp-off-white/70">Safety Articles</p>
                          </div>
                        </div>
                        <Button 
                          size="xl" 
                          className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
                        >
                          <Shield className="h-4 w-4 mr-xs" />
                          Explore The Armory
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Community-Benefit 7 Pillars Section */}
                <section className="py-xl lg:py-2xl bg-gradient-to-b from-transparent via-card-surface/30 to-transparent">
                  <div className="px-md lg:px-xl space-y-2xl">
                    <div className="text-center space-y-base">
                      <Badge className="bg-sagebrush-green/20 text-sagebrush-green border-sagebrush-green/30">
                        <Shield className="h-4 w-4 mr-xs" />
                        Community Resources
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">Seven Ways We Serve Our Community</h2>
                      <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                        Each feature built to solve real problems Idaho gun owners face. Your participation makes it stronger.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg max-w-6xl mx-auto">
                      
                      {/* Events Calendar */}
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300 border-rusty-orange/20">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-rusty-orange/20 rounded-xs flex items-center justify-center mx-auto">
                            <Calendar className="h-6 w-6 text-rusty-orange" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Events Calendar</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Never miss another match or training. Unified calendar from every local club and range.
                          </p>
                          <div className="space-y-xs">
                            <p className="text-xs text-card-foreground font-medium">How you can help:</p>
                            <p className="text-xs text-muted-foreground">Submit your club's events and competitions</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Directory */}
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300 border-sagebrush-green/20">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-sagebrush-green/20 rounded-xs flex items-center justify-center mx-auto">
                            <Building2 className="h-6 w-6 text-sagebrush-green" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Directory</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Find trusted local businesses. 150+ verified FFLs, ranges, trainers, and services.
                          </p>
                          <div className="space-y-xs">
                            <p className="text-xs text-card-foreground font-medium">How you can help:</p>
                            <p className="text-xs text-muted-foreground">Review businesses you've used</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* The Armory */}
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300 border-slate-blue/20">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-slate-blue/20 rounded-xs flex items-center justify-center mx-auto">
                            <ShieldCheck className="h-6 w-6 text-slate-blue" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">The Armory</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Knowledge is power and safety. Training guides, legal updates, and safety resources.
                          </p>
                          <div className="space-y-xs">
                            <p className="text-xs text-card-foreground font-medium">How you can help:</p>
                            <p className="text-xs text-muted-foreground">Share your expertise and submit articles</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Intel */}
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300 border-canyon-clay/20">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-canyon-clay/20 rounded-xs flex items-center justify-center mx-auto">
                            <Target className="h-6 w-6 text-canyon-clay" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Intel</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Real-time range conditions. Weather data for Black's Creek, Morley Nelson, and more.
                          </p>
                          <div className="space-y-xs">
                            <p className="text-xs text-card-foreground font-medium">How you can help:</p>
                            <p className="text-xs text-muted-foreground">Submit range photos and condition reports</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Marketplace */}
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300 border-warm-stone/20">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-warm-stone/20 rounded-xs flex items-center justify-center mx-auto">
                            <Store className="h-6 w-6 text-warm-stone" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Marketplace</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Local deals, no corporate middleman. Direct connections with Treasure Valley dealers.
                          </p>
                          <div className="space-y-xs">
                            <p className="text-xs text-card-foreground font-medium">How you can help:</p>
                            <p className="text-xs text-muted-foreground">Share deals you find at local shops</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Forums */}
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-300 border-dark-chocolate/20">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-dark-chocolate/20 rounded-xs flex items-center justify-center mx-auto">
                            <MessageSquare className="h-6 w-6 text-dark-chocolate" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-card-foreground">Forums</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Your voice matters. Idaho-focused discussions without coastal politics or corporate agenda.
                          </p>
                          <div className="space-y-xs">
                            <p className="text-xs text-card-foreground font-medium">How you can help:</p>
                            <p className="text-xs text-muted-foreground">Join conversations and share local knowledge</p>
                          </div>
                        </CardContent>
                      </Card>

                    </div>
                    
                    <div className="text-center pt-lg">
                      <Button 
                        size="xl" 
                        className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
                      >
                        <Users className="h-4 w-4 mr-xs" />
                        Start Contributing Today
                      </Button>
                    </div>
                  </div>
                </section>

                {/* Community Contribution Section */}
                <section className="py-xl lg:py-2xl bg-gradient-to-b from-transparent via-slate-blue/5 to-transparent">
                  <div className="px-md lg:px-xl space-y-2xl">
                    <div className="text-center space-y-base">
                      <Badge className="bg-slate-blue/20 text-slate-blue border-slate-blue/30">
                        <Users className="h-4 w-4 mr-xs" />
                        Community Power
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">How You Can Help Build This</h2>
                      <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                        This platform is only as strong as our community. Your local knowledge and participation make the difference between a corporate directory and a living resource built by Idaho gun owners.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-base max-w-6xl mx-auto">
                      
                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200 border-rusty-orange/20">
                        <CardContent className="p-base space-y-base">
                          <div className="flex items-center gap-base">
                            <div className="w-10 h-10 bg-rusty-orange/20 rounded-xs flex items-center justify-center flex-shrink-0">
                              <Camera className="h-5 w-5 text-rusty-orange" />
                            </div>
                            <div>
                              <h3 className="font-rajdhani font-bold text-card-foreground">Submit Range Photos</h3>
                              <p className="text-xs text-muted-foreground">Help Intel with current conditions</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Share photos of ranges, weather conditions, and access status. Your eyes on the ground keep everyone informed.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200 border-sagebrush-green/20">
                        <CardContent className="p-base space-y-base">
                          <div className="flex items-center gap-base">
                            <div className="w-10 h-10 bg-sagebrush-green/20 rounded-xs flex items-center justify-center flex-shrink-0">
                              <Star className="h-5 w-5 text-sagebrush-green" />
                            </div>
                            <div>
                              <h3 className="font-rajdhani font-bold text-card-foreground">Write Reviews</h3>
                              <p className="text-xs text-muted-foreground">Rate local businesses you've used</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Your honest reviews of FFLs, ranges, and services help fellow gun owners make informed decisions.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200 border-slate-blue/20">
                        <CardContent className="p-base space-y-base">
                          <div className="flex items-center gap-base">
                            <div className="w-10 h-10 bg-slate-blue/20 rounded-xs flex items-center justify-center flex-shrink-0">
                              <Calendar className="h-5 w-5 text-slate-blue" />
                            </div>
                            <div>
                              <h3 className="font-rajdhani font-bold text-card-foreground">Share Events</h3>
                              <p className="text-xs text-muted-foreground">Submit your club's calendar</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Help build the unified Treasure Valley events calendar. Every match, training, and meeting matters.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200 border-canyon-clay/20">
                        <CardContent className="p-base space-y-base">
                          <div className="flex items-center gap-base">
                            <div className="w-10 h-10 bg-canyon-clay/20 rounded-xs flex items-center justify-center flex-shrink-0">
                              <MessageSquare className="h-5 w-5 text-canyon-clay" />
                            </div>
                            <div>
                              <h3 className="font-rajdhani font-bold text-card-foreground">Join Discussions</h3>
                              <p className="text-xs text-muted-foreground">Participate in community forums</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Share local knowledge, ask questions, and connect with fellow Idaho gun owners who get it.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200 border-warm-stone/20">
                        <CardContent className="p-base space-y-base">
                          <div className="flex items-center gap-base">
                            <div className="w-10 h-10 bg-warm-stone/20 rounded-xs flex items-center justify-center flex-shrink-0">
                              <DollarSign className="h-5 w-5 text-warm-stone" />
                            </div>
                            <div>
                              <h3 className="font-rajdhani font-bold text-card-foreground">Report Deals</h3>
                              <p className="text-xs text-muted-foreground">Share marketplace finds</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Found a good deal at a local shop? Help your neighbors save money by sharing it here.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="shadow-whisper hover:shadow-present transition-all duration-200 border-dark-chocolate/20">
                        <CardContent className="p-base space-y-base">
                          <div className="flex items-center gap-base">
                            <div className="w-10 h-10 bg-dark-chocolate/20 rounded-xs flex items-center justify-center flex-shrink-0">
                              <Shield className="h-5 w-5 text-dark-chocolate" />
                            </div>
                            <div>
                              <h3 className="font-rajdhani font-bold text-card-foreground">Share Expertise</h3>
                              <p className="text-xs text-muted-foreground">Contribute to The Armory</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Write safety tips, training guides, or legal updates. Your knowledge helps keep our community safer.
                          </p>
                        </CardContent>
                      </Card>

                    </div>
                    
                    <div className="text-center pt-lg">
                      <p className="text-body-lg text-muted-foreground mb-base max-w-2xl mx-auto">
                        Every photo, review, and post strengthens our community. This is our platform — let's build it together.
                      </p>
                      <Button 
                        size="xl" 
                        className="bg-slate-blue text-crisp-off-white hover:bg-slate-blue/90 font-rajdhani font-bold"
                      >
                        <MessageSquare className="h-4 w-4 mr-xs" />
                        Join the Forums Today
                      </Button>
                    </div>
                  </div>
                </section>

                {/* The Story Section - Authentic 8-Year Journey */}
                <section className="py-xl lg:py-2xl bg-gradient-to-b from-warm-stone/5 via-warm-stone/10 to-warm-stone/5">
                  <div className="px-md lg:px-xl space-y-2xl">
                    <div className="text-center space-y-base">
                      <Badge className="bg-warm-stone/20 text-warm-stone border-warm-stone/30">
                        <Shield className="h-4 w-4 mr-xs" />
                        Our Story
                      </Badge>
                      <h2 className="font-rajdhani text-4xl font-bold text-card-foreground">Eight Years in the Making</h2>
                      <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
                        When the old guard wouldn't adapt, we built something better.
                      </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                      <div className="space-y-lg">
                        <Card className="shadow-whisper border-warm-stone/20">
                          <CardContent className="p-lg space-y-base">
                            <div className="flex items-center gap-base mb-base">
                              <div className="w-10 h-10 bg-warm-stone/20 rounded-xs flex items-center justify-center">
                                <Users className="h-5 w-5 text-warm-stone" />
                              </div>
                              <div>
                                <h3 className="font-rajdhani font-bold text-card-foreground">Community Resilience</h3>
                                <p className="text-xs text-muted-foreground">Built by us, for us</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              For eight years, we've been quietly building the platform Idaho gun owners deserved. 
                              Not some corporate venture, but a genuine community resource shaped by the people who use it.
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-whisper border-sagebrush-green/20">
                          <CardContent className="p-lg space-y-base">
                            <div className="flex items-center gap-base mb-base">
                              <div className="w-10 h-10 bg-sagebrush-green/20 rounded-xs flex items-center justify-center">
                                <Shield className="h-5 w-5 text-sagebrush-green" />
                              </div>
                              <div>
                                <h3 className="font-rajdhani font-bold text-card-foreground">Idaho Values</h3>
                                <p className="text-xs text-muted-foreground">Independence and stewardship</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              We believe in self-reliance, community strength, and preserving our rights and lands 
                              for the next generation. This platform reflects those values — built to last, built to serve.
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="shadow-whisper border-slate-blue/20">
                          <CardContent className="p-lg space-y-base">
                            <div className="flex items-center gap-base mb-base">
                              <div className="w-10 h-10 bg-slate-blue/20 rounded-xs flex items-center justify-center">
                                <Target className="h-5 w-5 text-slate-blue" />
                              </div>
                              <div>
                                <h3 className="font-rajdhani font-bold text-card-foreground">Local Focus</h3>
                                <p className="text-xs text-muted-foreground">Treasure Valley first</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Every feature, every resource, every connection is designed around the unique needs 
                              of Idaho gun owners. From Black's Creek conditions to Nampa Rod & Gun events.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="space-y-lg text-center lg:text-left">
                        <div className="space-y-base">
                          <h3 className="font-rajdhani text-3xl font-bold text-card-foreground">
                            Knowledge Shared is <span className="text-rusty-orange">Liberty Preserved</span>
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            This isn't about building the biggest platform — it's about building the right one. 
                            A place where Idaho gun owners can connect, learn, and preserve the traditions 
                            that make our community strong.
                          </p>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            From range safety to legal updates, from local deals to community events, we're here 
                            to ensure that working families in the Treasure Valley have the resources they need 
                            to exercise their rights responsibly and effectively.
                          </p>
                        </div>
                        
                        <div className="pt-base">
                          <p className="text-sm text-card-foreground font-medium font-rajdhani mb-base">
                            "A community is only as strong as its most dedicated members."
                          </p>
                          <div className="flex items-center justify-center lg:justify-start gap-base">
                            <div className="w-2 h-2 bg-rusty-orange rounded-full"></div>
                            <p className="text-xs text-muted-foreground">
                              The Idaho Steward Team
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Brand Carousel Section */}
                <section className="py-xl lg:py-2xl">
                  <div className="px-md lg:px-xl">
                    <BrandCarousel variant="launch-phase" />
                  </div>
                </section>

                {/* Join The Movement - Final CTA Section */}
                <section className="py-xl lg:py-2xl bg-gradient-to-b from-dark-chocolate/95 via-dark-chocolate to-dark-chocolate/90">
                  <div className="px-md lg:px-xl space-y-2xl">
                    <div className="text-center space-y-base">
                      <Badge className="bg-rusty-orange/30 text-rusty-orange border-rusty-orange/50">
                        <Users className="h-4 w-4 mr-xs" />
                        Join The Movement
                      </Badge>
                      <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-crisp-off-white">
                        Ready to Be Part of Something <span className="text-rusty-orange">Bigger</span>?
                      </h2>
                      <p className="text-body-lg text-crisp-off-white/80 max-w-3xl mx-auto leading-relaxed">
                        This platform belongs to all of us. Choose how you want to contribute to Idaho's strongest firearms community.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-base max-w-6xl mx-auto">
                      
                      {/* Directory Explorer */}
                      <Card className="mica border-sagebrush-green/30 shadow-elevated hover:shadow-hero transition-all duration-300 overflow-hidden bg-gradient-to-br from-sagebrush-green/10 to-sagebrush-green/5">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-sagebrush-green/20 rounded-xs flex items-center justify-center mx-auto">
                            <Building2 className="h-6 w-6 text-sagebrush-green" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-crisp-off-white">Find Local Businesses</h3>
                          <p className="text-sm text-crisp-off-white/70 leading-relaxed">
                            Discover 150+ verified FFLs, ranges, trainers, and services across the Treasure Valley.
                          </p>
                          <Button 
                            className="w-full bg-sagebrush-green text-dark-chocolate hover:bg-sagebrush-green/90 font-rajdhani font-bold"
                            size="sm"
                          >
                            <Search className="h-4 w-4 mr-xs" />
                            Explore Directory
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Events Calendar */}
                      <Card className="mica border-rusty-orange/30 shadow-elevated hover:shadow-hero transition-all duration-300 overflow-hidden bg-gradient-to-br from-rusty-orange/10 to-rusty-orange/5">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-rusty-orange/20 rounded-xs flex items-center justify-center mx-auto">
                            <Calendar className="h-6 w-6 text-rusty-orange" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-crisp-off-white">Join Events</h3>
                          <p className="text-sm text-crisp-off-white/70 leading-relaxed">
                            Never miss a match, training, or club meeting with our unified community calendar.
                          </p>
                          <Button 
                            className="w-full bg-rusty-orange text-dark-chocolate hover:bg-rusty-orange/90 font-rajdhani font-bold"
                            size="sm"
                          >
                            <Calendar className="h-4 w-4 mr-xs" />
                            View Events
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Forums */}
                      <Card className="mica border-slate-blue/30 shadow-elevated hover:shadow-hero transition-all duration-300 overflow-hidden bg-gradient-to-br from-slate-blue/10 to-slate-blue/5">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-slate-blue/20 rounded-xs flex items-center justify-center mx-auto">
                            <MessageSquare className="h-6 w-6 text-slate-blue" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-crisp-off-white">Join Discussions</h3>
                          <p className="text-sm text-crisp-off-white/70 leading-relaxed">
                            Connect with fellow Idaho gun owners in our community forums. Your voice matters.
                          </p>
                          <Button 
                            className="w-full bg-slate-blue text-crisp-off-white hover:bg-slate-blue/90 font-rajdhani font-bold"
                            size="sm"
                          >
                            <MessageSquare className="h-4 w-4 mr-xs" />
                            Join Forums
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Contributor */}
                      <Card className="mica border-canyon-clay/30 shadow-elevated hover:shadow-hero transition-all duration-300 overflow-hidden bg-gradient-to-br from-canyon-clay/10 to-canyon-clay/5">
                        <CardContent className="p-lg text-center space-y-base">
                          <div className="w-12 h-12 bg-canyon-clay/20 rounded-xs flex items-center justify-center mx-auto">
                            <Camera className="h-6 w-6 text-canyon-clay" />
                          </div>
                          <h3 className="font-rajdhani font-bold text-xl text-crisp-off-white">Become a Contributor</h3>
                          <p className="text-sm text-crisp-off-white/70 leading-relaxed">
                            Share photos, write reviews, submit events. Help build the resource we all need.
                          </p>
                          <Button 
                            className="w-full bg-canyon-clay text-dark-chocolate hover:bg-canyon-clay/90 font-rajdhani font-bold"
                            size="sm"
                          >
                            <Users className="h-4 w-4 mr-xs" />
                            Start Contributing
                          </Button>
                        </CardContent>
                      </Card>

                    </div>
                    
                    <div className="text-center pt-lg space-y-base">
                      <p className="text-lg text-crisp-off-white/80 max-w-2xl mx-auto">
                        Every member makes us stronger. Every contribution makes us better. 
                        <br />
                        <span className="text-rusty-orange font-medium">This is our platform. Let's build it together.</span>
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-base justify-center items-center">
                        <Button 
                          size="xl" 
                          className="bg-gradient-to-r from-rusty-orange to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-rusty-orange font-rajdhani font-bold"
                        >
                          <Shield className="h-4 w-4 mr-xs" />
                          Get Started Today
                        </Button>
                        
                        <div className="flex items-center gap-xs text-crisp-off-white/60">
                          <div className="w-2 h-2 bg-rusty-orange rounded-full animate-pulse"></div>
                          <span className="text-sm">5,000+ Members Strong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-xl lg:py-2xl">
                  <div className="px-md lg:px-xl">
                    <ContactForm />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 8. Site Footer */}
      <SiteFooter currentPage="home" />
    </div>
  );
}