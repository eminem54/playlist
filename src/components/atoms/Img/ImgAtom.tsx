import React, { useMemo } from 'react';
import Image, { ImageProps } from 'next/image';

export type ImgProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
} & Omit<ImageProps, 'alt'>;

const ImgAtom = ({ src, width, height, alt, ...props }: ImgProps) => {
  const useFill = useMemo(() => {
    return width && height ? false : true;
  }, [width, height]);

  const customLoader = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <Image
      src={src}
      width={useFill ? undefined : width}
      height={useFill ? undefined : height}
      alt={alt || ''}
      fill={useFill}
      loader={customLoader}
      {...props}
    />
  );
};

export default ImgAtom;
