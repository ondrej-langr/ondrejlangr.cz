import type { Variants } from 'framer-motion';

export const centerLineVariants: Variants = {
  open: {
    opacity: 0,
    x: 25,
  },
  closed: {
    x: 0,
    opacity: 1,
  },
};
