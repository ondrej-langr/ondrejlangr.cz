import { FC, ReactElement, useState } from "react";
import { default as NextImage, ImageProps } from "next/image";
import clsx from "clsx";

const Image: FC<ImageProps> = ({
  className,
  onLoad,
  ...props
}): ReactElement => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = (e) => {
    setIsReady(true);
    typeof onLoad === "function" && onLoad(e);
  };

  return (
    <>
      <div
        className={clsx([
          "opacity-0 transition-opacity duration-400",
          { "opacity-100": isReady },
          className,
        ])}
      >
        <NextImage onLoad={onLoadCallback} {...props} />
      </div>
    </>
  );
};

export default Image;
