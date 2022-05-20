import { Variants } from 'framer-motion';

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
