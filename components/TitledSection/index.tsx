import clsx from 'clsx';
import { FC, HTMLAttributes, ReactElement } from 'react';

const TitledSection: FC<
  HTMLAttributes<HTMLElement> & {
    title: string;
    movingTitle?: string;
    description?: string;
  }
> = ({
  title,
  children,
  movingTitle,
  description,
  className,
  ...rest
}): ReactElement => {
  return (
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
            <h1 className="mt-0 text-white text-6xl xsm:text-7xl mb-0 uppercase relative inline-block">
              <span className="z-10 relative drop-shadow-sm">{title}</span>
              <span className="absolute w-full bg-project-accents opacity-50 bottom-0 left-0 h-6 z-0" />
            </h1>
            <p className="text-gray2 text-opacity-80 text-2xl xsm:text-3xl mt-4 leading-normal">
              {description}
            </p>
          </div>
          <div className="relative z-10 px-4">{children}</div>
        </div>
      </section>
    </>
  );
};

export default TitledSection;
