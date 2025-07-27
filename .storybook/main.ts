import type { StorybookConfig } from '@storybook/nextjs-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    // ONLY load .stories files - never loose MDX
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Documentation MDX files (safe, curated)
    '../src/docs/*.mdx',
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y', 
    '@storybook/addon-themes',
  ],

  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  staticDirs: ['../public'],

  // Error boundary to prevent build failures
  features: {
    buildStoriesJson: false,
  },

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }
    return config;
  }
};

export default config;