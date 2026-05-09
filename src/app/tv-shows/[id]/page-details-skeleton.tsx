import { Skeleton } from '@/src/components/ui/skeleton';

/**
 * TV Show over view details skeleton
 * @returns {JSX.Element}
 */
export const TvShowOverViewDetailsSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-5 p-5 md:flex-row">
      {/* left section */}
      <div className="flex w-full flex-col gap-4 md:min-w-[65vw]">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
      {/* right section */}
      <div className="w-full md:mt-0 md:min-w-[25vw]">
        <Skeleton className="h-96 w-full" />
      </div>
    </div>
  );
};
