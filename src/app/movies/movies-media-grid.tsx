import MediaCard from '@/src/components/media-card';
import { MovieWithUserEntry } from '@/src/services/discover-service';
import {
  MediaEntryFull,
  useAddMediaEntry,
  useDeleteMediaEntry,
} from '@/src/services/media-entry';
import { NormalizedMediaItem, normalizeMediaItem } from './movies.utils';
import MediaGridSkeleton from '@/src/components/media-grid-skeleton';

// props type
type Props = {
  data?: MovieWithUserEntry[] | MediaEntryFull[];
  loading?: boolean;
};

/**
 * Component to display movies in a grid/list format.
 */
const MoviesMediaGrid = ({ data, loading }: Props) => {
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
  if (loading) return <MediaGridSkeleton />;
  //normalize items
  const items = data?.map(normalizeMediaItem) ?? [];

  // on Add to list
  const onAddToList = (item: NormalizedMediaItem) => {
    // add media entry
    addMediaEntryMutate({
      status: 'Planning',
      onModel: 'Movie',
      mediaItem: item._id,
    });
  };

  // on delete of the entry
  const onDelete = (item: NormalizedMediaItem) => {
    if (!item.mediaEntry?._id) return;
    // delete media entry
    deleteMediaEntryMutate(item.mediaEntry?._id);
  };

  return (
    <>
      {/* Grid of media cards */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {items.map((item) => (
          <MediaCard
            key={item._id}
            mediaType="Movie"
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
      {/*@TODO List of media cards */}
    </>
  );
};

export default MoviesMediaGrid;
