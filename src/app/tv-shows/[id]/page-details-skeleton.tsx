import { Skeleton } from '@/src/components/ui/skeleton';

/**
 * TV Show over view details skeleton
 * @returns {JSX.Element}
 */
export const TvShowOverViewDetailsSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-5 p-5 md:flex-row">
      {/* left section */}
      <div className="flex w-full min-w-[65vw] flex-col gap-4">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
      {/* right section */}
      <div className="w-full min-w-[25vw] md:mt-0">
        <Skeleton className="h-100 w-full" />
      </div>
    </div>
  );
};
