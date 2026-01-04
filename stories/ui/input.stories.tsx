import { Input } from '@/src/components/ui/input';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Input> = {
  title: 'Ui/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

//Stories
export const SimpleExample: StoryObj = {
  args: {
    placeholder: 'Input placeholder',
  },
};
