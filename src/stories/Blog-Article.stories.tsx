import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard, BlogList, BlogDetail } from '@/components/ui/blog-article';

// Sample gun club blog articles
const sampleArticles = [
  {
    id: '1',
    title: 'Mastering the Art of Trap Shooting: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of trap shooting with our comprehensive guide. From proper stance to target tracking, we cover everything you need to know.',
    content: 'Full article content would go here...',
    image: '/images/training.jpg',
    author: {
      name: 'John Smith',
      avatar: '/images/avatars/instructor1.jpg',
      bio: 'NRA Certified Instructor with 15 years of experience',
      title: 'Chief Instructor'
    },
    publishDate: '2024-01-15',
    readTime: 8,
    views: 1250,
    likes: 45,
    comments: 12,
    tags: ['trap', 'beginner', 'training'],
    category: 'Training',
    featured: true
  },
  {
    id: '2',
    title: 'Upcoming Spring Competition Schedule',
    excerpt: 'Mark your calendars! Our spring competition season is packed with exciting events for shooters of all skill levels.',
    image: '/images/events.jpg',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/avatars/admin1.jpg',
      bio: 'Event Coordinator and Competition Manager',
      title: 'Events Manager'
    },
    publishDate: '2024-01-12',
    readTime: 5,
    views: 890,
    likes: 32,
    comments: 8,
    tags: ['competition', 'events', 'spring'],
    category: 'Events',
    featured: false
  },
  {
    id: '3',
    title: 'New Member Orientation: What to Expect',
    excerpt: 'Welcome to Boise Gun Club! Here\'s everything new members need to know about facilities, safety protocols, and getting started.',
    image: '/images/membership.jpg',
    author: {
      name: 'Mike Wilson',
      avatar: '/images/avatars/safety1.jpg',
      bio: 'Safety Officer and Member Services',
      title: 'Safety Officer'
    },
    publishDate: '2024-01-10',
    readTime: 6,
    views: 650,
    likes: 28,
    comments: 15,
    tags: ['membership', 'orientation', 'safety'],
    category: 'Membership',
    featured: false
  }
];

const meta: Meta<typeof BlogCard> = {
  title: 'Content & Media/Blog Article',
  component: BlogCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive blog article components including card, list, and detail views for gun club content.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'compact', 'featured']
    },
    showStats: {
      control: 'boolean'
    },
    showAuthor: {
      control: 'boolean'
    },
    showImage: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

// Individual blog card - default variant
export const Default: Story = {
  args: {
    article: sampleArticles[0],
    variant: 'default',
    showStats: true,
    showAuthor: true,
    showImage: true
  }
};

// Compact blog card
export const Compact: Story = {
  args: {
    article: sampleArticles[1],
    variant: 'compact',
    showStats: true,
    showAuthor: true,
    showImage: true
  }
};

// Featured blog card
export const Featured: Story = {
  args: {
    article: sampleArticles[0],
    variant: 'featured',
    showStats: true,
    showAuthor: true,
    showImage: true
  }
};

// Blog card without image
export const NoImage: Story = {
  args: {
    article: {
      ...sampleArticles[2],
      image: undefined
    },
    variant: 'default',
    showStats: true,
    showAuthor: true,
    showImage: false
  }
};

// Blog card without stats
export const NoStats: Story = {
  args: {
    article: sampleArticles[1],
    variant: 'default',
    showStats: false,
    showAuthor: true,
    showImage: true
  }
};

// Blog list - grid layout
export const BlogListGrid: StoryObj<typeof BlogList> = {
  render: (args) => (
    <div className="w-full max-w-6xl">
      <BlogList {...args} />
    </div>
  ),
  args: {
    articles: sampleArticles,
    variant: 'grid',
    showFilters: true
  }
};

// Blog list - list layout
export const BlogListList: StoryObj<typeof BlogList> = {
  render: (args) => (
    <div className="w-full max-w-4xl">
      <BlogList {...args} />
    </div>
  ),
  args: {
    articles: sampleArticles,
    variant: 'list',
    showFilters: false
  }
};

// Blog detail view
export const BlogDetailView: StoryObj<typeof BlogDetail> = {
  render: (args) => (
    <div className="w-full max-w-6xl">
      <BlogDetail {...args} />
    </div>
  ),
  args: {
    article: {
      ...sampleArticles[0],
      content: `
        <h2>Getting Started with Trap Shooting</h2>
        <p>Trap shooting is one of the most popular clay target sports, and for good reason. It's accessible to beginners while still offering challenges for experienced shooters.</p>
        
        <h3>Basic Equipment</h3>
        <p>To get started, you'll need:</p>
        <ul>
          <li>A shotgun (12 or 20 gauge recommended)</li>
          <li>Appropriate ammunition</li>
          <li>Eye and ear protection</li>
          <li>Shooting vest (optional but recommended)</li>
        </ul>
        
        <h3>Proper Stance and Form</h3>
        <p>Your stance is crucial for consistent shooting. Position your feet shoulder-width apart, with your weight evenly distributed...</p>
        
        <p>Remember, practice makes perfect. Start with shorter distances and gradually work your way up as your skills improve.</p>
      `
    },
    relatedArticles: sampleArticles.slice(1),
    showSidebar: true
  }
}; 