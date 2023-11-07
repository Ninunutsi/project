// import { useEffect, useState } from "react"

// const useLocalStorage = (key, fallback) => {
//     const [value, setValue] = useState(localStorage.putItem.key || fallback)

//     useEffect(() => {
//         localStorage.setItem(key, value)
//     }, [value,key])

//     return [value, setValue]
// }

// export default useLocalStorage

import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : fallback
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
};

export default useLocalStorage;
