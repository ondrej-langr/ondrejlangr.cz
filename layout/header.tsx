import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

const PageLayoutHeader: FC = (): ReactElement => {
  return (
    <>
      <header role="header" className="fixed top-0 w-full px-16 pt-14">
        {/*<img height={70} width={"auto"} src={"/logo-full.svg"} />*/}
        <motion.button
          className={clsx(
            "flex flex-col justify-between items-end h-16 py-2 ml-auto",
            "opacity-80 w-20 group duration-300 hover:opacity-100 transition-all",
            "focus:outline-none"
          )}
        >
          <span
            style={{ height: 6.5 }}
            className="bg-gray2 bg-opacity-90 w-full rounded"
          />
          <span
            style={{ height: 6.5 }}
            className="bg-gray2 bg-opacity-60 w-10/12 rounded"
          />
          <span
            style={{ height: 6.5 }}
            className="bg-gray2 bg-opacity-30 w-7/12 group-hover:w-8/12 transition-all rounded duration-500"
          />
        </motion.button>
        <nav></nav>
      </header>
    </>
  );
};

export default PageLayoutHeader;
