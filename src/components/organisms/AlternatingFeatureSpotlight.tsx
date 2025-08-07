import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const ayuColorMap = {
  blue: 'border-ayu-blue',
  green: 'border-ayu-green',
  purple: 'border-ayu-purple',
  red: 'border-ayu-red',
  cobalt: 'border-ayu-cobalt',
  teal: 'border-ayu-teal',
  yellow: 'border-ayu-yellow',
  'copper-orange': 'border-copper-orange',
};

const glowColorMap = {
  blue: 'var(--color-ayu-blue)',
  green: 'var(--color-ayu-green)',
  purple: 'var(--color-ayu-purple)',
  red: 'var(--color-ayu-red)',
  cobalt: 'var(--color-ayu-cobalt)',
  teal: 'var(--color-ayu-teal)',
  yellow: 'var(--color-ayu-yellow)',
  'copper-orange': 'var(--color-copper-orange)',
}

export type AyuColor = keyof typeof ayuColorMap;

export interface KeyFeature {
  icon: React.ReactElement<{ className?: string }>;
  text: string;
}

export interface AlternatingFeatureSpotlightProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  features: KeyFeature[];
  imageSrc: string;
  imageAlt: string;
  glowColor1: string;
  glowColor2: string;
  accentColor: string;
  reverse?: boolean;
}

const AlternatingFeatureSpotlight = ({
  icon,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  glowColor1,
  glowColor2,
  accentColor,
  reverse = false,
}: AlternatingFeatureSpotlightProps) => {
  const gradientStyle = {
    '--glow-color-1': glowColor1,
    '--glow-color-2': glowColor2,
    backgroundImage: `
      radial-gradient(circle at 25% 75%, var(--glow-color-1) 0%, transparent 40%),
      radial-gradient(circle at 75% 35%, var(--glow-color-2) 0%, transparent 40%)
    `,
  } as React.CSSProperties;

  const accentStyle = {
    borderColor: accentColor,
  } as React.CSSProperties;

  return (
    <div className="container mx-auto px-md py-2xl">
      <div className="grid items-center gap-xl md:grid-cols-2 md:gap-3xl">
        {/* Text Content Column */}
        <div className={cn('space-y-lg', reverse && 'md:order-last')}>
          <div style={accentStyle} className="border-l-2 pl-md">
            {React.cloneElement(icon, {
              className: 'h-8 w-8 text-brass-yellow mb-base',
            })}
            <h3 className="font-rajdhani text-3xl font-bold text-foreground md:text-4xl">
              {title}
            </h3>
            <p className="mt-md text-body-lg text-muted-foreground max-w-lg">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md pt-md pl-md">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-sm">
                {React.cloneElement(feature.icon, {
                  className: 'h-5 w-5 text-ayu-green flex-shrink-0 mt-1',
                })}
                <span className="text-body-sm text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="relative group">
          {/* The UNLEASHED atmospheric glow */}
          <div
            className="absolute -inset-24 opacity-30 blur-3xl"
            style={gradientStyle}
          />
          {/* The elevated image canvas */}
          <div className="relative aspect-video transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-xl">
            {/* THIS IS THE FIX: No padding, no internal overflow hidden */}
            <div className="bg-card rounded-lg shadow-lg h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={675}
                className="w-full h-full object-cover rounded-lg" // Rounded corners applied directly to the image
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternatingFeatureSpotlight;