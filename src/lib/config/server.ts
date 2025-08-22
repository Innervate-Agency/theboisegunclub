// Server-only configuration - DO NOT import in client components
export const serverConfig = {
  serpApiKey: process.env.SERPAPI_KEY || '',
  serperApiKey: process.env.SERPER_API_KEY || '',
  openWeatherMapApiKey: process.env.OPENWEATHERMAP_API_KEY || '664292cdddfd62b0af8ffb50d2dd9c60',
  databaseUrl: process.env.DATABASE_URL || '',
  nodeEnv: process.env.NODE_ENV || 'development',
} as const

// Type guard to ensure this is only used server-side
if (typeof window !== 'undefined') {
  throw new Error('Server config imported in client code!')
}
