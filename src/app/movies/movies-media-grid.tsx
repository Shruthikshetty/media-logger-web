import MediaCard from '@/src/components/media-card';
import { MovieWithUserEntry } from '@/src/services/discover-service';

/**
 * Component to display movies in a grid/list format
 * @param data - Array of movies to display
 * @returns MoviesGrid component
 */
const MoviesMediaGrid = ({ data }: { data?: MovieWithUserEntry[] }) => {
  return (
    <>
      {/* Grid of media cards */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {data?.map((movie) => (
          <MediaCard
            key={movie._id}
            mediaType="Movie"
            imageUrl={movie.posterUrl}
            rating={movie.averageRating}
            title={movie.title}
            genres={movie.genre}
            mediaEntry={movie.userEntry}
          />
        ))}
      </div>
      {/*@TODO List of media cards */}
    </>
  );
};

export default MoviesMediaGrid;
