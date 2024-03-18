'use client';

import { FC, PropsWithChildren, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';

export const NavLink: FC<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  onClick,
}): ReactElement => {
  return (
    <Link
      className="text-3xl cursor-pointer dark:text-white text-blue-300 font-semibold whitespace-nowrap overflow-hidden block hover:no-underline"
      onClick={onClick}
      href={href}
    >
      <div className="relative" style={{ lineHeight: 1.4 }}>
        <span>{children}</span>
        <span
          className={
            'dark:text-project-accents text-project-green absolute w-full h-full left-0 -bottom-full'
          }
        >
          {children}
        </span>
      </div>
    </Link>
  );
};
