// API Types
// TODO: Define types for API responses and requests
export interface ApiResponse<T> {
  result: T;
  message: string;
  code?: number;
}

export interface ApiError {
  message: string;
  code?: number;
  result?: unknown;
}
