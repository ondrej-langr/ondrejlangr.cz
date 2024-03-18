import type { Variants } from 'framer-motion';

export const listVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
