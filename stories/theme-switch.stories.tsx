import { ThemeSwitcher } from '@/src/components/theme-switch';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ThemeProvider } from 'next-themes';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

//Stories
export const Default: StoryObj = {};
