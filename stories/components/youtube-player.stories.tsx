import YoutubePlayer from '@/src/components/youtube-player';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof YoutubePlayer> = {
  title: 'Components/YoutubePlayer',
  component: YoutubePlayer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// basic usage of the youtube player
export const Basic: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
  },
};

// player that autoplay's with controls hidden
export const AutoplayNoControls: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    autoplay: 1,
    controls: 0,
  },
};

// player showing related videos (same channel) and modest branding
export const WithRelatedVideos: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    rel: 1,
    modestbranding: 1,
  },
};
