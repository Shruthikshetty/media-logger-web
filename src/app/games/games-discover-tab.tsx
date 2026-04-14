'use client';

import { useState } from 'react';
import { useGetDiscoverGames } from '@/src/services/discover-service';
import GamesMediaGrid from './games-media-grid';
import CustomPagination from '@/src/components/custom-pagination';
import { TabsContent } from '@radix-ui/react-tabs';

/**
 * Discover Tab contains discover games grid and pagination
 */
const GamesDiscoverTab = () => {
  // selected page
  const [page, setPage] = useState(1);
  // fetch discover games
  const { data, isLoading } = useGetDiscoverGames({ page });

  return (
    <TabsContent value="discover" className="my-2">
      <GamesMediaGrid data={data?.data?.games} loading={isLoading} />
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

export default GamesDiscoverTab;
