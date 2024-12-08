import clsx from "clsx";
import { forwardRef } from "react";
import { ModalTextProps } from "./types.js";

const ModalBoldText = ({ className, children }: ModalTextProps) => {
  return <h3 className={clsx([className])}>{children}</h3>;
};

const _ModalBoldText = forwardRef(ModalBoldText);
export { _ModalBoldText as ModalBoldText };
