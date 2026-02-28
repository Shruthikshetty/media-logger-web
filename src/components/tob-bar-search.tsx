import { Search } from 'lucide-react';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetFooter,
} from './ui/sheet';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';

//@TODO this component is not complete yet for future implementation

/**
 * search bar used in top bar for global search of media
 * a sheet is used for mobile screen
 */
const TopBarSearch = () => {
  return (
    <>
      <InputGroup className="hidden sm:flex">
        <InputGroupInput placeholder="Search media..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <Sheet>
        <SheetTrigger className="border-border bg-input/30 rounded-lg border p-1.5 sm:hidden">
          <Search className="hover:text-primary min-h-4 min-w-4 hover:cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle className="text-center text-lg">
              Search all media
            </SheetTitle>
            <InputGroup>
              <InputGroupInput placeholder="Search media..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </SheetHeader>
          <SheetFooter>
            {/*TODO: search results */}
            <div className="flex flex-col gap-2"></div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default TopBarSearch;
