/**
 * this @file contains all the services related to discover
 */

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/service-key.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import {
  ApiError,
  ApiResponse,
  MediaStatus,
  OnModelType,
  Pagination,
} from '../types/global.types';
import { AxiosError } from 'axios';
import {
  DISCOVER_GAMES_STALE_TIME,
  DISCOVER_MOVIES_STALE_TIME,
  DISCOVER_TV_SHOWS_STALE_TIME,
} from '../constants/config.constants';
import { Movie } from './movie-service';
import { Game } from './game-service';

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

export type DiscoverMediaEntry = {
  _id: string;
  user: string;
  onModel: OnModelType;
  status: MediaStatus;
  rating?: number;
};

export type MovieWithUserEntry = Movie & {
  mediaEntry: DiscoverMediaEntry;
};

export type GameWithUserEntry = Game & {
  mediaEntry: DiscoverMediaEntry;
};

export type TvShowWithUserEntry = TvShowBase & {
  mediaEntry: DiscoverMediaEntry;
};

type ResponseDiscoverMovies = ApiResponse<{
  movies: MovieWithUserEntry[];
  pagination: Pagination;
}>;

type ResponseDiscoverGames = ApiResponse<{
  games: GameWithUserEntry[];
  pagination: Pagination;
}>;

type ResponseDiscoverTvShows = ApiResponse<{
  tvShows: TvShowWithUserEntry[];
  pagination: Pagination;
}>;

/**
 * fetch discover movies this fetches the movies with populated user entries
 */
export const useGetDiscoverMovies = ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
} = {}) => {
  return useQuery<ResponseDiscoverMovies, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.discover.movies, page, limit],
    staleTime: DISCOVER_MOVIES_STALE_TIME,
    placeholderData: keepPreviousData, // keep previous data when fetching next page
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseDiscoverMovies>(Endpoints.discoverMovies, {
          signal,
          params: { page, limit },
        })
        .then((res) => res.data),
  });
};

/**
 * fetch discover movies this fetches the movies with populated user entries
 */
export const useGetDiscoverGames = ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
} = {}) => {
  return useQuery<ResponseDiscoverGames, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.discover.games, page, limit],
    staleTime: DISCOVER_GAMES_STALE_TIME,
    placeholderData: keepPreviousData, // keep previous data when fetching next page
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseDiscoverGames>(Endpoints.discoverGames, {
          signal,
          params: { page, limit },
        })
        .then((res) => res.data),
  });
};

/**
 * fetch discover movies this fetches the movies with populated user entries
 */
export const useGetDiscoverTvShows = ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
} = {}) => {
  return useQuery<ResponseDiscoverTvShows, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.discover.tvShows, page, limit],
    staleTime: DISCOVER_TV_SHOWS_STALE_TIME,
    placeholderData: keepPreviousData, // keep previous data when fetching next page
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseDiscoverTvShows>(Endpoints.discoverTvShows, {
          signal,
          params: { page, limit },
        })
        .then((res) => res.data),
  });
};
