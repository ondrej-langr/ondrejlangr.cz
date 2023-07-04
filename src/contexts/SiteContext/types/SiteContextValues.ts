export type DarkModes = 'light' | 'dark';

export interface SiteContextValues {
  isLoading: boolean;
  darkModeActive: boolean;
  translations: Record<string, string>;
}
