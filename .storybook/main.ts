import type { StorybookConfig } from '@storybook/nextjs-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Foundation/ColorPalette-FIXED.stories.tsx',
    '../src/stories/Foundation/TypographyScale.stories.tsx',
    '../src/stories/Foundation/SpacingSystem.stories.tsx',
    '../src/stories/Foundation/DesignTokens.stories.tsx',
    '../src/stories/Components/Atoms/Input.stories.tsx',
    '../src/stories/Components/Atoms/Button.stories.tsx',
    '../src/stories/Business/BrandCarousel.stories.tsx',
    '../src/stories/Business/BusinessContext.stories.tsx',
    '../src/stories/Business/Pricing-Table.stories.tsx',
    '../src/stories/Business/TestimonialCarousel.stories.tsx',
    '../src/stories/Business/VendorCard.stories.tsx',
    '../src/stories/Components/Atoms/AccessibilityFAB.stories.tsx',
    '../src/stories/Components/Atoms/Alert.stories.tsx',
    '../src/stories/Components/Atoms/AspectRatio.stories.tsx',
    '../src/stories/Components/Atoms/Avatar.stories.tsx',
    '../src/stories/Components/Atoms/Badge-Enhanced.stories.tsx',
    '../src/stories/Components/Atoms/Card.stories.tsx',
    '../src/stories/Components/Atoms/Checkbox.stories.tsx',
    '../src/stories/Components/Atoms/IdahoTumbleweed.stories.tsx',
    '../src/stories/Components/Atoms/InputOTP.stories.tsx',
    '../src/stories/Components/Atoms/Label.stories.tsx',
    '../src/stories/Components/Atoms/LoadingSpinner.stories.tsx',
    '../src/stories/Components/Atoms/ProductShowcaseCard.stories.tsx',
    '../src/stories/Components/Atoms/Progress.stories.tsx',
    '../src/stories/Components/Atoms/RadioGroup.stories.tsx',
    '../src/stories/Components/Atoms/Resizable.stories.tsx',
    '../src/stories/Components/Atoms/ScrollArea.stories.tsx',
    '../src/stories/Components/Atoms/SectionDivider.stories.tsx',
    '../src/stories/Components/Atoms/Select.stories.tsx',
    '../src/stories/Components/Atoms/Separator.stories.tsx',
    '../src/stories/Components/Atoms/Skeleton.stories.tsx',
    '../src/stories/Components/Atoms/Slider.stories.tsx',
    '../src/stories/Components/Atoms/Sonner.stories.tsx',
    '../src/stories/Components/Atoms/Switch.stories.tsx',
    '../src/stories/Components/Atoms/Textarea.stories.tsx',
    '../src/stories/Components/Atoms/Toggle.stories.tsx',
    '../src/stories/Components/Atoms/ToggleGroup.stories.tsx',
    '../src/stories/Components/Atoms/Tooltip.stories.tsx',
    '../src/stories/Components/Molecules/Accordion.stories.tsx',
    '../src/stories/Components/Molecules/AlertDialog.stories.tsx',
    '../src/stories/Components/Molecules/Breadcrumb.stories.tsx',
    '../src/stories/Components/Molecules/Callout-Card.stories.tsx',
    '../src/stories/Components/Molecules/Carousel.stories.tsx',
    '../src/stories/Components/Molecules/Chart.stories.tsx',
    '../src/stories/Components/Molecules/Collapsible.stories.tsx',
    '../src/stories/Components/Molecules/Command.stories.tsx',
    '../src/stories/Components/Molecules/Contact-Form.stories.tsx',
    '../src/stories/Components/Molecules/ContextMenu.stories.tsx',
    '../src/stories/Components/Molecules/Dialog.stories.tsx',
    '../src/stories/Components/Molecules/DirectoryCard.stories.tsx',
    '../src/stories/Components/Molecules/Drawer.stories.tsx',
    '../src/stories/Components/Molecules/DropdownMenu.stories.tsx',
    '../src/stories/Components/Molecules/FAQAccordion.stories.tsx',
    '../src/stories/Components/Molecules/FeatureTrustPoints.stories.tsx',
    '../src/stories/Components/Molecules/Form.stories.tsx',
    '../src/stories/Components/Molecules/HoverCard.stories.tsx',
    '../src/stories/Components/Molecules/Menubar.stories.tsx',
    '../src/stories/Components/Molecules/NavigationMenu.stories.tsx',
    '../src/stories/Components/Molecules/Pagination.stories.tsx',
    '../src/stories/Components/Molecules/Popover.stories.tsx',
    '../src/stories/Components/Molecules/Sheet.stories.tsx',
    '../src/stories/Components/Molecules/StatCard.stories.tsx',
    '../src/stories/Components/Molecules/Table.stories.tsx',
    '../src/stories/Components/Molecules/Tabs.stories.tsx',
    '../src/stories/Components/Organisms/ArmorySidebar.stories.tsx',
    '../src/stories/Components/Organisms/Calendar.stories.tsx',
    '../src/stories/Components/Organisms/FacilityCard.stories.tsx',
    '../src/stories/Components/Organisms/FeatureGrid.stories.tsx',
    '../src/stories/Components/Organisms/Mega-Hero.stories.tsx',
    '../src/stories/Components/Organisms/Page-Hero.stories.tsx',
    '../src/stories/Components/Organisms/Sidebar.stories.tsx',
    '../src/stories/Components/Organisms/Site-Footer.stories.tsx',
    '../src/stories/Components/Organisms/SiteNavigation.stories.tsx',
    '../src/stories/Foundation/ButtonMicroAnimations.stories.tsx',
    '../src/stories/Foundation/ColorPalette.stories.tsx',
    '../src/stories/Foundation/DarkMode-Test.stories.tsx',
    '../src/stories/Foundation/GradientShowcase.stories.tsx',
    '../src/stories/Foundation/IconShowcase.stories.tsx',
    '../src/stories/Foundation/NewThemeToggle.stories.tsx',
    '../src/stories/Foundation/ShadowSystem.stories.tsx',
    '../src/stories/Foundation/ThemeProvider.stories.tsx',
    '../src/stories/Foundation/ThemeSystem.stories.tsx',
    '../src/stories/Foundation/ThemeTest.stories.tsx',
    '../src/stories/Molecules/ArticleCard.stories.tsx',
    '../src/stories/Organisms/AlternatingFeatureSpotlight.stories.tsx',
    '../src/stories/Pages/Blog-Article.stories.tsx',
    '../src/stories/Pages/GalleryShowcase.stories.tsx',
    '../src/stories/Pages/LandingPage.stories.tsx',
    '../src/stories/Pages/StatsShowcase.stories.tsx',
    '../src/stories/Patterns/AnimatedSplashCard.stories.tsx',
    '../src/stories/Patterns/Breadcrumb-Hero.stories.tsx',
    '../src/stories/Patterns/ComponentCombinations.stories.tsx',
    '../src/stories/Patterns/FloatingBackground.stories.tsx',
    '../src/stories/Patterns/MicaGlassSystem.stories.tsx',
    '../src/stories/Patterns/NavigationRolloverEffects.stories.tsx',
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // 'storybook-design-token'
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
    // Modern Storybook features
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