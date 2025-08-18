'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Card } from './card';
import Image from 'next/image';
import React, { useState } from 'react';

const directoryCardVariants = cva(
  'relative flex flex-col rounded-xs shadow-present transition-all duration-300 ease-out overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground shadow-present hover:shadow-elevated',
        premium: 'bg-card text-card-foreground shadow-elevated hover:shadow-prominent relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-fire after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/4 before:via-transparent before:to-rusty-orange/3 before:rounded-xs before:pointer-events-none',
        elite: 'bg-card text-card-foreground shadow-elevated hover:shadow-commanding relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-fire after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/6 before:via-transparent before:to-sandy-ochre/4 before:rounded-xs before:pointer-events-none',
        glass: 'bg-card border border-border/30 text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-fire after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-sm',
        fire: 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-fire after:rounded-b-sm after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        'fire-blue': 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-nature after:rounded-b-sm after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        'fire-purple': 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-intel-hero after:rounded-b-sm after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        'fire-green': 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-success after:rounded-b-sm after:transition-all after:duration-300 after:ease-out hover:after:w-full',
      },
      size: {
        sm: 'p-sm text-body-sm',
        md: 'p-base text-body-base',
        lg: 'p-md text-heading-lg',
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
    <TacticalCase
      variant="interactive"
      theme="directory"
      size="md"
      showCornerBrackets={true}
      showLatches={true}
      showGridPattern={variant === 'elite'}
      showRopeBinding={variant === 'premium'}
      caseLabel={variant === 'elite' ? "🏆 ELITE PARTNER" : variant === 'premium' ? "⭐ PREMIUM" : "DIRECTORY ENTRY"}
      className={cn("cursor-pointer", className)}
      {...props}
    >
    <div className={cn(directoryCardVariants({ variant, size }), "border-none bg-transparent shadow-none")}>
      <div className="flex items-center gap-base mb-sm">
        {imageUrl && !imgError ? (
          <div className="relative h-14 w-14 rounded-xs overflow-hidden bg-card-surface">
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
          <div className="h-14 w-14 rounded-xs bg-primary/10 flex items-center justify-center font-bold text-heading-lg text-foreground">
            {name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-xs">
            <span className="font-rajdhani font-bold text-heading-lg truncate text-foreground">{name}</span>
            {status && <Badge variant={badgeVariant} size="sm">{status}</Badge>}
          </div>
          <span className="text-body-sm text-secondary font-noto-sans">{type}</span>
        </div>
      </div>
      {contact && (
        <div className="mt-xs text-body-xs text-muted-foreground font-noto-sans truncate">{contact}</div>
      )}
    </div>
    </TacticalCase>
  );
}

DirectoryCard.displayName = 'DirectoryCard';
