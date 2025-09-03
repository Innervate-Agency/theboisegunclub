import { NextResponse } from 'next/server'
import { checkDatabaseHealth } from '@/lib/database'

export async function GET() {
  try {
    const isDatabaseHealthy = await checkDatabaseHealth()
    
    if (!isDatabaseHealthy) {
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          database: 'disconnected',
          timestamp: new Date().toISOString()
        },
        { status: 503 }
      )
    }

    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    })
  } catch {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Health check failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}