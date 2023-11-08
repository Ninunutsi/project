import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    const initial = storedValue ? JSON.parse(storedValue) : fallback
    return initial
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
};

export default useLocalStorage;
