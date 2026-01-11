// API endpoints
// TODO: Define all API endpoints as constants
const AUTH_PREFIX = "/auth";
export const endpoints = {
  // API endpoints
  auth: {
    login: `${AUTH_PREFIX}/login`,
    register: `${AUTH_PREFIX}/signup`,
    logout: `${AUTH_PREFIX}/logout`,
    refreshToken: `${AUTH_PREFIX}/refresh-token`,
    verify: `${AUTH_PREFIX}/verify`,
    resend: `${AUTH_PREFIX}/resend`,
    google: `${AUTH_PREFIX}/google`,
  },
} as const;
