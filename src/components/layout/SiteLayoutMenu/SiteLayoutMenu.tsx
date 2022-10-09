import { ThemeModes, useThemeToggle } from '@/hooks';
import { FC, useEffect, useMemo, useState } from 'react';
import { Dots, Moon, Sun } from 'tabler-icons-react';
import Button from '../../Button';
import { BurgerMenu } from './BurgerMenu';

export const SiteLayoutMenu: FC = () => {
  const { active: activeTheme, update } = useThemeToggle();
  const [firstRender, setFirstRender] = useState(false);

  const IconElement = useMemo(
    () =>
      firstRender ? (activeTheme === ThemeModes.LIGHT ? Sun : Moon) : Dots,
    [firstRender, activeTheme]
  );

  useEffect(() => {
    setFirstRender(true);

    return () => setFirstRender(false);
  }, []);

  return (
    <>
      <Button
        className="!p-2"
        onClick={() =>
          update((prevValue) =>
            prevValue === ThemeModes.DARK ? ThemeModes.LIGHT : ThemeModes.DARK
          )
        }
      >
        <IconElement size={30} color="white" />
      </Button>
      <BurgerMenu />
    </>
  );
};
