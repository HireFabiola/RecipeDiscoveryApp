//  import { useState, useEffect } from "react";
import { useState, useEffect } from "react";

// Custom hook to manage local storage
function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify(storedValue)
    );
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;