import { SiteContextValues } from './SiteContextValues';

export interface SiteContextFunctions {
  setValue<T extends keyof SiteContextValues>(
    key: T,
    value: SiteContextValues[T]
  ): void;
}
