import React from 'react';
import { Separator } from '@/components/ui/separator';

export interface FeatureTrustPointsProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  points: { icon: React.ReactElement<{ className?: string }>; text: string }[];
}

const FeatureTrustPoints = ({
  icon,
  title,
  description,
  points,
}: FeatureTrustPointsProps) => {
  return (
    <div className="bg-card p-lg rounded-md shadow-elevated space-y-md">
      {React.cloneElement(icon, { className: 'h-8 w-8 text-sandy-ochre mb-base' })}
      <h3 className="font-rajdhani text-3xl font-bold">{title}</h3>
      <p className="text-body-lg text-muted-foreground">{description}</p>
      <Separator />
      <div className="space-y-md">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-sm">
            {React.cloneElement(point.icon, { className: 'h-5 w-5 text-ayu-green' })}
            <span className="text-body-sm text-muted-foreground">
              {point.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTrustPoints;
