import { useSiteContext } from '@contexts';
import { useMemo } from 'react';

export const useTranslations = () => {
  const { translations } = useSiteContext();

  return useMemo(
    () => ({ t: (key: string) => translations[key] ?? key }),
    [translations]
  );
};
