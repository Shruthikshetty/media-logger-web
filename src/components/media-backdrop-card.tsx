import Image from 'next/image';
import { MediaStatus, MediaType } from '../types/global.types';
import {
  MEDIA_ICON_MAPPING,
  MEDIA_STATUS_SELECT_OPTIONS,
} from '../constants/screen.constants';
import { capitalizeFirstLetter } from '../lib/text-utils';
import { Calendar, Star } from 'lucide-react';
import { formatDate } from '../lib/date.utils';
import CollapsableBadgeList from './collapsable-badge-list';
import { Skeleton } from './ui/skeleton';
import StarRating from './star-rating';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn } from '../lib/utils';
import { useState } from 'react';

/**
 * A card has large background image with
 * additional info like poster, title, release date, rating, genres, and media type.
 */
const MediaBackdropCard = ({
  backdropUrl,
  posterUrl,
  title = '???',
  releaseDate,
  rating,
  genres = [],
  mediaType,
  loading = false,
  onStarRatingChange,
  starValue = 0,
  disableUpdate,
  defaultStatus = '',
  onStatusChange,
  isLoggedIn = false,
}: {
  backdropUrl?: string;
  posterUrl?: string;
  title?: string;
  releaseDate?: string;
  rating?: number;
  genres?: string[];
  mediaType: MediaType;
  loading?: boolean;
  starValue?: number;
  onStarRatingChange?: (value: number) => void;
  disableUpdate?: boolean;
  defaultStatus?: MediaStatus | '';
  onStatusChange?: (value: MediaStatus) => void;
  isLoggedIn?: boolean;
}) => {
  const [mediaStatus, setMediaStatus] = useState(defaultStatus);
  // get the icon based on media type
  const Icon = MEDIA_ICON_MAPPING[mediaType];
  // get options based on media type
  const options = MEDIA_STATUS_SELECT_OPTIONS[mediaType];

  // render select for status
  const renderStatusSelect = () => (
    <Select
      value={mediaStatus}
      disabled={disableUpdate}
      onValueChange={(value) => {
        setMediaStatus(value as MediaStatus);
        onStatusChange?.(value as MediaStatus);
      }}
    >
      <SelectTrigger
        className={cn(
          'bg-background/70! w-full max-w-70 font-semibold',
          options?.find((option) => option.value === mediaStatus)?.color,
        )}
      >
        <SelectValue placeholder="Select Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );

  // in case content is loading
  if (loading) {
    return (
      <div className="relative h-[35vh] max-h-[50vh] w-full overflow-hidden lg:h-[40vh]">
        {/* Backdrop Skeleton */}
        <div className="bg-muted/10 absolute inset-0 -z-10 h-full w-full rounded-none" />

        {/* Details Skeleton */}
        <div className="z-10 flex h-full w-full flex-row items-center p-5">
          {/* Poster Skeleton */}
          <Skeleton className="aspect-2/3 h-52 w-36 rounded-lg" />

          <div className="bg-muted/30 ml-5 flex w-full max-w-lg flex-col gap-3 rounded-lg p-5">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="mt-1 h-6 w-1/3" />
          </div>
        </div>
      </div>
    );
  }

  // once content is loaded
  return (
    <>
      <div className="relative h-[35vh] max-h-[50vh] w-full lg:h-[40vh]">
        {/* background image */}
        {backdropUrl ? (
          <Image
            src={backdropUrl}
            alt="Backdrop"
            fill
            priority
            className="-z-10 object-cover object-[center_30%] opacity-90"
          />
        ) : (
          <div className="bg-muted/50 absolute inset-0 -z-10 flex h-full w-full flex-row items-center justify-center">
            <Icon.icon className="size-16 opacity-30" />
          </div>
        )}
        {/*  details  */}
        <div className="z-10 flex h-full w-full flex-row items-center p-5">
          {/* poster  */}
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt="poster"
              width={150}
              height={225}
              priority
              className="aspect-2/3 rounded-lg object-cover"
            />
          ) : (
            <div className="bg-muted/80 flex aspect-2/3 h-52 w-36 flex-row items-center justify-center rounded-lg">
              <Icon.icon className="size-16 opacity-30" />
            </div>
          )}
          <div className="bg-muted/70 sm:bg-muted/85 ml-5 flex flex-col rounded-lg p-5">
            {/* title */}
            <div className="flex flex-row items-center gap-2">
              {Icon && <Icon.icon className="h-6 w-6" />}
              <h1 className="text-xl font-bold sm:text-2xl">
                {capitalizeFirstLetter(title)}
              </h1>
            </div>
            <div className="flex flex-row items-center gap-2">
              {/* rating */}
              {rating != undefined ? (
                <p className="flex flex-row items-center gap-1 text-sm font-semibold sm:text-base">
                  <Star className="fill-primary stroke-primary size-4" />{' '}
                  {rating}
                  /10
                </p>
              ) : null}
              {/* release date  */}
              {releaseDate ? (
                <p className="flex flex-row items-center gap-1 text-sm sm:text-base">
                  <Calendar className="size-4" />{' '}
                  {formatDate(releaseDate, 'yyyy')}
                </p>
              ) : null}
            </div>
            {/* genres */}
            <CollapsableBadgeList
              list={genres}
              maxDisplayed={3}
              style={{
                itemBadge: 'bg-primary sm:text-xs',
                root: 'mt-1',
              }}
            />
            {/* for large devices */}
            {isLoggedIn ? (
              <div className="mt-2 hidden gap-2 sm:flex sm:flex-col">
                {/* user rating  */}
                {onStarRatingChange ? (
                  <StarRating
                    label="Your Rating :"
                    size={14}
                    hideRatingValue
                    defaultValue={starValue}
                    disabled={disableUpdate}
                    onChange={onStarRatingChange}
                  />
                ) : null}
                {/* change status */}
                {onStatusChange ? renderStatusSelect() : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* for small devices */}
      {isLoggedIn ? (
        <div className="flex flex-col gap-2 px-5 py-1 sm:hidden">
          {/* user rating  */}
          {onStarRatingChange ? (
            <StarRating
              label="Your rating :"
              size={14}
              hideRatingValue
              defaultValue={starValue}
              disabled={disableUpdate}
              onChange={onStarRatingChange}
            />
          ) : null}
          {/* change status  */}
          {onStatusChange ? renderStatusSelect() : null}
        </div>
      ) : null}
    </>
  );
};

export default MediaBackdropCard;
