import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import NavLink from '../NavLink';
import { bgVariants, links, listVariants } from './constants';
import { useBurgerMenuContext } from './context';

export const BurgerMenuContent: FC = ({}) => {
  const { animateValue, isToggled, setToggled } = useBurgerMenuContext();

  return (
    <>
      <AnimatePresence>
        {isToggled && (
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
        className="fixed inset-0 z-10 dark:bg-siteBg bg-white opacity-0"
        variants={bgVariants}
        animate={animateValue}
      >
        <motion.ul
          className="relative z-10 text-right mt-40 px-4 py-3 max-w-screen-xl mx-auto"
          variants={listVariants}
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => setToggled(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};
