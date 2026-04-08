import MediaCard from '@/src/components/media-card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof MediaCard> = {
  title: 'Components/MediaCard',
  component: MediaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onAddTo: { action: 'added to list' },
    onCardClick: { action: 'card clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- Stories ---

/**
 * Movie variation with a high rating and multiple genres.
 */
export const MovieDefault: Story = {
  args: {
    title: 'The Neural Nexus',
    mediaType: 'Movie',
    rating: 8.9,
    imageUrl: '/stories/movie-poster.png',
    genres: ['Sci-Fi', 'Thriller', 'Mystery'],
  },
};

/**
 * Game variation showcasing the different icon and styling.
 */
export const GameDefault: Story = {
  args: {
    title: 'Dragon Quest: Final Flight',
    mediaType: 'Game',
    rating: 9.5,
    imageUrl: '/stories/game-cover.png',
    genres: ['RPG', 'Open World', 'Action'],
  },
};

/**
 * TV Show variation with a moody poster.
 */
export const TvShowDefault: Story = {
  args: {
    title: 'Shadows of the Pines',
    mediaType: 'TvShow',
    rating: 8.2,
    imageUrl: '/stories/tv-show-poster.png',
    genres: ['Drama', 'Supernatural'],
  },
};

/**
 * Media card showing a "Status" badge instead of an "Add to List" button.
 * This represents a media item that is already in the user's collection.
 */
export const InCollection: Story = {
  args: {
    ...MovieDefault.args,
    mediaEntry: {
      _id: 'entry_123',
      user: 'user_1',
      onModel: 'Movie',
      status: 'Watching',
      rating: 9,
    },
  },
};

/**
 * Media card currently in progress (e.g., "Watching").
 */
export const InProgress: Story = {
  args: {
    ...TvShowDefault.args,
    mediaEntry: {
      _id: 'entry_456',
      user: 'user_1',
      onModel: 'TVShow',
      status: 'Watching',
    },
  },
};

/**
 * Variation for when an image is missing, showing the placeholder icon.
 */
export const NoImage: Story = {
  args: {
    title: 'Undocumented Media',
    mediaType: 'Movie',
    rating: 0,
    genres: ['Unknown'],
  },
};
