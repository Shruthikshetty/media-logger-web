'use client';
/**
 * This component contains all the providers for the app
 */
import { ThemeProvider } from 'next-themes';
import { APP_THEMES } from '../constants/config.constants';
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  MutationCache,
} from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '../components/ui/sonner';
import AuthProvider from './auth-provider';
import TopBar from '../components/top-bar';
import AppFooter from '../components/app-footer';
import { errorToast } from '../lib/toast-wrapper';
import { isAxiosError } from 'axios';
import { ApiError } from '../types/global.types';
import ScreenLoaderProvider from '../components/screen-loader-provider';

/**
 * This component wraps all the required providers for the app
 */
const AppLayoutProviders = ({ children }: { children: React.ReactNode }) => {
  //initialize the query client
  const [queryClient] = useState(
    () =>
      new QueryClient({
        // globally handle errors for all queries
        queryCache: new QueryCache({
          onError: (error) => {
            const message = isAxiosError<ApiError>(error)
              ? error.response?.data?.message || 'Something went wrong'
              : error.message;
            errorToast(message);
          },
        }),
        // globally handle errors for all mutations
        mutationCache: new MutationCache({
          onError: (error) => {
            const message = isAxiosError<ApiError>(error)
              ? error.response?.data?.message ||
                'Operation failed try again later'
              : error.message;
            errorToast(message);
          },
        }),
      }),
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="blurple" themes={APP_THEMES}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-right" />
        <ScreenLoaderProvider>
          <AuthProvider>
            <div className="flex min-h-screen flex-col justify-between gap-2">
              <TopBar />
              <div className="grow pt-14">{children}</div>
              <AppFooter />
            </div>
          </AuthProvider>
        </ScreenLoaderProvider>
        {/* Dev tools only active in dev mode */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppLayoutProviders;
