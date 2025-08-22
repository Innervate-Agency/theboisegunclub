'use client'

import React from 'react'
import { SunIcon, WeatherIcon } from '@heroicons/react/24/outline';

interface WeatherIconProps {
  type: 'sun' | 'partly-cloudy' | 'cloudy' | 'rain' | 'snow' | 'storm'
  className?: string
  size?: number
  weight?: 'light' | 'regular' | 'bold' | 'fill'
}

export function WeatherIcon({ 
  type, 
  className = '', 
  size = 24, 
  weight = 'regular' 
}: WeatherIconProps) {
  const iconProps = {
    className,
    size,
    weight
  }

  switch (type) {
    case 'sun':
      return <SunIcon {...iconProps} />
    case 'partly-cloudy':
      return <CloudSun {...iconProps} />
    case 'cloudy':
      return <Cloud {...iconProps} />
    case 'rain':
      return <CloudRain {...iconProps} />
    case 'snow':
      return <CloudSnow {...iconProps} />
    case 'storm':
      return <Lightning {...iconProps} />
    default:
      return <SunIcon {...iconProps} />
  }
}