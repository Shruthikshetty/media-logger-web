'use client';
import { useGetDiscoverMovies } from '@/src/services/discover-service';

const MoviesTab = () => {
  // fetch discover movies
  const { data } = useGetDiscoverMovies();
  console.log(data);
  return <div>moviesTab Component</div>;
};

export default MoviesTab;
