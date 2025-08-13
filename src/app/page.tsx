import React from 'react';
import { Building2, Calendar, Share2, Target, Search, MessageSquare, ShieldCheck, List, Star, Users, Lock, Store } from 'lucide-react';
import { Ticket, AddressBook, Shield, MapTrifold, Storefront, Users as UsersIcon } from '@phosphor-icons/react';

// Adjusted paths to match project structure
import { SiteNavigation } from '@/components/ui/site-navigation';
import { StatCard } from '@/components/ui/StatCard';
import { BrandCarousel } from '@/components/ui/brand-carousel';
import { DirectoryCard } from '@/components/ui/DirectoryCard'; // Using DirectoryCard as BusinessContext doesn't exist
import { ContactForm } from '@/components/ui/contact-form';
import { SiteFooter } from '@/components/ui/site-footer';
import AlternatingFeatureSpotlight from '@/components/organisms/AlternatingFeatureSpotlight';

import { statCardsData, directoryData, calendarData, communityData } from '@/lib/data/home-page-data';

export default function HomePage() {
  return (
    <div className="theme-home flex flex-col min-h-screen bg-background">
      {/* Sticky Navigation - Always visible on scroll */}
      <SiteNavigation variant="premium" sticky={true} />

      <main className="flex-grow relative">
        {/* Hero Section with Extended Background */}
        <section className="relative">
          {/* Hero Background that extends down creating the "n" shape */}
          <div className="absolute inset-0 bg-gradient-home-hero" 
               style={{ height: '750px' }}>
            {/* Subtle noise texture for depth */}
            <div className="absolute inset-0 opacity-10"
                 style={{
                   backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                     radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05) 0%, transparent 50%)`
                 }} />
            
            {/* Asymmetrical campfire glow at the bottom of hero */}
            <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
              {/* Main asymmetrical glow - offset to the right */}
              <div className="absolute bottom-0 left-[45%] -translate-x-1/2 w-[90%] h-64"
                   style={{
                     background: 'radial-gradient(ellipse at 60% 100%, rgba(255, 188, 32, 0.8) 0%, rgba(235, 125, 1, 0.5) 25%, rgba(255, 188, 32, 0.3) 45%, transparent 70%)',
                     filter: 'blur(40px)',
                     transform: 'translateX(-30%) scaleX(1.3) scaleY(1.5)'
                   }} />
              
              {/* Secondary glow - offset to the left for asymmetry */}
              <div className="absolute bottom-0 left-[30%] w-[50%] h-48"
                   style={{
                     background: 'radial-gradient(ellipse at 30% 100%, rgba(235, 125, 1, 0.6) 0%, rgba(255, 188, 32, 0.3) 35%, transparent 65%)',
                     filter: 'blur(50px)'
                   }} />
              
              {/* Accent flare on the right */}
              <div className="absolute bottom-0 right-[15%] w-64 h-56"
                   style={{
                     background: 'radial-gradient(circle at 80% 100%, rgba(255, 188, 32, 0.7) 0%, transparent 50%)',
                     filter: 'blur(45px)',
                     transform: 'rotate(-10deg)'
                   }} />
              
              {/* Flickering campfire effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 animate-pulse"
                   style={{
                     background: 'linear-gradient(to top, rgba(235, 125, 1, 0.4) 0%, transparent 100%)',
                     filter: 'blur(20px)',
                     animation: 'pulse 4s ease-in-out infinite'
                   }} />
            </div>
          </div>
          
          {/* Hero Content - Pushed up closer to navbar */}
          <div className="relative z-10 px-md pt-[50px] pb-[200px] text-center">
            <div className="container mx-auto max-w-4xl space-y-lg">
              <h1 className="font-rajdhani text-6xl md:text-7xl lg:text-8xl font-bold text-dark-chocolate">
                THE BOISE
                <span className="block text-5xl md:text-6xl lg:text-7xl font-light">GUN CLUB</span>
              </h1>
              <p className="text-xl md:text-2xl font-noto-sans text-dark-chocolate/80 font-light tracking-wider uppercase">
                A Treasure Valley Collective
              </p>
              <p className="text-lg md:text-xl text-dark-chocolate/70 max-w-2xl mx-auto">
                Your central hub for all things firearms in the Treasure Valley. 
                Connect with local shops, ranges, and trainers.
              </p>
              <div className="pt-lg flex flex-col sm:flex-row gap-sm justify-center">
                <button className="px-xl py-sm bg-dark-chocolate text-crisp-off-white font-rajdhani text-lg font-semibold rounded-xs hover:bg-dark-chocolate/90 transition-all shadow-elevated hover:shadow-prominent transform hover:-translate-y-0.5">
                  EXPLORE DIRECTORY
                </button>
                <button className="px-xl py-sm bg-crisp-off-white/90 text-dark-chocolate font-rajdhani text-lg font-semibold rounded-xs hover:bg-crisp-off-white transition-all shadow-elevated hover:shadow-prominent transform hover:-translate-y-0.5">
                  UPCOMING EVENTS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Rounded Overlap - Creating the "n" shape */}
        <div className="relative -mt-32 z-20">
          {/* Container wrapper for centering */}
          <div className="container mx-auto max-w-site px-md lg:px-0 relative">
            {/* Rounded Content Container - max-width with responsive behavior */}
            <div className="bg-[#F9FAFB] dark:bg-[#1a0f0d] rounded-t-none lg:rounded-t-md relative">
              {/* Solid background fill for the overhang area */}
              <div className="absolute inset-0 bg-[#F9FAFB] dark:bg-[#1a0f0d] rounded-t-none lg:rounded-t-md" />
              
              {/* Piano Key Navigation - At TOP of overhang */}
              <div className="relative z-10 -mt-8">
                <div className="px-md lg:px-lg py-md">
                  <div className="grid grid-cols-6 gap-xs w-full">
                    <button className="piano-key piano-key-events">
                      <div className="flex flex-col items-center gap-xs">
                        <Ticket className="w-5 h-5" weight="bold" />
                        <span className="piano-text piano-text-events">EVENTS</span>
                      </div>
                    </button>
                    <button className="piano-key piano-key-directory">
                      <div className="flex flex-col items-center gap-xs">
                        <AddressBook className="w-5 h-5" weight="bold" />
                        <span className="piano-text piano-text-directory">DIRECTORY</span>
                      </div>
                    </button>
                    <button className="piano-key piano-key-armory">
                      <div className="flex flex-col items-center gap-xs">
                        <Shield className="w-5 h-5" weight="bold" />
                        <span className="piano-text piano-text-armory">ARMORY</span>
                      </div>
                    </button>
                    <button className="piano-key piano-key-intel">
                      <div className="flex flex-col items-center gap-xs">
                        <MapTrifold className="w-5 h-5" weight="bold" />
                        <span className="piano-text piano-text-intel">INTEL</span>
                      </div>
                    </button>
                    <button className="piano-key piano-key-marketplace">
                      <div className="flex flex-col items-center gap-xs">
                        <Storefront className="w-5 h-5" weight="bold" />
                        <span className="piano-text piano-text-marketplace">MARKETPLACE</span>
                      </div>
                    </button>
                    <button className="piano-key piano-key-forums">
                      <div className="flex flex-col items-center gap-xs">
                        <UsersIcon className="w-5 h-5" weight="bold" />
                        <span className="piano-text piano-text-forums">FORUMS</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content sections below navigation */}
              <div className="relative z-10 pt-lg">

                {/* 4. Platform Blueprint Section */}
                <section className="py-xl lg:py-2xl bg-gradient-to-b from-transparent via-card-surface/30 to-transparent">
                  <div className="px-md lg:px-xl space-y-2xl">
                    <div className="text-center">
                      <h2 className="font-rajdhani text-4xl font-bold">The Platform Blueprint</h2>
                      <p className="text-body-lg text-muted-foreground mt-sm">The core features that power our community.</p>
                    </div>
                    <AlternatingFeatureSpotlight {...directoryData} />
                    <AlternatingFeatureSpotlight {...calendarData} reverse={true} />
                    <AlternatingFeatureSpotlight {...communityData} />
                  </div>
                </section>

                {/* 5. Brand Carousel Section */}
                <section className="py-xl lg:py-2xl">
                  <div className="px-md lg:px-xl">
                    <BrandCarousel variant="launch-phase" />
                  </div>
                </section>

                {/* 6. Business Context Section */}
                <section className="py-xl lg:py-2xl bg-gradient-to-b from-transparent via-page-primary/5 to-transparent">
                  <div className="px-md lg:px-xl">
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
      <SiteFooter />
    </div>
  );
}