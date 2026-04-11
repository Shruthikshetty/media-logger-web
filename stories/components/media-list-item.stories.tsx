import MediaListItem from '@/src/components/media-list-item';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof MediaListItem> = {
  title: 'Components/MediaListItem',
  component: MediaListItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onAddTo: { action: 'added to list' },
    onMediaClick: { action: 'media clicked' },
    onDelete: { action: 'deleted' },
    disableAdd: { control: 'boolean' },
    disableDelete: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

//Stories ---->

/**
 * Movie variation with release date, length, and description.
 */
export const MovieDefault: Story = {
  args: {
    title: 'The Neural Nexus',
    mediaType: 'Movie',
    rating: 8.9,
    imageUrl: '/stories/movie-poster.png',
    releaseDate: '2024-05-15',
    length: 124,
    description:
      'In a future where memories can be traded like currency, a detective uncovers a conspiracy that threatens the fabric of reality itself.',
    genres: ['Sci-Fi', 'Thriller', 'Mystery'],
  },
};

/**
 * Game variation showcasing the duration formatting (hours).
 */
export const GameDefault: Story = {
  args: {
    title: 'Dragon Quest: Final Flight',
    mediaType: 'Game',
    rating: 9.5,
    imageUrl: '/stories/game-cover.png',
    releaseDate: '2023-11-20',
    length: 3600, // 60 hours
    description:
      'An epic open-world RPG where you take flight on the back of legendary dragons to reclaim a lost kingdom from an ancient evil.',
    genres: ['RPG', 'Open World', 'Action'],
  },
};

/**
 * TV Show variation.
 */
export const TvShowDefault: Story = {
  args: {
    title: 'Shadows of the Pines',
    mediaType: 'TvShow',
    rating: 8.2,
    imageUrl: '/stories/tv-show-poster.png',
    releaseDate: '2022-09-10',
    length: 45, // episode length
    description:
      'A small town is rocked by mysterious disappearances that lead back to a dense forest with a dark past.',
    genres: ['Drama', 'Supernatural'],
  },
};

/**
 * Media list item showing a "Status" badge instead of an "Add to List" button.
 * This represents a media item that is already in the user's collection.
 */
export const InCollection: Story = {
  args: {
    ...MovieDefault.args,
    status: 'Watching',
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
    description: 'No description available for this mysterious title.',
    genres: ['Unknown'],
  },
};

/**
 * Story showcasing the disabled states for both "Add to List" and "Delete" buttons.
 */
export const DisabledStates: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <MediaListItem {...args} title="Disabled Add" disableAdd={true} />
      <MediaListItem
        {...args}
        title="Disabled Delete"
        disableDelete={true}
        status="Watching"
      />
    </div>
  ),
  args: {
    ...MovieDefault.args,
  },
};
