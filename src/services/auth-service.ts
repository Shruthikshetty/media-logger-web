// this file contains the auth related services

import { useMutation } from '@tanstack/react-query';
import { User } from '../state-management/auth.store';
import axios, { AxiosError } from 'axios';
import { ApiError } from '../types/global.types';
import { MUTATION_KEYS } from '../constants/service-key.constants';
import { Endpoints } from '../constants/endpoints.constants';

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
  return useMutation<ResponseAuthType, AxiosError<ApiError>, RequestAuthType>({
    mutationKey: [MUTATION_KEYS.auth.login],
    mutationFn: async (req: RequestAuthType) =>
      axios.post(Endpoints.login, req).then((res) => res.data),
  });
}
