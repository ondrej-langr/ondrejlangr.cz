import clsx from "clsx";
import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import { FC, ReactElement } from "react";
import NavLink from "./NavLink";

const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const bgVariants: Variants = {
  open: {
    clipPath: "ellipse(100vh 100vh at 100% 0%)",
    opacity: 1,
  },
  closed: {
    clipPath: "ellipse(0vh 0vh at 100% 0%)",
    opacity: 0,
  },
};

const links = [
  { href: "/#options", title: "My Options" },
  { href: "/#work", title: "My Work" },
  { href: "/#contact", title: "Contact" },
];

const PageLayoutHeader: FC = (): ReactElement => {
  const [o, toggleO] = useCycle(false, true);

  const closeMenu = () => {
    toggleO(0);
  };

  return (
    <>
      <header role="header" className="fixed top-0 w-full px-16 pt-14 z-20">
        {/*<img height={70} width={"auto"} src={"/logo-full.svg"} />*/}
        <motion.button
          className={clsx(
            "flex flex-col justify-between items-end h-16 py-2 ml-auto",
            "opacity-80 w-20 group duration-300 hover:opacity-100 transition-all",
            "focus:outline-none z-20 relative"
          )}
          onClick={() => toggleO()}
        >
          <span
            style={{ height: 6.5 }}
            className="bg-gray-500 bg-opacity-90 w-full rounded"
          />
          <span
            style={{ height: 6.5 }}
            className="bg-gray-500  bg-opacity-60 w-10/12 rounded"
          />
          <span
            style={{ height: 6.5 }}
            className="bg-gray-500  bg-opacity-30 w-7/12 group-hover:w-8/12 transition-all rounded duration-500"
          />
        </motion.button>
        <AnimatePresence>
          {o && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 1 }}
              className="fixed inset-0 z-0 bg-black bg-opacity-40"
              style={{ backdropFilter: "blur(6px)" }}
            />
          )}
        </AnimatePresence>
        <motion.nav
          className="fixed inset-0 z-10 bg-siteBg"
          variants={bgVariants}
          animate={o ? "open" : "closed"}
        >
          <motion.ul
            className="relative z-10 text-right mt-40 float-right mr-36 px-10 py-3"
            style={{ backdropFilter: "blur(6px)" }}
            variants={variants}
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                {link.title}
              </NavLink>
            ))}
          </motion.ul>
        </motion.nav>
      </header>
    </>
  );
};

export default PageLayoutHeader;
