import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AccessibilityFAB from '@/components/ui/AccessibilityFAB';

const meta: Meta<typeof AccessibilityFAB> = {
  title: 'Accessibility & Effects/Accessibility FAB',
  component: AccessibilityFAB,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Floating accessibility button providing font size adjustment, high contrast mode, and other accessibility features for the community platform.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AccessibilityFAB>;

// Default accessibility FAB
export const Default: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-muted">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Treasure Valley Firearms Hub</h2>
        <p className="text-muted-foreground mb-4">
          Your comprehensive digital hub connecting the region's firearms community. Find businesses, events, and connect with fellow enthusiasts.
        </p>
        <p className="text-muted-foreground mb-4">
          Our directory features 500+ local businesses including gun shops, ranges, instructors, and gunsmiths throughout the Treasure Valley.
        </p>
        <p className="text-muted-foreground">
          Use the accessibility button in the bottom right corner to adjust font size and enable high contrast mode.
        </p>
      </div>
      <AccessibilityFAB />
    </div>
  ),
  args: {}
};

// Accessibility FAB with sample content
export const WithSampleContent: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-card">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-card-foreground mb-2">
            The Boise Gun Club
          </h1>
          <p className="text-xl text-muted-foreground">
            Treasure Valley Firearms Collective
          </p>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Find Training Programs
            </h2>
            <p className="text-muted-foreground mb-4">
              Connect with certified instructors throughout the region. Compare credentials, specialties, and reviews to find the perfect training for your needs.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>NRA Certified Instructors</li>
              <li>Concealed Carry Classes</li>
              <li>Competition Training</li>
              <li>Youth & Family Programs</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Facilities
            </h2>
            <p className="text-muted-foreground mb-4">
              State-of-the-art shooting facilities with modern equipment and safety features.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>12 Indoor Shooting Lanes</li>
              <li>3 Trap Shooting Fields</li>
              <li>2 Skeet Shooting Fields</li>
              <li>Sporting Clays Course</li>
            </ul>
          </section>
        </main>
        
        <footer className="mt-16 text-center text-muted-foreground">
          <p>Use the accessibility controls to adjust font size and contrast</p>
        </footer>
      </div>
      <AccessibilityFAB />
    </div>
  ),
  args: {}
};

// Accessibility FAB on dark background
export const DarkBackground: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-gunmetal-black">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-range-white mb-4">Competition Schedule</h2>
        <p className="text-brass-yellow/80 mb-4">
          Join us for our weekly competitions and monthly championships. All skill levels welcome.
        </p>
        <div className="space-y-4">
          <div className="bg-blued-steel/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-range-white">Weekly Trap Shoot</h3>
            <p className="text-brass-yellow/80">Every Saturday at 9:00 AM</p>
          </div>
          <div className="bg-blued-steel/20 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-range-white">Monthly Championship</h3>
            <p className="text-brass-yellow/80">First Sunday of each month</p>
          </div>
        </div>
      </div>
      <AccessibilityFAB />
    </div>
  ),
  args: {}
};

// Accessibility FAB with form content
export const WithFormContent: Story = {
  render: () => (
    <div className="relative h-96 w-full bg-card">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-card-foreground mb-4">
          Contact Us
        </h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-card-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-card text-card-foreground"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-card text-card-foreground"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-card text-card-foreground"
            />
          </div>
          <button
            type="submit"
            className="bg-copper-orange hover:bg-copper-orange/90 text-range-white font-medium py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
      <AccessibilityFAB />
    </div>
  ),
  args: {}
}; 