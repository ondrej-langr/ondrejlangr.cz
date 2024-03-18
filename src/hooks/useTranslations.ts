import { useMemo } from 'react';

const localizations = {
  en: {},
};

export const useTranslations = () => {
  return useMemo(() => ({ t: (key: string) => localizations[key] ?? key }), []);
};
