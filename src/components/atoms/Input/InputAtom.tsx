import React, { HTMLInputTypeAttribute } from 'react';
import styles from './Input.atom.module.scss';
import clsx from 'clsx';

type Props = {
  id: string;
  value: string;
  type: string;
  placeholder?: string;
  wrapClassName?: string;
  inputClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputAtom = ({ id, value, type, placeholder, wrapClassName, inputClassName, onChange }: Props) => {
  return (
    <div className={clsx(styles.wrap, wrapClassName)}>
      <input id={id} type={type} className={clsx(styles.input, inputClassName)} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputAtom;
