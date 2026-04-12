import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MediaGridSkeleton from '@/src/components/media-grid-skeleton';

const meta: Meta<typeof MediaGridSkeleton> = {
  title: 'Components/MediaGridSkeleton',
  component: MediaGridSkeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    className: 'p-6',
    layout: 'grid',
  },
};

export default meta;
type Story = StoryObj<typeof MediaGridSkeleton>;

/**
 * Grid layout skeleton (default)
 */
export const Grid: Story = {
  args: {
    layout: 'grid',
    noOfItems: 20,
  },
};

/**
 * List layout skeleton
 */
export const List: Story = {
  args: {
    layout: 'list',
    noOfItems: 10,
  },
};

/**
 * Media grid skeleton with few items
 */
export const FewItems: Story = {
  args: {
    layout: 'grid',
    noOfItems: 5,
  },
};
