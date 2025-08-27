import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CalendarDaysIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

const meta: Meta = {
  title: 'Design System/Patterns/Navigation Rollover Effects',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Different rollover effect options for navigation items using TBGC color systemotion.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj

const navigationItems = [
  { label: "Home", icon: Home, color: "rusty-orange" },
  { label: "Events", icon: CalendarDaysIcon, color: "slate-blue" },
  { label: "Directory", icon: UsersIcon, color: "ayu-green" },
  { label: "Guides", icon: CursorArrowRaysIcon, color: "ayu-purple" },
  { label: "Map", icon: ShieldCheckIcon, color: "ayu-red" },
  { label: "Buy & Sell", icon: TrophyIcon, color: "ayu-teal" }
]

export const StripeStyleCenterOut: Story = {
  render: () => (
    <div className="bg-card p-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-6 text-card-foreground">
        Option 1: Stripe-Style Center-Out Underline
      </h2>
      <div className="bg-muted p-6 rounded-sm">
        <div className="flex items-center gap-8">
          {navigationItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-${item.color}`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              
              {/* Center-out underline */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${item.color} scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-200`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export const LeftToRightSlide: Story = {
  render: () => (
    <div className="bg-card p-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-6 text-card-foreground">
        Option 2: Left-to-Right Slide Underline
      </h2>
      <div className="bg-muted p-6 rounded-sm">
        <div className="flex items-center gap-8">
          {navigationItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-${item.color}`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              
              {/* Left-to-right slide underline */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${item.color} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export const FadeWithGlow: Story = {
  render: () => (
    <div className="bg-card p-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-6 text-card-foreground">
        Option 3: Fade + Subtle Glow Effect
      </h2>
      <div className="bg-muted p-6 rounded-sm">
        <div className="flex items-center gap-8">
          {navigationItems.slice(0, 4).map((item) => {
            const glowColors = {
              'rusty-orange': 'hover:drop-shadow-[0_0_8px_rgba(242,135,5,0.4)]',
              'slate-blue': 'hover:drop-shadow-[0_0_8px_rgba(0,159,237,0.4)]',
              'ayu-green': 'hover:drop-shadow-[0_0_8px_rgba(117,183,0,0.4)]',
              'ayu-purple': 'hover:drop-shadow-[0_0_8px_rgba(110,80,131,0.4)]'
            }
            
            return (
              <a
                key={item.label}
                href="#"
                className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-${item.color} ${glowColors[item.color as keyof typeof glowColors] || glowColors['rusty-orange']}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const ColorAndScale: Story = {
  render: () => (
    <div className="bg-card p-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-6 text-card-foreground">
        Option 4: Color + Scale Text Effect
      </h2>
      <div className="bg-muted p-6 rounded-sm">
        <div className="flex items-center gap-8">
          {navigationItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-${item.color} hover:scale-105`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export const BonusFireGradient: Story = {
  render: () => (
    <div className="bg-card p-8">
      <h2 className="text-2xl font-rajdhani font-bold mb-6 text-card-foreground">
        Bonus: FireIcon Gradient Underline (TBGC Special)
      </h2>
      <div className="bg-muted p-6 rounded-sm">
        <div className="flex items-center gap-8">
          {navigationItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href="#"
              className={`group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-${item.color}`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              
              {/* FireIcon gradient underline that grows from center */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rusty-orange to-sandy-ochre scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export const AllEffectsComparison: Story = {
  render: () => (
    <div className="bg-card p-8 space-y-8">
      <h2 className="text-3xl font-rajdhani font-bold text-card-foreground text-center mb-8">
        Navigation Rollover Effects Comparison
      </h2>
      
      {/* Effect 1 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">1. Stripe-Style Center-Out</h3>
        <div className="bg-muted p-4 rounded-sm">
          <div className="flex items-center gap-6">
            {navigationItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-${item.color}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${item.color} scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-200`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Effect 2 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">2. Left-to-Right Slide</h3>
        <div className="bg-muted p-4 rounded-sm">
          <div className="flex items-center gap-6">
            {navigationItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-${item.color}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-${item.color} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Effect 3 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">3. Scale + Color</h3>
        <div className="bg-muted p-4 rounded-sm">
          <div className="flex items-center gap-6">
            {navigationItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-${item.color} hover:scale-105`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Effect 4 - FireIcon Gradient */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-card-foreground">4. FireIcon Gradient (TBGC Special)</h3>
        <div className="bg-muted p-4 rounded-sm">
          <div className="flex items-center gap-6">
            {navigationItems.slice(0, 3).map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-${item.color}`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rusty-orange to-sandy-ochre scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}