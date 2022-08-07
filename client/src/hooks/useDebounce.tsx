import { useState, useEffect } from "react";
import { NewUser } from "../types/user";

// ex) 첫번째 인자는 value, 두번째 인자는 time.
// import { useDebounce } from '../hooks/useDebounce';
// const debouncedKeyword = useDebounce(Values, 150);

export function useDebounce(value: NewUser, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
