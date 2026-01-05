// API Types
// TODO: Define types for API responses and requests
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}
