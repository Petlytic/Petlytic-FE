// src/services/auth.service.ts
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyEmailRequest,
} from "@/types/auth.types";
import { ApiResponse } from "@/types/api.types";

export const authService = {
  login: async (credentials: LoginRequest) => {
    const { data } = await apiClient.post<ApiResponse<LoginResponse>>(
      endpoints.auth.login,
      credentials
    );
    return data;
  },

  register: async (userData: RegisterRequest) => {
    const { data } = await apiClient.post<ApiResponse<RegisterResponse>>(
      endpoints.auth.register,
      userData
    );
    return data;
  },

  logout: async () => {
    const { data } = await apiClient.post<ApiResponse<void>>(
      endpoints.auth.logout
    );
    return data;
  },

  verify: async (payload: { email: string; verificationCode: string }) => {
    const { data } = await apiClient.post<ApiResponse<void>>(
      endpoints.auth.verify,
      payload
    );
    return data;
  },

  resendVerification: async (payload: VerifyEmailRequest) => {
    const { data } = await apiClient.post<ApiResponse<void>>(
      endpoints.auth.resend,
      payload
    );
    return data;
  },
};
