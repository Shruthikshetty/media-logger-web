/**
 * this @file contains all the services related to movies
 */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/service-key.constants';
import { MOVIE_DETAILS_STALE_TIME } from '../constants/config.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import { ApiError, ApiResponse } from '../types/global.types';
import { MediaItem } from './media-entry';
import { AxiosError } from 'axios';

//types
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

export type GetMovieDetailsResponse = ApiResponse<{
  movie: Movie;
  mediaEntry: MediaItem;
}>;
/**
 * custom hook to get the movie details with user entries
 */
export const useGetMovieDetailsWithUserEntry = (id: string) => {
  return useQuery<GetMovieDetailsResponse, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.movie.detailsWithEntry, id],
    staleTime: MOVIE_DETAILS_STALE_TIME,
    queryFn: async ({ signal }) =>
      apiClient
        .get<GetMovieDetailsResponse>(
          `${Endpoints.baseMovie}/${id}/with-entry`,
          { signal },
        )
        .then((res) => res.data),
  });
};
