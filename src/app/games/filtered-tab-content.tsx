'use client';

import { useEffect, useState } from 'react';
import { useFilterMediaEntries } from '@/src/services/media-entry';
import { MediaStatus } from '@/src/types/global.types';
import GamesMediaGrid from './games-media-grid';
import CustomPagination from '@/src/components/custom-pagination';
import EmptyStatusState from '@/src/components/empty-status-state';
import LoginPlaceholder from '@/src/components/login-placeholder';
import { GAMES_TABS } from '@/src/constants/screen.constants';

/**
 * Filtered Tab Content - common component for the content of
 * games filter tab by status
 */
const FilteredGamesTabContent = ({
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
    onModel: 'Game', // this will always be 'Game' for these tabs
    page,
    limit: 20,
  });

  // get total pages
  const totalPages = data?.data?.pagination?.totalPages ?? 1;

  // reset page if it is greater than total pages
  useEffect(() => {
    if (!isLoading && page > totalPages) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPage(totalPages);
    }
  }, [isLoading, page, totalPages]);

  return (
    <LoginPlaceholder>
      <GamesMediaGrid data={data?.data?.mediaEntries} loading={isLoading} />
      {data?.data?.pagination && data.data.pagination.totalPages > 1 ? (
        <CustomPagination
          page={page}
          setPage={setPage}
          pagination={data.data.pagination}
        />
      ) : null}
      {data?.data?.pagination &&
      data.data.mediaEntries?.length === 0 &&
      !isLoading &&
      page === 1 ? (
        <EmptyStatusState
          status={status}
          mediaType="Game"
          className="min-w-[60vw]"
          handleAction={() => {
            setSelectedTab(GAMES_TABS[0].value);
          }}
        />
      ) : null}
    </LoginPlaceholder>
  );
};

export default FilteredGamesTabContent;
