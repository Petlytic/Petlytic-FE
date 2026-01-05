// useFetch hook
// TODO: Implement fetch hook
export function useFetch<T>(url: string) {
  // Hook logic
  return {
    data: null as T | null,
    isLoading: false,
    error: null,
  };
}
