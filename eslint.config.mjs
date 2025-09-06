import js from "@eslint/js";
import ts from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

const eslintConfig = [{
  ignores: [".next/**"],
}, js.configs.recommended, ...ts.configs.recommended, {
  files: ["**/*.{js,mjs,cjs,jsx,mjs,ts,tsx}"],
  plugins: {
    "@next/next": nextPlugin,
    "react": react,
    "storybook": storybook,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    ...storybook.configs["flat/recommended"].rules,
    "react/no-unescaped-entities": ["warn", {"forbid": [">", "}"]}],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      React: "readonly",
    },
  },
}, {
  files: ["**/*.stories.*"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "storybook/no-redundant-story-name": "off",
  },
}, ...storybook.configs["flat/recommended"], ...storybook.configs["flat/recommended"]];

export default eslintConfig;
