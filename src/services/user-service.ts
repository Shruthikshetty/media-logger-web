import { useQuery } from '@tanstack/react-query';
import { useAuthStore, User } from '../state-management/auth.store';
import { AxiosError } from 'axios';
import { Endpoints } from '../constants/endpoints.constants';
import { ApiError } from '../types/global.types';
import { UserDataStaleTime } from '../constants/config.constants';
import { QUERY_KEYS } from '../constants/service-key.constants';
import apiClient from '../lib/api-client';

type ResponseUserDetails = {
  success: boolean;
  data: User;
};

//custom hook to fetch the user details
export const useGetUserDetails = () => {
  //check if token is set
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  return useQuery<ResponseUserDetails, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.user.userDetails],
    enabled: isLoggedIn, // enabled only if user is logged in
    staleTime: UserDataStaleTime,
    queryFn: async () =>
      apiClient
        .get<ResponseUserDetails>(Endpoints.baseUser)
        .then((res) => res.data),
  });
};
