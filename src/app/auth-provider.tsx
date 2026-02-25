'use client';

import Cookies from 'js-cookie';
import { COOKIE_NAMES } from '@/src/constants/config.constants';
import { useAuthStore } from '@/src/state-management/auth.store';
import { useLayoutEffect } from 'react';

/**
 * This component provides the authentication context to the app
 * check if the user token is present in the cookie
 * if present set the is logged in to true
 */
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  // check if the token is present in the cookie
  useLayoutEffect(() => {
    const token = Cookies.get(COOKIE_NAMES.token);
    if (token) {
      // set is logged in to true
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return <>{children}</>;
};

export default AuthProvider;
