import React from 'react'

interface TumbleweedIconProps {
  className?: string
}

export function TumbleweedIcon({ className = "w-6 h-6" }: TumbleweedIconProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 512 512" 
      fill="none"
      stroke="currentColor"
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified version of the original tumbleweed path - main structure only */}
      <path d="M174.7 46.35s-53.1 40.57-69.2 68.55c-8.6 15.1-14.17 44-16.81 60.6L45.6 236.2l52.77 70.5"/>
      <path d="M242.4 96.2c75.8 22 150.2 45.7 188.8 116.9c-26.3 28.6-42.2 56.6-65.2 81.7"/>
      <path d="M207.5 140.8s-95.8 17.2-95.8 17.2l-7.8 77.7l72.8 26.7"/>
      <path d="M285.5 175.3l20.3-45.3s-34-47.7-63.3-55.8"/>
      <path d="M197.8 230.5l85.7 118.5l155.3-33.9"/>
      <path d="M345.4 379.6c-29 9-43.6 16.5-74.2 17.3c-31.1-21.7-49.8-49.5-60.2-81.4"/>
      <path d="M64.03 310.5c-99.39-20.1-94.15-97.1-140.95-145.8c33.11 57.2 12.47 141.1 101.85 171"/>
      <path d="M376.6 421l-152.7 17.1c56.1 16 168 29.8 179.4 12.1"/>
      <path d="M433.2 248l5.9 51l-94.8 65.4"/>
      <path d="M269.3 48.44l151.8 62.36l34.5 54.8"/>
      <path d="M115.67 401.4l75.53 79.1l91.3-26.7"/>
    </svg>
  )
}