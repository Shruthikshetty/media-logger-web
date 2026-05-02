import MediaCard from '@/src/components/media-card';
import { GameWithUserEntry } from '@/src/services/discover-service';
import {
  MediaEntryFull,
  useAddMediaEntry,
  useDeleteMediaEntry,
} from '@/src/services/media-entry';
import {
  NormalizedGameMediaItem,
  normalizeGameItem,
} from '../../lib/games.utils';
import MediaGridSkeleton from '@/src/components/media-grid-skeleton';
import MediaListItem from '@/src/components/media-list-item';
import { useLayoutStore } from '@/src/state-management/layout.store';
import { useRouter } from 'next/navigation';

// props type
type Props = {
  data?: GameWithUserEntry[] | MediaEntryFull[];
  loading?: boolean;
};

/**
 * Component to display games in a grid/list format.
 */
const GamesMediaGrid = ({ data, loading }: Props) => {
  // get layout from layout store
  const layout = useLayoutStore((state) => state.layout);
  // add media entry hook
  const {
    mutate: addMediaEntryMutate,
    isPending: isAdding,
    variables: addVariables,
  } = useAddMediaEntry();
  // delete a media entry hook
  const {
    mutate: deleteMediaEntryMutate,
    isPending: isDeleting,
    variables: deleteVariables,
  } = useDeleteMediaEntry();

  // initialize the router
  const router = useRouter();

  // show loading skeleton
  if (loading) return <MediaGridSkeleton layout={layout} />;
  //normalize items
  const items = data?.map(normalizeGameItem) ?? [];

  // on Add to list
  const onAddToList = (item: NormalizedGameMediaItem) => {
    // add media entry
    addMediaEntryMutate({
      status: 'Planning',
      onModel: 'Game',
      mediaItem: item._id,
    });
  };

  // on delete of the entry
  const onDelete = (item: NormalizedGameMediaItem) => {
    if (!item.mediaEntry?._id) return;
    // delete media entry
    deleteMediaEntryMutate(item.mediaEntry?._id);
  };

  return (
    <>
      {layout === 'grid' ? (
        /* Grid of media cards */
        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {items.map((item) => (
            <MediaCard
              key={item._id}
              mediaType="Game"
              imageUrl={item.posterUrl}
              rating={item.averageRating}
              title={item.title}
              genres={item.genre}
              mediaEntry={item.mediaEntry}
              onAddTo={() => onAddToList(item)}
              onDelete={() => onDelete(item)}
              disableAdd={addVariables?.mediaItem === item._id && isAdding}
              disableDelete={
                deleteVariables === item.mediaEntry?._id && isDeleting
              }
              onCardClick={() => router.push(`/games/${item._id}`)}
            />
          ))}
        </div>
      ) : (
        /* list of media list items  */
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <MediaListItem
              key={item._id}
              mediaType="Game"
              imageUrl={item.posterUrl}
              title={item.title}
              rating={item.averageRating}
              releaseDate={item.releaseDate}
              length={item.avgPlaytime}
              description={item.description}
              genres={item.genre}
              status={item.mediaEntry?.status}
              onAddTo={() => onAddToList(item)}
              onDelete={() => onDelete(item)}
              disableAdd={addVariables?.mediaItem === item._id && isAdding}
              disableDelete={
                deleteVariables === item.mediaEntry?._id && isDeleting
              }
              onMediaClick={() => router.push(`/games/${item._id}`)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GamesMediaGrid;
