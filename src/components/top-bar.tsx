'use client';

import { ArrowLeft, Bell, Filter, Grid, List } from 'lucide-react';
import AppLogo from './app-logo';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useAuthStore } from '../state-management/auth.store';
import { useGetUserDetails } from '../services/user-service';
import { Button } from './ui/button';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { useState } from 'react';
import { getProfileFallback } from '../lib/text-utils';
import TopBarSearch from './tob-bar-search';

//@TODO some of the functionality will be implemented later
/** App top bar */
const TopBar = () => {
  const [layout, setLayout] = useState('grid');
  // get user data from auth store
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  // fetch user data
  const { data: user } = useGetUserDetails();

  return (
    <header className="bg-background/20 fixed flex h-13 w-full flex-row items-center justify-between gap-1 overflow-hidden px-5 backdrop-blur-sm">
      <div className="flex flex-row items-center gap-3">
        <ArrowLeft className="h-full" />
        {/* logo */}
        <AppLogo />
        {/* pages details to be added */}
        <p className="text-foreground hidden sm:block">Dashboard</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        {/* search  */}
        <TopBarSearch />
        {/* filter */}
        <Button variant="outline" className="group">
          <Filter className="group-hover:text-primary size-4" />
          <p className="hidden sm:block">Filter</p>
        </Button>
        {/* layout switch  */}
        <ToggleGroup
          type="single"
          className="border-border border"
          value={layout}
          onValueChange={(value) => setLayout(value)}
        >
          <ToggleGroupItem
            value="grid"
            aria-label="Toggle grid"
            className="data-[state=on]:bg-primary"
          >
            <Grid className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="list"
            aria-label="Toggle list"
            className="data-[state=on]:bg-primary"
          >
            <List className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        {/* notification */}
        <Bell className="hover:text-primary min-h-4 min-w-4 hover:cursor-pointer" />
        {/* user profile image*/}
        <Avatar className="border-border size-7 border-3 sm:size-9">
          {isLoggedIn ? <AvatarImage src={user?.data?.profileImg} /> : null}
          <AvatarFallback>
            {isLoggedIn ? getProfileFallback(user?.data?.name) : 'U'}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopBar;
