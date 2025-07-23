import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-16 bg-range-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA with exact styling from current site */}
          <div className="text-center mb-16">
            <Button 
              className="
                bg-brass-yellow 
                text-gunmetal-black 
                hover:bg-copper-orange 
                shadow-premium 
                hover:shadow-elite 
                transition-stripe-fast 
                hover:scale-[1.02]
                active:scale-[0.98]
                px-8 
                py-4 
                text-lg 
                font-semibold
                animate-pulse-premium
                relative
                overflow-hidden
              "
              style={{
                background: 'var(--gradient-premium)',
                boxShadow: 'var(--shadow-premium)',
                transition: 'var(--timing-fast) var(--ease-stripe)'
              }}
            >
              {/* Subtle shimmer effect overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none animate-shimmer"
                style={{ 
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  backgroundSize: '200% 100%'
                }}
              />
              <span className="relative z-10">Join the Family</span>
            </Button>
          </div>
          
          {/* Two-column content section with enhanced styling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - The Vision */}
            <div className="text-left">
              <h2 className="font-rajdhani text-3xl md:text-4xl font-bold text-gunmetal-black mb-6">
                The Vision
              </h2>
              <div className="space-y-4 font-noto-sans text-base text-case-hardened leading-relaxed">
                <p>
                  The Boise Gun Club is transforming the Treasure Valley by 
                  creating the region&apos;s most comprehensive firearms platform. 
                  Building bridges between clubs, ranges, shops, and enthusiasts 
                  through innovative digital solutions.
                </p>
                <p>
                  Our partnership with local experts allows us to provide accurate, 
                  up-to-date information while fostering an environment of learning, 
                  safety, and community growth for firearms enthusiasts at every level.
                </p>
                <p>
                  Join our community today and become part of an ecosystem that 
                  celebrates responsible firearms ownership, promotes safety education, 
                  and strengthens our collective commitment to excellence.
                </p>
              </div>
            </div>
            
            {/* Right column - Enhanced signup card */}
            <Card 
              className="bg-shooting-bench shadow-sm border border-case-hardened/10 p-6 hover:shadow-md transition-stripe-fast"
              style={{
                background: 'var(--card-bg-light, #fffffff2)',
                boxShadow: 'var(--card-shadow-default)'
              }}
            >
              <div className="text-left">
                <h3 className="font-noto-sans text-xl font-semibold text-blued-steel mb-4">
                  Get Notified When We Launch
                </h3>
                <p className="font-noto-sans text-sm text-case-hardened leading-relaxed mb-6">
                  Be the first to know when our comprehensive platform goes live. 
                  Join our early access list for exclusive updates and launch benefits.
                </p>
                <Button 
                  className="
                    w-full 
                    bg-brass-yellow 
                    text-gunmetal-black 
                    hover:bg-copper-orange 
                    shadow-sm 
                    hover:shadow-premium 
                    transition-stripe-fast
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    font-medium
                  "
                  style={{
                    transition: 'var(--timing-fast) var(--ease-stripe)'
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Bottom section with complex glassmorphism effects */}
          <div 
            className="relative mt-16 p-8 rounded-lg border transition-stripe-fast hover:border-brass-yellow/40"
            style={{
              background: 'var(--mica-glass-bg, rgba(255, 255, 255, 0.9))',
              backdropFilter: 'var(--mica-blur-subtle, blur(16px) saturate(1.1))',
              border: 'var(--mica-border-subtle, 1px solid rgba(255, 255, 255, 0.3))',
              boxShadow: 'var(--mica-glass-light, rgba(255, 255, 255, 0.7) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.05) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 8px 16px 0px)'
            }}
          >
            {/* Subtle noise texture */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none rounded-lg"
              style={{ backgroundImage: 'var(--noise-fine)' }}
            />
            
            <div className="text-center relative z-10">
              <h3 className="font-rajdhani text-2xl font-bold text-gunmetal-black mb-4">
                THE BOISE GUN CLUB
              </h3>
              <p className="font-serif text-lg italic text-case-hardened/90 mb-6">
                Established 1965 • Serving the Treasure Valley Firearms Community
              </p>
              
              {/* Feature highlights with color-coded dots */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-noto-sans text-case-hardened">
                <div className="flex items-center justify-center space-x-2 transition-stripe-fast hover:text-scope-blue">
                  <div className="w-3 h-3 bg-scope-blue rounded-full shadow-sm transition-stripe-fast hover:scale-110"></div>
                  <span>Professional Instruction</span>
                </div>
                <div className="flex items-center justify-center space-x-2 transition-stripe-fast hover:text-rifling-green">
                  <div className="w-3 h-3 bg-rifling-green rounded-full shadow-sm transition-stripe-fast hover:scale-110"></div>
                  <span>Safety First Approach</span>
                </div>
                <div className="flex items-center justify-center space-x-2 transition-stripe-fast hover:text-copper-orange">
                  <div className="w-3 h-3 bg-copper-orange rounded-full shadow-sm transition-stripe-fast hover:scale-110"></div>
                  <span>Community Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}