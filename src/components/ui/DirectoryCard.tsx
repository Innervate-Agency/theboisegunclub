import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import Image from 'next/image';

// CVA pattern for DirectoryCard - TBGC Design System
const directoryCardVariants = cva(
  'relative flex flex-col rounded-lg border shadow-sm transition-all duration-150 ease-out hover:shadow-md',
  {
    variants: {
      variant: {
        default: 'bg-card border-border',
        premium: 'bg-gradient-to-br from-brass-yellow/8 to-copper-orange/6 border-brass-yellow/20',
        elite: 'bg-gradient-to-br from-copper-orange/8 to-walnut-stock/6 border-copper-orange/20',
        glass: 'bg-card/80 backdrop-blur-sm border-border/30 shadow-glass',
      },
      size: {
        sm: 'p-4 text-sm',
        md: 'p-5 text-base',
        lg: 'p-6 text-lg',
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
  badgeVariant?: 'default' | 'premium' | 'elite' | 'glass' | 'success' | 'warning' | 'error' | 'info';
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
      <div className="flex items-center gap-4 mb-3">
        {imageUrl && !imgError ? (
          <div className="relative h-14 w-14 rounded-lg overflow-hidden border border-brass-yellow/20 bg-shooting-bench shadow-flat">
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
          <div className="h-14 w-14 rounded-lg bg-brass-yellow/10 flex items-center justify-center font-bold text-xl text-gunmetal-black border border-brass-yellow/20 shadow-flat">
            {name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-rajdhani font-bold text-lg truncate text-gunmetal-black">{name}</span>
            {status && <Badge variant={badgeVariant} size="sm" className="shadow-flat">{status}</Badge>}
          </div>
          <span className="text-sm text-case-hardened font-noto-sans">{type}</span>
        </div>
      </div>
      {contact && (
        <div className="mt-2 text-xs text-case-hardened font-noto-sans truncate">{contact}</div>
      )}
    </div>
  );
}

DirectoryCard.displayName = 'DirectoryCard';

export { DirectoryCard };
