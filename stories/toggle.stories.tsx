import { Toggle } from '@/src/components/ui/toggle';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Italic } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'Ui/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'outline',
    'aria-label': 'Toggle italic',
  },
};

export default meta;

//Stories
export const SimpleExample: StoryObj = {
  render: (args) => (
    <Toggle {...args}>
      <Italic />
    </Toggle>
  ),
};
