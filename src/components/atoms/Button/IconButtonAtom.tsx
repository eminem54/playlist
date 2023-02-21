import React from 'react';
import ImgAtom from '../Img/ImgAtom';
import ButtonAtom from './ButtonAtom';
import styles from './IconButtonAtom.module.scss';
import clsx from 'clsx';

type Props = {
  src: string;
  children: string | React.ReactNode;
  wrapClass?: string;
  imgClass?: string;
};

const IconButtonAtom = ({ src, children, wrapClass, imgClass }: Props) => {
  return (
    <ButtonAtom className={clsx(styles.wrap, wrapClass || styles.common)}>
      <span className={clsx(styles.img, imgClass)}>
        <ImgAtom src={src} />
      </span>
      {children}
    </ButtonAtom>
  );
};

export default IconButtonAtom;
