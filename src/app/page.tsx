import React from 'react';
import { Building2, Calendar, Share2, Target, Search, MessageSquare, ShieldCheck, List, Star, Users, Lock, Store } from 'lucide-react';

// Adjusted paths to match project structure
import { SiteNavigation } from '@/components/ui/site-navigation';
import { MegaHero } from '@/components/ui/mega-hero';
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
            </div>
          </div>
        </section>

        {/* 4. Platform Blueprint Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-site px-md space-y-2xl">
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
    </div>
  );
}