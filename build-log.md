# Build and Lint Error/Warning Log

This file contains the complete output from `npm run build` and `npm run lint --max-warnings=0` commands, capturing all TypeScript and ESLint issues that need to be addressed.

## Build Command Output (`npm run build`)

```
> theboisegunclub@0.1.0 build
> next build

   ▲ Next.js 15.4.4

   Creating an optimized production build ...
 ⚠ Compiled with warnings in 1000ms

./src/app/components-demo/page.tsx
Attempted import error: 'NewThemeToggle' is not exported from '@/components/ui/NewThemeToggle' (imported as 'NewThemeToggle').

Import trace for requested module:
./src/app/components-demo/page.tsx

./src/app/components-demo/page.tsx
Attempted import error: 'NewThemeToggle' is not exported from '@/components/ui/NewThemeToggle' (imported as 'NewThemeToggle').

Import trace for requested module:
./src/app/components-demo/page.tsx

./src/app/directory/page.tsx
Attempted import error: 'NewThemeToggle' is not exported from '@/components/ui/NewThemeToggle' (imported as 'NewThemeToggle').

Import trace for requested module:
./src/app/directory/page.tsx

./src/app/directory/page.tsx
Attempted import error: 'LoadingSpinner' is not exported from '@/components/ui/LoadingSpinner' (imported as 'LoadingSpinner').

Import trace for requested module:
./src/app/directory/page.tsx

./src/app/events/page.tsx
Attempted import error: 'NewThemeToggle' is not exported from '@/components/ui/NewThemeToggle' (imported as 'NewThemeToggle').

Import trace for requested module:
./src/app/events/page.tsx

./src/app/events/page.tsx
Attempted import error: 'LoadingSpinner' is not exported from '@/components/ui/LoadingSpinner' (imported as 'LoadingSpinner').

Import trace for requested module:
./src/app/events/page.tsx

./src/app/page.tsx
Attempted import error: 'LoadingSpinner' is not exported from '@/components/ui/LoadingSpinner' (imported as 'LoadingSpinner').

Import trace for requested module:
./src/app/page.tsx

./src/app/training/page.tsx
Attempted import error: 'NewThemeToggle' is not exported from '@/components/ui/NewThemeToggle' (imported as 'NewThemeToggle').

Import trace for requested module:
./src/app/training/page.tsx

./src/app/training/page.tsx
Attempted import error: 'LoadingSpinner' is not exported from '@/components/ui/LoadingSpinner' (imported as 'LoadingSpinner').

Import trace for requested module:
./src/app/training/page.tsx


Failed to compile.

./src/app/directory/page.tsx
8:47  Warning: 'Phone' is defined but never used.  @typescript-eslint/no-unused-vars
8:54  Warning: 'Globe' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/events/page.tsx
9:35  Warning: 'Trophy' is defined but never used.  @typescript-eslint/no-unused-vars
9:43  Warning: 'Target' is defined but never used.  @typescript-eslint/no-unused-vars
10:25  Warning: 'DollarSign' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/page.tsx
14:50  Warning: 'ArrowRight' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/training/page-corrupted.tsx
26:10  Error: Parsing error: Invalid character.

./src/app/training/page-simple.tsx
9:11  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
9:26  Warning: 'Users' is defined but never used.  @typescript-eslint/no-unused-vars
9:33  Warning: 'Clock' is defined but never used.  @typescript-eslint/no-unused-vars
10:3  Warning: 'BookOpen' is defined but never used.  @typescript-eslint/no-unused-vars
10:13  Warning: 'CheckCircle' is defined but never used.  @typescript-eslint/no-unused-vars
13:10  Warning: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/training/page.tsx
9:11  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
9:26  Warning: 'Users' is defined but never used.  @typescript-eslint/no-unused-vars
9:33  Warning: 'Clock' is defined but never used.  @typescript-eslint/no-unused-vars
10:3  Warning: 'BookOpen' is defined but never used.  @typescript-eslint/no-unused-vars
10:13  Warning: 'CheckCircle' is defined but never used.  @typescript-eslint/no-unused-vars
13:10  Warning: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/marketing/service-grid.tsx
4:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/FacilityCard.tsx
133:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

./src/components/ui/UnsplashImage.tsx
39:20  Warning: 'setImageSrc' is assigned a value but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/VendorCard.tsx
8:8  Warning: 'Image' is defined but never used.  @typescript-eslint/no-unused-vars
9:65  Warning: 'ExternalLink' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/blog-article.tsx
11:44  Warning: 'ArrowRight' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/brand-carousel.tsx
43:20  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
56:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
57:44  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
58:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
138:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

./src/components/ui/callout-card.tsx
70:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
120:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type

./src/components/ui/contact-form.tsx
12:10  Warning: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/enhanced-badge.tsx
123:46  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
151:38  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
178:42  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any

./src/components/ui/enhanced-card.tsx
84:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
98:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
112:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
126:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
137:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type

./src/components/ui/icon-showcase.tsx
16:70  Warning: 'ArrowLeft' is defined but never used.  @typescript-eslint/no-unused-vars
17:9  Warning: 'Minus' is defined but never used.  @typescript-eslint/no-unused-vars
17:16  Warning: 'X' is defined but never used.  @typescript-eslint/no-unused-vars
17:19  Warning: 'Check' is defined but never used.  @typescript-eslint/no-unused-vars
17:26  Warning: 'Info' is defined but never used.  @typescript-eslint/no-unused-vars
17:32  Warning: 'AlertTriangle' is defined but never used.  @typescript-eslint/no-unused-vars
17:47  Warning: 'AlertCircle' is defined but never used.  @typescript-eslint/no-unused-vars
20:3  Warning: 'MessageCircle' is defined but never used.  @typescript-eslint/no-unused-vars
20:18  Warning: 'Heart' is defined but never used.  @typescript-eslint/no-unused-vars
20:25  Warning: 'Share2' is defined but never used.  @typescript-eslint/no-unused-vars
20:33  Warning: 'Bookmark' is defined but never used.  @typescript-eslint/no-unused-vars
20:43  Warning: 'ThumbsUp' is defined but never used.  @typescript-eslint/no-unused-vars
20:53  Warning: 'Eye' is defined but never used.  @typescript-eslint/no-unused-vars
26:19  Warning: 'Trash2' is defined but never used.  @typescript-eslint/no-unused-vars
26:27  Warning: 'Download' is defined but never used.  @typescript-eslint/no-unused-vars
26:37  Warning: 'Upload' is defined but never used.  @typescript-eslint/no-unused-vars
26:45  Warning: 'Copy' is defined but never used.  @typescript-eslint/no-unused-vars
26:51  Warning: 'ExternalLink' is defined but never used.  @typescript-eslint/no-unused-vars
29:3  Warning: 'Sun' is defined but never used.  @typescript-eslint/no-unused-vars
29:8  Warning: 'Moon' is defined but never used.  @typescript-eslint/no-unused-vars
29:14  Warning: 'Cloud' is defined but never used.  @typescript-eslint/no-unused-vars
29:21  Warning: 'CloudRain' is defined but never used.  @typescript-eslint/no-unused-vars
29:32  Warning: 'Wind' is defined but never used.  @typescript-eslint/no-unused-vars
29:48  Warning: 'Trees' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/navigation-fusion.tsx
6:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/pricing-table.tsx
9:33  Warning: 'Crown' is defined but never used.  @typescript-eslint/no-unused-vars
392:27  Warning: 'index' is defined but never used. Allowed unused args must match /^_/u.  @typescript-eslint/no-unused-vars

./src/components/ui/site-navigation.tsx
113:15  Error: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead. See: https://nextjs.org/docs/messages/no-html-link-for-pages  @next/next/no-html-link-for-pages

./src/components/ui/testimonial-carousel.tsx
146:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
```

## Lint Command Output (`npm run lint --max-warnings=0`)

```
> theboisegunclub@0.1.0 lint
> next lint --max-warnings=0


./src/app/directory/page.tsx
8:47  Warning: 'Phone' is defined but never used.  @typescript-eslint/no-unused-vars
8:54  Warning: 'Globe' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/events/page.tsx
9:35  Warning: 'Trophy' is defined but never used.  @typescript-eslint/no-unused-vars
9:43  Warning: 'Target' is defined but never used.  @typescript-eslint/no-unused-vars
10:25  Warning: 'DollarSign' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/page.tsx
14:50  Warning: 'ArrowRight' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/training/page-corrupted.tsx
26:10  Error: Parsing error: Invalid character.

./src/app/training/page-simple.tsx
9:11  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
9:26  Warning: 'Users' is defined but never used.  @typescript-eslint/no-unused-vars
9:33  Warning: 'Clock' is defined but never used.  @typescript-eslint/no-unused-vars
10:3  Warning: 'BookOpen' is defined but never used.  @typescript-eslint/no-unused-vars
10:13  Warning: 'CheckCircle' is defined but never used.  @typescript-eslint/no-unused-vars
13:10  Warning: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars

./src/app/training/page.tsx
9:11  Warning: 'Shield' is defined but never used.  @typescript-eslint/no-unused-vars
9:26  Warning: 'Users' is defined but never used.  @typescript-eslint/no-unused-vars
9:33  Warning: 'Clock' is defined but never used.  @typescript-eslint/no-unused-vars
10:3  Warning: 'BookOpen' is defined but never used.  @typescript-eslint/no-unused-vars
10:13  Warning: 'CheckCircle' is defined but never used.  @typescript-eslint/no-unused-vars
13:10  Warning: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/marketing/service-grid.tsx
4:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/FacilityCard.tsx
133:17  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

./src/components/ui/UnsplashImage.tsx
39:20  Warning: 'setImageSrc' is assigned a value but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/VendorCard.tsx
8:8  Warning: 'Image' is defined but never used.  @typescript-eslint/no-unused-vars
9:65  Warning: 'ExternalLink' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/blog-article.tsx
11:44  Warning: 'ArrowRight' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/brand-carousel.tsx
43:20  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
56:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
57:44  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
58:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
138:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

./src/components/ui/callout-card.tsx
70:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
120:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type

./src/components/ui/contact-form.tsx
12:10  Warning: 'Badge' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/enhanced-badge.tsx
123:46  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
151:38  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
178:42  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any

./src/components/ui/enhanced-card.tsx
84:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
98:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
112:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
126:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
137:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type

./src/components/ui/icon-showcase.tsx
16:70  Warning: 'ArrowLeft' is defined but never used.  @typescript-eslint/no-unused-vars
17:9  Warning: 'Minus' is defined but never used.  @typescript-eslint/no-unused-vars
17:16  Warning: 'X' is defined but never used.  @typescript-eslint/no-unused-vars
17:19  Warning: 'Check' is defined but never used.  @typescript-eslint/no-unused-vars
17:26  Warning: 'Info' is defined but never used.  @typescript-eslint/no-unused-vars
17:32  Warning: 'AlertTriangle' is defined but never used.  @typescript-eslint/no-unused-vars
17:47  Warning: 'AlertCircle' is defined but never used.  @typescript-eslint/no-unused-vars
20:3  Warning: 'MessageCircle' is defined but never used.  @typescript-eslint/no-unused-vars
20:18  Warning: 'Heart' is defined but never used.  @typescript-eslint/no-unused-vars
20:25  Warning: 'Share2' is defined but never used.  @typescript-eslint/no-unused-vars
20:33  Warning: 'Bookmark' is defined but never used.  @typescript-eslint/no-unused-vars
20:43  Warning: 'ThumbsUp' is defined but never used.  @typescript-eslint/no-unused-vars
20:53  Warning: 'Eye' is defined but never used.  @typescript-eslint/no-unused-vars
26:19  Warning: 'Trash2' is defined but never used.  @typescript-eslint/no-unused-vars
26:27  Warning: 'Download' is defined but never used.  @typescript-eslint/no-unused-vars
26:37  Warning: 'Upload' is defined but never used.  @typescript-eslint/no-unused-vars
26:45  Warning: 'Copy' is defined but never used.  @typescript-eslint/no-unused-vars
26:51  Warning: 'ExternalLink' is defined but never used.  @typescript-eslint/no-unused-vars
29:3  Warning: 'Sun' is defined but never used.  @typescript-eslint/no-unused-vars
29:8  Warning: 'Moon' is defined but never used.  @typescript-eslint/no-unused-vars
29:14  Warning: 'Cloud' is defined but never used.  @typescript-eslint/no-unused-vars
29:21  Warning: 'CloudRain' is defined but never used.  @typescript-eslint/no-unused-vars
29:32  Warning: 'Wind' is defined but never used.  @typescript-eslint/no-unused-vars
29:48  Warning: 'Trees' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/navigation-fusion.tsx
6:10  Warning: 'Button' is defined but never used.  @typescript-eslint/no-unused-vars

./src/components/ui/pricing-table.tsx
9:33  Warning: 'Crown' is defined but never used.  @typescript-eslint/no-unused-vars
392:27  Warning: 'index' is defined but never used. Allowed unused args must match /^_/u.  @typescript-eslint/no-unused-vars

./src/components/ui/site-navigation.tsx
113:15  Error: Do not use an `<a>` element to navigate to `/`. Use `<Link />` from `next/link` instead. See: https://nextjs.org/docs/messages/no-html-link-for-pages  @next/next/no-html-link-for-pages

./src/components/ui/testimonial-carousel.tsx
146:19  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` or a custom image loader to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
```

## Summary

The log contains:

### Critical Build Errors (preventing successful build):
- **Import Errors**: Multiple files attempting to import `NewThemeToggle` and `LoadingSpinner` components that are not properly exported
- **Parsing Error**: `./src/app/training/page-corrupted.tsx` has an invalid character at line 26:10

### ESLint Errors:
- **Empty Object Type Errors**: 7 errors across `callout-card.tsx` and `enhanced-card.tsx` 
- **Next.js Navigation Error**: Using `<a>` instead of `<Link />` in `site-navigation.tsx`

### ESLint Warnings:
- **Unused Variables**: 40+ warnings for unused imports and variables
- **No Explicit Any**: 7 warnings for using `any` type
- **Next.js Image Optimization**: 3 warnings about using `<img>` instead of `<Image />`

### Exit Codes:
- Build command: Exit code 1 (failure)
- Lint command: Exit code 1 (failure due to --max-warnings=0)

This log serves as the single source of truth for all TypeScript and ESLint issues that need to be addressed in the codebase.
