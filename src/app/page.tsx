'use client';
import { useRouter } from 'next/navigation';
import { ThemeSwitcher } from '../components/theme-switch';
import { Button } from '../components/ui/button';
import { useAuthStore } from '../state-management/auth.store';
import { useGetUserDetails } from '../services/user-service';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs';
import { DASHBOARD_TABS } from '../constants/screen.constants';
import { useState } from 'react';

/**
 * Home page of the app
 */
export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState<string>(
    DASHBOARD_TABS[0].value,
  );
  const route = useRouter();
  // get user data from auth store
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // function to handle tab change
  const handleTabChange = (value: string) => {
    // check if the tab has a navigate property
    const navigateTo = DASHBOARD_TABS.find(
      (tab) => tab.value === value,
    )?.navigate;

    // if navigate property is present, navigate to the new page
    if (navigateTo) {
      route.push(navigateTo);
      return;
    }

    // set the selected tab
    setSelectedTab(value);
  };

  return (
    <div className="m-auto flex flex-col items-center justify-center gap-2 text-center">
      <Tabs
        defaultValue={selectedTab}
        className="w-full items-center"
        value={selectedTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="p-0">
          {DASHBOARD_TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-primary! hover:bg-muted-foreground/10 flex flex-row items-center justify-center gap-2 p-2 hover:cursor-pointer md:p-3"
            >
              {tab.icon && <tab.icon className="size-5" />}
              <p className="text-sm md:text-base">{tab.label}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {/* render all the contents tap contents to be added if a new tab is added*/}
        <TabsContent value={'overview'}>overview tab</TabsContent>
        <TabsContent value={'timeline'}>timeline tab</TabsContent>
      </Tabs>
    </div>
  );
}
