'use client';

import MediaBackdropCard from '@/src/components/media-backdrop-card';
import { useGetMovieDetailsWithUserEntry } from '@/src/services/movie-service';
import { useParams } from 'next/navigation';

/**
 * Movie details page
 * @returns {JSX.Element}
 */
const MovieDetails = () => {
  // get the id from route
  const { id } = useParams<{ id: string }>();
  // fetch the details of the movie by id
  const { data, isLoading } = useGetMovieDetailsWithUserEntry(id);

  return (
    <div>
      <MediaBackdropCard
        backdropUrl={data?.data.movie?.backdropUrl}
        posteUrl={data?.data.movie?.posterUrl}
        title={data?.data.movie?.title}
        releaseDate={data?.data.movie?.releaseDate}
        rating={data?.data.movie?.averageRating}
        mediaType="Movie"
        genres={data?.data.movie?.genre}
        loading={isLoading}
      />
    </div>
  );
};

export default MovieDetails;
