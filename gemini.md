# Gemini Code Assistant Context

This document provides context for the Gemini code assistant to effectively contribute to the Boise Gun Club project.

## Project Overview

This is a Next.js application for the Boise Gun Club, a Treasure Valley Firearms Hub. The project is bootstrapped with `create-next-app` and uses TypeScript. It appears to be a marketing or informational website.

## Technologies

*   **Framework:** Next.js 15
*   **Language:** TypeScript
*   **UI:** React 19
*   **Styling:** Tailwind CSS 4
*   **Component Library:** Custom components built with Storybook
*   **Linting:** ESLint
*   **Testing:**
    *   Vitest for unit and integration testing
    *   Playwright for end-to-end testing
    *   Storybook for component testing and documentation
    *   Chromatic for visual regression testing

## Commands

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the codebase.
*   `npm run storybook`: Starts the Storybook development server.
*   `npm run build-storybook`: Builds the Storybook for deployment.

## File Structure

*   `src/app`: The main application code, following the Next.js App Router structure.
*   `src/components`: Reusable React components.
    *   `src/components/ui`: UI components, likely following a specific pattern.
    *   `src/components/marketing`: Components specific to the marketing pages.
*   `src/lib`: Utility functions.
*   `src/stories`: Storybook stories for component development and documentation.
*   `public`: Static assets like images and SVGs.
*   `specs`: Specifications for components, likely used for a "spec-driven development" approach.
*   `.storybook`: Storybook configuration files.

## Component Development

The project uses a component-driven development approach with Storybook.

1.  **Specifications:** New components should have a corresponding specification file in the `specs` directory. The `.specstory.config.json` file indicates that specs are enforced before development.
2.  **Stories:** Each component should have a Storybook story in the `src/stories` directory.
3.  **Implementation:** The component itself is implemented in the `src/components` directory.

This workflow ensures that components are well-documented, tested, and adhere to the design system.

## Testing

The project has a comprehensive testing strategy:

*   **Unit/Integration Tests:** Write tests for individual components and functions using Vitest.
*   **End-to-End Tests:** Use Playwright to test user flows and interactions.
*   **Component Tests:** Use Storybook to test components in isolation and document their different states.
*   **Visual Regression Tests:** Use Chromatic to prevent unintended UI changes.
