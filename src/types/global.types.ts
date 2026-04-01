/**
 * This file contains all globally used types that are not related to a specific module
 */

export type ApiError = {
  message?: string;
  success: boolean;
};

export interface Pagination {
  total: number;
  start: number;
  limit: number;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
  hasPrevious: boolean;
  nextPage: number | null;
  previousPage: number | null;
}

export interface FilterLimits<T = number> {
  gte: T;
  lte: T;
}

export type OnModelType = 'Movie' | 'TVShow' | 'Game';

export type MediaStatus =
  | 'Planning'
  | 'Playing'
  | 'Watching'
  | 'Completed'
  | 'Dropped';
