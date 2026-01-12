import { apiClient } from "@/lib/api/client";
import { endpoints } from "@/lib/api/endpoints";

import { ApiResponse } from "@/types/api.types";
import { UserProfile } from "@/types/common.types";

export const userService = {
  getProfile: async () => {
    const { data } = await apiClient.get<ApiResponse<UserProfile>>(
      endpoints.user.me
    );
    return data;
  },
};
