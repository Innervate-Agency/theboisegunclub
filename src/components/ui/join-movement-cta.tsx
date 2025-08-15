'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './button'
import { Badge } from './badge'
import { 
  ArrowRight,
  Shield, 
  Users,
  MapPin,
  Handshake
} from '@phosphor-icons/react'

interface JoinMovementCTAProps {
  title?: string
  subtitle?: string
  description?: string
  primaryActionText?: string
  secondaryActionText?: string
  showBadge?: boolean
  badgeText?: string
  className?: string
}

export function JoinMovementCTA({
  title = "Join the Movement",
  subtitle = "Be Part of Idaho's Gun Community Revolution",
  description = "No corporate agenda. No coastal politics. Just Idaho gun owners building something better together. Your voice, your community, your platform.",
  primaryActionText = "Get Started Today",
  secondaryActionText = "Learn More",
  showBadge = true,
  badgeText = "Community Owned",
  className
}: JoinMovementCTAProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-card via-card to-card/95 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(15,23,42,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(15,23,42,0.15)_0%,transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 left-8 opacity-10">
        <Shield className="h-16 w-16 text-slate-blue" weight="bold" />
      </div>
      <div className="absolute bottom-8 right-8 opacity-10">
        <Users className="h-12 w-12 text-sagebrush-green" weight="bold" />
      </div>
      <div className="absolute top-1/2 right-16 opacity-5">
        <MapPin className="h-20 w-20 text-canyon-clay" weight="bold" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-lg py-2xl text-center space-y-xl max-w-4xl mx-auto">
        {/* Badge */}
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Badge variant="slate-blue" size="lg" className="font-rajdhani font-bold">
              <Handshake className="h-4 w-4 mr-xs" weight="bold" />
              {badgeText}
            </Badge>
          </motion.div>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-base"
        >
          <h2 className="font-rajdhani font-bold text-heading-3xl md:text-heading-4xl text-card-foreground leading-tight">
            {title}
          </h2>
          <p className="font-rajdhani font-medium text-body-xl md:text-heading-xl text-rusty-orange">
            {subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-body-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-base"
        >
          <Link href="mailto:info@boiseguncollective.com?subject=Join The Community&body=I'm interested in joining The Boise Gun Club community.%0A%0AName:%0ALocation:%0AInterests:%0AHow can I contribute?">
            <Button 
              size="xl"
              className="bg-rusty-orange hover:bg-rusty-orange/90 text-crisp-off-white font-rajdhani font-bold shadow-present hover:shadow-elevated"
              animationType="arrow"
            >
              {primaryActionText}
              <ArrowRight className="ml-sm h-5 w-5" weight="bold" />
            </Button>
          </Link>
          <Link href="/about">
            <Button 
              variant="outline" 
              size="xl"
              className="font-rajdhani font-bold border-2"
              animationType="arrow"
            >
              {secondaryActionText}
            </Button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="flex flex-wrap justify-center gap-lg text-body-sm text-muted-foreground font-rajdhani"
        >
          <div className="flex items-center gap-xs">
            <MapPin className="h-4 w-4" weight="bold" />
            <span>8 Treasure Valley Locations</span>
          </div>
          <div className="flex items-center gap-xs">
            <Users className="h-4 w-4" weight="bold" />
            <span>5,000+ Community Members</span>
          </div>
          <div className="flex items-center gap-xs">
            <Shield className="h-4 w-4" weight="bold" />
            <span>100% Idaho Owned</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}