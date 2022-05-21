import { SiteContextValues } from './SiteContextValues';

export type SiteContextReducerPayload = {
  key: keyof Omit<SiteContextValues, 'darkModeActive'>;
  value: SiteContextValues[keyof SiteContextValues];
};
