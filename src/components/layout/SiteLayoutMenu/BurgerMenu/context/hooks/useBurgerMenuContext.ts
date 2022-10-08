import { useContext } from 'react';
import { BurgerMenuContext } from '../BurgerMenuContext';

export const useBurgerMenuContext = () => useContext(BurgerMenuContext);
