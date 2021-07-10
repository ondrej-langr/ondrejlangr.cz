import clsx from "clsx";
import { default as NextImage, ImageProps } from "next/image";
import { FC, memo, ReactElement } from "react";

const Image: FC<ImageProps & { src: any }> = ({
  className,
  onLoad,
  ...props
}): ReactElement => {
  return (
    <>
      <div className={clsx(["relative", className])} style={{ lineHeight: 0 }}>
        <NextImage className="z-10 relative" placeholder="blur" {...props} />
      </div>
    </>
  );
};

export default memo(Image);
