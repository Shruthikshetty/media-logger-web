import EmptyStatusState from '@/src/components/empty-status-state';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof EmptyStatusState> = {
  title: 'Components/EmptyStatusState',
  component: EmptyStatusState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: [
        'Planning',
        'Playing',
        'Watching',
        'Completed',
        'Dropped',
        'All',
      ],
    },
    mediaType: {
      control: 'select',
      options: ['Movie', 'TVShow', 'Game'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MoviePlanning: Story = {
  args: {
    status: 'Planning',
    mediaType: 'Movie',
  },
};

export const GamePlaying: Story = {
  args: {
    status: 'Playing',
    mediaType: 'Game',
  },
};

export const TVShowCompleted: Story = {
  args: {
    status: 'Completed',
    mediaType: 'TVShow',
  },
};

export const AllMovies: Story = {
  args: {
    status: 'All',
    mediaType: 'Movie',
  },
};

export const AllGames: Story = {
  args: {
    status: 'All',
    mediaType: 'Game',
  },
};

export const AllTVShows: Story = {
  args: {
    status: 'All',
    mediaType: 'TVShow',
  },
};

export const DroppedGame: Story = {
  args: {
    status: 'Dropped',
    mediaType: 'Game',
  },
};
