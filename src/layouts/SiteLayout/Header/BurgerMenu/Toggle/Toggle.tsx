import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import {
  baseLineStyles,
  centerLineVariants,
  movingLinesVariants,
} from '../constants';
import { useBurgerMenuContext } from '../context';

export const Toggle: FC = () => {
  const { animateValue, isToggled, setToggled } = useBurgerMenuContext();

  return (
    <motion.button
      className={clsx(
        'flex flex-col justify-between items-end h-10 w-[3rem]',
        'opacity-80 group duration-300 hover:opacity-100 transition-all',
        'focus:outline-none z-20 relative'
      )}
      onClick={() => setToggled(!isToggled)}
      animate={animateValue}
    >
      <motion.span
        style={baseLineStyles}
        variants={movingLinesVariants}
        custom={-1}
        className={clsx(
          'w-full rounded',
          isToggled ? 'bg-red-600' : 'bg-gray-500 bg-opacity-90'
        )}
      />
      <motion.span
        style={baseLineStyles}
        variants={centerLineVariants}
        className="bg-gray-500 bg-opacity-60 w-full rounded"
      />
      <motion.span
        style={baseLineStyles}
        variants={movingLinesVariants}
        custom={1}
        className={clsx(
          'rounded w-full',
          isToggled ? 'bg-red-600' : 'bg-gray-500 bg-opacity-30'
        )}
      />
    </motion.button>
  );
};
