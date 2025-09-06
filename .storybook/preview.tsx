import React from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import { Rajdhani, Noto_Sans, Noto_Serif } from 'next/font/google'
import '../src/app/globals.css'

// Load fonts exactly as in production
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Use our design system backgrounds instead
    },
    layout: 'fullscreen', // Let components control their own layout
    docs: {
      story: {
        inline: true,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'gruvbox', icon: 'star', title: 'Gruvbox' }
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      
      let themeClass = '';
      if (theme === 'dark') {
        themeClass = 'dark';
      } else if (theme === 'gruvbox') {
        themeClass = 'gruvbox';
      }

      React.useEffect(() => {
        // Apply theme to both html and body for proper CSS custom property inheritance
        document.documentElement.className = `${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} ${themeClass}`;
        document.body.className = `${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} font-noto-sans antialiased ${themeClass}`;
      }, [themeClass]);

      return (
        <div className={`${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} font-noto-sans antialiased ${themeClass}`} style={{ minHeight: '100vh' }}>
          <div className="bg-background text-foreground p-4">
            <Story />
          </div>
        </div>
      );
    },
  ],
  initialGlobals: {
    theme: 'light',
  },
};

export default preview;
