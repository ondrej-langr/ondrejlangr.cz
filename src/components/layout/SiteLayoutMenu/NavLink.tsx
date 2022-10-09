import { FC, ReactElement } from 'react';
import { HTMLMotionProps, motion, useCycle, Variants } from 'framer-motion';

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 350, velocity: 150, mass: 1, type: 'spring' },
    },
  },
  closed: {
    y: -130,
    opacity: 0,
    transition: {
      y: { stiffness: 350, velocity: 150, mass: 1, type: 'spring' },
    },
  },
};

const fancyVariants: Variants = {
  enter: {
    y: '-100%',
  },
  exit: {
    y: 0,
  },
};

const NavLink: FC<HTMLMotionProps<'a'>> = ({
  href,
  children,
  onClick,
}): ReactElement => {
  const [hs, toggleH] = useCycle('exit', 'enter');

  return (
    <li className="my-7">
      <motion.a
        href={href}
        variants={variants}
        className="text-5xl xsm:text-7xl cursor-pointer dark:text-white text-blue-300 font-semibold whitespace-nowrap overflow-hidden block hover:no-underline"
        onHoverStart={() => toggleH()}
        onHoverEnd={() => toggleH()}
        onClick={onClick}
      >
        <motion.div
          variants={fancyVariants}
          animate={hs}
          className="relative"
          style={{ lineHeight: 1.4 }}
        >
          <span>{children}</span>
          <span
            className={
              'dark:text-project-accents text-project-green absolute w-full h-full left-0 -bottom-full'
            }
          >
            {children}
          </span>
        </motion.div>
      </motion.a>
    </li>
  );
};

export default NavLink;