import { useEffect, useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
