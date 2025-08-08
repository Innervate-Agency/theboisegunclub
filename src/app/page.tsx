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

// Mock Data for StatCards
const statCardsData = [
  {
    icon: <Building2 />,
    value: '100+',
    label: 'Local Vendors',
    variant: 'default',
  },
  {
    icon: <Calendar />,
    value: '50+',
    label: 'Community Events',
    variant: 'default',
  },
  {
    icon: <Share2 />,
    value: '1,200+',
    label: 'Active Members',
    variant: 'default',
  },
  {
    icon: <Target />,
    value: '24/7',
    label: 'Community Support',
    variant: 'default',
  },
];

const directoryData = {
  icon: <Search />,
  title: "The Last Directory You'll Ever Need",
  description: "A complete, verified, and always up-to-date directory of every FFL, range, and trainer in the Treasure Valley. Find exactly what you need, instantly.",
  features: [
    { icon: <ShieldCheck />,
 text: '117+ Verified Local Businesses' },
    { icon: <List />,
 text: 'Real-time Inventory & Service Updates' },
    { icon: <Star />,
 text: 'Community-Driven Reviews & Ratings' },
  ],
  imageSrc: '/images/Fractal/1.webp',
  imageAlt: 'Abstract fractal image representing a network.',
  glowColor1: '#3F6331',
  glowColor2: '#FF00FF',
  accentColor: '#3F6331',
};

const calendarData = {
  icon: <Calendar />,
  title: 'One Calendar to Rule Them All',
  description: "We're consolidating every match, class, and event from every local club into one master calendar. Stop searching, start participating.",
  features: [
    { icon: <Users />,
 text: 'Unified View of All Local Clubs' },
    { icon: <List />,
 text: 'Smart Scheduling to Avoid Conflicts' },
    { icon: <Star />,
 text: 'Direct Registration & Reminders' },
  ],
  imageSrc: '/images/Fractal/2.webp',
  imageAlt: 'Abstract fractal image representing a timeline.',
  glowColor1: '#FF00FF',
  glowColor2: '#75B700',
  accentColor: '#FF00FF',
};

const communityData = {
  icon: <MessageSquare />,
  title: 'Built for Us, by Us',
  description: "A secure, private, and Idaho-focused space for discussion, trading, and connecting with fellow enthusiasts. No more Facebook bullshit.",
  features: [
    { icon: <Lock />,
 text: 'Secure, Private Discussion Forums' },
    { icon: <Store />,
 text: 'Verified Member Marketplace' },
    { icon: <Star />,
 text: 'Idaho-Specific Legal & News Updates' },
  ],
  imageSrc: '/images/Fractal/3.webp',
  imageAlt: 'Abstract fractal image representing connections.',
  glowColor1: '#FF00FF',
  glowColor2: '#FF3B49',
  accentColor: '#FF00FF',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Site Navigation */}
      <SiteNavigation variant="premium" />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section>
          <MegaHero
            variant="default"
            title="The Boise Gun Club"
            subtitle="A Treasure Valley Collective"
            description="Your central hub for all things firearms in the Treasure Valley. Connect with local shops, ranges, and trainers."
          />
        </section>

        {/* 3. Stat Cards Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-6xl px-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statCardsData.map((card, index) => (
                <StatCard
                  key={index}
                  icon={card.icon}
                  label={card.label}
                  value={card.value}
                  variant={card.variant as any}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Platform Blueprint Section */}
        <section className="py-xl lg:py-2xl">
          <div className="container mx-auto max-w-6xl px-md space-y-2xl">
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
          <div className="container mx-auto max-w-6xl px-md">
            <BrandCarousel variant="launch-phase" />
          </div>
        </section>

        {/* 6. Business Context Section */}
        <section className="py-xl lg:py-2xl bg-muted">
          <div className="container mx-auto max-w-6xl px-md">
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
          <div className="container mx-auto max-w-6xl px-md">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* 8. Site Footer */}
      <SiteFooter />
    </div>
  );
}