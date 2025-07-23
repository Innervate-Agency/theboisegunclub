// Essential utilities extracted from BGCv4
// Copy this exact file to your new project: src/lib/utils.ts

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// BGCv4 Brand Colors for reference
export const brandColors = {
  // Primary brand colors
  leonardYellow: '#F2CB05',
  lahamaOrange: '#F28705',
  richBlack: '#0A0A0A',
  pureWhite: '#FFFFFF',
  
  // Light theme colors
  cloudyDayWhite: '#f8f6f1',
  overcast: '#ede7de',
  sandDuneBrown: '#c08051',
  cratersOfTheMoon: '#372103',
  desertCliffBrown: '#693e21',
  
  // Dark theme colors
  kentSlateGray: '#2F3135',
  edCharcoal: '#4B4B4B',
  pidgeonClayGray: '#494657',
  chesterWhite: '#FDFDFD',
  donGray: '#EEF1F7',
  
  // Accent colors
  clayPidgeonOrange: '#F23005',
  gunclubOrange: '#f07b1d',
  wildeyeSusanYellow: '#E3C03C',
  idahoSkyBlue: '#5198cd',
  snakeRiverBlue: '#3c81c0',
  owyheeFieldGreen: '#6f7822',
  boiseYardGreen: '#909233',
  scoringBenchRed: '#8C394B'
} as const

export type BrandColor = keyof typeof brandColors
