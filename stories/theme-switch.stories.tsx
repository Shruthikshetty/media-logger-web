import { ThemeSwitcher } from '@/src/components/theme-switch';
import { APP_THEMES } from '@/src/constants/config.constants';
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
      <ThemeProvider
        defaultTheme={APP_THEMES[0]}
        themes={APP_THEMES}
        attribute="class"
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

//Stories
export const Default: StoryObj = {};
