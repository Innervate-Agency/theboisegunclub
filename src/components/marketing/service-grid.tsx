"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Calendar, ShoppingCart, Users, Info, Building } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Find Local Experts",
    description: "Directory of gun shops, ranges, gunsmiths, and instructors across Treasure Valley",
    borderColor: "border-l-scope-blue"
  },
  {
    icon: Calendar,
    title: "Unified Events",
    description: "Comprehensive calendar of competitions, training, and community gatherings",
    borderColor: "border-l-sandy-ochre"
  },
  {
    icon: ShoppingCart,
    title: "Service Marketplace",
    description: "Book range time, training sessions, and services from local businesses",
    borderColor: "border-l-rusty-orange"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect and discuss with fellow enthusiasts across Treasure Valley",
    borderColor: "border-l-rifling-green"
  },
  {
    icon: Info,
    title: "Content Engine",
    description: "Educational resources, news, and safety information for the community",
    borderColor: "border-l-walnut-stock"
  },
  {
    icon: Building,
    title: "Brand & Apparel",
    description: "Official club merchandise and branded apparel for members",
    borderColor: "border-l-warning-amber"
  }
]

export function ServiceGrid() {
  return (
    <section className="py-16 bg-range-white">
      <div className="container mx-auto px-4">
        {/* Service cards in 3x2 grid exactly matching screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md max-w-site mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`
                bg-card-surface 
                shadow-flat 
                hover:shadow-present 
                transition-stripe-fast 
                p-md 
                ${service.borderColor} 
                border-l-4
                
                group
                cursor-pointer
              `}
            >
              <div className="flex flex-col items-start text-left h-full">
                {/* Icon with subtle background and proper spacing */}
                <div className="mb-4 p-(--spacing-sm) rounded-sm bg-range-white border border-warning-amber/10 transition-stripe-fast group-hover:bg-rusty-orange/5 group-hover:border-rusty-orange/20">
                  <service.icon className="h-6 w-6 text-foreground transition-stripe-fast group-hover:text-rusty-orange" />
                </div>
                
                {/* Title with proper hierarchy and hover color */}
                <h3 className="font-noto-sans text-body-lg font-semibold text-foreground mb-4 leading-tight transition-stripe-fast group-hover:text-rusty-orange">
                  {service.title}
                </h3>
                
                {/* Description with proper text treatment */}
                <p className="font-noto-sans text-body-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
