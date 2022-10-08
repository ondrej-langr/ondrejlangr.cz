import { useThemeToggle } from '@/hooks';
import { FC, useMemo } from 'react';
import { Moon, Sun } from 'tabler-icons-react';
import Button from '../../Button';
import { BurgerMenu } from './BurgerMenu';

export const SiteLayoutMenu: FC = () => {
  const { active: activeTheme, update } = useThemeToggle();

  const DarkModeToggleIcon = useMemo(
    () => (activeTheme === 'light' ? Sun : Moon),
    [activeTheme]
  );

  return (
    <>
      <Button
        className="!p-2"
        onClick={() =>
          update((prevValue) => (prevValue === 'dark' ? 'light' : 'dark'))
        }
      >
        <DarkModeToggleIcon size={30} color="white" />
      </Button>
      <BurgerMenu />
    </>
  );
};
