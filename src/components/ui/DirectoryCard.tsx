'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import Image from 'next/image';
import React, { useState } from 'react';

const directoryCardVariants = cva(
  'relative flex flex-col rounded-base shadow-present transition-all duration-300 ease-out overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground hover:shadow-elevated',
        premium: 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-sandy-ochre/4 before:via-transparent before:to-rusty-orange/3 before:rounded-base before:pointer-events-none',
        elite: 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg before:absolute before:inset-0 before:bg-gradient-to-br before:from-rusty-orange/6 before:via-transparent before:to-sandy-ochre/4 before:rounded-base before:pointer-events-none',
        glass: 'mica-overlay text-card-foreground shadow-present hover:shadow-elevated backdrop-blur-sm relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:transition-all after:duration-300 after:ease-out hover:after:w-full after:rounded-b-lg',
        fire: 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-rusty-orange after:to-sandy-ochre after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        'fire-blue': 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-slate-blue after:to-info-river after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        'fire-purple': 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-foothills-purple after:to-slate-blue after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
        'fire-green': 'bg-card text-card-foreground shadow-present hover:shadow-elevated relative after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:bg-gradient-to-r after:from-sagebrush-green after:to-lodgepole-green after:rounded-b-lg after:transition-all after:duration-300 after:ease-out hover:after:w-full',
      },
      size: {
        sm: 'p-sm text-sm',
        md: 'p-base text-base',
        lg: 'p-md text-lg',
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
    <div className={cn(directoryCardVariants({ variant, size }), className)} {...props}>
      <div className="flex items-center gap-base mb-sm">
        {imageUrl && !imgError ? (
          <div className="relative h-14 w-14 rounded-base overflow-hidden bg-card-surface shadow-present">
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
          <div className="h-14 w-14 rounded-base bg-sandy-ochre/10 flex items-center justify-center font-bold text-lg text-dark-chocolate shadow-present">
            {name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-xs">
            <span className="font-rajdhani font-bold text-lg truncate text-dark-chocolate">{name}</span>
            {status && <Badge variant={badgeVariant} size="sm">{status}</Badge>}
          </div>
          <span className="text-sm text-warning-amber font-noto-sans">{type}</span>
        </div>
      </div>
      {contact && (
        <div className="mt-xs text-xs text-warning-amber font-noto-sans truncate">{contact}</div>
      )}
    </div>
  );
}

DirectoryCard.displayName = 'DirectoryCard';
