import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import Image from 'next/image';

// CVA pattern for DirectoryCard - TBGC Design System V5: Complete Fire & Mica Integration
const directoryCardVariants = cva(
  'relative flex flex-col rounded-card shadow-flat transition-all duration-300 ease-out overflow-hidden',
  {
    variants: {
      variant: {
        // STRATEGIC RESTRAINT: Shadow-first approach aligned with VendorCard principles
        default: 'bg-card text-card-foreground hover:shadow-md',
        
        // Premium: Consistent shadows with subtle gradient accent
        premium: 'bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-brass-yellow/4 before:via-transparent before:to-copper-orange/3 before:rounded-card before:pointer-events-none',
        
        // Elite: Consistent shadows with enhanced gradient accent via background
        elite: 'bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-copper-orange/6 before:via-transparent before:to-brass-yellow/4 before:rounded-card before:pointer-events-none',
        
        // Glass: Modern mica effect with consistent shadows
        glass: 'mica-overlay text-card-foreground shadow-flat hover:shadow-md backdrop-blur-sm relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg',
        
        // Fire: Enhanced gradient accent positioning
        fire: 'bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-copper-orange after:to-brass-yellow after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        
        // Fire Blue: Blue to green gradient accent with center positioning
        'fire-blue': 'bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-blue after:to-ayu-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        
        // Fire Purple: Purple to cobalt gradient accent with center positioning
        'fire-purple': 'bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-purple after:to-ayu-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        
        // Fire Green: Green gradient accent with center positioning
        'fire-green': 'bg-card text-card-foreground shadow-flat hover:shadow-md hover:-translate-y-0.5 relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-ayu-green after:to-clubhouse-lawn-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
      },
      size: {
        sm: 'p-base text-body-sm',
        md: 'p-5 text-body',
        lg: 'p-md text-body-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface DirectoryCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof directoryCardVariants> {
  name: string;
  type: string;
  contact?: string;
  imageUrl?: string;
  status?: string;
  badgeVariant?: 'default' | 'secondary' | 'success' | 'destructive' | 'premium' | 'elite' | 'outline' | 'warning' | 'info';
}


import React, { useState } from 'react';

export function DirectoryCard({
  name,
  type,
  contact,
  imageUrl,
  status,
  badgeVariant = 'info',
  variant,
  size,
  className,
  ...props
}: DirectoryCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={cn(directoryCardVariants({ variant, size }), className)} {...props}>
      <div className="flex items-center gap-base mb-[var(--space-sm)]">
        {imageUrl && !imgError ? (
          <div className="relative h-14 w-14 rounded-card overflow-hidden bg-shooting-bench shadow-flat">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              sizes="56px"
              priority={false}
            />
          </div>
        ) : (
          <div className="h-14 w-14 rounded-card bg-brass-yellow/10 flex items-center justify-center font-bold text-heading-sm text-gunmetal-black shadow-flat">
            {name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-xs">
            <span className="font-rajdhani font-bold text-body-lg truncate text-gunmetal-black">{name}</span>
            {status && <Badge variant={badgeVariant} size="sm">{status}</Badge>}
          </div>
          <span className="text-body-sm text-case-hardened font-noto-sans">{type}</span>
        </div>
      </div>
      {contact && (
        <div className="mt-[var(--space-xs)] text-caption text-case-hardened font-noto-sans truncate">{contact}</div>
      )}
    </div>
  );
}

DirectoryCard.displayName = 'DirectoryCard';
