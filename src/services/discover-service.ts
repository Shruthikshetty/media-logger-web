/**
 * this @file contains all the services related to discover
 */

import { useQuery } from '@tanstack/react-query';
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
import { DiscoverMoviesStaleTime } from '../constants/config.constants';

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

type UserEntry = {
  _id: string;
  user: string;
  onModel: OnModelType;
  status: MediaStatus;
  mediaId: string;
  rating?: number;
};

export type MovieWithUserEntry = Movie & {
  userEntry: UserEntry;
};

type ResponseDiscoverMovies = {
  success: boolean;
  data: MovieWithUserEntry[];
  pagination: Pagination;
};

/**
 * fetch discover movies this fetches the movies with populated user entries
 * @TODO yet to add query params
 */
export const useGetDiscoverMovies = () => {
  return useQuery<ResponseDiscoverMovies, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.discover.movies],
    staleTime: DiscoverMoviesStaleTime,
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseDiscoverMovies>(Endpoints.discoverMovies, { signal })
        .then((res) => res.data),
  });
};
