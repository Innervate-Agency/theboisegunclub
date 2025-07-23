import type { Preview } from '@storybook/nextjs-vite'
import { Rajdhani, Noto_Sans, Noto_Serif } from 'next/font/google'
import '../src/app/globals.css'

// Load the same fonts as the main app
const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: "--font-body", 
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
          value: '#f8f6f1', // range-white from design system
        },
        {
          name: 'tbgc-dark', 
          value: '#2F3135', // night-sight from design system
        },
        {
          name: 'shooting-bench',
          value: '#ede7de', // shooting-bench from design system
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
  decorators: [
    (Story) => (
      <div className={`${rajdhani.variable} ${notoSans.variable} ${notoSerif.variable} font-body antialiased`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;