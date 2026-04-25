import Image from 'next/image';
import { MediaType } from '../types/global.types';
import { MEDIA_ICON_MAPPING } from '../constants/screen.constants';
import { capitalizeFirstLetter } from '../lib/text-utils';
import { Calendar, Star } from 'lucide-react';
import { formatDate } from '../lib/date.utils';
import CollapsableBadgeList from './collapsable-badge-list';

/**
 * A card has large background image with
 * additional info like poster, title, release date, rating, genres, and media type.
 */
const MediaBackdropCard = ({
  backdropUrl,
  posteUrl,
  title,
  releaseDate,
  rating,
  genres,
  mediaType,
}: {
  backdropUrl: string;
  posteUrl: string;
  title: string;
  releaseDate: string;
  rating: number;
  genres: string[];
  mediaType: MediaType;
}) => {
  const Icon = MEDIA_ICON_MAPPING[mediaType];
  return (
    <div className="relative h-[35vh] max-h-[50vh] w-full">
      {/* background image */}
      <Image
        src={backdropUrl}
        alt="Backdrop"
        fill
        priority
        className="-z-10 object-cover opacity-90"
      />
      {/*  details  */}
      <div className="z-10 flex h-full w-full flex-row items-center p-5">
        {/* poster  */}
        <Image
          src={posteUrl}
          alt="poster"
          width={150}
          height={225}
          priority
          className="aspect-2/3 rounded-lg object-cover"
        />
        <div className="ml-5 flex flex-col">
          {/* title */}
          <div className="flex flex-row items-center gap-2">
            {Icon && <Icon.icon className="h-6 w-6" />}
            <h1 className="text-2xl font-bold">
              {capitalizeFirstLetter(title)}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            {/* rating */}
            <p className="flex flex-row items-center gap-1 font-semibold">
              <Star className="fill-primary stroke-primary size-4" /> {rating}
              /10
            </p>
            {/* release date  */}
            <p className="flex flex-row items-center gap-1">
              <Calendar className="size-4" /> {formatDate(releaseDate, 'yyyy')}
            </p>
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
          {/* options @TODO*/}
        </div>
      </div>
    </div>
  );
};

export default MediaBackdropCard;
