import { GameAnvilIcon, GameBookIcon, GameGearIcon, GameIcon, GamePeopleIcon, GamePistolIcon, GameRifleIcon, GameShieldIcon, GameShopIcon, GameTargetIcon, GameToolsIcon } from '@heroicons/react/24/outline';

/**
 * Game Icons Logo System
 * Uses game-icons.net library for business logo placeholders
 * Simple category-based icon mapping for authentic firearms business representation
 */

import React from 'react';

// Game Icons SVG components - directly embedded for immediate use
// Source: game-icons.net (CC BY 3.0 license)

// Rifle icon for shooting ranges
export const GameRifleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M25 119v18h30v110h46v-91h55v-37H25zm407 0v37h55v91h46V137h30v-18H432zM70 155v164h55V155H70zm317 0v164h55V155h-55zM25 337v37h131v-37H25zm331 0v37h131v-37H356zM70 392v101h55V392H70zm317 0v101h55V392h-55z"/>
  </svg>
);

// Crosshair/target icon for ranges
export const GameTargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M256 25C129.18 25 25 129.18 25 256s104.18 231 231 231 231-104.18 231-231S382.82 25 256 25zm0 46c102.27 0 185 82.73 185 185s-82.73 185-185 185S71 358.27 71 256s82.73-185 185-185zm0 55c-71.77 0-130 58.23-130 130s58.23 130 130 130 130-58.23 130-130-58.23-130-130-130zm0 46c46.27 0 84 37.73 84 84s-37.73 84-84 84-84-37.73-84-84 37.73-84 84-84zm0 32c-28.85 0-52 23.15-52 52s23.15 52 52 52 52-23.15 52-52-23.15-52-52-52z"/>
  </svg>
);

// Hammer/anvil for gunsmiths
export const GameAnvilIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M201 23v46h110V23H201zm-55 64v46h220V87H146zm-37 64v183h294V151H109zm-55 201v46h404v-46H54zm27 64v46h350v-46H81z"/>
  </svg>
);

// Shop/building for retail
export const GameShopIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M25 64v73.5l36.5 36.5H98v274h316V174h36.5L487 137.5V64H25zm46 18h370v37.5l-18.25 18.25h-333.5L71 119.25V82zm55 110h37v256h-37V192zm55 0h37v256h-37V192zm55 0h37v256h-37V192zm55 0h37v256h-37V192zm55 0h37v256h-37V192z"/>
  </svg>
);

// ShieldCheckIcon for training/education
export const GameShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M256 25L64 89v137c0 148 130 234 192 261 62-27 192-113 192-261V89L256 25zm0 46l146 50v115c0 120-100 191-146 211-46-20-146-91-146-211V121l146-50z"/>
  </svg>
);

// People/group for clubs
export const GamePeopleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M192 64c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm128 64c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zM96 224c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm192 32v96h192v-96H288zm-192 96c-53.02 0-96 42.98-96 96v32h192v-32c0-53.02-42.98-96-96-96zm224 32c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64z"/>
  </svg>
);

// Gear/cog for services
export const GameGearIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M256 25c-13 0-24.98 1.37-36.5 3.9l-6.58 56.9c-11.2 2.75-21.95 6.48-32.13 11.11l-45.7-35.15c-19.47 11.9-36.9 26.68-51.37 43.84l31.6 47.1c-6.45 9.4-12.05 19.45-16.68 30.04l-55.12 11.68c-3.8 11.66-6.52 23.8-8.02 36.25L91.9 256l-56.4 25.33c1.5 12.45 4.22 24.6 8.02 36.25l55.12 11.68c4.63 10.6 10.23 20.64 16.68 30.04l-31.6 47.1c14.47 17.16 31.9 31.94 51.37 43.84l45.7-35.15c10.18 4.63 20.93 8.36 32.13 11.11l6.58 56.9c11.52 2.53 23.5 3.9 36.5 3.9s24.98-1.37 36.5-3.9l6.58-56.9c11.2-2.75 21.95-6.48 32.13-11.11l45.7 35.15c19.47-11.9 36.9-26.68 51.37-43.84l-31.6-47.1c6.45-9.4 12.05-19.45 16.68-30.04l55.12-11.68c3.8-11.66 6.52-23.8 8.02-36.25L420.1 256l56.4-25.33c-1.5-12.45-4.22-24.6-8.02-36.25l-55.12-11.68c-4.63-10.6-10.23-20.64-16.68-30.04l31.6-47.1c-14.47-17.16-31.9-31.94-51.37-43.84l-45.7 35.15c-10.18-4.63-20.93-8.36-32.13-11.11l-6.58-56.9C280.98 26.37 269 25 256 25zm0 127c56.92 0 103 46.08 103 103s-46.08 103-103 103-103-46.08-103-103 46.08-103 103-103z"/>
  </svg>
);

// Pistol icon for smaller firearms businesses
export const GamePistolIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M137 89v46h238v-46H137zm-18 64v55h18v109h55V208h146v100h55V208h18v-55H119zm201 146v46h55v-46h-55zm-55 64v37h55v-37h-55z"/>
  </svg>
);

// Crossed tools icon for general services
export const GameToolsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M78.2 25L39 64.2l91.8 91.8 39.2-39.2L78.2 25zm67.33 103.47l-28.28 28.28 85.36 85.36 28.28-28.28-85.36-85.36zm270.47 2.53c-10.5 0-21 4-29 12l-59 59 39.2 39.2 59-59c16-16 16-40 0-56-8-8-18.7-12-29-12zm-196 63v18h155v18h27V131h-27v18H220v-18h-27zm-91 91l-39.2 39.2L181.63 436c8 8 18.7 12 29 12s21-4 29-12l59-59-39.2-39.2L181.63 416c-4 4-10 4-14 0l-89.8-89.8c-4-4-4-10 0-14z"/>
  </svg>
);

// Book/education icon for training
export const GameBookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M96 32v448l160-80 160 80V32H96zm64 64h192v64H160V96zm0 96h192v32H160v-32zm0 64h128v32H160v-32z"/>
  </svg>
);

/**
 * Business Category Icon Mapping
 * Maps business categories/types to appropriate game icons
 */
export const getGameIconForBusiness = (category?: string, businessType?: string): React.ComponentType<{ className?: string }> => {
  const categoryLower = category?.toLowerCase() || '';
  const typeLower = businessType?.toLowerCase() || '';
  
  // Direct category mapping (handles capitalized categories from directory data)
  switch (category) {
    case 'Range':
      return GameTargetIcon;
    case 'Gunsmith':
      return GameAnvilIcon;
    case 'Training':
      return GameBookIcon;
    case 'Retail':
      return GameShopIcon;
    case 'Club':
      return GamePeopleIcon;
    case 'Service':
      return GameToolsIcon;
  }
  
  // Fallback: Business type string matching
  if (categoryLower.includes('range') || typeLower.includes('range') || typeLower.includes('shooting')) {
    return GameTargetIcon;
  }
  
  if (categoryLower.includes('gunsmith') || typeLower.includes('gunsmith') || typeLower.includes('custom')) {
    return GameAnvilIcon;
  }
  
  if (categoryLower.includes('training') || typeLower.includes('training') || typeLower.includes('education') || typeLower.includes('safety')) {
    return GameBookIcon;
  }
  
  if (categoryLower.includes('retail') || typeLower.includes('store') || typeLower.includes('shop') || typeLower.includes('dealer')) {
    return GameShopIcon;
  }
  
  if (categoryLower.includes('club') || typeLower.includes('club') || typeLower.includes('association') || typeLower.includes('organization')) {
    return GamePeopleIcon;
  }
  
  if (categoryLower.includes('service') || typeLower.includes('service') || typeLower.includes('consulting')) {
    return GameToolsIcon;
  }
  
  // Default to rifle for any other firearms business
  return GameRifleIcon;
};

/**
 * Game Icon Logo Component
 * Renders appropriate game icon based on business category with proper styling
 */
interface GameIconLogoProps {
  category?: string;
  businessType?: string;
  businessName?: string;
  className?: string;
  size?: number;
}

export const GameIconLogo: React.FC<GameIconLogoProps> = ({ 
  category, 
  businessType, 
  businessName, 
  className = "w-16 h-16",
  size = 64 
}) => {
  const IconComponent = getGameIconForBusiness(category, businessType);
  
  // Category-specific colors and gradients
  const getCategoryStyle = (category?: string) => {
    switch (category) {
      case 'Range':
        return {
          bg: 'bg-gradient-to-br from-nav-armory/20 to-nav-armory/40',
          icon: 'text-nav-armory',
          border: 'border-nav-armory/30'
        };
      case 'Gunsmith':
        return {
          bg: 'bg-gradient-to-br from-nav-intel/20 to-nav-intel/40', 
          icon: 'text-nav-intel',
          border: 'border-nav-intel/30'
        };
      case 'Training':
        return {
          bg: 'bg-gradient-to-br from-nav-events/20 to-nav-events/40',
          icon: 'text-nav-events', 
          border: 'border-nav-events/30'
        };
      case 'Retail':
        return {
          bg: 'bg-gradient-to-br from-nav-buysell/20 to-nav-buysell/40',
          icon: 'text-nav-buysell',
          border: 'border-nav-buysell/30'
        };
      case 'Club':
        return {
          bg: 'bg-gradient-to-br from-nav-forums/20 to-nav-forums/40',
          icon: 'text-nav-forums',
          border: 'border-nav-forums/30'
        };
      case 'Service':
        return {
          bg: 'bg-gradient-to-br from-nav-directory/20 to-nav-directory/40',
          icon: 'text-nav-directory',
          border: 'border-nav-directory/30'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-blue/20 to-slate-blue/40',
          icon: 'text-slate-blue',
          border: 'border-slate-blue/30'
        };
    }
  };
  
  const style = getCategoryStyle(category);
  
  return (
    <div className={`${className} ${style.bg} rounded-xs flex items-center justify-center border ${style.border} shadow-whisper hover:shadow-present transition-all duration-200`}>
      <IconComponent className={`w-3/4 h-3/4 ${style.icon}`} />
    </div>
  );
};

export default GameIconLogo;