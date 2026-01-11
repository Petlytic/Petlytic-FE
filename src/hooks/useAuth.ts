// src/hooks/api/useAuth.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useDispatch } from "react-redux";
import { LoginRequest, RegisterRequest } from "@/types/auth.types";
import {
  setCredentials,
  logout as logoutAction,
} from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { ApiError } from "@/types/api.types";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),
    onSuccess: (data) => {
      dispatch(
        setCredentials({
          accessToken: data.result.accessToken,
        })
      );

      toast.success(data.message || "Login successfully");

      router.push("/");
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    },
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (userData: RegisterRequest) => authService.register(userData),
    onSuccess: (data) => {
      toast.success(
        data.message || "Registration successful! Please verify your email."
      );
      router.push("/login");
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = error.response?.data?.message || "Registration failed";
      toast.error(message);
    },
  });
};

export const useLogout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      dispatch(logoutAction());
      queryClient.clear();
      router.push("/login");
      toast.success("Logged out successfully");
    },
    onError: (error: AxiosError<ApiError>) => {
      const message = error.response?.data?.message || "Logout failed";
      toast.error(message);
      dispatch(logoutAction());
      router.push("/login");
    },
  });
};
