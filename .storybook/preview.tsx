import type { Preview } from '@storybook/nextjs-vite';
import '@/src/app/globals.css';
import { useEffect } from 'react';
import { APP_THEMES } from '../src/constants/config.constants';
import { themes } from 'storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    docs: {
      theme: themes.dark, // This sets the docs page to dark theme
    },
  },
  // toolbar menu
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global app themes',
      defaultValue: 'blurple',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'blurple', icon: 'starhollow', title: 'Blurple' },
          { value: 'purple', icon: 'circlehollow', title: 'Purple' },
          { value: 'emerald', icon: 'hearthollow', title: 'Emerald' },
          { value: 'rose', icon: 'moon', title: 'Rose' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;

      useEffect(() => {
        // Remove existing theme classes from the body
        document.body.classList.remove(...APP_THEMES);

        // Add the selected theme class
        document.body.classList.add(theme);
      }, [theme]);

      return <Story />;
    },
  ],
};

export default preview;
