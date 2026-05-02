/**
 * this @file contains all the services related to games
 */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/service-key.constants';
import { GAME_DETAILS_STALE_TIME } from '../constants/config.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import { ApiError, ApiResponse } from '../types/global.types';
import { MediaItem } from './media-entry';
import { AxiosError } from 'axios';

export type gameStatus = 'released' | 'upcoming';

export type Game = {
  _id: string;
  title: string;
  description: string;
  averageRating?: number;
  genre: string[];
  releaseDate: string;
  posterUrl?: string;
  backdropUrl?: string;
  isActive: boolean;
  status: gameStatus;
  platforms: string[];
  avgPlaytime?: number;
  developer?: string;
  ageRating?: number;
  youtubeVideoId?: string;
  createdAt: string;
  updatedAt: string;
};

export type GetGameDetailsResponse = ApiResponse<{
  game: Game;
  mediaEntry: MediaItem;
}>;

/**
 * custom hook to get the game details with user entries
 */
export const useGetGameDetailsWithUserEntry = (id: string) => {
  return useQuery<GetGameDetailsResponse, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.game.detailsWithEntry, id],
    staleTime: GAME_DETAILS_STALE_TIME,
    queryFn: async ({ signal }) =>
      apiClient
        .get<GetGameDetailsResponse>(`${Endpoints.baseGame}/${id}/with-entry`, {
          signal,
        })
        .then((res) => res.data),
  });
};
