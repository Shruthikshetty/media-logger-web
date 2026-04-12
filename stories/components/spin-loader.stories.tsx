import SpinLoader from '@/src/components/spin-loader';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof SpinLoader> = {
  title: 'Components/SpinLoader',
  component: SpinLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default spin loader
 * will use the primary color
 */
export const Default: Story = {
  args: {},
};

/**
 * Small spin loader updated using className prop
 */
export const Small: Story = {
  args: {
    className: 'size-8',
  },
};

/**
 * Large spin loader updated using className prop
 */
export const Large: Story = {
  args: {
    className: 'size-24',
  },
};
