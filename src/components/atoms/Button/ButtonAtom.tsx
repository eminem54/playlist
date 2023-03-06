import React from 'react';

export type ButtonProps = {
  children: string | React.ReactNode;
  className?: string;
  onClick?(): void;
};

const ButtonAtom = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAtom;
