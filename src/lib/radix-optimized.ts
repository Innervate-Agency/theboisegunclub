/**
 * Radix UI Tree-Shaking Optimization - 2025 Edition
 * 
 * This file implements the new tree-shakeable Radix UI approach
 * for maximum bundle size optimization. Only imports what we use.
 */

// Core Radix UI components with optimized imports
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

export {
  Button,
  buttonVariants,
} from '@/components/ui/button'

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export {
  Checkbox,
} from '@/components/ui/checkbox'

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export {
  Input,
} from '@/components/ui/input'

export {
  Label,
} from '@/components/ui/label'

export {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export {
  Progress,
} from '@/components/ui/progress'

export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export {
  Separator,
} from '@/components/ui/separator'

export {
  Slider,
} from '@/components/ui/slider'

export {
  Switch,
} from '@/components/ui/switch'

export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Performance: Lazy-loaded heavy components
export const LazyBadge = () => import('@/components/ui/badge').then(m => m.Badge)
export const LazyDataTable = () => import('@/components/ui/data-table')
export const LazyCalendar = () => import('@/components/ui/calendar')

// Bundle size monitoring helper
export const getRadixBundleSize = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const entries = performance.getEntriesByType('navigation')
    return entries[0]?.transferSize || 0
  }
  return 0
}