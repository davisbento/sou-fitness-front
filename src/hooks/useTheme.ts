import { useCallback, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from 'theme';

enum ETheme {
  dark = 'dark',
  light = 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<ETheme>(ETheme.dark);

  const setThemeColor = useCallback(() => setTheme(theme === ETheme.dark ? ETheme.light : ETheme.dark), [theme]);

  const getTheme = useMemo(() => (theme === ETheme.dark ? darkTheme : lightTheme), [theme]);

  return [getTheme, setThemeColor];
}
