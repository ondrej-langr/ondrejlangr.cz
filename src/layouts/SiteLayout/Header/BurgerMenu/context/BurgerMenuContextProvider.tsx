import { FC, ReactNode, useState } from 'react';
import { BurgerMenuContext } from './BurgerMenuContext';
import { defaultValue } from './constants';

export interface BurgerMenuContextProviderProps {
  children: ReactNode;
}

export const BurgerMenuContextProvider: FC<BurgerMenuContextProviderProps> = ({
  children,
}) => {
  const [isToggled, setIsToggled] = useState(defaultValue.isToggled);

  return (
    <BurgerMenuContext.Provider
      value={{
        animateValue: isToggled ? 'open' : 'closed',
        isToggled,
        setToggled(nextValue) {
          setIsToggled(nextValue);
        },
      }}
    >
      {children}
    </BurgerMenuContext.Provider>
  );
};
