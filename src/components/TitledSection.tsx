import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const TitledSection: FC<
  HTMLAttributes<HTMLElement> & {
    title: string;
    movingTitle?: string;
    description?: string;
  }
> = ({ title, children, movingTitle, description, className, ...rest }) => (
  <>
    <section
      className={clsx(
        'relative mt-32 flex flex-wrap max-w-screen-xl mx-auto',
        className
      )}
      {...rest}
    >
      <div className="w-full">
        <div className="max-w-screen-xl px-4 font-bold mx-auto pt-32 text-center md:text-left">
          <h1 className="mt-0 text-blue-300 dark:text-white text-6xl xsm:text-7xl mb-0 uppercase relative inline-block">
            <span className="z-10 relative drop-shadow-sm">{title}</span>
            <span className="absolute w-0 dark:w-full bg-project-accents bottom-0 left-0 h-6 z-0 transition-all duration-200" />
          </h1>
          <p className="text-gray-500 text-opacity-80 text-2xl xsm:text-3xl mt-4 xsm:leading-10">
            {description}
          </p>
        </div>
        <div className="relative z-10 px-4">{children}</div>
      </div>
    </section>
  </>
);

export default TitledSection;
