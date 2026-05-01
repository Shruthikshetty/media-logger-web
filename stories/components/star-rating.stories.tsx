import StarRating from '@/src/components/star-rating';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Basic usage of the star rating component
export const Basic: Story = {
  args: {
    totalStars: 5,
    defaultValue: 3.5,
  },
};

// Rating component with a custom label
export const WithLabel: Story = {
  args: {
    totalStars: 5,
    defaultValue: 4,
    label: 'Rate this movie:',
  },
};

// Rating component with hidden numeric value
export const HiddenValue: Story = {
  args: {
    totalStars: 10,
    defaultValue: 7,
    hideRatingValue: true,
  },
};

// Disabled rating component
export const Disabled: Story = {
  args: {
    totalStars: 5,
    defaultValue: 4.5,
    disabled: true,
  },
};

// Large stars
export const LargeStars: Story = {
  args: {
    totalStars: 5,
    defaultValue: 2.5,
    size: 40,
  },
};
