import { Dispatch, SetStateAction, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);

      return initialValue;
    }
  });

  const setValue = (valueOrFunction: Dispatch<SetStateAction<T>>) => {
    try {
      setStoredValue((prevValue) => {
        const valueToStore = (
          typeof valueOrFunction === 'function'
            ? valueOrFunction(prevValue)
            : valueOrFunction
        ) as T;

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }

        return valueToStore;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as [T, typeof setValue];
}
