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
  },
};

export default meta;
type Story = StoryObj<typeof MediaGridSkeleton>;

/**
 * Default media grid skeleton with 20 items
 */
export const Default: Story = {
  args: {
    noOfItems: 20,
  },
};

/**
 * Media grid skeleton with few items
 */
export const FewItems: Story = {
  args: {
    noOfItems: 5,
  },
};
