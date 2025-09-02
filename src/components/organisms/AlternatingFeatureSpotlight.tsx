import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const spotlightVariants = cva(
  'relative',
  {
    variants: {
      variant: {
        directory: '[--glow-color-1:theme(colors.sagebrush-green)] [--glow-color-2:theme(colors.sandy-ochre)] [--accent-color:theme(colors.sagebrush-green)]',
        calendar: '[--glow-color-1:theme(colors.slate-blue)] [--glow-color-2:theme(colors.lodgepole-green)] [--accent-color:theme(colors.slate-blue)]',
        community: '[--glow-color-1:theme(colors.rusty-orange)] [--glow-color-2:theme(colors.canyon-clay)] [--accent-color:theme(colors.rusty-orange)]',
      },
    },
    defaultVariants: {
      variant: 'directory',
    },
  }
);



export interface KeyFeature {
  icon: React.ReactElement<{ className?: string }>;
  text: string;
}

export interface AlternatingFeatureSpotlightProps extends VariantProps<typeof spotlightVariants> {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  features: KeyFeature[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const AlternatingFeatureSpotlight = ({
  variant,
  icon,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
}: AlternatingFeatureSpotlightProps) => {
  const gradientStyle = {
    backgroundImage: `
      radial-gradient(circle at 25% 75%, var(--glow-color-1) 0%, transparent 40%),
      radial-gradient(circle at 75% 35%, var(--glow-color-2) 0%, transparent 40%)
    `,
  } as React.CSSProperties;

  return (
    <div className={cn(spotlightVariants({ variant }))}>
      <div className="container mx-auto px-[--spacing-md] py-[--spacing-2xl]">
        <div className="grid items-center gap-[--spacing-xl] md:grid-cols-2 md:gap-[--spacing-3xl]">
          {/* Text Content Column */}
          <div className={cn('space-y-[--spacing-lg]', reverse && 'md:order-last')}>
            <div className="border-l-2 pl-[--spacing-md]" style={{ borderColor: 'var(--accent-color)' }}>
              {React.cloneElement(icon, {
                className: 'h-8 w-8 text-primary mb-[--spacing-base]',
              })}
              <h3 className="font-rajdhani h2-section text-foreground md:text-4xl">
                {title}
              </h3>
              <p className="mt-[--spacing-md] text-lg text-muted-foreground max-w-lg">
                {description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[--spacing-md] pt-[--spacing-md] pl-[--spacing-md]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-[--spacing-sm]">
                  {React.cloneElement(feature.icon, {
                    className: 'h-5 w-5 text-success flex-shrink-0 mt-1',
                  })}
                  <span className="text-sm text-muted-foreground">{feature.text}</span>
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
            <div className="relative aspect-video transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-prominent">
              {/* THIS IS THE FIX: No padding, no internal overflow hidden */}
              <div className="bg-card rounded-xs shadow-elevated h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover rounded-xs" // Rounded corners applied directly to the image
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternatingFeatureSpotlight;
