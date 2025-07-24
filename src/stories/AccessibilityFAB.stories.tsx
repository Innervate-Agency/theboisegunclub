import type { Meta, StoryObj } from '@storybook/react';
import AccessibilityFAB from '@/components/ui/AccessibilityFAB';

const meta: Meta<typeof AccessibilityFAB> = {
  title: 'Accessibility & Effects/Accessibility FAB',
  component: AccessibilityFAB,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Floating accessibility button providing font size adjustment, high contrast mode, and other accessibility features for gun club website.'
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
    <div className="relative h-96 w-full bg-gray-50 dark:bg-gray-900">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Boise Gun Club</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to our premier shooting facility. We provide a safe and welcoming environment for shooters of all skill levels.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our facilities include modern shooting ranges, professional instruction, and competitive shooting programs.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
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
    <div className="relative h-screen w-full bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Boise Gun Club
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Idaho&apos;s Premier Shooting Facility
          </p>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Training Programs
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our NRA certified instructors provide comprehensive training for all skill levels. From basic safety courses to advanced marksmanship training.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Basic Firearms Safety</li>
              <li>Marksmanship Fundamentals</li>
              <li>Competition Preparation</li>
              <li>Youth Programs</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Facilities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              State-of-the-art shooting facilities with modern equipment and safety features.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>12 Indoor Shooting Lanes</li>
              <li>3 Trap Shooting Fields</li>
              <li>2 Skeet Shooting Fields</li>
              <li>Sporting Clays Course</li>
            </ul>
          </section>
        </main>
        
        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
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
    <div className="relative h-96 w-full bg-gray-900">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Competition Schedule</h2>
        <p className="text-gray-300 mb-4">
          Join us for our weekly competitions and monthly championships. All skill levels welcome.
        </p>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Weekly Trap Shoot</h3>
            <p className="text-gray-300">Every Saturday at 9:00 AM</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Monthly Championship</h3>
            <p className="text-gray-300">First Sunday of each month</p>
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
    <div className="relative h-96 w-full bg-white dark:bg-gray-900">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <form className="space-y-4 max-w-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
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