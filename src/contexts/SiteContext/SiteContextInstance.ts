import { createContext } from 'react';
import { defaultValue } from './constants';
import { SiteContextValue } from './types';

export const SiteContextInstance =
  createContext<SiteContextValue>(defaultValue);
