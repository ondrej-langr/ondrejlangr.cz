import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC, ReactElement } from 'react';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick = () => {},
  className,
  type = 'button',
  loading = false,
  ...rest
}): ReactElement => {
  return (
    <>
      <motion.button
        type={type}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          'dark:bg-project-accents bg-project-green rounded-xl rounded-tl-none border-0 py-3 px-6 text-white text-xl font-semibold uppercase outline-none cursor-pointer',
          loading && 'pointer-events-none opacity-60 cursor-progress',
          className
        )}
        {...rest}
      >
        {children}
      </motion.button>
    </>
  );
};

export default Button;
