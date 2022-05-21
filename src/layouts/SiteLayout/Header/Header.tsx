import { FC, useEffect, useState } from 'react';
import { BurgerMenu } from './BurgerMenu';
import { Sun, Moon, Code } from 'tabler-icons-react';
import Button from '@components/Button';
import { useSiteContext } from '@contexts';

export const PageLayoutHeader: FC = () => {
  const { darkModeActive, setValue } = useSiteContext();
  // We need to wait for client to render react on client to prevent error html content not matching server
  const [firstRender, setFirstRender] = useState(false);

  const DarkModeToggleIcon = firstRender ? (darkModeActive ? Sun : Moon) : Code;

  useEffect(() => {
    setFirstRender(true);
  }, [setFirstRender]);

  return (
    <>
      <header
        role="header"
        className="top-0 w-full px-2 py-2 z-20 flex items-center justify-end sticky max-w-screen-xl mx-auto"
      >
        <div className="flex items-center gap-4 py-3 px-4 bg-white dark:shadow-none shadow-lg shadow-blue-200 rounded-xl">
          {/*<img height={70} width={"auto"} src={"/logo-full.svg"} />*/}
          <Button
            className="!p-2"
            onClick={() => setValue('darkModeActive', !darkModeActive)}
          >
            <DarkModeToggleIcon size={30} color="white" />
          </Button>
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};
