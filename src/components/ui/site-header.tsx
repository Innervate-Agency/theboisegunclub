'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { 
  Calendar, 
  Building2, 
  BookOpen, 
  MapPin, 
  ShoppingCart, 
  Users, 
  LogIn,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-site px-md">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-base">
            <Link href="/" className="flex items-center gap-xs">
              <div className="h-8 w-8 rounded-sm bg-gradient-to-br from-sandy-ochre to-rusty-orange flex items-center justify-center">
                <span className="text-dark-chocolate font-rajdhani font-bold text-sm">TBG</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-rajdhani font-bold text-lg text-card-foreground">THE BOISE</span>
                <span className="font-rajdhani font-bold text-lg text-sandy-ochre ml-xs">GUN CLUB</span>
              </div>
            </Link>
            <Badge variant="outline" className="hidden md:block text-xs text-muted-foreground">
              Community Platform
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* Events */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-xs">
                  <Calendar className="h-4 w-4" />
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-base p-lg w-[400px]">
                    <div className="space-y-xs">
                      <h4 className="font-rajdhani font-bold text-card-foreground">Upcoming Events</h4>
                      <p className="text-sm text-muted-foreground">Competitions, training, and community events</p>
                    </div>
                    <div className="grid gap-xs">
                      <NavigationMenuLink href="/events" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">All Events</div>
                        <p className="text-xs text-muted-foreground">Browse all upcoming events</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/events?category=competition" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Competitions</div>
                        <p className="text-xs text-muted-foreground">USPSA, IDPA, and local matches</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/events?category=training" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Training Events</div>
                        <p className="text-xs text-muted-foreground">Education and skill development</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Directory */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-xs">
                  <Building2 className="h-4 w-4" />
                  Directory
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-base p-lg w-[400px]">
                    <div className="space-y-xs">
                      <h4 className="font-rajdhani font-bold text-card-foreground">Business Directory</h4>
                      <p className="text-sm text-muted-foreground">Local firearms businesses and services</p>
                    </div>
                    <div className="grid gap-xs">
                      <NavigationMenuLink href="/directory" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">All Businesses</div>
                        <p className="text-xs text-muted-foreground">Complete Treasure Valley directory</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/directory?type=dealer" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">FFL Dealers</div>
                        <p className="text-xs text-muted-foreground">Licensed firearms dealers</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/directory?type=range" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Shooting Ranges</div>
                        <p className="text-xs text-muted-foreground">Indoor and outdoor facilities</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Guides */}
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "gap-xs")} href="/guides">
                  <BookOpen className="h-4 w-4" />
                  Guides
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Map */}
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "gap-xs")} href="/map">
                  <MapPin className="h-4 w-4" />
                  Map
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Marketplace */}
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "gap-xs")} href="/marketplace">
                  <ShoppingCart className="h-4 w-4" />
                  Marketplace
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Community */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="gap-xs">
                  <Users className="h-4 w-4" />
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-base p-lg w-[300px]">
                    <div className="space-y-xs">
                      <h4 className="font-rajdhani font-bold text-card-foreground">Connect & Share</h4>
                      <p className="text-sm text-muted-foreground">Join the conversation</p>
                    </div>
                    <div className="grid gap-xs">
                      <NavigationMenuLink href="/forums" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Forums</div>
                        <p className="text-xs text-muted-foreground">Community discussions</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/about" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">About TBGC</div>
                        <p className="text-xs text-muted-foreground">Our mission and story</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/contact" className="block select-none rounded-sm p-base hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium">Contact Us</div>
                        <p className="text-xs text-muted-foreground">Get in touch</p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-base">
            <Button variant="outline" size="sm" className="hidden md:flex gap-xs">
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
            <Button size="sm" className="hidden md:block bg-gradient-to-r from-sandy-ochre to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-sandy-ochre font-rajdhani font-bold">
              Join TBGC
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-base border-t border-border/40">
            <nav className="space-y-base">
              <Link href="/events" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <Calendar className="h-4 w-4" />
                Events
              </Link>
              <Link href="/directory" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <Building2 className="h-4 w-4" />
                Directory
              </Link>
              <Link href="/guides" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <BookOpen className="h-4 w-4" />
                Guides
              </Link>
              <Link href="/map" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <MapPin className="h-4 w-4" />
                Map
              </Link>
              <Link href="/marketplace" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <ShoppingCart className="h-4 w-4" />
                Marketplace
              </Link>
              <Link href="/forums" className="flex items-center gap-xs p-xs rounded-sm hover:bg-accent text-card-foreground">
                <Users className="h-4 w-4" />
                Forums
              </Link>
              <div className="pt-base border-t border-border/40 flex flex-col gap-xs">
                <Button variant="outline" size="sm" className="justify-start gap-xs">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
                <Button size="sm" className="justify-start bg-gradient-to-r from-sandy-ochre to-rusty-orange text-dark-chocolate hover:from-rusty-orange hover:to-sandy-ochre font-rajdhani font-bold">
                  Join TBGC
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}