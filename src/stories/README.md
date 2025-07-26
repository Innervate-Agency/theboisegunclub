# Stories Directory

This directory contains **component stories only**.

## File Types Allowed

### ✅ **ALWAYS SAFE:**
- `*.stories.tsx` - TypeScript React component stories
- `*.stories.ts` - TypeScript stories  
- `*.stories.jsx` - JavaScript React component stories
- `*.stories.js` - JavaScript stories

### ❌ **NEVER ADD:**
- `*.mdx` files (use `/src/docs/` instead)
- Random TypeScript/JavaScript files without `.stories` suffix
- Documentation files

## Story File Template

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@/components/ui/your-component';

const meta: Meta<typeof YourComponent> = {
  title: 'UI/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
```

## Safety Rules

1. **Only add `.stories.*` files here**
2. **Documentation goes in `/src/docs/`**  
3. **Test your stories**: `npm run storybook` should never break
4. **Follow naming convention**: `ComponentName.stories.tsx`

**This separation prevents documentation from breaking component stories.**