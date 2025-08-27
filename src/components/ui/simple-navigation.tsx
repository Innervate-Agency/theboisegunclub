'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { AuthButton } from '@/components/auth/auth-button'
import { useAuth } from '@/components/auth/auth-context'
import { BanknotesIcon, CubeTransparentIcon, IdentificationIcon, MapPinIcon, PlusCircleIcon, UsersIcon } from '@heroicons/react/24/outline';

const navigationVariants = cva(
  "w-full transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "mica-navbar shadow-whisper",
        premium: "mica-navbar shadow-present",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const navItems = [
  { name: 'Home', href: '/', icon: CubeTransparentIcon },
  { name: 'Events', href: '/events', icon: TicketIcon },
  { name: 'Directory', href: '/directory', icon: IdentificationIcon },
  { name: 'Training', href: '/training', icon: ShieldCheckIcon },
  { name: 'Intel', href: '/intel', icon: MapPinIcon },
  { name: 'Marketplace', href: '/buysell', icon: BanknotesIcon },
  { name: 'Community', href: '/forums', icon: UsersIcon },
]

export function SimpleNavigation() {
  const pathname = usePathname()
  const { user } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const getPageClass = () => {
    if (pathname === '/') return 'nav-home'
    if (pathname.startsWith('/events')) return 'nav-events'
    if (pathname.startsWith('/directory')) return 'nav-directory'
    if (pathname.startsWith('/training')) return 'nav-training'
    if (pathname.startsWith('/intel')) return 'nav-intel'
    if (pathname.startsWith('/buysell')) return 'nav-buysell'
    if (pathname.startsWith('/forums')) return 'nav-community'
    return 'nav-default'
  }

  return (
    <nav className={navigationVariants({ variant: "default" })}>
      <div className="container mx-auto px-lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-sm font-rajdhani font-bold text-xl text-card-foreground hover:text-rusty-orange transition-colors"
          >
            <SparklesIcon weight="bold" className="size-6 text-rusty-orange" />
            <span className="hidden sm:inline">The Boise Gun Club</span>
            <span className="sm:hidden">TBGC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-xs">
            {navItems.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              const Icon = item.icon
              
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "gap-xs font-rajdhani font-semibold transition-all duration-200",
                      isActive && `bg-${getPageClass()} text-white`
                    )}
                  >
                    <Icon weight="bold" className="size-4" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Auth Button */}
          <div className="flex items-center gap-sm">
            <AuthButton />
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <UsersIcon weight="bold" className="size-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-sm border-t border-border">
            <div className="flex flex-col gap-xs">
              {navItems.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
                const Icon = item.icon
                
                return (
                  <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start gap-xs font-rajdhani font-semibold",
                        isActive && `bg-${getPageClass()} text-white`
                      )}
                    >
                      <Icon weight="bold" className="size-4" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}