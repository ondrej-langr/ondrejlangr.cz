import clsx from 'clsx';
import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import { FC, memo, ReactElement } from 'react';

export interface ImageProps extends NextImageProps {
  src: any;
}

const Image: FC<ImageProps> = ({ className, onLoad, ...props }) => (
  <>
    <div className={clsx(['relative', className])} style={{ lineHeight: 0 }}>
      <NextImage className="z-10 relative" placeholder="blur" {...props} />
    </div>
  </>
);

export default memo(Image);
