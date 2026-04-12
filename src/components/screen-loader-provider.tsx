import { useScreenLoader } from '../state-management/screen-loader.store';
import GradientLoader from './gradient-loader';

/**
 * This is a provider to be wrap the app with will allow to trigger
 * screen loader from anywhere in the app
 */
const ScreenLoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useScreenLoader((state) => state.isLoading);

  return (
    <>
      {isLoading && (
        <div
          className="bg-background/80 absolute inset-0 z-100 flex items-center justify-center backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <GradientLoader />
        </div>
      )}
      <div inert={isLoading} aria-hidden={isLoading} className="contents">
        {children}
      </div>
    </>
  );
};

export default ScreenLoaderProvider;
