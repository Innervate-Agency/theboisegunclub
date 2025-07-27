// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],
  {
    // Custom rules to prevent debugging cycles
    rules: {
      // Make quote escaping warnings instead of errors
      "react/no-unescaped-entities": ["warn", {"forbid": [">", "}"]}],
      // Make unused vars warnings instead of errors
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      // Allow explicit any in stories (often needed for demos)
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  {
    // Even more permissive rules for story files
    files: ["**/*.stories.*"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "storybook/no-redundant-story-name": "off"
    }
  }
];

export default eslintConfig;
