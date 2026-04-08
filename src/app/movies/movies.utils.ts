/**
 * @file Utility types and normalizer functions for the movies feature
 */

import {
  DiscoverMediaEntry,
  MovieWithUserEntry,
} from '@/src/services/discover-service';
import { MediaEntryFull } from '@/src/services/media-entry';

export type NormalizedMediaItem = {
  _id: string;
  title: string;
  posterUrl?: string;
  averageRating?: number;
  genre: string[];
  mediaEntry?: DiscoverMediaEntry;
};

export const normalizeMovieWithUserEntry = (
  item: MovieWithUserEntry,
): NormalizedMediaItem => ({
  _id: item._id,
  title: item.title,
  posterUrl: item.posterUrl,
  averageRating: item.averageRating,
  genre: item.genre,
  mediaEntry: item.mediaEntry,
});

export const normalizeMediaEntryFull = (
  item: MediaEntryFull,
): NormalizedMediaItem => ({
  _id: item._id,
  title: item.mediaItem.title,
  posterUrl: item.mediaItem.posterUrl,
  averageRating: item.mediaItem.averageRating,
  genre: item.mediaItem.genre,
  mediaEntry: {
    _id: item._id,
    user: item.user,
    onModel: item.onModel,
    status: item.status,
    rating: item.rating,
  },
});

/** Detect which API shape an item came from and normalize it */
export const normalizeMediaItem = (
  item: MovieWithUserEntry | MediaEntryFull,
): NormalizedMediaItem =>
  'mediaItem' in item
    ? normalizeMediaEntryFull(item)
    : normalizeMovieWithUserEntry(item);
