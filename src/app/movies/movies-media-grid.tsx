import MediaCard from '@/src/components/media-card';
import { MovieWithUserEntry } from '@/src/services/discover-service';
import { MediaEntryFull } from '@/src/services/media-entry';
import { normalizeMediaItem } from './movies.utils';

// props type
type Props = {
  data?: MovieWithUserEntry[] | MediaEntryFull[];
};

/**
 * Component to display movies in a grid/list format.
 */
const MoviesMediaGrid = ({ data }: Props) => {
  const items = data?.map(normalizeMediaItem) ?? [];

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
          />
        ))}
      </div>
      {/*@TODO List of media cards */}
    </>
  );
};

export default MoviesMediaGrid;
