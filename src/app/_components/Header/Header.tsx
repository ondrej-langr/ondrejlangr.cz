'use client';

import { FC, useEffect, useState } from 'react';
import { Sun, Moon, Code } from 'tabler-icons-react';
import { useDarkMode } from '@contexts/DarkModeContext';
import { NavLink } from './NavLink';
import { links } from './BurgerMenu/constants';
import Button from '@components/Button';

export const PageLayoutHeader: FC = () => {
  const { enabled: isDarkMode, toggle } = useDarkMode();
  // We need to wait for client to render react on client to prevent error html content not matching server
  const [firstRender, setFirstRender] = useState(false);

  const DarkModeToggleIcon = firstRender ? (isDarkMode ? Sun : Moon) : Code;

  useEffect(() => {
    setFirstRender(true);
  }, [setFirstRender]);

  return (
    <>
      <header
        role="header"
        className="top-0 w-full px-2 py-2 z-20 flex items-center max-w-screen-xl mx-auto"
      >
        <nav className="flex items-center justify-center mr-auto">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </nav>
        <Button className="!p-2" onClick={() => toggle()}>
          <DarkModeToggleIcon size={30} color="white" />
        </Button>
      </header>
    </>
  );
};
