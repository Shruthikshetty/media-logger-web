'use client';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs';
import { GAMES_TABS } from '@/src/constants/screen.constants';
import { useState } from 'react';

import GamesDiscoverTab from './games-discover-tab';
import FilteredGamesTabContent from './filtered-tab-content';
import { MediaStatus } from '@/src/types/global.types';
import { capitalizeFirstLetter } from '@/src/lib/text-utils';

/**
 * @returns main games page contains games discover and basic filters
 */
export default function GamesPage() {
  // holds the selected tab
  const [selectedTab, setSelectedTab] = useState(GAMES_TABS[0].value);
  return (
    <Tabs
      className="flex flex-col items-center px-5"
      value={selectedTab}
      onValueChange={(value) => setSelectedTab(value)}
    >
      {/* Tabs */}
      <TabsList className="p-0">
        {GAMES_TABS.map((tab) => (
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
      <GamesDiscoverTab />
      {/* rest of the filter tabs */}
      {GAMES_TABS.slice(1).map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="my-2 min-w-[60vw]"
        >
          <FilteredGamesTabContent
            status={capitalizeFirstLetter(tab.value) as MediaStatus}
            setSelectedTab={setSelectedTab}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
