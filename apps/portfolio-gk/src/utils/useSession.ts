import { useEffect, useState } from 'react';

// Nutzung in einer React-Komponente:
// const [theme, setTheme] = useSession('theme', 'light')

export function useSession(key: string, fallback: string) {
  const [value, setValue] = useState(sessionStorage.getItem(key) ?? fallback);

  useEffect(() => {
    sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
