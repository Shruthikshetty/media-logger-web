/**
 * This file contains all the query / mutation keys
 */

export const QUERY_KEYS = {
  user: {
    userDetails: 'user-details',
  },
  discover: {
    movies: 'discover-movies',
    games: 'discover-games',
    tvShows: 'discover-tv-shows',
  },
  mediaEntries: {
    fetchAll: 'media-entries-all',
    filter: 'media-entries-filter',
  },
  movie: {
    detailsWithEntry: 'movie-details-with-entry',
  },
  game: {
    detailsWithEntry: 'game-details-with-entry',
  },
};

export const MUTATION_KEYS = {
  auth: {
    login: 'login',
  },
  mediaEntries: {
    add: 'media-entries-add',
    delete: 'media-entries-delete',
    update: 'media-entries-update',
  },
};
