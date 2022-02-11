import clsx from 'clsx';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { CSSProperties, FC, ReactElement } from 'react';
import {
  listVariants,
  bgVariants,
  centerLineVarints,
  movingLinesVariants,
} from './_anim-variants';
import NavLink from '../NavLink';

const links = [
  { href: '/#options', title: 'My Options' },
  { href: '/#work', title: 'My Work' },
  { href: '/#contact', title: 'Contact' },
];

const baseLineStyles: CSSProperties = { height: 6.5, transformOrigin: 'right' };

const PageLayoutHeader: FC = (): ReactElement => {
  const [o, toggleO] = useCycle(false, true);

  const closeMenu = () => {
    toggleO(0);
  };

  const animte = o ? 'open' : 'closed';

  return (
    <>
      <header
        role="header"
        className="fixed top-0 w-full px-10 sm:px-16 pt-14 z-20"
      >
        {/*<img height={70} width={"auto"} src={"/logo-full.svg"} />*/}
        <motion.button
          className={clsx(
            'flex flex-col justify-between items-end h-14 ml-auto',
            'opacity-80 group duration-300 hover:opacity-100 transition-all',
            'focus:outline-none z-20 relative'
          )}
          style={{ width: (!o ? 6 : '4.5') + 'rem' }}
          onClick={() => toggleO()}
          animate={animte}
        >
          <motion.span
            style={baseLineStyles}
            variants={movingLinesVariants}
            custom={-1}
            className={clsx(
              'w-full rounded',
              o ? 'bg-red-600' : 'bg-gray-500 bg-opacity-90'
            )}
          />
          <motion.span
            style={baseLineStyles}
            variants={centerLineVarints}
            className="bg-gray-500 bg-opacity-60 w-10/12 rounded"
          />
          <motion.span
            style={baseLineStyles}
            variants={movingLinesVariants}
            custom={1}
            className={clsx(
              'rounded',
              o
                ? 'w-full bg-red-600'
                : 'w-7/12 group-hover:w-8/12 bg-gray-500 bg-opacity-30'
            )}
          />
        </motion.button>
        <AnimatePresence>
          {o && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 1 }}
              className="fixed inset-0 z-0 bg-black bg-opacity-40"
              style={{ backdropFilter: 'blur(6px)' }}
            />
          )}
        </AnimatePresence>
        <motion.nav
          className="fixed inset-0 z-10 bg-siteBg"
          variants={bgVariants}
          animate={animte}
        >
          <motion.ul
            className="relative z-10 text-right mt-40 float-right sm:mr-36 px-10 py-3"
            style={{ backdropFilter: 'blur(6px)' }}
            variants={listVariants}
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                {link.title}
              </NavLink>
            ))}
          </motion.ul>
        </motion.nav>
      </header>
    </>
  );
};

export default PageLayoutHeader;
