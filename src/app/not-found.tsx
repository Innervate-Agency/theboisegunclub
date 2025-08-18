import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SiteNavigation } from '@/components/ui/site-navigation'
import { SiteFooter } from '@/components/ui/site-footer'
import { 
  ArrowLeft, Home, Search, Map, BookOpen, 
  Shield, Target, AlertTriangle, Compass
} from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-muted/50">
      <SiteNavigation />
      
      {/* 404 Hero Section */}
      <section className="relative overflow-hidden px-md py-6xl">
        <div className="container mx-auto max-w-site relative z-10">
          <div className="text-center space-y-xl">
            {/* 404 Display */}
            <div className="space-y-lg">
              <div className="relative">
                <h1 className="font-rajdhani text-9xl md:text-[12rem] font-black text-muted-foreground/20 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-rusty-orange/10 p-6 rounded-full border-2 border-rusty-orange/20">
                    <Target className="h-16 w-16 text-rusty-orange" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-base">
                <Badge className="bg-rusty-orange/20 text-rusty-orange border-rusty-orange/30">
                  <AlertTriangle className="h-4 w-4 mr-xs" />
                  Target Not Found
                </Badge>
                <h2 className="font-rajdhani text-3xl md:text-5xl font-bold text-foreground">
                  Off Target, Partner
                </h2>
                <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Looks like you've wandered into uncharted territory. The page you're looking for has gone missing from our digital range. 
                  Let's get you back on target with the Treasure Valley firearms community.
                </p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-base justify-center">
              <Link href="/">
                <Button size="lg" className="bg-nav-home text-gruvbox-bg-dark hover:bg-nav-home/90 font-rajdhani font-bold gap-xs">
                  <Home className="h-4 w-4" />
                  Back to Home Base
                </Button>
              </Link>
              <Link href="/directory">
                <Button variant="outline" size="lg" className="gap-xs">
                  <Search className="h-4 w-4" />
                  Find Dealers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Navigation Cards */}
      <section className="px-md pb-6xl">
        <div className="container mx-auto max-w-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {/* Intel */}
            <Link href="/intel">
              <Card variant="tactical" tacticalTheme="default" className="tactical-card-mobile tactical-card-hover group  border-nav-intel/30">
                <CardContent className="p-lg text-center space-y-base">
                  <div className="bg-nav-intel/20 p-base rounded-xs w-fit mx-auto">
                    <Map className="h-8 w-8 text-nav-intel" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-heading-sm text-nav-intel group-hover:text-nav-intel/80 transition-colors">
                      Range Intel
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Find shooting locations and range conditions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Guides */}
            <Link href="/guides">
              <Card variant="tactical" tacticalTheme="default" className="tactical-card-mobile tactical-card-hover group  border-nav-guides/30">
                <CardContent className="p-lg text-center space-y-base">
                  <div className="bg-nav-guides/20 p-base rounded-xs w-fit mx-auto">
                    <BookOpen className="h-8 w-8 text-nav-guides" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-heading-sm text-nav-guides group-hover:text-nav-guides/80 transition-colors">
                      Knowledge Base
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Idaho gun laws and safety guides
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Armory */}
            <Link href="/armory">
              <Card variant="tactical" tacticalTheme="default" className="tactical-card-mobile tactical-card-hover group  border-nav-armory/30">
                <CardContent className="p-lg text-center space-y-base">
                  <div className="bg-nav-armory/20 p-base rounded-xs w-fit mx-auto">
                    <Shield className="h-8 w-8 text-nav-armory" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-heading-sm text-nav-armory group-hover:text-nav-armory/80 transition-colors">
                      The Armory
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Equipment reviews and tactical guides
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Directory */}
            <Link href="/directory">
              <Card variant="tactical" tacticalTheme="default" className="tactical-card-mobile tactical-card-hover group  border-nav-directory/30">
                <CardContent className="p-lg text-center space-y-base">
                  <div className="bg-nav-directory/20 p-base rounded-xs w-fit mx-auto">
                    <Compass className="h-8 w-8 text-nav-directory" />
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-heading-sm text-nav-directory group-hover:text-nav-directory/80 transition-colors">
                      Business Directory
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Find verified Idaho firearms dealers
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      <SiteFooter />
    </div>
  )
}