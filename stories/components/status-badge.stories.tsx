import StatusBadge from '@/src/components/status-badge';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

//Stories

export const Default: StoryObj = {
  args: {
    status: 'Default',
  },
};

export const Completed: StoryObj = {
  args: {
    status: 'Completed',
  },
};
