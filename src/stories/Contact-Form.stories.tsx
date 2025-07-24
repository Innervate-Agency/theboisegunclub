import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from '@/components/ui/contact-form';

const meta: Meta<typeof ContactForm> = {
  title: 'Forms & Inputs/Contact Form',
  component: ContactForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive contact form component with multiple variants for business inquiries, directory submissions, and community interactions.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'minimal']
    },
    formType: {
      control: 'select',
      options: ['contact', 'business-inquiry', 'event-submission', 'directory-listing']
    },
    showContactInfo: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

// Default contact form for general inquiries
export const Default: Story = {
  args: {
    title: 'Contact Our Team',
    subtitle: 'Get in touch with us',
    description: 'Have questions about our directory, community features, or business listings? We\'re here to help.',
    variant: 'default',
    showContactInfo: true,
    formType: 'contact'
  }
};

// Business inquiry form
export const BusinessInquiry: Story = {
  args: {
    title: 'Business Partnership',
    subtitle: 'List your business with us',
    description: 'Join the Treasure Valley\'s premier firearms directory and connect with thousands of potential customers.',
    variant: 'default',
    showContactInfo: true,
    formType: 'business-inquiry'
  }
};

// Event submission form
export const EventSubmission: Story = {
  args: {
    title: 'Submit Your Event',
    subtitle: 'Share with the community',
    description: 'Promote your firearms-related event to the entire Treasure Valley community.',
    variant: 'glass',
    showContactInfo: false,
    formType: 'event-submission'
  }
};

// Membership inquiry form
export const MembershipInquiry: Story = {
  args: {
    title: 'Join Our Community',
    subtitle: 'Start your membership journey',
    description: 'Interested in becoming a member? Fill out the form below and we\'ll get back to you within 24 hours.',
    variant: 'default',
    showContactInfo: true,
    formType: 'membership'
  }
};

// Event registration form
export const EventRegistration: Story = {
  args: {
    title: 'Register for Competition',
    subtitle: 'Secure your spot',
    description: 'Register for our upcoming trap shooting competition. Limited spots available.',
    variant: 'default',
    showContactInfo: false,
    formType: 'event'
  }
};

// Training lesson booking
export const TrainingLessonBooking: Story = {
  args: {
    title: 'Book Training Session',
    subtitle: 'Learn from certified instructors',
    description: 'Schedule a one-on-one training session with our NRA certified instructors.',
    variant: 'default',
    showContactInfo: true,
    formType: 'lesson'
  }
};

// Glass variant for modern look
export const GlassVariant: Story = {
  args: {
    title: 'Premium Contact',
    subtitle: 'Glassmorphism design',
    description: 'Contact form with modern glass effect styling.',
    variant: 'glass',
    showContactInfo: true,
    formType: 'contact'
  }
};

// Minimal variant for embedded use
export const MinimalVariant: Story = {
  args: {
    title: 'Quick Contact',
    subtitle: 'Simple and clean',
    description: 'Streamlined contact form for quick inquiries.',
    variant: 'minimal',
    showContactInfo: false,
    formType: 'contact'
  }
};

// Safety training inquiry
export const SafetyTrainingInquiry: Story = {
  args: {
    title: 'Safety Training Registration',
    subtitle: 'Mandatory for all new members',
    description: 'Register for our comprehensive gun safety training course - required for all new members.',
    variant: 'default',
    showContactInfo: true,
    formType: 'lesson'
  }
};

// Competition team inquiry
export const CompetitionTeamInquiry: Story = {
  args: {
    title: 'Join Competition Team',
    subtitle: 'Competitive shooting opportunities',
    description: 'Interested in joining our competitive shooting team? Tell us about your experience.',
    variant: 'default',
    showContactInfo: true,
    formType: 'membership'
  }
}; 