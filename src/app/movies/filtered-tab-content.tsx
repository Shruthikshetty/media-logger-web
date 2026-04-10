'use client';

import { useState } from 'react';
import { useFilterMediaEntries } from '@/src/services/media-entry';
import { MediaStatus } from '@/src/types/global.types';
import MoviesMediaGrid from './movies-media-grid';
import CustomPagination from '@/src/components/custom-pagination';

/**
 * Filtered Tab Content - common component for the content of
 * movies filter tab by status
 */
const FilteredTabContent = ({ status }: { status: MediaStatus }) => {
  // selected page
  const [page, setPage] = useState(1);
  // fetch filtered media entries
  const { data, isLoading } = useFilterMediaEntries({
    status,
    onModel: 'Movie', // this will always be 'Movie' for these tab
    page,
    limit: 20,
  });

  return (
    <>
      <MoviesMediaGrid data={data?.data?.mediaEntries} loading={isLoading} />
      {data?.data?.pagination && data.data.pagination.totalPages > 1 && (
        <CustomPagination
          page={page}
          setPage={setPage}
          pagination={data.data.pagination}
        />
      )}
    </>
  );
};

export default FilteredTabContent;
