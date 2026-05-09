'use client';

import {
  LoadingProvider,
  LoadingWrapper,
} from '@/src/components/custom-loader';
import MediaBackdropCard from '@/src/components/media-backdrop-card';
import { Badge } from '@/src/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';
import YoutubePlayerCard from '@/src/components/youtube-player-card';
import { QUERY_KEYS } from '@/src/constants/service-key.constants';
import { formatDate } from '@/src/lib/date.utils';
import { capitalizeFirstLetter } from '@/src/lib/text-utils';
import {
  useAddMediaEntry,
  useUpdateMediaEntry,
} from '@/src/services/media-entry';
import { useGetTvShowDetailsWithUserEntry } from '@/src/services/tv-show-service';
import { useAuthStore } from '@/src/state-management/auth.store';
import { MediaStatus } from '@/src/types/global.types';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { TvShowOverViewDetailsSkeleton } from './page-details-skeleton';
import { formatDuration } from '@/src/lib/time.utils';
import CollapsableBadgeList from '@/src/components/collapsable-badge-list';
import { Users } from 'lucide-react';

/**
 * TV Show details page
 * @returns {JSX.Element}
 */
const TvShowDetails = () => {
  // get the id from route
  const { id } = useParams<{ id: string }>();
  // get if user is logged in from store
  const { isLoggedIn } = useAuthStore();
  // query client
  const queryClient = useQueryClient();
  // fetch the details of the tv show by id
  const { data, isLoading } = useGetTvShowDetailsWithUserEntry(id);
  // hook to add a media entry
  const { mutate: addMediaEntry, isPending: addMediaEntryPending } =
    useAddMediaEntry();
  // hook to update a media entry
  const { mutate: updateMediaEntry, isPending: updateMediaEntryPending } =
    useUpdateMediaEntry();
  // handle star rating change
  const handleMediaEntryChange = ({
    rating,
    status,
  }: {
    rating?: number;
    status?: MediaStatus;
  }) => {
    // filter invalid calls
    if (rating === undefined && status === undefined) return;
    // check if media entry exists
    if (data?.data?.mediaEntry?._id) {
      // update media entry
      updateMediaEntry(
        {
          id: data.data.mediaEntry._id,
          data: {
            ...(rating != undefined && { rating }),
            ...(status && { status }),
          },
        },
        {
          onSuccess: () => {
            // invalidate discover tv shows query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.discover.tvShows],
            });
            // invalidate the tv show details with user entry query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.tvShow.detailsWithEntry, id],
            });
          },
        },
      );
    } else {
      // add media entry
      addMediaEntry(
        {
          rating,
          mediaItem: id,
          onModel: 'TVShow',
          status: status ?? 'Completed',
        },
        {
          onSuccess: () => {
            // invalidate the tv show details with user entry query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.tvShow.detailsWithEntry, id],
            });
          },
        },
      );
    }
  };

  return (
    <LoadingProvider isLoading={isLoading}>
      <div className="flex flex-col items-center gap-3">
        <MediaBackdropCard
          backdropUrl={data?.data.tvShow?.backdropUrl}
          posterUrl={data?.data.tvShow?.posterUrl}
          title={data?.data.tvShow?.title}
          releaseDate={data?.data.tvShow?.releaseDate}
          rating={data?.data.tvShow?.averageRating}
          mediaType="TvShow"
          genres={data?.data.tvShow?.genre}
          loading={isLoading}
          starValue={data?.data?.mediaEntry?.rating}
          onStarRatingChange={(rating) => handleMediaEntryChange({ rating })}
          onStatusChange={(status) => handleMediaEntryChange({ status })}
          defaultStatus={data?.data?.mediaEntry?.status}
          disableUpdate={addMediaEntryPending || updateMediaEntryPending}
          isLoggedIn={isLoggedIn}
        />
        {/*@TODO Tabs will be added later */}
        <LoadingWrapper fallback={<TvShowOverViewDetailsSkeleton />}>
          <div className="flex flex-col gap-0 p-5 md:flex-row md:gap-5">
            {/* details part 1 */}
            <div className="flex min-w-[65vw] flex-col gap-4">
              {/* synopsis */}
              <Card className="border-border gap-2">
                <CardHeader>
                  <CardTitle className="text-xl">Synopsis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {data?.data.tvShow?.description ?? 'No description'}
                  </p>
                </CardContent>
              </Card>
              {/*  cast  */}
              <Card className="border-border gap-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="text-primary" />
                    Cast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CollapsableBadgeList
                    style={{
                      itemBadge:
                        'text-foreground/90 bg-transparent border-muted-foreground/50 border px-2 text-[0.7rem] cursor-default hover:bg-muted-foreground/10',
                    }}
                    list={data?.data.tvShow?.cast ?? []}
                    maxDisplayed={15}
                  />
                </CardContent>
              </Card>
              {/* tags */}
              {data?.data.tvShow?.tags &&
              data?.data.tvShow?.tags?.length > 0 ? (
                <Card className="border-border gap-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CollapsableBadgeList
                      style={{
                        itemBadge:
                          'text-primary bg-transparent border-primary border px-2 text-[0.7rem] cursor-default hover:bg-primary/10',
                      }}
                      list={data?.data.tvShow?.tags ?? []}
                      maxDisplayed={15}
                    />
                  </CardContent>
                </Card>
              ) : null}

              {/* Trailer card */}
              <YoutubePlayerCard
                videoId={data?.data.tvShow?.youtubeVideoId ?? ''}
              />
            </div>
            {/* details part 1 */}
            <Card className="border-border mt-4 h-fit min-w-[25vw] gap-2 md:mt-0">
              <CardHeader>
                <CardTitle className="text-xl">Details</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div>
                  <p className="text-muted-foreground">Director(s)</p>
                  {data?.data.tvShow?.directors?.map((director, index) => (
                    <p key={index}>{director}</p>
                  ))}
                </div>
                <Separator />
                {data?.data.tvShow?.totalSeasons ? (
                  <div>
                    <p className="text-muted-foreground">Total Seasons</p>
                    <p>{data?.data.tvShow?.totalSeasons}</p>
                  </div>
                ) : null}
                {data?.data.tvShow?.totalEpisodes ? (
                  <div>
                    <p className="text-muted-foreground">Total Episodes</p>
                    <p>{data?.data.tvShow?.totalEpisodes}</p>
                  </div>
                ) : null}
                {data?.data.tvShow?.releaseDate ? (
                  <div>
                    <p className="text-muted-foreground">Release date</p>
                    <p>
                      {formatDate(
                        data?.data.tvShow?.releaseDate,
                        'MMMM dd, yyyy',
                      )}
                    </p>
                  </div>
                ) : null}
                {data?.data.tvShow?.avgRunTime != undefined ||
                data?.data.tvShow?.avgRunTime != null ? (
                  <div>
                    <p className="text-muted-foreground">Average Run Time</p>
                    <p>{formatDuration(data?.data.tvShow?.avgRunTime ?? 0)}</p>
                  </div>
                ) : null}
                {data?.data.tvShow?.languages &&
                data?.data.tvShow?.languages?.length > 0 ? (
                  <div>
                    <p className="text-muted-foreground">Languages</p>
                    <p>{data?.data.tvShow?.languages?.join(', ')}</p>
                  </div>
                ) : null}
                <div>
                  <p className="text-muted-foreground">Age rating</p>
                  <Badge
                    variant={'outline'}
                    className="border-muted-foreground/50 font-bold"
                  >
                    {data?.data.tvShow?.ageRating ?? 'UR'} +
                  </Badge>
                </div>
                <Separator />
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p>
                    {capitalizeFirstLetter(data?.data.tvShow?.status ?? '')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </LoadingWrapper>
      </div>
    </LoadingProvider>
  );
};

export default TvShowDetails;
