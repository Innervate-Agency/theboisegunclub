import type { Meta, StoryObj } from '@storybook/react'
import { User, Target, Trophy, Calendar, Users, Shield, MapPin } from 'lucide-react'

import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ClassificationSelect,
  RangeSelect
} from '@/components/ui/select'

const meta: Meta<typeof Select> = {
  title: 'Forms & Inputs/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Select component with ClickUp + Stripe fusion design. Features premium variants, glassmorphism effects, animations, and gun club theming.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'premium', 'glass', 'outline', 'filled'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Premium: Story = {
  render: () => (
    <Select variant="premium">
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Premium selection..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Premium Options</SelectLabel>
          <SelectItem value="elite">Elite Membership</SelectItem>
          <SelectItem value="championship">Championship Access</SelectItem>
          <SelectItem value="vip">VIP Package</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Glass: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl">
      <Select variant="glass">
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Glass selection..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Glass Options</SelectLabel>
            <SelectItem value="transparent">Transparent</SelectItem>
            <SelectItem value="frosted">Frosted Glass</SelectItem>
            <SelectItem value="crystal">Crystal Clear</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Select>
        <SelectTrigger leftIcon={<User className="h-4 w-4" />}>
          <SelectValue placeholder="Select member type..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="individual" icon={<User className="h-4 w-4" />}>Individual</SelectItem>
          <SelectItem value="family" icon={<Users className="h-4 w-4" />}>Family</SelectItem>
          <SelectItem value="corporate" icon={<Shield className="h-4 w-4" />}>Corporate</SelectItem>
        </SelectContent>
      </Select>

      <Select variant="premium">
        <SelectTrigger leftIcon={<Target className="h-4 w-4" />}>
          <SelectValue placeholder="Select discipline..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="trap" icon={<Target className="h-4 w-4" />}>Trap Shooting</SelectItem>
          <SelectItem value="skeet" icon={<Target className="h-4 w-4" />}>Skeet Shooting</SelectItem>
          <SelectItem value="sporting" icon={<Trophy className="h-4 w-4" />}>Sporting Clays</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Select>
        <SelectTrigger size="sm" className="w-[180px]">
          <SelectValue placeholder="Small select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sm1">Small Option 1</SelectItem>
          <SelectItem value="sm2">Small Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger size="default" className="w-[200px]">
          <SelectValue placeholder="Default select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="def1">Default Option 1</SelectItem>
          <SelectItem value="def2">Default Option 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger size="lg" className="w-[220px]">
          <SelectValue placeholder="Large select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lg1">Large Option 1</SelectItem>
          <SelectItem value="lg2">Large Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const GroupedOptions: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select range..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Trap Ranges</SelectLabel>
          <SelectItem value="trap1">Trap Range 1</SelectItem>
          <SelectItem value="trap2">Trap Range 2</SelectItem>
          <SelectItem value="trap3">Trap Range 3</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Skeet Ranges</SelectLabel>
          <SelectItem value="skeet1">Skeet Range 1</SelectItem>
          <SelectItem value="skeet2">Skeet Range 2</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Specialty Ranges</SelectLabel>
          <SelectItem value="sporting">Sporting Clays</SelectItem>
          <SelectItem value="pistol">Pistol Range</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Default</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Default variant..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Premium</h3>
        <Select variant="premium">
          <SelectTrigger>
            <SelectValue placeholder="Premium variant..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="elite">Elite Option</SelectItem>
            <SelectItem value="premium">Premium Option</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Outline</h3>
        <Select variant="outline">
          <SelectTrigger>
            <SelectValue placeholder="Outline variant..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outline1">Outline Option 1</SelectItem>
            <SelectItem value="outline2">Outline Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Filled</h3>
        <Select variant="filled">
          <SelectTrigger>
            <SelectValue placeholder="Filled variant..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="filled1">Filled Option 1</SelectItem>
            <SelectItem value="filled2">Filled Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const GunClubPresets: Story = {
  name: 'Gun Club Presets',
  render: () => (
    <div className="space-y-6 max-w-lg">
      <div className="space-y-3">
        <h3 className="font-rajdhani font-semibold text-lg text-card-foreground">Classification Select</h3>
        <ClassificationSelect placeholder="Select your classification..." />
      </div>

      <div className="space-y-3">
        <h3 className="font-rajdhani font-semibold text-lg text-card-foreground">Range Select</h3>
        <RangeSelect placeholder="Choose a range..." />
      </div>

      <div className="space-y-3">
        <h3 className="font-rajdhani font-semibold text-lg text-card-foreground">Tournament Registration</h3>
        <Select variant="premium">
          <SelectTrigger leftIcon={<Trophy className="h-4 w-4" />}>
            <SelectValue placeholder="Select tournament..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Upcoming Tournaments</SelectLabel>
              <SelectItem value="elite-championship" icon={<Trophy className="h-4 w-4" />}>
                Elite Championship
              </SelectItem>
              <SelectItem value="monthly-shoot" icon={<Calendar className="h-4 w-4" />}>
                Monthly Club Shoot
              </SelectItem>
              <SelectItem value="league-night" icon={<Users className="h-4 w-4" />}>
                Wednesday League
              </SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Practice Sessions</SelectLabel>
              <SelectItem value="practice-session" icon={<Target className="h-4 w-4" />}>
                Open Practice
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}

export const MembershipForm: Story = {
  name: 'Membership Application Form',
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <h3 className="font-rajdhani font-bold text-xl text-card-foreground">
        Membership Application
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground">Membership Type</label>
          <Select variant="premium">
            <SelectTrigger leftIcon={<User className="h-4 w-4" />}>
              <SelectValue placeholder="Select membership..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual" icon={<User className="h-4 w-4" />}>
                Individual - $150/year
              </SelectItem>
              <SelectItem value="family" icon={<Users className="h-4 w-4" />}>
                Family - $250/year
              </SelectItem>
              <SelectItem value="corporate" icon={<Shield className="h-4 w-4" />}>
                Corporate - $500/year
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground">Current Classification</label>
          <ClassificationSelect />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground">Primary Discipline</label>
          <Select>
            <SelectTrigger leftIcon={<Target className="h-4 w-4" />}>
              <SelectValue placeholder="Select discipline..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trap" icon={<Target className="h-4 w-4" />}>
                Trap Shooting
              </SelectItem>
              <SelectItem value="skeet" icon={<Target className="h-4 w-4" />}>
                Skeet Shooting
              </SelectItem>
              <SelectItem value="sporting" icon={<Trophy className="h-4 w-4" />}>
                Sporting Clays
              </SelectItem>
              <SelectItem value="multi" icon={<Users className="h-4 w-4" />}>
                Multiple Disciplines
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-card-foreground">Location</label>
          <Select variant="outline">
            <SelectTrigger leftIcon={<MapPin className="h-4 w-4" />}>
              <SelectValue placeholder="Select location..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boise" icon={<MapPin className="h-4 w-4" />}>
                Boise, ID
              </SelectItem>
              <SelectItem value="meridian" icon={<MapPin className="h-4 w-4" />}>
                Meridian, ID
              </SelectItem>
              <SelectItem value="eagle" icon={<MapPin className="h-4 w-4" />}>
                Eagle, ID
              </SelectItem>
              <SelectItem value="other" icon={<MapPin className="h-4 w-4" />}>
                Other
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
}