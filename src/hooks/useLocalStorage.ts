import { useState } from "react";

// Define a TypeScript type for the value you want to store in localStorage
type LocalStorageValue<T> = T | null;

function useLocalStorage<T>(key: string, initialValue?: LocalStorageValue<T>) {
  // Get the initial value from localStorage, if it exists
  const [storedValue, setStoredValue] = useState<LocalStorageValue<T>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading data from localStorage: ${error}`);
      return initialValue;
    }
  });

  // Function to set a new value in localStorage
  const setValue = (value: LocalStorageValue<T>) => {
    try {
      if (value === null) {
        // Remove the item from localStorage if value is null
        window.localStorage.removeItem(key);
      } else {
        // Otherwise, stringify and store the value
        window.localStorage.setItem(key, JSON.stringify(value));
      }
      // Update the state
      setStoredValue(value);
    } catch (error) {
      console.error(`Error setting data in localStorage: ${error}`);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
