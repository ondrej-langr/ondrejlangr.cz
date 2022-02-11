import { Variants } from 'framer-motion';

export const listVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const bgVariants: Variants = {
  open: {
    clipPath: 'ellipse(175vh 175vh at 100% 0%)',
    opacity: 1,
  },
  closed: {
    clipPath: 'ellipse(0vh 0vh at 100% 0%)',
    opacity: 0,
  },
};

export const centerLineVarints: Variants = {
  open: {
    opacity: 0,
    x: 25,
  },
  closed: {
    x: 0,
    opacity: 1,
  },
};

export const movingLinesVariants: Variants = {
  closed: (direction) => ({
    rotate: 0,
    transition: { rotate: { type: 'spring', mass: 1, stiffness: 200 } },
  }),
  open: (direction) => ({
    rotate: 45 * direction,
    transition: { rotate: { type: 'spring', mass: 1, stiffness: 200 } },
  }),
};
