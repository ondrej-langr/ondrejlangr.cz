import { ThemeModes, useThemeToggle } from '@/hooks';
import { FC, useEffect } from 'react';

const DARK_MODE_CLASS_NAME = 'dark';

/**
 * React dark mode changer. It has useEffect which listens to react hook and changes accordingly
 * Its a react component instead of hook due to nature of how Astro works
 */
export const DarkModeChanger: FC = () => {
  const { active } = useThemeToggle();

  useEffect(() => {
    if (active === ThemeModes.DARK) {
      document.body.classList.add(DARK_MODE_CLASS_NAME);
    } else {
      document.body.classList.remove(DARK_MODE_CLASS_NAME);
    }
  }, [active]);

  return null;
};
