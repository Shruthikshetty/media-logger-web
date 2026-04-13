'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs';
import { TV_SHOWS_TABS } from '@/src/constants/screen.constants';
import { useState } from 'react';

import TVShowsDiscoverTab from './tv-shows-discover-tab';
import FilteredTVShowsTabContent from './filtered-tab-content';
import { MediaStatus } from '@/src/types/global.types';
import { capitalizeFirstLetter } from '@/src/lib/text-utils';

/**
 * @returns main tv shows page contains tv shows discover and basic filters
 */
export default function TVShowsPage() {
  // holds the selected tab
  const [selectedTab, setSelectedTab] = useState(TV_SHOWS_TABS[0].value);
  return (
    <Tabs
      className="flex flex-col items-center px-5"
      value={selectedTab}
      onValueChange={(value) => setSelectedTab(value)}
    >
      {/* Tabs */}
      <TabsList className="p-0">
        {TV_SHOWS_TABS.map((tab) => (
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
      <TVShowsDiscoverTab />
      {/* rest of the filter tabs */}
      {TV_SHOWS_TABS.slice(1).map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="my-2 min-w-[60vw]"
        >
          <FilteredTVShowsTabContent
            status={capitalizeFirstLetter(tab.value) as MediaStatus}
            setSelectedTab={setSelectedTab}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
