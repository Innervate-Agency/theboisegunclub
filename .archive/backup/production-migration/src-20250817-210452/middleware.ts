import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // CORS configuration for forum integration
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'https://boisegunclub.com',
    'http://localhost:3000',
    'http://localhost:4567', // NodeBB default port
  ]

  // Handle CORS for API endpoints
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Set CORS headers
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
    }
    
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    response.headers.set('Access-Control-Allow-Credentials', 'true')
    response.headers.set('Access-Control-Max-Age', '86400') // 24 hours

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: response.headers })
    }
  }

  // Handle authentication for protected routes
  if (request.nextUrl.pathname.startsWith('/auth/')) {
    // Check if user is already authenticated
    const token = request.cookies.get('boise_auth_token')?.value
    
    if (token && (request.nextUrl.pathname === '/auth/login' || request.nextUrl.pathname === '/auth/register')) {
      // Redirect authenticated users away from login/register pages
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Set security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Content Security Policy for iframe embedding
  if (request.nextUrl.pathname === '/api/navbar') {
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
    response.headers.set(
      'Content-Security-Policy',
      "frame-ancestors 'self' https://boisegunclub.com https://*.boisegunclub.com"
    )
  }

  return response
}

export const config = {
  matcher: [
    '/api/:path*',
    '/auth/:path*',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}