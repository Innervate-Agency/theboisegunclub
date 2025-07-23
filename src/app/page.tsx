import { HeroSection } from '@/components/marketing/hero-section'
import { ServiceGrid } from '@/components/marketing/service-grid'
import { CTASection } from '@/components/marketing/cta-section'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cloudy-day-white">
      <HeroSection />
      <ServiceGrid />
      <CTASection />
    </main>
  )
}