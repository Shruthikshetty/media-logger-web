import { cn } from '../lib/utils';
import { Skeleton } from './ui/skeleton';

/**
 * renders the skeleton for the media grid
 * @prop noOfItems number of skeleton cards to render
 */
const MediaGridSkeleton = ({
  noOfItems = 20,
  className,
}: {
  noOfItems?: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7',
        className,
      )}
    >
      {Array.from({ length: noOfItems }).map((_, index) => (
        <Skeleton key={index} className="aspect-2/3 h-64 w-45 rounded-2xl" />
      ))}
    </div>
  );
};

export default MediaGridSkeleton;
