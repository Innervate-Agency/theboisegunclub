'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface FlipTextProps {
  text: string
  variant?: 'horizontal' | 'vertical'
  color?: string
  staggerDelay?: number
  className?: string
  isActive?: boolean
}

const FlipText = React.forwardRef<HTMLDivElement, FlipTextProps>(
  ({ text, variant = 'horizontal', color, staggerDelay = 80, className, isActive = false, ...props }, ref) => {
    
    const createHorizontalFlipDigits = (text: string) => {
      return text.split('').map((char, index) => (
        <div 
          key={index} 
          className="flip-digit" 
          style={{ 
            '--flip-color': color,
            '--stagger-delay': `${index * staggerDelay}ms`
          } as React.CSSProperties}
        >
          {/* Static top and bottom halves */}
          <div className="flip-digit-top">
            <span style={{ lineHeight: '3.2' }}>{char}</span>
          </div>
          <div className="flip-digit-bottom">
            <span style={{ lineHeight: '0.8' }}>{char}</span>
          </div>
          
          {/* Animated flip halves */}
          <div className="flip-front">
            <span style={{ lineHeight: '3.2' }}>{char}</span>
          </div>
          <div className="flip-back">
            <span style={{ lineHeight: '0.8' }}>{char}</span>
          </div>
        </div>
      ))
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flip-text-container",
          isActive && "flip-active",
          className
        )}
        {...props}
      >
        <style jsx>{`
          .flip-text-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1px;
            perspective: 800px;
          }

          .flip-digit {
            position: relative;
            display: inline-block;
            width: 1.2em;
            height: 1.6em;
            margin: 0 1px;
            perspective: 400px;
          }

          .flip-digit-top,
          .flip-digit-bottom {
            position: absolute;
            width: 100%;
            height: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--muted-foreground);
            text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
            background: linear-gradient(to bottom, var(--card) 0%, color-mix(in srgb, var(--card) 90%, black) 100%);
          }

          .flip-digit-top {
            top: 0;
            border-radius: 3px 3px 1px 1px;
            z-index: 10;
          }

          .flip-digit-bottom {
            bottom: 0;
            border-radius: 1px 1px 3px 3px;
            background: linear-gradient(to top, var(--card) 0%, color-mix(in srgb, var(--card) 90%, black) 100%);
            z-index: 5;
          }

          .flip-front,
          .flip-back {
            position: absolute;
            width: 100%;
            height: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
            transition: transform 600ms ease-in-out, z-index 600ms;
            transition-delay: var(--stagger-delay);
            transform-style: preserve-3d;
            backface-visibility: hidden;
            background: linear-gradient(to bottom, var(--flip-color, var(--primary)) 0%, color-mix(in srgb, var(--flip-color, var(--primary)) 80%, black) 100%);
          }

          .flip-front {
            top: 0;
            z-index: 30;
            border-radius: 3px 3px 0 0;
            transform-origin: 0px 100%;
            transform: rotateX(0deg);
          }

          .flip-back {
            top: 0;
            z-index: 20;
            border-radius: 0 0 3px 3px;
            transform-origin: 0px 0%;
            transform: rotateX(180deg);
            background: linear-gradient(to top, var(--flip-color, var(--primary)) 0%, color-mix(in srgb, var(--flip-color, var(--primary)) 80%, black) 100%);
          }

          .flip-active .flip-front {
            transform: rotateX(-90deg);
          }

          .flip-active .flip-back {
            transform: rotateX(0deg);
            z-index: 40;
          }
        `}</style>
        
        {variant === 'horizontal' ? createHorizontalFlipDigits(text) : (
          <span>{text}</span>
        )}
      </div>
    )
  }
)

FlipText.displayName = "FlipText"

export { FlipText }