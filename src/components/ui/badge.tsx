import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { 
  Trophy, GraduationCap, Building2, Heart, Users, Wrench,
  Shield, Target, Settings, BookOpen, AlertTriangle, Zap,
  CheckCircle, Info, Award, Crown, Star
} from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border border-border/40 bg-background text-foreground hover:bg-muted/50",
        secondary: "border border-secondary/40 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border border-destructive/40 bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input/40 text-foreground hover:bg-accent hover:text-accent-foreground",
        
        // Event Type Categories
        competition: "border border-slate-blue/40 bg-slate-blue/10 text-slate-blue hover:bg-slate-blue/20",
        training: "border border-sandy-ochre/40 bg-sandy-ochre/10 text-sandy-ochre hover:bg-sandy-ochre/20",
        expo: "border border-info-river/40 bg-info-river/10 text-info-river hover:bg-info-river/20",
        charity: "border border-sagebrush-green/40 bg-sagebrush-green/10 text-sagebrush-green hover:bg-sagebrush-green/20",
        social: "border border-rusty-orange/40 bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20",
        demo: "border border-canyon-clay/40 bg-canyon-clay/10 text-canyon-clay hover:bg-canyon-clay/20",
        
        // Directory Categories
        ffl: "border border-slate-blue/40 bg-slate-blue/10 text-slate-blue hover:bg-slate-blue/20",
        range: "border border-rusty-orange/40 bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20",
        gunsmith: "border border-foothills-purple/40 bg-foothills-purple/10 text-foothills-purple hover:bg-foothills-purple/20",
        training_facility: "border border-sandy-ochre/40 bg-sandy-ochre/10 text-sandy-ochre hover:bg-sandy-ochre/20",
        club: "border border-sagebrush-green/40 bg-sagebrush-green/10 text-sagebrush-green hover:bg-sagebrush-green/20",
        
        // Guide Categories
        legal: "border border-slate-blue/40 bg-slate-blue/10 text-slate-blue hover:bg-slate-blue/20",
        safety: "border border-canyon-clay/40 bg-canyon-clay/10 text-canyon-clay hover:bg-canyon-clay/20",
        technique: "border border-sandy-ochre/40 bg-sandy-ochre/10 text-sandy-ochre hover:bg-sandy-ochre/20",
        maintenance: "border border-foothills-purple/40 bg-foothills-purple/10 text-foothills-purple hover:bg-foothills-purple/20",
        
        // Status badges
        success: "border border-sagebrush-green/40 bg-sagebrush-green/10 text-sagebrush-green hover:bg-sagebrush-green/20",
        warning: "border border-sandy-ochre/40 bg-sandy-ochre/10 text-sandy-ochre hover:bg-sandy-ochre/20",
        info: "border border-info-river/40 bg-info-river/10 text-info-river hover:bg-info-river/20",
        premium: "border border-sandy-ochre/40 bg-sandy-ochre/10 text-sandy-ochre hover:bg-sandy-ochre/20",
        elite: "border border-rusty-orange/40 bg-rusty-orange/10 text-rusty-orange hover:bg-rusty-orange/20",
        verified: "border border-sagebrush-green/40 bg-sagebrush-green/10 text-sagebrush-green hover:bg-sagebrush-green/20",
        
        flat: "border-transparent bg-muted text-muted-foreground",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      roundness: {
        pill: "rounded-pill", 
        rounded: "rounded-2xl", 
        moderate: "rounded-md",
        square: "rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      roundness: "pill",
    },
  }
)

// Icon mapping for badge variants
const getBadgeIcon = (variant?: string) => {
  switch (variant) {
    // Event Type Categories
    case 'competition': return <Trophy className="w-3 h-3 mr-1" />
    case 'training': return <GraduationCap className="w-3 h-3 mr-1" />
    case 'expo': return <Building2 className="w-3 h-3 mr-1" />
    case 'charity': return <Heart className="w-3 h-3 mr-1" />
    case 'social': return <Users className="w-3 h-3 mr-1" />
    case 'demo': return <Wrench className="w-3 h-3 mr-1" />
    
    // Directory Categories
    case 'ffl': return <Shield className="w-3 h-3 mr-1" />
    case 'range': return <Target className="w-3 h-3 mr-1" />
    case 'gunsmith': return <Settings className="w-3 h-3 mr-1" />
    case 'training_facility': return <GraduationCap className="w-3 h-3 mr-1" />
    case 'club': return <Users className="w-3 h-3 mr-1" />
    
    // Guide Categories
    case 'legal': return <Shield className="w-3 h-3 mr-1" />
    case 'safety': return <AlertTriangle className="w-3 h-3 mr-1" />
    case 'technique': return <Target className="w-3 h-3 mr-1" />
    case 'maintenance': return <Settings className="w-3 h-3 mr-1" />
    
    // Status badges
    case 'success': return <CheckCircle className="w-3 h-3 mr-1" />
    case 'warning': return <AlertTriangle className="w-3 h-3 mr-1" />
    case 'info': return <Info className="w-3 h-3 mr-1" />
    case 'premium': return <Award className="w-3 h-3 mr-1" />
    case 'elite': return <Crown className="w-3 h-3 mr-1" />
    case 'verified': return <CheckCircle className="w-3 h-3 mr-1" />
    
    default: return null
  }
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  showIcon?: boolean
}

function Badge({ className, variant, size, roundness, showIcon = true, children, ...props }: BadgeProps) {
  const icon = showIcon ? getBadgeIcon(variant) : null
  
  return (
    <div className={cn(badgeVariants({ variant, size, roundness }), className)} {...props}>
      {icon}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }