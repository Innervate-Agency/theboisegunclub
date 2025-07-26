import type { StorybookConfig } from '@storybook/nextjs-vite';

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
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  staticDirs: ['../public'],
  // Error boundary to prevent build failures
  features: {
    buildStoriesJson: false,
  },
};

export default config;