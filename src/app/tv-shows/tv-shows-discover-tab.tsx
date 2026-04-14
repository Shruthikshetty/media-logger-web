'use client';

import { useState } from 'react';
import { useGetDiscoverTvShows } from '@/src/services/discover-service';
import TVShowsMediaGrid from './tv-shows-media-grid';
import CustomPagination from '@/src/components/custom-pagination';
import { TabsContent } from '@/src/components/ui/tabs';

/**
 * Discover Tab contains discover tv shows grid and pagination
 */
const TVShowsDiscoverTab = () => {
  // selected page
  const [page, setPage] = useState(1);
  // fetch discover tv shows
  const { data, isLoading } = useGetDiscoverTvShows({ page });

  return (
    <TabsContent value="discover" className="my-2">
      <TVShowsMediaGrid data={data?.data?.tvShows} loading={isLoading} />
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

export default TVShowsDiscoverTab;
