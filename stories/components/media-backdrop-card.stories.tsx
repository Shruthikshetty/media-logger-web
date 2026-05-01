import MediaBackdropCard from '@/src/components/media-backdrop-card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof MediaBackdropCard> = {
  title: 'Components/MediaBackdropCard',
  component: MediaBackdropCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic usage for a movie
export const MovieExample: Story = {
  args: {
    title: 'Inception',
    mediaType: 'Movie',
    releaseDate: '2010-07-16',
    rating: 8.8,
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    posterUrl:
      'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdropUrl:
      'https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
  },
};

// Usage when logged in (shows rating and status select)
export const LoggedInWithStatus: Story = {
  args: {
    ...MovieExample.args,
    isLoggedIn: true,
    starValue: 4.5,
    defaultStatus: 'Completed',
    onStarRatingChange: (value) => console.log('Rating changed to:', value),
    onStatusChange: (status) => console.log('Status changed to:', status),
  },
};

// Loading state
export const LoadingState: Story = {
  args: {
    mediaType: 'Movie',
    loading: true,
  },
};

// Missing images (fallbacks)
export const MissingImages: Story = {
  args: {
    title: 'Unknown Title',
    mediaType: 'TvShow',
    releaseDate: '2024-01-01',
    rating: 5.0,
    genres: ['Drama'],
  },
};
