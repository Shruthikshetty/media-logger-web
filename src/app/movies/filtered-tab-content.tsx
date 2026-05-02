'use client';

import { useEffect, useState } from 'react';
import { useFilterMediaEntries } from '@/src/services/media-entry';
import { MediaStatus } from '@/src/types/global.types';
import MoviesMediaGrid from './movies-media-grid';
import CustomPagination from '@/src/components/custom-pagination';
import EmptyStatusState from '@/src/components/empty-status-state';
import LoginPlaceholder from '@/src/components/login-placeholder';
import { MOVIES_TABS } from '@/src/constants/screen.constants';

/**
 * Filtered Tab Content - common component for the content of
 * movies filter tab by status
 */
const FilteredTabContent = ({
  status,
  setSelectedTab,
}: {
  status: MediaStatus;
  setSelectedTab: (tab: string) => void;
}) => {
  // selected page
  const [page, setPage] = useState(1);
  // fetch filtered media entries
  const { data, isLoading, isFetching } = useFilterMediaEntries({
    status,
    onModel: 'Movie', // this will always be 'Movie' for these tab
    page,
    limit: 20,
  });

  // get total pages
  const totalPages = Math.max(data?.data?.pagination?.totalPages ?? 1, 1);

  // reset page if it is greater than total pages
  useEffect(() => {
    if (!isLoading && !isFetching && page > totalPages) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPage(totalPages);
    }
  }, [isLoading, isFetching, page, totalPages]);

  return (
    <LoginPlaceholder>
      <MoviesMediaGrid
        data={data?.data?.mediaEntries}
        loading={isFetching || isLoading}
      />
      {data?.data?.pagination && data.data.pagination.totalPages > 1 ? (
        <CustomPagination
          page={page}
          setPage={setPage}
          pagination={data.data.pagination}
        />
      ) : null}
      {data?.data?.pagination &&
      data.data.mediaEntries.length === 0 &&
      !isLoading &&
      page === 1 ? (
        <EmptyStatusState
          status={status}
          mediaType="Movie"
          className="min-w-[60vw]"
          handleAction={() => {
            setSelectedTab(MOVIES_TABS[0].value);
          }}
        />
      ) : null}
    </LoginPlaceholder>
  );
};

export default FilteredTabContent;
