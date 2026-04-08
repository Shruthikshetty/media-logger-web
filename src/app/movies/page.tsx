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

//@TODO this page in progress and not completed
const MoviesTab = () => {
  const [selectedTab, setSelectedTab] = useState<string>(MOVIES_TABS[0].value);
  // fetch discover movies
  const { data } = useGetDiscoverMovies();

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
      <TabsContent value="discover" className="my-2">
        <MoviesMediaGrid data={data?.data?.movies} />
      </TabsContent>
      {/* rest of the tabs in progress */}
      <TabsContent value="planning"></TabsContent>
    </Tabs>
  );
};

export default MoviesTab;
