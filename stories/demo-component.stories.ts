import DemoComponent from '@/src/components/demo-component';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

const meta: Meta<typeof DemoComponent> = {
  title: 'Example/DemoComponent',
  component: DemoComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
};
export default meta;

//stories

// no props
export const Default: StoryObj = {};

// with custom args
export const Custom: StoryObj = {
  args: {
    header: 'Custom header',
  },
};
