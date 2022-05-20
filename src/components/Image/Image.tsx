import clsx from 'clsx';
import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import { FC, memo } from 'react';

export interface ImageProps extends NextImageProps {
  src: any;
}

const Image: FC<ImageProps> = ({ onLoad, ...props }) => (
  <NextImage placeholder="blur" {...props} />
);

export default memo(Image);
