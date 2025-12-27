import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/src/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Stories ---->
export const Default: Story = {
  args: {
    children: 'Button',
  },
};
