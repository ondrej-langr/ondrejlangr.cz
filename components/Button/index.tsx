import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC, ReactElement } from "react";

const Button: FC<HTMLMotionProps<"button"> & {}> = ({
  children,
  onClick = () => {},
  className,
  ...rest
}): ReactElement => {
  return (
    <>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={clsx(
          "bg-sitePurple border-0 py-3 px-6 text-white text-xl font-semibold uppercase outline-none cursor-pointer",
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
