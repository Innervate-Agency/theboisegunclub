'use client'

import React from 'react'
import Link from 'next/link'
import { BuildingStorefrontIcon, ChatBubbleBottomCenterTextIcon, MapIcon, MapPinIcon, ShieldCheckIcon, TicketIcon } from '@heroicons/react/24/outline';

interface FooterNavigationProps {
  className?: string
}

const navigationLinks = [
  {
    href: '/events',
    icon: TicketIcon,
    title: 'Events',
    description: 'Competitions & Training',
    theme: 'events'
  },
  {
    href: '/directory',
    icon: Directory,
    title: 'Directory',
    description: 'Local Dealers & Services',
    theme: 'directory'
  },
  {
    href: '/armory',
    icon: ShieldCheckIcon,
    title: 'The Armory',
    description: 'Equipment & Reviews',
    theme: 'armory'
  },
  {
    href: '/intel',
    icon: Map,
    title: 'Intel',
    description: 'Range Conditions & Weather',
    theme: 'intel'
  },
  {
    href: '/marketplace',
    icon: BuildingStorefrontIcon,
    title: 'Marketplace',
    description: 'Buy & Sell Gear',
    theme: 'marketplace'
  },
  {
    href: '/forums',
    icon: UsersIcon,
    title: 'Forums',
    description: 'Community Discussion',
    theme: 'forums'
  }
]

export function FooterNavigation({ className }: FooterNavigationProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
        Explore Our Community
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {navigationLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-3 p-3 rounded-sm border border-nav-${link.theme}/20 hover:border-nav-${link.theme}/40 transition-colors hover:bg-nav-${link.theme}/5`}
            >
              <div className={`p-2 rounded-sm bg-nav-${link.theme}/20 group-hover:bg-nav-${link.theme}/30 transition-colors`}>
                <Icon className={`h-4 w-4 text-nav-${link.theme}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-rajdhani font-bold text-sm text-nav-${link.theme} group-hover:text-nav-${link.theme}/80 transition-colors`}>
                  {link.title}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {link.description}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}