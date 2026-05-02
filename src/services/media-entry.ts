/**
 * this @file contains all the services related to media entry
 */

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  ApiError,
  ApiResponse,
  MediaStatus,
  OnModelType,
  Pagination,
} from '../types/global.types';
import { MUTATION_KEYS, QUERY_KEYS } from '../constants/service-key.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import { AxiosError } from 'axios';
import {
  MEDIA_ENTRY_FETCH_ALL_SLATE_TIME,
  MEDIA_ENTRY_FETCH_FILTER_SLATE_TIME,
} from '../constants/config.constants';
import { TvShowBase } from './discover-service';
import { useAuthStore } from '../state-management/auth.store';
import { Movie } from './movie-service';
import { Game } from './game-service';

export type MediaEntryFull = {
  _id: string;
  user: string;
  onModel: OnModelType;
  status: MediaStatus;
  mediaItem: Movie | Game | TvShowBase;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type MediaItem = {
  _id: string;
  user: string;
  onModel: OnModelType;
  status: MediaStatus;
  mediaItem: string;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
};

type ResponseMediaEntries = {
  success: boolean;
  data: {
    mediaEntries: MediaEntryFull[];
    pagination: Pagination;
  };
};

export type MediaEntryFilterParams = {
  limit?: number;
  page?: number;
  status?: MediaStatus;
  rating?: number;
  onModel?: OnModelType;
  sortBy?: 'createdAt' | 'rating' | 'status';
  sortOrder?: 'asc' | 'desc';
};

export type MediaEntryAddParams = {
  status: MediaStatus;
  rating?: number;
  onModel: OnModelType;
  mediaItem: string;
};

export type UpdateMediaEntryRequest = {
  status?: MediaStatus;
  rating?: number;
};

type ResponseMediaEntryAdd = ApiResponse<MediaItem>;

/**
 * fetch all media entries
 */
export const useFetchMediaEntries = ({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
} = {}) => {
  //check if token is set
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  return useQuery<ResponseMediaEntries, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.mediaEntries.fetchAll, page, limit],
    staleTime: MEDIA_ENTRY_FETCH_ALL_SLATE_TIME,
    enabled: isLoggedIn,
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseMediaEntries>(Endpoints.mediaEntriesBase, {
          signal,
          params: { page, limit },
        })
        .then((res) => res.data),
  });
};

/**
 * Fetch filtered media entries  with filters
 * The query is disabled when no filter fields are provided.
 */
export const useFilterMediaEntries = (filters: MediaEntryFilterParams = {}) => {
  //check if token is set
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  //destructure filters
  const { limit, page, status, rating, onModel, sortBy, sortOrder } = filters;
  // check if any filter is provided
  const hasFilters = Boolean(
    status !== undefined ||
    rating !== undefined ||
    onModel !== undefined ||
    sortBy !== undefined ||
    sortOrder !== undefined ||
    (limit !== undefined && limit > 0) ||
    (page !== undefined && page > 1),
  );

  return useQuery<ResponseMediaEntries, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.mediaEntries.filter, filters],
    staleTime: MEDIA_ENTRY_FETCH_FILTER_SLATE_TIME,
    enabled: hasFilters && isLoggedIn,
    placeholderData: keepPreviousData, // keep previous data when fetching next page
    queryFn: async ({ signal }) =>
      apiClient
        .post<ResponseMediaEntries>(
          Endpoints.mediaEntriesFilter,
          { limit, page, status, rating, onModel, sortBy, sortOrder },
          { signal },
        )
        .then((res) => res.data),
  });
};

/**
 * Hook for adding a new media entry
 */
export const useAddMediaEntry = () => {
  // query client
  const queryClient = useQueryClient();
  return useMutation<
    ResponseMediaEntryAdd,
    AxiosError<ApiError>,
    MediaEntryAddParams
  >({
    mutationKey: [MUTATION_KEYS.mediaEntries.add],
    mutationFn: async (data: MediaEntryAddParams) =>
      apiClient
        .post<ResponseMediaEntryAdd>(Endpoints.mediaEntriesBase, data)
        .then((res) => res.data),
    onSuccess: () => {
      return Promise.all([
        // invalidate discover movies query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.discover.movies],
        }),
        // invalidate discover games query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.discover.games],
        }),
        // invalidate the fetch all media entries query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.mediaEntries.fetchAll],
        }),
        // invalidate discover tv shows query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.discover.tvShows],
        }),
        // invalidate the filter media entries query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.mediaEntries.filter],
        }),
      ]);
    },
  });
};

/**
 * Hook for deleting a media entry
 */
export const useDeleteMediaEntry = () => {
  // query client
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<null>, AxiosError<ApiError>, string>({
    mutationKey: [MUTATION_KEYS.mediaEntries.delete],
    mutationFn: async (id: string) =>
      apiClient
        .delete<ApiResponse<null>>(`${Endpoints.mediaEntriesBase}/${id}`)
        .then((res) => res.data),
    onSuccess: () => {
      return Promise.all([
        // invalidate discover movies query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.discover.movies],
        }),
        // invalidate discover games query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.discover.games],
        }),
        // invalidate the fetch all media entries query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.mediaEntries.fetchAll],
        }),
        // invalidate discover tv shows query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.discover.tvShows],
        }),
        // invalidate the filter media entries query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.mediaEntries.filter],
        }),
      ]);
    },
  });
};

/**
 * Hook to update a media entry
 */
export const useUpdateMediaEntry = () => {
  // query client
  const queryClient = useQueryClient();
  return useMutation<
    ApiResponse<MediaItem>,
    AxiosError<ApiError>,
    { id: string; data: UpdateMediaEntryRequest }
  >({
    mutationKey: [MUTATION_KEYS.mediaEntries.update],
    mutationFn: async ({ id, data }) =>
      apiClient
        .patch<
          ApiResponse<MediaItem>
        >(`${Endpoints.mediaEntriesBase}/${id}`, data)
        .then((res) => res.data),
    onSuccess: () => {
      return Promise.all([
        // invalidate the fetch all media entries query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.mediaEntries.fetchAll],
        }),
        // invalidate the filter media entries query
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.mediaEntries.filter],
        }),
      ]);
    },
  });
};
