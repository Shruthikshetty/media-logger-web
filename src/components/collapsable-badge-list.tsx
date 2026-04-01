'use client';
import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Minus, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

type CollapsableBadgeListProps = {
  list: string[];
  maxDisplayed?: number;
  isDisabled?: boolean;
  style?: {
    root?: string;
    itemBadge?: string;
    buttonBadge?: string;
  };
};

/**
 * A component that displays a list of badges that can be expanded or collapsed
 * @param list - The list of badges to display
 * @param maxDisplayed - The maximum number of badges to display
 * @param style - The style of the badges
 */
const CollapsableBadgeList = ({
  list = [],
  maxDisplayed = 3,
  style,
  isDisabled = false,
}: CollapsableBadgeListProps) => {
  // hold the expanded state
  const [isExpanded, setIsExpanded] = useState(false);
  // get the maximum number of items to display
  const displayedItems = isExpanded ? list : list.slice(0, maxDisplayed);
  // calculate the remaining items length
  const remainingItems = list.length - displayedItems.length;
  return (
    <div
      className={cn(
        'flex flex-row flex-wrap items-center justify-start gap-1',
        style?.root,
      )}
    >
      {displayedItems.map((lang, index) => (
        <Badge
          className={cn(
            'border-ui-600 bg-muted-foreground/50 rounded-full border-0 p-0 px-2 text-[0.6rem]',
            style?.itemBadge,
          )}
          key={index}
        >
          {lang}
        </Badge>
      ))}
      {/* show the remaining items + button */}
      {!isExpanded && remainingItems > 0 && (
        <Badge
          className={cn(
            'border-ui-600 bg-muted-foreground/50 flex flex-row items-center rounded-full border-0 p-0 px-2',
            !isDisabled ? 'hover:scale-95 hover:opacity-80' : '',
            style?.buttonBadge,
          )}
          onClick={(e) => {
            // if disabled return
            if (isDisabled) return;
            // stop event propagation
            e.stopPropagation();
            setIsExpanded(true);
          }}
        >
          <p>
            <Plus className="size-2" strokeWidth={2} />
          </p>
          <p>{remainingItems}</p>
        </Badge>
      )}

      {
        // show the button to collapse the list
        isExpanded && (
          <Badge
            className={cn(
              'border-ui-600 bg-muted-foreground/50 flex flex-row items-center rounded-full border-0 px-2',
              !isDisabled ? 'hover:scale-95 hover:opacity-80' : '',
              style?.buttonBadge,
            )}
            onClick={(e) => {
              // if disabled return
              if (isDisabled) return;
              // stop event propagation
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <p>
              <Minus className="size-2" strokeWidth={4} />
            </p>
          </Badge>
        )
      }
    </div>
  );
};

export default CollapsableBadgeList;
