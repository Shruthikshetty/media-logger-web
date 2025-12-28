import StatCard from '@/src/components/stat-card';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Gamepad2 } from 'lucide-react';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '300px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

//Stories

export const SimpleExample: StoryObj = {
  args: {
    title: 'Games played',
    description: '+3 since last week',
    Icon: Gamepad2,
    iconStyles: 'text-green-300',
    statNumber: 123,
  },
};
