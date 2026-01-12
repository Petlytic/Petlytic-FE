export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  expires_in: number;
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirm_password: string;
  username: string;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
  role: string;
  avatar_url?: string;
  phone_number?: string;
  active: boolean;
}

export interface RefreshTokenResponse {
  refresh_token: string;
}

export interface VerifyEmailRequest {
  email: string;
}
