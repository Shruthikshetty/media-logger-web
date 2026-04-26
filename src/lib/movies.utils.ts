/**
 * @file Utility types and normalizer functions for the movies feature
 */

import {
  DiscoverMediaEntry,
  MovieWithUserEntry,
} from '@/src/services/discover-service';
import { MediaEntryFull } from '@/src/services/media-entry';
import { Movie } from '../services/movie-service';

export type NormalizedMovieMediaItem = {
  _id: string;
  title: string;
  posterUrl?: string;
  averageRating?: number;
  genre: string[];
  mediaEntry?: DiscoverMediaEntry;
  runTime?: number;
  releaseDate?: string;
  description: string;
};

export const normalizeMovieWithUserEntry = (
  item: MovieWithUserEntry,
): NormalizedMovieMediaItem => ({
  _id: item._id,
  title: item.title,
  posterUrl: item.posterUrl,
  averageRating: item.averageRating,
  genre: item.genre,
  mediaEntry: item.mediaEntry,
  runTime: item.runTime,
  releaseDate: item.releaseDate,
  description: item.description,
});

export const normalizeMediaEntryFull = (
  item: MediaEntryFull,
): NormalizedMovieMediaItem => {
  const mediaItem = item.mediaItem as Movie;
  return {
    _id: item._id,
    title: mediaItem.title,
    posterUrl: mediaItem.posterUrl,
    averageRating: mediaItem.averageRating,
    genre: mediaItem.genre,
    runTime: mediaItem.runTime,
    releaseDate: mediaItem.releaseDate,
    description: mediaItem.description,
    mediaEntry: {
      _id: item._id,
      user: item.user,
      onModel: item.onModel,
      status: item.status,
      rating: item.rating,
    },
  };
};

/** Detect which API shape an item came from and normalize it */
export const normalizeMediaItem = (
  item: MovieWithUserEntry | MediaEntryFull,
): NormalizedMovieMediaItem =>
  'mediaItem' in item
    ? normalizeMediaEntryFull(item)
    : normalizeMovieWithUserEntry(item);
