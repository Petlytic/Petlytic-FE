import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/store/slices/authSlice";
import { userService } from "@/services/user.service";

export const useGetProfile = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return useQuery({
    queryKey: ["user", "profile"],
    queryFn: () => userService.getProfile(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    retry: 1,
    enabled: isAuthenticated, // Chỉ gọi API khi user đã login
  });
};
