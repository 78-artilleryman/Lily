import clsx from "clsx";
import { forwardRef } from "react";
import { modalBoldTextStyle } from "./style.css.js";
import { ModalTextProps } from "./types.js";

const ModalBoldText = ({ className, children }: ModalTextProps) => {
  return <h3 className={clsx([modalBoldTextStyle, className])}>{children}</h3>;
};

const _ModalBoldText = forwardRef(ModalBoldText);
export { _ModalBoldText as ModalBoldText };
