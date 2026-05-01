import YoutubePlayerCard from '@/src/components/youtube-player-card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof YoutubePlayerCard> = {
  title: 'Components/YoutubePlayerCard',
  component: YoutubePlayerCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic usage of the youtube player card
export const Basic: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
  },
};

// Player card with custom title
export const CustomTitle: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    title: 'Custom Trailer Title',
  },
};

// Player card with a custom className (e.g. limiting width)
export const CustomWidth: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    className: 'max-w-md',
  },
};
