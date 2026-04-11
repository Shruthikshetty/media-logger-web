'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs';
import { MOVIES_TABS } from '@/src/constants/screen.constants';
import { useState } from 'react';
import { MediaStatus } from '@/src/types/global.types';
import { capitalizeFirstLetter } from '@/src/lib/text-utils';
import MovieDiscoverTab from './movie-discover-tab';
import FilteredTabContent from './filtered-tab-content';

/**
 * This is the main movies tab containing movie content
 */
export default function MoviesTab() {
  // holds the selected tab
  const [selectedTab, setSelectedTab] = useState(MOVIES_TABS[0].value);

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
      <MovieDiscoverTab />
      {/* rest of the tabs */}
      {MOVIES_TABS.slice(1).map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="my-2 w-full">
          <FilteredTabContent
            status={capitalizeFirstLetter(tab.value) as MediaStatus}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
