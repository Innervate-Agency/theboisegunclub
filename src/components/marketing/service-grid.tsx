"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Calendar, ShoppingCart, Users, Info, Building } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Find Local Experts",
    description: "Directory of gun shops, ranges, gunsmiths, and instructors across Treasure Valley",
    borderColor: "border-l-scope-blue",
    accentColor: "scope-blue"
  },
  {
    icon: Calendar,
    title: "Unified Events",
    description: "Comprehensive calendar of competitions, training, and community gatherings",
    borderColor: "border-l-brass-yellow",
    accentColor: "brass-yellow"
  },
  {
    icon: ShoppingCart,
    title: "Service Marketplace",
    description: "Book range time, training sessions, and services from local businesses",
    borderColor: "border-l-copper-orange",
    accentColor: "copper-orange"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect and discuss with fellow enthusiasts across Treasure Valley",
    borderColor: "border-l-rifling-green",
    accentColor: "rifling-green"
  },
  {
    icon: Info,
    title: "Content Engine",
    description: "Educational resources, news, and safety information for the community",
    borderColor: "border-l-walnut-stock",
    accentColor: "walnut-stock"
  },
  {
    icon: Building,
    title: "Brand & Apparel",
    description: "Official club merchandise and branded apparel for members",
    borderColor: "border-l-case-hardened",
    accentColor: "case-hardened"
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
            >
              <div className="flex flex-col items-start text-left h-full">
                {/* Icon with subtle background and proper spacing */}
                <div className={`mb-4 p-3 rounded-lg bg-range-white border border-case-hardened/10 transition-stripe-fast group-hover:bg-${service.accentColor}/5 group-hover:border-${service.accentColor}/20`}>
                  <service.icon className={`h-6 w-6 text-blued-steel transition-stripe-fast group-hover:text-${service.accentColor}`} />
                </div>
                
                {/* Title with proper hierarchy and hover color */}
                <h3 className={`font-noto-sans text-lg font-semibold text-blued-steel mb-3 leading-tight transition-stripe-fast group-hover:text-${service.accentColor}`}>
                  {service.title}
                </h3>
                
                {/* Description with proper text treatment */}
                <p className="font-noto-sans text-sm text-case-hardened leading-relaxed mb-6 flex-1">
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
