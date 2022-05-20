export interface BurgerMenuContextValue {
  animateValue: 'open' | 'closed';
  isToggled: boolean;
  setToggled(nextValue: boolean): void;
}
