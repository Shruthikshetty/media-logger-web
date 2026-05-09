/**
 * this @file contains all the services related to tv shows
 */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/service-key.constants';
import { TV_SHOW_DETAILS_STALE_TIME } from '../constants/config.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import { ApiError, ApiResponse } from '../types/global.types';
import { MediaItem } from './media-entry';
import { AxiosError } from 'axios';

//types
export type TvShowBase = {
  _id: string;
  title: string;
  description: string;
  releaseDate: string;
  averageRating?: number;
  genre: string[];
  cast?: string[];
  directors?: string[];
  avgRunTime?: number;
  languages?: string[];
  posterUrl?: string;
  backdropUrl?: string;
  isActive: boolean;
  status: string;
  tags?: string[];
  ageRating?: number;
  totalSeasons: number;
  totalEpisodes: number;
  youtubeVideoId?: string;
  tmdbId?: string;
  imdbId?: string;
  createdAt: string;
  updatedAt: string;
};

export type EpisodeBase = {
  _id: string;
  episodeNumber: string;
  title: string;
  description?: string;
  releaseDate?: string;
  runTime?: number;
  averageRating?: number;
  stillUrl?: string;
  youtubeVideoId?: string;
  createdAt: string;
  updatedAt: string;
};

export type SeasonWithEpisodes = {
  _id: string;
  seasonNumber: number;
  title: string;
  noOfEpisodes: number;
  posterUrl?: string;
  description?: string;
  releaseDate?: string;
  averageRating?: number;
  youtubeVideoId?: string;
  episodes?: EpisodeBase[];
};

export type TVShowWithSeasons = TvShowBase & {
  seasons?: SeasonWithEpisodes[];
};

export type GetTvShowDetailsResponse = ApiResponse<{
  tvShow: TVShowWithSeasons;
  mediaEntry: MediaItem;
}>;

/**
 * custom hook to get the tv show details with user entries
 */
export const useGetTvShowDetailsWithUserEntry = (id: string) => {
  return useQuery<GetTvShowDetailsResponse, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.tvShow.detailsWithEntry, id],
    staleTime: TV_SHOW_DETAILS_STALE_TIME,
    queryFn: async ({ signal }) =>
      apiClient
        .get<GetTvShowDetailsResponse>(
          `${Endpoints.baseTvShow}/${id}/with-entry`,
          {
            signal,
          },
        )
        .then((res) => res.data),
  });
};
