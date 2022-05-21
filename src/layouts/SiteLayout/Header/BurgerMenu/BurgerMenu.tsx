import { FC } from 'react';
import { BurgerMenuContent } from './BurgerMenuContent';
import { BurgerMenuContextProvider } from './context';
import { Toggle } from './Toggle';

export const BurgerMenu: FC = () => (
  <BurgerMenuContextProvider>
    <Toggle />
    <BurgerMenuContent />
  </BurgerMenuContextProvider>
);
