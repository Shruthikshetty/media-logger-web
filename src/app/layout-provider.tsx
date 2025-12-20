'use client';
/**
 * This component contains all the providers for the app
 */
import { ThemeProvider } from 'next-themes';
import { APP_THEMES } from '../constants/config.constants';

const AppLayoutProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="blurple" themes={APP_THEMES}>
      {children}
    </ThemeProvider>
  );
};

export default AppLayoutProviders;
