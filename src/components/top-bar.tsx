'use client';

import { ArrowLeft, Bell, Search } from 'lucide-react';
import AppLogo from './app-logo';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';

//@TODO some of the functionality will be implemented later
/** App top bar */
const TopBar = () => {
  return (
    <header className="bg-background/20 fixed flex h-13 w-full flex-row items-center justify-between overflow-hidden px-5 backdrop-blur-sm">
      <div className="flex flex-row items-center gap-3">
        <ArrowLeft className="h-full" />
        {/* logo */}
        <AppLogo />
        {/* pages details to be added */}
        <p>Dashboard</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        {/* search  */}
        <InputGroup>
          <InputGroupInput placeholder="Search media..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        {/* filter */}
        {/* layout switch  */}
        {/* notification */}
        <Bell />
        {/* user profile */}
      </div>
    </header>
  );
};

export default TopBar;
