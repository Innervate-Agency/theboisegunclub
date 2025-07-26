import type { Meta, StoryObj } from '@storybook/nextjs';
import FacilityCard from '@/components/ui/FacilityCard';

const meta: Meta<typeof FacilityCard> = {
  title: 'Business Directory/Business Card',
  component: FacilityCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Business listing card component for displaying gun shops, ranges, instructors, and other firearms-related businesses in the directory.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GunShop: Story = {
  args: {
    title: 'Boise Firearms & Tactical',
    icon: '/images/events.jpg',
    description: 'Full-service gun shop featuring new and used firearms, tactical gear, and expert gunsmithing services. Family-owned since 1985.',
    linkText: 'View Details',
    link: '/directory/boise-firearms-tactical',
  },
  render: (args) => (
    <div className="w-[400px]">
      <FacilityCard {...args} />
    </div>
  ),
};

export const ShootingRange: Story = {
  args: {
    title: 'Capital City Arms Range',
    icon: '/images/events.jpg', 
    description: 'Modern indoor range with 20 lanes, rental firearms, and professional instruction. Open to the public with membership options available.',
    linkText: 'Visit Range',
    link: '/directory/capital-city-arms',
  },
  render: (args) => (
    <div className="w-[400px]">
      <FacilityCard {...args} />
    </div>
  ),
};

export const Instructor: Story = {
  args: {
    title: 'Idaho Defensive Training',
    icon: '/images/events.jpg',
    description: 'NRA-certified instructor offering concealed carry, basic pistol, and advanced defensive shooting courses. Personalized training programs.',
    linkText: 'Book Training',
    link: '/directory/idaho-defensive-training',
  },
  render: (args) => (
    <div className="w-[400px]">
      <FacilityCard {...args} />
    </div>
  ),
};

export const Gunsmith: Story = {
  args: {
    title: 'Treasure Valley Gunworks',
    icon: '/images/events.jpg',
    description: 'Expert gunsmithing services including custom builds, repairs, and restorations. Specializing in precision rifles and vintage firearms.',
    linkText: 'Get Quote',
    link: '/directory/tv-gunworks',
  },
  render: (args) => (
    <div className="w-[400px]">
      <FacilityCard {...args} />
    </div>
  ),
};

// Keep original as "Default" for backward compatibility
export const Default: Story = GunShop;
