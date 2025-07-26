import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-16 bg-range-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <Card className="bg-card shadow-md border border-case-hardened/20 p-8 mb-12">
            <h2 className="font-rajdhani text-3xl md:text-4xl font-bold text-gunmetal-black mb-6">
              Get Notified When We Launch
            </h2>
            <p className="font-noto-sans text-lg text-case-hardened leading-relaxed mb-8 max-w-2xl mx-auto">
              Be the first to experience Treasure Valley's comprehensive firearms platform. 
              Join our community of enthusiasts, professionals, and businesses.
            </p>
            <Button 
              variant="accented"
              size="xl"
              className="font-semibold"
            >
              Notify Me
            </Button>
          </Card>
          
          {/* Vision statement */}
          <div className="space-y-6 font-noto-sans text-base text-case-hardened leading-relaxed max-w-3xl mx-auto">
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
