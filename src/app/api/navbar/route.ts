import { NextRequest, NextResponse } from 'next/server'

/**
 * Navbar Embedding Endpoint for NodeBB Integration
 * Returns HTML/CSS for embedding the main site navbar in NodeBB
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const format = searchParams.get('format') || 'html'
  const theme = searchParams.get('theme') || 'light'

  if (format === 'css') {
    return getCSSResponse(theme)
  } else if (format === 'js') {
    return getJSResponse()
  } else {
    return getHTMLResponse(theme)
  }
}

/**
 * Return HTML navbar for embedding
 */
function getHTMLResponse(theme: string) {
  const html = `
    <!DOCTYPE html>
    <html class="${theme}" data-theme="${theme}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700;800&family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        /* Reset and base styles */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        /* Import design tokens */
        :root {
          /* Boise landscape colors */
          --color-rusty-orange: #D9863B;
          --color-slate-blue: #3A5063;
          --color-nav-home: var(--nav-home);
          --color-nav-events: var(--nav-events);
          --color-nav-directory: var(--nav-directory);
          --color-nav-armory: var(--nav-armory);
          --color-nav-intel: var(--nav-intel);
          --color-nav-marketplace: var(--nav-marketplace);
          --color-nav-forums: var(--nav-forums);
          
          /* Typography */
          --font-rajdhani: 'Rajdhani', sans-serif;
          --font-noto-sans: 'Noto Sans', sans-serif;
          
          /* Spacing */
          --space-micro: 0.125rem;
          --space-tiny: 0.25rem;
          --space-xs: 0.375rem;
          --space-sm: 0.5rem;
          --space-base: 0.75rem;
          
          /* Shadows */
          --shadow-present: 0 4px 6px -1px rgba(50, 50, 93, 0.11);
          
          /* Colors for light theme */
          --bg-card: #F9FAFB;
          --text-card-foreground: #260F07;
          --text-muted-foreground: #A69287;
          --bg-muted: #E5E7EB;
        }
        
        .dark {
          --bg-card: var(--color-rich-loam);
          --text-card-foreground: var(--color-crisp-off-white);
          --text-muted-foreground: #A69287;
          --bg-muted: var(--color-deep-earth);
        }
        
        .boise-navbar {
          width: 100%;
          background: rgba(var(--bg-card), 0.95);
          backdrop-filter: blur(16px) saturate(1.8) contrast(1.1);
          box-shadow: var(--shadow-present);
          border-bottom: 1px solid rgba(var(--text-muted-foreground), 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        
        .boise-navbar-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 0.75rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .boise-navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-card-foreground);
        }
        
        .boise-navbar-logo-icon {
          width: 2rem;
          height: 2rem;
          transform: rotate(-28deg);
          fill: var(--color-rusty-orange);
        }
        
        .boise-navbar-title {
          font-family: var(--font-rajdhani);
          font-size: 1.5rem;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        .boise-navbar-title-heavy {
          font-weight: 800;
        }
        
        .boise-navbar-title-light {
          font-weight: 300;
        }
        
        .boise-navbar-subtitle {
          font-family: var(--font-rajdhani);
          font-size: 1rem;
          font-weight: 400;
          color: var(--text-muted-foreground);
          text-transform: lowercase;
          letter-spacing: 0.1em;
          text-align: center;
        }
        
        .boise-navbar-nav {
          display: none;
          align-items: center;
          gap: 0.25rem;
        }
        
        @media (min-width: 768px) {
          .boise-navbar-nav {
            display: flex;
          }
        }
        
        .boise-navbar-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.375rem;
          font-family: var(--font-rajdhani);
          font-weight: 500;
          font-size: 1rem;
          color: var(--text-muted-foreground);
          text-decoration: none;
          border-radius: 0.25rem;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .boise-navbar-item:hover {
          color: var(--text-card-foreground);
          transform: scale(1.05);
        }
        
        .boise-navbar-item-home:hover { color: var(--color-nav-home); }
        .boise-navbar-item-events:hover { color: var(--color-nav-events); }
        .boise-navbar-item-directory:hover { color: var(--color-nav-directory); }
        .boise-navbar-item-armory:hover { color: var(--color-nav-armory); }
        .boise-navbar-item-intel:hover { color: var(--color-nav-intel); }
        .boise-navbar-item-marketplace:hover { color: var(--color-nav-marketplace); }
        .boise-navbar-item-forums:hover { color: var(--color-nav-forums); }
        
        .boise-navbar-item-active {
          color: var(--color-nav-forums);
        }
        
        .boise-navbar-separator {
          height: 1rem;
          width: 1px;
          background: var(--text-muted-foreground);
          opacity: 0.2;
          margin: 0 0.375rem;
        }
        
        .boise-navbar-auth {
          display: none;
          align-items: center;
          gap: 0.75rem;
        }
        
        @media (min-width: 768px) {
          .boise-navbar-auth {
            display: flex;
          }
        }
        
        .boise-navbar-button {
          padding: 0.5rem 1rem;
          font-family: var(--font-rajdhani);
          font-weight: 500;
          font-size: 0.875rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s ease;
        }
        
        .boise-navbar-button-primary {
          background: var(--color-rusty-orange);
          color: white;
        }
        
        .boise-navbar-button-primary:hover {
          background: var(--color-rusty-orange);
        }
        
        .boise-navbar-button-secondary {
          background: rgba(var(--color-rusty-orange), 0.1);
          color: var(--color-rusty-orange);
          border: 1px solid rgba(var(--color-rusty-orange), 0.3);
        }
        
        .boise-navbar-button-secondary:hover {
          background: rgba(var(--color-rusty-orange), 0.2);
        }
      </style>
    </head>
    <body>
      <nav class="boise-navbar">
        <div class="boise-navbar-container">
          <!-- Logo -->
          <a href="https://boisegunclub.com/" class="boise-navbar-logo">
            <svg class="boise-navbar-logo-icon" viewBox="0 0 256 256">
              <path d="M128,16,44.63,87.37,16,156.31,87.37,211.87,128,240l40.63-28.13L240,156.31,211.37,87.37Z"/>
            </svg>
            <div>
              <div class="boise-navbar-title">
                <span class="boise-navbar-title-heavy">The Boise</span>
                <span class="boise-navbar-title-light">Gun Club</span>
              </div>
              <div class="boise-navbar-subtitle">Treasure Valley Collective</div>
            </div>
          </a>
          
          <!-- Navigation -->
          <div class="boise-navbar-nav">
            <a href="https://boisegunclub.com/" class="boise-navbar-item boise-navbar-item-home">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128,16,44.63,87.37,16,156.31,87.37,211.87,128,240l40.63-28.13L240,156.31,211.37,87.37Z"/>
              </svg>
              Home
            </a>
            <div class="boise-navbar-separator"></div>
            
            <a href="https://boisegunclub.com/events" class="boise-navbar-item boise-navbar-item-events">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v52h24A8,8,0,0,1,168,148Z"/>
              </svg>
              Events
            </a>
            <div class="boise-navbar-separator"></div>
            
            <a href="https://boisegunclub.com/directory" class="boise-navbar-item boise-navbar-item-directory">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208V88H48ZM48,208V104H208V208Z"/>
              </svg>
              Directory
            </a>
            <div class="boise-navbar-separator"></div>
            
            <a href="https://boisegunclub.com/forums/" class="boise-navbar-item boise-navbar-item-forums boise-navbar-item-active">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,128,67.94,67.94,0,0,1,246.4,139.2,8,8,0,0,1,244.8,150.4Z"/>
              </svg>
              Forums
            </a>
          </div>
          
          <!-- Auth Buttons -->
          <div class="boise-navbar-auth">
            <a href="https://boisegunclub.com/auth/login" class="boise-navbar-button boise-navbar-button-primary">
              Sign In
            </a>
            <a href="https://boisegunclub.com/auth/register" class="boise-navbar-button boise-navbar-button-secondary">
              Join Free
            </a>
          </div>
        </div>
      </nav>
      
      <!-- JavaScript for dynamic theming -->
      <script>
        // Detect NodeBB theme and apply
        function updateTheme() {
          const isDark = document.documentElement.classList.contains('dark') || 
                        document.body.classList.contains('dark') ||
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          document.documentElement.className = isDark ? 'dark' : 'light';
        }
        
        // Initialize and watch for changes
        updateTheme();
        
        // Watch for theme changes
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { 
          attributes: true, 
          attributeFilter: ['class'] 
        });
        observer.observe(document.body, { 
          attributes: true, 
          attributeFilter: ['class'] 
        });
      </script>
    </body>
    </html>
  `.trim()

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=300', // 5 minutes
      'Access-Control-Allow-Origin': 'https://boisegunclub.com',
      'Access-Control-Allow-Methods': 'GET',
      'X-Frame-Options': 'SAMEORIGIN'
    }
  })
}

/**
 * Return CSS for styling
 */
function getCSSResponse(theme: string) {
  const css = `
    /* Boise Gun Club Navbar CSS for NodeBB Integration */
    /* Add this to your NodeBB theme's CSS */
    
    /* Hide default NodeBB header if needed */
    .navbar.navbar-default {
      display: none !important;
    }
    
    /* Inject navbar styles */
    @import url('${process.env.NEXT_PUBLIC_SITE_URL || 'https://boisegunclub.com'}/api/navbar?format=css&theme=${theme}');
  `.trim()

  return new NextResponse(css, {
    headers: {
      'Content-Type': 'text/css',
      'Cache-Control': 'public, max-age=3600', // 1 hour
    }
  })
}

/**
 * Return JavaScript for dynamic integration
 */
function getJSResponse() {
  const js = `
    // Boise Gun Club Navbar Integration for NodeBB
    (function() {
      'use strict';
      
      // Inject navbar HTML
      function injectNavbar() {
        fetch('${process.env.NEXT_PUBLIC_SITE_URL || 'https://boisegunclub.com'}/api/navbar')
          .then(response => response.text())
          .then(html => {
            // Create container
            const container = document.createElement('div');
            container.innerHTML = html;
            
            // Insert at top of body
            document.body.insertBefore(container, document.body.firstChild);
            
            // Adjust main content margins
            const mainContent = document.querySelector('#content, .main-content, [component="category"]');
            if (mainContent) {
              mainContent.style.marginTop = '4rem';
            }
          })
      }
      
      // Initialize when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNavbar);
      } else {
        injectNavbar();
      }
    })();
  `.trim()

  return new NextResponse(js, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600', // 1 hour
    }
  })
}