import type { Preview } from '@storybook/nextjs-vite'
import { Rajdhani, Noto_Sans, Noto_Serif } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import '../src/app/globals.css'

// Load the same fonts as the main app - EXACT MATCH to layout.tsx
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
      default: 'tbgc-light',
      values: [
        {
          name: 'tbgc-light',
          value: '#F2D4D6', // light-peachy from design system
        },
        {
          name: 'tbgc-dark', 
          value: '#260F07', // dark-chocolate from design system
        },
        {
          name: 'rich-loam',
          value: '#311A0E', // rich-loam from design system
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  globals: {
    theme: 'light',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      const themeClass = theme === 'dark' ? 'dark' : '';

      return (
        <div className={`${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} font-noto-sans antialiased ${themeClass}`}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;