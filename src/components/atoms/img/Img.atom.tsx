import React, { useMemo } from "react";
import Image, { ImageProps } from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
} & ImageProps;

const ImgAtom = ({ src, width, height, alt, ...props }: Props) => {
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
      alt={alt || ""}
      fill={useFill}
      loader={customLoader}
      {...props}
    />
  );
};

export default ImgAtom;
