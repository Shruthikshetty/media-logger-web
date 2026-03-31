import MyCollectionCard from '@/src/components/my-collection-card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof MyCollectionCard> = {
  title: 'Components/MyCollectionCard',
  component: MyCollectionCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

//Stories

/**
 * A simple example of a card that links to user media collection.
 */
export const SimpleExample: StoryObj = {};
