// useLocalStorage hook
// TODO: Implement localStorage hook
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Hook logic
  console.log(
    "useLocalStorage called with key:",
    key,
    "and initialValue:",
    initialValue
  );
  return [
    initialValue,
    (value: T) => {
      console.log("Setting localStorage key:", key, "to value:", value);
    },
  ] as const;
}
