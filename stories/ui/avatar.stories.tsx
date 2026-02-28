import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Avatar> = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="Profile image" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
