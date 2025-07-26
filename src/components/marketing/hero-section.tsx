export function HeroSection() {
  return (
    <section className="relative py-16 bg-range-white overflow-hidden">
      <div className="absolute inset-0 opacity-60 mica-premium" />
      <div className="absolute inset-0 opacity-40 mica-elite" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Launch banner with pulse animation */}
        <div className="inline-block bg-brass-yellow text-gunmetal-black px-6 py-2 rounded-full font-noto-sans text-sm font-semibold mb-8 shadow-premium">
          Launching August 1st, 2025
        </div>
        
        {/* Main brand title with exact weight variations */}
        <h1 className="font-rajdhani text-6xl md:text-8xl mb-2 tracking-tight">
          <span className="font-black text-gunmetal-black">THE BOISE</span>
          <br />
          <span className="font-light text-case-hardened">GUN CLUB</span>
        </h1>
        
        {/* Editorial subtitle with Noto Serif */}
        <p className="font-serif text-xl md:text-2xl italic text-case-hardened/90 mb-12 max-w-4xl mx-auto">
          A Treasure Valley Firearm & Firearm Sport Collective
        </p>
      </div>
    </section>
  )
}
