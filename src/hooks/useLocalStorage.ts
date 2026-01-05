// useLocalStorage hook
// TODO: Implement localStorage hook
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Hook logic
  return [initialValue, (value: T) => {}] as const;
}
