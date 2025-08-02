import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-[var(--space-2xl)] bg-range-white">
      <div className="container mx-auto px-[var(--space-base)]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <Card className="bg-card shadow-md border border-case-hardened/20 p-[var(--space-lg)] mb-[var(--space-xl)]">
            <h2 className="font-rajdhani text-3xl md:text-4xl font-bold text-gunmetal-black mb-[var(--space-md)]">
              Get Notified When We Launch
            </h2>
            <p className="font-noto-sans text-lg text-case-hardened leading-relaxed mb-[var(--space-lg)] max-w-2xl mx-auto">
              Be the first to experience Treasure Valley's comprehensive firearms platform. 
              Join our community of enthusiasts, professionals, and businesses.
            </p>
            <Button 
              variant="accent"
              size="xl"
              className="font-semibold"
            >
              Notify Me
            </Button>
          </Card>
          
          {/* Vision statement */}
          <div className="space-y-[var(--space-md)] font-noto-sans text-base text-case-hardened leading-relaxed max-w-3xl mx-auto">
            <p>
              Transforming how Treasure Valley's firearms community connects, learns, and grows together 
              through a comprehensive digital ecosystem.
            </p>
            <p className="font-serif italic text-lg text-case-hardened/80">
              Launching August 1st, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
