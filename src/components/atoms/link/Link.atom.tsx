import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: string | React.ReactNode;
  target?: LinkTarget;
  className?: string;
  onClick?(): void;
};

export enum LinkTarget {
  Blank = "_blank",
  Self = "_self",
}

const LinkAtom = ({ href, children, target, className, onClick }: Props) => {
  return (
    <Link href={href} target={target} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default LinkAtom;
