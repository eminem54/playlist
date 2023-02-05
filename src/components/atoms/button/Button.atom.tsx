import React from "react";

type Props = {
  children: string | React.ReactNode;
  className?: string;
  onClick?(): void;
};

const ButtonAtom = ({ children, className, onClick }: Props) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAtom;
