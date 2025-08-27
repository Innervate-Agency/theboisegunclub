import React from 'react';
import { BoltIcon, Cog6ToothIcon, CursorArrowRaysIcon, ShieldCheckIcon, Cog6ToothIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline';

export const defaultShowcases = [
  {
    companyName: "GLOCK",
    logo: "GLOCK" as React.ReactNode,
    stats: [
      { label: "Models available", value: "50+" },
      { label: "Law enforcement agencies", value: "2,500+" },
      { label: "Years of innovation", value: "35" },
      { label: "Countries served", value: "100+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Glock became the world's most trusted handgun",
    overlayDescription: "Austrian engineering meets American excellence",
    gradientColor: 'blue' as const,
    productsUsed: [
      { name: "Striker-fired pistols", icon: <CursorArrowRaysIcon className="icon-xs" />, color: "bg-slate-blue" }
    ]
  },
  {
    companyName: "SMITH & WESSON",
    logo: "S&W" as React.ReactNode,
    stats: [
      { label: "Years in business", value: "170+" },
      { label: "Revolvers produced", value: "15M+" },
      { label: "Police departments", value: "3,000+" },
      { label: "Military contracts", value: "50+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Smith & Wesson defined American firearms",
    overlayDescription: "From the Wild West to modern law enforcement",
    gradientColor: 'teal' as const,
    productsUsed: [
      { name: "Revolvers & Pistols", icon: <ShieldCheckIcon className="icon-xs" />, color: "bg-ayu-teal" }
    ]
  },
  {
    companyName: "RUGER",
    logo: "RUGER" as React.ReactNode,
    stats: [
      { label: "Firearms produced", value: "20M+" },
      { label: "Years of innovation", value: "75" },
      { label: "Product lines", value: "12" },
      { label: "Patents held", value: "400+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Ruger built America's favorite sporting arms",
    overlayDescription: "Precision engineering for hunters and sport shooters",
    gradientColor: 'green' as const,
    productsUsed: [
      { name: "Sporting rifles", icon: <TrophyIcon className="icon-xs" />, color: "bg-ayu-green" }
    ]
  },
  {
    companyName: "DANIEL DEFENSE",
    logo: "DD" as React.ReactNode,
    stats: [
      { label: "Military contracts", value: "25+" },
      { label: "Quality certifications", value: "100%" },
      { label: "Years serving military", value: "20" },
      { label: "Rail systems deployed", value: "500K+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Daniel Defense redefined tactical excellence",
    overlayDescription: "Military-grade precision for professional users",
    gradientColor: 'purple' as const,
    productsUsed: [
      { name: "Tactical systems", icon: <Cog6ToothIcon className="icon-xs" />, color: "bg-ayu-purple" }
    ]
  },
  {
    companyName: "LEUPOLD",
    logo: "LEUPOLD" as React.ReactNode,
    stats: [
      { label: "Scopes calibrated", value: "10M+" },
      { label: "Precision records", value: "3,000yd+" },
      { label: "Competition wins", value: "500+" },
      { label: "Long-range specialists", value: "150+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how Leupold became the precision optics leader",
    overlayDescription: "Oregon-made optics for the world's best shooters",
    gradientColor: 'red' as const,
    productsUsed: [
      { name: "Precision optics", icon: <BoltIcon className="icon-xs" />, color: "bg-ayu-red" }
    ]
  },
  {
    companyName: "SIG SAUER",
    logo: "SIG" as React.ReactNode,
    stats: [
      { label: "Military adoptions", value: "40+" },
      { label: "Law enforcement", value: "8,000+" },
      { label: "Years of excellence", value: "160" },
      { label: "Innovation awards", value: "100+" }
    ],
    heroImage: "/images/ranges/mountain-range.jpg",
    overlayTitle: "See how SIG Sauer earned global military trust",
    overlayDescription: "Swiss precision engineering for critical missions",
    gradientColor: 'yellow' as const,
    productsUsed: [
      { name: "Military systems", icon: <UsersIcon className="icon-xs" />, color: "bg-ayu-yellow" }
    ]
  }
]

export const defaultPartnerLogos = [
  { name: "Glock", icon: CursorArrowRaysIcon, gradientColor: 'blue' as const },
  { name: "Smith & Wesson", icon: ShieldCheckIcon, gradientColor: 'teal' as const },
  { name: "Ruger", icon: Award, gradientColor: 'green' as const },
  { name: "Daniel Defense", icon: Settings, gradientColor: 'purple' as const },
  { name: "Leupold", icon: Zap, gradientColor: 'red' as const },
  { name: "Sig Sauer", icon: UsersIcon, gradientColor: 'yellow' as const }
]
