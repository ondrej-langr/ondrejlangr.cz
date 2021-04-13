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
          "opacity-0 transition-opacity duration-400 relative",
          { "opacity-100": isReady },
          className,
        ])}
        style={{ lineHeight: 0 }}
      >
        {!isReady && (
          <div className="flex absolute inset-0 z-0 bg-white justify-center items-center rounded-2xl">
            <div>
              <NextImage
                src="/loading.gif"
                width={75}
                height={75}
                className="m-auto"
              />
              <p>Loading...</p>
            </div>
          </div>
        )}
        <NextImage
          onLoad={onLoadCallback}
          onLoadStart={() => setIsReady(false)}
          className="z-10 relative"
          {...props}
        />
      </div>
    </>
  );
};

export default Image;
