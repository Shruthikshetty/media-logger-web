'use client';

import { useState } from 'react';
import { useFilterMediaEntries } from '@/src/services/media-entry';
import { MediaStatus } from '@/src/types/global.types';
import TVShowsMediaGrid from './tv-shows-media-grid';
import CustomPagination from '@/src/components/custom-pagination';
import EmptyStatusState from '@/src/components/empty-status-state';
import LoginPlaceholder from '@/src/components/login-placeholder';
import { TV_SHOWS_TABS } from '@/src/constants/screen.constants';

/**
 * Filtered Tab Content - common component for the content of
 * tv shows filter tab by status
 */
const FilteredTVShowsTabContent = ({
  status,
  setSelectedTab,
}: {
  status: MediaStatus;
  setSelectedTab: (tab: string) => void;
}) => {
  // selected page
  const [page, setPage] = useState(1);
  // fetch filtered media entries
  const { data, isLoading } = useFilterMediaEntries({
    status,
    onModel: 'TVShow', // this will always be 'TVShow' for these tabs
    page,
    limit: 20,
  });

  return (
    <LoginPlaceholder>
      <TVShowsMediaGrid data={data?.data?.mediaEntries} loading={isLoading} />
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
          mediaType="TVShow"
          className="min-w-[60vw]"
          handleAction={() => {
            setSelectedTab(TV_SHOWS_TABS[0].value);
          }}
        />
      ) : null}
    </LoginPlaceholder>
  );
};

export default FilteredTVShowsTabContent;
