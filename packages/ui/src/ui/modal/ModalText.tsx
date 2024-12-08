import clsx from "clsx";
import { forwardRef } from "react";
import { modalTextStyle } from "./style.css.js";
import { ModalTextProps } from "./types.js";

const ModalText = ({ className, children }: ModalTextProps) => {
  return <p className={clsx([modalTextStyle, className])}>{children}</p>;
};

const _ModalText = forwardRef(ModalText);
export { _ModalText as ModalText };
