// useWindowSize hook
// TODO: Implement window size hook
export function useWindowSize() {
  // Hook logic
  return {
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  };
}
