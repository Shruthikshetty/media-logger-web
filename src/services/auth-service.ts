// this file contains the auth related services

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from '../state-management/auth.store';
import { AxiosError } from 'axios';
import { ApiError } from '../types/global.types';
import { MUTATION_KEYS } from '../constants/service-key.constants';
import { Endpoints } from '../constants/endpoints.constants';
import apiClient from '../lib/api-client';

type RequestAuthType = {
  email: string;
  password: string;
};

type ResponseAuthType = {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message?: string;
};

export function useLoginUser() {
  // get the query client instance
  const queryClient = useQueryClient();
  return useMutation<ResponseAuthType, AxiosError<ApiError>, RequestAuthType>({
    mutationKey: [MUTATION_KEYS.auth.login],
    mutationFn: async (req: RequestAuthType) =>
      apiClient.post(Endpoints.login, req).then((res) => res.data),
    onSuccess: () => {
      // invalidate all the queries
      queryClient.invalidateQueries();
    },
  });
}
