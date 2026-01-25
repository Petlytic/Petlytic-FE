// src/components/providers/AuthProvider.tsx
"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";
import { setCredentials, logout } from "@/store/slices/authSlice";

const getRefreshToken = (): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)refresh_token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data } = await apiClient.post(endpoints.auth.refreshToken);

        if (data?.result?.accessToken) {
          dispatch(
            setCredentials({
              accessToken: data.result.accessToken,
            }),
          );
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        dispatch(logout());
      } finally {
        setIsInitializing(false);
      }
    };

    const refreshToken = getRefreshToken();
    if (refreshToken) {
      initAuth();
    } else {
      setIsInitializing(false);
    }
  }, [dispatch]);

  if (isInitializing) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
