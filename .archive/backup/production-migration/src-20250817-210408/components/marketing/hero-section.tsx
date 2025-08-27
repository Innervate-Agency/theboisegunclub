export function HeroSection() {
  return (
    <section className="relative py-(--spacing-4xl) bg-range-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero-warm opacity-80" />
      
      <div className="container mx-auto px-(--spacing-sm) text-center relative z-10">
        {/* Coming Soon banner */}
        <div className="inline-block bg-sandy-ochre text-dark-chocolate px-md py-xs rounded-full font-noto-sans text-body-sm font-semibold mb-2xl shadow-whisper">
          Coming Soon
        </div>
        
        {/* Main brand title with exact weight variations */}
        <h1 className="font-rajdhani text-6xl md:text-8xl mb-xs tracking-tight">
          <span className="font-black text-dark-chocolate">THE BOISE</span>
          <br />
          <span className="font-light text-warning-amber">GUN CLUB</span>
        </h1>
        
        {/* Editorial subtitle with Noto Serif */}
        <p className="font-noto-serif text-xl italic text-warning-amber/90 mb-base max-w-site mx-auto">
          Treasure Valley's Comprehensive Firearms Community Platform
        </p>
        
        {/* Value proposition */}
        <p className="font-noto-sans text-lg text-warning-amber leading-relaxed mb-xl max-w-site mx-auto">
          The digital hub uniting ALL Treasure Valley firearms communities. Featuring unified events calendar, comprehensive business directory, community forum, and connecting enthusiasts, families, and professionals across Idaho's premier firearms region.
        </p>
      </div>
    </section>
  )
}
