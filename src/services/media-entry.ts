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
import { MEDIA_ENTRY_FETCH_ALL_SLATE_TIME } from '../constants/config.constants';

/**
 * fetch all media entries
 * @TODO add pagination
 */

export type MediaEntry = {
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
    mediaEntries: MediaEntry[];
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
