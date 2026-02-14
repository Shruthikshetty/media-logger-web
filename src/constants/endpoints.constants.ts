/**
 * This file contains all the endpoints for the app
 */

import env from '@/env';

export const baseUrl = env.NEXT_PUBLIC_BASE_URL;

//this contains all the endpoints
export const Endpoints = {
  login: `${baseUrl}/api/auth/login`,
};
