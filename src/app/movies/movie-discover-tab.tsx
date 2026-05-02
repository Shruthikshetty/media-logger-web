'use client';

import { useState } from 'react';
import { useGetDiscoverMovies } from '@/src/services/discover-service';
import MoviesMediaGrid from './movies-media-grid';
import CustomPagination from '@/src/components/custom-pagination';
import { TabsContent } from '@radix-ui/react-tabs';

/**
 * Discover Tab  contains discover movies grid and pagination
 */
const MovieDiscoverTab = () => {
  // selected page
  const [page, setPage] = useState(1);
  // fetch discover movies
  const { data, isFetching, isLoading } = useGetDiscoverMovies({ page });

  return (
    <TabsContent value="discover" className="my-2">
      <MoviesMediaGrid
        data={data?.data?.movies}
        loading={isFetching || isLoading}
      />
      {data?.data?.pagination && data.data.pagination.totalPages > 1 && (
        <CustomPagination
          page={page}
          setPage={setPage}
          pagination={data.data.pagination}
        />
      )}
    </TabsContent>
  );
};

export default MovieDiscoverTab;
