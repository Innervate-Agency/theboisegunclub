import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const featureTrustPointsVariants = cva(
  "bg-card p-lg rounded-xs shadow-elevated space-y-md",
  {
    variants: {
      variant: {
        default: "",
        premium: "bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface FeatureTrustPointsProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureTrustPointsVariants> {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  points: { icon: React.ReactElement<{ className?: string }>; text: string }[];
}

export const FeatureTrustPoints = ({
  icon,
  title,
  description,
  points,
  className,
  variant,
  ...props
}: FeatureTrustPointsProps) => {
  return (
    <div className={cn(featureTrustPointsVariants({ variant }), className)} {...props}>
      {React.cloneElement(icon, { className: 'size-8 text-primary mb-base' })}
      <h3 className="font-rajdhani text-3xl font-bold">{title}</h3>
      <p className="text-heading-lg text-muted-foreground">{description}</p>
      <Separator />
      <div className="space-y-md">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-sm">
            {React.cloneElement(point.icon, { className: 'size-5 text-success' })}
            <span className="text-body-sm text-muted-foreground">
              {point.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
