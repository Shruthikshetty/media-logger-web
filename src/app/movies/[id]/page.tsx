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
  const { data } = useGetMovieDetailsWithUserEntry(id);

  //@TODO add loading later

  return (
    <div>
      <MediaBackdropCard
        backdropUrl={data?.data.movie.backdropUrl}
        posteUrl={undefined}
        title={data?.data.movie.title}
        releaseDate={data?.data.movie.releaseDate}
        rating={data?.data.movie.averageRating}
        mediaType="Movie"
        genres={data?.data.movie.genre}
      />
    </div>
  );
};

export default MovieDetails;
