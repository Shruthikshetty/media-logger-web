'use client';

import { ArrowLeft, Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
//@TODO inprogress
/** App top bar */
const TopBar = () => {
  return (
    <header className="bg-background/20 fixed flex h-13 w-full flex-row items-center justify-between overflow-hidden px-5 backdrop-blur-sm">
      <div className="flex flex-row items-center gap-3">
        <ArrowLeft className="h-full" />
        {/* logo */}
        <Link href={'/'}>
          <Image
            height={40}
            width={40}
            src={'/app-logo.svg'}
            alt={'app logo'}
            className="rounded-lg"
          />
        </Link>
        {/* pages details to be added */}
        <p>Dashboard</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        {/* search  */}
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
