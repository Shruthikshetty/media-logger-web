import { createContext, use } from 'react';
import { Skeleton } from './ui/skeleton';

//types
type LoadingWrapperProps = {
  /**
   * (Optional) Explicitly set the loading state.
   * This overrides any value from a parent LoadingProvider.
   */
  isLoading?: boolean;
  /**
   * The component or element to render while content is loading.
   */
  fallback?: React.ReactNode;
  /**
   * The content to render when loading is complete.
   */
  children: React.ReactNode;
};

// The context can hold a boolean value or be undefined if no provider is used.
export const LoadingContext = createContext<
  | {
      isLoading?: boolean;
      defaultFallback?: React.ReactNode;
    }
  | undefined
>(undefined);

/**
 * An optional provider for managing a shared loading state.
 * It also has a fallback loader to display while content is loading.
 */
export const LoadingProvider = ({
  defaultFallback = <Skeleton className="my-1 h-7 w-30 rounded-md" />,
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
  defaultFallback?: React.ReactNode;
}) => {
  return (
    <LoadingContext.Provider value={{ isLoading, defaultFallback }}>
      {children}
    </LoadingContext.Provider>
  );
};

/**
 * A wrapper that displays a fallback loader while its children are loading.
 * It reads from LoadingContext using the `use` hook and can be controlled
 * by a prop or a parent LoadingProvider.
 */
export const LoadingWrapper = ({
  isLoading: isLoadingProp,
  fallback,
  children,
}: LoadingWrapperProps) => {
  // Use the `use` hook to read the context value.
  // It returns the context value (`boolean`) or `undefined` if no provider is found.
  const contextLoading = use(LoadingContext);

  // The logic to determine the final state remains the same.
  // The `isLoading` prop takes precedence over the context value.
  const showLoader = isLoadingProp ?? contextLoading?.isLoading ?? false;

  if (showLoader) {
    return <>{fallback ?? contextLoading?.defaultFallback}</>;
  }

  return <>{children}</>;
};
