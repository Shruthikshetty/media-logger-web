import AppLogo from '@/src/components/app-logo';
import { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof AppLogo> = {
  title: 'Components/AppLogo',
  component: AppLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
