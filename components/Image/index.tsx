import clsx from "clsx";
import { default as NextImage, ImageProps } from "next/image";
import { FC, ReactElement, useState } from "react";

const Image: FC<ImageProps> = ({
  className,
  onLoad,
  ...props
}): ReactElement => {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <div className={clsx(["relative", className])} style={{ lineHeight: 0 }}>
        <NextImage className="z-10 relative" placeholder="blur" {...props} />
      </div>
    </>
  );
};

export default Image;
