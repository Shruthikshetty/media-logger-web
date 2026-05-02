'use client';

import CollapsableBadgeList from '@/src/components/collapsable-badge-list';
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
import { formatDuration } from '@/src/lib/time.utils';
import {
  useAddMediaEntry,
  useUpdateMediaEntry,
} from '@/src/services/media-entry';
import { useGetMovieDetailsWithUserEntry } from '@/src/services/movie-service';
import { useAuthStore } from '@/src/state-management/auth.store';
import { MediaStatus } from '@/src/types/global.types';
import { useQueryClient } from '@tanstack/react-query';
import { Users } from 'lucide-react';
import { useParams } from 'next/navigation';
import { MovieOverViewDetailsSkeleton } from './page-details-skeleton';

/**
 * Movie details page
 * @returns {JSX.Element}
 */
const MovieDetails = () => {
  // get the id from route
  const { id } = useParams<{ id: string }>();
  // get if user is logged in from store
  const { isLoggedIn } = useAuthStore();
  // query client
  const queryClient = useQueryClient();
  // fetch the details of the movie by id
  const { data, isLoading } = useGetMovieDetailsWithUserEntry(id);
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
            // invalidate discover movies query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.discover.movies],
            });
            // invalidate the movie details with user entry query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.movie.detailsWithEntry, id],
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
          onModel: 'Movie',
          status: status ?? 'Completed',
        },
        {
          onSuccess: () => {
            // invalidate the movie details with user entry query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.movie.detailsWithEntry, id],
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
          backdropUrl={data?.data.movie?.backdropUrl}
          posterUrl={data?.data.movie?.posterUrl}
          title={data?.data.movie?.title}
          releaseDate={data?.data.movie?.releaseDate}
          rating={data?.data.movie?.averageRating}
          mediaType="Movie"
          genres={data?.data.movie?.genre}
          loading={isLoading}
          starValue={data?.data?.mediaEntry?.rating}
          onStarRatingChange={(rating) => handleMediaEntryChange({ rating })}
          onStatusChange={(status) => handleMediaEntryChange({ status })}
          defaultStatus={data?.data?.mediaEntry?.status}
          disableUpdate={addMediaEntryPending || updateMediaEntryPending}
          isLoggedIn={isLoggedIn}
        />
        {/*@TODO Tabs will be added later */}
        <LoadingWrapper fallback={<MovieOverViewDetailsSkeleton />}>
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
                    {data?.data.movie?.description ?? 'No description'}
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
                    list={data?.data.movie?.cast ?? []}
                    maxDisplayed={15}
                  />
                </CardContent>
              </Card>
              {/* tags */}
              {data?.data.movie?.tags && data?.data.movie?.tags?.length > 0 ? (
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
                      list={data?.data.movie?.tags ?? []}
                      maxDisplayed={15}
                    />
                  </CardContent>
                </Card>
              ) : null}
              {/* Trailer card */}
              <YoutubePlayerCard
                videoId={data?.data.movie?.youtubeVideoId ?? ''}
              />
            </div>
            {/* details part 1 */}
            <Card className="border-border mt-4 min-w-[25vw] gap-2 md:mt-0">
              <CardHeader>
                <CardTitle className="text-xl">Details</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div>
                  <p className="text-muted-foreground">Director(s)</p>
                  {data?.data.movie?.directors?.map((director, index) => (
                    <p key={index}>{director}</p>
                  ))}
                </div>
                <Separator />
                {data?.data.movie?.releaseDate ? (
                  <div>
                    <p className="text-muted-foreground">Release date</p>
                    <p>
                      {formatDate(
                        data?.data.movie?.releaseDate,
                        'MMMM dd, yyyy',
                      )}
                    </p>
                  </div>
                ) : null}
                <div>
                  <p className="text-muted-foreground">Runtime</p>
                  <p>{formatDuration(data?.data.movie?.runTime ?? 0)}</p>
                </div>
                {data?.data.movie?.languages &&
                data?.data.movie?.languages?.length > 0 ? (
                  <div>
                    <p className="text-muted-foreground">Languages</p>
                    <p>{data?.data.movie?.languages?.join(', ')}</p>
                  </div>
                ) : null}
                <div>
                  <p className="text-muted-foreground">Age rating</p>
                  <Badge
                    variant={'outline'}
                    className="border-muted-foreground/50 font-bold"
                  >
                    {data?.data.movie?.ageRating} +
                  </Badge>
                </div>
                <Separator />
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p>{capitalizeFirstLetter(data?.data.movie?.status ?? '')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </LoadingWrapper>
      </div>
    </LoadingProvider>
  );
};

export default MovieDetails;
