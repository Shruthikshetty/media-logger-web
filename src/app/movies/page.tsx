'use client';
import MediaCard from '@/src/components/media-card';
import { errorToast } from '@/src/lib/toast-wrapper';
import { useGetDiscoverMovies } from '@/src/services/discover-service';
import { useEffect } from 'react';

//@TODO this page in progress and not completed
const MoviesTab = () => {
  // fetch discover movies
  const { data, error } = useGetDiscoverMovies();

  useEffect(() => {
    if (error) {
      errorToast(error.response?.data?.message ?? 'Something went wrong');
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center p-5">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {data?.data?.movies?.map((movie) => (
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
    </div>
  );
};

export default MoviesTab;
