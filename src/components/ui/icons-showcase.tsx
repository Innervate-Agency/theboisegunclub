/**
 * Tactical Icons Showcase Component
 * Tests integration of tactical icons with the existing Boise Gun Club design system
 * Demonstrates proper styling, color integration, and responsive behavior
 */

'use client';

import React from 'react';
import { 
  getAllBusinessCategories, 
  getAllMembershipTiers, 
  getAllSportsCategories,
  type BusinessCategory,
  type MembershipTier,
  type SportsCategory
} from '@/lib/business-category-mapping';

// Icon showcase card component
interface IconShowcaseCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  bgClass: string;
  items: string[];
}

const IconShowcaseCard: React.FC<IconShowcaseCardProps> = ({
  title,
  description,
  icon: Icon,
  colorClass,
  bgClass,
  items
}) => {
  return (
    <div className={`
      card-responsive rounded-none p-6 transition-all duration-300
      bgc-shadow-whisper hover:bgc-shadow-elevated
      bg-card border ${bgClass}
    `}>
      {/* Header with icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`
          p-3 rounded-none ${bgClass} ${colorClass}
          transition-transform duration-200 hover:scale-110
        `}>
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className={`text-heading-base font-rajdhani font-semibold ${colorClass}`}>
            {title}
          </h3>
          <p className="text-body-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      
      {/* Examples/Items list */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-none ${colorClass.replace('text-', 'bg-')}`} />
            <span className="text-body-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main showcase component
export const TacticalIconsShowcase: React.FC = () => {
  const businessCategories = getAllBusinessCategories();
  const membershipTiers = getAllMembershipTiers();
  const sportsCategories = getAllSportsCategories();
  
  return (
    <div className="container-centered py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-display-base font-rajdhani font-black text-foreground">
          Tactical Icons Integration
        </h1>
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized firearms and sporting icons designed to integrate seamlessly with the 
          Boise Gun Club tactical aesthetic and color systemotion.
        </p>
      </div>
      
      {/* Business Categories Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-heading-xl font-rajdhani font-bold text-nav-armory mb-2">
            Business Categories
          </h2>
          <p className="text-body-base text-muted-foreground">
            Authentic iconography for Idaho firearms businesses
          </p>
        </div>
        
        <div className="grid-auto-fill-320 gap-6">
          {businessCategories.map((category: BusinessCategory) => (
            <IconShowcaseCard
              key={category.id}
              title={category.name}
              description={category.description}
              icon={category.icon}
              colorClass={category.colorClass}
              bgClass={category.bgClass}
              items={category.examples}
            />
          ))}
        </div>
      </section>
      
      {/* Membership Tiers Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-heading-xl font-rajdhani font-bold text-nav-events mb-2">
            Membership Tiers
          </h2>
          <p className="text-body-base text-muted-foreground">
            Visual hierarchy for business verification levels
          </p>
        </div>
        
        <div className="grid-auto-fill-320 gap-6">
          {membershipTiers.map((tier: MembershipTier) => (
            <IconShowcaseCard
              key={tier.id}
              title={tier.name}
              description={tier.description}
              icon={tier.icon}
              colorClass={tier.colorClass}
              bgClass={tier.bgClass}
              items={tier.benefits.slice(0, 4)} // Show first 4 benefits
            />
          ))}
        </div>
      </section>
      
      {/* Sports Categories Section */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-heading-xl font-rajdhani font-bold text-nav-buysell mb-2">
            Sports Categories
          </h2>
          <p className="text-body-base text-muted-foreground">
            Specialized icons for shooting and tactical sports
          </p>
        </div>
        
        <div className="grid-auto-fill-320 gap-6">
          {sportsCategories.map((category: SportsCategory) => (
            <IconShowcaseCard
              key={category.id}
              title={category.name}
              description={category.description}
              icon={category.icon}
              colorClass={category.colorClass}
              bgClass={category.bgClass}
              items={category.disciplines}
            />
          ))}
        </div>
      </section>
      
      {/* Design System Integration Test */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-heading-xl font-rajdhani font-bold text-nav-intel mb-2">
            Design System Integration
          </h2>
          <p className="text-body-base text-muted-foreground">
            Testing tactical icons with existing Boise Gun Club components
          </p>
        </div>
        
        {/* Shadow progression test */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-none bgc-shadow-whisper">
            <div className="flex items-center gap-3 mb-3">
              {React.createElement(businessCategories[0].icon, { 
                className: "h-5 w-5 text-nav-armory" 
              })}
              <span className="text-button-sm">Shadow Whisper</span>
            </div>
            <p className="text-body-xs text-muted-foreground">Base card shadow level</p>
          </div>
          
          <div className="p-6 bg-card rounded-none bgc-shadow-elevated">
            <div className="flex items-center gap-3 mb-3">
              {React.createElement(membershipTiers[0].icon, { 
                className: "h-5 w-5 text-weathered-gold" 
              })}
              <span className="text-button-sm">Shadow Elevated</span>
            </div>
            <p className="text-body-xs text-muted-foreground">Hover state shadow</p>
          </div>
          
          <div className="p-6 bg-card rounded-none bgc-shadow-hero">
            <div className="flex items-center gap-3 mb-3">
              {React.createElement(sportsCategories[0].icon, { 
                className: "h-5 w-5 text-nav-buysell" 
              })}
              <span className="text-button-sm">Shadow Hero</span>
            </div>
            <p className="text-body-xs text-muted-foreground">Premium highlight</p>
          </div>
        </div>
        
        {/* Color system test */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {businessCategories.slice(0, 4).map((category, index) => (
            <div 
              key={category.id}
              className={`
                p-4 rounded-none transition-all duration-200
                ${category.bgClass} hover:${category.bgClass.replace('/10', '/20')}
                border-2 border-transparent hover:${category.bgClass.split(' ')[1]}
              `}
            >
              <div className="text-center space-y-2">
                {React.createElement(category.icon, { 
                  className: `h-8 w-8 mx-auto ${category.colorClass}` 
                })}
                <p className={`text-button-xs ${category.colorClass}`}>
                  {category.name.split(' ')[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Mobile responsiveness test */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-heading-xl font-rajdhani font-bold text-nav-forums mb-2">
            Mobile Optimization
          </h2>
          <p className="text-body-base text-muted-foreground">
            Touch-friendly icon sizing and spacing
          </p>
        </div>
        
        <div className="space-y-4">
          {/* Touch target test */}
          <div className="flex flex-wrap gap-2">
            {membershipTiers.map((tier) => (
              <button
                key={tier.id}
                className={`
                  touch-target flex items-center gap-2 px-4 py-2 rounded-none
                  transition-all duration-200 border
                  ${tier.bgClass} ${tier.colorClass}
                  hover:bgc-shadow-present active:scale-95
                `}
              >
                {React.createElement(tier.icon, { className: "h-4 w-4" })}
                <span className="text-button-xs">{tier.name}</span>
              </button>
            ))}
          </div>
          
          {/* Icon size variations */}
          <div className="flex items-center justify-center gap-8">
            {[16, 20, 24, 32, 40].map((size) => (
              <div key={size} className="text-center space-y-2">
                {React.createElement(businessCategories[1].icon, { 
                  className: `text-nav-intel`,
                  size: size,
                  strokeWidth: size <= 20 ? 2 : 1.5
                })}
                <p className="text-body-xs text-muted-foreground">{size}px</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TacticalIconsShowcase;