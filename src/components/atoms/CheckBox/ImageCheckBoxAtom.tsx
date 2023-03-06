import React from 'react';
import ImgAtom from '../Img/ImgAtom';
import styles from './ImageCheckBoxAtom.module.scss';
import clsx from 'clsx';

type Props = {
  inputName: string;
  id: string;
  checked: boolean;
  children?: string | React.ReactNode;
  labelClass?: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const ImageCheckBoxAtom = ({ inputName, id, checked, children, labelClass, handleChange }: Props) => {
  return (
    <div className={styles.warp}>
      <input type="checkbox" name={inputName} id={id} className={styles.input} checked={checked} onChange={handleChange} />
      <label htmlFor={id} className={clsx(styles.label, labelClass)}>
        {!checked && <ImgAtom src="/images/common/icon_checkbox_off.svg" width={20} height={20} className={styles.img} />}
        {checked && <ImgAtom src="/images/common/icon_checkbox_on.svg" width={20} height={20} className={styles.img} />}
        {children}
      </label>
    </div>
  );
};

export default ImageCheckBoxAtom;
