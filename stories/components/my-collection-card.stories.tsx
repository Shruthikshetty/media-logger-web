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

export const SimpleExample: StoryObj = {};
