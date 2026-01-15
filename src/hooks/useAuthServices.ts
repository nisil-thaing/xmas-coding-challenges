import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import type { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from '@/services/authService';
import { authService } from '@/services/authService';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isSuccess, error, data, reset } = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authService.login,
    onSuccess: () => {
      navigate('/');
    },
  });

  const login = async (credentials: LoginRequest) => {
    reset();
    return mutateAsync(credentials);
  };

  return {
    login,
    isLoading: isPending,
    isSuccess,
    error,
    data,
  };
};

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isSuccess, error, data, reset } = useMutation<SignUpResponse, Error, SignUpRequest>({
    mutationFn: authService.signUp,
    onSuccess: () => {
      navigate('/');
    },
  });

  const signUp = async (credentials: SignUpRequest) => {
    reset();
    return mutateAsync(credentials);
  };

  return {
    signUp,
    isLoading: isPending,
    isSuccess,
    error,
    data,
  };
};
