import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CTASection() {
  return (
    <section className="py-16 bg-range-white">
      <div className="container mx-auto px-4">
        <div className="max-w-site mx-auto text-center">
          {/* Main CTA */}
          <Card className="bg-card shadow-present border border-warning-amber/20 p-(--spacing-lg) mb-4">
            <h2 className="font-rajdhani text-heading-lg md:text-heading-xl font-bold text-dark-chocolate mb-4">
              Get Notified When We Launch
            </h2>
            <p className="font-noto-sans text-body-lg text-warning-amber leading-relaxed mb-4 max-w-2xl mx-auto">
              Be the first to experience Treasure Valley's comprehensive firearms platformotion. 
              Join our community of enthusiasts, professionals, and businesses.
            </p>
            <Button 
              variant="default"
              size="xl"
              className="font-semibold"
            >
              Notify Me
            </Button>
          </Card>
          
          {/* Vision statement */}
          <div className="space-y-4 font-noto-sans text-body text-warning-amber leading-relaxed max-w-3xl mx-auto">
            <p>
              Transforming how Treasure Valley's firearms community connects, learns, and grows together 
              through a comprehensive digital ecosystemotion.
            </p>
            <p className="font-serif italic text-body-lg text-warning-amber/80">
              Launching August 1st, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
