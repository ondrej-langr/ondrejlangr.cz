import { createContext } from 'react';
import { defaultValue } from './constants';
import { BurgerMenuContextValue } from './types';

export const BurgerMenuContext =
  createContext<BurgerMenuContextValue>(defaultValue);
