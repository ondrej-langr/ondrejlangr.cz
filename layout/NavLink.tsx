import { FC, ReactElement } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  EventInfo,
  HTMLMotionProps,
  motion,
  useCycle,
  Variants,
} from "framer-motion";
import clsx from "clsx";

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 350, velocity: 150, mass: 1, type: "spring" },
    },
  },
  closed: {
    y: -130,
    opacity: 0,
    transition: {
      y: { stiffness: 350, velocity: 150, mass: 1, type: "spring" },
    },
  },
};

const fancyVariants: Variants = {
  enter: {
    y: "-100%",
  },
  exit: {
    y: 0,
  },
};

const NavLink: FC<HTMLMotionProps<"a">> = ({
  href,
  children,
  onClick,
}): ReactElement => {
  const [hs, toggleH] = useCycle("exit", "enter");

  return (
    <Link href={href} passHref>
      <li className="my-7">
        <motion.a
          variants={variants}
          className="text-7xl cursor-pointer text-white font-semibold whitespace-nowrap overflow-hidden block"
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
                "text-sitePurple absolute w-full h-full left-0 -bottom-full"
              }
            >
              {children}
            </span>
          </motion.div>
        </motion.a>
      </li>
    </Link>
  );
};

export default NavLink;
