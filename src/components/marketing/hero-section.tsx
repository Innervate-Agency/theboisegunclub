// import { Button } from "@/components/ui/button" // Unused import

export function HeroSection() {
  return (
    <section className="relative py-16 bg-range-white overflow-hidden">
      {/* Complex background gradients matching current site */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ 
          background: 'var(--hero-splash-bg, radial-gradient(ellipse 800px 400px at 60% 40%, rgba(242, 203, 5, 0.08) 0%, transparent 70%), radial-gradient(ellipse 600px 300px at 45% 55%, rgba(242, 135, 5, 0.06) 0%, transparent 65%), radial-gradient(ellipse 400px 200px at 70% 30%, rgba(242, 48, 5, 0.04) 0%, transparent 60%))'
        }}
      />
      
      {/* Secondary ClickUp-style composite gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          background: 'var(--clickup-splash-composite, radial-gradient(circle at 15% 20%, rgba(242, 203, 5, 0.25) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(242, 135, 5, 0.20) 0%, transparent 45%), radial-gradient(circle at 40% 70%, rgba(81, 152, 205, 0.18) 0%, transparent 40%), radial-gradient(circle at 75% 80%, rgba(111, 120, 34, 0.15) 0%, transparent 35%), radial-gradient(circle at 20% 60%, rgba(227, 192, 60, 0.12) 0%, transparent 30%))'
        }}
      />
      
      {/* Fine noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'var(--noise-fine)' }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Launch banner with pulse animation */}
        <div className="inline-block bg-brass-yellow text-gunmetal-black px-6 py-2 rounded-full font-noto-sans text-sm font-semibold mb-8 shadow-premium animate-pulse-premium">
          Launching August 1st, 2025
        </div>
        
        {/* Main brand title with exact weight variations */}
        <h1 className="font-rajdhani text-6xl md:text-8xl mb-2 tracking-tight">
          <span className="font-black text-gunmetal-black">THE BOISE</span>
          <br />
          <span className="font-light text-case-hardened">GUN CLUB</span>
        </h1>
        
        {/* Editorial subtitle with Noto Serif */}
        <p className="font-serif text-xl md:text-2xl italic text-case-hardened/90 mb-6 max-w-4xl mx-auto">
          A Treasure Valley Firearm & Firearm Sport Collective
        </p>
        
        {/* Body description with proper line height and spacing */}
        <p className="font-noto-sans text-base md:text-lg text-case-hardened leading-relaxed max-w-4xl mx-auto mb-12" style={{ lineHeight: 'var(--leading-relaxed, 1.625)' }}>
          Your comprehensive digital hub uniting ALL Treasure Valley firearms communities.
          <br />
          Featuring every club, event, all regional businesses, and connecting enthusiasts,
          <br />
          families, and professionals across our premier firearms region.
        </p>
        
        {/* Stats grid with brand color accents */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="font-rajdhani text-4xl md:text-5xl font-bold text-brass-yellow mb-2 transition-stripe-fast hover:scale-110">
              50+
            </div>
            <div className="font-noto-sans text-sm text-case-hardened">Local Businesses</div>
          </div>
          <div className="text-center">
            <div className="font-rajdhani text-4xl md:text-5xl font-bold text-copper-orange mb-2 transition-stripe-fast hover:scale-110">
              12
            </div>
            <div className="font-noto-sans text-sm text-case-hardened">Shooting Ranges</div>
          </div>
          <div className="text-center">
            <div className="font-rajdhani text-4xl md:text-5xl font-bold text-scope-blue mb-2 transition-stripe-fast hover:scale-110">
              8
            </div>
            <div className="font-noto-sans text-sm text-case-hardened">Gun Clubs</div>
          </div>
          <div className="text-center">
            <div className="font-rajdhani text-4xl md:text-5xl font-bold text-rifling-green mb-2 transition-stripe-fast hover:scale-110">
              1000+
            </div>
            <div className="font-noto-sans text-sm text-case-hardened">Community Members</div>
          </div>
        </div>
      </div>
    </section>
  )
}