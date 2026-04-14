/**
 * @file Utility types and normalizer functions for the tv shows feature
 */

import {
  DiscoverMediaEntry,
  TvShowWithUserEntry,
  TvShowBase,
} from '@/src/services/discover-service';
import { MediaEntryFull } from '@/src/services/media-entry';

export type NormalizedTvShowMediaItem = {
  _id: string;
  title: string;
  posterUrl?: string;
  averageRating?: number;
  genre: string[];
  mediaEntry?: DiscoverMediaEntry;
  avgRunTime?: number;
  releaseDate?: string;
  description: string;
};

export const normalizeTvShowWithUserEntry = (
  item: TvShowWithUserEntry,
): NormalizedTvShowMediaItem => ({
  _id: item._id,
  title: item.title,
  posterUrl: item.posterUrl,
  averageRating: item.averageRating,
  genre: item.genre,
  mediaEntry: item.mediaEntry,
  avgRunTime: item.avgRunTime,
  releaseDate: item.releaseDate,
  description: item.description,
});

export const normalizeMediaEntryFull = (
  item: MediaEntryFull,
): NormalizedTvShowMediaItem => {
  const mediaItem = item.mediaItem as TvShowBase;
  return {
    _id: item._id,
    title: mediaItem.title,
    posterUrl: mediaItem.posterUrl,
    averageRating: mediaItem.averageRating,
    genre: mediaItem.genre,
    avgRunTime: mediaItem.avgRunTime,
    releaseDate: mediaItem.releaseDate,
    description: mediaItem.description,
    mediaEntry: {
      _id: mediaItem._id,
      user: item.user,
      onModel: item.onModel,
      status: item.status,
      rating: item.rating,
    },
  };
};

/** Detect which API shape an item came from and normalize it */
export const normalizeTvShowItem = (
  item: TvShowWithUserEntry | MediaEntryFull,
): NormalizedTvShowMediaItem =>
  'mediaItem' in item
    ? normalizeMediaEntryFull(item)
    : normalizeTvShowWithUserEntry(item);
