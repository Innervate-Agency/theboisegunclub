'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MotionDiv, MotionPath, MotionSVG } from '@/components/ui/optimized-motion'
import { Cog6ToothIcon, CursorArrowRaysIcon, PauseIcon, PlayIcon, ToothIcon } from '@heroicons/react/24/outline';

interface TestCardProps {
  title: string
  description: string
  children: React.ReactNode
  isActive?: boolean
  onToggle?: () => void
}

function TestCard({ title, description, children, isActive = false, onToggle }: TestCardProps) {
  return (
    <Card className="shadow-present hover:shadow-elevated transition-all duration-300 overflow-hidden">
      <CardHeader className="pb-sm">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-rajdhani text-lg font-bold text-card-foreground">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-xs">
              {description}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onToggle}
            className="font-rajdhani font-bold"
            animationType="arrow"
          >
            {isActive ? <PauseIcon className="h-4 w-4" weight="bold" /> : <PlayIcon className="h-4 w-4" weight="bold" />}
            {isActive ? 'Reset' : 'Test'}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="min-h-32 flex items-center justify-center bg-muted/20 rounded-xs border border-border/30">
          {children}
        </div>
      </CardContent>
    </Card>
  )
}

// Envelope Opening Animation Component
function EnvelopeHover() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MotionDiv
      className="relative cursor-pointer"
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <MotionSVG
        width="80"
        height="60"
        viewBox="0 0 80 60"
        className="drop-shadow-md"
      >
        {/* Envelope Base */}
        <rect
          x="5"
          y="20"
          width="70"
          height="35"
          fill="var(--color-sandy-ochre)"
          stroke="var(--color-dark-chocolate)"
          strokeWidth="1"
          rx="2"
        />
        
        {/* Envelope Flap */}
        <MotionPath
          d="M5 20 L40 35 L75 20 L75 15 L40 5 L5 15 Z"
          fill="var(--color-canyon-clay)"
          stroke="var(--color-dark-chocolate)"
          strokeWidth="1"
          animate={isOpen ? {
            rotateX: -45,
            transformOrigin: "40px 20px"
          } : {
            rotateX: 0,
            transformOrigin: "40px 20px"
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
        />
        
        {/* Letter emerging */}
        <MotionDiv
          animate={isOpen ? { y: -10, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <rect
            x="15"
            y="25"
            width="50"
            height="25"
            fill="var(--color-crisp-off-white)"
            stroke="var(--color-slate-blue)"
            strokeWidth="0.5"
            rx="1"
          />
          <text
            x="40"
            y="40"
            textAnchor="middle"
            className="text-xs font-rajdhani font-bold fill-slate-blue"
          >
            Mail Call
          </text>
        </MotionDiv>
        
        {/* Wax Seal */}
        <circle
          cx="60"
          cy="30"
          r="6"
          fill="var(--color-rusty-orange)"
          stroke="var(--color-dark-chocolate)"
          strokeWidth="0.5"
        />
        <text
          x="60"
          y="33"
          textAnchor="middle"
          className="text-xs font-rajdhani font-bold fill-crisp-off-white"
        >
          ★
        </text>
      </MotionSVG>
    </MotionDiv>
  )
}

// Ammo Can Lid Mechanics Component
function AmmoCanHover() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MotionDiv
      className="relative cursor-pointer perspective-1000"
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative w-20 h-16">
        {/* Ammo Can Base */}
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-b from-warm-stone to-rich-loam border border-dark-chocolate rounded-sm shadow-present">
          {/* Contents (bullets) */}
          <MotionDiv
            className="absolute inset-x-1 top-1 flex gap-1 justify-center"
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 h-6 bg-gradient-to-b from-sandy-ochre to-canyon-clay rounded-full border border-dark-chocolate/50"
              />
            ))}
          </MotionDiv>
        </div>
        
        {/* Ammo Can Lid */}
        <MotionDiv
          className="absolute top-0 w-full h-8 bg-gradient-to-b from-warm-stone via-pale-stone to-warm-stone border border-dark-chocolate rounded-sm shadow-elevated origin-bottom"
          animate={isOpen ? {
            rotateX: -75,
            y: -8,
            transformOrigin: "bottom"
          } : {
            rotateX: 0,
            y: 0,
            transformOrigin: "bottom"
          }}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Latch */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-dark-chocolate rounded-sm">
            <div className="absolute top-0.5 left-1 w-2 h-1 bg-rusty-orange rounded-full" />
          </div>
          
          {/* Handle */}
          <div className="absolute top-0 right-2 w-3 h-1 bg-dark-chocolate rounded-full" />
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}

// Military Badge Transformation Component
function MilitaryBadgeHover() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <MotionDiv
      className="relative cursor-pointer"
      onHoverStart={() => setIsRevealed(true)}
      onHoverEnd={() => setIsRevealed(false)}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      <MotionDiv
        className="relative w-16 h-16 flex items-center justify-center"
        animate={isRevealed ? { scale: 1.1 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Base Badge Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-sandy-ochre via-canyon-clay to-rusty-orange rounded-full border-2 border-dark-chocolate shadow-elevated" />
        
        {/* Center Icon */}
        <MotionDiv
          animate={isRevealed ? { rotateY: 180 } : { rotateY: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <CursorArrowRaysIcon className="h-8 w-8 text-crisp-off-white" weight="bold" />
        </MotionDiv>
        
        {/* Ribbon Reveal */}
        <MotionDiv
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          animate={isRevealed ? { 
            scaleX: 1, 
            opacity: 1,
            y: 0 
          } : { 
            scaleX: 0, 
            opacity: 0,
            y: -10 
          }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="w-8 h-4 bg-gradient-to-r from-slate-blue via-sagebrush-green to-rusty-orange border border-dark-chocolate/50 rounded-sm">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-blue" />
          </div>
        </MotionDiv>
        
        {/* Rank Stars */}
        <MotionDiv
          className="absolute -top-1 -right-1"
          animate={isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <div className="flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-sandy-ochre border border-dark-chocolate rounded-full"
              />
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>
    </MotionDiv>
  )
}

// Enhanced Magic Line Evolution Component
function MagicLineEvolution() {
  const [isActive, setIsActive] = useState(false)

  return (
    <MotionDiv
      className="relative cursor-pointer w-32 h-8 flex items-center justify-center"
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="relative w-full h-full bg-muted/30 rounded-xs border border-border/30 overflow-hidden">
        {/* Current Magic Line */}
        <MotionDiv
          className="absolute bottom-0 left-0 h-1 bg-nav-armory rounded-full"
          animate={isActive ? { 
            width: "100%",
            opacity: 0.3
          } : { 
            width: "0%",
            opacity: 1
          }}
          transition={{
            type: "spring",
            stiffness: 130,
            damping: 9,
            bounce: 0.25
          }}
        />
        
        {/* Envelope Outline Evolution */}
        <MotionSVG
          width="100%"
          height="100%"
          viewBox="0 0 128 32"
          className="absolute inset-0"
        >
          <MotionPath
            d="M8 20 L64 8 L120 20 L120 24 L8 24 Z"
            fill="none"
            stroke="var(--color-nav-armory)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isActive ? { 
              pathLength: 1, 
              opacity: 1 
            } : { 
              pathLength: 0, 
              opacity: 0 
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut"
            }}
          />
        </MotionSVG>
        
        <span className="relative z-10 text-xs font-rajdhani font-bold text-card-foreground">
          Hover Test
        </span>
      </div>
    </MotionDiv>
  )
}

export function MilitaryHoverTestBed() {
  const [activeTests, setActiveTests] = useState<Record<string, boolean>>({})

  const toggleTest = (testId: string) => {
    setActiveTests(prev => ({
      ...prev,
      [testId]: !prev[testId]
    }))
  }

  const testCases = [
    {
      id: 'envelope',
      title: 'Envelope Opening',
      description: 'Mail call interaction with letter emergence',
      component: <EnvelopeHover />
    },
    {
      id: 'ammocan',
      title: 'Ammo Can Mechanics',
      description: '3D lid opening with contents reveal',
      component: <AmmoCanHover />
    },
    {
      id: 'badge',
      title: 'Military Badge',
      description: 'Campaign ribbon and rank progression',
      component: <MilitaryBadgeHover />
    },
    {
      id: 'magicline',
      title: 'Magic Line Evolution',
      description: 'Enhanced navigation morphing',
      component: <MagicLineEvolution />
    }
  ]

  return (
    <section className="py-3xl bg-muted/20">
      <div className="max-w-7xl mx-auto px-lg">
        {/* Header */}
        <div className="text-center space-y-lg mb-2xl">
          <Badge variant="rusty-orange" className="font-rajdhani font-bold">
            <Cog6ToothIcon className="size-4 mr-xs" weight="bold" />
            Navigation Concept Lab
          </Badge>
          <h2 className="font-rajdhani font-bold text-4xl text-card-foreground">
            Military Heritage Hover Effects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Testing authentic military-inspired interactions that honor Idaho's shooting heritage. 
            Each concept blends period aesthetics with modern web usability.
          </p>
        </div>

        {/* Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {testCases.map((test) => (
            <TestCard
              key={test.id}
              title={test.title}
              description={test.description}
              isActive={activeTests[test.id]}
              onToggle={() => toggleTest(test.id)}
            >
              {test.component}
            </TestCard>
          ))}
        </div>

        {/* Usage Notes */}
        <div className="mt-2xl p-lg bg-card rounded-xs border border-border/30 shadow-whisper">
          <h3 className="font-rajdhani font-bold text-lg text-card-foreground mb-base">
            Testing Instructions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-base text-sm text-muted-foreground">
            <div>
              <strong className="text-card-foreground">Hover:</strong> Experience natural interaction flow
            </div>
            <div>
              <strong className="text-card-foreground">Click:</strong> Lock animation state for detailed examination
            </div>
            <div>
              <strong className="text-card-foreground">Mobile:</strong> Touch interactions adapt automatically
            </div>
            <div>
              <strong className="text-card-foreground">Accessibility:</strong> Respects reduced motion preferences
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}