import MediaCard from '@/src/components/media-card';
import { TvShowWithUserEntry } from '@/src/services/discover-service';
import {
  MediaEntryFull,
  useAddMediaEntry,
  useDeleteMediaEntry,
} from '@/src/services/media-entry';
import {
  NormalizedTvShowMediaItem,
  normalizeTvShowItem,
} from '../../lib/tv-shows.utils';
import MediaGridSkeleton from '@/src/components/media-grid-skeleton';
import MediaListItem from '@/src/components/media-list-item';
import { useLayoutStore } from '@/src/state-management/layout.store';

// props type
type Props = {
  data?: TvShowWithUserEntry[] | MediaEntryFull[];
  loading?: boolean;
};

/**
 * Component to display tv shows in a grid/list format.
 */
const TVShowsMediaGrid = ({ data, loading }: Props) => {
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
  // show loading skeleton
  if (loading) return <MediaGridSkeleton layout={layout} />;
  //normalize items
  const items = data?.map(normalizeTvShowItem) ?? [];

  // on Add to list
  const onAddToList = (item: NormalizedTvShowMediaItem) => {
    // add media entry
    addMediaEntryMutate({
      status: 'Planning',
      onModel: 'TVShow',
      mediaItem: item._id,
    });
  };

  // on delete of the entry
  const onDelete = (item: NormalizedTvShowMediaItem) => {
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
              mediaType="TvShow"
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
            />
          ))}
        </div>
      ) : (
        /* list of media list items  */
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <MediaListItem
              key={item._id}
              mediaType="TvShow"
              imageUrl={item.posterUrl}
              title={item.title}
              rating={item.averageRating}
              releaseDate={item.releaseDate}
              length={item.avgRunTime}
              description={item.description}
              genres={item.genre}
              status={item.mediaEntry?.status}
              onAddTo={() => onAddToList(item)}
              onDelete={() => onDelete(item)}
              disableAdd={addVariables?.mediaItem === item._id && isAdding}
              disableDelete={
                deleteVariables === item.mediaEntry?._id && isDeleting
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TVShowsMediaGrid;
