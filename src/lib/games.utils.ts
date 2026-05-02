/**
 * @file Utility types and normalizer functions for the games feature
 */

import {
  DiscoverMediaEntry,
  GameWithUserEntry,
} from '@/src/services/discover-service';
import { MediaEntryFull } from '@/src/services/media-entry';
import { Game } from '../services/game-service';

export type NormalizedGameMediaItem = {
  _id: string;
  title: string;
  posterUrl?: string;
  averageRating?: number;
  genre: string[];
  mediaEntry?: DiscoverMediaEntry;
  avgPlaytime?: number;
  releaseDate?: string;
  description: string;
};

export const normalizeGameWithUserEntry = (
  item: GameWithUserEntry,
): NormalizedGameMediaItem => ({
  _id: item._id,
  title: item.title,
  posterUrl: item.posterUrl,
  averageRating: item.averageRating,
  genre: item.genre,
  mediaEntry: item.mediaEntry,
  avgPlaytime: item.avgPlaytime,
  releaseDate: item.releaseDate,
  description: item.description,
});

export const normalizeMediaEntryFull = (
  item: MediaEntryFull,
): NormalizedGameMediaItem => {
  const mediaItem = item.mediaItem as Game;
  return {
    _id: item._id,
    title: mediaItem.title,
    posterUrl: mediaItem.posterUrl,
    averageRating: mediaItem.averageRating,
    genre: mediaItem.genre,
    avgPlaytime: mediaItem.avgPlaytime,
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
export const normalizeGameItem = (
  item: GameWithUserEntry | MediaEntryFull,
): NormalizedGameMediaItem =>
  'mediaItem' in item
    ? normalizeMediaEntryFull(item)
    : normalizeGameWithUserEntry(item);
