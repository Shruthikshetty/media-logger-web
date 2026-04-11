import { formatDate } from '../lib/date.utils';
import { formatDuration } from '../lib/time.utils';
import { Calendar, Clock, Plus, Star, Trash2 } from 'lucide-react';
import { MEDIA_ICON_MAPPING } from '../constants/screen.constants';
import { cn } from '../lib/utils';
import { MediaStatus, MediaType } from '../types/global.types';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import CollapsableBadgeList from './collapsable-badge-list';
import StatusBadge from './status-badge';
import { Button } from './ui/button';

/**
 * A component that displays media (Movie, Game, or TV Show) information in a list format.
 * this display is used in list display mode
 *
 * @param imageUrl - URL of the media image
 * @param title - Title of the media
 * @param mediaType - Type of the media
 * @param rating - Rating of the media
 * @param releaseDate - Release date of the media
 * @param length - Length of the media in minutes
 * @param description - Description of the media
 * @param status - Status of the media
 * @param genres - Genres of the media
 */
const MediaListItem = ({
  imageUrl,
  title,
  mediaType,
  rating,
  releaseDate,
  length,
  description,
  status,
  genres = [],
  onMediaClick = () => {},
  onAddTo = () => {},
  onDelete = () => {},
  disableAdd = false,
  disableDelete = false,
}: {
  imageUrl?: string;
  title: string;
  mediaType: MediaType;
  rating?: number;
  releaseDate?: string;
  length?: number; // runtime or playtime
  description: string;
  genres?: string[];
  status?: MediaStatus;
  onMediaClick?: () => void;
  onAddTo?: () => void;
  onDelete?: () => void;
  disableAdd?: boolean;
  disableDelete?: boolean;
}) => {
  // get icon based on media type
  const Icon = MEDIA_ICON_MAPPING[mediaType];
  return (
    <Card className="border-border px-2 py-2">
      <CardContent className="flex flex-row gap-2 px-0 py-0">
        <button
          className="aspect-2/3 h-[135px] w-[90px] shrink-0 overflow-hidden p-0"
          onClick={onMediaClick}
          aria-label={`open ${title}`}
        >
          {/* image */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title ?? 'media-image'}
              width={90}
              height={135}
              className="aspect-2/3 rounded-sm object-cover"
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              {Icon && (
                <Icon.icon className={'text-muted-foreground size-10'} />
              )}
            </div>
          )}
        </button>
        {/* info  */}
        <button
          className="flex h-full grow flex-col items-start gap-2 text-left"
          onClick={onMediaClick}
          aria-label={`open ${title}`}
        >
          <div className="flex flex-row items-center gap-2">
            {/* media icon */}
            {Icon && <Icon.icon className={cn('size-4', Icon.color)} />}
            {/* Title */}
            <p className="line-clamp-2 text-base font-semibold">{title}</p>
            {/* Status badge */}
            {status ? <StatusBadge status={status} className="py-0.4" /> : null}
          </div>
          <div className="flex flex-row items-center gap-2">
            {/* rating */}
            {rating ? (
              <p className="flex flex-row items-center gap-1 text-sm sm:text-base">
                <Star
                  className="sm:3.5 size-3 text-yellow-500"
                  fill="currentColor"
                />
                {rating}
              </p>
            ) : null}
            {/* release date */}
            {releaseDate ? (
              <p className="flex flex-row items-center gap-1 text-sm sm:text-base">
                <Calendar className="sm:3.5 size-3" />
                {formatDate(releaseDate)}
              </p>
            ) : null}
            {/* length */}
            {length ? (
              <p className="flex flex-row items-center gap-1 text-sm sm:text-base">
                <Clock className="size-3.5" />
                {formatDuration(length)}
              </p>
            ) : null}
          </div>
          {/* genres */}
          {genres.length > 0 ? (
            <CollapsableBadgeList list={genres} maxDisplayed={5} />
          ) : null}
          {/* description */}
          <p className="text-muted-foreground line-clamp-2 text-start text-sm">
            {description}
          </p>
        </button>
        {/* actions */}
        <div className="flex flex-row items-center gap-1">
          {/* if status is null then show add to list button */}
          {status ? (
            <>
              <Button
                variant={'ghost'}
                className={'hover:text-destructive hover:bg-transparent!'}
                aria-label="Delete media"
                onClick={onDelete}
                disabled={disableDelete}
              >
                <Trash2 aria-hidden={true} />
              </Button>
              {/*@TODO: add edit selector */}
            </>
          ) : (
            <Button
              variant={'ghost'}
              className="hover:bg-primary/5! text-primary hover:text-primary w-full"
              aria-label="Add to list"
              onClick={onAddTo}
              disabled={disableAdd}
            >
              <Plus />
              <span className="hidden sm:block">Add to List</span>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaListItem;
