import { Variants } from 'framer-motion';

export const bgVariants: Variants = {
  open: {
    clipPath: 'ellipse(170vh 170vh at 100% 0%)',
    opacity: 1,
  },
  closed: {
    clipPath: 'ellipse(0vh 0vh at 100% 0%)',
    opacity: 0,
  },
};
