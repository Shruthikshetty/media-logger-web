import MediaLinkCard from '@/src/components/media-link-card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof MediaLinkCard> = {
  title: 'Components/MediaLinkCard',
  component: MediaLinkCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '300px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

//Stories
export const SimpleExample: StoryObj = {
  args: {
    title: '🎮 Browse Games',
    description: 'Discover and track games',
  },
};
