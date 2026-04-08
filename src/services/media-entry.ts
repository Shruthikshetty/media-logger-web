/**
 * this @file contains all the services related to media entry
 */

import { useQuery } from '@tanstack/react-query';
import {
  ApiError,
  MediaStatus,
  OnModelType,
  Pagination,
} from '../types/global.types';
import { QUERY_KEYS } from '../constants/service-key.constants';
import apiClient from '../lib/api-client';
import { Endpoints } from '../constants/endpoints.constants';
import { AxiosError } from 'axios';
import {
  MEDIA_ENTRY_FETCH_ALL_SLATE_TIME,
  MEDIA_ENTRY_FETCH_FILTER_SLATE_TIME,
} from '../constants/config.constants';
import { Movie } from './discover-service';

/**
 * fetch all media entries
 * @TODO add pagination
 */

export type MediaEntryFull = {
  _id: string;
  user: string;
  onModel: OnModelType;
  status: MediaStatus;
  mediaItem: Movie; //@TODO this will also contain tv shows and games add later
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
  return useQuery<ResponseMediaEntries, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.mediaEntries.fetchAll, page, limit],
    staleTime: MEDIA_ENTRY_FETCH_ALL_SLATE_TIME,
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseMediaEntries>(Endpoints.mediaEntriesBase, {
          signal,
          params: { page, limit },
        })
        .then((res) => res.data),
  });
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

/**
 * Fetch filtered media entries via POST /api/media-entry/filter.
 * The query is disabled when no filter fields are provided.
 */
export const useFilterMediaEntries = (filters: MediaEntryFilterParams = {}) => {
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
    enabled: hasFilters,
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
