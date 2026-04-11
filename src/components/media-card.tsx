import { Plus, Star, Trash2 } from 'lucide-react';
import { DiscoverMediaEntry } from '../services/discover-service';
import { Card, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import CollapsableBadgeList from './collapsable-badge-list';
import { MEDIA_ICON_MAPPING } from '../constants/screen.constants';
import { cn } from '../lib/utils';
import StatusBadge from './status-badge';

/**
 * A component that displays media (Movie, Game, or TV Show) information in a card format.
 * Includes poster image, rating, and status controls.
 */
const MediaCard = ({
  mediaType,
  imageUrl,
  rating,
  genres,
  mediaEntry,
  title,
  onAddTo = () => {},
  onCardClick = () => {},
  onDelete = () => {},
  disableAdd = false,
  disableDelete = false,
}: {
  mediaType: 'Game' | 'Movie' | 'TvShow';
  imageUrl?: string;
  rating?: number;
  title?: string;
  genres?: string[];
  mediaEntry?: DiscoverMediaEntry;
  onAddTo?: () => void;
  onCardClick?: () => void;
  onDelete?: () => void;
  disableAdd?: boolean;
  disableDelete?: boolean;
}) => {
  const Icon = MEDIA_ICON_MAPPING[mediaType];

  return (
    <Card className="border-border hover:shadow-primary/15 w-45 gap-0 p-0 transition-[transform,box-shadow] duration-300 will-change-transform hover:scale-103 hover:shadow-xl">
      <CardContent
        className="m-0 cursor-pointer overflow-hidden rounded-lg p-0"
        onClick={onCardClick}
        role="button"
        tabIndex={0}
        // handle enter and space key press
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onCardClick();
          }
        }}
      >
        <div className="relative aspect-2/3 w-full">
          <div className="absolute z-10 flex w-full flex-row justify-between p-2">
            <div className="bg-background/70 flex flex-row items-center gap-1 rounded-sm p-1 text-sm">
              {Icon && <Icon.icon className={cn('size-4', Icon.color)} />}
            </div>
            {rating ? (
              <p className="bg-background/70 flex flex-row items-center gap-1 rounded-xl px-2 text-sm">
                <Star className="size-3 text-yellow-500" fill="currentColor" />
                {rating}
              </p>
            ) : null}
          </div>
          {/* rating and type of media */}
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title ?? 'media-image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 20vw"
              priority={false}
            />
          )}
          {/* if not image show a placeholder @TODO replace with image of the media*/}
          {!imageUrl && (
            <div className="flex h-full w-full items-center justify-center">
              {Icon ? (
                <Icon.icon className="text-muted-foreground size-10" />
              ) : (
                <p className="text-muted-foreground">No image</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-baseline gap-1 px-1.5">
        <p className="line-clamp-2 text-base font-semibold">{title}</p>
        <div>
          {/* tags/genres will go here */}
          {genres ? (
            <CollapsableBadgeList
              list={genres}
              maxDisplayed={3}
              isDisabled={true}
            />
          ) : null}
        </div>
        {mediaEntry ? (
          <div className="flex w-full flex-row items-center justify-between gap-1">
            <StatusBadge status={mediaEntry?.status} />
            <Button
              variant={'ghost'}
              className={'hover:text-destructive hover:bg-transparent!'}
              aria-label="Delete media"
              onClick={onDelete}
              disabled={disableDelete}
            >
              <Trash2 aria-hidden={true} />
            </Button>
          </div>
        ) : (
          <Button
            variant={'ghost'}
            className="hover:bg-primary/5! text-primary hover:text-primary w-full"
            aria-label="Add to list"
            onClick={onAddTo}
            disabled={disableAdd}
          >
            Add to List
            <Plus />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MediaCard;
