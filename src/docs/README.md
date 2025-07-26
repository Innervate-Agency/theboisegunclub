# Documentation Directory

This directory contains **safe, curated MDX documentation** that appears in Storybook.

## Rules for MDX Files in This Directory

### ✅ **SAFE TO ADD:**
- Documentation pages
- Design system guides  
- Business context
- Code guidelines

### ❌ **NEVER ADD:**
- Random MDX files with untested syntax
- Files with complex JSX or template literals
- Auto-generated MDX content

### 🔒 **SAFETY REQUIREMENTS:**
1. **Test locally first**: Run `npm run storybook` after adding any MDX file
2. **Keep it simple**: Use basic Markdown, avoid complex JSX
3. **Escape special characters**: Use backticks carefully, prefer code blocks
4. **Validate frontmatter**: Ensure YAML front matter is valid

## Current Documentation Files

- `AI-Enforcement.mdx` - AI coding enforcement checklist
- `Business-Context.mdx` - Business strategy and context
- `Code-Guidelines.mdx` - Development guidelines
- `Design-System.mdx` - Design system documentation

## Adding New Documentation

1. Create your MDX file with proper frontmatter:
   ```yaml
   ---
   title: 'Documentation/Your Title'
   ---
   ```

2. Test locally:
   ```bash
   npm run storybook:fix
   npm run storybook
   ```

3. If it breaks, move it out and fix the syntax before re-adding.

**This directory is the ONLY place where MDX documentation should live.**