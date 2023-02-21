import React from 'react';
import styles from './CheckBoxAtom.module.scss';
import clsx from 'clsx';

export type CheckBoxProps = {
  inputName: string;
  id: string;
  children?: string | React.ReactNode;
  checked?: boolean;
  wrapClass?: string;
  labelClass?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const CheckBoxAtom = ({ inputName, id, children, checked, wrapClass, labelClass, onChange }: CheckBoxProps) => {
  return (
    <div className={clsx(styles.warp, wrapClass)}>
      <input type="checkbox" name={inputName} id={id} className="blind" checked={checked} onChange={onChange} />
      <label htmlFor={id} className={labelClass}>
        {children}
      </label>
    </div>
  );
};

export default CheckBoxAtom;
