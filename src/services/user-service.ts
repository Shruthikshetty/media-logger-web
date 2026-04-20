import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuthStore, User } from '../state-management/auth.store';
import { AxiosError } from 'axios';
import { Endpoints } from '../constants/endpoints.constants';
import { ApiError, ApiResponse } from '../types/global.types';
import { USER_DATA_STALE_TIME } from '../constants/config.constants';
import { QUERY_KEYS } from '../constants/service-key.constants';
import apiClient from '../lib/api-client';

type ResponseUserDetails = {
  success: boolean;
  data: User;
};

type AddUserRequest = {
  name: string;
  email: string;
  password: string;
  bio?: string;
  location?: string;
  profileImg?: string;
};

//custom hook to fetch the user details
export const useGetUserDetails = () => {
  //check if token is set
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  return useQuery<ResponseUserDetails, AxiosError<ApiError>>({
    queryKey: [QUERY_KEYS.user.userDetails],
    enabled: isLoggedIn, // enabled only if user is logged in
    staleTime: USER_DATA_STALE_TIME,
    queryFn: async ({ signal }) =>
      apiClient
        .get<ResponseUserDetails>(Endpoints.baseUser, { signal })
        .then((res) => res.data),
  });
};

// custom hok to create a new user (sign up)
export const useCreateUser = () => {
  return useMutation<ApiResponse<User>, AxiosError<ApiError>, AddUserRequest>({
    mutationFn: async (userData: AddUserRequest) =>
      apiClient
        .post<ApiResponse<User>>(Endpoints.baseUser, userData)
        .then((res) => res.data),
  });
};
