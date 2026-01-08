// useFetch hook
// TODO: Implement fetch hook
export function useFetch<T>(url: string) {
  // Hook logic
  console.log("useFetch called with URL:", url);
  return {
    data: null as T | null,
    isLoading: false,
    error: null,
  };
}
