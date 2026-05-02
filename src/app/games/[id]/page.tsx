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
import { useGetGameDetailsWithUserEntry } from '@/src/services/game-service';
import { useAuthStore } from '@/src/state-management/auth.store';
import { MediaStatus } from '@/src/types/global.types';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { GameOverViewDetailsSkeleton } from './page-details-skeleton';
import { formatDuration } from '@/src/lib/time.utils';
import CollapsableBadgeList from '@/src/components/collapsable-badge-list';

/**
 * Game details page
 * @returns {JSX.Element}
 */
const GameDetails = () => {
  // get the id from route
  const { id } = useParams<{ id: string }>();
  // get if user is logged in from store
  const { isLoggedIn } = useAuthStore();
  // query client
  const queryClient = useQueryClient();
  // fetch the details of the game by id
  const { data, isLoading } = useGetGameDetailsWithUserEntry(id);
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
            // invalidate discover games query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.discover.games],
            });
            // invalidate the game details with user entry query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.game.detailsWithEntry, id],
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
          onModel: 'Game',
          status: status ?? 'Completed',
        },
        {
          onSuccess: () => {
            // invalidate the game details with user entry query
            queryClient.invalidateQueries({
              queryKey: [QUERY_KEYS.game.detailsWithEntry, id],
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
          backdropUrl={data?.data.game?.backdropUrl}
          posterUrl={data?.data.game?.posterUrl}
          title={data?.data.game?.title}
          releaseDate={data?.data.game?.releaseDate}
          rating={data?.data.game?.averageRating}
          mediaType="Game"
          genres={data?.data.game?.genre}
          loading={isLoading}
          starValue={data?.data?.mediaEntry?.rating}
          onStarRatingChange={(rating) => handleMediaEntryChange({ rating })}
          onStatusChange={(status) => handleMediaEntryChange({ status })}
          defaultStatus={data?.data?.mediaEntry?.status}
          disableUpdate={addMediaEntryPending || updateMediaEntryPending}
          isLoggedIn={isLoggedIn}
        />
        {/*@TODO Tabs will be added later */}
        <LoadingWrapper fallback={<GameOverViewDetailsSkeleton />}>
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
                    {data?.data.game?.description ?? 'No description'}
                  </p>
                </CardContent>
              </Card>
              {/* platforms */}
              {data?.data.game?.platforms &&
              data?.data.game?.platforms?.length > 0 ? (
                <Card className="border-border gap-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CollapsableBadgeList
                      style={{
                        itemBadge:
                          'text-primary bg-transparent border-primary border px-2 text-[0.7rem] cursor-default hover:bg-primary/10',
                      }}
                      list={data?.data.game?.platforms ?? []}
                      maxDisplayed={15}
                    />
                  </CardContent>
                </Card>
              ) : null}

              {/* Trailer card */}
              <YoutubePlayerCard
                videoId={data?.data.game?.youtubeVideoId ?? ''}
              />
            </div>
            {/* details part 1 */}
            <Card className="border-border mt-4 h-fit min-w-[25vw] gap-2 md:mt-0">
              <CardHeader>
                <CardTitle className="text-xl">Details</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div>
                  <p className="text-muted-foreground">Developer</p>
                  <p>{data?.data.game?.developer}</p>
                </div>
                <Separator />
                {data?.data.game?.releaseDate ? (
                  <div>
                    <p className="text-muted-foreground">Release date</p>
                    <p>
                      {formatDate(
                        data?.data.game?.releaseDate,
                        'MMMM dd, yyyy',
                      )}
                    </p>
                  </div>
                ) : null}
                {data?.data.game?.avgPlaytime ? (
                  <div>
                    <p className="text-muted-foreground">Average Playtime</p>
                    <p>{formatDuration(data?.data.game?.avgPlaytime ?? 0)}</p>
                  </div>
                ) : null}
                <div>
                  <p className="text-muted-foreground">Age rating</p>
                  <Badge
                    variant={'outline'}
                    className="border-muted-foreground/50 font-bold"
                  >
                    {data?.data.game?.ageRating} +
                  </Badge>
                </div>
                <Separator />
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <p>{capitalizeFirstLetter(data?.data.game?.status ?? '')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </LoadingWrapper>
      </div>
    </LoadingProvider>
  );
};

export default GameDetails;
