import type { MDXComponents } from 'mdx/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'
import { 
  AlertTriangle, 
  Info, 
  Shield, 
  CheckCircle,
  Scale,
  Target,
  BookOpen
} from 'lucide-react'

// Custom components for MDX content
function LegalDisclaimer({ children }: { children: React.ReactNode }) {
  return (
    <Alert variant="warning" className="my-base">
      <Scale className="h-4 w-4" />
      <AlertTitle className="font-rajdhani font-bold">Legal Disclaimer</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  )
}

function SafetyWarning({ children }: { children: React.ReactNode }) {
  return (
    <Alert variant="destructive" className="my-base">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle className="font-rajdhani font-bold">Safety Warning</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  )
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <Alert variant="info" className="my-base">
      <Info className="h-4 w-4" />
      <AlertTitle className="font-rajdhani font-bold">Information</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  )
}

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <Alert variant="success" className="my-base">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle className="font-rajdhani font-bold">Pro Tip</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  )
}

function CallToAction({ text, href }: { text: string; href?: string }) {
  return (
    <div className="my-lg p-base bg-gradient-to-r from-primary/10 to-secondary/10 rounded-sm border border-primary/20">
      <div className="text-center">
        <Button 
          asChild={!!href}
          size="lg" 
          className="font-rajdhani font-bold"
        >
          {href ? <a href={href}>{text}</a> : <span>{text}</span>}
        </Button>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  const IconComponent = icon === 'target' ? Target : 
                       icon === 'shield' ? Shield : 
                       icon === 'book' ? BookOpen : Target

  return (
    <Card className="my-base">
      <CardHeader className="pb-sm">
        <CardTitle className="flex items-center gap-xs font-rajdhani">
          <IconComponent className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

// Define custom components for MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allow customizing built-in components, e.g. to add styling.
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "font-rajdhani text-display-sm md:text-display-md font-bold text-card-foreground mb-base mt-lg scroll-m-20 tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "font-rajdhani text-heading-lg md:text-heading-xl font-bold text-card-foreground mb-base mt-lg scroll-m-20 tracking-tight border-b border-border pb-xs",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "font-rajdhani text-heading-md md:text-heading-lg font-bold text-card-foreground mb-sm mt-base scroll-m-20 tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "font-rajdhani text-heading-sm md:text-heading-md font-bold text-card-foreground mb-sm mt-base scroll-m-20 tracking-tight",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          "font-rajdhani text-body-lg font-bold text-card-foreground mb-xs mt-sm scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          "font-rajdhani text-body-md font-bold text-card-foreground mb-xs mt-sm scroll-m-20",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "text-body-md text-card-foreground leading-relaxed mb-base [&:not(:first-child)]:mt-base",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-base ml-base list-disc [&>li]:mt-xs text-card-foreground",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-base ml-base list-decimal [&>li]:mt-xs text-card-foreground",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li
        className={cn(
          "text-body-md leading-relaxed",
          className
        )}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-base border-l-4 border-primary pl-base italic text-muted-foreground bg-muted/30 py-sm rounded-r-sm",
          className
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cn(
          "rounded-sm border border-border shadow-present max-w-full h-auto my-base",
          className
        )}
        alt={alt}
        {...props}
      />
    ),
    hr: ({ ...props }) => (
      <hr className="my-lg border-border" {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-base w-full overflow-auto">
        <table
          className={cn(
            "w-full border-collapse border border-border rounded-sm",
            className
          )}
          {...props}
        />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "border-b border-border transition-colors hover:bg-muted/50",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "h-12 px-base text-left align-middle font-rajdhani font-bold text-card-foreground bg-muted/30 [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "p-base align-middle text-body-sm [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-card-foreground",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-base mt-base overflow-x-auto rounded-sm bg-muted p-base font-mono text-sm",
          className
        )}
        {...props}
      />
    ),
    // Custom components for firearms content
    LegalDisclaimer,
    SafetyWarning,
    InfoBox,
    ProTip,
    CallToAction,
    FeatureCard,
    Badge,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Alert,
    AlertDescription,
    AlertTitle,
    ...components,
  }
}
