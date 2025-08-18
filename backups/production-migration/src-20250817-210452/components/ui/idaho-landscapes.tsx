import * as React from 'react'
import { cn } from '@/lib/utils'

interface IdahoLandscapeProps {
  theme?: 'light' | 'dark' | 'inherit'
  opacity?: number
  className?: string
  animated?: boolean
  children: React.ReactNode
}

// Base landscape component with Idaho-specific optimizations
const IdahoLandscapeBase = React.forwardRef<SVGSVGElement, IdahoLandscapeProps>(
  ({ theme = 'inherit', opacity = 0.1, className, animated = false, children, ...props }, ref) => {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <svg 
          ref={ref}
          viewBox="0 0 1200 400" 
          className={cn(
            "w-full h-full object-cover",
            animated && "transition-opacity duration-1000 ease-out"
          )}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{
            opacity: opacity,
            '--landscape-opacity-base': opacity,
            '--landscape-opacity-fg': opacity * 0.4,
            '--landscape-opacity-mg': opacity * 0.25,
            '--landscape-opacity-bg': opacity * 0.15,
            '--landscape-opacity-accent': opacity * 0.6
          } as React.CSSProperties}
          {...props}
        >
          <defs>
            {/* Shared Idaho atmosphere gradient */}
            <linearGradient id="idaho-atmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
              <stop offset="70%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
            
            {/* Mountain snow gradient */}
            <linearGradient id="mountain-snow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
              <stop offset="30%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
            </linearGradient>
            
            {/* Desert rock texture */}
            <pattern id="rock-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.1" />
              <circle cx="15" cy="10" r="0.5" fill="currentColor" opacity="0.2" />
              <circle cx="8" cy="15" r="0.8" fill="currentColor" opacity="0.15" />
            </pattern>
            
            {/* Vegetation scatter */}
            <pattern id="vegetation" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="15" r="1.5" fill="currentColor" opacity="0.2" />
              <circle cx="30" cy="10" r="1" fill="currentColor" opacity="0.15" />
              <circle cx="25" cy="20" r="0.8" fill="currentColor" opacity="0.25" />
            </pattern>
          </defs>
          
          {children}
        </svg>
      </div>
    )
  }
)

IdahoLandscapeBase.displayName = "IdahoLandscapeBase"

// Desert Mesa Landscape (Enhanced version of current footer)
export const DesertMesaSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Background mesas */}
    <path
      d="M0,180 L100,160 L200,170 L300,150 L400,165 L500,145 L600,160 L700,140 L800,155 L900,135 L1000,150 L1100,130 L1200,140 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* Middle elevation mesas */}
    <path
      d="M0,250 L150,220 L300,240 L450,210 L600,230 L750,200 L900,220 L1200,210 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-mg)' }}
    />
    
    {/* Foreground hills */}
    <path
      d="M0,200 L200,150 L350,180 L500,140 L650,160 L800,130 L950,170 L1200,150 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Horizon line */}
    <line
      x1="0" y1="120" x2="1200" y2="110"
      stroke="currentColor"
      strokeWidth="1"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* Scattered elements - Desert rocks */}
    <circle cx="150" cy="280" r="3" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="400" cy="260" r="2" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    <circle cx="700" cy="290" r="2.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="950" cy="270" r="1.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    
    {/* Subtle wind lines */}
    <path
      d="M100,100 Q150,95 200,100"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    <path
      d="M500,85 Q550,80 600,85"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
  </IdahoLandscapeBase>
)

// Boise Foothills Landscape
export const BoiseFoothillsSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Background foothills */}
    <path
      d="M0,200 Q150,180 300,190 Q450,170 600,185 Q750,175 900,180 Q1050,190 1200,175 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* Middle hills with gentle slopes */}
    <path
      d="M0,240 Q200,220 400,235 Q600,215 800,230 Q1000,225 1200,220 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-mg)' }}
    />
    
    {/* Foreground rolling hills */}
    <path
      d="M0,280 Q150,260 300,270 Q450,250 600,265 Q750,255 900,260 Q1050,270 1200,255 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Scrub oak clusters */}
    <circle cx="120" cy="270" r="4" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="125" cy="275" r="2.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="280" cy="260" r="3.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="520" cy="255" r="4.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="750" cy="250" r="3" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="980" cy="265" r="3.8" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    {/* Scattered individual trees */}
    <path d="M200,265 L202,250 L204,265" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M450,250 L452,235 L454,250" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M680,245 L682,230 L684,245" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    {/* Gentle horizon */}
    <path
      d="M0,160 Q300,150 600,155 Q900,160 1200,150"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
  </IdahoLandscapeBase>
)

// South Boise Desert Landscape
export const SouthBoiseDesertSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Flat horizon line */}
    <line
      x1="0" y1="180" x2="1200" y2="175"
      stroke="currentColor"
      strokeWidth="2"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* Large rock formations */}
    <ellipse cx="200" cy="280" rx="25" ry="40" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-fg)' }} />
    <ellipse cx="220" cy="290" rx="15" ry="25" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    
    <ellipse cx="500" cy="270" rx="30" ry="50" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-fg)' }} />
    <ellipse cx="480" cy="285" rx="18" ry="30" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    
    <ellipse cx="800" cy="275" rx="22" ry="35" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-fg)' }} />
    <ellipse cx="820" cy="290" rx="12" ry="20" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    
    {/* Scattered smaller rocks */}
    <circle cx="100" cy="300" r="6" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    <circle cx="350" cy="310" r="4" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    <circle cx="650" cy="305" r="5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    <circle cx="950" cy="295" r="7" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-mg)' }} />
    
    {/* Sagebrush clusters */}
    <rect x="150" y="315" width="8" height="6" rx="3" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <rect x="300" y="320" width="6" height="4" rx="2" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <rect x="550" y="325" width="9" height="5" rx="2.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <rect x="750" y="318" width="7" height="5" rx="2" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <rect x="1050" y="322" width="8" height="4" rx="2" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    {/* Distant flat-topped buttes */}
    <rect x="50" y="160" width="40" height="25" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <rect x="400" y="155" width="35" height="30" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <rect x="900" y="165" width="45" height="20" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
  </IdahoLandscapeBase>
)

// Mountain Pine / Bogus Basin Landscape
export const MountainPineSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Background mountain ridge */}
    <path
      d="M0,120 L100,90 L180,110 L280,85 L380,105 L480,80 L580,100 L680,75 L780,95 L880,70 L980,90 L1080,65 L1200,85 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* Dense forest canopy - background layer */}
    <path
      d="M0,200 Q50,190 100,195 Q150,185 200,190 Q250,180 300,185 Q350,175 400,180 Q450,170 500,175 Q550,165 600,170 Q650,160 700,165 Q750,155 800,160 Q850,150 900,155 Q950,145 1000,150 Q1050,140 1100,145 Q1150,135 1200,140 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-mg)' }}
    />
    
    {/* Foreground forest with clearings */}
    <path
      d="M0,280 Q80,270 150,275 Q220,265 280,270 Q340,275 400,270 Q460,265 520,270 Q580,275 640,270 Q700,265 760,270 Q820,275 880,270 Q940,265 1000,270 Q1060,275 1120,270 Q1180,265 1200,270 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Individual tall pines */}
    <path d="M120,275 L122,240 L124,275" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M118,255 L125,245 L132,255" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    <path d="M300,270 L302,230 L304,270" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M296,250 L305,235 L314,250" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    <path d="M500,275 L502,235 L504,275" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M496,255 L505,240 L514,255" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    <path d="M750,270 L752,225 L754,270" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M746,250 L755,230 L764,250" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    <path d="M950,275 L952,240 L954,275" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M946,255 L955,245 L964,255" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    {/* Ski run clearings (lighter areas) */}
    <path
      d="M400,260 Q420,250 440,265 Q460,255 480,270 Q500,260 520,275"
      stroke="currentColor"
      strokeWidth="8"
      strokeOpacity="0.03"
      fill="none"
    />
    
    <path
      d="M700,250 Q720,240 740,255 Q760,245 780,260 Q800,250 820,265"
      stroke="currentColor"
      strokeWidth="6"
      strokeOpacity="0.02"
      fill="none"
    />
    
    {/* Snow caps on distant peaks */}
    <path
      d="M100,90 Q120,85 140,90 Q160,95 180,110"
      stroke="currentColor"
      strokeWidth="3"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
      fill="none"
    />
    <path
      d="M280,85 Q300,80 320,85 Q340,90 360,95"
      stroke="currentColor"
      strokeWidth="2"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
      fill="none"
    />
  </IdahoLandscapeBase>
)

// Hells Canyon Landscape
export const HellsCanyonSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Canyon rim - left side */}
    <path
      d="M0,50 L0,400 L300,400 L280,350 L250,300 L200,250 L150,200 L100,150 L50,100 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Canyon rim - right side */}
    <path
      d="M1200,60 L1200,400 L900,400 L920,360 L950,310 L1000,260 L1050,210 L1100,160 L1150,110 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Middle canyon walls */}
    <path
      d="M300,400 L320,370 L350,320 L400,270 L450,220 L500,170 L550,190 L600,210 L650,230 L700,250 L750,270 L800,290 L850,330 L880,380 L900,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-mg)' }}
    />
    
    {/* River at bottom */}
    <ellipse cx="600" cy="380" rx="200" ry="8" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <ellipse cx="600" cy="378" rx="180" ry="4" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    
    {/* Canyon layer striations */}
    <line x1="0" y1="150" x2="300" y2="180" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="0" y1="200" x2="300" y2="220" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="900" y1="190" x2="1200" y2="170" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="900" y1="240" x2="1200" y2="220" stroke="currentColor" strokeWidth="1" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    
    {/* Rock outcroppings */}
    <circle cx="150" cy="180" r="8" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="1050" cy="190" r="6" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="450" cy="240" r="5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="750" cy="260" r="7" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
  </IdahoLandscapeBase>
)

// Snake River Canyon Landscape
export const SnakeRiverCanyonSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Dramatic cliff faces */}
    <path
      d="M0,80 L0,400 L200,400 L180,350 L160,300 L140,250 L120,200 L100,150 L80,100 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    <path
      d="M1200,70 L1200,400 L1000,400 L1020,360 L1040,320 L1060,280 L1080,240 L1100,200 L1120,160 L1140,120 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Winding river path */}
    <path
      d="M200,380 Q350,360 500,370 Q650,385 800,375 Q950,365 1000,380"
      stroke="currentColor"
      strokeWidth="20"
      fill="none"
      style={{ opacity: 'var(--landscape-opacity-accent)' }}
    />
    <path
      d="M200,380 Q350,360 500,370 Q650,385 800,375 Q950,365 1000,380"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* River banks */}
    <path
      d="M200,400 Q350,380 500,390 Q650,405 800,395 Q950,385 1000,400"
      stroke="currentColor"
      strokeWidth="40"
      fill="none"
      style={{ opacity: 'var(--landscape-opacity-mg)' }}
    />
    
    {/* Cliff stratification */}
    <line x1="0" y1="120" x2="200" y2="140" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="0" y1="180" x2="200" y2="200" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="0" y1="240" x2="200" y2="260" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    
    <line x1="1000" y1="150" x2="1200" y2="130" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="1000" y1="210" x2="1200" y2="190" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <line x1="1000" y1="270" x2="1200" y2="250" stroke="currentColor" strokeWidth="2" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    
    {/* Scattered cliff vegetation */}
    <circle cx="80" cy="160" r="3" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="1120" cy="180" r="2.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="300" cy="350" r="4" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <circle cx="700" cy="340" r="3.5" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
  </IdahoLandscapeBase>
)

// Cascade Sawtooths Landscape
export const CascadeSawtoothsSVG = ({ opacity = 0.1, animated = false }: Omit<IdahoLandscapeProps, 'children'>) => (
  <IdahoLandscapeBase opacity={opacity} animated={animated}>
    {/* Jagged background peaks */}
    <path
      d="M0,200 L80,120 L120,160 L180,100 L220,140 L280,80 L320,120 L380,60 L420,100 L480,40 L520,80 L580,20 L620,60 L680,0 L720,40 L780,20 L820,60 L880,40 L920,80 L980,60 L1020,100 L1080,80 L1120,120 L1200,100 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-bg)' }}
    />
    
    {/* Middle elevation jagged ridges */}
    <path
      d="M0,280 L60,220 L100,240 L140,200 L180,220 L220,180 L260,200 L300,160 L340,180 L380,140 L420,160 L460,120 L500,140 L540,100 L580,120 L620,80 L660,100 L700,60 L740,80 L780,40 L820,60 L860,20 L900,40 L940,0 L980,20 L1020,40 L1060,20 L1100,40 L1140,60 L1200,40 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-mg)' }}
    />
    
    {/* Foreground alpine slopes */}
    <path
      d="M0,320 Q100,300 200,310 Q300,290 400,300 Q500,280 600,290 Q700,270 800,280 Q900,260 1000,270 Q1100,250 1200,260 L1200,400 L0,400 Z"
      fill="currentColor"
      style={{ opacity: 'var(--landscape-opacity-fg)' }}
    />
    
    {/* Snow caps on major peaks */}
    <path d="M580,20 L600,15 L620,20 L610,30 L590,25 Z" fill="url(#mountain-snow)" />
    <path d="M680,0 L700,5 L720,0 L710,15 L690,10 Z" fill="url(#mountain-snow)" />
    <path d="M940,0 L960,10 L980,0 L970,20 L950,15 Z" fill="url(#mountain-snow)" />
    
    {/* Alpine treeline */}
    <path d="M150,310 L152,295 L154,310" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M350,300 L352,285 L354,300" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M550,290 L552,275 L554,290" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M750,280 L752,265 L754,280" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    <path d="M950,270 L952,255 L954,270" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 'var(--landscape-opacity-accent)' }} />
    
    {/* Cirque glacial features */}
    <ellipse cx="400" cy="180" rx="30" ry="15" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
    <ellipse cx="800" cy="120" rx="25" ry="12" fill="currentColor" style={{ opacity: 'var(--landscape-opacity-bg)' }} />
  </IdahoLandscapeBase>
)

export { IdahoLandscapeBase }