'use client';
/**
 * This component contains all the providers for the app
 */
import { ThemeProvider } from 'next-themes';
import { APP_THEMES } from '../constants/config.constants';
import { Toaster } from 'sonner';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/**
 * This component wraps all the required providers for the app
 */
const AppLayoutProviders = ({ children }: { children: React.ReactNode }) => {
  //initialize the query client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider attribute="class" defaultTheme="blurple" themes={APP_THEMES}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
        {/* Dev tools only active in dev mode */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppLayoutProviders;
