/**
 * this @file contains all the services related to discover
 */

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/service-key.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import {
  ApiError,
  MediaStatus,
  OnModelType,
  Pagination,
} from '../types/global.types';
import { AxiosError } from 'axios';
import { DISCOVER_MOVIES_STALE_TIME } from '../constants/config.constants';

export type Movie = {
  _id: string;
  title: string;
  description: string;
  averageRating?: number;
  genre: string[];
  releaseDate: string;
  cast?: string[];
  directors?: string[];
  runTime: number;
  languages: string[];
  posterUrl?: string;
  backdropUrl?: string;
  isActive: boolean;
  status: string;
  tags?: string[];
  ageRating: number;
  youtubeVideoId?: string;
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

type ResponseDiscoverMovies = {
  success: boolean;
  data: {
    movies: MovieWithUserEntry[];
    pagination: Pagination;
  };
};

/**
 * fetch discover movies this fetches the movies with populated user entries
 * @TODO yet to add query params
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
