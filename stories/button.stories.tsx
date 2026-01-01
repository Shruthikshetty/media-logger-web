import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/src/components/ui/button';
import { expect, fn } from 'storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'stroy-button',
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

export const CustomText: Story = {
  args: {
    children: 'Custom Button',
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'Click me',
    onClick: fn(),
  },
  // this is a custom play function
  // used to test user interactions
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole('button');
    // simulate user click
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
