import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import clsx from "clsx";

const VerticalScroller: FC<{
  title: string;
  description?: string;
  elements: { title: string; description: ReactElement }[];
}> = ({ title, description, elements }): ReactElement => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [sizeF, setSizeF] = useState<number[]>([0, 0]);
  const [sizeT, setSizeT] = useState<number>(null);

  useEffect(() => {
    const onScrollCallback = () => setOffset(stickyRef.current.offsetTop);

    window.addEventListener("scroll", onScrollCallback);
    return () => {
      window.removeEventListener("scroll", onScrollCallback);
    };
  }, []);

  return (
    <section
      style={{
        height: `calc(${
          sizeF[0] * elements.length + sizeT - sizeF[1]
        }px - 7rem)`,
      }}
      className="relative"
    >
      <div
        className={clsx(
          "sticky top-0 overflow-hidden",
          elements.length > 1 && "h-screen"
        )}
        ref={stickyRef}
      >
        <div
          className="max-w-screen-lg px-4 font-bold mx-auto pt-32"
          ref={(ele: HTMLDivElement) => {
            if (ele === null) return;
            setSizeT(ele.offsetHeight);
          }}
        >
          <h1 className="mt-0 text-white text-7xl mb-0 uppercase">{title}</h1>
          <p className="text-gray2 text-opacity-80 text-3xl mt-4 leading-normal">
            {description}
          </p>
        </div>
        <div>
          <motion.div
            className="flex flex-row flex-nowrap"
            style={{ transform: `translateX(-${offset}px)` }}
            ref={(ele: HTMLDivElement) => {
              if (ele === null) return;
              setSizeF([ele.offsetWidth, ele.offsetHeight]);
            }}
          >
            {elements.map((ele) => (
              <div
                className={clsx(
                  "w-full flex-none mt-40",
                  elements.length > 1 && "h-screen"
                )}
              >
                <div className="max-w-screen-lg px-4 m-auto w-full">
                  <p className="text-gray-100 my-0 mb-8 mt-2 text-5xl font-bold uppercase">
                    {ele.title}
                  </p>
                  <div className="text-2xl text-gray2 font-bold leading-relaxed">
                    {ele.description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerticalScroller;
