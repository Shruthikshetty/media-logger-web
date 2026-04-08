/**
 * This file contains configurations constants
 */

export const APP_THEMES = ['blurple', 'purple', 'emerald', 'rose'];

/**
 * All the cookie names
 */
export const COOKIE_NAMES = {
  token: 'token',
};

/**
 * All the cookie expiry times
 */
export const COOKIE_EXPIRY = {
  token: 1, // days
};

/**
 * user details stale time
 */
export const USER_DATA_STALE_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * discover movies stale time
 */
export const DISCOVER_MOVIES_STALE_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * media entries stale time fetch all
 */
export const MEDIA_ENTRY_FETCH_ALL_SLATE_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * media entries fetch by filter stale time
 */
export const MEDIA_ENTRY_FETCH_FILTER_SLATE_TIME = 5 * 60 * 1000; // 5 minutes
