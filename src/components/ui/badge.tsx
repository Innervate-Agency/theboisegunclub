import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  IconFire,
  IconAlertTriangle,
  IconInfoCircle,
  IconCheck,
  IconX,
  IconArrowUpRight,
  IconArrowDownRight,
  IconArrowRight,
  IconStar,
  IconBolt,
  IconFlame,
  IconShield,
  IconShieldCheck,
  IconLock,
  IconLockOpen,
  IconCircle,
  IconCircleDot,
  IconCircleCheck,
  IconCircleX,
  IconBell,
  IconCalendar,
  IconTag,
  IconUser,
  IconUsers,
  IconMapPin,
  IconBuildingStore,
  IconTruck,
  IconTool,
  IconRuler,
  IconScale,
  IconGavel,
  IconBook,
  IconCertificate,
} from "@tabler/icons-react";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Default
        default: "bg-light-peachy text-shared-dark border-shared-dark/25",
        // Dark Theme
        "dark-chocolate": "bg-dark-chocolate text-crisp-off-white border-crisp-off-white/25",
        "rusty-orange": "bg-rusty-orange text-dark-chocolate border-dark-chocolate/25",
        "crisp-off-white": "bg-crisp-off-white text-dark-chocolate border-dark-chocolate/25",
        "rich-loam": "bg-rich-loam text-crisp-off-white border-crisp-off-white/25",
        "warm-stone": "bg-warm-stone text-dark-chocolate border-dark-chocolate/25",
        "lodgepole-green": "bg-lodgepole-green text-dark-chocolate border-dark-chocolate/25",
        "deep-earth": "bg-deep-earth text-crisp-off-white border-crisp-off-white/25",
        "ember-glow": "bg-ember-glow text-dark-chocolate border-dark-chocolate/25",
        "warning-amber": "bg-warning-amber text-dark-chocolate border-dark-chocolate/25",
        "border-bark": "bg-border-bark text-crisp-off-white border-crisp-off-white/25",
        // Light Theme
        "light-peachy": "bg-light-peachy text-shared-dark border-shared-dark/25",
        "slate-blue": "bg-slate-blue text-crisp-off-white border-crisp-off-white/25",
        "shared-dark": "bg-shared-dark text-crisp-off-white border-crisp-off-white/25",
        "sandy-ochre": "bg-sandy-ochre text-dark-chocolate border-dark-chocolate/25",
        "dried-clay": "bg-dried-clay text-dark-chocolate border-dark-chocolate/25",
        "pale-stone": "bg-pale-stone text-dark-chocolate border-dark-chocolate/25",
        "sagebrush-green": "bg-sagebrush-green text-dark-chocolate border-dark-chocolate/25",
        "card-surface": "bg-card-surface text-dark-chocolate border-dark-chocolate/25",
        "warning-clay": "bg-warning-clay text-dark-chocolate border-dark-chocolate/25",
        "info-river": "bg-info-river text-crisp-off-white border-crisp-off-white/25",
        // Landscape Additions
        "foothills-purple": "bg-foothills-purple text-crisp-off-white border-crisp-off-white/25",
        "canyon-clay": "bg-canyon-clay text-crisp-off-white border-crisp-off-white/25",
        "high-desert-sage": "bg-high-desert-sage text-dark-chocolate border-dark-chocolate/25",
        // Mica
        mica: "mica-card text-card-foreground border-card-foreground/25",
        // Glass
        glass: "bg-popover/10 backdrop-blur-sm text-foreground border-border/20",
        // Situational
        lowFireDanger: "bg-sagebrush-green text-dark-chocolate border-dark-chocolate/25",
        highFireDanger: "bg-rusty-orange text-dark-chocolate border-dark-chocolate/25",
        rangeOpen: "bg-lodgepole-green text-dark-chocolate border-dark-chocolate/25",
        rangeClosed: "bg-canyon-clay text-crisp-off-white border-crisp-off-white/25",
        verified: "bg-slate-blue text-crisp-off-white border-crisp-off-white/25",
        unverified: "bg-warm-stone text-dark-chocolate border-dark-chocolate/25",
        inStock: "bg-sagebrush-green text-dark-chocolate border-dark-chocolate/25",
        outOfStock: "bg-rich-loam text-crisp-off-white border-crisp-off-white/25",
        new: "bg-ember-glow text-dark-chocolate border-dark-chocolate/25",
        updated: "bg-sandy-ochre text-dark-chocolate border-dark-chocolate/25",
        featured: "bg-foothills-purple text-crisp-off-white border-crisp-off-white/25",
        sponsored: "bg-high-desert-sage text-dark-chocolate border-dark-chocolate/25",
        sale: "bg-rusty-orange text-dark-chocolate border-dark-chocolate/25",
        clearance: "bg-canyon-clay text-crisp-off-white border-crisp-off-white/25",
        limited: "bg-warning-amber text-dark-chocolate border-dark-chocolate/25",
        membersOnly: "bg-slate-blue text-crisp-off-white border-crisp-off-white/25",
        public: "bg-lodgepole-green text-dark-chocolate border-dark-chocolate/25",
        comingSoon: "bg-info-river text-crisp-off-white border-crisp-off-white/25",
        cancelled: "bg-warm-stone text-dark-chocolate border-dark-chocolate/25",
        postponed: "bg-warning-clay text-dark-chocolate border-dark-chocolate/25",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        default: "text-xs px-2.5 py-0.5",
        lg: "text-body-sm px-3 py-micro",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconMap: { [key: string]: React.ElementType } = {
    default: IconInfoCircle,
    lowFireDanger: IconFlame,
    highFireDanger: IconFlame,
    rangeOpen: IconLockOpen,
    rangeClosed: IconLock,
    verified: IconShieldCheck,
    unverified: IconShield,
    inStock: IconCircleCheck,
    outOfStock: IconCircleX,
    new: IconStar,
    updated: IconBolt,
    featured: IconStar,
    sponsored: IconStar,
    sale: IconTag,
    clearance: IconTag,
    limited: IconAlertTriangle,
    membersOnly: IconUsers,
    public: IconUser,
    comingSoon: IconCalendar,
    cancelled: IconX,
    postponed: IconBell,
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  const Icon = variant ? iconMap[variant] || IconCircleDot : IconCircleDot;
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon || <Icon className="mr-1 h-4 w-4" />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };