'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs';
import { MOVIES_TABS } from '@/src/constants/screen.constants';
import { useGetDiscoverMovies } from '@/src/services/discover-service';
import { useState } from 'react';
import MoviesMediaGrid from './movies-media-grid';
import { useFilterMediaEntries } from '@/src/services/media-entry';
import { MediaStatus } from '@/src/types/global.types';
import { capitalizeFirstLetter } from '@/src/lib/text-utils';

const MoviesTab = () => {
  const [selectedTab, setSelectedTab] = useState(MOVIES_TABS[0].value);
  // fetch discover movies
  const { data, isLoading: isDiscoverLoading } = useGetDiscoverMovies();
  // fetch movies with filters
  const { data: filteredData, isLoading: isFilteredDataLoading } =
    useFilterMediaEntries(
      selectedTab !== 'discover'
        ? {
            status: capitalizeFirstLetter(selectedTab) as MediaStatus,
            onModel: 'Movie',
          }
        : {},
    );

  return (
    <Tabs
      className="flex flex-col items-center px-5"
      defaultValue={selectedTab}
      onValueChange={(value) => setSelectedTab(value)}
    >
      {/* Tabs */}
      <TabsList className="p-0">
        {MOVIES_TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:bg-primary! hover:bg-muted-foreground/10 flex flex-row items-center justify-center gap-2 p-2 hover:cursor-pointer md:p-3"
          >
            <p className="text-sm md:text-base">{tab.label}</p>
          </TabsTrigger>
        ))}
      </TabsList>
      {/* discover tab */}
      <TabsContent value="discover" className="my-2">
        <MoviesMediaGrid
          data={data?.data?.movies}
          loading={isDiscoverLoading}
        />
      </TabsContent>
      {/* rest of the tabs */}
      {MOVIES_TABS.slice(1).map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <MoviesMediaGrid
            data={filteredData?.data?.mediaEntries}
            loading={isFilteredDataLoading}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MoviesTab;
