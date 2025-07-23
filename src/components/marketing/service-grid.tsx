"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Calendar, ShoppingCart, Users, Info, Building } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Find Local Experts",
    description: "Discover top gun shops, ranges, gunsmiths, and instructors across Treasure Valley",
    borderColor: "border-l-scope-blue",
    accentColor: "scope-blue",
    buttonVariant: "outline" as const
  },
  {
    icon: Calendar,
    title: "Never Miss Out",
    description: "Unified event calendar showcasing competitions, training, and community gatherings",
    borderColor: "border-l-brass-yellow",
    accentColor: "brass-yellow",
    buttonVariant: "premium" as const
  },
  {
    icon: ShoppingCart,
    title: "Book & Buy",
    description: "Reserve range time, book training sessions, and shop from local firearms businesses",
    borderColor: "border-l-copper-orange",
    accentColor: "copper-orange",
    buttonVariant: "outline" as const
  },
  {
    icon: Users,
    title: "Connect & Share",
    description: "Join discussions with fellow enthusiasts across all Treasure Valley shooting communities",
    borderColor: "border-l-scope-blue",
    accentColor: "scope-blue",
    buttonVariant: "outline" as const
  },
  {
    icon: Info,
    title: "Stay Informed",
    description: "Latest news, safety updates, regulation changes, and community announcements",
    borderColor: "border-l-brass-yellow",
    accentColor: "brass-yellow",
    buttonVariant: "premium" as const
  },
  {
    icon: Building,
    title: "Build The Brand",
    description: "List your business, promote events, and connect with the regional firearms community",
    borderColor: "border-l-copper-orange",
    accentColor: "copper-orange",
    buttonVariant: "outline" as const
  }
]

export function ServiceGrid() {
  return (
    <section className="py-16 bg-range-white">
      <div className="container mx-auto px-4">
        {/* Service cards in 3x2 grid exactly matching screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`
                bg-shooting-bench 
                shadow-sm 
                hover:shadow-md 
                transition-stripe-fast 
                p-6 
                ${service.borderColor} 
                border-l-4
                hover:-translate-y-0.5
                group
                cursor-pointer
              `}
              style={{
                background: 'var(--card-bg-light, #fffffff2)',
                boxShadow: 'var(--card-shadow-default)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--card-shadow-default)'
              }}
            >
              <div className="flex flex-col items-start text-left h-full">
                {/* Icon with subtle background and proper spacing */}
                <div className={`mb-4 p-3 rounded-lg bg-range-white border border-case-hardened/10 transition-stripe-fast group-hover:bg-${service.accentColor}/5 group-hover:border-${service.accentColor}/20`}>
                  <service.icon className={`h-6 w-6 text-blued-steel transition-stripetransition-stripe-fast group-hover:text-${service.accentColor}`} />
                </div>
                
                {/* Title with proper hierarchy and hover color */}
                <h3 className={`font-noto-sans text-lg font-semibold text-blued-steel mb-3 leading-tight transition-stripe-fast group-hover:text-${service.accentColor}`}>
                  {service.title}
                </h3>
                
                {/* Description with proper text treatment */}
                <p className="font-noto-sans text-sm text-case-hardened leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                
                {/* Button with proper variants and micro-interactions */}
                <Button 
                  variant={service.buttonVariant}
                  size="sm" 
                  className="text-xs font-medium transition-stripe-fast hover:scale-[1.02] active:scale-[0.98]"
                >
                  {service.buttonVariant === "premium" ? "Get Started" : "Learn More"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}